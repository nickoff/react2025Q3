import { describe, expect, test, vi, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '../src/components/Header/Header';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('Header component', () => {
  const mockSearchHandler = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    mockSearchHandler.mockClear();
  });

  test('renders header and input', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header searchTerm="" searchHandler={mockSearchHandler} />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Anime searcher');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('preloads input value from localStorage', () => {
    localStorage.setItem('searchTerm', 'Pikachu');
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header searchTerm="Pikachu" searchHandler={mockSearchHandler} />
      </MemoryRouter>
    );
    expect(screen.getByRole('textbox')).toHaveValue('Pikachu');
  });

  test('calls searchHandler with input value', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header searchTerm="Pikachu" searchHandler={mockSearchHandler} />
      </MemoryRouter>
    );

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, { target: { value: 'Bleach' } });
    await userEvent.click(searchButton);

    expect(searchInput).toHaveValue('Bleach');
    expect(mockSearchHandler).toHaveBeenCalledTimes(1);
  });
});
