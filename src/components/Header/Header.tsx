import { useState } from 'react';

interface HeaderProps {
  searchHandler: (value: string) => void;
}

const CONTENT = {
  title: 'Pokémon cards',
  search: 'Search'
};

export const Header = (props: HeaderProps) => {
  const [state, setState] = useState(localStorage.getItem('searchTerm') || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setState(inputValue);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.searchHandler(state.trim());
    localStorage.setItem('searchTerm', state.trim());
  };

  return (
    <header className="flex justify-center items-center px-5 py-2.5 border-b-2 border-gray-600">
      <form className="flex justify-center items-center gap-2.5" onSubmit={handleSearch}>
        <label htmlFor="search">
          <h3 className="text-3xl">{CONTENT.title}</h3>
        </label>
        <input
          className="text-2xl text-amber-50 px-2 py-1 rounded-md border border-black outline-none bg-gray-600"
          type="text"
          name="search"
          id="search"
          value={state}
          onChange={handleChange}
        />
        <button className="text-2xl text-amber-50 px-4 py-1 rounded-md border border-black outline-none bg-gray-600 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-400">
          {CONTENT.search}
        </button>
      </form>
    </header>
  );
};
