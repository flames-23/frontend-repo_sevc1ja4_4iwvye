import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    id: 't1',
    name: 'Aisha Rahman',
    role: 'Principal Architect',
    avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1200&auto=format&fit=crop',
    bio: '15+ years leading luxury residential and hospitality projects across MENA.',
    linkedin: '#',
    email: 'mailto:hello@sheba.studio'
  },
  {
    id: 't2',
    name: 'Omar Khalid',
    role: 'Head of Interior Design',
    avatar: 'https://images.unsplash.com/photo-1602471615287-56a8d0b3d159?q=80&w=1200&auto=format&fit=crop',
    bio: 'Curates tactile palettes and bespoke furnishings for timeless spaces.',
    linkedin: '#',
    email: 'mailto:hello@sheba.studio'
  },
  {
    id: 't3',
    name: 'Lina Al-Fayed',
    role: 'Construction Director',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    bio: 'Delivers precision builds with rigorous quality and on-site leadership.',
    linkedin: '#',
    email: 'mailto:hello@sheba.studio'
  },
  {
    id: 't4',
    name: 'Daniel Chen',
    role: 'Design Strategist',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
    bio: 'Aligns user experience, brand, and ROI through research-led design.',
    linkedin: '#',
    email: 'mailto:hello@sheba.studio'
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Leadership</h2>
          <p className="text-zinc-400 mt-3">A multidisciplinary team uniting architecture, interiors, construction, and strategy.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950"
            >
              <div className="relative">
                <img src={m.avatar} alt={m.name} className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-lg font-medium">{m.name}</h3>
                  <p className="text-amber-400 text-sm">{m.role}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-zinc-400">{m.bio}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={m.linkedin} className="p-2 rounded bg-zinc-900 border border-zinc-800 hover:border-amber-500/60 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href={m.email} className="p-2 rounded bg-zinc-900 border border-zinc-800 hover:border-amber-500/60 transition-colors" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
