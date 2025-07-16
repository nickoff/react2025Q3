import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Fallback } from '../src/views/Fallback/Fallback';

describe('Fallback component', () => {
  test('renders fallback message and button', () => {
    const mockReload = vi.fn();
    render(<Fallback reloadCallback={mockReload} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Something went wrong/i);
    expect(screen.getByRole('button', { name: /Try reload/i })).toBeInTheDocument();
  });

  test('calls reloadCallback when button is clicked', async () => {
    const mockReload = vi.fn();
    render(<Fallback reloadCallback={mockReload} />);

    const reloadButton = screen.getByRole('button', { name: /Try reload/i });
    await userEvent.click(reloadButton);

    expect(mockReload).toHaveBeenCalledTimes(1);
  });
});
