import { describe, expect, it } from 'vitest';
import { Button } from '../components/ui/Button';
import { render, screen } from '@testing-library/react';

describe('Button component', () => {
  it('it renders children', () => {
    render(<Button>This is button</Button>);

    expect(screen.getByText('This is button')).toBeInTheDocument();
  });
});
