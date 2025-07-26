import { describe, expect, test, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../src/components/Header/Header';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';

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
});
