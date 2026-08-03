import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { profile } from '../data/profile';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    // Mailto fallback — opens email client with pre-filled details
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    // Reset form after short delay
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setStatus('idle');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: `+880 ${profile.phone}`,
      href: `tel:+880${profile.phone}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Hasnain163',
      href: profile.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Hasnain Ahmed',
      href: profile.linkedin,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding border-t border-border-subtle"
      aria-labelledby="contact-heading"
    >
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll max-w-xl mx-auto">
          <span className="section-label">Contact</span>
          <h2 id="contact-heading" className="section-heading">
            Let&apos;s Build Something Meaningful.
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed">
            Whether you have a project idea, an opportunity, or just want to connect — I&apos;m
            open to conversations about software engineering, AI/ML, and backend development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="animate-on-scroll">
            <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-5">
              Direct Contact
            </h3>

            <ul className="space-y-3" aria-label="Contact information">
              {contactInfo.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-3 p-3 rounded-lg
                               border border-border-subtle bg-bg-card
                               hover:border-accent hover:bg-accent-glow transition-all duration-200 group"
                    aria-label={`${label}: ${value}`}
                  >
                    <div className="w-9 h-9 rounded-md bg-bg-secondary border border-border-subtle
                                    flex items-center justify-center flex-shrink-0
                                    group-hover:border-accent/50 transition-colors">
                      <Icon size={15} className="text-text-secondary group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] text-text-muted uppercase tracking-wider">{label}</p>
                      <p className="text-sm text-text-primary font-medium group-hover:text-accent transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Open to note */}
            <div className="mt-6 p-4 border border-border-subtle rounded-xl bg-bg-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold text-text-primary">Open to Opportunities</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Actively looking for Software Engineering internships, backend/full-stack roles,
                and collaborative research projects. Based in Dhaka, Bangladesh.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.15s' }}>
            <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-5">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-label="Contact form"
              noValidate
            >
              <div>
                <label htmlFor="contact-name" className="block text-xs text-text-muted uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Full name"
                  className="w-full px-4 py-3 bg-bg-card border border-border-subtle rounded-lg
                             text-text-primary placeholder-text-muted text-sm
                             focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                             transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs text-text-muted uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-bg-card border border-border-subtle rounded-lg
                             text-text-primary placeholder-text-muted text-sm
                             focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                             transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs text-text-muted uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-3 bg-bg-card border border-border-subtle rounded-lg
                             text-text-primary placeholder-text-muted text-sm resize-none
                             focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                             transition-colors"
                />
              </div>

              {/* Form note */}
              <p className="text-[11px] text-text-muted flex items-center gap-1.5">
                <MessageSquare size={11} />
                This will open your email client with the message pre-filled.
              </p>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>Opening email client...</>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
