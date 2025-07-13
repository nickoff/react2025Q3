import type { ReactNode } from 'react';
import { Component } from 'react';

interface ErrorBoundaryProps {
  fallback: (reloadCallback: () => void) => ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.handlerReload = this.handlerReload.bind(this);
  }

  handlerReload() {
    this.setState({ hasError: false });
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback(this.handlerReload);
    }

    return this.props.children;
  }
}
