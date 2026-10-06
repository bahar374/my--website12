import ScrollReveal from '../components/ScrollReveal'
import TeamSection from '../sections/TeamSection'
import CTASection from '../sections/CTASection'
import { teamMembers } from '../data/team'

const teamHeroImage = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2000&auto=format&fit=crop&q=80'

export default function Team() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={teamHeroImage} alt="Luxury property" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-navy-dark/50" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <ScrollReveal>
            <span className="section-label">Our Team</span>
            <h1 className="text-section text-white mt-4">Meet the Experts</h1>
          </ScrollReveal>
        </div>
      </section>

      <TeamSection />

      {/* Detailed team bios */}
      <section className="py-section bg-white">
        <div className="container-luxe">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Get to Know Us</span>
              <h2 className="text-section text-navy-dark mt-4">Our Professionals</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-16">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 100}>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                  <div className="md:[direction:ltr]">
                    <div className="overflow-hidden rounded-lg-card aspect-[4/5] max-w-sm mx-auto">
                      <img src={member.photo} alt={member.name} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="md:col-span-2 md:[direction:ltr]">
                    <h3 className="text-2xl font-bold text-navy-dark">{member.name}</h3>
                    <p className="text-champagne font-medium mt-1">{member.role}</p>
                    <p className="text-navy-dark/70 leading-relaxed mt-4 max-w-lg">{member.bio}</p>
                    <div className="flex gap-4 mt-6">
                      <a href={`tel:${member.phone}`} className="text-sm text-navy-dark/60 hover:text-navy-dark transition-colors">{member.phone}</a>
                      <a href={`mailto:${member.email}`} className="text-sm text-navy-dark/60 hover:text-navy-dark transition-colors">{member.email}</a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
