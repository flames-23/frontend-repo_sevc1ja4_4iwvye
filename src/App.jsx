import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Google Analytics basic page view (replace with real GA ID in production)
    if (typeof window !== 'undefined' && !window.__ga_initialized) {
      window.__ga_initialized = true;
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);} // eslint-disable-line
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400/30 selection:text-white">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
