import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { useActiveSection } from "../../hooks/useActiveSection";
import { scrollToSection } from "../../utils/scrollToSection";

// 1. Import the image at the top of your file
import logo from "../../assets/images/logo.png";

function Header() {
  // 2. Use the imported variable instead of a string path
  return <img src={logo} alt="Company Logo" />;
}
const navLinks = [
  "Home",
  "About",
  "Services",
  "Calculator",
  "Projects",
  "FAQ",
  "Contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeId } = useActiveSection();


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-xl"
            : "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl"
        }`}
      >
        <div className="container-custom flex h-16 items-center justify-between lg:h-20">
          <a
            href="#"
            className="flex items-center gap-4"
            aria-label="Spark Solar Home"
          >
            {/* Circular Logo */}
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg flex items-center justify-center bg-white shrink-0">
              <img
                src={logo}
                alt="Spark Solar"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="leading-tight">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Spark Solar
              </h2>

              <p className="text-xs tracking-[3px] uppercase text-slate-500">
                 Power A renewable Energy solutions 
              </p>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-10">
            {navLinks.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeId === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                  className={`font-semibold transition ${
                    isActive
                      ? "text-blue-500"
                      : "text-slate-700 hover:text-blue-500 dark:text-slate-200"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-4">
            <ThemeToggle />

            <a
              href="#"
              className="btn-primary"
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
              9974724999
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="xl:hidden"
            aria-label="Open mobile menu"
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

