import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  expect(screen.getAllByText(/Hardik Parmar/i).length).toBeGreaterThan(0);
});
