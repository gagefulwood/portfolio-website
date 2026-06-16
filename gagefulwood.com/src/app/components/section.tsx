type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <div className="section-inner">
        <div className="section-heading">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
