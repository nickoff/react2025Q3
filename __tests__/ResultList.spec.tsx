import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { ResultList } from '../src/components/ResultList/ResultList';
import { ICard } from '../src/components/Card/Card';
import '@testing-library/jest-dom';

const mockData: { data: ICard[] } = {
  data: [
    { id: '1', name: 'Test Card 1', set: { name: 'Test Set 1', series: 'Test Series 1' }, images: { small: '' } },
    { id: '2', name: 'Test Card 2', set: { name: 'Test Set 2', series: 'Test Series 2' }, images: { small: '' } }
  ]
};

describe('ResultList', () => {
  const fetchMock = vi.fn(() =>
    Promise.resolve({
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
      expect(screen.getByText(/test card 1/i)).toBeInTheDocument();
      expect(screen.getByText(/test card 2/i)).toBeInTheDocument();
    });
  });

  it('shows "No results found" when response is empty', async () => {
    fetchMock.mockImplementationOnce(() =>
      Promise.resolve({
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
