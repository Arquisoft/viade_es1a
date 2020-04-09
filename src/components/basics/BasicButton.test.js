import 'jest';
import React from 'react';
import { render } from "@testing-library/react";
import BasicButton from './BasicButton';

describe('BasicButton', () => {
  const { container } = render(<BasicButton/>);
  
  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});