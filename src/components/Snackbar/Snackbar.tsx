import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearSelectedCards } from '../../app/reducers/selectedCards';
import { downLoadSelectedCards } from '../../utils/downLoadSelectedCards';
import { Button } from '../Button/Button';

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

  const handleDownLoad = () => {
    downLoadSelectedCards(selectedCards);
  };

  if (!numSelectedCards) return;

  if (numSelectedCards) {
    return (
      <div className="text-2xl gap-2 rounded-md p-5 fixed bottom-10 right-20 flex flex-col bg-[#6a7282d5]">
        <p>{`${numSelectedCards} ${numSelectedCards === 1 ? 'item is ' : 'items are '}selected`}</p>
        <div className="flex gap-2">
          <Button onClick={handelUnselect}>{CONTENT.unselect}</Button>
          <Button onClick={handleDownLoad}>{CONTENT.downLoad}</Button>
        </div>
      </div>
    );
  }
};
