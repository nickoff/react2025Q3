import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { Description } from '../src/components/Description/Description';

describe('Description Component', () => {
  it('renders description', async () => {
    const loader = () => ({
      description: Promise.resolve({
        data: {
          titles: [{ title: 'Test title', type: 'Default' }],
          synopsis: 'Test synopsis',
          source: 'Test source',
          duration: '24 min',
          images: { webp: { image_url: 'https://example.com/image.webp' } }
        }
      })
    });

    const router = createMemoryRouter(
      createRoutesFromElements(<Route path="/" loader={loader} element={<Description />} />),
      { initialEntries: ['/'] }
    );

    render(<RouterProvider router={router} />);

    expect(await screen.findByText('Test title')).toBeInTheDocument();
  });

  it('render Not Found if no data', async () => {
    const loader = () => ({
      description: Promise.resolve({ data: null })
    });

    const router = createMemoryRouter(
      createRoutesFromElements(<Route path="/" loader={loader} element={<Description />} />),
      { initialEntries: ['/'] }
    );

    render(<RouterProvider router={router} />);

    expect(await screen.findByText('404 Not Found')).toBeInTheDocument();
  });
});
