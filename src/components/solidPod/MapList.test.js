import 'jest';
import React from 'react';
import { render } from "@testing-library/react";
import MapList from './MapList';

describe('MapList', () => {
  const { container } = render(<MapList/>);

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

});