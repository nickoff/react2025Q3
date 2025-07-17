import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Main } from '../src/views/Main/Main';

vi.mock('../../components/Header/Header', () => ({
  Header: ({ searchHandler }: { searchHandler: (value: string) => void }) => (
    <div>
      <button data-testid="trigger-search" onClick={() => searchHandler('Pikachu')}>
        Trigger Search
      </button>
    </div>
  )
}));

vi.mock('../../components/ResultList/ResultList', () => ({
  ResultList: ({ searchTerm }: { searchTerm: string }) => <div data-testid="result-list">Search: {searchTerm}</div>
}));

describe('Main component', () => {
  test('renders children components', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Pokémon cards');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
});
