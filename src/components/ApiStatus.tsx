import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

interface ApiStatusProps {
  className?: string;
}

export function ApiStatus({ className = '' }: ApiStatusProps) {
  const [status, setStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [lastCheck, setLastCheck] = useState<string>('');

  const checkApiHealth = async () => {
    try {
      setStatus('checking');
      await apiService.healthCheck();
      setStatus('online');
      setLastCheck(new Date().toLocaleTimeString());
    } catch (error) {
      console.error('API health check failed:', error);
      setStatus('offline');
      setLastCheck(new Date().toLocaleTimeString());
    }
  };

  useEffect(() => {
    checkApiHealth();
    // Check every 30 seconds
    const interval = setInterval(checkApiHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusDisplay = () => {
    switch (status) {
      case 'checking':
        return { color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', icon: '🔄', text: 'Checking API...' };
      case 'online':
        return { color: 'text-green-600', bg: 'bg-green-50 border-green-200', icon: '🟢', text: 'API Online' };
      case 'offline':
        return { color: 'text-red-600', bg: 'bg-red-50 border-red-200', icon: '🔴', text: 'API Offline' };
    }
  };

  const statusDisplay = getStatusDisplay();

  return (
    <div className={`border rounded-lg p-3 ${statusDisplay.bg} ${className}`}>
      <div className={`flex items-center gap-2 text-sm ${statusDisplay.color}`}>
        <span className="animate-pulse">{statusDisplay.icon}</span>
        <span className="font-inter font-medium">{statusDisplay.text}</span>
        {lastCheck && (
          <span className="text-xs opacity-75">
            Last check: {lastCheck}
          </span>
        )}
      </div>
      {status === 'offline' && (
        <div className="mt-2 text-xs text-gray-600">
          Make sure the API server is running on http://localhost:5001
        </div>
      )}
    </div>
  );
}