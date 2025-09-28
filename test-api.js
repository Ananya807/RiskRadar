#!/usr/bin/env node

// Simple API test script to verify the integration
// Run this with: node test-api.js

const API_BASE_URL = 'http://localhost:5001/api';
const API_KEY = 'dev-123';

const testApiEndpoint = async (endpoint, description) => {
  try {
    console.log(`Testing ${description}...`);
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log(`✅ ${description} - SUCCESS`);
      console.log('Response:', JSON.stringify(data, null, 2));
      return true;
    } else {
      console.log(`❌ ${description} - FAILED`);
      console.log(`Status: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ${description} - ERROR`);
    console.log('Error:', error.message);
    return false;
  }
};

const runTests = async () => {
  console.log('🔍 Testing RiskRadar API Integration');
  console.log('=====================================');
  console.log(`Base URL: ${API_BASE_URL}`);
  console.log(`API Key: ${API_KEY}`);
  console.log('');

  const tests = [
    ['/health', 'Health Check'],
    ['/risk/10001', 'Risk Data for ZIP 10001'],
    ['/crime/10001', 'Crime Data for ZIP 10001'],
    ['/disaster/10001', 'Disaster Data for ZIP 10001'],
    ['/weather/10001', 'Weather Data for ZIP 10001'],
    ['/risk', 'General Risk Data'],
  ];

  let passedTests = 0;
  const totalTests = tests.length;

  for (const [endpoint, description] of tests) {
    const success = await testApiEndpoint(endpoint, description);
    if (success) passedTests++;
    console.log(''); // Empty line between tests
  }

  console.log('=====================================');
  console.log(`Tests Results: ${passedTests}/${totalTests} passed`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All tests passed! API integration is working correctly.');
  } else if (passedTests === 0) {
    console.log('🚨 All tests failed. Make sure the API server is running on http://localhost:5001');
    console.log('   and that it accepts the x-api-key header with value "dev-123"');
  } else {
    console.log('⚠️  Some tests failed. Check the API endpoints and server configuration.');
  }
};

// Run the tests
runTests().catch(console.error);