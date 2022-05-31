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
  const [searchQuery, setSearchQuery] = useState<any>(inputValue);
  const setData = useRef(true);
  const dispatch = useDispatch();
  const { issues, issueCount, pageInfo } = useSelector((state: RootState) => state.data);
  const { data, fetchMore } = useQuery(SEARCH_ISSUES, {
    variables: {
      searchQuery: BASE_QUERY + searchQuery,
    },
  });

  if (data?.search) {
    if (setData.current) {
      setData.current = false;
      dispatch({ type: SET_ISSUES, payload: data?.search?.issueCount > 0 ? data.search : {} });
    }
  }

  const onInputChange = useCallback((ev) => {
    setInputValue(ev.target.value);
  }, []);

  const onLoadMore = async (type: string) => {
    let data: any = {};
    if (type === 'Previous') {
      data = await fetchMore({ variables: { before: pageInfo.startCursor } });
    } else if (type === 'Next') {
      data = await fetchMore({ variables: { after: pageInfo.endCursor } });
    }
    dispatch({ type: SET_ISSUES, payload: data?.data?.search.issueCount > 0 ? data?.data.search : {} });
  };

  const validateInput = () => {
    let isvalid = false;
    if (inputValue.indexOf('is:open ') >= 0 || inputValue.indexOf('is:closed ') >= 0) {
      isvalid = true;
    }
    return isvalid;
  };

  const onInputKeyDown = useCallback(
    (ev) => {
      if (ev.key === 'Enter' && validateInput()) {
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
        {!validateInput() && (
          <div className="col-lg-8  isa_error">
            Incorrect Input, Please search with is:open or is:closed keyword seperated by issue body or title
          </div>
        )}
        {/* <div className="col-lg-2 text-center">
          <input
            type="button"
            value="Previous"
            onClick={() => onLoadMore('Previous')}
            className="form-control p-2 my-2"
          />
        </div> */}
      </div>
      <div id="issue-list-page">
        <Header openIssuesCount={issueCount} />
        {issues && <IssueList issues={issues} />}
      </div>
      {pageInfo.hasNextPage && (
        <div className="buttonContainer">
          <input
            type="button"
            value="Next"
            onClick={() => onLoadMore('Next')}
            className="form-control p-2 my-2 button"
          />
        </div>
      )}
    </div>
  );
};

export default IssueListPage;