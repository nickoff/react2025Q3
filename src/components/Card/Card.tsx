export interface ICard {
  id: string;
  name: string;
  set: {
    name: string;
    series: string;
  };
  images: { small: string };
}

export interface CardProps {
  card: ICard;
}

const CONTENT = {
  description: 'Description:',
  set: 'Set: ',
  series: 'Series: '
};

export const Card = (props: CardProps) => {
  const { card } = props;

  return (
    <div className="flex flex-col justify-center rounded-md items-center gap-2.5 text-2xl bg-gray-500 py-2.5 px-10">
      <h3 className="text-3xl font-medium">{card.name}</h3>
      <img alt="card image" src={card.images.small} />
      <div className="flex flex-col w-full text-lg items-start">
        <p className="underline">{CONTENT.description}</p>
        <ul className="flex flex-col w-full items-start">
          <li>
            {CONTENT.set} {card.set.name}
          </li>
          <li>
            {CONTENT.series} {card.set.series}
          </li>
        </ul>
      </div>
    </div>
  );
};
