import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { PasswordStrengthBar } from '../components/ui/PasswordStrengthBar';

describe('PasswordStrengthBar component', () => {
  it('renders full bar', () => {
    const { container } = render(<PasswordStrengthBar password="Nick!1" />);
    const span = container.querySelector('span');

    expect(span).toHaveStyle({ width: '100%' });
  });

  it('renders 75% bar', () => {
    const { container } = render(<PasswordStrengthBar password="Nick!" />);
    const span = container.querySelector('span');

    expect(span).toHaveStyle({ width: '75%' });
  });

  it('renders 50% bar', () => {
    const { container } = render(<PasswordStrengthBar password="Nick" />);
    const span = container.querySelector('span');

    expect(span).toHaveStyle({ width: '50%' });
  });

  it('renders 25% bar', () => {
    const { container } = render(<PasswordStrengthBar password="N" />);
    const span = container.querySelector('span');

    expect(span).toHaveStyle({ width: '25%' });
  });

  it('renders 0% bar', () => {
    const { container } = render(<PasswordStrengthBar password="" />);
    const paragraph = container.querySelector('p');

    expect(paragraph).toHaveStyle({ color: 'canvastext' });
  });
});
