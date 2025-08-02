import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import '@testing-library/jest-dom';
import { ThemeContextProvider } from '../src/app/Providers/ThemeContextProvider/ThemeContextProvider';
import { ThemeContext } from '../src/app/Providers/ThemeContextProvider/themeContext';

const ThemeConsumer = () => {
  const { themeDark, changeTheme } = useContext(ThemeContext);
  return <button onClick={changeTheme}>{themeDark ? 'dark' : 'light'}</button>;
};

describe('ThemeContextProvider', () => {
  it('provides default themeDark as true', () => {
    render(
      <ThemeContextProvider>
        <ThemeConsumer />
      </ThemeContextProvider>
    );

    const button = screen.getByRole('button', { name: 'dark' });
    expect(button).toBeInTheDocument();
  });

  it('toggles themeDark value when changeTheme is called', async () => {
    render(
      <ThemeContextProvider>
        <ThemeConsumer />
      </ThemeContextProvider>
    );
    const button = screen.getByRole('button', { name: 'dark' });
    await userEvent.click(button);

    expect(button).toHaveTextContent('light');

    await userEvent.click(button);

    expect(button).toHaveTextContent('dark');
  });
});
