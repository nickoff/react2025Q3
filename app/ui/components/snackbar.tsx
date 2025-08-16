'use client';

import { useAppDispatch, useAppSelector } from '@/app/lib/hooks/useStoreHooks';
import { clearSelectedCards } from '@/app/lib/reducers/selectedCards';
import { downloadCSV } from '@/app/lib/utils/downloadCSV';
import { Button } from '@/app/ui/components';
import { useTranslations } from 'next-intl';

export const Snackbar = () => {
  const selectedCards = useAppSelector((state) => state.selectedCards.selectedCards);
  const numSelectedCards = selectedCards.length;
  const dispatch = useAppDispatch();
  const t = useTranslations('Snackbar');

  const handelUnselect = () => {
    dispatch(clearSelectedCards());
  };

  const handelDownload = async () => {
    await downloadCSV(selectedCards);
  };

  if (!numSelectedCards) return;

  if (numSelectedCards) {
    return (
      <div className="text-2xl gap-2 rounded-md p-5 fixed bottom-10 right-20 flex flex-col bg-[#6a7282d5]">
        <p>{`${numSelectedCards} ${numSelectedCards === 1 ? `${t('item')}` : `${t('items')}`}${t('selected')}`}</p>
        <div className="flex gap-2">
          <Button onClick={handelUnselect}>{t('unselect_button')}</Button>
          <Button onClick={handelDownload}>{t('download_button')}</Button>
        </div>
      </div>
    );
  }
};
