// Imports
import { render, screen } from '@testing-library/react';

// To Test
import App from '../App';

// Tests
test('Renders main page correctly', async () => {
    // Setup
    const {container} = render(<App />);

    // Pre Expcations

    // Init

    // Post Expctations
    expect(container).toMatchSnapshot();
});