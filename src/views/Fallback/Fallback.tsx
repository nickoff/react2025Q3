import { Component } from 'react';
import './Fallback.css';

interface FallbackProps {
  reloadCallback: () => void;
}

export class Fallback extends Component<FallbackProps> {
  constructor(props: FallbackProps) {
    super(props);
  }
  render() {
    return (
      <div className="fallback">
        <h2>Ups... 😟 Something went wrong!</h2>
        <button className="fallback__reload-button" onClick={this.props.reloadCallback}>
          Try reload
        </button>
      </div>
    );
  }
}
