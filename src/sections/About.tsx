export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[var(--background)]"
    >
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop"
            alt="Spark Solar engineering team"
            className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
          />
        </div>

        <div>
          <span className="eyebrow">About Us</span>

          <h2 className="section-heading">
            Building India's Future With Clean Energy
          </h2>

          <p className="section-sub">
            Spark Solar delivers premium residential, commercial and industrial
            solar solutions with high-quality products, expert installation,
            government subsidy assistance and complete after-sales support.
          </p>
        </div>
      </div>
    </section>
  );
}
