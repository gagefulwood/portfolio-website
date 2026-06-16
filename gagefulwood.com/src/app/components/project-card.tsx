import type { Project, ProjectEvidence } from "../data/projects";
import Tag from "./tag";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

function SmallIcon({ type }: { type: "category" | "proof" | "status" | "next" }) {
  if (type === "category") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    );
  }

  if (type === "proof") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    );
  }

  if (type === "status") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (type === "next") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19c4.8-1 8.4-4.6 9.4-9.4L16 2l3 3 3 3-7.6 1.6" />
        <path d="M9 15 5 19" />
        <path d="M7 17H4v-3" />
        <path d="M13 6 18 11" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

function EvidenceIcon({ accent }: { accent: ProjectEvidence["accent"] }) {
  if (accent === "blue") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="5" rx="1.5" />
        <rect x="4" y="10" width="16" height="5" rx="1.5" />
        <rect x="4" y="16" width="16" height="5" rx="1.5" />
      </svg>
    );
  }

  if (accent === "purple") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
        <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </svg>
    );
  }

  if (accent === "amber") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5.5 5.8v5.3c0 4.2 2.7 7.9 6.5 9.4 3.8-1.5 6.5-5.2 6.5-9.4V5.8L12 3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 19v2h8v-2" />
      <path d="M8 9h8" />
    </svg>
  );
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={`project-card ${featured ? "project-card-featured" : ""}`}>
      <div className="project-case-study__main">
        <span className="project-case-study__category">
          <SmallIcon type="category" />
          {project.category}
        </span>

        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <div className="tag-list" aria-label={`${project.title} technology stack`}>
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="project-proof">
          <div className="project-proof__heading">
            <span aria-hidden="true">
              <SmallIcon type="proof" />
            </span>
            <h4>What this proves</h4>
          </div>

          <div className="project-proof__timeline">
            {project.proofPoints.map((item) => (
              <div key={item.lead} className="project-proof__item">
                <span aria-hidden="true" />
                <p>
                  <strong>{item.lead}</strong> — {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="project-side-panel">
        <div className="project-status">
          <span className="project-panel-card__icon" aria-hidden="true">
            <SmallIcon type="status" />
          </span>
          <div>
            <span>{project.status.label}</span>
            <strong>{project.status.value}</strong>
            <p>{project.status.detail}</p>
          </div>
        </div>

        <div className="project-evidence-grid">
          {project.evidence.map((item) => (
            <div
              key={item.label}
              className={`project-evidence-card project-evidence-card--${item.accent}`}
            >
              <span className="project-evidence-card__icon" aria-hidden="true">
                <EvidenceIcon accent={item.accent} />
              </span>
              <div>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className="project-next-step">
          <span className="project-panel-card__icon" aria-hidden="true">
            <SmallIcon type="next" />
          </span>
          <div>
            <span>{project.nextStep.label}</span>
            <strong>{project.nextStep.value}</strong>
            <p>{project.nextStep.detail}</p>
          </div>
        </div>
      </aside>
    </article>
  );
}
