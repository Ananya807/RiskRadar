import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ParallaxFadeBackgroundProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function ParallaxFadeBackground({ 
  src, 
  alt, 
  children, 
  className = '',
  intensity = 0.5
}: ParallaxFadeBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate parallax offset
      const scrolled = window.scrollY;
      setScrollY(scrolled * intensity);

      // Calculate opacity based on element position
      if (rect.bottom < 0 || rect.top > windowHeight) {
        setOpacity(0);
      } else {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        const maxDistance = windowHeight / 2 + rect.height / 2;
        const calculatedOpacity = Math.max(0, 1 - (distance / maxDistance) * 1.5);
        setOpacity(calculatedOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return (
    <div 
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY}px)`,
          opacity: opacity,
        }}
      >
        <ImageWithFallback 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover scale-110"
        />
      </div>
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}