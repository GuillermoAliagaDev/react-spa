export default function HeroBanner({ title, subtitle, children }) {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children && <div className="hero-actions">{children}</div>}
      </div>
    </section>
  );
}
