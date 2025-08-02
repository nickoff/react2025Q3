import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ThemeToggle } from '../src/components/ThemeToggle/ThemeToggle';
import { ThemeContext } from '../src/app/Providers/ThemeContextProvider/themeContext';
import { ThemeContextProvider } from '../src/app/Providers/ThemeContextProvider/ThemeContextProvider';

describe('ThemeContextProvider', () => {
  it('renders component and children icons', async () => {
    render(
      <ThemeContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  it('toggles changeTheme is called', async () => {
    const mockChangeTheme = vi.fn();

    render(
      <ThemeContext value={{ themeDark: true, changeTheme: mockChangeTheme }}>
        <ThemeToggle />
      </ThemeContext>
    );
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(mockChangeTheme).toHaveBeenCalledOnce();
  });
});
