import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/head';

describe('Header Component Tests', () => {
  test('Renders header component', () => {
    render(<Header openIssuesCount={20} />);
    const divElement = screen.getByRole('contentInfo');
    expect(divElement).toBeInTheDocument();
  });

  test('Renders the component with openIssuesCount that is passed as props to the component', () => {
    render(<Header openIssuesCount={20} />);
    const divElement = screen.getByRole('contentInfo');
    expect(divElement).toHaveTextContent('20 Issues for Facebook / React');
  });

  test('Should not render any issues if the count is -1', () => {
    render(<Header openIssuesCount={-1} />);
    const divElement = screen.getByRole('contentInfo');
    expect(divElement).toHaveTextContent('No Issues for Facebook / React');
  });
});
