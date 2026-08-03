import { GraduationCap, Calendar, BookOpen, Users } from 'lucide-react';

const Education = () => {
  return (
    <section
      id="education"
      className="section-padding border-t border-border-subtle"
      aria-labelledby="education-heading"
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <span className="section-label">Education</span>
          <h2 id="education-heading" className="section-heading">
            Academic Background
          </h2>
        </div>

        {/* Primary education */}
        <div className="animate-on-scroll">
          <div
            className="card border-border-subtle rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-48 h-48 opacity-[0.03]"
              style={{
                background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
              {/* Institution info */}
              <div className="md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-glow border border-accent/20
                                  flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">
                      United International University
                    </h3>
                    <p className="text-accent text-sm font-medium mt-0.5">
                      Bachelor of Science in Computer Science and Engineering
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar size={12} className="text-text-muted" />
                      <span className="text-xs text-text-secondary font-mono">2023 — 2027 (Expected)</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mt-6 max-w-lg">
                  Pursuing a four-year B.Sc. in Computer Science and Engineering with coursework covering
                  algorithms, data structures, software engineering, database systems, artificial intelligence,
                  and computer networks. Maintaining a CGPA of 3.54/4.00 with two 50% and two 25% academic
                  scholarships.
                </p>

                {/* Relevant coursework areas */}
                <div className="mt-5">
                  <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-2">
                    Core Study Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Software Engineering',
                      'Database Management Systems',
                      'Artificial Intelligence',
                      'Object-Oriented Programming',
                      'Computer Networks',
                      'Operating Systems',
                    ].map((course) => (
                      <span key={course} className="tech-chip text-[11px]">{course}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats column */}
              <div className="space-y-4">
                <div className="bg-bg-secondary border border-border-subtle rounded-xl p-4">
                  <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-1">CGPA</p>
                  <p className="text-3xl font-bold text-accent font-mono">3.54</p>
                  <p className="text-xs text-text-muted mt-0.5">out of 4.00</p>
                </div>

                <div className="bg-bg-secondary border border-border-subtle rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={12} className="text-text-muted" />
                    <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium">Degree</p>
                  </div>
                  <p className="text-sm text-text-primary font-semibold">B.Sc. CSE</p>
                  <p className="text-xs text-text-muted mt-0.5">4-Year Program</p>
                </div>

                <div className="bg-bg-secondary border border-border-subtle rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Users size={12} className="text-text-muted" />
                    <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium">Activity</p>
                  </div>
                  <p className="text-sm text-text-primary font-semibold">UIU Computer Club</p>
                  <p className="text-xs text-text-muted mt-0.5">General Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic note */}
        <p className="text-center text-text-muted text-xs font-mono mt-8 animate-on-scroll">
          // Expected graduation: 2027
        </p>
      </div>
    </section>
  );
};

export default Education;
