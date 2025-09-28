import { ScrollFadeSection } from './ScrollFadeSection';

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <ScrollFadeSection fadeDirection="left" delay={200}>
        <div className="flex items-center">
          <div className="w-10 h-10 gradient-primary rounded-lg mr-3 flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-space font-bold text-lg">R</span>
          </div>
          <span className="text-2xl font-space font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            RiskRadar
          </span>
        </div>
      </ScrollFadeSection>
      
      <ScrollFadeSection fadeDirection="right" delay={400}>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a href="#home" className="text-gray-700 hover:text-orange-600 no-underline font-inter font-medium transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-700 hover:text-orange-600 no-underline font-inter font-medium transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#search" className="text-gray-700 hover:text-orange-600 no-underline font-inter font-medium transition-colors">
                Search
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="gradient-primary text-white px-6 py-2.5 rounded-full no-underline font-inter font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Learn More
              </a>
            </li>
          </ul>
        </nav>
      </ScrollFadeSection>
    </header>
  );
}