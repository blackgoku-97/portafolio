"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { personalInfo, contacto, type SocialIcon } from "@/data/curriculum";

const iconByType: Record<SocialIcon, IconType> = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
};

export const Social = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10 pb-6 border-b border-gray-700 flex flex-col items-center text-center gap-3"
    >
      <h1 className="text-4xl font-extrabold text-cyan-400 tracking-wide">{personalInfo.nombre}</h1>
      <p className="text-lg text-gray-300">{personalInfo.rol}</p>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2 text-sm text-gray-200">
        {contacto.map((link) => {
          const Icon = iconByType[link.icono];
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
              >
                <Icon className="text-cyan-400" /> {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </motion.header>
  );
}
