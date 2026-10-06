import type { TeamMember } from '@/data/team'
import { MailIcon, PhoneIcon } from './Icons'

type AgentCardProps = {
  agent: TeamMember
  className?: string
}

export default function AgentCard({ agent, className = '' }: AgentCardProps) {
  const telHref = `tel:${agent.phone.replace(/[^0-9+]/g, '')}`

  return (
    <div className={`rounded-2.5xl border border-navy/10 bg-white p-6 shadow-soft ${className}`.trim()}>
      <div className="flex items-center gap-4">
        <img
          src={agent.image}
          alt={agent.name}
          loading="lazy"
          decoding="async"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <p className="font-display text-base font-bold text-navy">{agent.name}</p>
          <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-label text-champagne">
            {agent.role}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ink-soft">{agent.bio}</p>

      <div className="mt-5 flex flex-col gap-2.5 border-t border-navy/10 pt-5 text-sm">
        <a
          href={telHref}
          className="inline-flex items-center gap-2.5 text-navy transition-colors duration-300 hover:text-champagne"
        >
          <PhoneIcon className="h-4 w-4 text-champagne" />
          {agent.phone}
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="inline-flex items-center gap-2.5 break-all text-navy transition-colors duration-300 hover:text-champagne"
        >
          <MailIcon className="h-4 w-4 shrink-0 text-champagne" />
          {agent.email}
        </a>
      </div>
    </div>
  )
}
