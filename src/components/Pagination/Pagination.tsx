import type { IPagination } from '../../types/pagination';

interface PaginationProps {
  pagination: IPagination;
  handleNumberPage: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { pagination } = props;

  const handlePreviosPage = () => {
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
    <div className="flex justify-center items-center gap-3 my-5">
      <button
        className="min-w-32 cursor-pointer text-2xl text-amber-50 px-4 py-1 rounded-md border border-black outline-none bg-gray-600 transition duration-300 ease-in-out hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-600"
        disabled={pagination.current_page === 1}
        onClick={handlePreviosPage}>
        Previous
      </button>
      <span>
        page {pagination.current_page} of {pagination.last_visible_page}
      </span>
      <button
        className="min-w-32 cursor-pointer text-2xl text-amber-50 px-4 py-1 rounded-md border border-black outline-none bg-gray-600 transition duration-300 ease-in-out hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-600"
        disabled={!pagination.has_next_page}
        onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
};
