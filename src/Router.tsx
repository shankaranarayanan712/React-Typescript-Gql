import React from 'react';
import IssueListPage from './components/IssueListPage';
import IssueDetailPage from './components/IssueDetailPage';
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
        <main style={{ padding: '1rem' }}>
          <p>Oops , Nothing here</p>
        </main>
      </Route>
    </Switch>
  );
}

export default Router;
