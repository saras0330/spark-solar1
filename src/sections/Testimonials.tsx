import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Uday Sharma",
    role: "Home Owner",
    city: "Vadodra",
    review:
      "Customer support has been helpful whenever I had questions, though response time could be a bit faster",
  },
  {
    name: "Neetu Thakur",
    role: "House Owner",
    city: "Vadodara",
    review:
      "Professional team and honest guidance. They explained subsidy and load calculation clearly before installation.",
  },
  {
    name: "Shashikant Gautam",
    role: "House Owner",
    city: "Vadodra",
    review:
      "Spark Solar Power offers reliable and efficient solar energy solutions",
  },
    {
    name: "Rohit Sharma",
    role: "House Owner",
    city: "Vadodra",
    review:
      "Spark Solar Power provided quality material and smooth installation. Satisfied with their service and support.Great experience 👍.",
  },
      {
    name: "Priya Yadav",
    role: "House Owner",
    city: "Vadodra",
    review:
      "Great service with Knowledgeable Team Quality work",
  },
      {
    name: "Bright Side",
    role: "House Owner",
    city: "Vadodra",
    review:
      "Great work with better services.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[var(--surface)]"
    >
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto">

          <span className="eyebrow">Testimonials</span>

          <h2 className="section-heading">
            Trusted By Hundreds Of Customers
          </h2>

          <p className="section-sub">
            Customer satisfaction is our biggest achievement.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-14">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="card p-8 transition duration-300 hover:-translate-y-1"
            >

              <div className="flex gap-1 text-[var(--primary)]">

                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}

              </div>

              <p className="mt-6 text-sm leading-7 text-[var(--text-light)]">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <div className="h-12 w-12 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center font-bold text-sm shrink-0">
                  {initials(item.name)}
                </div>

                <div>

                  <h3 className="text-sm font-bold text-[var(--text)]">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {item.role} · {item.city}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
