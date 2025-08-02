import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { ResultList } from '../src/components/ResultList/ResultList';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { rootReducer } from '../src/app/reducers/rootReducer';
import { animeApi } from '../src/utils/animeApi';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { mockData } from './mocks/mocks';

const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware)
});

describe('ResultList', () => {
  it('fetches and displays result cards', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={mockStore}>
          <ResultList data={mockData.data} error={undefined} loading={false} />
        </Provider>
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText((content) => content.includes('Test Card 1'))).toBeInTheDocument();
      expect(screen.getByText((content) => content.includes('Test Card 2'))).toBeInTheDocument();
    });
  });

  it('shows "No results found" when response is empty', () => {
    render(<ResultList data={[]} error={undefined} loading={false} />);

    waitFor(() => {
      expect(screen.getByText(/no results found/i)).toBeInTheDocument();
    });
  });

  it('shows "Loading..." when loading', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ResultList data={[]} error={undefined} loading={true} />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
  });

  it('shows "Error" when error', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ResultList data={[]} error={new Error('Test error')} loading={false} />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText(/test error/i)).toBeInTheDocument();
    });
  });
});
