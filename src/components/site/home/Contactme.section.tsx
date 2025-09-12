import { Button } from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";
import { LuMail } from "react-icons/lu";

const ContactMeSection = () => {
  return (
    <section className="space-y-6">
      <Heading as="h4" variant="sectionTitle">
        Contactame
      </Heading>
      <p className="">
        Actualmente estoy en busca de nuevas oportunidades laborales, si deseas contactarme, puedes hacerlo a través de mi correo.
      </p>
      <Button className="mx-auto">
        <LuMail /> Escribeme aca!
      </Button>
    </section>
  );
};

export default ContactMeSection;
