"use client";
import { Container } from "./ui/Container/Container";
import { Graph3D } from "./Graph3D";
// 3D objects is a future feature
// width={280} height={280}
const Logo3D = () => {
  return (
    <Container variant="center" className="my-4">
      <div className="flex items-center justify-center">
        <Graph3D width={280} height={280} />
      </div>
    </Container>
  );
};

export default Logo3D;
