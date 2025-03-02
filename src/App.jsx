import React, { useEffect } from 'react';
import Home from './components/Home';
import SplashCursor from './components/Effects/SplashCursor';
import Lenis from 'lenis';

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <SplashCursor />
      <Home />
    </div>
  );
};