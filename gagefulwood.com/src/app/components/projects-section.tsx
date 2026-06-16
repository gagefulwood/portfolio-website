import { projects } from "../data/projects";
import ProjectCard from "./project-card";
import Section from "./section";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Current evidence of software engineering work"
      description="The old project list has been replaced with work that can be described accurately: one full-stack product and one focused backend take-home assignment."
    >
      <div className="projects-stack">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} />
        ))}
      </div>
    </Section>
  );
}
