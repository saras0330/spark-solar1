import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Sun,
} from "lucide-react";

const companyLinks = ["Home", "About", "Services", "Projects", "Contact"];
const serviceLinks = [
  "Residential Solar",
  "Commercial Solar",
  "Industrial Solar",
  "Battery Storage",
  "AMC & Maintenance",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-slate-300">

      <div className="container-custom py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          <div>

            <div className="flex items-center gap-3">

              <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Sun size={20} />
              </div>

              <div>

                <h2 className="text-lg font-bold text-white">
                  Spark Solar
                </h2>

                <p className="text-xs text-slate-400">
                  Premium Solar Energy
                </p>

              </div>

            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Helping homes, businesses and industries switch to clean,
              affordable and sustainable solar energy solutions.
            </p>

          </div>

          <div>

            <h3 className="text-sm font-bold text-white mb-5 tracking-wide uppercase">
              Company
            </h3>

            <div className="space-y-3 text-sm text-slate-400">

              {companyLinks.map((link) => (
                <p key={link} className="hover:text-amber-400 transition cursor-pointer">
                  {link}
                </p>
              ))}

            </div>

          </div>

          <div>

            <h3 className="text-sm font-bold text-white mb-5 tracking-wide uppercase">
              Services
            </h3>

            <div className="space-y-3 text-sm text-slate-400">

              {serviceLinks.map((link) => (
                <p key={link} className="hover:text-amber-400 transition cursor-pointer">
                  {link}
                </p>
              ))}

            </div>

          </div>

          <div>

            <h3 className="text-sm font-bold text-white mb-5 tracking-wide uppercase">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <div className="space-y-2.5">
                <div className="flex gap-3">
                  <Phone className="text-amber-400 shrink-0" size={18} />
                  <a
                    href="tel:9974724999"
                    className="hover:text-amber-400 transition"
                  >
                    +91 99747 24999
                  </a>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-amber-400 shrink-0" size={18} />
                  <a
                    href="tel:8401910162"
                    className="hover:text-amber-400 transition"
                  >
                    Vijay Singh: +91 84019 10162
                  </a>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-amber-400 shrink-0" size={18} />
                  <a
                    href="tel:9898199620"
                    className="hover:text-amber-400 transition"
                  >
                    Avinash: +91 98981 99620
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="text-amber-400 shrink-0" size={18} />
                <span>info@sparksolar.in</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-amber-400 shrink-0" size={18} />
                <span>Vadodara, Gujarat</span>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">

          <p className="text-sm text-slate-500 text-center">
            © 2026 Spark Solar. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Back to top"
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-900 transition flex items-center justify-center"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}
