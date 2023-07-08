import { render, screen } from '@testing-library/react';
import Products from './index';

test('renders Products component', () => {
  render(<Products />);
  const productsElement = screen.getByTestId('products');
  expect(productsElement).toBeInTheDocument();
});
