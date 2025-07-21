import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Providers } from '../src/app/Providers/Providers';

const ThrowComponent = () => {
  throw new Error('Simulated error');
};

describe('Providers component', () => {
  it('renders Fallback when error is thrown', () => {
    render(
      <Providers>
        <ThrowComponent />
      </Providers>
    );
    expect(screen.findAllByText('Try reload')).toBeTruthy();
  });
});
