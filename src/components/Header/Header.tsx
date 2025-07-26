import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Navigation } from '../Navigation/Navigation';

interface HeaderProps {
  searchTerm: string;
  searchHandler: (value: string) => void;
}

const CONTENT = {
  title: 'Anime searcher',
  search: 'Search'
};

export const Header = (props: HeaderProps) => {
  const { searchTerm, searchHandler } = props;
  const [inputValue, setInputValue] = useState(searchTerm);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchHandler(inputValue.trim());
    navigate('/');
  };

  return (
    <header className="flex justify-between items-center gap-5 px-5 py-2.5 border-b-2 border-gray-600">
      <form className="flex justify-center items-center gap-2.5" onSubmit={handleSearch}>
        <label htmlFor="search">
          <h3 className="text-3xl font-bold text-orange-400 [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
            {CONTENT.title}
          </h3>
        </label>
        <input
          className="text-2xl text-amber-50 px-2 min-w-96 py-1 rounded-md border border-black outline-none bg-gray-600"
          type="text"
          name="search"
          id="search"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="text-2xl text-amber-50 px-4 py-1 rounded-md border border-black outline-none bg-gray-600 cursor-pointer transition duration-300 ease-in-out hover:bg-orange-400">
          {CONTENT.search}
        </button>
      </form>
      <Navigation />
    </header>
  );
};
