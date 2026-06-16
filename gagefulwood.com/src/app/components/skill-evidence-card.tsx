import type { SkillGroup } from "../data/skills";
import Tag from "./tag";

type SkillEvidenceCardProps = {
  group: SkillGroup;
};

export default function SkillEvidenceCard({ group }: SkillEvidenceCardProps) {
  return (
    <article className="skill-evidence-card">
      <div className="skill-evidence-card__header">
        <span className="skill-icon-marker" aria-hidden="true" />
        <h3>{group.title}</h3>
      </div>

      <p className="skill-evidence-card__text">{group.evidence}</p>

      <div className="skill-evidence-card__tools">
        {group.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>

      <p className="skill-evidence-card__projects">
        <span>Used in:</span> {group.projects.join(", ")}
      </p>
    </article>
  );
}
