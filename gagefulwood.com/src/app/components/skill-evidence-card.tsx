import type { SkillGroup } from "../data/skills";

type SkillEvidenceCardProps = {
  group: SkillGroup;
};

function SkillIcon({ icon }: { icon: SkillGroup["icon"] }) {
  if (icon === "frontend") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 13h4" />
        <path d="M7 16h7" />
      </svg>
    );
  }

  if (icon === "backend") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="5" rx="1.5" />
        <rect x="4" y="10" width="16" height="5" rx="1.5" />
        <rect x="4" y="16" width="16" height="5" rx="1.5" />
        <path d="M8 6.5h.01M8 12.5h.01M8 18.5h.01" />
      </svg>
    );
  }

  if (icon === "data") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
        <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z" />
      <path d="M16 16l4 4" />
      <path d="M18 14l3 3" />
    </svg>
  );
}

export default function SkillEvidenceCard({ group }: SkillEvidenceCardProps) {
  return (
    <article className={`skill-evidence-card skill-evidence-card--${group.accent}`}>
      <div className="skill-evidence-card__top">
        <div className="skill-evidence-card__icon">
          <SkillIcon icon={group.icon} />
        </div>
        <h3>{group.title}</h3>
      </div>

      <div className="skill-evidence-card__accent-line" />

      <p className="skill-evidence-card__description">{group.evidence}</p>

      <div className="skill-evidence-card__technologies">
        <p className="skill-evidence-card__label">Key Technologies</p>
        <div className="skill-evidence-card__chips">
          {group.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="skill-evidence-card__footer">
        <span className="skill-evidence-card__footer-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" />
          </svg>
        </span>
        <div>
          <strong>Used in:</strong>
          <span>{group.projects.join(", ")}</span>
        </div>
      </div>
    </article>
  );
}
