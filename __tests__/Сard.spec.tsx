import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Card, ICard } from '../src/components/Card/Card';

const mockCard: ICard = {
  id: 'xy7-54',
  name: 'Gardevoir',
  set: {
    name: 'Ancient Origins',
    series: 'XY'
  },
  images: {
    small: 'https://images.pokemontcg.io/xy7/54.png'
  }
};

describe('Card Component', () => {
  test('renders card name, image and details', () => {
    render(<Card card={mockCard} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(mockCard.name);

    const image = screen.getByAltText('card image');
    expect(image).toHaveAttribute('src', mockCard.images.small);
    expect(image).toHaveClass('card_image');

    expect(screen.getByText('Pokémon description:')).toBeInTheDocument();
    expect(screen.getByText(`Set: ${mockCard.set.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Series: ${mockCard.set.series}`)).toBeInTheDocument();
  });
});
