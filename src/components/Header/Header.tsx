import { useState } from 'react';
import './Header.css';

interface HeaderProps {
  searchHandler: (value: string) => void;
}

export const Header = (props: HeaderProps) => {
  const [state, setState] = useState(localStorage.getItem('searchTerm') || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setState(inputValue);
  };

  const handleSearch = () => {
    props.searchHandler(state.trim());
    localStorage.setItem('searchTerm', state.trim());
  };

  return (
    <header className="header">
      <form className="search-form" onSubmit={handleSearch}>
        <label className="search-form__label" htmlFor="search">
          <h3>Pokémon cards</h3>
        </label>
        <input
          className="search-form__input"
          type="text"
          name="search"
          id="search"
          value={state}
          onChange={handleChange}
        />
        <button className="search-form__button" type="button" onClick={handleSearch}>
          Search
        </button>
      </form>
    </header>
  );
};
