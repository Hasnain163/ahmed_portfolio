import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border-subtle bg-bg-secondary"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-main py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-1.5 justify-center md:justify-start mb-1">
              <span className="font-mono text-accent text-sm opacity-60">{'<'}</span>
              <span className="font-semibold text-text-primary">{profile.name}</span>
              <span className="font-mono text-accent text-sm opacity-60">{'/>'}</span>
            </div>
            <p className="text-text-muted text-xs">Computer Science &amp; Engineering Undergraduate</p>
            <p className="text-text-muted text-xs">United International University</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3" aria-label="Social links">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub profile"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-icon"
              aria-label="Send email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-accent my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center">
          <p className="text-text-muted text-xs">
            &copy; {currentYear} Hasnain Ahmed. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-mono">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
