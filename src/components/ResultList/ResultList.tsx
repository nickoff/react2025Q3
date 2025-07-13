import { Component } from 'react';
import './ResultList.css';
import { Card, type ICard } from '../Card/Card';
import { API_KEY, API_URL } from '../../utils/constants';

type ResultState = {
  resultList: ICard[] | [];
  isLoading: boolean;
};

interface ResultStateProps {
  searchTerm: string;
}

export class ResultList extends Component<ResultStateProps, ResultState> {
  constructor(props: ResultStateProps) {
    super(props);

    this.state = {
      resultList: [],
      isLoading: false
    };
  }

  private getResultList = (searchTerm: string) => {
    const apiUrl = `${API_URL}?page=1&pageSize=20&q=name:${searchTerm}*`;
    const fetchOptions: RequestInit = {
      headers: {
        'X-Api-Key': API_KEY
      },
      method: 'GET'
    };
    this.setState({ isLoading: true });
    fetch(apiUrl, fetchOptions).then((response) => {
      response.json().then((data) => {
        this.setState({ resultList: data.data });
        this.setState({ isLoading: false });
      });
    });
  };

  componentDidMount() {
    this.getResultList(this.props.searchTerm ?? '');
  }

  componentDidUpdate(prevProps: ResultStateProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.getResultList(this.props.searchTerm ?? '');
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading && <div className="result-list__loader">Loading...</div>}
        {!this.state.isLoading && this.state.resultList.length > 0 && (
          <div className="result-list">
            {this.state.resultList.map((result, index) => (
              <Card key={index} card={result} />
            ))}
          </div>
        )}
        {!this.state.isLoading && this.state.resultList.length === 0 && (
          <div className="result-list__loader">No results found</div>
        )}
      </>
    );
  }
  componentWillUnmount() {
    this.setState({ resultList: [] });
  }
}
