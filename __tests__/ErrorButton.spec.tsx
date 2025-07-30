import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { ErrorButton } from '../src/components/ErrorButton/ErrorButton';

describe('ErrorButton', () => {
  it('throws an error when clicked', () => {
    const renderWithError = () => {
      const { getByText } = render(<ErrorButton />);
      const button = getByText(/call an error/i);
      fireEvent.click(button);
    };

    expect(renderWithError).toThrow('Something went wrong!');
  });
});
