import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image: "https://i.postimg.cc/7PzKvH8s/Screenshot-2024-08-02-174829.png"
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image: "https://images.unsplash.com/photo-1581836499506-4a660b39478a"
  },
  {
    title: "Mount Fuji",
    subtitle: "Japan",
    description: "Land of the rising sun",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
  },
];

const CoverFlowSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: x * 15 - 7.5, y: y * 15 - 7.5 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative w-full h-[400px] bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((slide, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          
          return (
            <div
              key={slide.title}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `
                  perspective(1000px)
                  rotateY(${offset * 12 + (index === activeIndex ? tilt.x : 0)}deg)
                  rotateX(${index === activeIndex ? -tilt.y : 0}deg)
                  translateX(${offset * 35}%)
                  translateZ(${-absOffset * 150}px)
                  scale(${1 - absOffset * 0.15})
                `,
                opacity: 1 - absOffset * 0.4,
                zIndex: activeIndex === index ? 1 : 0,
                filter: `blur(${absOffset * 0.8}px)`
              }}
            >
              <div className="relative w-[280px] h-[320px] rounded-xl overflow-hidden shadow-lg border border-gray-700/50">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end">
                  <h2 className="text-xl font-bold text-white mb-1">{slide.title}</h2>
                  <h3 className="text-sm text-gray-300 mb-2">{slide.subtitle}</h3>
                  <p className="text-xs text-gray-400">{slide.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full backdrop-blur-sm hover:bg-black/60 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full backdrop-blur-sm hover:bg-black/60 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? 'bg-white w-4' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoverFlowSlider;
