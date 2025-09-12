"use client";
import Image from "next/image";
import { Container } from "./ui/Container/Container";
// 3D objects is a future feature
const Logo3D = () => {
  return (
    <Container variant="center" className="my-4">
      <div className="h-[300px] flex items-center justify-center">
        <Image src="/download.png" width={240} height={240} alt="Logo 3D" />
      </div>
    </Container>
  );
};

export default Logo3D;
