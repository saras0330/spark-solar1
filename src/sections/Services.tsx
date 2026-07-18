import {
  Home,
  Building2,
  Factory,
  BatteryCharging,
  Wrench,
  Sun,
} from "lucide-react";

const services = [
  {
    icon: <Home size={26} />,
    title: "Residential Solar",
    text: "Smart rooftop systems for homes with maximum savings.",
  },
  {
    icon: <Building2 size={26} />,
    title: "Commercial Solar",
    text: "Reduce operational costs with efficient solar solutions.",
  },
  {
    icon: <Factory size={26} />,
    title: "Industrial Solar",
    text: "Large-scale solar power plants for industries.",
  },
  {
    icon: <BatteryCharging size={26} />,
    title: "Battery Storage",
    text: "Reliable backup power with advanced lithium batteries.",
  },
  {
    icon: <Wrench size={26} />,
    title: "AMC & Maintenance",
    text: "Professional maintenance for long-term performance.",
  },
  {
    icon: <Sun size={26} />,
    title: "Solar Water Heater",
    text: "Energy-efficient hot water solutions for every property.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[var(--background)]"
    >
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto">

          <span className="eyebrow">Our Services</span>

          <h2 className="section-heading">
            Complete Solar Energy Solutions
          </h2>

          <p className="section-sub">
            Everything you need from consultation to installation and support.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">

          {services.map((service) => (
            <div
              key={service.title}
              className="card p-8 transition duration-300 hover:-translate-y-1"
            >
              <div className="icon-tile">
                {service.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold text-[var(--text)]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-light)]">
                {service.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
