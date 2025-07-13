import { Component } from 'react';
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

export class Card extends Component<CardProps> {
  private card: ICard;
  constructor(props: CardProps) {
    super(props);
    this.card = props.card;
  }
  render() {
    return (
      <div className="card">
        <h3>{this.card.name}</h3>
        <img alt="card image" className="card_image" src={this.props.card.images.small} />
        <div>
          <p>Pokémon description:</p>
          <ul>
            <li>Set: {this.props.card.set.name}</li>
            <li>Series: {this.props.card.set.series}</li>
          </ul>
        </div>
      </div>
    );
  }
}
