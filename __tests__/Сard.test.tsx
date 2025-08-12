import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Card } from '../src/components/Card/Card';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../src/app/reducers/rootReducer';
import { animeApi } from '../src/utils/animeApi';
import { Provider } from 'react-redux';
import { mockCard } from './mocks/mocks';

const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),
});

describe('Card Component', () => {
  test('renders card name, image and details', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={mockStore}>
          <Card card={mockCard} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(mockCard.titles[0].title);
    expect(screen.getByText(`Aired: ${mockCard.aired.string}`)).toBeInTheDocument();
  });

  test('render active link', async () => {
    vi.mock('react-router', async () => {
      const actual = await vi.importActual<typeof import('react-router')>('react-router');
      return {
        ...actual,
        useSearchParams: () => [new URLSearchParams('page=3')],
        useLocation: () => ({ pathname: '/1' }),
        useResolvedPath: vi.fn((to: string) => ({ pathname: to })),
      };
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={mockStore}>
          <Card card={mockCard} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/?page=3');
  });
});
