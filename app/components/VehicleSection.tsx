'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';

type Slide = {
  title: string;
  subtitle: string;
  bullets: string[];
};

type Tab = {
  id: string;
  label: string;
};

const VehicleSolutionsCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('Complete Body');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  // Video loading and error handling
  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedData = () => {
      console.log('Video loaded successfully');
      setIsVideoLoaded(true);
      setVideoError(null);
    };

    const handleError = () => {
      const errorMessage = video?.error?.message || 'Unknown video error';
      console.error('Video error:', errorMessage);
      setVideoError(`Video failed to load: ${errorMessage}`);
      setIsVideoLoaded(false);
    };

    const handleCanPlay = () => {
      video?.play().catch(err => {
        console.warn('Autoplay prevented:', err.message);
        // Don't treat autoplay blocking as a fatal error
      });
    };

    if (video) {
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);

      // Attempt to force load if needed
      video.load();

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  const slides: Slide[] = [
    {
      title: 'Evolving the drive with 360-degree nonwoven solutions',
      subtitle: 'Passenger vehicles: Revving up Nonwoven Innovation from interior to exterior.',
      bullets: [],
    },
    {
      title: 'Commercial vehicles',
      subtitle: '',
      bullets: [
        'A new nonwoven vehicle for a non-woven vehicle',
        'A new nonwoven vehicle for a non-woven vehicle',
      ],
    },
  ];

  const tabs: Tab[] = [
    { id: 'Complete Body', label: 'Complete Body' },
    { id: 'Front', label: 'Front' },
    { id: 'Cabin', label: 'Cabin' },
    { id: 'Truck', label: 'Truck' },
    { id: 'Exterior', label: 'Exterior' },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background Container */}
      <div className="absolute inset-0 w-full h-full bg-black z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          poster="/assets/images/video-poster.jpg" // Optional fallback image
        >
          <source 
            src="/assets/videos/automotive.mp4" 
            type="video/mp4" 
          />
          <source 
            src="/assets/videos/automotive.webm" 
            type="video/webm" 
          />
          Your browser does not support HTML5 video.
        </video>

        {/* Loading and Error States */}
        {!isVideoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="text-white text-center p-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p>Loading video...</p>
            </div>
          </div>
        )}

        {videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-900/70">
            <div className="bg-white text-red-900 p-6 rounded-lg max-w-md mx-4">
              <h2 className="font-bold text-xl mb-2">⚠️ Video Error</h2>
              <p className="mb-4">{videoError}</p>
              <div className="text-sm space-y-2">
                <p>• Check file exists at: <code>public/assets/videos/automotive.mp4</code></p>
                <p>• Verify video format (MP4 H.264)</p>
                <p>• Try a different browser</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-white px-8 md:px-16 lg:px-24 bg-black/40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {slides[activeSlide].title}
          </h1>
          
          {slides[activeSlide].subtitle && (
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-6">
              {slides[activeSlide].subtitle}
            </h2>
          )}

          {slides[activeSlide].bullets.length > 0 && (
            <ul className="space-y-2 mb-8">
              {slides[activeSlide].bullets.map((bullet, index) => (
                <li key={index} className="flex items-center">
                  <FaChevronRight className="mr-2 text-sm" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-black font-semibold'
                    : 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Next Slide Button */}
        <button
          onClick={nextSlide}
          className="absolute bottom-8 right-8 text-white text-sm flex items-center hover:underline"
          aria-label="Next slide"
        >
          Click anywhere for next slide
          <FaChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default VehicleSolutionsCarousel;