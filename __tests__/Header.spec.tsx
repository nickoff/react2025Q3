import { describe, expect, test, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../src/components/Header/Header';
import '@testing-library/jest-dom';

describe('Header component', () => {
  const mockSearchHandler = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    mockSearchHandler.mockClear();
  });

  test('renders header and input', () => {
    render(<Header searchTerm="" searchHandler={mockSearchHandler} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Anime searcher');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('preloads input value from localStorage', () => {
    localStorage.setItem('searchTerm', 'Pikachu');
    render(<Header searchTerm="Pikachu" searchHandler={mockSearchHandler} />);
    expect(screen.getByRole('textbox')).toHaveValue('Pikachu');
  });
});
