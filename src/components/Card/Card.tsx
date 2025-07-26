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
    <div className="flex flex-col justify-between items-start rounded-md gap-2.5 text-2xl bg-gray-500 py-2.5 px-10">
      <h3 className="text-2xl font-medium ">{title}</h3>
      <p className="text-lg text-gray-300">
        {CONTENT.aired} {card.aired.string}
      </p>
    </div>
  );
};
