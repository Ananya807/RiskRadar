import { useEffect, useRef, useState } from 'react';

interface ScrollFadeSectionProps {
  children: React.ReactNode;
  className?: string;
  fadeDirection?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function ScrollFadeSection({ 
  children, 
  className = '', 
  fadeDirection = 'up',
  delay = 0,
  duration = 700,
  threshold = 0.1 
}: ScrollFadeSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getInitialTransform = () => {
    switch (fadeDirection) {
      case 'up':
        return 'translateY(40px)';
      case 'down':
        return 'translateY(-40px)';
      case 'left':
        return 'translateX(40px)';
      case 'right':
        return 'translateX(-40px)';
      case 'scale':
        return 'scale(0.9)';
      default:
        return 'translateY(40px)';
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateX(0) scale(1)' : getInitialTransform(),
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}