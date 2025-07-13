import { Component } from 'react';
import './Header.css';
import { ErrorButton } from '../ErrorButton/ErrorButton';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <ErrorButton />
      </header>
    );
  }
}
