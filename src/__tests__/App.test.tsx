import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

describe('App component', () => {
  it('renders children Layout component', () => {
    render(<App />);

    expect(screen.getByText('React2025Q3')).toBeInTheDocument();
  });
});
