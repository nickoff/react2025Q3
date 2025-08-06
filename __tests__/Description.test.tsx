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

const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),
});

const mockContextValue = { themeDark: false, changeTheme: () => {} };

vi.mock('../src/utils/animeApi', async () => {
  const actual = await vi.importActual<typeof AnimeApiModule>('../src/utils/animeApi');
  const { mockCard } = await import('./mocks/mocks');

  return {
    ...actual,
    useGetAnimeByIdQuery: vi.fn().mockReturnValue({
      isFetching: false,
      isLoading: false,
      isError: false,
      data: {
        data: mockCard,
      },
    }),
  };
});

describe('Description Component', () => {
  it('renders if susses fetch data', () => {
    render(
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

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Test Card 1');
  });
});
