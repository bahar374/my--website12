const img = (id: string, w = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string
  phone: string
  email: string
  linkedin: string
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Daniel Morgan',
    role: 'Managing Director',
    bio: 'With over 20 years in luxury real estate, Daniel leads Horizon Properties with a vision for excellence and a passion for connecting clients with extraordinary homes.',
    photo: img('photo-1507003211169-0a1dd7228f2d'),
    phone: '(555) 246-7891',
    email: 'daniel@horizonproperties.com',
    linkedin: '#',
  },
  {
    id: '2',
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    bio: 'Olivia specializes in coastal and architectural properties, bringing an expert eye for design and an unmatched network of luxury buyers and sellers.',
    photo: img('photo-1544005313-94ddf0286df2'),
    phone: '(555) 246-7892',
    email: 'olivia@horizonproperties.com',
    linkedin: '#',
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Investment Consultant',
    bio: 'James helps clients build and manage real estate portfolios, offering data-driven insights and strategic guidance for long-term investment success.',
    photo: img('photo-1488161628813-04466f872be2'),
    phone: '(555) 246-7893',
    email: 'james@horizonproperties.com',
    linkedin: '#',
  },
  {
    id: '4',
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    bio: 'Sophia is known for her dedication to client satisfaction, guiding buyers and sellers through every step with expertise, care, and integrity.',
    photo: img('photo-1573496359142-b8d87734a5a2'),
    phone: '(555) 246-7894',
    email: 'sophia@horizonproperties.com',
    linkedin: '#',
  },
]
