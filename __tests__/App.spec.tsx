import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/app/App';
import '@testing-library/jest-dom';

describe('App component', () => {
  test('renders Main inside by default', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('Pokémon cards');
  });
});
