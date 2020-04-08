import React from 'react';
import { cleanup } from '@testing-library/react';
import Main from './Main';

afterAll(cleanup);


test('renders without crashing', () => {
    expect(<Main />).toBeTruthy();
});