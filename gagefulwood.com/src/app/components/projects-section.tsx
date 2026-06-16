import { projects } from "../data/projects";
import FeaturedProjectsCarousel from "./featured-projects-carousel";
import Section from "./section";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured Engineering Work"
      description="Selected projects showing full-stack product work, backend API design, relational data modeling, and test-backed implementation."
    >
      <FeaturedProjectsCarousel projects={projects} />
    </Section>
  );
}
