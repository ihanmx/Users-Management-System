"use client";
import { motion, type Variants } from "framer-motion";

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function SlideUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={slideUpVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
