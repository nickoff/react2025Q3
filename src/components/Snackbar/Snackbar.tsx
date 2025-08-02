import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearSelectedCards } from '../../app/reducers/selectedCards';
import { downLoadSelectedCards } from '../../utils/downLoadSelectedCards';

const CONTENT = {
  unselect: 'Unselect all',
  downLoad: 'Download'
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
          <button
            onClick={handelUnselect}
            className="min-w-32 cursor-pointer text-2xl text-amber-50 px-4 py-1 rounded-md border border-black outline-none bg-gray-600 transition duration-300 ease-in-out hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-600">
            {CONTENT.unselect}
          </button>
          <button
            onClick={handleDownLoad}
            className="min-w-32 cursor-pointer text-2xl text-amber-50 px-4 py-1 rounded-md border border-black outline-none bg-gray-600 transition duration-300 ease-in-out hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-600">
            {CONTENT.downLoad}
          </button>
        </div>
      </div>
    );
  }
};
