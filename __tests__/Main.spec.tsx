import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Main } from '../src/views/Main/Main';

vi.mock('../src/components/Header/Header', () => ({
  Header: ({ searchHandler }: { searchHandler: (value: string) => void }) => (
    <button data-testid="trigger-search" onClick={() => searchHandler('Pikachu')}>
      Trigger Search
    </button>
  )
}));

vi.mock('../src/components/ResultList/ResultList', () => ({
  ResultList: ({ searchTerm }: { searchTerm: string }) => <div data-testid="result-list">{searchTerm}</div>
}));

describe('Main component (with mocked Header & ResultList)', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.resetAllMocks();
  });

  it('renders trigger-search button and empty result-list by default', () => {
    render(<Main />);

    const trigger = screen.getByTestId('trigger-search');
    expect(trigger).toBeInTheDocument();

    const result = screen.getByTestId('result-list');
    expect(result).toHaveTextContent('');
  });

  it('updates result-list when trigger-search is clicked', () => {
    render(<Main />);

    fireEvent.click(screen.getByTestId('trigger-search'));

    expect(screen.getByTestId('result-list')).toHaveTextContent('Pikachu');
  });
});
