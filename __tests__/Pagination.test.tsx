import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { PaginationModel } from '../src/types/pagination';
import { Pagination } from '../src/components/Pagination/Pagination';

const mockPagination: PaginationModel = {
  current_page: 2,
  has_next_page: true,
  has_prev_page: false,
  last_visible_page: 10,
};

describe('Pagination Component', () => {
  it('renders pagination', () => {
    render(<Pagination pagination={mockPagination} handleNumberPage={() => {}} />);
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('page 2 of 10')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('clicks on next page', () => {
    const handleNumberPage = vi.fn();
    render(<Pagination pagination={mockPagination} handleNumberPage={handleNumberPage} />);
    screen.getByText('Next').click();
    expect(handleNumberPage).toHaveBeenCalledWith(3);
  });

  it('clicks on previous page', () => {
    const handleNumberPage = vi.fn();
    render(<Pagination pagination={mockPagination} handleNumberPage={handleNumberPage} />);
    screen.getByText('Previous').click();
    expect(handleNumberPage).toHaveBeenCalledWith(1);
  });
});
