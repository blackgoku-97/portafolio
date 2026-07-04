"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
  level?: 2 | 3;
}

const sizeByLevel: Record<2 | 3, string> = {
  2: "text-2xl md:text-3xl font-bold",
  3: "text-xl md:text-2xl font-semibold",
};

export const SectionHeader = ({ icon, title, level = 2 }: SectionHeaderProps) => {
  const HeadingTag = level === 2 ? "h2" : "h3";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 mb-6 pb-2 border-b border-gray-700"
    >
      <span className="text-cyan-400 text-xl">{icon}</span>
      <HeadingTag className={`${sizeByLevel[level]} text-cyan-300`}>{title}</HeadingTag>
    </motion.div>
  );
};
