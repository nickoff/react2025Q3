import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface SearchTerm {
  value: string;
}

const storedSearchTerm = localStorage.getItem('searchTerm') || '';

const initialState: SearchTerm = {
  value: storedSearchTerm
};

export const searchTermSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setNewSearchTermValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        value: action.payload
      };
    }
  }
});

export const { setNewSearchTermValue } = searchTermSlice.actions;
export const selectSearchTermValue = (state: RootState) => state.search.value;

export default searchTermSlice.reducer;
