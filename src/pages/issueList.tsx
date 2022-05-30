import React, { useCallback, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ISSUES } from '../store/search/types';
import { SEARCH_ISSUES } from '../queries';
import IssueList from '../components/issueList';
import { BASE_QUERY, org, repo } from '../constants';
import { RootState } from '../store';

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
const IssueListPage = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>('is:open ');
  const [searchQuery, setSearchQuery] = useState<string>(inputValue);
  const setData = useRef(true);
  const dispatch = useDispatch();
  const { issues, issueCount } = useSelector((state: RootState) => state.data);
  const { data } = useQuery(SEARCH_ISSUES, {
    variables: {
      searchQuery: BASE_QUERY + searchQuery,
    },
  });

  if (data?.search) {
    if (setData.current) {
      setData.current = false;
      dispatch({ type: SET_ISSUES, payload: data?.search?.issueCount > 0 ? data.search : [] });
    }
  }

  const onInputChange = useCallback((ev) => {
    setInputValue(ev.target.value);
  }, []);

  const onInputKeyDown = useCallback(
    (ev) => {
      if (ev.key === 'Enter') {
        setData.current = true;
        setSearchQuery(inputValue);
      }
    },
    [inputValue],
  );

  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-8 text-center">
          <input
            type="text"
            placeholder="search"
            value={inputValue}
            onChange={onInputChange}
            onKeyDown={onInputKeyDown}
            className="form-control p-2 my-2"
          />
        </div>
      </div>
      <div id="issue-list-page">
        <Header openIssuesCount={issueCount} />
        {issues && <IssueList issues={issues} />}
      </div>
    </div>
  );
};

export default IssueListPage;
