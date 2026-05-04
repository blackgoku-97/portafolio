"use client"

import { useState } from "react"
import { TechnicalSkills, SoftSkills } from "@/components"
import { AnimatePresence, motion } from "framer-motion"

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tecnicas" | "blandas">("tecnicas")

  return (
    <section id="habilidades" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 pt-20 bg-clip-text text-transparent bg-linear-to-r from-pink-300 via-purple-200 to-indigo-200">
        Habilidades
      </h2>

      {/* Tabs dinámicos */}
      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setActiveTab("tecnicas")}
          className={`px-4 py-2 rounded-md font-medium shadow transition cursor-pointer ${
            activeTab === "tecnicas"
              ? "bg-indigo-600 text-white"
              : "bg-black/30 text-gray-300 hover:text-white"
          }`}
        >
          Habilidades Técnicas
        </button>
        <button
          onClick={() => setActiveTab("blandas")}
          className={`px-4 py-2 rounded-md font-medium shadow transition cursor-pointer ${
            activeTab === "blandas"
              ? "bg-indigo-600 text-white"
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
