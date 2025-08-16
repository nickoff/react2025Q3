'use server';

import path from 'path';
import type { CardModel } from '../types/card';
import { unlink, writeFile } from 'fs/promises';
import { redirect } from 'next/navigation';

export const downLoadSelectedCards = async (formData: FormData) => {
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

  const filePath = path.join(process.cwd(), 'public', 'downloads', fileName);

  await writeFile(filePath, csvContent, 'utf8');

  setTimeout(async () => {
    try {
      await unlink(filePath);
      console.log(`Deleted: ${fileName}`);
    } catch (err) {
      console.error(err);
    }
  }, 15000);

  redirect(`/downloads/${fileName}`);
};
