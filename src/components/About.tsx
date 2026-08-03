import { MapPin, GraduationCap, Calendar, Target, BookOpen } from 'lucide-react';
import { profile } from '../data/profile';

const profileSnapshot = [
  { icon: GraduationCap, label: 'University', value: 'United International University' },
  { icon: BookOpen, label: 'Degree', value: 'B.Sc. in Computer Science & Engineering' },
  { icon: Target, label: 'CGPA', value: '3.54 / 4.00' },
  { icon: Calendar, label: 'Expected Graduation', value: '2027' },
  { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh' },
];

const About = () => {
  return (
    <section
      id="about"
      className="section-padding border-t border-border-subtle"
      aria-labelledby="about-heading"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Narrative */}
          <div className="animate-on-scroll">
            <span className="section-label">About Me</span>
            <h2 id="about-heading" className="section-heading">
              Who I Am
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a <strong className="text-text-primary">4th-year Computer Science and Engineering student</strong> at
                United International University, Bangladesh, with a CGPA of 3.54/4.00. My
                foundation is in software engineering — writing structured, maintainable backend
                code and designing relational databases for real-world applications.
              </p>
              <p>
                My hands-on projects span backend development in PHP and MySQL, full-stack web
                application design, UI/UX prototyping in Figma, and database architecture. I
                approach software problems methodically: understand the domain, design the data
                model, then build the logic on top.
              </p>
              <p>
                Alongside software development, I&apos;m pursuing undergraduate research in
                <strong className="text-text-primary"> Artificial Intelligence and Natural Language Processing</strong>
                {' '}as my Final Year Design Project. My research explores attention mechanism
                efficiency in transformer-based language models — a technically demanding area
                that bridges machine learning theory and systems engineering.
              </p>
              <p>
                I&apos;m actively seeking opportunities in software engineering, backend/full-stack
                development, and AI/ML research roles where I can apply my technical skills and
                continue learning.
              </p>
            </div>

            {/* Current focus indicators */}
            <div className="mt-8 flex flex-wrap gap-2 overflow-hidden">
              {[
                'Software Engineering',
                'Backend Development',
                'AI/ML Research',
                'NLP',
                'Full-Stack Development',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full
                             border border-border-subtle text-text-secondary
                             bg-bg-card hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Profile Snapshot Card */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.15s' }}>
            <div className="card border-border-subtle bg-bg-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent-glow border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary text-sm">Profile Snapshot</h3>
                  <p className="text-text-muted text-xs">{profile.name}</p>
                </div>
              </div>

              <ul className="space-y-4" aria-label="Profile details">
                {profileSnapshot.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3 group">
                    <div className="mt-0.5 w-7 h-7 rounded-md bg-bg-secondary border border-border-subtle
                                    flex items-center justify-center flex-shrink-0
                                    group-hover:border-accent/50 transition-colors">
                      <Icon size={13} className="text-text-muted group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] text-text-muted uppercase tracking-wider font-medium">{label}</p>
                      <p className="text-sm text-text-primary font-medium mt-0.5">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="divider-accent my-6" />

              {/* Current Focus */}
              <div>
                <p className="text-[11px] text-text-muted uppercase tracking-wider font-medium mb-2">Current Focus</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-text-primary">{profile.currentFocus}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-slow flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-text-secondary">FYDP — Ongoing Research</span>
                </div>
              </div>

              {/* UIU Computer Club */}
              <div className="mt-5 pt-5 border-t border-border-subtle">
                <p className="text-[11px] text-text-muted uppercase tracking-wider font-medium mb-2">Activities</p>
                <p className="text-sm text-text-secondary">
                  <span className="text-text-primary font-medium">UIU Computer Club</span> — General Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
