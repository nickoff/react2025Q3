import { NavLink, useSearchParams } from 'react-router';
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
  const [searchParams] = useSearchParams();

  return (
    <NavLink
      to={`${card.mal_id}?page=${searchParams.get('page')}`}
      className={({ isActive }) =>
        isActive
          ? 'flex flex-col justify-between items-start rounded-md gap-2.5 text-2xl bg-orange-800 py-2.5 px-8'
          : 'flex flex-col justify-between items-start rounded-md gap-2.5 text-2xl bg-gray-500 py-2.5 px-8'
      }>
      <h3 className="text-2xl text-left font-medium text-orange-300">{title}</h3>
      <p className="text-lg text-gray-300">
        {CONTENT.aired} {card.aired.string}
      </p>
    </NavLink>
  );
};
