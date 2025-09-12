import ArticleLayout from "@/components/layout/article";
import Heading from "@/components/ui/Heading/Heading";

export default function PostsPage() {
  return (
    <ArticleLayout title="Posts" className="space-y-8">
      <Heading as={"h4"}>Publicaciones</Heading>
    </ArticleLayout>
  );
}
