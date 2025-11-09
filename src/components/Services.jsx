import { motion } from 'framer-motion';
import { Building, Paintbrush, Hammer, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Architecture',
    Icon: Building,
    desc: 'Concept-to-delivery architectural solutions with a focus on luxury, sustainability, and cultural context.'
  },
  {
    title: 'Interior Design',
    Icon: Paintbrush,
    desc: 'Bespoke interiors, material curation, and furniture design that balance elegance with function.'
  },
  {
    title: 'Construction',
    Icon: Hammer,
    desc: 'Integrated construction and project management with meticulous attention to detail.'
  },
  {
    title: 'Consultancy',
    Icon: Briefcase,
    desc: 'Strategic advisory for developers and investors, feasibility studies, and design audits.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0e0e0f] text-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Our <span className="text-amber-400">Services</span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, Icon, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-amber-500/10 to-yellow-400/10" />
              <Icon className="h-8 w-8 text-amber-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
              <div className="mt-6 inline-flex items-center text-amber-300 font-medium">
                <span className="relative">
                  Learn More
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
