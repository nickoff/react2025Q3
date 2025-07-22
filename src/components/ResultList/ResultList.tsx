import { useEffect, useState } from 'react';
import './ResultList.css';
import { Card, type ICard } from '../Card/Card';
import { getResult } from '../../utils/getResult';

type ResultState = {
  resultList: ICard[] | [];
  isLoading: boolean;
};

interface ResultStateProps {
  searchTerm: string;
}

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
      {state.isLoading && <div className="result-list__loader">Loading...</div>}
      {!state.isLoading && state.resultList.length > 0 && (
        <div className="result-list">
          {state.resultList.map((result, index) => (
            <Card key={index} card={result} />
          ))}
        </div>
      )}
      {!state.isLoading && state.resultList.length === 0 && <div className="result-list__loader">No results found</div>}
    </>
  );
};
