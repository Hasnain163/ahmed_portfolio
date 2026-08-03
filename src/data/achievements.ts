// Achievements data

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  type: 'hackathon' | 'competition' | 'scholarship' | 'award';
  image?: string;
  badge?: string;
}

export interface Scholarship {
  percentage: string;
  occasions: number;
  institution: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: 'code-samurai-2024',
    title: 'Code Samurai 2024',
    subtitle: 'Final Round Participant',
    description:
      'Participated in the Final Round of Code Samurai 2024, one of the leading inter-university programming contests in Bangladesh. Competed through the preliminary and final rounds at the venue.',
    year: '2024',
    type: 'hackathon',
    image: './images/hackathon.jpeg',
  },
  {
    id: 'coders-combat-4',
    title: 'Coders Combat 4.0',
    subtitle: 'Participant',
    description:
      'Participated in Coders Combat 4.0, an inter-university competitive programming event.',
    year: '2024',
    type: 'competition',
  },
];

export const scholarships: Scholarship[] = [
  {
    percentage: '50%',
    occasions: 2,
    institution: 'United International University',
    description: 'Awarded 50% tuition waiver in two trimester periods based on academic performance.',
  },
  {
    percentage: '25%',
    occasions: 2,
    institution: 'United International University',
    description: 'Awarded 25% tuition waiver in two trimester periods based on academic performance.',
  },
];

export const certifications = [
  {
    id: 'rhcsa',
    title: 'Red Hat Certified System Administrator (RHCSA)',
    type: 'Course Completion',
    issuer: 'Red Hat Academy & CENTeR, UIU',
    date: 'May 2025',
    domain: 'Linux Systems Administration',
  },
  {
    id: 'cisco-devnet',
    title: 'Cisco DevNet Associate',
    type: 'Course Completion',
    issuer: 'Cisco Networking Academy & CENTeR, UIU',
    date: 'March 2026',
    domain: 'Network Programmability & Automation',
  },
  {
    id: 'gp-design-thinking',
    title: 'Design System Thinking with AI',
    type: 'Certificate',
    issuer: 'Grameenphone Academy',
    date: 'March 2026',
    domain: 'AI-Assisted Design',
  },
  {
    id: 'gp-network-ai',
    title: 'Network Smarter with AI',
    type: 'Certificate',
    issuer: 'Grameenphone Academy',
    date: 'April 2026',
    domain: 'AI & Networking',
  },
];
