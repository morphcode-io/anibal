"use client";
import Head from "next/head";
import { AnimatePresence } from "motion/react";
import { HeaderSection } from "../header.section";
import { Container } from "../ui/Container/Container";
import Logo3D from "../Logo3D";
import Footer from "../Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <title>Anibal Laura - Ingeniero de Software</title>
        <meta
          name="description"
          content="Portafolio profesional de Anibal Laura, ingeniero de software especializado en desarrollo web y móvil."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderSection />
      <Container maxW="container.sm" className="">
        <Logo3D />
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          {children}
        </AnimatePresence>
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;

/*    <div
        className=" left-0 top-0 h-full w-full opacity-10 bg-[linear-gradient(to_top,#000_0%,transparent_5%),linear-gradient(to_left,#000_0%,transparent_5%)] dark:bg-[linear-gradient(to_top,#FFF_0%,transparent_5%),linear-gradient(to_left,#FFF_0%,transparent_5%)]"
        style={{ backgroundSize: "20px 20px" }}
      ></div> */
