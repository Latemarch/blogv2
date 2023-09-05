import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

export default async function MDXComponent({ markdown }: { markdown: string }) {
  const mdx = await serialize(markdown, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  });

  console.log(typeof mdx);
  return (
    <div className="prose dark:prose-invert">
      <MDXRemote source={markdown} />
    </div>
  );
}
