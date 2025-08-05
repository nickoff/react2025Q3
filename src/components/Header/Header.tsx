import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Navigation } from '../Navigation/Navigation';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { ThemeContext } from '../../app/Providers/ThemeContextProvider/themeContext';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setNewSearchTermValue } from '../../app/reducers/search';
import { useLocalStorage } from '../../hooks/useLocalStorageSearch';

const CONTENT = {
  title: 'Anime searcher',
  search: 'Search',
};

export const Header = () => {
  const searchTerm = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setSearchTerm } = useLocalStorage();
  const { themeDark } = useContext(ThemeContext);

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputElement = event.target.elements.namedItem('search') as HTMLInputElement;
    setSearchTerm(inputElement.value.trim());
    dispatch(setNewSearchTermValue(inputElement.value.trim()));
    navigate('/');
  };

  return (
    <header
      className={`flex justify-between items-center gap-5 px-5 py-2.5 border-b-2 ${themeDark ? 'border-gray-600' : 'border-amber-100'}`}>
      <form className="flex justify-center items-center gap-2.5" onSubmit={handleSearch}>
        <label htmlFor="search">
          <h3 className="text-3xl font-bold text-orange-400 [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
            {CONTENT.title}
          </h3>
        </label>
        <input
          className={`${themeDark ? 'text-amber-50  bg-gray-600' : 'text-gray-600 bg-amber-50'} text-2xl px-2 min-w-96 py-1 rounded-md border border-black outline-none`}
          type="text"
          name="search"
          id="search"
          defaultValue={searchTerm}
        />
        <button
          className={`${themeDark ? 'bg-gray-600' : 'bg-gray-500'} text-2xl text-amber-50 px-4 py-1 rounded-md border outline-none cursor-pointer transition duration-300 ease-in-out hover:bg-orange-400`}>
          {CONTENT.search}
        </button>
      </form>
      <Navigation />
      <ThemeToggle />
    </header>
  );
};
