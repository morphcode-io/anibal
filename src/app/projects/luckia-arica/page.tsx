import ArticleLayout from "@/components/layout/article";
import { Meta, WorkExternalLink, WorkHeader, WorkImage, WorkSection } from "@/components/site/projects/Work";
import { works } from "@/app.config";

export default function Page() {
  const current = works[0];
  return (
    <>
      <ArticleLayout title="Luckia Arica Web" className="space-y-6">
        <WorkHeader name={current.company} tags={[current.duration, current.position]}>
          {current.title}
        </WorkHeader>
        <WorkSection title="Descripción del proyecto">
          <p>
            Se desarrolló desde cero una plataforma digital compuesta por una página web corporativa, una aplicación
            móvil y un sistema de gestión de contenidos (CMS) para el Casino Luckia Arica. El objetivo principal fue
            crear una experiencia de usuario atractiva y funcional, permitiendo a los clientes acceder a información
            sobre el casino, promociones, eventos, sorteos y la carta de sus restaurantes.
          </p>
          <p>
            El proyecto comenzó en agosto de 2024 como parte de una asignatura universitaria, con el objetivo inicial de
            crear únicamente una aplicación móvil y un CMS básico. Sin embargo, tras presentar el avance al cliente, el
            Casino Luckia Arica decidió financiar el desarrollo completo de la plataforma, incluyendo la página web
            corporativa y un CMS avanzado, debido al potencial del trabajo realizado.
          </p>
          <p>
            El equipo estuvo conformado por dos personas. Yo asumí el rol de desarrollador full-stack, además de
            mantener comunicación directa con el cliente para levantar requerimientos y asegurar que las necesidades del
            negocio fueran correctamente implementadas.
          </p>
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
              <span>Node.js, Express, MySQL, Angular 18, Angular SSR, Tailwind CSS, PrimeNg, Flutter</span>
            </li>
            <li>
              <Meta>HERRAMIENTAS</Meta>
              <span>Visual Studio Code, Postman, Git, Notion, Postman</span>
            </li>
            <li>
              <Meta>PÁGINA WEB</Meta>
              <WorkExternalLink href="https://www.casinoluckiaarica.cl">www.casinoluckiaarica.cl</WorkExternalLink>
            </li>
            <li>
              <Meta>APP MÓVIL</Meta>
              <WorkExternalLink href="https://play.google.com/store/apps/details?id=com.casinoluckia.luckiaarica">
                disponible para android
              </WorkExternalLink>
            </li>
            <li>
              <Meta>CMS</Meta>
              <span>Accesible solo para el equipo de Luckia Arica</span>
            </li>
          </ul>
        </WorkSection>
        <WorkImage src="/p1.png" alt="Luckia Arica Web - Home Page" />
        <WorkImage src="/p2.png" alt="Luckia Arica CMS - Página de Promociones" />
      </ArticleLayout>
    </>
  );
};