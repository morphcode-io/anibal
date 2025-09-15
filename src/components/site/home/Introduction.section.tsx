import Heading from "@/components/ui/Heading/Heading";
import Image from "next/image";

const IntroductionSection = () => {
  return (
    <section>
      <div className="flex items-center space-x-10">
        <div className="flex-none">
          <div className="w-[100px] h-[100px] rounded-full border-2 border-secondary-700 overflow-hidden">
            <Image src="/anibal.webp" width={100} height={100} alt="Photo of Anibal Laura" />
          </div>
        </div>
        <div>
          <Heading as="h3" className="text-3xl">
            Hola! Soy <span className="text-primary-600 dark:text-primary-400">Anibal Laura</span>
          </Heading>
          <p className="text-sm italic">Ingeniero de software / Desarrollador full-stack</p>
        </div>
      </div>
      {/*  */}
      <div className="space-y-4">
        <p className="">
          Soy Ingeniero Civil en Computación e Informática, apasionado por los productos tecnológicos a gran escala y de
          alto impacto. Me especializo en el desarrollo web full-stack con un enfoque particular en backend. También
          exploro el fascinante mundo de la Inteligencia Artificial y las tecnologías emergentes.
        </p>
        <div className="space-y-1">
          <Heading as="h5">Educación:</Heading>
          <div className="flex items-center gap-3 bg-primary-100 shadow hover:shadow-md dark:bg-dark-bg-secondary rounded-md">
            <div className="w-1 h-[90px] bg-secondary-600 rounded-full"></div>
            <div className="py-px">
              <p className="font-semibold">Universidad de Tarapacá, Arica, Chile</p>
              <p className="text-sm">Ingeniería Civil en Computación e Informática, Ingeniería de Software</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Grad. Dic 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
