import { Component } from 'react';
import { Header } from '../../components/Header/Header';

type MainState = {
  searchTerm: string;
};

export class Main extends Component<unknown, MainState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || ''
    };
  }

  render() {
    const searchHandler = (value: string) => {
      this.setState({ searchTerm: value });
    };

    return (
      <main>
        <Header searchHandler={searchHandler} />
        <p>Main page</p>
      </main>
    );
  }
}
