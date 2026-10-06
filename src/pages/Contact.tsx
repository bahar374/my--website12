import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const contactHeroImage = 'https://images.unsplash.com/photo-1748063578185-3d68121b11ff?w=2000&auto=format&fit=crop&q=80'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={contactHeroImage} alt="Luxury property" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-navy-dark/50" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <ScrollReveal>
            <span className="section-label">Contact</span>
            <h1 className="text-section text-white mt-4">Get in Touch</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact info */}
            <ScrollReveal>
              <span className="section-label">Contact Us</span>
              <h2 className="text-section text-navy-dark mt-4 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-navy-dark/70 leading-relaxed mb-10 max-w-md">
                Whether you're looking to buy, sell, or invest, our team is here to help. Reach out to schedule a consultation or learn more about our services.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
                    label: 'Phone',
                    value: '(555) 246-7890',
                    href: 'tel:+15552467890',
                  },
                  {
                    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
                    label: 'Email',
                    value: 'info@horizonproperties.com',
                    href: 'mailto:info@horizonproperties.com',
                  },
                  {
                    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
                    label: 'Office',
                    value: '1200 Architectural Blvd, Suite 500\nBeverly Hills, CA 90210',
                    href: '#',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-warm-gray text-champagne">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-champagne font-semibold mb-1">{item.label}</p>
                      <a href={item.href} className="text-navy-dark/70 hover:text-navy-dark transition-colors whitespace-pre-line">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right: Contact form */}
            <ScrollReveal delay={200}>
              <form onSubmit={handleSubmit} className="bg-warm-gray rounded-lg-card p-8 md:p-10">
                <h3 className="text-xl font-bold text-navy-dark mb-6">Send Us a Message</h3>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-dark mb-2">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-navy-50 bg-white px-4 py-3 text-navy-dark focus:outline-none focus:border-champagne transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-dark mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-navy-50 bg-white px-4 py-3 text-navy-dark focus:outline-none focus:border-champagne transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy-dark mb-2">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-navy-50 bg-white px-4 py-3 text-navy-dark focus:outline-none focus:border-champagne transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-dark mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-navy-50 bg-white px-4 py-3 text-navy-dark focus:outline-none focus:border-champagne transition-colors resize-none"
                      placeholder="I'm interested in learning more about..."
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary group">
                    {submitted ? 'Message Sent!' : 'Send Message'}
                    {!submitted && (
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
