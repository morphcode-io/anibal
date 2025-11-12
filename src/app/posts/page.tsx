"use client";

import { PostItem } from "@/components/Items";
import ArticleLayout from "@/components/layout/article";
import Heading from "@/components/ui/Heading/Heading";

export default function PostsPage() {
  const posts = [{
    id: "post-1",
    category: "blog",
    thumbnail: "/post11.webp",
    title: "Big-O Notation: Explained in 8 Minutes",
    description: "Big O Notation is a way to measure how efficiently your code performs as the input size grows."
  }
  ]; // Placeholder for posts data
  return (
    <ArticleLayout title="Posts" className="space-y-8">
      <Heading as={"h4"} variant="articleTitle">Publicaciones</Heading>
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <PostItem
            key={index}
            category={post.category}
            id={post.id}
            thumbnail={post.thumbnail}
            title={post.title}
          >
            {post.description}
          </PostItem>
        ))}
      </div>
    </ArticleLayout>
  );
}
