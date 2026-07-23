import { X, Phone, ChevronRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Calculator", id: "calculator" },
  { name: "Projects", id: "projects" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[320px] bg-[var(--background)] shadow-2xl transition-transform duration-500 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">

          <div>

            <h2 className="text-xl font-bold text-[var(--text)]">
              Spark Solar
            </h2>

            <p className="text-[11px] tracking-[2.5px] uppercase text-[var(--text-muted)]">
               Power A renewable Energy solutions
            </p>

          </div>

          <button onClick={onClose} className="text-[var(--text)]" aria-label="Close menu">
            <X size={24} />
          </button>

        </div>

        <div className="p-6">

          <div className="mb-8 flex justify-end">
            <ThemeToggle />
          </div>

          <nav className="space-y-1">

            {links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  onClose();
                }}
                className="flex items-center justify-between rounded-xl px-5 py-4 font-medium text-[var(--text-light)] hover:bg-[var(--surface)] hover:text-[var(--text)] transition"
              >
                {item.name}
                <ChevronRight size={18} />
              </a>
            ))}

          </nav>

          <a
            href="#"
            className="btn-primary mt-10 w-full justify-center"
            onClick={(e) => {
              e.preventDefault();
              const url =
                "https://wa.me/919974724999?text=" +
                encodeURIComponent(
                  "Hello Spark Solar, I am interested in installing a solar system. Please share details."
                );
              window.open(url, "_blank", "noopener,noreferrer");
            }}
            aria-label="Call Now on WhatsApp"
          >
            <Phone size={18} />
            Call Now
          </a>

        </div>
      </aside>
    </>
  );
}