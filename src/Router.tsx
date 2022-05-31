import React from 'react';
import IssueListPage from './containers/issueLists';
import IssueDetailPage from './containers/issueDetail';
import ErrorPage from './components/errorPage';
import { Switch, Route } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <IssueListPage />
      </Route>
      <Route exact path="/issues/:issueId">
        <IssueDetailPage />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default Router;
