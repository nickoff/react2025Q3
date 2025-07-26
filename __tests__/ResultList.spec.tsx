import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { ResultList } from '../src/components/ResultList/ResultList';
import { ICard } from '../src/types/card';
import '@testing-library/jest-dom';

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
  const fetchMock = vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData)
    })
  );

  beforeEach(() => {
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches and displays result cards', async () => {
    render(<ResultList searchTerm="Test" />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(fetchMock).toHaveBeenCalled());

    await waitFor(() => {
      expect(screen.getByText((content) => content.includes('Test Card 1'))).toBeInTheDocument();
      expect(screen.getByText((content) => content.includes('Test Card 2'))).toBeInTheDocument();
    });
  });

  it('shows "No results found" when response is empty', async () => {
    fetchMock.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ data: [] })
      })
    );

    render(<ResultList searchTerm="Empty" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/no results found/i)).toBeInTheDocument();
    });
  });
});
