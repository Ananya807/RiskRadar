import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ZipCodeSearch } from './components/ZipCodeSearch';
import { ScrollFadeSection } from './components/ScrollFadeSection';
import { ScrollFadeImage } from './components/ScrollFadeImage';
import { ParallaxFadeBackground } from './components/ParallaxFadeBackground';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      {/* Zip Code Search Section */}
      <ZipCodeSearch />
      
      {/* Trust Indicators
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeSection fadeDirection="up" className="text-center mb-8">
            <p className="text-sm font-inter text-gray-500 mb-6">Trusted by emergency services and communities worldwide</p>
          </ScrollFadeSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              { name: "FEMA", delay: 200 },
              { name: "Red Cross", delay: 400 },
              { name: "Emergency.gov", delay: 600 },
              { name: "Weather.gov", delay: 800 }
            ].map((partner, index) => (
              <React.Fragment key={index}>
                <ScrollFadeSection fadeDirection="up" delay={partner.delay}>
                  <div className="text-center">
                    <div className="h-12 bg-gray-300 rounded-lg flex items-center justify-center mb-2">
                      <span className="font-space font-bold text-gray-600">{partner.name}</span>
                    </div>
                  </div>
                </ScrollFadeSection>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollFadeSection fadeDirection="up" className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Advanced Technology</Badge>
            <h2 className="text-4xl lg:text-5xl mb-6 font-space font-bold text-gray-900">
              Real-Time Risk Assessment
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Comprehensive monitoring system that predicts, detects, 
              and alerts you about potential risks in your area.
            </p>
          </ScrollFadeSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <ScrollFadeSection fadeDirection="up" delay={200}>
              <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                <div className="w-16 h-16 gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl mb-4 font-space font-bold text-gray-900">Instant Alerts</h3>
                <p className="text-gray-600 font-inter mb-6">
                  Receive real-time notifications the moment risk levels change in your area
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="font-inter text-gray-700">High Risk Alert: Severe Weather</span>
                  </div>
                </div>
              </Card>
            </ScrollFadeSection>

            <ScrollFadeSection fadeDirection="up" delay={400}>
              <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="w-16 h-16 gradient-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl mb-4 font-space font-bold text-gray-900">Hyper-Local Data</h3>
                <p className="text-gray-600 font-inter mb-6">
                  Precise risk assessments tailored to your exact location with block-level accuracy
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <ScrollFadeImage
                    src="https://images.unsplash.com/photo-1571519729621-a2e761b3efa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwcmFkYXIlMjBzYXRlbGxpdGUlMjB2aWV3fGVufDF8fHx8MTc1OTAxMjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Weather radar satellite view"
                    className="h-24 rounded-lg overflow-hidden"
                    fadeType="basic"
                  />
                </div>
              </Card>
            </ScrollFadeSection>

            <ScrollFadeSection fadeDirection="up" delay={600}>
              <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                <div className="w-16 h-16 gradient-accent rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="text-xl mb-4 font-space font-bold text-gray-900">AI Recommendations</h3>
                <p className="text-gray-600 font-inter mb-6">
                  Smart safety tips and preparation guidelines powered by machine learning
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-left space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="font-inter text-gray-700">Stock emergency supplies</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      <span className="font-inter text-gray-700">Secure outdoor items</span>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollFadeSection>
          </div>

          {/* Feature Image */}
          <ScrollFadeSection fadeDirection="up" delay={800}>
            <div className="relative">
              <ScrollFadeImage
                src="https://cdn.aarp.net/content/dam/aarpe/en/home/personal-technology/find-emergency-alerts-smartphone/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/home-and-family/personal-technology/2023/08/1140-emergency-alerts.jpg"
                alt="Mobile app notifications and alerts"
                className="h-96 rounded-2xl overflow-hidden shadow-2xl"
                fadeType="progressive"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </ScrollFadeSection>
        </div>
      </section>

      {/* Risk Types Section with Parallax */}
      <ParallaxFadeBackground
        src="https://images.unsplash.com/photo-1497163326116-446ff9cbfe51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9ybSUyMGNsb3VkcyUyMGxpZ2h0bmluZyUyMGRyYW1hdGljfGVufDF8fHx8MTc1OTAxMjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Dramatic storm clouds with lightning"
        className="py-24 relative"
        intensity={0.3}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollFadeSection fadeDirection="up">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20 border border-white/30">Risk Monitoring</Badge>
            <h2 className="text-4xl lg:text-5xl mb-8 text-white font-space font-bold">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-gray-200 font-inter mb-12 max-w-3xl mx-auto">
              Monitor multiple types of risks and emergencies with our advanced detection systems
            </p>
          </ScrollFadeSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🌪️", title: "Severe Weather", desc: "Tornadoes, storms, hurricanes", delay: 200 },
              { icon: "🔥", title: "Fire Hazards", desc: "Wildfires, structural fires", delay: 400 },
              { icon: "🌊", title: "Flood Warnings", desc: "Flash floods, storm surges", delay: 600 },
              { icon: "⚠️", title: "Emergency Events", desc: "Safety incidents, evacuations", delay: 800 }
            ].map((item, index) => (
              <ScrollFadeSection key={index} fadeDirection="up" delay={item.delay}>
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="text-lg font-space font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-300 font-inter">{item.desc}</p>
                </Card>
              </ScrollFadeSection>
            ))}
          </div>
        </div>
      </ParallaxFadeBackground>

      {/* Emergency Response Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeSection fadeDirection="left">
              <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">Emergency Response</Badge>
              <h2 className="text-4xl lg:text-5xl mb-6 font-space font-bold text-gray-900">
                When Every Second Counts
              </h2>
              <p className="text-lg text-gray-600 font-inter mb-8">
                Our emergency response integration connects you directly with local authorities 
                and provides real-time coordination during critical situations.
              </p>
              <div className="space-y-4">
                {[
                  "Direct emergency service integration",
                  "Real-time incident coordination", 
                  "Automated evacuation routing",
                  "Community alert networks"
                ].map((feature, index) => (
                  <ScrollFadeSection key={index} fadeDirection="right" delay={index * 100}>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="font-inter text-gray-700">{feature}</span>
                    </div>
                  </ScrollFadeSection>
                ))}
              </div>
            </ScrollFadeSection>

            <ScrollFadeSection fadeDirection="right">
              <ScrollFadeImage
                src="https://images.unsplash.com/photo-1584690237767-9b063e0c6392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZXNwb25zZSUyMHRlYW0lMjBhY3Rpb258ZW58MXx8fHwxNzU5MDEyNDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Emergency response team in action"
                className="rounded-2xl overflow-hidden shadow-2xl"
                fadeType="parallax"
              />
            </ScrollFadeSection>
          </div>
        </div>
      </section>

      {/* Statistics Section
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeSection fadeDirection="up" className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Impact</Badge>
            <h2 className="text-4xl lg:text-5xl mb-6 font-space font-bold text-gray-900">
              Protecting Communities Worldwide
            </h2>
          </ScrollFadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "2.5M+", label: "Lives Protected", desc: "Active users staying safe daily", delay: 200, color: "orange" },
              { number: "99.9%", label: "Alert Accuracy", desc: "Reliable monitoring 24/7/365", delay: 400, color: "blue" },
              { number: "15sec", label: "Average Response", desc: "From detection to notification", delay: 600, color: "green" }
            ].map((stat, index) => (
              <ScrollFadeSection key={index} fadeDirection="up" delay={stat.delay}>
                <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className={`text-6xl lg:text-7xl mb-4 font-space font-bold ${
                    stat.color === 'orange' ? 'text-orange-600' :
                    stat.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                  }`}>
                    {stat.number}
                  </div>
                  <h4 className="text-xl text-gray-900 font-space font-bold mb-2">{stat.label}</h4>
                  <p className="text-gray-600 font-inter">{stat.desc}</p>
                </Card>
              </ScrollFadeSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* City Safety Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeSection fadeDirection="left">
              <ScrollFadeImage
                src="https://images.unsplash.com/photo-1733271751327-140114dbdb4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHNhZmV0eSUyMHVyYmFufGVufDF8fHx8MTc1OTAxMjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Safe urban city skyline"
                className="rounded-2xl overflow-hidden shadow-2xl"
                fadeType="progressive"
              />
            </ScrollFadeSection>

            <ScrollFadeSection fadeDirection="right">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Smart Cities</Badge>
              <h2 className="text-4xl lg:text-5xl mb-6 font-space font-bold text-gray-900">
                Building Safer Cities
              </h2>
              <p className="text-lg text-gray-600 font-inter mb-8">
                Partner with municipal governments and city planners to create comprehensive 
                safety networks that protect entire communities.
              </p>
              {/* <button 
                onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
                className="gradient-secondary text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View Demo
              </button> */}
            </ScrollFadeSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="gradient-dark py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <ScrollFadeSection fadeDirection="up">
            <h2 className="text-4xl lg:text-5xl mb-6 text-white font-space font-bold">
              About RiskRadar
            </h2>
            <p className="text-xl mb-10 text-gray-300 font-inter">
              A demonstration of advanced AI-powered risk monitoring technology that could help keep communities safer and more prepared for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
                className="gradient-primary text-white px-10 py-4 rounded-full text-lg font-inter font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Try the Demo
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-inter font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Features
              </button>
            </div>
          </ScrollFadeSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <ScrollFadeSection fadeDirection="up">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 gradient-primary rounded-lg mr-3 flex items-center justify-center">
                  <span className="text-white font-space font-bold text-lg">R</span>
                </div>
                <span className="text-2xl font-space font-bold">RiskRadar</span>
              </div>
              <p className="text-gray-400 font-inter mb-6">
                A demonstration of advanced AI-powered risk monitoring technology for community safety.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Facebook'].map((social, index) => (
                  <div key={index} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-xs">{social[0]}</span>
                  </div>
                ))}
              </div>
            </ScrollFadeSection>

            <ScrollFadeSection fadeDirection="up" delay={200}>
              <h4 className="font-space font-bold text-lg mb-4">Navigation</h4>
              <ul className="space-y-2 font-inter">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#search" className="text-gray-400 hover:text-white transition-colors">Search Demo</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              </ul>
            </ScrollFadeSection>

            <ScrollFadeSection fadeDirection="up" delay={400}>
              <h4 className="font-space font-bold text-lg mb-4">Technology</h4>
              <ul className="space-y-2 font-inter">
                <li><span className="text-gray-400">React + TypeScript</span></li>
                <li><span className="text-gray-400">Tailwind CSS</span></li>
                <li><span className="text-gray-400">Real-time APIs</span></li>
                <li><span className="text-gray-400">AI Integration</span></li>
              </ul>
            </ScrollFadeSection>

            <ScrollFadeSection fadeDirection="up" delay={600}>
              <h4 className="font-space font-bold text-lg mb-4">Demo Info</h4>
              <ul className="space-y-2 font-inter">
                <li><a href="#search" className="text-gray-400 hover:text-white transition-colors">Try Search</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">View Features</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Project</a></li>
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Back to Top</a></li>
              </ul>
            </ScrollFadeSection>
          </div>

          <ScrollFadeSection fadeDirection="up" delay={800}>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400 font-inter">
                © 2024 RiskRadar Demo. A concept demonstration of emergency monitoring technology.
              </p>
            </div>
          </ScrollFadeSection>
        </div>
      </footer>
    </div>
  );
}