import { Brain, FlaskConical, Users, Lightbulb } from 'lucide-react';

// Subtle attention-inspired SVG decoration
const AttentionViz = () => (
  <svg
    className="absolute right-6 top-6 opacity-[0.07] pointer-events-none"
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Grid of nodes — attention matrix visualization */}
    {[0, 1, 2, 3, 4].map((row) =>
      [0, 1, 2, 3, 4].map((col) => {
        const opacity = Math.max(0.2, 1 - Math.abs(row - 2) * 0.2 - Math.abs(col - 2) * 0.2);
        return (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 35}
            cy={20 + row * 35}
            r={3}
            fill="#38bdf8"
            opacity={opacity}
          />
        );
      })
    )}
    {/* Connecting lines for selected tokens */}
    <line x1="20" y1="90" x2="90" y2="20" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4" />
    <line x1="90" y1="90" x2="90" y2="20" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
    <line x1="160" y1="90" x2="90" y2="20" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4" />
    {/* Math-like label */}
    <text x="60" y="170" fill="#38bdf8" fontSize="10" fontFamily="monospace" opacity="0.5">
      Attention(Q,K,V)
    </text>
  </svg>
);

const Research = () => {
  return (
    <section
      id="research"
      className="section-padding border-t border-border-subtle"
      aria-labelledby="research-heading"
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <span className="section-label">FYDP Research</span>
          <h2 id="research-heading" className="section-heading">
            Current Research
          </h2>
          <p className="text-text-secondary max-w-xl text-sm leading-relaxed">
            My Final Year Design Project focuses on AI and Natural Language Processing. This is
            ongoing undergraduate research — no publications or results are claimed at this stage.
          </p>
        </div>

        {/* Research card */}
        <div className="research-card animate-on-scroll relative overflow-hidden">
          <AttentionViz />

          {/* Status badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="badge-ongoing">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
              FYDP 1 — Ongoing
            </span>
            <span className="text-xs font-mono text-text-muted">2026</span>
          </div>

          {/* Research title */}
          <div className="mb-6 max-w-3xl">
            <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-2">Research Title</p>
            <h3 className="text-lg md:text-xl font-bold text-text-primary leading-snug">
              "Curvature-Informed Token Eviction: Mitigating Quadratic Attention Bottlenecks
              via Local Hessian Saliency"
            </h3>
          </div>

          {/* Research metadata grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Brain size={14} className="text-accent flex-shrink-0" />
                <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium">Domain</p>
              </div>
              <p className="text-sm text-text-primary font-medium">Artificial Intelligence</p>
            </div>

            <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical size={14} className="text-accent flex-shrink-0" />
                <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium">Research Areas</p>
              </div>
              <p className="text-sm text-text-primary font-medium">Machine Learning · NLP</p>
            </div>

            <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users size={14} className="text-accent flex-shrink-0" />
                <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium">Supervisor</p>
              </div>
              <p className="text-sm text-text-primary font-medium">Mr. Nahid Hossen</p>
            </div>

            <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={14} className="text-accent flex-shrink-0" />
                <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium">Status</p>
              </div>
              <p className="text-sm text-text-primary font-medium">Undergraduate Research</p>
            </div>
          </div>

          {/* Research context */}
          <div className="divider-accent mb-6" />

          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-3">Research Context</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              This research investigates methods to reduce the computational cost of self-attention
              in transformer models. Specifically, it explores using local curvature information
              (Hessian-based saliency) to identify and evict less important tokens from the
              attention computation, targeting the quadratic scaling bottleneck that limits
              long-context processing in large language models.
            </p>
          </div>

          {/* Research interests */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'Transformer Architecture',
              'Attention Mechanisms',
              'Token Eviction',
              'Hessian Saliency',
              'LLM Efficiency',
              'Natural Language Processing',
              'Machine Learning',
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono text-accent/70 border border-accent/20 rounded-md
                           bg-accent/5 hover:bg-accent/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-[11px] font-mono text-text-muted">
            // This is ongoing undergraduate research. No publications, benchmarks, or conclusive results are claimed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
