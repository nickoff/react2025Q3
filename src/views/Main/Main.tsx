import { Component } from 'react';
import { ErrorButton } from '../../components/ErrorButton/ErrorButton';

type MainState = {
  searchTerm: string;
};

export class Main extends Component<unknown, MainState> {
  constructor(props: unknown) {
    super(props);
  }

  render() {
    return (
      <>
        <p>Main page</p>
        <ErrorButton />
      </>
    );
  }
}
