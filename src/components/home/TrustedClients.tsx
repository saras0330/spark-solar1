import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const clients = [
  "LOBEL GREEN ENERGY",
  "INSTANT TECHNOLOGY",
  "AKSHAR ENERGY",
  "G1 ENERGY SOLUTIONS",
  "DEVYAMI GREEN SOLUTIONS",
];

export default function TrustedClients() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-14 flex flex-wrap items-center gap-4">
      <span className="text-sm font-semibold tracking-wide text-[var(--text-muted)] uppercase">
        Our Installation Partners
      </span>

      <div className="relative h-[36px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={clients[index]}
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-flex items-center rounded-full bg-[var(--primary-soft)] px-5 py-1.5 text-sm font-bold text-[var(--primary)] whitespace-nowrap"
          >
            {clients[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

