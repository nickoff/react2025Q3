import { Header } from '../../components/Header/Header';
import { ResultList } from '../../components/ResultList/ResultList';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Main = () => {
  const { searchTerm, setSearchTerm } = useLocalStorage();

  const searchHandler = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <main>
      <Header searchHandler={searchHandler} />
      <ResultList searchTerm={searchTerm} />
    </main>
  );
};
