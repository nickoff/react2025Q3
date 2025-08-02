import { ICard } from '../../src/types/card';

export const mockCard: ICard = {
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

export const mockData: { data: ICard[] } = {
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
