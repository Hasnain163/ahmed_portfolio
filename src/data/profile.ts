// Profile data — single source of truth for all personal information

export const profile = {
  name: 'Hasnain Ahmed',
  title: 'Software Developer',
  tagline: 'Software Developer exploring AI, Machine Learning & NLP.',
  bio: '4th-year Computer Science and Engineering undergraduate at United International University, Bangladesh. I build practical software solutions — from role-based web platforms to full-stack applications — and am currently conducting undergraduate research in AI attention mechanisms for my Final Year Design Project.',
  university: 'United International University',
  degree: 'Bachelor of Science in Computer Science and Engineering',
  cgpa: '3.54 / 4.00',
  graduationYear: '2027',
  enrollmentYear: '2023',
  currentFocus: 'Software Development + AI/ML/NLP Research',
  location: 'Dhaka, Bangladesh',
  email: 'antorahmed120612@gmail.com',
  phone: '01306699217',
  github: 'https://github.com/Hasnain163',
  linkedin: 'https://www.linkedin.com/in/hasnain-ahmed-7047b7377/',
  resumePath: './resume/Hasnain_Ahmed_Resume.pdf',
  profilePhoto: './images/profile.jpeg',
} as const;

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;
