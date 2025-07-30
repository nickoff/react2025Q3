import { NavLink, useLocation, useResolvedPath, useSearchParams } from 'react-router';
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
  const location = useLocation();
  const resolvedPath = useResolvedPath(`/${card.mal_id}`);
  const isActivePath = location.pathname === resolvedPath.pathname;
  const toUrl = isActivePath
    ? `/?page=${searchParams.get('page')}`
    : `/${card.mal_id}?page=${searchParams.get('page')}`;

  return (
    <NavLink
      to={toUrl}
      className={
        isActivePath
          ? 'flex flex-col justify-between items-start rounded-md gap-2.5 border-2 border-orange-800 text-2xl bg-[#9f2d00bc] py-2.5 px-8'
          : 'flex flex-col justify-between items-start rounded-md gap-2.5 border-2 border-gray-500 text-2xl bg-[#6a7282bc] py-2.5 px-8 transition duration-300 ease-in-out hover:border-2 hover:border-orange-400'
      }>
      <h3 className="text-2xl text-left font-medium text-orange-300">{title}</h3>
      <p className="text-lg text-gray-300">
        {CONTENT.aired} {card.aired.string}
      </p>
    </NavLink>
  );
};
