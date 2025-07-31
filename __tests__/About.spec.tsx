import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { About } from '../src/views/About/About';
import { ThemeContext } from '../src/app/Providers/ThemeContextProvider/themeContext';

const mockContextValue = { themeDark: false, changeTheme: () => {} };

describe('About Component', () => {
  it('renders header with correct title', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <About />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About');
  });

  it('renders correct styles for light theme', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeContext.Provider value={mockContextValue}>
          <About />
        </ThemeContext.Provider>
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: 'RS School' });
    expect(link).toHaveClass('text-orange-600');
  });
});
