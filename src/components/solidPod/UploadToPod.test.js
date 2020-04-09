import 'jest';
import React from 'react';
import { render } from '@testing-library/react';
import UploadToPod from './UploadToPod';

describe('uploadToPod', ()=>{
    const { container } = render(<UploadToPod/>);

    test('renders without crashing', () => {
        expect(container).toBeTruthy();
    });
});
