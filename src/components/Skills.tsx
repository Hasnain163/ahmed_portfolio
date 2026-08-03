import { Code2, Globe, Database, Wrench, Cpu, Brain } from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Database,
  Wrench,
  Cpu,
  Brain,
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-padding border-t border-border-subtle"
      aria-labelledby="skills-heading"
    >
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="section-label">Technical Skills</span>
          <h2 id="skills-heading" className="section-heading">
            What I Work With
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
            My core technical toolkit, organized by category. Focused on practical skills applied
            in real academic and project contexts.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <div
                key={category.id}
                className="skill-category animate-on-scroll group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent-glow border border-accent/20
                                  flex items-center justify-center flex-shrink-0
                                  group-hover:border-accent/50 transition-colors">
                    <Icon size={15} className="text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary">{category.label}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.label} skills`}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      role="listitem"
                      className="tech-chip"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note about skills */}
        <p className="text-center text-text-muted text-xs font-mono mt-10 animate-on-scroll">
          // Skills listed reflect coursework, projects, and certifications — not self-assessed ratings.
        </p>
      </div>
    </section>
  );
};

export default Skills;
