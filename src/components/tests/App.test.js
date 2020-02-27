import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders proyecto en github link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/En desarollo/i);
  expect(linkElement).toBeInTheDocument();
});