import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Main } from '../src/views/Main/Main';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../src/app/reducers/rootReducer';
import { animeApi } from '../src/utils/animeApi';

const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware)
});

vi.mock('../src/components/ResultList/ResultList', () => ({
  ResultList: ({ searchTerm }: { searchTerm: string }) => <div data-testid="result-list">{searchTerm}</div>
}));

describe('Main component (with mocked Header & ResultList)', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.resetAllMocks();
  });

  it('renders empty result-list by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={mockStore}>
          <Main />
        </Provider>
      </MemoryRouter>
    );

    const result = screen.getByTestId('result-list');
    expect(result).toHaveTextContent('');
  });
});
