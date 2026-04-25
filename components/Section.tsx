type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={`section ${className ?? ""}`.trim()}>
      <div className="container">
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        {title ? <h2 className="section-title">{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}
