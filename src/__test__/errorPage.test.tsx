import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from '../components/errorPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Error Page Component Tests', () => {
  test('Should Show Error page', () => {
    render(
      <Router>
        {' '}
        <ErrorPage />
      </Router>,
    );
    const divElement = screen.getByRole('errorMessage');
    expect(divElement).toHaveTextContent(
      `Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?`,
    );
  });
});
