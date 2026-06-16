import type { Project } from "../data/projects";
import Badge from "./badge";
import Tag from "./tag";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={`project-card ${featured ? "project-card-featured" : ""}`}>
      <div className="project-card__main">
        <div className="project-card__title-row">
          <Badge tone={featured ? "teal" : "blue"}>{project.category}</Badge>
          <h3>{project.title}</h3>
        </div>

        <p className="project-summary">{project.summary}</p>

        <div className="tag-list" aria-label={`${project.title} technology stack`}>
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="project-card__proof">
          <h4>What this proves</h4>
          <ul>
            {project.proofPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <aside className="project-card__aside">
        <Badge tone={featured ? "amber" : "slate"}>{project.status}</Badge>

        <div className="evidence-grid">
          {project.evidence.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <p className="takeaway">{project.takeaway}</p>
        <p className="project-note">{project.note}</p>

        <div className="link-row">
          {project.links.length > 0 ? (
            project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))
          ) : (
            <span className="link-placeholder">{project.actionLabel}</span>
          )}
        </div>
      </aside>
    </article>
  );
}
