import { photo } from '@/lib/images'

export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  image: string
  email: string
  phone: string
}

export const TEAM: TeamMember[] = [
  {
    id: 'daniel-morgan',
    name: 'Daniel Morgan',
    role: 'Managing Director',
    bio: 'Two decades advising private clients on prime residential acquisitions and disposals.',
    image: photo('1560250097-0b93528c311a', 900),
    email: 'daniel@horizonproperties.com',
    phone: '(555) 246-7890',
  },
  {
    id: 'olivia-carter',
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    bio: 'Specialist in architecturally significant homes and discreet off-market sales.',
    image: photo('1573497019940-1c28c88b4f3e', 900),
    email: 'olivia@horizonproperties.com',
    phone: '(555) 246-7891',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'Investment Consultant',
    bio: 'Advises investors on yield, structuring and long-term portfolio performance.',
    image: photo('1507003211169-0a1dd7228f2d', 900),
    email: 'james@horizonproperties.com',
    phone: '(555) 246-7892',
  },
  {
    id: 'sophia-bennett',
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    bio: 'Leads waterfront and coastal mandates across California and beyond.',
    image: photo('1494790108377-be9c29b29330', 900),
    email: 'sophia@horizonproperties.com',
    phone: '(555) 246-7893',
  },
]

export const getAgent = (id: string): TeamMember | undefined => TEAM.find((member) => member.id === id)
