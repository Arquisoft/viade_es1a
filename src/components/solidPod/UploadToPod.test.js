import React from 'react';

import 'jest';


import { render } from "@testing-library/react";


import auth from 'solid-auth-client';
import UploadToPod from './UploadToPod';

jest.mock('solid-auth-client');

describe.only('Upload To Pod', () => {
    const { container } = render(<UploadToPod/>);

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});