import React from 'react';
import { render } from "@testing-library/react";
import LoginButton from './LoginButton';

describe('Login', () => {
  const { container } = render(<LoginButton/>);

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

});