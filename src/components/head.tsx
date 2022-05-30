import React from 'react';
import { org, repo } from '../constants';

const OrgRepo = ({ org, repo }: { org: string; repo: string }) => {
  return (
    <span>
      <span className="header__org">{org}</span>
      {' / '}
      <span className="header__repo">{repo}</span>
    </span>
  );
};

const Header = ({ openIssuesCount }: { openIssuesCount: number }) => {
  if (openIssuesCount === -1) {
    return (
      <h5>
        Issues for <OrgRepo org={org} repo={repo} />
      </h5>
    );
  } else {
    const pluralizedIssue = openIssuesCount === 1 ? 'Issue' : 'Issues';
    return (
      <h5>
        <span className="header__openIssues">{openIssuesCount}</span> {pluralizedIssue} for{' '}
        <OrgRepo org={org} repo={repo} />
      </h5>
    );
  }
};

export default Header;
