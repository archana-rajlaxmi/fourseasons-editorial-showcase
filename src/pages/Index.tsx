import HeroSection from '@/components/HeroSection';
import EditorialSection from '@/components/EditorialSection';
import ProductGrid from '@/components/ProductGrid';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EditorialSection />
      <ProductGrid />
      <FooterSection />
    </main>
  );
};

export default Index;
