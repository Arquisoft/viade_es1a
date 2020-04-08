import React from 'react';
import { render } from "@testing-library/react";
import MapList from './MapList';

describe('Login', () => {
  const { container } = render(<MapList/>);

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

});