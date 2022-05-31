/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Node } from '../interfaces/issue.interface';
import { UserWithAvatar } from './userAvatar';

const IssueComment = ({ comment }: any): React.ReactElement => {
  return (
    <div className="issue-detail__comment">
      <UserWithAvatar user={comment.author} orientation="horizontal" />
      <div className="issue-detail__comment__body">
        <ReactMarkdown children={comment.body} />
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const IssueComments = ({ comments = [] }): React.ReactElement => {
  return (
    <ul className="issue-detail__comments">
      {comments.map((comment: Node) => (
        <li key={comment?.id} role="issueList">
          <IssueComment comment={comment} />
        </li>
      ))}
    </ul>
  );
};

const Comments = ({ comments = [] }: any) => {
  // The issue has no comments
  if (comments === 0) {
    return (
      <div className="issue-detail--no-comments" role="issueList">
        No comments
      </div>
    );
  }

  // Comments are loaded
  return <IssueComments comments={comments} />;
};
export default Comments;
