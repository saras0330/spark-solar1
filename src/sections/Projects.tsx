import { ArrowUpRight } from "lucide-react";
import tirumalaiImage from "../assets/images/173f131c-08c0-4f1f-9d63-3d3b73d9056a.jpeg";
import ongcImage from "../assets/images/026ae34c-59da-470d-89dd-a342100e7f86.jpg";
import anviPetrochemImage from "../assets/images/f306fc5f-d3c6-48d1-a7cd-d19edbd127a1.jpg";
import vishalEngineersImage from "../assets/images/f63e9059-36d2-4807-befb-8854c5f7e06b.jpg";
import iolcImage from "../assets/images/47e0ef06-169e-4c4b-9ac8-48d4996c6a05.jpg";
import avinashVanaspatiImage from "../assets/images/afc3dcc0-30ed-4e0c-8d09-240cc2bae65c.jpg";
import gulbrandsonImage from "../assets/images/973e9ab6-2ba2-4db5-92fc-a36aec0d2e57.jpg";
import jalaramBricksImage from "../assets/images/d21f5f4d-a36a-4436-b766-8b4861be2b4f.jpg";

const projects = [
  {
    image: tirumalaiImage,
    title: "Tirumalai Chemicle",
    location: "Mumbai",
  },
  {
    image: ongcImage,
    title: "ONGC",
    location: "Dahej",
  },
  {
    image: anviPetrochemImage,
    title: "Avni Petrochem",
    location: "Ahmedabad",
  },
  {
    image: vishalEngineersImage,
    title: "Vishal Engineers",
    location: "Pune",
  },
  {
    image: iolcImage,
    title: "IOCL",
    location: "Vadodara",
  },
  {
    image: avinashVanaspatiImage,
    title: "Ashwin Vanashpati",
    location: "",
  },
  {
    image: gulbrandsonImage,
    title: "Gulbrandson",
    location: "Dahej",
  },
  {
    image: jalaramBricksImage,
    title: "Jalaram Bricks",
    location: "Godhra",
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
            A glimpse of our completed industrial and commercial
            solar installations.
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
