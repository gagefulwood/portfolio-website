import type { TechnicalFocusItem } from "../data/profile";
import { technicalFocusItems } from "../data/profile";
import SectionHeader from "./section-header";

function FocusIcon({ icon }: { icon: TechnicalFocusItem["icon"] }) {
  if (icon === "product") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 13h4" />
        <path d="M7 16h2" />
        <path d="M13 13h4v4h-4z" />
      </svg>
    );
  }

  if (icon === "database") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
        <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </svg>
    );
  }

  if (icon === "interface") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M4 9h16" />
        <path d="m10 13-2 2 2 2" />
        <path d="m14 13 2 2-2 2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5.5 5.8v5.3c0 4.2 2.7 7.9 6.5 9.4 3.8-1.5 6.5-5.2 6.5-9.4V5.8L12 3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

export default function FocusSection() {
  return (
    <section id="focus" className="section-shell technical-focus" data-scroll-section>
      <div className="section-inner">
        <SectionHeader
          eyebrow="Technical Focus"
          title="What I am building toward"
          description="I am focused on practical full-stack engineering: building usable product workflows, modeling backend data clearly, connecting interfaces to real APIs, and keeping work maintainable enough to review and extend."
        />

        <div className="technical-roadmap">
          <div className="technical-roadmap__timeline" aria-hidden="true">
            <div className="technical-roadmap__line" />
            {technicalFocusItems.map((item) => (
              <div
                key={item.number}
                className={`technical-roadmap__marker technical-roadmap__item--${item.accent}`}
              >
                {item.number}
              </div>
            ))}
          </div>

          <div className="technical-roadmap__content">
            {technicalFocusItems.map((item) => (
              <article
                key={item.number}
                className={`technical-roadmap__item technical-roadmap__item--${item.accent}`}
              >
                <div className="technical-roadmap__mobile-number">{item.number}</div>

                <div className="technical-roadmap__item-content">
                  <div className="technical-roadmap__icon">
                    <FocusIcon icon={item.icon} />
                  </div>

                  <h3>{item.title}</h3>
                  <div className="technical-roadmap__accent" />
                  <p>{item.description}</p>

                  <div className="technical-roadmap__used">
                    <span aria-hidden="true" />
                    <div>
                      <strong>Shows up in:</strong> {item.showsUpIn.join(", ")}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="technical-focus__note">
          <span className="technical-focus__note-icon" aria-hidden="true">
            ☆
          </span>
          <p>
            <strong>Why this matters:</strong> I focus on building real software
            with clear architecture, strong data models, and test-backed backend
            logic, not just adding more tools.
          </p>
        </div>
      </div>
    </section>
  );
}
