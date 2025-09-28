import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollFadeSection } from './ScrollFadeSection';
import { ScrollFadeImage } from './ScrollFadeImage';

interface RiskData {
  type: 'crime' | 'disaster' | 'weather';
  level: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  time: string;
}

export function ZipCodeSearch() {
  const [zipCode, setZipCode] = useState('');
  const [searchResults, setSearchResults] = useState<RiskData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in production this would come from your crime/disaster APIs
  const mockData: { [key: string]: RiskData[] } = {
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

  const handleSearch = async () => {
    if (!zipCode || zipCode.length !== 5) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = mockData[zipCode] || [
        { type: 'crime', level: 'low', title: 'No Recent Activity', description: 'This area appears safe', time: '1 hour ago' },
        { type: 'disaster', level: 'low', title: 'No Current Threats', description: 'All systems normal', time: 'Real-time' },
        { type: 'weather', level: 'low', title: 'Normal Conditions', description: 'No weather alerts', time: 'Real-time' }
      ];
      setSearchResults(results);
      setIsLoading(false);
    }, 1500);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'crime': return '🚔';
      case 'disaster': return '⚠️';
      case 'weather': return '🌤️';
      default: return '📊';
    }
  };

  return (
    <section id="search" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollFadeSection fadeDirection="up" className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Live Monitoring</Badge>
          <h2 className="text-4xl lg:text-5xl mb-6 font-space font-bold text-gray-900">
            Check Your Area's Risk Level
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            Enter your zip code to get real-time crime statistics, disaster alerts, and safety recommendations for your specific location.
          </p>
        </ScrollFadeSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Search Interface */}
          <ScrollFadeSection fadeDirection="left">
            <Card className="p-8 border-0 shadow-xl bg-white">
              <h3 className="text-2xl font-space font-bold text-gray-900 mb-6">Search by Location</h3>
              
              <div className="flex gap-4 mb-6">
                <Input
                  type="text"
                  placeholder="Enter ZIP code (e.g., 10001)"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  className="flex-1 text-lg py-3 px-4 border-2 border-gray-200 focus:border-blue-500 rounded-lg font-inter"
                  maxLength={5}
                />
                <Button
                  onClick={handleSearch}
                  disabled={zipCode.length !== 5 || isLoading}
                  className="gradient-secondary text-white px-8 py-3 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? '🔍' : 'Search'}
                </Button>
              </div>

              <div className="text-sm text-gray-500 font-inter mb-8">
                Try these sample codes: <span className="font-bold text-blue-600">10001</span> (NYC), <span className="font-bold text-blue-600">90210</span> (Beverly Hills), <span className="font-bold text-blue-600">33101</span> (Miami)
              </div>

              {/* Results */}
              {searchResults && (
                <div className="space-y-4">
                  <h4 className="text-lg font-space font-bold text-gray-900 mb-4">
                    Current Risk Assessment for {zipCode}
                  </h4>
                  
                  {searchResults.map((risk, index) => (
                    <ScrollFadeSection key={index} fadeDirection="up" delay={index * 100}>
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{getTypeIcon(risk.type)}</span>
                            <div>
                              <h5 className="font-inter font-semibold text-gray-900 capitalize">{risk.type}</h5>
                              <p className="text-sm text-gray-500 font-inter">{risk.time}</p>
                            </div>
                          </div>
                          <Badge className={`${getLevelColor(risk.level)} border font-inter text-xs`}>
                            {risk.level.toUpperCase()}
                          </Badge>
                        </div>
                        <h6 className="font-inter font-medium text-gray-800 mb-1">{risk.title}</h6>
                        <p className="text-sm text-gray-600 font-inter">{risk.description}</p>
                      </div>
                    </ScrollFadeSection>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="text-center py-8">
                  <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600 font-inter">Analyzing risk data for {zipCode}...</p>
                </div>
              )}
            </Card>
          </ScrollFadeSection>

          {/* Map Visualization */}
          <ScrollFadeSection fadeDirection="right">
            <Card className="p-8 border-0 shadow-xl bg-white">
              <h3 className="text-2xl font-space font-bold text-gray-900 mb-6">Live Risk Map</h3>
              
              <div className="relative">
                <ScrollFadeImage
                  src="https://images.unsplash.com/photo-1639060015191-9d83063eab2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFwJTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTAxMjgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Interactive risk monitoring map dashboard"
                  className="h-80 rounded-lg overflow-hidden"
                  fadeType="basic"
                />
                
                {/* Map Overlay UI */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                
                {/* Risk Indicators */}
                <div className="absolute top-4 left-4 space-y-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-inter font-medium">Low Risk Areas</span>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-inter font-medium">Medium Risk Areas</span>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="font-inter font-medium">High Risk Areas</span>
                    </div>
                  </div>
                </div>

                {/* Search Result Pin */}
                {searchResults && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg animate-pulse">
                      📍
                    </div>
                    <div className="bg-white rounded-lg px-3 py-1 mt-2 shadow-lg text-sm font-inter font-medium">
                      {zipCode}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-space font-bold text-blue-600">24/7</div>
                    <div className="text-sm font-inter text-blue-800">Live Monitoring</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-space font-bold text-green-600">500+</div>
                    <div className="text-sm font-inter text-green-800">Data Sources</div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 font-inter">
                  <p className="mb-2">
                    <span className="font-semibold">Real-time Integration:</span> Crime databases, weather services, emergency alerts, and disaster monitoring systems.
                  </p>
                  <p>
                    <span className="font-semibold">API Sources:</span> Police departments, NOAA, FEMA, local emergency services, and community reports.
                  </p>
                </div>
              </div>
            </Card>
          </ScrollFadeSection>
        </div>
      </div>
    </section>
  );
}