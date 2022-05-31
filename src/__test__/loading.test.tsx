import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../components/loading';

describe('Loading Component Tests', () => {
  test('Should Show loading for a given issue', () => {
    render(<Loading issueId={2} />);
    const divElement = screen.getByRole('loader');
    expect(divElement).toHaveTextContent(`Loading issue #2`);
  });
});
