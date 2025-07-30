import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Card } from '../src/components/Card/Card';
import '@testing-library/jest-dom';
import { ICard } from '../src/types/card';
import { MemoryRouter } from 'react-router';

const mockCard: ICard = {
  mal_id: 1,
  images: { webp: { image_url: 'https://example.com/image.jpg' } },
  title_english: 'Test Card 1',
  aired: { string: '1998' },
  title_japanese: 'ddd',
  titles: [{ type: 'Default', title: 'Test Card 1' }],
  synopsis: '',
  source: 'Original',
  duration: '1 hr 55 min'
};

describe('Card Component', () => {
  test('renders card name, image and details', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Card card={mockCard} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(mockCard.titles[0].title);
    expect(screen.getByText(`Aired: ${mockCard.aired.string}`)).toBeInTheDocument();
  });

  test('render active link', async () => {
    vi.mock('react-router', async () => {
      const actual = await vi.importActual<typeof import('react-router')>('react-router');
      return {
        ...actual,
        useSearchParams: () => [new URLSearchParams('page=3')],
        useLocation: () => ({ pathname: '/1' }),
        useResolvedPath: vi.fn((to: string) => ({ pathname: to }))
      };
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <Card card={mockCard} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/?page=3');
  });
});
