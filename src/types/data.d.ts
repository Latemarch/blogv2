interface IPost {
  title: string;
  author: string;
  body: string;
  category: string;
  createdAt: number;
  description: string;
  id: string;
  tags: Array<string>;
}

interface IProject {
  title: string;
  body: string;
  category: string;
  createdAt: number;
  id: string;
  stacks: Array<string>;
  git: string;
  published: string;
  detail: string;
}
