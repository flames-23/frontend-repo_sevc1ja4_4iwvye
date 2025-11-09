import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full text-white overflow-hidden">
      {/* Dynamic Navbar */}
      <div className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg" />
            <span className="font-semibold tracking-widest text-sm md:text-base">SHEBA</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>
        </div>
      </div>

      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="uppercase tracking-[0.4em] text-[12px] md:text-xs text-amber-400">Architecture • Interiors • Construction • Consultancy</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
              Designing the Future,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200"> Building Excellence</span>
            </h1>
            <p className="mt-6 text-gray-200 max-w-xl">
              A high-end Ethiopian studio blending cultural elegance with global sophistication. We craft luxurious, intelligent spaces with precision and soul.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-amber-500 to-yellow-400 px-6 py-3 text-black font-semibold shadow hover:shadow-amber-500/30 transition-shadow">
                Discover Sheba
              </a>
              <button onClick={scrollToContent} className="rounded-md border border-white/20 px-6 py-3 hover:bg-white/10 transition-colors">
                Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center text-gray-300"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="mt-1 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
