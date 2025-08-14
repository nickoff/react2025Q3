import type { PaginationModel } from '@/app/lib/types/pagination';
import { Button } from '@/app/ui/components';
import { useTranslations } from 'next-intl';

interface PaginationProps {
  pagination: PaginationModel;
  handleNumberPage: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { pagination } = props;
  const t = useTranslations('ResultList');

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
        {t('previous_button')}
      </Button>
      <span>
        {t('page')} {pagination.current_page} {t('of')} {pagination.last_visible_page}
      </span>
      <Button disabled={!pagination.has_next_page} onClick={handleNextPage}>
        {t('next_button')}
      </Button>
    </div>
  );
};
