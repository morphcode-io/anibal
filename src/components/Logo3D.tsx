"use client";
import { Graph3D } from "./Graph3D";
import { Logo3DContainer } from "./Logo3D-loader";

const Logo3D = () => {
  return (
    <Logo3DContainer className="h-[280px] relative">
      <Graph3D width={280} height={280} />
    </Logo3DContainer>
  );
};

export default Logo3D;
