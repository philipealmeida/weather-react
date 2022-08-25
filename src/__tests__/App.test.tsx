// Imports
import { render, screen } from '@testing-library/react';

// To Test
import App from '../App';

// Tests
test('Renders main page correctly', async () => {
    // Setup
    const {container} = render(<App />);
    // const inputEl = await screen.findByRole('input');

    // Pre Expcations
    // expect(inputEl.innerHTML).toBe('count is: 0');

    // Init

    // Post Expctations
    expect(container).toMatchSnapshot();
});