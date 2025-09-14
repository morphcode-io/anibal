import Image from "next/image";
import Link from "next/link";
import { LuChevronRight, LuExternalLink } from "react-icons/lu";

import Dadge from "../../ui/Dadge/Dadge";
import Heading from "../../ui/Heading/Heading";

export const Title = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  return (
    <>
      <div className="inline-flex gap-2 items-center w-full text-tertiary-600 dark:text-primary-600 text-sm font-primary">
        <Link
          href={`/projects`}
          className="hover:underline inline-flex items-center gap-1"
        >
          Proyectos
        </Link>
        <LuChevronRight className="inline mb-0.5" />
        <p>{name}</p>
      </div>
      <Heading as="h3" className="mt-2">
        {children}
      </Heading>
    </>
  );
};

export const Meta = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dadge className="mr-2 text-primary-700 bg-primary-100 dark:text-primary-200 dark:bg-primary-800 font-semibold">
      {children}
    </Dadge>
  );
};

export const WorkImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-full text-center my-4 space-y-2">
      <div className="border border-mirage-300/50 rounded-md">
        <Image src={src} width={500} height={300} alt={alt} className="w-full h-auto rounded-md" />
      </div>
      <p className="text-sm text-mirage-600 italic">{alt}</p>
    </div>
  );
};

export const WorkVideo = ({ src }: { src: string }) => {
  return (
    <div className="w-full h-auto my-4 rounded-md overflow-hidden aspect-video">
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export const WorkHeader = ({ children, name, tags }: { children: React.ReactNode; name: string; tags: string[] }) => {
  return (
    <div>
      <Title name={name}>
        {children}
      </Title>
      <div className="flex flex-wrap items-center mt-2">
        {tags.map((tag, index) => (
          <Dadge key={tag + index} className="mr-2 mb-2">
            {tag}
          </Dadge>
        ))}{" "}
      </div>
      <div className="w-full mt-4 h-px bg-mirage-300/60 rounded-full"></div>
    </div>
  );
};

export const WorkSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <section className="space-y-3">
      <Heading as="h4" className="text-xl">
        {title}
      </Heading>
      {children}
    </section>
  );
};

export const WorkExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      className="text-tertiary-600 dark:text-primary-600 hover:underline inline-flex items-center gap-1"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <LuExternalLink className="inline mb-0.5 ml-1" />
    </Link>
  );
};
