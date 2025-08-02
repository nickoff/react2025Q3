import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { Description } from '../src/components/Description/Description';
import { mockCard } from './mocks/mocks';

describe('Description Component', () => {
  it('renders description', async () => {
    const loader = () => ({
      description: Promise.resolve({
        data: mockCard
      })
    });

    const router = createMemoryRouter(
      createRoutesFromElements(<Route path="/" loader={loader} element={<Description />} />),
      { initialEntries: ['/'] }
    );

    render(<RouterProvider router={router} />);

    expect(await screen.findByText(mockCard.titles[0].title)).toBeInTheDocument();
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
