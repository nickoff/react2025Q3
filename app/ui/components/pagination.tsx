import type { PaginationModel } from '@/app/lib/types/pagination';
import { Button } from '@/app/ui/components';

interface PaginationProps {
  pagination: PaginationModel;
  handleNumberPage: (page: number) => void;
}

const CONTENT = {
  previous: 'Previous',
  pageOf: { page: 'page', of: 'of' },
  next: 'Next',
};

export const Pagination = (props: PaginationProps) => {
  const { pagination } = props;

  const handlePreviousPage = () => {
    if (pagination.current_page > 1) {
      props.handleNumberPage(pagination.current_page - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination.has_next_page) {
      props.handleNumberPage(pagination.current_page + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <Button disabled={pagination.current_page === 1} onClick={handlePreviousPage}>
        {CONTENT.previous}
      </Button>
      <span>
        {CONTENT.pageOf.page} {pagination.current_page} {CONTENT.pageOf.of} {pagination.last_visible_page}
      </span>
      <Button disabled={!pagination.has_next_page} onClick={handleNextPage}>
        {CONTENT.next}
      </Button>
    </div>
  );
};
