import React, { useEffect, useRef, useState } from 'react';

const StoryCard = ({ title, content, isEmotional = false, isDarkest = false, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const cardClasses = `
    story-card
    ${isVisible ? 'animate-in' : ''}
    ${isDarkest ? 'broken-heart-section min-h-screen' : ''}
    ${isEmotional ? 'emotional-section' : 'py-12 md:py-16'}
    ${className}
  `;

  return (
    <div ref={cardRef} className={cardClasses}>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className={`
          glassmorphism rounded-2xl p-6 md:p-10 lg:p-12
          ${isDarkest ? 'bg-black/40 border-red-900/30 shadow-2xl shadow-red-900/20' : ''}
          ${isEmotional ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/20'}
        `}>
          {title && (
            <h2 className={`
              text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8
              ${isDarkest ? 'text-red-400 text-shadow-lg' : 'gradient-text'}
              ${isEmotional ? 'text-center' : ''}
            `}>
              {title}
            </h2>
          )}
          <div className={`
            text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-line
            ${isDarkest ? 'text-gray-200' : 'text-gray-100'}
            ${isEmotional ? 'text-center text-xl md:text-2xl' : ''}
          `}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
