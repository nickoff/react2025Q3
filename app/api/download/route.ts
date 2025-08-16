import type { CardModel } from '../../lib/types/card';

export async function POST(req: Request) {
  const formData = await req.formData();
  const raw = formData.get('selectedCards');
  if (!raw || typeof raw !== 'string') return;

  const selectedCards: CardModel[] = JSON.parse(raw);

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
  const fileName = `${selectedCards.length}_items.csv`;

  return new Response(csvContent, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="${fileName}"`,
    },
  });
}
