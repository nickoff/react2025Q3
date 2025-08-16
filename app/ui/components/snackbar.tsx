'use client';

import { useAppDispatch, useAppSelector } from '@/app/lib/hooks/useStoreHooks';
import { clearSelectedCards } from '@/app/lib/reducers/selectedCards';
import { downLoadSelectedCards } from '@/app/lib/actions/downloadCsv';
import { Button } from '@/app/ui/components';

const CONTENT = {
  unselect: 'Unselect all',
  downLoad: 'Download',
};

export const Snackbar = () => {
  const selectedCards = useAppSelector((state) => state.selectedCards.selectedCards);
  const numSelectedCards = selectedCards.length;
  const dispatch = useAppDispatch();

  const handelUnselect = () => {
    dispatch(clearSelectedCards());
  };

  if (!numSelectedCards) return;

  if (numSelectedCards) {
    return (
      <div className="text-2xl gap-2 rounded-md p-5 fixed bottom-10 right-20 flex flex-col bg-[#6a7282d5]">
        <p>{`${numSelectedCards} ${numSelectedCards === 1 ? 'item is ' : 'items are '}selected`}</p>
        <div className="flex gap-2">
          <Button onClick={handelUnselect}>{CONTENT.unselect}</Button>
          <form action={downLoadSelectedCards}>
            <input type="hidden" name="selectedCards" value={JSON.stringify(selectedCards)} />
            <Button type="submit">{CONTENT.downLoad}</Button>
          </form>
        </div>
      </div>
    );
  }
};
