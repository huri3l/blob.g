import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const huriel_yt_url = 'https://www.youtube.com/huriel';

describe('Footer', async () => {
  it('should render the footer', () => {
    render(<Footer />);

    expect(screen.getByText(/Desenvolvido/i)).toBeInTheDocument();
  });
  it("should redirect to Huriel's YouTube Channel if the user clicks the link", () => {
    render(<Footer />);

    expect(screen.getByRole('link')).toHaveAttribute('href', huriel_yt_url);
  });
});
