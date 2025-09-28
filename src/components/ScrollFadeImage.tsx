import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ScrollFadeImageProps {
  src: string;
  alt: string;
  className?: string;
  fadeType?: 'basic' | 'progressive' | 'parallax';
  threshold?: number;
}

export function ScrollFadeImage({ 
  src, 
  alt, 
  className = '', 
  fadeType = 'basic',
  threshold = 0.1 
}: ScrollFadeImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (fadeType === 'basic') {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Define these variables outside the if blocks so they can be reused
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      if (fadeType === 'progressive') {
        // Calculate how much of the element is visible
        if (elementBottom < 0 || elementTop > windowHeight) {
          setScrollProgress(0);
        } else {
          const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
          const totalHeight = rect.height;
          const progress = Math.max(0, Math.min(1, visibleHeight / totalHeight));
          setScrollProgress(progress);
        }
      } else if (fadeType === 'parallax') {
        // Fade based on scroll position relative to viewport
        const center = windowHeight / 2;
        const elementCenter = elementTop + rect.height / 2;
        const distance = Math.abs(center - elementCenter);
        const maxDistance = windowHeight;
        const progress = Math.max(0, 1 - distance / maxDistance);
        setScrollProgress(progress);
      }
    };

    if (fadeType !== 'basic') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial calculation
    }

    return () => {
      observer.disconnect();
      if (fadeType !== 'basic') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [fadeType, threshold]);

  const getOpacity = () => {
    switch (fadeType) {
      case 'basic':
        return isVisible ? 1 : 0;
      case 'progressive':
      case 'parallax':
        return scrollProgress;
      default:
        return 1;
    }
  };

  const getTransform = () => {
    if (fadeType === 'basic' && !isVisible) {
      return 'translateY(20px)';
    }
    if (fadeType === 'parallax') {
      const translateY = (1 - scrollProgress) * 30;
      return `translateY(${translateY}px)`;
    }
    return 'translateY(0)';
  };

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: getOpacity(),
        transform: getTransform(),
      }}
    >
      <ImageWithFallback 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}