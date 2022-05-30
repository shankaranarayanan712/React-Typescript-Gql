export interface IssueType {
  number: number;
  title: string;
  user: Author;
  summary: string;
}
export interface Issues {
  nodes?: Node[];
  issueCount?: number;
  pageInfo?: PageInfo;
  typename?: string;
}

export interface Node {
  title?: string;
  createdAt?: Date;
  state?: State;
  number?: number;
  body?: string;
  comments?: Comments;
  author?: Author;
  typename: NodeTypename;
}

export interface Author {
  avatarUrl: string;
  login: string;
  typename: AuthorTypename;
}

export enum AuthorTypename {
  User = 'User',
}

export interface Comments {
  totalCount: number;
  typename: CommentsTypename;
}

export enum CommentsTypename {
  IssueCommentConnection = 'IssueCommentConnection',
}

export enum State {
  Open = 'OPEN',
}

export enum NodeTypename {
  Issue = 'Issue',
  PullRequest = 'PullRequest',
}

export interface PageInfo {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  endCursor?: string;
  startCursor?: string;
  typename?: string;
}
