"use client";
import { SyntheticEvent, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Deque } from "@morphcode/collections";
import { ISkill, techStack } from "@/app.config";
import Heading from "@/components/ui/Heading/Heading";
import { cn } from "@/utils/cn";
import Image from "next/image";

// Types
type ConnectionVariant = "stack" | "queue" | "tree";

interface SkillCardProps {
  skill: ISkill;
  index: number;
  totalSkills: number;
  connectionType: ConnectionVariant;
}

interface TechCategoryProps {
  category: string;
  skills: ISkill[];
  className?: string;
}

// Variants connection Component
const variants = {
  stack:
    "absolute -right-6 bottom-1/2  w-4 h-0.5 bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-1/2 z-10",
  queue: "absolute top-1/2 -right-1 w-2 h-2 bg-primary-500 transform rotate-45 -translate-y-1/2 z-10",
  tree: "absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-t from-purple-400 to-transparent transform -translate-x-1/2 -translate-y-8",
};

// Skill Card Component
const SkillCard = ({ skill, index, totalSkills, connectionType }: SkillCardProps) => {
  
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "tech stack/nodejs.svg";
    e.currentTarget.alt = "Default icon";
  };
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={`${skill.title}-${index}`}
        initial={{ opacity: 0.8, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.8, x: 15 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="group relative min-w-0 flex-shrink-0"
      >
        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/90 dark:bg-gray-700/60 border border-gray-300/60 dark:border-gray-600/60 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out min-w-[80px]">
          <div className="relative w-6 h-6 flex items-center justify-center">
            <Image
              src={skill.icon}
              alt={`${skill.title} icon`}
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              width={20}
              height={20}
              onError={handleImageError}
            />
          </div>
          <p className="text-xs dark:text-gray-300 text-center font-medium mt-1">{skill.title}</p>
        </div>
        {index < totalSkills - 1 && <div className={variants[connectionType]}></div>}{" "}
      </motion.div>
    </AnimatePresence>
  );
};

// Category Title Component
const CategoryTitle = ({ category }: Readonly<{ category: string }>) => {
  return (
    <div className="flex items-center max-w-1/2 gap-2">
      <div className="w-4 h-4 bg-primary-600 rounded-full animate-pulse"></div>
      <Heading as="h4" className="text-sm uppercase">
        {category}
      </Heading>
      <div className="h-1 bg-gradient-to-r rounded-full from-primary-400 to-primary-500 flex-1"></div>
    </div>
  );
};
// Interactive Stack Structure (with pop/push functionality)
const InteractiveStackStructure = ({ category, skills, className = "" }: TechCategoryProps) => {
  const [stackSkills, setStackSkills] = useState(new Deque(skills));

  const popPush = () => {
    const lastSkill = stackSkills.pop();
    if (lastSkill) {
      stackSkills.pushLeft(lastSkill);
      setStackSkills(new Deque(stackSkills.toArray()));
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <CategoryTitle category={category} />

      <div className="flex relative space-x-2 gap-2 flex-wrap">
        {stackSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} totalSkills={skills.length} connectionType="stack" />
        ))}
        <button
          onClick={popPush}
          className="absolute hover:scale-105 right-0 -top-6 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 rounded-3xl px-2 text-xs font-semibold cursor-pointer text-white transition-colors duration-200"
          aria-label="Rotate stack"
        >
          pop/push
        </button>
      </div>
      <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-full mx-4 shadow-inner"></div>
    </div>
  );
};

// Queue Structure (horizontal scrollable)
const QueueStructure = ({ category, skills }: TechCategoryProps) => (
  <div className="space-y-4">
    <CategoryTitle category={category} />

    <div className="flex space-x-2 overflow-x-auto pb-2">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} index={index} totalSkills={skills.length} connectionType="queue" />
      ))}
    </div>
  </div>
);

// Tree Structure (grid layout)
const TreeStructure = ({ category, skills }: { category: string; skills: ISkill[] }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-center">
      <div className="bg-gradient-to-r from-primary-300 to-primary-400 dark:from-primary-800 dark:to-primary-900 px-3 py-1 rounded-lg text-sm font-semibold shadow">
        <Heading as="h4" className="text-sm">
          {category}
        </Heading>
      </div>
    </div>

    <div className="relative flex justify-center">
      <div className="grid grid-cols-2 gap-4 relative">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} totalSkills={skills.length} connectionType="tree" />
        ))}
      </div>
    </div>
  </div>
);
const TechnicalSkillsGrid = () => {
  const { languagesAndFrameworks, tools, databases } = techStack;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <InteractiveStackStructure
        className="col-start-1 col-end-3"
        category={languagesAndFrameworks.title}
        skills={languagesAndFrameworks.skills}
      />
      <QueueStructure category={tools.title} skills={tools.skills} />
      <TreeStructure category={databases.title} skills={databases.skills} />
    </div>
  );
};

// Personal Introduction Text
const PersonalIntroduction = () => {
  return (
    <div className="space-y-3">
      <p className="">
        Actualmente estoy en constante aprendizaje, motivado por los desafíos y la creación de productos tecnológicos
        eficientes y escalables. Disfruto resolver problemas complejos en plataformas como LeetCode (más de 230
        problemas resueltos), donde he fortalecido mis habilidades de resolución de problemas con código.
      </p>
      <p>
        Fuera del código, me gusta leer, jugar videojuegos y aprender nuevas formas de organizar mi tiempo y mejorar mis
        habilidades.
      </p>
      <p>Aquí hay algunas tecnologías con las que he estado trabajando:</p>
    </div>
  );
};

// Main About Me Section
const AboutMeSection = () => {
  return (
    <section className="my-8">
      <Heading as="h4" variant="sectionTitle">
        Sobre mí
      </Heading>
      <PersonalIntroduction />
      <TechnicalSkillsGrid />
    </section>
  );
};

export default AboutMeSection;
