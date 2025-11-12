import Link from "next/link";
import Image from "next/image";
import Card from "./ui/Card";

interface PostItemProps {
  children: React.ReactNode;
  category: string;
  id: string;
  thumbnail: string;
  title: string;
};

export const PostItem: React.FC<PostItemProps> = ({ children, thumbnail, title }) => {
    return <Link href="#">
        <Card.Root size="md" className="flex-row justify-between" variant="outlined">
            <div>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Description>{children}</Card.Description>
                </Card.Body>
            </div>
            <Image className="m-4 object-cover max-w-[76px] max-h-[76px] sm:max-w-[160px] sm:max-h-[106px] rounded"  width={160} height={106} src={thumbnail} alt={title} />
        </Card.Root>
    </Link>;
};
