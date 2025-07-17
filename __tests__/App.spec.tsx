import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

const ThrowComponent = () => {
  throw new Error('Simulated error');
};

describe('App component', () => {
  test('renders Main inside by default', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('Pokémon cards');
  });

  test('renders Fallback when error is thrown', () => {
    render(
      <App>
        <ThrowComponent />
      </App>
    );
    expect(screen.findAllByText('Try reload')).toBeTruthy();
  });
});
