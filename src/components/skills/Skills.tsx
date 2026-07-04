"use client"

import { useState } from "react"
import { TechnicalSkills, SoftSkills, PageTitle } from "@/components"
import { AnimatePresence, motion } from "framer-motion"

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tecnicas" | "blandas">("tecnicas")

  return (
    <section id="habilidades" className="section-spacing max-w-6xl mx-auto px-4 pt-20 text-center">
      <PageTitle>Habilidades</PageTitle>

      {/* Tabs dinámicos */}
      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setActiveTab("tecnicas")}
          className={`px-4 py-2 rounded-md font-medium shadow transition cursor-pointer ${
            activeTab === "tecnicas"
              ? "btn-primary"
              : "bg-black/30 text-gray-300 hover:text-white"
          }`}
        >
          Habilidades Técnicas
        </button>
        <button
          onClick={() => setActiveTab("blandas")}
          className={`px-4 py-2 rounded-md font-medium shadow transition cursor-pointer ${
            activeTab === "blandas"
              ? "btn-primary"
              : "bg-black/30 text-gray-300 hover:text-white"
          }`}
        >
          Habilidades Blandas
        </button>
      </div>

      {/* Render condicional con animación */}
      <AnimatePresence mode="wait">
        {activeTab === "tecnicas" && (
          <motion.div
            key="tecnicas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <TechnicalSkills />
          </motion.div>
        )}
        {activeTab === "blandas" && (
          <motion.div
            key="blandas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <SoftSkills />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
