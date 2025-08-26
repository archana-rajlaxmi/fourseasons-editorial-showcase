import { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-seasonal.jpg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Reveal */}
      <div 
        className={`absolute inset-0 transition-all duration-1200 ease-out ${
          isLoaded ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-16 scale-110 opacity-0'
        }`}
      >
        <img 
          src={heroImage}
          alt="4Seasons Editorial Fashion"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Brand Name with Staggered Animation */}
        <div 
          className={`transition-all duration-800 delay-300 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="editorial-headline text-white mb-6">
            4SEASONS
          </h1>
        </div>

        {/* Subtitle with Delayed Animation */}
        <div 
          className={`transition-all duration-800 delay-500 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="editorial-subheadline text-white/90 mb-8">
            Editorial Fashion
          </p>
        </div>

        {/* Caption with Final Animation */}
        <div 
          className={`transition-all duration-800 delay-700 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="editorial-caption text-white/80">
            Spring Collection 2024
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-800 delay-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="w-px h-16 bg-white/50 mx-auto mb-2"></div>
        <p className="editorial-caption text-white/70">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;