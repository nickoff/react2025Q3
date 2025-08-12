import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '../src/components/Header/Header';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../src/app/reducers/rootReducer';
import { Provider } from 'react-redux';
import { ThemeContext } from '../src/app/Providers/ThemeContextProvider/themeContext';

const mockContextValue = { themeDark: false, changeTheme: () => {} };

const mockStore = configureStore({
  reducer: rootReducer,
});

describe('Header component', () => {
  test('renders header and input', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={mockStore}>
          <Header />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Anime searcher');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('calls searchHandler with input value', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={mockStore}>
          <Header />
        </Provider>
      </MemoryRouter>
    );

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, { target: { value: 'Bleach' } });
    await userEvent.click(searchButton);

    expect(searchInput).toHaveValue('Bleach');
  });

  test('renders correct styles for light theme', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeContext.Provider value={mockContextValue}>
          <Provider store={mockStore}>
            <Header />
          </Provider>
        </ThemeContext.Provider>
      </MemoryRouter>
    );

    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toHaveClass('bg-amber-50');
  });
});
