import { profile } from "../data/profile";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <p className="hero-kicker">{profile.educationLine}</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions" aria-label="Primary links">
          <a className="button-primary" href="#projects">
            View projects
          </a>
          {profile.links.map((link) => (
            <a key={link.href} className="button-secondary" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="hero-note">
          <p>{profile.availability}</p>
          <p>{profile.resumeNote}</p>
        </div>
      </div>

      <a className="hero-scroll-indicator" href="#focus" aria-label="Scroll to technical focus">
        <span>Scroll to learn more</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5v14" />
          <path d="m6 13 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
