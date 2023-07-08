import { render, screen } from '@testing-library/react';
import App from '../App.js';

test('renders App component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Virtual Store/i);
  expect(headerElement).toBeInTheDocument();
});
