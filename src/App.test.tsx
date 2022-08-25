import { render } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('<App />', () => {
    const mockProps = {
        nonce: 'nonce',
    };

    it('should match snapashot', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });
});
