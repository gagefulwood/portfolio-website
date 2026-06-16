import { technicalFocus } from "../data/profile";
import Section from "./section";

export default function FocusSection() {
  return (
    <Section
      id="focus"
      eyebrow="Technical focus"
      title="What I am building toward"
      description="The portfolio now prioritizes specific engineering evidence over a broad list of tools."
    >
      <div className="focus-grid">
        {technicalFocus.map((item) => (
          <article key={item.title} className="focus-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
