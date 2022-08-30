import { render, screen } from '@testing-library/react';

import App from '../App';
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
test('Renders main page correctly', async () => {
    const {container} = render(<App />);

    expect(container).toMatchSnapshot();
});