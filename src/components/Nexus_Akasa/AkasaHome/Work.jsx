import React, { useState, useRef, useCallback, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCircle, FaRegCircle, FaArrowsAltH } from 'react-icons/fa';
import { BiSlider } from 'react-icons/bi';

function Work() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const hintTimeoutRef = useRef(null);

  // Array of 4 image pairs
  const imagePairs = [
    {
      before: '/assets/akasa/before3.png',
      after: '/assets/akasa/after3.png',
      title: 'Project 1'
    },
    {
      before: '/assets/akasa/before2.png',
      after: '/assets/akasa/after2.0.png',
      title: 'Project 2'
    },
    {
      before: '/assets/akasa/before4.png',
      after: '/assets/akasa/after4.png',
      title: 'Project 4'
    }
  ];

  const currentPair = imagePairs[currentPairIndex];

  // Hide hint after 5 seconds or on first interaction
  useEffect(() => {
    hintTimeoutRef.current = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    return () => {
      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
      }
    };
  }, []);

  // Use requestAnimationFrame for smooth sliding
  const updateSliderPosition = useCallback((percentage) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    });
  }, []);

  const handleInteraction = useCallback((clientX) => {
    if (!containerRef.current || !isDragging) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    updateSliderPosition(percentage);
  }, [isDragging, updateSliderPosition]);

  const handleMouseMove = useCallback((e) => {
    handleInteraction(e.clientX);
  }, [handleInteraction]);

  const handleTouchMove = useCallback((e) => {
    handleInteraction(e.touches[0].clientX);
  }, [handleInteraction]);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    setShowHint(false);
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    updateSliderPosition(percentage);
  }, [updateSliderPosition]);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    setShowHint(false);
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    updateSliderPosition(percentage);
  }, [updateSliderPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
      }
    };
  }, []);

  const goToPrevious = () => {
    setCurrentPairIndex((prev) => (prev === 0 ? imagePairs.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const goToNext = () => {
    setCurrentPairIndex((prev) => (prev === imagePairs.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  return (
    <div 
      className="bg-[linear-gradient(to_right,rgba(1,24,38,1),rgba(1,24,38,0.7)),url('/assets/AkasaWorkImage.jpg')] bg-cover bg-center py-8 sm:py-10 md:py-12 lg:py-16 xl:py-28"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="relative mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none uppercase font-extrabold text-transparent select-none font-noir"
          style={{
            fontSize: "clamp(30px, 8vw, 110px)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          work
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <h2 className="m-0 text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-tight font-bold uppercase text-[#F4D48D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] font-noir">
            work
          </h2>
        </div>
      </div>

      <p className='text-white text-center max-w-[85%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[550px] m-auto text-base sm:text-lg md:text-xl leading-relaxed px-4'>
        Our commitment to quality and services ensure our clients happy. We're happy to make you feel more comfortable on your home.
      </p>

      {/* Interactive Hint */}
      {showHint && (
        <div className="flex items-center justify-center mt-4 mb-2">
          <div className="bg-[#F4D48D] bg-opacity-20 text-[#F4D48D] px-4 py-2 rounded-full flex items-center gap-2 text-sm animate-pulse border border-[#F4D48D] border-opacity-30">
            <FaArrowsAltH className="w-4 h-4 animate-bounce" />
            <span>Drag to compare</span>
            <FaArrowsAltH className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      )}

      {/* Before/After Comparison Slider - Improved Version */}
      <div
        ref={containerRef}
        className='max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[750px] m-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 relative overflow-hidden rounded-lg cursor-col-resize select-none touch-none group'
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ aspectRatio: '16/9' }}
      >
        {/* Before Image - Full background */}
        <div className="absolute inset-0">
          <img
            src={currentPair.before}
            alt="Before"
            className='w-full h-full object-cover select-none pointer-events-none'
            draggable="false"
          />
        </div>

        {/* After Image with CSS clip-path for smooth reveal */}
        <div className="absolute inset-0">
          <img
            src={currentPair.after}
            alt="After"
            className='w-full h-full object-cover select-none pointer-events-none'
            draggable="false"
            style={{
              clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
              transition: isDragging ? 'none' : 'clip-path 0.1s ease-out'
            }}
          />
        </div>

        {/* Slider Handle */}
        <div
          className='absolute top-0 bottom-0 w-1 bg-white cursor-col-resize transition-all duration-75 group-hover:shadow-lg'
          style={{
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)',
            transition: isDragging ? 'none' : 'left 0.1s ease-out'
          }}
        >
          {/* Handle Button */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition-all duration-150 ${
            isDragging ? 'scale-125 shadow-xl ring-2 ring-[#F4D48D]' : 'hover:scale-110 group-hover:ring-2 group-hover:ring-[#F4D48D]'
          }`}>
            <BiSlider className="w-4 h-4 text-gray-800" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-sm font-medium border border-white border-opacity-20 select-none pointer-events-none flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          Before
        </div>
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-sm font-medium border border-white border-opacity-20 select-none pointer-events-none flex items-center gap-2">
          After
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>

        {/* Slider Track Indicator */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-xs font-medium border border-white border-opacity-20 select-none pointer-events-none flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <BiSlider className="w-3 h-3" />
          Slide to compare
        </div>
      </div>

      {/* Enhanced Instructions */}
      <div className="text-center mt-4">
        <p className="text-white text-opacity-70 text-sm flex items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <BiSlider className="w-4 h-4" />
            Drag the slider
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <FaArrowsAltH className="w-3 h-3" />
            Compare before & after
          </span>
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className='flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12'>
        <button
          onClick={goToPrevious}
          className='flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-[#F4D48D] text-gray-800 font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base hover:scale-105 active:scale-95 border border-[#F4D48D] border-opacity-30 group'
        >
          <FaChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Before
        </button>

        {/* Indicator Dots */}
        <div className='flex gap-3 items-center'>
          {imagePairs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPairIndex(index);
                setSliderPosition(50);
              }}
              className={`transition-all duration-300 ${
                index === currentPairIndex 
                  ? 'text-[#F4D48D] scale-125' 
                  : 'text-white text-opacity-50 hover:text-opacity-75 hover:scale-110'
              }`}
              aria-label={`Go to project ${index + 1}`}
            >
              {index === currentPairIndex ? (
                <FaCircle className="w-3 h-3" />
              ) : (
                <FaRegCircle className="w-3 h-3" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={goToNext}
          className='flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-[#F4D48D] text-gray-800 font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base hover:scale-105 active:scale-95 border border-[#F4D48D] border-opacity-30 group'
        >
          After
          <FaChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}

export default Work;