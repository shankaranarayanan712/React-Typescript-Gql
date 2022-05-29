import React from 'react';
import { Link } from 'react-router-dom';
import { IssueType } from './interfaces';

const UserWithAvatar = ({ user, orientation = 'vertical' }: { user: any; orientation: string }) => {
  return (
    <span className={`issue__user ${orientation}`}>
      <img className="issue__user__avatar" src={user?.avatarUrl} alt="" />
      <div className="issue__user__name">{user?.login}</div>
    </span>
  );
};

const shorten = (text = '', maxLength = 140) => {
  // Normalize newlines
  const cleanText = text.replace(/\\r\\n/g, '\n');

  // Return if short enough already
  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  const ellip = ' ...';

  // Return the 140 chars as-is if they end in a non-word char
  const oneTooLarge = cleanText.substr(0, 141);
  if (/\W$/.test(oneTooLarge)) {
    return oneTooLarge.substr(0, 140) + ellip;
  }

  // Walk backwards to the nearest non-word character
  let i = oneTooLarge.length;
  while (--i) {
    if (/\W/.test(oneTooLarge[i])) {
      return oneTooLarge.substr(0, i) + ellip;
    }
  }

  return oneTooLarge.substr(0, 140) + ellip;
};

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
const IssueList = ({ issues }: { issues: any }) => {
  return (
    <ul className="issues">
      {issues.map((issue: any) => (
        <li key={issue.number} className="issues__issue-wrapper">
          <Issue number={issue.number} user={issue.author} title={issue.title} summary={issue.body} />
        </li>
      ))}
    </ul>
  );
};

export default IssueList;
