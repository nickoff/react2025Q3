import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { ResultList } from '../src/components/ResultList/ResultList';
import { ICard } from '../src/types/card';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';

const mockData: { data: ICard[] } = {
  data: [
    {
      mal_id: 1,
      images: { webp: { image_url: '' } },
      title_english: 'Test Card 1',
      aired: { string: '1998' },
      title_japanese: 'ddd',
      titles: [{ type: 'Default', title: 'Test Card 1' }],
      synopsis: '',
      source: '',
      duration: ''
    },
    {
      mal_id: 2,
      images: { webp: { image_url: '' } },
      title_english: 'Test Card 2',
      aired: { string: '1999' },
      title_japanese: 'fff',
      titles: [{ type: 'Default', title: 'Test Card 2' }],
      synopsis: '',
      source: '',
      duration: ''
    }
  ]
};

describe('ResultList', () => {
  it('fetches and displays result cards', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ResultList data={mockData.data} error={null} loading={false} />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText((content) => content.includes('Test Card 1'))).toBeInTheDocument();
      expect(screen.getByText((content) => content.includes('Test Card 2'))).toBeInTheDocument();
    });
  });

  it('shows "No results found" when response is empty', () => {
    render(<ResultList data={[]} error={null} loading={false} />);

    waitFor(() => {
      expect(screen.getByText(/no results found/i)).toBeInTheDocument();
    });
  });

  it('shows "Loading..." when loading', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ResultList data={[]} error={null} loading={true} />
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
