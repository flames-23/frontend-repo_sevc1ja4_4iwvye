import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0b0c] text-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold"
          >
            Start a <span className="text-amber-400">Project</span>
          </motion.h2>
          <p className="mt-4 text-gray-300">
            Tell us about your goals. Our team will reach out within 24 hours.
          </p>

          <div className="mt-8 rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0245682339187!2d38.763611!3d8.980603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8597e38d7e41%3A0x2d8b9e1c6f1a2b0f!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert('Thank you! We\'ll be in touch.'); }}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6"
        >
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input required className="mt-2 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-amber-400" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input type="email" required className="mt-2 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-amber-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea rows={5} required className="mt-2 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-amber-400" placeholder="Tell us about your project" />
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center rounded-md bg-gradient-to-r from-amber-500 to-yellow-400 px-6 py-3 text-black font-semibold shadow hover:shadow-amber-500/30 transition-shadow">
            Send Inquiry
          </button>
        </form>
      </div>

      {/* Back to top */}
      <a href="#home" className="fixed bottom-6 left-6 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors">↑</a>
    </section>
  );
}
