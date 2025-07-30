import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/app/App';
import '@testing-library/jest-dom';

describe('App component', () => {
  it('renders Main inside by default', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
