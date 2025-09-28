import { ScrollFadeSection } from './ScrollFadeSection';
import { ScrollFadeImage } from './ScrollFadeImage';

export function HeroSection() {
  return (
    <main id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(249, 115, 22, 0.2) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Section */}
        <section className="space-y-8">
          <ScrollFadeSection fadeDirection="up" delay={600}>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Real-time Risk Monitoring
            </div>
          </ScrollFadeSection>
          
          <ScrollFadeSection fadeDirection="up" delay={800}>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl mb-4 font-space font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Risk
              </span>
              <span className="text-gray-900">Radar</span>
            </h1>
          </ScrollFadeSection>
          
          <ScrollFadeSection fadeDirection="up" delay={1000}>
            <h2 className="text-2xl lg:text-3xl mb-6 text-gray-700 font-inter font-medium">
              Stay Informed. Stay Prepared. 
              <span className="text-orange-600"> Stay Safe.</span>
            </h2>
          </ScrollFadeSection>
          
          <ScrollFadeSection fadeDirection="up" delay={1200}>
            <p className="text-lg leading-relaxed text-gray-600 font-inter mb-8 max-w-lg">
              Advanced risk monitoring system that delivers real-time alerts, 
              location-based assessments, and intelligent safety recommendations to keep you prepared.
            </p>
          </ScrollFadeSection>

          <ScrollFadeSection fadeDirection="up" delay={1400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
                className="gradient-primary text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Try it Out Now!</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-inter font-semibold text-lg hover:border-orange-400 hover:text-orange-600 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </ScrollFadeSection>
        </section>

        {/* Image Section */}
        <section className="relative">
          <ScrollFadeSection fadeDirection="right" delay={1000}>
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative z-10 animate-float">
                <ScrollFadeImage
                  src="https://images.unsplash.com/photo-1753153481105-7a979eabe5a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb250cm9sJTIwcm9vbSUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzU5MDEyNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Advanced control room monitoring system"
                  className="rounded-2xl shadow-2xl overflow-hidden border border-white/20"
                  fadeType="basic"
                />
              </div>
              
              {/* Floating UI Elements */}
              <ScrollFadeSection fadeDirection="up" delay={1600}>
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-orange-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-inter font-medium text-gray-700">Live Monitoring</span>
                  </div>
                </div>
              </ScrollFadeSection>

              <ScrollFadeSection fadeDirection="left" delay={1800}>
                <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-4 border border-red-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">⚠️</span>
                    </div>
                    <div>
                      <div className="text-xs font-inter font-medium text-gray-500">Alert Level</div>
                      <div className="text-sm font-inter font-bold text-red-600">High Risk</div>
                    </div>
                  </div>
                </div>
              </ScrollFadeSection>
            </div>
          </ScrollFadeSection>
        </section>
      </div>
      
      {/* Scroll Indicator */}
      <ScrollFadeSection fadeDirection="up" delay={2000}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-gray-400 text-sm font-inter mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </ScrollFadeSection>
    </main>
  );
}