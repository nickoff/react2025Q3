import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { ResultList } from '../../components/ResultList/ResultList';

type MainState = {
  searchTerm: string;
};

export const Main = () => {
  const [state, setState] = useState<MainState>({ searchTerm: localStorage.getItem('searchTerm') || '' });

  const searchHandler = (value: string) => {
    setState({ searchTerm: value });
  };

  return (
    <main>
      <Header searchHandler={searchHandler} />
      <ResultList searchTerm={state.searchTerm} />
    </main>
  );
};
