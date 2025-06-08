import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import VideosSection from './components/VideosSection';
import PlatformSection from './components/PlatformSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-secondary-500">
      <Header />
      <main>
        <HeroSection />
        <GallerySection />
        <VideosSection />
        <PlatformSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;