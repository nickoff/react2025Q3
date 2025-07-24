import { useEffect, useState } from 'react';
import { Card, type ICard } from '../Card/Card';
import { getResult } from '../../utils/getResult';

type ResultState = {
  resultList: ICard[] | [];
  isLoading: boolean;
};

interface ResultStateProps {
  searchTerm: string;
}

const CONTENT = {
  loading: 'Loading...',
  noResults: 'Ups... No results found 😟'
};

export const ResultList = (props: ResultStateProps) => {
  const [state, setState] = useState<ResultState>({
    resultList: [],
    isLoading: false
  });

  useEffect(() => {
    getResultList(props.searchTerm ?? '');
  }, [props.searchTerm]);

  const getResultList = (searchTerm: string) => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    getResult(searchTerm).then((response) => {
      response.json().then((data) => {
        setState({ resultList: data.data, isLoading: false });
      });
    });
  };

  return (
    <>
      {state.isLoading && (
        <div className="flex justify-center items-center text-3xl mt-48 w-full animate-pulse">{CONTENT.loading}</div>
      )}
      {!state.isLoading && state.resultList.length > 0 && (
        <div className="w-full grid grid-cols-3 gap-5 p-5">
          {state.resultList.map((result, index) => (
            <Card key={index} card={result} />
          ))}
        </div>
      )}
      {!state.isLoading && state.resultList.length === 0 && (
        <div className="flex justify-center items-center text-3xl mt-48 w-full">{CONTENT.noResults}</div>
      )}
    </>
  );
};
