import { skillGroups } from "../data/skills";
import Section from "./section";
import SkillEvidenceCard from "./skill-evidence-card";

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Skills with Project Evidence"
      description="Technologies are grouped by where they appear in actual project work, not as a detached keyword list."
    >
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillEvidenceCard key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}
