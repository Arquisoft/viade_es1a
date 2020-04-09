import 'jest';
import React from 'react';
import { render } from '@testing-library/react';
import User from './User';


describe('user', ()=>{
    const { container } = render(<User/>);

    test('renders without crashing', () => {
        expect(container).toBeTruthy();
    });
});
