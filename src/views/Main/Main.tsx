import { Component } from 'react';
import { Header } from '../../components/Header/Header';

type MainState = {
  searchTerm: string;
};

export class Main extends Component<unknown, MainState> {
  constructor(props: unknown) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header />
        <p>Main page</p>
      </main>
    );
  }
}
