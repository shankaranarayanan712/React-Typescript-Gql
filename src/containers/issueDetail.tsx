/* eslint-disable react/no-children-prop */
import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ISSUE_DETAILS } from '../store/search/types';
import { GET_ISSUE_DETAILS } from '../queries';
import { RootState } from '../store';
import { UserWithAvatar } from '../components/userAvatar';
import Loading from '../components/loading';
import Comments from '../components/comments';

const IssueState = ({ state }: { state: string }) => (
  <span className={`issue-detail__state issue-detail__state--${state.toLowerCase()}`}>{state}</span>
);

const IssueNumber = ({ number }: { number: number }) => <span className="issue-detail__number">#{number}</span>;

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
      <Comments comments={issue?.edges?.comments?.filter((node: Node) => !!node)} />
    </div>
  );
};

const IssueDetailPage = (): React.ReactElement => {
  const setData = useRef(true);
  const params = useParams() as any;
  const dispatch = useDispatch();
  const { issueDetails } = useSelector((state: RootState) => state.data);
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
