import { profile } from "../data/profile";
import Section from "./section";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      description="For now, the contact form and GitHub profile are the clearest public links. Resume and additional links should be added after they are updated."
    >
      <div className="contact-layout">
        <div className="contact-panel">
          <h3>Professional links</h3>
          <p>{profile.resumeNote}</p>
          <div className="link-row">
            {profile.links
              .filter((link) => link.href !== "#contact")
              .map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
          </div>
        </div>

        <form
          action="https://formspree.io/f/xpwpopno"
          method="POST"
          className="contact-form"
        >
          <label>
            Name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit">Send message</button>
        </form>
      </div>
    </Section>
  );
}
