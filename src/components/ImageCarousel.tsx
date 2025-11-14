'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export interface CarouselSlide {
  image: string;
  label: string;
  alt?: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  autoplayDuration?: number;
  showControls?: boolean;
  showViewAll?: boolean;
  viewAllHref?: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImageCarousel({
  slides,
  autoplayDuration = 4000,
  showControls = true,
  showViewAll = true,
  viewAllHref = '#',
  className = '',
  aspectRatio = '2/1',
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Create infinite loop by duplicating slides
  const extendedSlides = [...slides, ...slides, ...slides];
  const actualIndex = currentIndex % slides.length;

  const updateProgress = () => {
    if (isPlaying) {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = (elapsed / autoplayDuration) * 100;
      setProgress(Math.min(newProgress, 100));
    }
  };

  const startAutoplay = () => {
    startTimeRef.current = Date.now();
    setProgress(0);

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      startTimeRef.current = Date.now();
      setProgress(0);
    }, autoplayDuration);

    progressRef.current = setInterval(updateProgress, 50);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);
  };

  const resetAutoplay = () => {
    stopAutoplay();
    if (isPlaying) startAutoplay();
  };

  // Reset to middle set when reaching the end
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex >= slides.length * 2) {
        setIsTransitioning(false);
        setCurrentIndex(slides.length);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      } else if (currentIndex < slides.length) {
        setIsTransitioning(false);
        setCurrentIndex(slides.length * 2 - 1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener('transitionend', handleTransitionEnd);
      return () => track.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, [currentIndex, slides.length]);

  useEffect(() => {
    // Start from the middle set
    setCurrentIndex(slides.length);
  }, [slides.length]);

  // Simple scroll listener to check visibility
  useEffect(() => {
    const checkVisibility = () => {
      if (trackRef.current && !hasStarted) {
        const rect = trackRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          console.log('Carousel is visible, starting autoplay');
          setHasStarted(true);
          setIsPlaying(true);
        }
      }
    };

    // Check on mount and after a short delay to ensure layout is ready
    checkVisibility();
    const timer = setTimeout(checkVisibility, 100);

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => stopAutoplay();
  }, [isPlaying, autoplayDuration]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    resetAutoplay();
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className={`relative w-full flex items-center justify-center pt-10 pb-16 ${className}`}>
      {/* Carousel Wrapper - Added padding to show partial slides */}
      <div className="relative w-full max-w-[100vw] overflow-hidden px-0 lg:px-[25vw]">
        <div
          ref={trackRef}
          className={`flex gap-[2vw] ${isTransitioning ? 'transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]' : ''}`}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 2}vw))`,
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full relative transition-opacity duration-[800ms]`}
              style={{ aspectRatio }}
            >
              <div className="w-full h-full rounded-lg overflow-hidden relative group ">
                <Image
                  src={slide.image}
                  alt={slide.alt || slide.label}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={90}
                  priority={index < 4}
                />
                <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full text-xs font-medium text-white
                opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {slide.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showControls && (
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-6 sm:px-10 pointer-events-none z-10">
          <button
            onClick={prevSlide}
            className="w-[40px] h-[40px] bg-white backdrop-blur-md rounded-full pointer-events-auto transition-all duration-300 hover:bg-white/20 hover:scale-110 flex items-center justify-center text-[var(--brand-blue)]"
            aria-label="Previous slide"
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path
                d="M10 2L2 10L10 18"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-[40px] h-[40px] bg-white backdrop-blur-md rounded-full pointer-events-auto transition-all duration-300 hover:bg-white/20 hover:scale-110 flex items-center justify-center text-[var(--brand-blue)]"
            aria-label="Next slide"
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path
                d="M2 2L10 10L2 18"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 sm:px-10 z-10">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="text-white">
                <rect width="3" height="12" rx="1" fill="white" />
                <rect x="7" width="3" height="12" rx="1" fill="white" />
              </svg>
            ) : (
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="text-white">
                <path d="M0 0L10 6L0 12V0Z" fill="white" />
              </svg>
            )}
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center px-6 py-3">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 relative overflow-hidden ${index === actualIndex
                  ? 'w-8 bg-white/50'
                  : 'w-1 bg-white/30'
                  }`}
              >
                {index === actualIndex && (
                  <div
                    className="absolute top-0 left-0 bg-white h-full transition-all duration-100 linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* View All Link */}
          {showViewAll ? (
            <a
              href={viewAllHref}
              className="text-white text-xs uppercase tracking-wider transition-opacity duration-300 hover:opacity-70"
            >
              View all
            </a>
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
      )}
    </div>
  );
}