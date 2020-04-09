import 'jest';
import React from 'react';
import { render } from "@testing-library/react";
import ImputField from './ImputField';

describe('ImputField', () => {
  const { container } = render(<ImputField/>);
  
  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});