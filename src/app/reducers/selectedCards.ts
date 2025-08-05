import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { ICard } from '../../types/card';

export type SelectedCards = {
  selectedCards: ICard[];
};

const initialState: SelectedCards = {
  selectedCards: [],
};

export const selectedCardsSlice = createSlice({
  name: 'selectedCards',
  initialState,
  reducers: {
    addSelectedCard: (state, action: PayloadAction<ICard>) => {
      return {
        ...state,
        selectedCards: state.selectedCards.concat(action.payload),
      };
    },
    removeCardById: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        selectedCards: state.selectedCards.filter((card) => card.mal_id !== action.payload),
      };
    },
    clearSelectedCards: (state) => {
      return {
        ...state,
        selectedCards: initialState.selectedCards,
      };
    },
  },
});

export const { addSelectedCard, removeCardById, clearSelectedCards } = selectedCardsSlice.actions;
export const selectSelectedCardsValue = (state: RootState) => state.selectedCards.selectedCards;

export default selectedCardsSlice.reducer;
