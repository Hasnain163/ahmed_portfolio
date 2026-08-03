import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, ChevronRight } from 'lucide-react';
import { profile } from '../data/profile';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
  },
};

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-[-100px] w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10 py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-32">
          {/* Left — Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Label */}
            <motion.div variants={itemVariants}>
              <span className="section-label font-mono text-xs tracking-[0.2em]">
                Computer Science &amp; Engineering
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.1] text-text-primary mb-4 mt-3"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient">Hasnain Ahmed.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary font-medium mb-6 leading-relaxed max-w-[520px]"
            >
              {profile.tagline}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed max-w-[540px] mb-10 text-[0.95rem]"
            >
              {profile.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={scrollToProjects}
                className="btn-primary"
                aria-label="View my projects"
              >
                View Projects
                <ChevronRight size={16} />
              </button>
              <a
                href={profile.resumePath}
                download="Hasnain_Ahmed_Resume.pdf"
                className="btn-secondary"
                aria-label="Download resume PDF"
              >
                <Download size={15} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub profile"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={17} />
              </a>
              <span className="text-text-muted text-xs font-mono ml-1">@Hasnain163</span>
            </motion.div>
          </motion.div>

          {/* Right — Profile Photo */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative grid dots behind image */}
              <div
                className="absolute -inset-8 bg-grid opacity-40 rounded-3xl"
                aria-hidden="true"
              />

              {/* Accent corner decoration */}
              <div
                className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-accent opacity-40 rounded-tr-xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-accent opacity-40 rounded-bl-xl"
                aria-hidden="true"
              />

              {/* Technical label */}
              <div
                className="absolute -top-6 left-4 font-mono text-[10px] text-accent opacity-50 tracking-widest"
                aria-hidden="true"
              >
                /* profile.jpg */
              </div>

              {/* Image container */}
              <div
                className="relative w-[280px] h-[340px] sm:w-[310px] sm:h-[380px] lg:w-[340px] lg:h-[415px] rounded-2xl overflow-hidden
                           border border-border-accent
                           shadow-[0_0_40px_rgba(56,189,248,0.12)]
                           bg-bg-card"
              >
                <img
                  src={profile.profilePhoto}
                  alt="Hasnain Ahmed — CSE undergraduate at United International University"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />

                {/* Subtle gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24
                             bg-gradient-to-t from-bg-primary/60 to-transparent"
                  aria-hidden="true"
                />

                {/* Small status card floating */}
                <div
                  className="absolute bottom-4 left-4 right-4
                             bg-bg-primary/80 backdrop-blur-md border border-border-subtle rounded-lg px-3 py-2
                             flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-semibold text-text-primary">Hasnain Ahmed</p>
                    <p className="text-[10px] text-text-muted">CSE Undergraduate · UIU</p>
                  </div>
                </div>
              </div>

              {/* CGPA badge */}
              <div
                className="absolute -right-4 top-12
                           bg-bg-card border border-border-accent rounded-xl px-3 py-2 shadow-card
                           text-center"
                aria-label="CGPA 3.54 out of 4.00"
              >
                <p className="text-accent font-bold text-lg font-mono leading-none">3.54</p>
                <p className="text-text-muted text-[9px] uppercase tracking-wider mt-0.5">CGPA /4.0</p>
              </div>

              {/* Skill tag */}
              <div
                className="absolute -left-4 top-1/2 -translate-y-1/2
                           bg-bg-card border border-border-accent rounded-xl px-3 py-2 shadow-card"
                aria-hidden="true"
              >
                <p className="text-[10px] font-mono text-accent">{'{ AI/ML }'}</p>
                <p className="text-[10px] font-mono text-text-muted">{'& NLP'}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
