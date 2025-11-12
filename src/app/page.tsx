"use client";
/* Layouts */
import ArticleLayout from "@/components/layout/article";

/* Home components */
import IntroductionSection from "@/components/site/home/Introduction.section";
import AboutMeSection from "@/components/site/home/Aboutme.section";
import WorkSection from "@/components/site/home/Work.section";
import ContactMeSection from "@/components/site/home/Contactme.section";
import ProjectsSection from "@/components/site/home/Projects.section";

export default function Page() {
  return (
    <ArticleLayout title="Inicio">
        <IntroductionSection />
        <AboutMeSection />
        <WorkSection />
        <ProjectsSection />
        <ContactMeSection />
    </ArticleLayout>
  );
}
