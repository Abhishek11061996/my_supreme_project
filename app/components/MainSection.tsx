'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Manrope } from 'next/font/google';
import { FaPlay, FaPause } from 'react-icons/fa';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

type VehicleType = 'passenger' | 'commercial';
type PassengerSection = 'Complete Body' | 'Front' | 'Cabin' | 'Trunk' | 'Exterior';
type CommercialSection = 'Complete Body' | 'Engine' | 'Cabin';

const MainSection = () => {
  const [activeVehicle, setActiveVehicle] = useState<VehicleType>('passenger');
  const [passengerSection, setPassengerSection] = useState<PassengerSection>('Complete Body');
  const [commercialSection, setCommercialSection] = useState<CommercialSection>('Complete Body');
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSources = {
    passenger: {
      'Complete Body': '/assets/videos/Passenger Alpha.mp4',
      'Front': '/assets/videos/Front.mp4',
      'Cabin': '/assets/videos/Cabin.mp4',
      'Trunk': '/assets/videos/Trunk.mp4',
      'Exterior': '/assets/videos/Exterior.mp4',
    },
    commercial: {
      'Complete Body': '/assets/videos/Commercial Alpha.mp4',
      'Engine': '/assets/videos/Commercial-Engine.mp4',
      'Cabin': '/assets/videos/Commercial-Cabin.mp4',
    }
  };

  const imageSources = {
    passenger: {
      'Complete Body': '/assets/images/completeBody.png',
      'Front': '/assets/images/front.png',
      'Cabin': '/assets/images/front.png',
      'Trunk': '/assets/images/trunk.png',
      'Exterior': '/assets/images/exterior.png',
    },
    commercial: {
      'Complete Body': '/assets/images/completeBody.png',
      'Engine': '/assets/images/front.png',
      'Cabin': '/assets/images/front.png',
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const position = Math.min(Math.max(1 - (top / height), 0), 1);
        setScrollPosition(position);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getMainTextStyle = () => {
    if (scrollPosition < 0.5) {
      return {
        transform: `translate(-50%, -50%) scale(${1 + scrollPosition * 0.2})`,
        opacity: 1 - scrollPosition * 2,
        top: '50%',
        pointerEvents: 'none' as const
      };
    } else {
      return {
        transform: 'translate(-50%, 0) scale(1)',
        opacity: 1,
        top: '72px',
        pointerEvents: 'auto' as const
      };
    }
  };

  const getContentStyle = () => {
    return {
      opacity: Math.max(0, (scrollPosition - 0.3) * 3),
      transform: `translateY(${(1 - scrollPosition) * 100}px)`
    };
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black text-white overflow-hidden"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style jsx>{`
        section::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div 
        className={`${manrope.className} absolute left-1/2 text-center z-10 w-full px-4 transition-all duration-300`}
        style={getMainTextStyle()}
      >
        <h2 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[1] tracking-tight">
          Evolving the drive with{' '}
          <span className="font-semibold">360-degree</span>
        </h2>
        <h1 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[1] tracking-tight mt-2 sm:mt-4">
          nonwoven solutions
        </h1>
      </div>

      <div 
        className="absolute inset-0 z-20 transition-all duration-500"
        style={getContentStyle()}
      >
        <div className="container mx-auto h-full flex flex-col lg:flex-row pt-16 sm:pt-[72px] pb-8 mt-[50px]">
          <div className="w-full lg:w-[330px] lg:pl-[28px] flex lg:block items-center justify-center lg:justify-start">
            <div className="relative flex lg:flex-col items-center h-[98px] lg:h-auto">
              <div className="hidden lg:block absolute left-0 top-0 h-full w-[2px] bg-gray-500">
                <div 
                  className={`absolute left-0 w-[4px] bg-white transition-all duration-300 ${
                    activeVehicle === 'passenger' ? 'h-1/2 top-0' : 'h-1/2 bottom-0'
                  }`}
                ></div>
              </div>

              <div className="flex lg:flex-col gap-2 sm:gap-[10px] lg:gap-[12px] lg:ml-[49px] w-full">
                <button
                  onClick={() => setActiveVehicle('passenger')}
                  className={`text-left transition-all duration-200 w-full ${
                    activeVehicle === 'passenger' 
                      ? 'text-white text-xl sm:text-2xl' 
                      : 'text-gray-400 text-lg sm:text-xl'
                  }`}
                >
                  <h3 className="font-semibold">Passenger vehicles</h3>
                  <p className={`mt-1 font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] tracking-[-0.005em] ${manrope.className}`}>
                    Revving up Nonwoven Innovation from interior to exterior
                  </p>
                </button>

                <button
                  onClick={() => setActiveVehicle('commercial')}
                  className={`text-left transition-all duration-200 w-full ${
                    activeVehicle === 'commercial' 
                      ? 'text-white text-xl sm:text-2xl' 
                      : 'text-gray-400 text-lg sm:text-xl'
                  }`}
                >
                  <h3 className="font-semibold">Commercial vehicles</h3>
                  <p className={`mt-1 font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] tracking-[-0.005em] ${manrope.className}`}>
                    A new nonwoven vehicle for a non-woven vehicle
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* content section */}

          <div className="flex-1 flex flex-col items-center lg:items-start mt-6 sm:mt-8 lg:mt-0 px-4 lg:px-0">
            <div className="relative w-full max-w-[1180px] h-[300px] sm:h-[400px] md:h-[540px] lg:h-[663px] bg-black overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src={
                  activeVehicle === 'passenger' 
                    ? videoSources.passenger[passengerSection]
                    : videoSources.commercial[commercialSection]
                }
              />
            </div>

            {/* selection section */}

            <div className="flex flex-col items-center mt-6 sm:mt-8 w-full pb-2 sm:pb-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                  {activeVehicle === 'passenger' ? (
                    <>
                      {(['Complete Body', 'Front', 'Cabin', 'Trunk', 'Exterior'] as PassengerSection[]).map((section) => (
                        <div key={section} className="flex flex-col items-center">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ">
                            <img 
                              src={imageSources.passenger[section]} 
                              alt={section}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <button
                            onClick={() => setPassengerSection(section)}
                            className={`transition-all cursor-pointer ${manrope.className} 
                              font-medium text-[12px] sm:text-[14px] md:text-[16px] text-center leading-[1.2] sm:leading-[43.24px] tracking-[0.01em]
                              px-1 sm:px-2 py-0.5 sm:py-1
                              ${passengerSection === section
                                ? 'text-white'
                                : 'text-gray-300 hover:text-white'
                              }
                            `}
                          >
                            {section}
                          </button>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {(['Complete Body', 'Engine', 'Cabin'] as CommercialSection[]).map((section) => (
                        <div key={section} className="flex flex-col items-center">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-1 sm:mb-2">
                            <img 
                              src={imageSources.commercial[section]} 
                              alt={section}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <button
                            onClick={() => setCommercialSection(section)}
                            className={`transition-all cursor-pointer ${manrope.className} 
                              font-medium text-[12px] sm:text-[14px] md:text-[16px] text-center leading-[1.2] sm:leading-[43.24px] tracking-[0.01em]
                              px-1 sm:px-2 py-0.5 sm:py-1 ${
                              commercialSection === section
                                ? 'text-white'
                                : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            {section}
                          </button>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                
                <div className="mt-3 sm:mt-0 sm:ml-4 md:ml-8">
                  <button
                    onClick={togglePlayPause}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-[51px] md:h-[51px] rounded-full border border-white bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-70 transition-all"
                  >
                    {isPlaying ? (
                      <FaPause className="text-white text-sm sm:text-base md:text-lg" />
                    ) : (
                      <FaPlay className="text-white text-sm sm:text-base md:text-lg pl-0.5 sm:pl-1" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;