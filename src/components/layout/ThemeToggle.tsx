import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-10 w-10 rounded-xl border border-[var(--border)] flex items-center justify-center bg-[var(--surface)] transition hover:border-[var(--primary)]"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="text-[var(--primary)]" size={18} />
      ) : (
        <Moon className="text-[var(--text-light)]" size={18} />
      )}
    </button>
  );
}
export const navLinks = [
  "Home",
  "About",
  "Services",
  "Calculator",
  "Projects",
  "FAQ",
  "Contact",
];

