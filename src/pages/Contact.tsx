import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-champagne" />
              <span className="section-label">Get In Touch</span>
            </div>
            <h1 className="text-ivory font-display font-bold text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-ivory/60 text-lg max-w-xl">
              Whether you're searching for your dream home or exploring investment opportunities, our team is here to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-navy-900 font-display font-bold text-2xl lg:text-3xl mb-8">Reach Out</h2>
              <div className="space-y-8">
                {[
                  { icon: Phone, label: 'Phone', value: '(555) 246-7890', href: 'tel:5552467890' },
                  { icon: Mail, label: 'Email', value: 'info@horizonproperties.com', href: 'mailto:info@horizonproperties.com' },
                  { icon: MapPin, label: 'Office', value: '1200 Architectural Way, Suite 400, New York, NY 10001' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} strokeWidth={1.5} className="text-champagne-dark" />
                    </div>
                    <div>
                      <p className="text-navy-400 text-sm uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-navy-900 text-lg font-medium hover:text-champagne-dark transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-navy-900 text-lg font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-sm overflow-hidden">
                <img
                  src="/images/contact-office.jpg"
                  alt="Our office building"
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              {submitted ? (
                <div className="bg-navy-50 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-champagne/15 flex items-center justify-center mb-6">
                    <Check size={32} strokeWidth={2} className="text-champagne-dark" />
                  </div>
                  <h3 className="text-navy-900 font-display font-bold text-2xl mb-3">Message Sent</h3>
                  <p className="text-navy-500 text-lg mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                    className="text-champagne-dark font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-navy-900 font-display font-bold text-2xl lg:text-3xl mb-2">Send a Message</h2>
                  <p className="text-navy-400 text-sm mb-6">Fill out the form below and we'll be in touch shortly.</p>
                  <div>
                    <label className="block text-navy-700 text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-50 border border-navy-200 rounded-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-champagne transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-navy-700 text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-50 border border-navy-200 rounded-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-champagne transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-navy-700 text-sm font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-50 border border-navy-200 rounded-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-champagne transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-navy-700 text-sm font-semibold mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-50 border border-navy-200 rounded-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-champagne transition-colors resize-none"
                      placeholder="I'm interested in learning more about..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 text-ivory px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:bg-navy-800 hover:gap-3"
                  >
                    Send Message
                    <Send size={16} strokeWidth={2} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
