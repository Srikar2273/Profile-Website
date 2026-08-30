import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero heading', async () => {
  render(<App />);
  const heading = await screen.findByRole('heading', {
    name: /bhava narayana srikar kotipalli/i
  });
  expect(heading).toBeInTheDocument();
});
