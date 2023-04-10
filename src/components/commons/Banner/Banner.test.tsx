import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

const image = {
  alt: 'Alternative text for test purposes',
  url: 'https://images.unsplash.com/photo-1666369470949-793a0337fe8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
};

const image_without_url = {
  alt: 'Alternative text for test purposes',
  url: '',
};

const image_with_invalid_url = {
  alt: 'Alternative text for test purposes',
  url: 'https://www.youtube.com/huriel',
};

describe('Banner', async () => {
  it('should render the banner', () => {
    render(<Banner image={image} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', image.url);
    expect(screen.getByRole('img')).toHaveAttribute('alt', image.alt);
  });
  it('should not render the banner if image prop has no url', () => {
    render(<Banner image={image_without_url} />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
  it('should render an alternative text in case the image url is not valid', () => {
    render(<Banner image={image_with_invalid_url} />);

    expect(screen.getByAltText(image_with_invalid_url.alt)).toBeVisible();
  });
});
