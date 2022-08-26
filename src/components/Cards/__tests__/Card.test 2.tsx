// Imports
import { render } from '@testing-library/react';
import Card from '../Card';

// To Test

// Tests
test('Renders main page correctly', async () => {

    // Setup
    const {container} = render(<Card />);
    // const inputEl = await screen.findByRole('input');

    // Pre Expcations
    // expect(inputEl.innerHTML).toBe('count is: 0');

    // Init

    // Post Expctations
    expect(container).toMatchSnapshot();
});