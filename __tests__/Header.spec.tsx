import { describe, expect, test, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../src/components/Header/Header';

describe('Header component', () => {
  const mockSearchHandler = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    mockSearchHandler.mockClear();
  });

  test('renders header and input', () => {
    render(<Header searchHandler={mockSearchHandler} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Pokémon cards');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('calls searchHandler and updates localStorage on click', async () => {
    render(<Header searchHandler={mockSearchHandler} />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.clear(input);
    await userEvent.type(input, 'Charizard');
    await userEvent.click(button);

    expect(mockSearchHandler).toHaveBeenCalledWith('Charizard');
    expect(localStorage.getItem('searchTerm')).toBe('Charizard');
  });

  test('preloads input value from localStorage', () => {
    localStorage.setItem('searchTerm', 'Pikachu');
    render(<Header searchHandler={mockSearchHandler} />);
    expect(screen.getByRole('textbox')).toHaveValue('Pikachu');
  });
});
