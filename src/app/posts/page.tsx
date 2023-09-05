import { getItems } from "@/service/server/firebase";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Latemarch | Posts",
    description: "Blog Posts",
  };
}
export default async function page() {
  const posts = await getItems("posts");
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}
