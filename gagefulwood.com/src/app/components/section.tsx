import SectionHeader from "./section-header";

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
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        {children}
      </div>
    </section>
  );
}
