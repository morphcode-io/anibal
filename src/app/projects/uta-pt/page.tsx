import { works } from "@/app.config";
import ArticleLayout from "@/components/layout/article";
import { Meta, WorkHeader, WorkSection } from "@/components/site/projects/Work";

export default function Page() {
  const current = works[1];
  return (
    <>
      <ArticleLayout title="UTA proyecto de titulación" className="space-y-6">
        <WorkHeader name={current.company} tags={[current.duration, current.position]}>
          {current.title}
        </WorkHeader>
        <WorkSection title="Descripción del proyecto">
            <p>Como parte de mi proyecto de titulación, junto con un equipo de 3 compañeros, desarrollamos una plataforma web para realizar agendamientos de visitas a los museos de la región de Arica y Parinacota, y un sistema para la gestión de agendamientos.</p>
            <p>El proyecto fue desarrollado utilizando metodologías ágiles y se implementó en un plazo de 6 meses.</p>
        </WorkSection>
        <WorkSection title="Responsabilidades">
          <ul>
            {current.contributions.map((desc, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary-500 rotate-45 mt-2 flex-shrink-0"></div>
                <p className="">{desc}</p>
              </li>
            ))}
          </ul>
        </WorkSection>
        <WorkSection title="Tecnologías utilizadas">
          <ul className="ml-4">
            <li>
              <Meta>STACK</Meta>
              <span>Node.js, Express, MySQL, Angular 18, Tailwind CSS</span>
            </li>
            <li>
              <Meta>HERRAMIENTAS</Meta>
              <span>Visual Studio Code, Postman, Git</span>
            </li>
          </ul>
        </WorkSection>
      </ArticleLayout>
    </>
  );
}
