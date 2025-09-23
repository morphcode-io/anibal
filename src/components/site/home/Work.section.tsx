"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
// UI components
import { Button } from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";
// Utils
import { cn } from "@/utils/cn";
import { works } from "@/app.config";

const filteredWorks = works.filter(work => work.type === "Work");
const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number>(0);

  const handleExperienceClick = (id: number) => {
    if (id < 0 || id >= filteredWorks.length) return;
    setSelectedExperience(id);
  };

  const currentExperience = filteredWorks[selectedExperience];

  return (
    <div className="grid lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <div className="space-y-3">
          {filteredWorks.map((exp, index) => (
            <button
              key={index}
              onClick={() => handleExperienceClick(index)}
              className={cn(
                "w-full cursor-pointer text-left border border-gray-300/60 dark:border-gray-600/60 hover:border-secondary-200 dark:hover:border-secondary-600 bg-white/90 dark:bg-gray-700/60 hover:scale-105 px-4 py-2 rounded-xl transition-all duration-300 relative overflow-hidden group",
                selectedExperience === index
                  ? "bg-white dark:bg-secondary-900/30 border-secondary-200 dark:border-secondary-700 scale-105 shadow-sm"
                  : undefined
              )}
            >
              {selectedExperience === index && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-600"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <div className="">
                <h4
                  className={cn(
                    "font-semibold text-sm",
                    selectedExperience === index ? "text-primary-700 dark:text-primary-300" : undefined
                  )}
                >
                  {exp.company}
                </h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">{exp.duration.split(" - ")[0]}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExperience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white space-y-4 dark:bg-secondary-900/30 rounded-xl p-8 shadow-sm border border-gray-300/60 dark:border-gray-600/30"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Heading as="h4">
                  {currentExperience.title} @{" "}
                  <span className="text-secondary-700 dark:text-secondary-400">{currentExperience.company}</span>
                </Heading>
                <div>
                  <span className="text-xs uppercase text-gray-700 dark:text-gray-300 font-semibold">
                    {currentExperience.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <Heading as="h5">Responsabilidades principales</Heading>
                <ul className="space-y-2">
                  {currentExperience.contributions.map((desc, index) => (
                    <li key={index} className="flex items-start gap-3 leading-relaxed">
                      <div className="w-2 h-2 bg-secondary-500 rotate-45 mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={`/projects/${currentExperience.href}` || "#"}>
                <Button variant="outline" className="w-full" size="sm">Ver más detalles</Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const WorkSection = () => {
  return (
    <section className="space-y-8 my-8">
      <Heading as="h4" variant="sectionTitle">
        Experiencia Profesional
      </Heading>
      <Experience />
    </section>
  );
};

export default WorkSection;
