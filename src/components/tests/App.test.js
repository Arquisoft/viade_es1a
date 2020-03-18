import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Main from '../Main';

test('renders proyecto en github link', () => {
  const { getByText } = render(<Main />);
  const linkElement = getByText(/Iniciar/i);
  expect(linkElement).toBeInTheDocument();
});
