const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// API Key validation middleware
const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== 'dev-123') {
    return res.status(401).json({ error: 'Invalid or missing API key' });
  }
  next();
};

// Apply API key validation to all /api routes
app.use('/api', validateApiKey);

// Mock data for different zip codes
const mockRiskData = {
  '10001': [
    { type: 'crime', level: 'medium', title: 'Vehicle Break-ins', description: 'Reported in Midtown area', time: '2 hours ago' },
    { type: 'weather', level: 'low', title: 'Light Rain', description: 'Expected this evening', time: '30 min ago' },
    { type: 'disaster', level: 'low', title: 'No Current Threats', description: 'All systems normal', time: 'Real-time' }
  ],
  '90210': [
    { type: 'crime', level: 'low', title: 'Low Crime Activity', description: 'Peaceful neighborhood', time: '1 hour ago' },
    { type: 'disaster', level: 'medium', title: 'Fire Risk', description: 'Dry conditions present', time: '45 min ago' },
    { type: 'weather', level: 'low', title: 'Clear Skies', description: 'No weather alerts', time: 'Real-time' }
  ],
  '33101': [
    { type: 'disaster', level: 'high', title: 'Hurricane Watch', description: 'Tropical system approaching', time: '15 min ago' },
    { type: 'crime', level: 'medium', title: 'Theft Reports', description: 'Downtown area affected', time: '3 hours ago' },
    { type: 'weather', level: 'critical', title: 'Severe Storm Warning', description: 'Take shelter immediately', time: 'Just now' }
  ]
};

// Default risk data for unknown zip codes
const defaultRiskData = [
  { type: 'crime', level: 'low', title: 'No Recent Activity', description: 'This area appears safe', time: '1 hour ago' },
  { type: 'disaster', level: 'low', title: 'No Current Threats', description: 'All systems normal', time: 'Real-time' },
  { type: 'weather', level: 'low', title: 'Normal Conditions', description: 'No weather alerts', time: 'Real-time' }
];

// API Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    message: 'RiskRadar API is running'
  });
});

// Get all risk data for a zip code
app.get('/api/risk/:zipCode', (req, res) => {
  const { zipCode } = req.params;
  const risks = mockRiskData[zipCode] || defaultRiskData;
  
  res.json({
    zipCode,
    risks,
    lastUpdated: new Date().toISOString()
  });
});

// Get crime data for a zip code
app.get('/api/crime/:zipCode', (req, res) => {
  const { zipCode } = req.params;
  const allRisks = mockRiskData[zipCode] || defaultRiskData;
  const crimeRisks = allRisks.filter(risk => risk.type === 'crime');
  
  res.json(crimeRisks);
});

// Get disaster data for a zip code
app.get('/api/disaster/:zipCode', (req, res) => {
  const { zipCode } = req.params;
  const allRisks = mockRiskData[zipCode] || defaultRiskData;
  const disasterRisks = allRisks.filter(risk => risk.type === 'disaster');
  
  res.json(disasterRisks);
});

// Get weather data for a zip code
app.get('/api/weather/:zipCode', (req, res) => {
  const { zipCode } = req.params;
  const allRisks = mockRiskData[zipCode] || defaultRiskData;
  const weatherRisks = allRisks.filter(risk => risk.type === 'weather');
  
  res.json(weatherRisks);
});

// General risk data endpoint
app.get('/api/risk', (req, res) => {
  // Return a sample of all risk types
  const sampleRisks = [
    { type: 'crime', level: 'low', title: 'General Crime Activity', description: 'City-wide crime statistics', time: '1 hour ago' },
    { type: 'disaster', level: 'low', title: 'No Active Disasters', description: 'No current disaster alerts', time: 'Real-time' },
    { type: 'weather', level: 'medium', title: 'Weather Advisory', description: 'Check local forecasts', time: '30 min ago' }
  ];
  
  res.json(sampleRisks);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 RiskRadar API Server running on http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔑 API Key required: dev-123 (send as x-api-key header)`);
  console.log('');
  console.log('Available endpoints:');
  console.log(`  GET /api/health`);
  console.log(`  GET /api/risk/:zipCode`);
  console.log(`  GET /api/crime/:zipCode`);
  console.log(`  GET /api/disaster/:zipCode`);
  console.log(`  GET /api/weather/:zipCode`);
  console.log(`  GET /api/risk`);
});