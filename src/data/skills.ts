// Skills data — categorized, no percentage bars

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Programming Languages',
    icon: 'Code2',
    skills: ['C', 'C++', 'Java', 'Python', 'PHP'],
  },
  {
    id: 'web',
    label: 'Web Technologies',
    icon: 'Globe',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'database',
    label: 'Database',
    icon: 'Database',
    skills: ['MySQL'],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    id: 'cs-core',
    label: 'Core Computer Science',
    icon: 'Cpu',
    skills: [
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Database Management',
      'Software Development',
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI / Research Interests',
    icon: 'Brain',
    skills: ['Machine Learning', 'Natural Language Processing'],
  },
];
