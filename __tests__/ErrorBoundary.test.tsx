import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { ErrorBoundary } from '../src/components/ErrorBoundary/ErrorBoundary';
import '@testing-library/jest-dom';

const ThrowComponent = () => {
  throw new Error('Simulated error');
};

const props = {
  fallback: (reload: () => void) => <button onClick={reload}>Reload</button>,
  children: <div>Content</div>,
};

describe('ErrorBoundary ', () => {
  test('renders children when no error', () => {
    render(<ErrorBoundary {...props} />);

    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  test('renders fallback when error is thrown', () => {
    render(
      <ErrorBoundary {...props}>
        <ThrowComponent />
      </ErrorBoundary>
    );

    expect(screen.getByRole('button', { name: 'Reload' })).toBeInTheDocument();
  });

  test('reloadCallback restores content', async () => {
    render(
      <ErrorBoundary {...props}>
        <ThrowComponent />
      </ErrorBoundary>
    );

    const reloadButton = screen.getByRole('button', { name: 'Reload' });
    await userEvent.click(reloadButton);

    render(<ErrorBoundary {...props} />);

    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });
});
