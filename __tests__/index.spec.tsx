import { describe, it, beforeEach, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as ReactDOMClient from 'react-dom/client';

vi.mock('react-dom/client', () => ({
  createRoot: vi.fn((container: Element) => ({
    render: (element: React.ReactElement) => {
      render(element, { container });
    }
  }))
}));

describe('index.tsx bootstrap', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    vi.clearAllMocks();
    vi.resetModules();
  });

  it('calls createRoot with #root and renders <App/> inside <StrictMode>', async () => {
    await import('../src/main.tsx');

    const container = document.getElementById('root');
    expect(ReactDOMClient.createRoot).toHaveBeenCalledWith(container);

    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('Pokémon cards');
  });
});
