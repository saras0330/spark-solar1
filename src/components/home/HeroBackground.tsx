import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 20, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [20, -20, 20],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[150px]"

      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/10 blur-[140px]"
      />
    </>
  );
}