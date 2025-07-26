import { Outlet } from 'react-router';
import { Header } from '../../components/Header/Header';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SearchContext } from '../../utils/searchContext';

export const Layout = () => {
  const { searchTerm, setSearchTerm } = useLocalStorage();

  const searchHandler = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <SearchContext.Provider value={searchTerm}>
      <div className="max-w-7xl mx-auto flex flex-col h-[90vh]">
        <Header searchTerm={searchTerm} searchHandler={searchHandler} />
        <main className="w-full flex flex-1 justify-between gap-5 p-5">
          <Outlet />
        </main>
      </div>
    </SearchContext.Provider>
  );
};
export { SearchContext };
