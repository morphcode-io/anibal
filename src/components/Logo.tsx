"use client";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../public/logo.png";
const Logo = () => {
  return (
    <h4 title="Pagina de inicio" className="text-2xl font-bold tracking-tight">
      <Link href={"/"} aria-label="Pagina de inicio" className="group flex items-center gap-2">
        <Image
          className="group-hover:rotate-12 transform transition-all duration-300"
          src={logoImage}
          alt="Logo"
          width={34}
          height={34}
        />
        Anibal Laura
      </Link>
    </h4>
  );
};

export default Logo;
