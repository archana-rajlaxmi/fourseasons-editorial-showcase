import { useEffect, useRef, useState } from 'react';
import editorial1 from '@/assets/editorial-1.jpg';
import editorial2 from '@/assets/editorial-2.jpg';

const EditorialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* First Editorial Block - Asymmetric Layout */}
        <div className="grid grid-cols-12 gap-6 mb-32">
          <div className="col-span-12 md:col-span-5">
            <div 
              className={`transition-all duration-800 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
            >
              <img 
                src={editorial1}
                alt="Editorial Fashion Photography"
                className="w-full h-auto image-hover-scale"
              />
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-center">
            <div 
              className={`transition-all duration-800 delay-200 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
            >
              <div className="w-8 h-px bg-seasonal-spring mb-8"></div>
              <h2 className="editorial-subheadline mb-6">
                Spring Awakening
              </h2>
              <p className="editorial-body mb-8 max-w-md">
                Discover the essence of renewal through carefully curated pieces that embody the spirit of spring. Each garment tells a story of craftsmanship and contemporary elegance.
              </p>
              <p className="editorial-caption text-seasonal-spring">
                Collection 01
              </p>
            </div>
          </div>
        </div>

        {/* Second Editorial Block - Reversed Layout */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 flex items-center order-2 md:order-1">
            <div 
              className={`transition-all duration-800 delay-400 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
            >
              <div className="w-8 h-px bg-seasonal-summer mb-8"></div>
              <h2 className="editorial-subheadline mb-6">
                Minimalist Vision
              </h2>
              <p className="editorial-body mb-8 max-w-md">
                Clean lines meet bold statements in our summer collection. Where simplicity becomes the ultimate sophistication, every detail serves a purpose.
              </p>
              <p className="editorial-caption text-seasonal-summer">
                Collection 02
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2">
            <div 
              className={`transition-all duration-800 delay-600 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
            >
              <img 
                src={editorial2}
                alt="Minimalist Fashion Editorial"
                className="w-full h-auto image-hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;