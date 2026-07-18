import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    title: "Residential Rooftop",
    location: "Ahmedabad, Gujarat",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
    title: "Commercial Building",
    location: "Vadodara, Gujarat",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    title: "Industrial Solar Plant",
    location: "Jaipur, Rajasthan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    title: "Farm Solar System",
    location: "Rajkot, Gujarat",
  },
  {
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
    title: "School Campus",
    location: "Surat, Gujarat",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1200&auto=format&fit=crop",
    title: "Hospital Installation",
    location: "Udaipur, Rajasthan",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[var(--background)]"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Work</span>

          <h2 className="section-heading">
            Recent Installations
          </h2>

          <p className="section-sub">
            A glimpse of our completed residential, commercial and industrial
            solar projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card group overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-base font-bold text-[var(--text)]">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    {project.location}
                  </p>
                </div>

                <ArrowUpRight className="shrink-0 text-[var(--primary)]" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
