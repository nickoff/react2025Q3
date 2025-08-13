export interface CardModel {
  mal_id: number;
  images: { webp: { image_url: string } };
  title_english: string;
  title_japanese: string;
  titles: { type: string; title: string }[];
  synopsis: string;
  aired: { string: string };
  source: string;
  duration: string;
}
