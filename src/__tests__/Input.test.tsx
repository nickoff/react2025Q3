import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from '../components/ui/Input';

describe('Input component', () => {
  it('renders variant text-input', () => {
    render(<Input label="Mock text input" />);

    expect(screen.getByText('Mock text input')).toBeInTheDocument();
  });

  it('render variant radio-list', () => {
    render(
      <Input
        label="Mock label"
        variant="radio-list"
        radioList={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
      />
    );

    expect(screen.getByText('Male'));
  });
});
