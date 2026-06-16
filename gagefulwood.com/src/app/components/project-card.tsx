import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={`project-card ${featured ? "project-card-featured" : ""}`}>
      <div className="project-card-header">
        <div>
          <p className="project-type">{project.type}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="status-badge">{project.status}</span>
      </div>

      <p className="project-summary">{project.summary}</p>

      <div className="tag-list" aria-label={`${project.title} technology stack`}>
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-grid">
        <div>
          <h4>What I built</h4>
          <ul>
            {project.whatIBuilt.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Technical notes</h4>
          <ul>
            {project.technicalNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-footnotes">
        <div>
          <h4>Current limits</h4>
          <ul>
            {project.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="takeaway">{project.takeaway}</p>
      </div>

      {project.links.length > 0 && (
        <div className="link-row">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
