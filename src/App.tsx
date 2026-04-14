import { useState, useEffect } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/layout/Hero';
import FeaturedSlider from './components/layout/FeaturedSlider';
import BrandStory from './components/layout/BrandStory';
import CoreProducts from './components/layout/CoreProducts';
import Ecosystem from './components/layout/Ecosystem';
import ContactSection from './components/layout/ContactSection';
import Footer from './components/ui/Footer';
import CinematicVideo from './components/layout/CinematicVideo';
import ScrollUp from './components/layout/ScrollUp';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
      <Navbar isScrolled={isScrolled} />

      <main>
        <Hero />

        <FeaturedSlider />

        <BrandStory />

        <CinematicVideo />

        <CoreProducts />

        <Ecosystem />

        <ContactSection />
      </main>

      <Footer />

      <ScrollUp />
    </div>
  );
}
