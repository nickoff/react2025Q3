import type { ICard } from '../../types/card';

export interface CardProps {
  card: ICard;
}

const CONTENT = {
  description: 'Description:',
  source: 'Source: ',
  aired: 'Aired: ',
  duration: 'Duration: '
};

export const Card = (props: CardProps) => {
  const { card } = props;

  const title = card.titles.find((title) => title.type === 'Default')?.title;

  return (
    <div className="flex flex-col justify-between rounded-md items-center gap-2.5 text-2xl bg-gray-500 py-2.5 px-10">
      <h3 className="text-3xl font-medium">{title}</h3>
      <img alt="card image" src={card.images.webp.image_url} />
      <div className="flex flex-col w-full text-lg items-start">
        <p className="underline">{CONTENT.description}</p>
        <ul className="flex flex-col w-full items-start">
          <li>
            {CONTENT.source} {card.source}
          </li>
          <li>
            {CONTENT.aired} {card.aired.string}
          </li>
          <li>
            {CONTENT.duration} {card.duration}
          </li>
        </ul>
      </div>
    </div>
  );
};
