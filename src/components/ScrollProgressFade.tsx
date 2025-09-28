import { useEffect, useRef, useState } from 'react';

interface ScrollProgressFadeProps {
  children: React.ReactNode;
  className?: string;
  startFade?: number; // 0-1, when to start fading (0 = top of viewport, 1 = bottom)
  endFade?: number;   // 0-1, when to finish fading
  reverse?: boolean;  // If true, fades out instead of in
}

export function ScrollProgressFade({ 
  children, 
  className = '',
  startFade = 0.2,
  endFade = 0.8,
  reverse = false
}: ScrollProgressFadeProps) {
  const [opacity, setOpacity] = useState(reverse ? 1 : 0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate the element's position relative to the viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate progress (0 = element just entering viewport, 1 = element just leaving)
      const progress = (windowHeight - elementTop) / (windowHeight + elementHeight);
      
      // Apply fade range
      let fadeProgress = 0;
      if (progress >= startFade && progress <= endFade) {
        fadeProgress = (progress - startFade) / (endFade - startFade);
      } else if (progress > endFade) {
        fadeProgress = 1;
      }
      
      // Clamp between 0 and 1
      fadeProgress = Math.max(0, Math.min(1, fadeProgress));
      
      // Apply reverse if needed
      const finalOpacity = reverse ? 1 - fadeProgress : fadeProgress;
      setOpacity(finalOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [startFade, endFade, reverse]);

  return (
    <div 
      ref={elementRef}
      className={`transition-opacity duration-100 ease-out ${className}`}
      style={{ opacity }}
    >
      {children}
    </div>
  );
}