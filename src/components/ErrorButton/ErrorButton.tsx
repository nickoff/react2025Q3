import { useState } from 'react';

export const ErrorButton = () => {
  const [state, setState] = useState({ hasError: false });

  const handleClick = (): void => {
    setState({ hasError: true });
  };

  if (state.hasError) throw new Error('Something went wrong!');

  return <button onClick={() => handleClick()}>Call an Error</button>;
};
