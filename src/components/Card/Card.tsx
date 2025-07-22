import './Card.css';

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

export const Card = (props: CardProps) => {
  const { card } = props;

  return (
    <div className="card">
      <h3>{card.name}</h3>
      <img alt="card image" className="card_image" src={card.images.small} />
      <div>
        <p>Pokémon description:</p>
        <ul>
          <li>Set: {card.set.name}</li>
          <li>Series: {card.set.series}</li>
        </ul>
      </div>
    </div>
  );
};
