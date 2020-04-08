import 'jest';
import React from 'react';

import { render } from "@testing-library/react";

import auth from '../tests/__mocks__/solid-auth-client';
import LoginButton from './LoginButton';

jest.mock('solid-auth-client');

test('Boton', () => {
    render(<LoginButton></LoginButton>);
    expect(ReactDOM);
});