"use client";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../public/logo.png";

const Logo = () => {
  return (
    <h4
      title="Página de inicio"
      className="text-xl sm:text-2xl font-bold tracking-tight"
    >
      <Link
        href="/"
        aria-label="Página de inicio"
        className="group flex items-center gap-1 sm:gap-2"
      >
        <Image
          className="group-hover:rotate-12 transform transition-transform duration-300 w-7 h-7 sm:w-8 sm:h-8"
          src={logoImage}
          alt="Logo"
          width={32}
          height={32}
        />
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Anibal Laura
        </span>
      </Link>
    </h4>
  );
};

export default Logo;

