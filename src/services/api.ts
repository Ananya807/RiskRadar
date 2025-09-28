// API service for RiskRadar
// Base configuration for all API calls

const API_BASE_URL = 'http://localhost:5001/api';
const API_KEY = 'dev-123';

// Common headers for all API requests
const getHeaders = () => ({
  'Content-Type': 'application/json',
  'x-api-key': API_KEY,
});

// Generic API call function with error handling
const apiCall = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    ...options,
    headers: {
      ...getHeaders(),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

// Types for API responses
export interface RiskData {
  type: 'crime' | 'disaster' | 'weather';
  level: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  time: string;
}

export interface ApiRiskResponse {
  zipCode: string;
  risks: RiskData[];
  lastUpdated: string;
}

// API service functions
export const apiService = {
  // Get risk data for a specific zip code
  getRiskByZipCode: async (zipCode: string): Promise<ApiRiskResponse> => {
    return apiCall<ApiRiskResponse>(`/risk/${zipCode}`);
  },

  // Get general risk data
  getRiskData: async (): Promise<RiskData[]> => {
    return apiCall<RiskData[]>('/risk');
  },

  // Get crime data for a specific zip code
  getCrimeByZipCode: async (zipCode: string): Promise<RiskData[]> => {
    return apiCall<RiskData[]>(`/crime/${zipCode}`);
  },

  // Get disaster data for a specific zip code
  getDisasterByZipCode: async (zipCode: string): Promise<RiskData[]> => {
    return apiCall<RiskData[]>(`/disaster/${zipCode}`);
  },

  // Get weather data for a specific zip code
  getWeatherByZipCode: async (zipCode: string): Promise<RiskData[]> => {
    return apiCall<RiskData[]>(`/weather/${zipCode}`);
  },

  // Health check endpoint
  healthCheck: async (): Promise<{ status: string; timestamp: string }> => {
    return apiCall<{ status: string; timestamp: string }>('/health');
  },
};

// Helper function to combine multiple risk data sources
export const combineRiskData = async (zipCode: string): Promise<RiskData[]> => {
  try {
    const [crimeData, disasterData, weatherData] = await Promise.allSettled([
      apiService.getCrimeByZipCode(zipCode),
      apiService.getDisasterByZipCode(zipCode),
      apiService.getWeatherByZipCode(zipCode),
    ]);

    const allRisks: RiskData[] = [];

    if (crimeData.status === 'fulfilled') {
      allRisks.push(...crimeData.value);
    }
    if (disasterData.status === 'fulfilled') {
      allRisks.push(...disasterData.value);
    }
    if (weatherData.status === 'fulfilled') {
      allRisks.push(...weatherData.value);
    }

    return allRisks;
  } catch (error) {
    console.error('Error combining risk data:', error);
    throw error;
  }
};

export default apiService;