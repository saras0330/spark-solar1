import { ArrowRight, CheckCircle2, Play, Users, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "25 Years Performance Warranty",
  "MNRE Approved Products",
  "Government Subsidy Support",
  "Free Site Survey",
];

const stats = [
  { icon: <Users size={20} />, value: "500+", label: "Projects Completed" },
  { icon: <IndianRupee size={20} />, value: "₹1.5Cr+", label: "Customer Savings" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--background)]"
    >

      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--primary-soft)] blur-[120px]" />

      <div className="container-custom relative py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >

            <span className="eyebrow rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2">
              India's Trusted Solar Company
            </span>

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.12] tracking-tight text-[var(--text)]">
              Power Your Future With{" "}
              <span className="text-[var(--primary)]">Smart Solar</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-light)]">
              Premium residential, commercial and industrial solar
              installations engineered for maximum savings, sustainability
              and performance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                className="btn-primary"
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.setTimeout(() => {
                    const first =
                      document.querySelector<HTMLInputElement>(
                        "#contact input[name='name'], #contact input[placeholder='Full Name']"
                      ) ?? null;
                    first?.focus();
                  }, 350);
                }}
                aria-label="Get Free Quote"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </button>

              <button
                className="btn-outline"
                onClick={() => {
                  const evt = new CustomEvent("spark:openVideoModal");
                  window.dispatchEvent(evt);
                }}
                aria-label="Watch Video"
              >
                <Play size={16} />
                Watch Video
              </button>

            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-x-6 gap-y-4">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="shrink-0 text-[var(--primary)]"
                    size={18}
                  />

                  <span className="text-sm text-[var(--text-light)]">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .15 }}
          >

            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
              alt="Solar panel installation"
              className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
            />

            <div className="mt-6 grid grid-cols-2 gap-4">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card flex items-center gap-4 px-5 py-4"
                >
                  <div className="icon-tile shrink-0">
                    {stat.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-lg font-bold text-[var(--text)] leading-none truncate">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-[var(--text-muted)] truncate">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
