import React from 'react';
import { render } from '@testing-library/react';
import Map from './Map';

describe('map', ()=>{
    const { container } = render(<Map/>);

    test('renders without crashing', () => {
        expect(container).toBeTruthy();
    });
});
