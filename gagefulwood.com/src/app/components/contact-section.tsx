import { profile } from "../data/profile";
import Section from "./section";

const linkedinUrl = "https://www.linkedin.com/in/gage-fulwood-b74624277/";

function ContactIcon({
  type,
}: {
  type: "send" | "github" | "linkedin" | "external" | "mail" | "shield";
}) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.88 1.52 2.32 1.08 2.88.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.02c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 9.5V19" />
        <path d="M6.5 5.5v.01" />
        <path d="M11 19v-9.5" />
        <path d="M11 13.8c0-2.4 1.2-4.3 3.8-4.3 2.3 0 3.7 1.5 3.7 4.2V19" />
        <rect x="3" y="3" width="18" height="18" rx="3" />
      </svg>
    );
  }

  if (type === "external") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 5h5v5" />
        <path d="m10 14 9-9" />
        <path d="M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5.5 5.8v5.3c0 4.2 2.7 7.9 6.5 9.4 3.8-1.5 6.5-5.2 6.5-9.4V5.8L12 3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default function ContactSection() {
  const githubLink = profile.links.find((link) => link.label === "GitHub");

  return (
    <Section
      id="contact"
      className="contact-section"
      eyebrow="Contact"
      title="Get in touch"
      description="Use the form to reach out, or review my public work through GitHub and LinkedIn."
    >
      <div className="contact-layout">
        <article className="contact-links-card">
          <div className="contact-links-card__intro">
            <div className="contact-links-card__icon">
              <ContactIcon type="send" />
            </div>

            <div>
              <h3>Professional links</h3>
              <p>{profile.resumeNote}</p>
            </div>
          </div>

          <div className="contact-links-card__divider" />

          <div className="contact-link-list">
            {githubLink && (
              <a
                href={githubLink.href}
                className="contact-link-row"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-row__icon">
                  <ContactIcon type="github" />
                </span>
                <span>
                  <strong>GitHub</strong>
                  <span>View my code and contributions</span>
                </span>
                <span className="contact-link-row__external-icon">
                  <ContactIcon type="external" />
                </span>
              </a>
            )}

            <a
              href={linkedinUrl}
              className="contact-link-row"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-row__icon">
                <ContactIcon type="linkedin" />
              </span>
              <span>
                <strong>LinkedIn</strong>
                <span>View my professional profile</span>
              </span>
              <span className="contact-link-row__external-icon">
                <ContactIcon type="external" />
              </span>
            </a>
          </div>
        </article>

        <article className="contact-form-card">
          <div className="contact-form-card__header">
            <div className="contact-form-card__icon">
              <ContactIcon type="mail" />
            </div>

            <div>
              <h3>Send a message</h3>
              <p>I&apos;ll get back to you as soon as I can.</p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xpwpopno"
            method="POST"
            className="contact-form"
          >
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Your email"
                autoComplete="email"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="How can I help?"
                rows={5}
                required
              />
            </label>
            <button type="submit">
              <ContactIcon type="send" />
              Send message
            </button>
          </form>
        </article>
      </div>

      <div className="contact-privacy-note">
        <span aria-hidden="true">
          <ContactIcon type="shield" />
        </span>
        <p>
          <strong>I respect your privacy.</strong> Your information will only be
          used to respond to your message.
        </p>
      </div>
    </Section>
  );
}
