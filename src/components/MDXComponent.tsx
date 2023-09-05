import { MDXRemote } from "next-mdx-remote/rsc";

export default function MDXComponent() {
  return (
    <MDXRemote
      source={`# hello list
    - list 1
    - list 2
   `}
    />
  );
}
