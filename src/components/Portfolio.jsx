import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Layers, Sparkles } from 'lucide-react';

const categories = ['All', 'Architecture', 'Interior', 'Construction', 'Consultancy'];

const projectsSeed = [
  {
    id: 'p1',
    title: 'Paramount Residence',
    category: 'Architecture',
    cover: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    before: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Aurora Penthouse',
    category: 'Interior',
    cover: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    before: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Crest Tower Lobby',
    category: 'Construction',
    cover: 'https://images.unsplash.com/photo-1529429612778-8a6f19f53f66?q=80&w=1600&auto=format&fit=crop',
    before: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Elysian Villa',
    category: 'Architecture',
    cover: 'https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?q=80&w=1600&auto=format&fit=crop',
    before: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e2?q=80&w=1400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'Monarch Office',
    category: 'Consultancy',
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    before: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'p6',
    title: 'Harborline Residence',
    category: 'Interior',
    cover: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    before: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop',
  },
];

function BeforeAfter({ before, after }) {
  const [value, setValue] = useState(50);
  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <img src={before} alt="Before" className="w-full h-64 object-cover select-none" />
      <div className="absolute inset-0" style={{ width: `${value}%` }}>
        <img src={after} alt="After" className="w-full h-64 object-cover select-none" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2/3 accent-amber-400/80"
        aria-label="Before after slider"
      />
      <div className="absolute top-3 left-3 flex items-center gap-2 text-xs font-medium">
        <span className="px-2 py-1 rounded bg-black/60">Before</span>
        <span className="px-2 py-1 rounded bg-amber-500/80 text-black">After</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [expanded, setExpanded] = useState({});

  const projects = useMemo(() => {
    if (active === 'All') return projectsSeed;
    return projectsSeed.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-zinc-400 mt-2 max-w-xl">
              A curated selection across architecture, interior craftsmanship, and construction excellence.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-500"><Filter size={18} /></span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    active === cat
                      ? 'bg-amber-500 text-black'
                      : 'bg-zinc-800/60 hover:bg-zinc-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {projects.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-500/50"
              >
                <div className="relative">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{p.title}</h3>
                      <p className="text-xs text-amber-400/90">{p.category}</p>
                    </div>
                    <button
                      onClick={() => setExpanded((e) => ({ ...e, [p.id]: !e[p.id] }))}
                      className="px-3 py-1.5 rounded bg-black/70 border border-zinc-700 hover:border-amber-500/60 text-sm"
                    >
                      {expanded[p.id] ? 'Hide' : 'Before/After'}
                    </button>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {expanded[p.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-4 border-t border-zinc-800 bg-zinc-950/60"
                    >
                      <div className="flex items-center gap-3 mb-3 text-xs text-zinc-400">
                        <Layers size={16} />
                        Drag the slider to compare transformation
                      </div>
                      <BeforeAfter before={p.before} after={p.after} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex items-center justify-center gap-3 text-zinc-400">
          <Sparkles className="text-amber-400" size={18} />
          <p className="text-sm">More case studies available upon request.</p>
        </div>
      </div>
    </section>
  );
}
