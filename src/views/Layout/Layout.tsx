import { Outlet } from 'react-router';
import { Header } from '../../components/Header/Header';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SearchContext } from '../../utils/searchContext';
import { useContext } from 'react';
import { ThemeContext } from '../../app/Providers/ThemeContextProvider/themeContext';

export const Layout = () => {
  const { searchTerm, setSearchTerm } = useLocalStorage();
  const { themeDark } = useContext(ThemeContext);

  const searchHandler = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <SearchContext.Provider value={searchTerm}>
      <div
        className={`${themeDark ? "bg-[url('./assets/dark-theme.jpg')]" : "bg-[url('./assets/light-theme.png')]"} h-[100vh] [overflow:overlay] bg-center bg-no-repeat bg-fixed bg-[length:100%_auto]`}>
        <div className="max-w-7xl mx-auto flex flex-col">
          <Header searchTerm={searchTerm} searchHandler={searchHandler} />
          <main className="w-full flex flex-1 justify-between gap-5 p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </SearchContext.Provider>
  );
};
export { SearchContext };
