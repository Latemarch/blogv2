import MDXComponent from "@/components/MDXComponent";
import { getItem, getItems } from "@/service/server/firebase";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const posts = await getItems("posts");
  return posts.map((post) => {
    id: post.id;
  });
}

export async function generateMetadata({ params: { id } }: Props) {
  const post = (await getItem(id, "posts")) as IPost;
  if (!post) return;
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function page({ params: { id } }: Props) {
  const post = await getItem(id, "posts");
  if (!post) return <div>damn</div>;
  return (
    <div className="flex justify-center">
      <MDXComponent markdown={post.body} />
    </div>
  );
}
