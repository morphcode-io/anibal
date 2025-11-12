"use client";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import Heading from "@/components/ui/Heading/Heading";
import { WorkGridItem } from "@/components/Grid-item";
import { Button } from "@/components/ui/Button/Button";
import { getPersonalWork } from "@/app.config";

const projects = getPersonalWork(3);

const ProjectsSection = () => {
  return (
    <section className="space-y-8 my-8">
      <Heading as="h4" variant="sectionTitle">
        Proyectos
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <WorkGridItem
            key={index}
            category="projects"
            id={project.href}
            thumbnail={project.thumbnail}
            title={project.subtitle}
          >
            {project.description}
          </WorkGridItem>
        ))}
      </div>
      <Link href="/projects" className="flex justify-center">
        <Button className="mx-auto">
          Ver todos los proyectos
          <LuChevronRight />
        </Button>
      </Link>
    </section>
  );
};

export default ProjectsSection;
