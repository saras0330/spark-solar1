import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { scrollToSection } from "../../utils/scrollToSection";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--background)] pt-28">

      <HeroBackground />

      <div className="container-custom relative z-10 grid min-h-[90vh] items-center gap-16 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            India's Trusted Solar Company
          </div>

          <h1
            className="mt-8 text-6xl font-bold leading-[1.05] lg:text-7xl"
            style={{ color: "var(--text)" }}
          >
            Switch To
            <br />
            <span style={{ color: "#38BDF8" }}>
              Smart Solar
            </span>


            <br />
            Energy
          </h1>

          <p
            className="mt-8 max-w-xl text-xl leading-9"
            style={{ color: "var(--text-light)" }}
          >
            Residential • Commercial • Industrial Solar Solutions
            with premium installation and government subsidy support.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

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
                scrollToSection("services");
              }}
              aria-label="Explore Services"
            >
              Explore Services
            </button>

          </div>

          <div className="mt-12 space-y-4">

            {[
              "25 Years Performance Warranty",
              "MNRE Approved Products",
              "Free Site Survey",
              "Government Subsidy Assistance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">

                <CheckCircle
                  size={20}
                  className="text-green-500"
                />

                <span style={{ color: "var(--text)" }}>
                  {item}
                </span>

              </div>
            ))}

          </div>

          <div className="mt-16 grid grid-cols-3 gap-6">

            <div className="card p-6 text-center">

              <h2
                className="text-4xl font-bold"
                style={{ color: "#38BDF8" }}
              >
                500+

              </h2>

              <p style={{ color: "var(--text-light)" }}>
                Projects
              </p>

            </div>

            <div className="card p-6 text-center">

              <h2
                className="text-4xl font-bold"
                style={{ color: "#22C55E" }}
              >
                98%
              </h2>

              <p style={{ color: "var(--text-light)" }}>
                Happy Clients
              </p>

            </div>

            <div className="card p-6 text-center">

              <h2
                className="text-4xl font-bold"
                style={{ color: "#2563EB" }}
              >
                25Y
              </h2>

              <p style={{ color: "var(--text-light)" }}>
                Warranty
              </p>

            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1400&auto=format&fit=crop"
            alt="Solar"
            className="rounded-[35px] shadow-2xl"
          />

          <div className="card absolute -left-8 top-10 p-5">

            <h3
              className="text-3xl font-bold"
              style={{ color: "#38BDF8" }}
            >
              ₹1.5Cr+

            </h3>

            <p style={{ color: "var(--text-light)" }}>
              Electricity Saved
            </p>

          </div>

          <div className="card absolute -right-8 bottom-10 p-5">

            <h3
              className="text-3xl font-bold"
              style={{ color: "#22C55E" }}
            >
              120 MW
            </h3>

            <p style={{ color: "var(--text-light)" }}>
              Installed Capacity
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}