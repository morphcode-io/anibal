import Link from "next/link";
import Card from "./Card";
import Image from "next/image";

interface WorkGridItemProps {
  children: React.ReactNode;
  category: string;
  id: string;
  thumbnail: string;
  title: string;
}

const WorkGridItem = ({ children, category, id, thumbnail, title }: WorkGridItemProps) => {
  return (
    <Link title={title + ", click para ver detalles"} href={`/${category}/${id}`} className="hover:scale-[1.01] transition-transform">
      <Card.Root size="md" className="text-center" variant="outlined">
        <Image className="object-cover w-full" width={300} height={200} src={thumbnail} alt={title} />
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Description>{children}</Card.Description>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default WorkGridItem;
