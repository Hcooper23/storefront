import { render, screen } from '@testing-library/react';
import Footer from '../Footer/index';

test('renders Footer component', () => {
  render(<Footer />);
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
});
