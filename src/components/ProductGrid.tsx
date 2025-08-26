import { useEffect, useRef, useState } from 'react';
import productGrid from '@/assets/product-grid.jpg';

const ProductGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products = [
    { name: "Meridian Coat", price: "€890", category: "Outerwear", season: "autumn" },
    { name: "Lunar Dress", price: "€450", category: "Dresses", season: "winter" },
    { name: "Solstice Blouse", price: "€320", category: "Tops", season: "spring" },
    { name: "Equinox Trousers", price: "€380", category: "Bottoms", season: "summer" },
    { name: "Eclipse Bag", price: "€540", category: "Accessories", season: "autumn" },
    { name: "Zenith Jacket", price: "€720", category: "Outerwear", season: "winter" },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-20 transition-all duration-800 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <div className="w-16 h-px bg-accent mx-auto mb-8"></div>
          <h2 className="editorial-subheadline mb-6">
            Featured Pieces
          </h2>
          <p className="editorial-body max-w-2xl mx-auto">
            Discover our carefully curated selection of seasonal essentials, where each piece represents the perfect balance of contemporary design and timeless elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className={`group transition-all duration-800 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="overflow-hidden mb-4">
                <img 
                  src={productGrid}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="editorial-body font-light text-lg">{product.name}</h3>
                  <p className="editorial-caption">{product.price}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="editorial-caption text-muted-foreground">{product.category}</p>
                  <div className={`w-3 h-3 rounded-full bg-seasonal-${product.season}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center transition-all duration-800 delay-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <button className="group relative overflow-hidden px-8 py-4 border border-accent hover:bg-accent transition-colors duration-300">
            <span className="editorial-caption text-accent group-hover:text-accent-foreground transition-colors duration-300">
              View All Collections
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;