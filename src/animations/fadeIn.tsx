"use client";
import { motion, type Variants } from "framer-motion";

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
