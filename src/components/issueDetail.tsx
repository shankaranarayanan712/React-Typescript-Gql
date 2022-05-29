/* eslint-disable react/no-children-prop */
import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ISSUE_DETAILS } from '../store/search/types';
import { GET_ISSUE_DETAILS } from '../queries';

const UserWithAvatar = ({ user, orientation = 'vertical' }: { user: any; orientation: string }) => {
  return (
    <span className={`issue__user ${orientation}`}>
      <img className="issue__user__avatar" src={user.avatarUrl} alt="" />
      <div className="issue__user__name">{user.login}</div>
    </span>
  );
};

const IssueState = ({ state }: { state: string }) => (
  <span className={`issue-detail__state issue-detail__state--${state.toLowerCase()}`}>{state}</span>
);

const IssueNumber = ({ number }: { number: number }) => <span className="issue-detail__number">#{number}</span>;

const Comments = ({ comments = [] }: any) => {
  // The issue has no comments
  if (comments === 0) {
    return <div className="issue-detail--no-comments">No comments</div>;
  }

  // Comments are loaded
  return <IssueComments comments={comments} />;
};

const IssueComment = ({ comment }: any) => {
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
const IssueComments = ({ comments = [] }) => {
  return (
    <ul className="issue-detail__comments">
      {comments.map((comment: any) => (
        <li key={comment?.id}>
          <IssueComment comment={comment} />
        </li>
      ))}
    </ul>
  );
};

const Content = ({ issue }: any) => {
  return (
    <div className="issue-detail">
      <h3 className="issue-detail__title">{issue.title}</h3>
      <div className="issue-detail__meta">
        <IssueNumber number={issue.number} />
        <IssueState state={issue.state} />
        <UserWithAvatar user={issue.author} orientation="horizontal" />
      </div>
      <hr className="divider--short" />
      <div className="issue-detail__summary">
        <ReactMarkdown children={issue.body} />
      </div>
      <hr className="divider--short" />
      <Comments comments={issue?.edges?.comments?.filter((node: any) => !!node)} />
    </div>
  );
};

const Loading = ({ issueId }: { issueId: number }) => {
  return (
    <div className="issue-detail--loading">
      <p>Loading issue #{issueId}...</p>
    </div>
  );
};

const IssueDetailPage = (): React.ReactElement => {
  const setData = useRef(true);
  const params: any = useParams();
  const dispatch = useDispatch();
  const { issueDetails } = useSelector((state: any) => state.data);
  const { data, error } = useQuery(GET_ISSUE_DETAILS, {
    variables: {
      issueNumber: Number(params.issueId),
    },
  });
  if (error) {
    return (
      <div className="issue-detail--error">
        <h4>There was a problem loading issue #{params.issueId}</h4>
        <p>{error.toString()}</p>
      </div>
    );
  }

  if (data?.repository?.issue) {
    if (setData.current) {
      setData.current = false;
      dispatch({ type: SET_ISSUE_DETAILS, payload: data.repository.issue });
    }
  }

  return (
    <div className="App">
      {issueDetails?.number && <Content issue={issueDetails} />}
      {!issueDetails?.number && <Loading issueId={params.issueId} />}
    </div>
  );
};

export default IssueDetailPage;
