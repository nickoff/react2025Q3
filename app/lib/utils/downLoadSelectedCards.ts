import type { CardModel } from '../types/card';

export const downLoadSelectedCards = (selectedCards: CardModel[]) => {
  if (!selectedCards.length) return;

  const printData = selectedCards.map((card) => {
    return {
      mal_id: String(card.mal_id),
      image_url: String(card.images.webp.image_url),
      titles: String(card.titles[0].title),
      synopsis: String(card.synopsis),
      aired: String(card.aired.string),
      source: String(card.source),
      duration: String(card.duration),
    };
  });

  const headers: Array<'mal_id' | 'image_url' | 'titles' | 'synopsis' | 'aired' | 'source' | 'duration'> = [
    'mal_id',
    'image_url',
    'titles',
    'synopsis',
    'aired',
    'source',
    'duration',
  ];

  const rows = printData.map((obj) => headers.map((header) => `"${obj[header]}"`).join(','));

  const csvContent = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${printData.length}_items`);
  link.click();

  URL.revokeObjectURL(url);
};
