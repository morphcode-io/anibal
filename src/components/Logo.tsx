"use client";
import Link from "next/link";

const Logo = () => {
  return (
    <h4 title="Pagina de inicio" className="text-2xl font-bold tracking-tight">
      <Link href={"/"} aria-label="Pagina de inicio">
        Anibal Laura
      </Link>
    </h4>
  );
};

export default Logo;
