import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) setShowScroll(true);
      else setShowScroll(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="#" className={`scrollup ${showScroll ? 'show-scroll' : ''}`}>
      <ArrowUp className="scrollup__icon" size={24} />
    </a>
  );
};

export default ScrollUp;
