import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Main from './Main';

afterAll(cleanup);

describe('main', ()=>{
    const { container } = render(<Main/>);

    test('renders without crashing', () => {
        expect(container).toBeTruthy();
    });
});
