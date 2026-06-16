import { projects } from "../data/projects";
import ProjectCard from "./project-card";
import Section from "./section";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured Engineering Work"
      description="Focused case studies showing full-stack product work, backend API design, relational data modeling, and test-backed implementation."
    >
      <div className="projects-stack">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} />
        ))}
      </div>
    </Section>
  );
}
