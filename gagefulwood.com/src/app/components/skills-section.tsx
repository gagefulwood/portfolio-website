import { skillGroups } from "../data/skills";
import Section from "./section";

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies tied to project evidence"
      description="Skills are grouped by how they show up in the actual projects, not as a detached icon grid."
    >
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <p>{group.evidence}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
