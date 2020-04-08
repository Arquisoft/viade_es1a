import 'jest';
import React from 'react';
import { render, act } from "@testing-library/react";
import LoginButton from './LoginButton';
import auth from "solid-auth-client";

describe('Login', () => {
  const { container } = render(<LoginButton/>);
  
  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});