import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { About } from '../src/views/About/About';

describe('About Component', () => {
  it('renders header with correct title', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About');
  });
});
