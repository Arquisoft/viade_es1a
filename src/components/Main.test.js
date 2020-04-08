import React from 'react';
import { cleanup } from '@testing-library/react';
import Main from './Main';

afterAll(cleanup);

describe('Main', () => {
  it('renders without crashing', () => {
    expect(<Main />).toBeTruthy();
  });
});