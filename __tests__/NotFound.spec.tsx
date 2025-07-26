import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NotFound } from '../src/views/NotFound/NotFound';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';

describe('NotFound Component', () => {
  it('renders not found message', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('404: Page not found');
  });
});
