import { Trophy, Award, GraduationCap, Medal } from 'lucide-react';
import { achievements, scholarships, certifications } from '../data/achievements';

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="section-padding border-t border-border-subtle"
      aria-labelledby="achievements-heading"
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <span className="section-label">Milestones</span>
          <h2 id="achievements-heading" className="section-heading">
            Achievements &amp; Recognition
          </h2>
        </div>

        {/* Hackathons / Competitions */}
        <div className="mb-12">
          <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-5 flex items-center gap-2">
            <Trophy size={14} className="text-accent" />
            Hackathons &amp; Competitions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((item) => (
              <article
                key={item.id}
                className="card group flex flex-col gap-4 animate-on-scroll"
                aria-labelledby={`achievement-${item.id}`}
              >
                {/* Hackathon photo */}
                {item.image && (
                  <div className="rounded-xl overflow-hidden h-44 bg-bg-secondary">
                    <img
                      src={item.image}
                      alt={`Code Samurai 2024 — event photo showing participants at the hackathon venue`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-glow border border-accent/20
                                  flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.type === 'hackathon' ? (
                      <Trophy size={15} className="text-accent" />
                    ) : (
                      <Medal size={15} className="text-accent" />
                    )}
                  </div>
                  <div>
                    <h4
                      id={`achievement-${item.id}`}
                      className="font-semibold text-text-primary text-sm"
                    >
                      {item.title}
                    </h4>
                    <p className="text-accent text-xs font-medium mt-0.5">{item.subtitle}</p>
                    <p className="text-text-secondary text-xs leading-relaxed mt-1.5">
                      {item.description}
                    </p>
                    <p className="text-text-muted text-[11px] font-mono mt-2">{item.year}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Academic Scholarships */}
        <div className="mb-12">
          <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-5 flex items-center gap-2">
            <GraduationCap size={14} className="text-accent" />
            Academic Scholarships
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-on-scroll">
            {scholarships.map((s) => (
              <div
                key={s.percentage}
                className="card flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-bg-secondary border border-border-subtle
                                flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-accent text-lg font-mono">{s.percentage}</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm">
                    {s.percentage} Academic Scholarship
                  </p>
                  <p className="text-xs text-accent mt-0.5">{s.occasions} Occasions</p>
                  <p className="text-xs text-text-secondary mt-1">{s.institution}</p>
                  <p className="text-xs text-text-muted mt-1.5 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-5 flex items-center gap-2">
            <Award size={14} className="text-accent" />
            Certifications &amp; Course Completions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="card animate-on-scroll flex items-start gap-3 group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Cert icon */}
                <div className="w-8 h-8 rounded-md bg-accent-glow border border-accent/20
                                flex items-center justify-center flex-shrink-0 mt-0.5
                                group-hover:border-accent/50 transition-colors">
                  <Award size={13} className="text-accent" />
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-text-primary leading-snug group-hover:text-accent transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-accent/80 mt-0.5">{cert.type}</p>
                  <p className="text-[11px] text-text-secondary mt-1">{cert.issuer}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] font-mono text-text-muted">{cert.date}</span>
                    <span className="text-border-accent">·</span>
                    <span className="text-[10px] text-text-muted">{cert.domain}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
