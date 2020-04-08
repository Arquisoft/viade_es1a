import 'jest';
import React from 'react';

import { render } from "@testing-library/react";

import auth from '../tests/__mocks__/solid-auth-client';
import UploadToPod from './UploadToPod';

jest.mock('solid-auth-client');

describe.only('Boton', () => {
    render(<UploadToPod/>);
    expect(ReactDOM).toContain('Subir JSON a Solid');
});