export interface Issue {
  title: string;
  number: number;
  state: string;
  body: string;
  createdAt: Date;
  author: Author;
  comments: Comments;
  typename: string;
}

export interface Author {
  avatarUrl: string;
  login: string;
  typename: string;
}

export interface Comments {
  edges: Edge[];
  typename: string;
}

export interface Edge {
  node: Node;
  typename: string;
}

export interface Node {
  node: any;
  author: Author;
  body: string;
  id: string;
  typename: string;
}
