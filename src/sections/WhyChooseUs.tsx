import {
  ShieldCheck,
  Wrench,
  BadgeIndianRupee,
  Headphones,
} from "lucide-react";

const items = [
  {
    icon: <ShieldCheck size={26} />,
    title: "Premium Quality",
    text: "Tier-1 solar panels with industry-leading warranty.",
  },
  {
    icon: <Wrench size={26} />,
    title: "Expert Installation",
    text: "Certified engineers ensuring perfect installation.",
  },
  {
    icon: <BadgeIndianRupee size={26} />,
    title: "Government Subsidy",
    text: "Complete subsidy documentation assistance.",
  },
  {
    icon: <Headphones size={26} />,
    title: "Lifetime Support",
    text: "Quick maintenance and after-sales service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-24 bg-[var(--surface)]"
    >
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto">

          <span className="eyebrow">Why Choose Us</span>

          <h2 className="section-heading">
            Trusted Solar Partner Across India
          </h2>

          <p className="section-sub">
            Premium products, expert engineers and world-class customer support.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">

          {items.map((item) => (
            <div
              key={item.title}
              className="card p-8 text-center transition duration-300 hover:-translate-y-1"
            >
              <div className="icon-tile mx-auto">
                {item.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-[var(--text)]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-light)]">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
