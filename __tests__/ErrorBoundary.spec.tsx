import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { ErrorBoundary } from '../src/components/ErrorBoundary/ErrorBoundary';
import React from 'react';

const ThrowComponent = () => {
  throw new Error('Simulated error');
};

describe('ErrorBoundary', () => {
  test('renders children when no error', () => {
    render(
      <ErrorBoundary fallback={() => <div data-testid="fallback">Error</div>}>
        <div data-testid="content">Content</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  test('renders fallback when error is thrown', () => {
    render(
      <ErrorBoundary fallback={() => <div data-testid="fallback">Error</div>}>
        <ThrowComponent />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('fallback')).toBeInTheDocument();
  });

  test('reloadCallback restores content', async () => {
    const Fallback = (reload: () => void) => (
      <button data-testid="reload" onClick={reload}>
        Повторить
      </button>
    );

    render(
      <ErrorBoundary fallback={Fallback}>
        <ThrowComponent />
      </ErrorBoundary>
    );

    const reloadButton = await screen.findByTestId('reload');
    await userEvent.click(reloadButton);

    render(
      <ErrorBoundary fallback={Fallback}>
        <div data-testid="content">Content</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});
