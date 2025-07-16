import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App component', () => {
  test('renders Main inside ErrorBoundary by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Pokémon cards');
  });
});
