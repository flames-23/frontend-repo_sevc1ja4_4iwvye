import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="relative bg-[#0b0b0c] text-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            About <span className="text-amber-400">Sheba</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Sheba is a multidisciplinary studio delivering architecture, interior design, construction, and consultancy with uncompromising quality. Our approach merges Ethiopian cultural elegance with modern technical rigor, producing spaces that are both soulful and timeless.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[{
            title: 'Vision',
            copy: 'To elevate the built environment across Africa with world-class design and craftsmanship.'
          }, {
            title: 'Mission',
            copy: 'Deliver innovative, sustainable, and luxurious spaces that enrich human experience.'
          }, {
            title: 'Values',
            copy: 'Precision, creativity, integrity, and cultural respect in everything we do.'
          }].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold text-amber-300">{item.title}</h3>
              <p className="mt-2 text-gray-300 text-sm">{item.copy}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-medium text-gray-200">Project Timeline</h3>
          <div className="mt-6 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent" />
            <div className="space-y-8">
              {[
                { year: '2015', text: 'Founded with a vision to reimagine contemporary Ethiopian design.' },
                { year: '2018', text: 'Expanded into full-service construction and project management.' },
                { year: '2021', text: 'Delivered award-winning luxury residences and hospitality spaces.' },
                { year: '2024', text: 'Launched international consultancy for global developments.' },
              ].map((e, i) => (
                <motion.div
                  key={e.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="pl-12"
                >
                  <div className="relative">
                    <div className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full bg-amber-400 ring-4 ring-amber-500/20" />
                    <div className="text-sm text-amber-300">{e.year}</div>
                    <div className="text-gray-300">{e.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
