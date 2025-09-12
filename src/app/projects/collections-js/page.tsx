import ArticleLayout from "@/components/layout/article";
import { Meta, WorkExternalLink, WorkHeader, WorkImage, WorkSection } from "@/components/site/projects/Work";

export default function Page() {
  return (
    <ArticleLayout title="Paquete npm collections" className="space-y-6">
      <WorkHeader name="@morphcode/collections" tags={["2025", "Mantenimiento", "Open Source"]}>
        Paquete npm {'"@morphcode/collections"'}
      </WorkHeader>
      <WorkSection title="Descripción del proyecto">
        <p>
          Un paquete npm en JavaScript que proporciona una variedad de estructuras de datos inspirado en el modulo
          collections de Python.
        </p>
        <p>
          Este paquete está diseñado para ser utilizado en proyectos de JavaScript y TypeScript, proporcionando
          estructuras de datos como Heaps, Counter, Deque, defaultdict y OrderedDict.
        </p>
      </WorkSection>
      <WorkSection title="Datos adicionales">
        <ul>
          <li>
            <Meta>Package</Meta>
            <WorkExternalLink href="https://www.npmjs.com/package/@morphcode/collections">
              npmjs.com/package/@morphcode/collections
            </WorkExternalLink>
          </li>
          <li>
            <Meta>Stack</Meta>
            <span>JavaScript, TypeScript, Node.js, Jest</span>
          </li>
          <li>
            <Meta>Repositorio</Meta>
            <WorkExternalLink href="https://github.com/morphcode-io/collections-js">
              github.com/morphcode-io/collections-js
            </WorkExternalLink>
          </li>
        </ul>
      </WorkSection>

      <WorkImage src="/collections.png" alt="collections-js" />
    </ArticleLayout>
  );
};

