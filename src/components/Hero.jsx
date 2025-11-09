import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ChevronDown, Star, Sparkles } from 'lucide-react';

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

  // Premium parallax for content
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-200, 200], [-12, 12]), { stiffness: 120, damping: 20 });
  const y = useSpring(useTransform(my, [-200, 200], [-8, 8]), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = (e.clientX - innerWidth / 2);
    const offsetY = (e.clientY - innerHeight / 2);
    mx.set(offsetX);
    my.set(offsetY);
  };

  return (
    <section id="home" className="relative h-screen w-full text-white overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Dynamic Navbar */}
      <div className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-500 ${scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-400 shadow-[0_0_30px_rgba(251,191,36,0.35)]" />
            <span className="font-semibold tracking-[0.3em] text-xs md:text-sm">SHEBA</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              { href: '#about', label: 'About' },
              { href: '#services', label: 'Services' },
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative group"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <span className="hover:text-amber-400 transition-colors">{item.label}</span>
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-amber-400 to-yellow-200 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
        </div>
      </div>

      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glossy gradient overlays to enhance depth */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full bg-gradient-to-r from-amber-400/10 via-yellow-200/5 to-transparent blur-3xl" />
      </div>

      {/* Hero Content with parallax */}
      <motion.div style={{ x, y }} className="relative z-20 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span className="text-[11px] tracking-widest uppercase text-amber-300/90">Luxury Architecture & AI-led Design</span>
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight">
              Designing the Future,
              <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-100">
                <motion.span
                  initial={{ backgroundPositionX: '0%' }}
                  animate={{ backgroundPositionX: '100%' }}
                  transition={{ repeat: Infinity, repeatType: 'mirror', duration: 8 }}
                  className="[background-size:200%]"
                >
                  Building Excellence
                </motion.span>
              </span>
            </h1>
            <p className="mt-6 text-gray-200/90 max-w-xl">
              A high-end Ethiopian studio blending cultural elegance with global sophistication. We craft luxurious, intelligent spaces with precision and soul.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-black"
              >
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_10px_30px_rgba(251,191,36,0.4)]" />
                <span className="relative">Discover Sheba</span>
              </motion.a>
              <motion.button
                onClick={scrollToContent}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="relative rounded-md border border-white/15 px-6 py-3 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
              >
                Our Story
                <span className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/10" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating glass badges */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute right-6 top-28 hidden md:flex"
        >
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            <Star className="h-4 w-4 text-yellow-300" />
            <span className="text-sm text-white/90">Premium, award-winning delivery</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute left-10 bottom-36 hidden md:flex"
        >
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-sm text-white/90">Glassmorphic 3D experience</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col items-center text-gray-300"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="mt-1 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
