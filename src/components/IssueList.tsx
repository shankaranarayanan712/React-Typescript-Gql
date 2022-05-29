import React from 'react';
import { Link } from 'react-router-dom';
import { IssueType } from './interfaces';
import { shorten } from '../_helpers/utils';
import { UserWithAvatar } from './userAvatar';

const Issue = ({ number, title, user, summary }: IssueType) => {
  return (
    <div className="issue">
      <UserWithAvatar user={user} orientation={'vertical'} />
      <div className="issue__body">
        <Link to={`/issues/${number}`}>
          <span className="issue__number">#{number}</span>
          <span className="issue__title">{title}</span>
        </Link>
        <p className="issue__summary">{shorten(summary)}</p>
      </div>
    </div>
  );
};

const IssueList = ({ issues }: { issues: any }): React.ReactElement => {
  if (issues && issues.length > 0) {
    return (
      <ul className="issues">
        {issues.map((issue: any) => (
          <li key={issue.number} className="issues__issue-wrapper">
            <Issue number={issue.number} user={issue.author} title={issue.title} summary={issue.body} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <div>Oops, Your search criteria donot have any results, Please try with another criteria </div>;
  }
};

export default IssueList;
