"use client";
import { works } from "@/app.config";
import ArticleLayout from "@/components/layout/article";
import WorkGridItem from "@/components/ui/Grid-item";
import Heading from "@/components/ui/Heading/Heading";

const projects = works.sort((a, b) => b.id - a.id);

const ProjectsPage = () => {
  return (
    <>
      <ArticleLayout title="Proyectos" className="space-y-8">
        <Heading as={"h4"}>Proyectos</Heading>
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
      </ArticleLayout>
    </>
  );
};

export default ProjectsPage;
