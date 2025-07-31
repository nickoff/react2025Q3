import { Outlet } from 'react-router';
import { Header } from '../../components/Header/Header';
import { useContext } from 'react';
import { ThemeContext } from '../../app/Providers/ThemeContextProvider/themeContext';

export const Layout = () => {
  const { themeDark } = useContext(ThemeContext);

  return (
    <div
      className={`${themeDark ? "bg-[url('./assets/dark-theme.jpg')]" : "bg-[url('./assets/light-theme.png')]"} h-[100vh] [overflow:overlay] bg-center bg-no-repeat bg-fixed bg-[length:100%_auto]`}>
      <div className="max-w-7xl mx-auto flex flex-col">
        <Header />
        <main className="w-full flex flex-1 justify-between gap-5 p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
