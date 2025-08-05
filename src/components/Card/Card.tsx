import { NavLink, useLocation, useResolvedPath, useSearchParams } from 'react-router';
import type { ICard } from '../../types/card';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addSelectedCard, removeCardById } from '../../app/reducers/selectedCards';

export interface CardProps {
  card: ICard;
}

const CONTENT = {
  description: 'Description:',
  source: 'Source: ',
  aired: 'Aired: ',
  duration: 'Duration: ',
};

export const Card = (props: CardProps) => {
  const { card } = props;
  const isSelectedCard = useAppSelector((state) => state.selectedCards.selectedCards).some(
    (selectCard) => selectCard.mal_id === card.mal_id
  );
  const dispatch = useAppDispatch();
  const title = card.titles.find((title) => title.type === 'Default')?.title;
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const resolvedPath = useResolvedPath(`/${card.mal_id}`);
  const isActivePath = location.pathname === resolvedPath.pathname;
  const toUrl = isActivePath
    ? `/?page=${searchParams.get('page')}`
    : `/${card.mal_id}?page=${searchParams.get('page')}`;

  const handelSelect = () => {
    if (isSelectedCard) {
      dispatch(removeCardById(card.mal_id));
    } else {
      dispatch(addSelectedCard(card));
    }
  };

  return (
    <div className="flex items-center rounded-md pl-2.5 gap-2.5 text-2xl bg-[#6a728277]">
      <button
        className={`flex items-center justify-center w-7 h-7 shrink-0 rounded-full cursor-pointer ${isSelectedCard && 'bg-gray-300'} transition duration-300 ease-in-out outline-2 outline-gray-300 ${!isSelectedCard && 'hover:border-3 hover:border-gray-300'}`}
        onClick={handelSelect}>
        {isSelectedCard && (
          <div className="flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 12L10 16L18 8"
                stroke="#9f2d00bc"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </button>
      <NavLink
        to={toUrl}
        className={
          isActivePath
            ? 'flex w-full flex-col justify-between items-start rounded-md gap-2.5 border-2 border-orange-800 text-2xl bg-[#9f2d00bc] py-2.5 px-8'
            : 'flex w-full flex-col justify-between items-start rounded-md gap-2.5 border-2 border-gray-500 text-2xl bg-[#6a7282bc] py-2.5 px-8 transition duration-300 ease-in-out hover:border-2 hover:border-orange-400'
        }>
        <h3 className="text-2xl text-left font-medium text-orange-300">{title}</h3>
        <p className="text-lg text-gray-300">
          {CONTENT.aired} {card.aired.string}
        </p>
      </NavLink>
    </div>
  );
};
