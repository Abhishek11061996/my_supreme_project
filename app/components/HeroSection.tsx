'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
});

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        video.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', () => {
        console.error('Video failed to load');
      });

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1200px] flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          poster="/assets/images/video-poster.jpg" 
        >
          <source src="/assets/videos/automotive.mp4" type="video/mp4" />
          <source src="/assets/videos/automotive.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="text-white text-center">
              <p>Loading video...</p>
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className={`${manrope.className} relative z-10 text-center text-white px-4 w-full max-w-6xl`}>
        <p className="font-normal text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8">
          Performance in motion
        </p>
        <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-2">
          Soft Trims and NVH Solutions
        </h1>
        <h2 className="font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
          for seamless rides
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;