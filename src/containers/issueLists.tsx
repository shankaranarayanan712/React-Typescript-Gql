import React, { useCallback, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ISSUES } from '../store/search/types';
import { SEARCH_ISSUES } from '../queries';
import IssueList from '../components/IssueList';
import { BASE_QUERY } from '../constants';
import { RootState } from '../store';
import Header from '../components/head';

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
