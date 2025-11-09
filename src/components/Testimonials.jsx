import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 'c1',
    name: 'Sarah M.',
    role: 'Private Residence, Dubai',
    rating: 5,
    quote: 'Sheba transformed our villa into a serene sanctuary. Attention to detail was beyond expectations.'
  },
  {
    id: 'c2',
    name: 'The Crest Group',
    role: 'Hospitality Client',
    rating: 5,
    quote: 'From concept to execution, the team delivered a signature lobby that elevated our brand.'
  },
  {
    id: 'c3',
    name: 'Oasis Developments',
    role: 'Mixed-use Project',
    rating: 4,
    quote: 'Reliable, design-forward, and responsive. Construction quality and finish were excellent.'
  },
  {
    id: 'c4',
    name: 'A. Rahman',
    role: 'Penthouse Owner',
    rating: 5,
    quote: 'The interior design is both luxurious and livable. A truly bespoke experience from Sheba.'
  },
];

function Stars({ n }) {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let start = null;
    let animationId;
    const speed = 40; // px per second

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      track.scrollLeft = (elapsed / 1000) * speed;
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
        start = timestamp;
        track.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const loop = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">What Our Clients Say</h2>
          <p className="text-zinc-400 mt-3">Trusted by homeowners, developers, and hospitality brands.</p>
        </div>

        <div
          ref={trackRef}
          className="relative overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {loop.map((t, idx) => (
            <motion.div
              key={`${t.id}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex align-top mr-4"
            >
              <div className="w-80 h-full rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <Stars n={t.rating} />
                <p className="mt-3 text-zinc-200">“{t.quote}”</p>
                <div className="mt-4 text-sm text-zinc-400">
                  <span className="font-medium text-white">{t.name}</span> · {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
