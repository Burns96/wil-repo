import { render, screen } from '@testing-library/react';
import App from './App';

test('renders City of Williamston, Michigan title', () => {
  render(<App />);
  const titleElement = screen.getByText(/City of Williamston, Michigan/i);
  expect(titleElement).toBeInTheDocument();
});
