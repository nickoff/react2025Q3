import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Card } from '../src/components/Card/Card';
import '@testing-library/jest-dom';
import { ICard } from '../src/types/card';

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
    render(<Card card={mockCard} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(mockCard.titles[0].title);

    expect(screen.getByText(`Aired: ${mockCard.aired.string}`)).toBeInTheDocument();
  });
});
