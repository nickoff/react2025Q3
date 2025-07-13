import { Component } from 'react';
import './Header.css';
import { ErrorButton } from '../ErrorButton/ErrorButton';

interface HeaderProps {
  searchHandler: (value: string) => void;
}

interface HeaderPropsState {
  error: boolean;
  inputValue: string;
}

export class Header extends Component<HeaderProps, HeaderPropsState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = { error: false, inputValue: localStorage.getItem('searchTerm') || '' };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  handleSearch = () => {
    this.props.searchHandler(this.state.inputValue.trim());
    localStorage.setItem('searchTerm', this.state.inputValue.trim());
  };

  render() {
    return (
      <header className="header">
        <form className="search-form" onSubmit={this.handleSearch}>
          <label className="search-form__label" htmlFor="search">
            <h3>Pokémon cards</h3>
          </label>
          <input
            className="search-form__input"
            type="text"
            name="search"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button className="search-form__button" type="button" onClick={this.handleSearch}>
            Search
          </button>
        </form>
        <ErrorButton />
      </header>
    );
  }
}
