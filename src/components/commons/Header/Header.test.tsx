import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', async () => {
  it('should render the header', () => {
    render(<Header />);

    expect(screen.getByText('blob.g')).toBeInTheDocument();
  });
  it('should redirect to homepage if the user clicks the logo', () => {
    render(<Header />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
