import { motion } from 'framer-motion';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-yellow-400 to-amber-600" />
            <span className="font-semibold tracking-widest">SHEBA</span>
          </div>
          <p className="mt-3 text-sm text-gray-400 max-w-sm">Luxury architecture and interiors with Ethiopian soul and global sophistication.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-amber-400" href="#about">About</a></li>
              <li><a className="hover:text-amber-400" href="#services">Services</a></li>
              <li><a className="hover:text-amber-400" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Addis Ababa, Ethiopia</li>
              <li>+251 900 000 000</li>
              <li>studio@sheba.studio</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Follow</h4>
          <div className="mt-3 flex items-center gap-4">
            <a aria-label="Instagram" href="#" className="hover:text-amber-400"><Instagram /></a>
            <a aria-label="LinkedIn" href="#" className="hover:text-amber-400"><Linkedin /></a>
            <a aria-label="Facebook" href="#" className="hover:text-amber-400"><Facebook /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sheba Studio. All rights reserved.
      </div>

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/251900000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500 text-white shadow-lg hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 fill-current"><path d="M380.9 97.1C339-23.9 206.9-46 114.4 46.5c-75.2 75.2-79.4 193.1-14.2 272.2L64 448l134.2-35.8c77.3 42.7 175.1 27.9 238.5-35.6 92.5-92.5 70.4-224.6-55.8-279.5zM224 392c-30.9 0-61.5-8.1-88.3-23.4l-6.3-3.7-79.4 21.2 21.3-76.9-4.1-6.6C26.8 251.3 36 167.8 92 112c67.9-67.9 178.2-63.6 246.9 5.1 93.6 93.6 27.3 251-114.9 275z"/></svg>
      </a>
    </footer>
  );
}
