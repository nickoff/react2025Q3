import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../components/ui/Footer';

describe('Footer component', () => {
  it('renders content', () => {
    render(<Footer />);

    expect(screen.getByText('©2025')).toBeInTheDocument();
  });
});
