import { Github, ExternalLink, Clock, CheckCircle2, Layers } from 'lucide-react';
import { projects, type ProjectStatus } from '../data/projects';

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  if (status === 'Completed') {
    return (
      <span className="badge-completed">
        <CheckCircle2 size={10} />
        Completed
      </span>
    );
  }
  if (status === 'In Progress') {
    return (
      <span className="badge-inprogress">
        <Clock size={10} />
        In Progress
      </span>
    );
  }
  return (
    <span className="badge-ongoing">
      <Layers size={10} />
      Early Stage
    </span>
  );
};

const FeaturedProject = ({ project }: { project: typeof projects[0] }) => (
  <article
    className="animate-on-scroll mb-6
               bg-bg-card border border-border-subtle rounded-2xl overflow-hidden
               hover:border-border-accent transition-all duration-300 hover:shadow-card-hover
               grid grid-cols-1 lg:grid-cols-2"
    aria-labelledby={`project-title-${project.id}`}
  >
    {/* Image side */}
    <div className="relative overflow-hidden bg-bg-secondary">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} — admin dashboard screenshot`}
          className="w-full h-[260px] lg:h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-[260px] lg:h-full flex items-center justify-center bg-bg-secondary">
          <span className="text-text-muted font-mono text-sm">// UI Preview</span>
        </div>
      )}
      {/* Featured overlay text */}
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-semibold
                         bg-accent text-bg-primary rounded uppercase tracking-wider">
          ★ Featured Project
        </span>
      </div>
    </div>

    {/* Content side */}
    <div className="p-7 lg:p-8 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono text-accent opacity-70">{project.category}</span>
        <span className="text-border-accent">·</span>
        <StatusBadge status={project.status} />
      </div>

      <h3
        id={`project-title-${project.id}`}
        className="text-xl font-bold text-text-primary mb-3"
      >
        {project.title}
      </h3>

      <p className="text-text-secondary text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Key features (top 4) */}
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-2">Key Features</p>
        <ul className="grid grid-cols-1 gap-1.5" aria-label="Project features">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="text-accent mt-1 flex-shrink-0 text-xs">▸</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-2">Technologies</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
          {project.tools?.map((tool) => (
            <span key={tool} className="tech-chip opacity-70">{tool}</span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs px-4 py-2"
          aria-label={`View ${project.title} on GitHub`}
        >
          <Github size={13} />
          GitHub
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  </article>
);

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <article
    className="card group flex flex-col animate-on-scroll"
    aria-labelledby={`project-title-${project.id}`}
  >
    {/* Status + category */}
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-mono text-accent opacity-60 truncate">{project.category}</span>
      <StatusBadge status={project.status} />
    </div>

    <h3
      id={`project-title-${project.id}`}
      className="text-base font-bold text-text-primary mb-2 group-hover:text-accent transition-colors"
    >
      {project.title}
    </h3>

    <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
      {project.description}
    </p>

    {/* Current status note for in-progress */}
    {project.status === 'In Progress' && (
      <p className="text-[11px] font-mono text-amber-400 bg-amber-900/10 border border-amber-900/30 rounded-md px-2.5 py-1.5 mb-4">
        // Currently in active development
      </p>
    )}

    {/* My contribution */}
    <div className="mb-4">
      <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-2">Contribution</p>
      <ul className="space-y-1">
        {project.contribution.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
            <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Technologies */}
    <div className="flex flex-wrap gap-1.5 mb-5">
      {project.technologies.map((tech) => (
        <span key={tech} className="tech-chip">{tech}</span>
      ))}
    </div>

    {/* GitHub link */}
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary text-xs px-4 py-2 mt-auto w-fit"
      aria-label={`View ${project.title} on GitHub`}
    >
      <Github size={13} />
      View on GitHub
    </a>
  </article>
);

const Projects = () => {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-padding border-t border-border-subtle"
      aria-labelledby="projects-heading"
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <span className="section-label">Portfolio</span>
          <h2 id="projects-heading" className="section-heading">
            Projects
          </h2>
          <p className="text-text-secondary max-w-xl text-sm leading-relaxed">
            A selection of software projects built during coursework, personal exploration, and
            team collaboration. Focused on backend systems, full-stack development, and design.
          </p>
        </div>

        {/* Featured project */}
        {featured && <FeaturedProject project={featured} />}

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {others.map((project, i) => (
            <div key={project.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
