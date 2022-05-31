import React from 'react';
import { render, screen } from '@testing-library/react';
import IssueList from '../components/IssueList';
import { BrowserRouter as Router } from 'react-router-dom';
describe('Issue List Component Tests', () => {
  test('Renders Issue Lists', () => {
    const issues = [
      { number: 1, body: 'React issue', author: {}, title: 'React Issue' },
      { number: 2, body: 'Facebook issue', author: {}, title: 'Facebook Issue' },
    ];
    render(
      <Router>
        <IssueList issues={issues} />{' '}
      </Router>,
    );
    const divElement = screen.getAllByRole('issues');
    expect(divElement[0]).toHaveTextContent(issues[0].body);
  });

  test('Should throw message if there are no issues', () => {
    render(
      <Router>
        <IssueList issues={[]} />{' '}
      </Router>,
    );
    const divElement = screen.getByRole('issues');
    expect(divElement).toHaveTextContent('Oops, Nothing to show, Please try with another criteria');
  });
});
