import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Description } from '../src/components/Description/Description';
import { rootReducer } from '../src/app/reducers/rootReducer';
import { animeApi } from '../src/utils/animeApi';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeContext } from '../src/app/Providers/ThemeContextProvider/themeContext';
import * as AnimeApiModule from '../src/utils/animeApi';
import { mockCard, mockReturnValue } from './mocks/mocks';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),
});

const mockContextValue = { themeDark: false, changeTheme: () => {} };

const TestWrapper = () => {
  return (
    <MemoryRouter initialEntries={['/123']}>
      <ThemeContext.Provider value={mockContextValue}>
        <Provider store={mockStore}>
          <Routes>
            <Route path="/:mal_id" element={<Description />} />
          </Routes>
        </Provider>
      </ThemeContext.Provider>
    </MemoryRouter>
  );
};

vi.mock('../src/utils/animeApi', async () => {
  const actual = await vi.importActual<typeof AnimeApiModule>('../src/utils/animeApi');
  const { mockReturnValue } = await import('./mocks/mocks');

  return {
    ...actual,
    useGetAnimeByIdQuery: vi.fn().mockReturnValue(mockReturnValue),
  };
});

describe('Description Component', () => {
  it('renders if susses fetch data', () => {
    render(<TestWrapper />);

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Test Card 1');
  });

  it('renders refresh button and clicks', async () => {
    const handleRefresh = vi.fn();

    vi.mocked(AnimeApiModule.useGetAnimeByIdQuery).mockReturnValue({
      ...mockReturnValue,
      data: {
        data: mockCard,
      },
      refetch: handleRefresh,
    });

    render(<TestWrapper />);

    const title = screen.getByRole('heading', { level: 2 });
    const button = screen.getByText('Refresh');

    expect(title).toHaveTextContent('Test Card 1');
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(handleRefresh).toHaveBeenCalledOnce();
  });

  it('renders loading state when data is loading', () => {
    vi.mocked(AnimeApiModule.useGetAnimeByIdQuery).mockReturnValue({
      ...mockReturnValue,
      isFetching: true,
    });

    render(<TestWrapper />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders error data state when data is error', () => {
    vi.mocked(AnimeApiModule.useGetAnimeByIdQuery).mockReturnValue({
      ...mockReturnValue,
      isError: true,
      error: {
        data: {
          status: '404',
          message: 'Not found',
        },
      },
    });

    render(<TestWrapper />);

    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
