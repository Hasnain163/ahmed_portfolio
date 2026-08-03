// Projects data

export type ProjectStatus = 'Completed' | 'In Progress' | 'Early Stage';

export interface Project {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  longDescription?: string;
  technologies: string[];
  tools?: string[];
  features: string[];
  contribution: string[];
  github: string;
  liveDemo?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'psychiatric-platform',
    title: 'Psychiatric Counselling Platform',
    category: 'Full-Stack Web Application',
    status: 'In Progress',
    description:
      'A multi-role web platform connecting patients with psychiatric counsellors. Features appointment scheduling, real-time messaging, user dashboards, and an administrative clinical portal.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    tools: ['Figma', 'VS Code'],
    features: [
      'Admin Dashboard with clinical overview',
      'Counsellor Dashboard for patient management',
      'Patient-facing Dashboard with session tracking',
      'Appointment scheduling system',
      'Messaging interface between counsellors and patients',
      'Multi-role authentication (Admin, Counsellor, Patient)',
      'Session and habit progress tracking',
    ],
    contribution: [
      'UI/UX prototype designed in Figma',
      'Frontend implemented using HTML, CSS, and JavaScript',
      'MySQL database schema design',
      'Backend PHP logic and session management',
      'Role-based access control architecture',
    ],
    github: 'https://github.com/Hasnain163/psychiatric-plafrom',
    image: './images/project-psychiatric.jpg',
    featured: true,
  },
  {
    id: 'food-waste-management',
    title: 'Food Waste Management System',
    category: 'Backend / Database Application',
    status: 'Completed',
    description:
      'A role-based web platform to manage food donation, inventory tracking, pickup scheduling, and waste categorization — connecting donors, NGOs, collectors, and plant operators.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    features: [
      'Role-based access control (Admin, Donor, NGO, Collector, Plant Operator)',
      'Food donation records and inventory management',
      'Pickup scheduling and logistics coordination',
      'Waste categorization and tracking',
      'Alert and notification system',
      'Feedback submission and management',
    ],
    contribution: [
      'Backend development with PHP',
      'Relational database design in MySQL',
      'Role-based access control implementation',
      'Donation and inventory workflow design',
    ],
    github: 'https://github.com/Hasnain163/Food-Waste-Management-system',
    featured: false,
  },
  {
    id: 'vangari-vai',
    title: 'Household Waste Management — Vangari Vai',
    category: 'UI/UX & Database Design',
    status: 'In Progress',
    description:
      'A household waste management platform currently in the design and planning phase. Includes a UI/UX prototype in Figma and an Entity Relationship Diagram for the database architecture.',
    technologies: ['Figma'],
    features: [
      'UI/UX prototype for waste collection workflow',
      'Database Entity Relationship Diagram (ERD)',
      'Household waste categorization concept',
      'Collector routing and scheduling concept',
    ],
    contribution: [
      'UI/UX prototype designed in Figma',
      'Database ERD design and documentation',
    ],
    github: 'https://github.com/Hasnain163',
    featured: false,
  },
];
