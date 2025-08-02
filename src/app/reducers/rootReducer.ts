import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './search';
import { animeApi } from '../../utils/animeApi';
import selectedCardReducer from './selectedCards';

export const rootReducer = combineReducers({
  search: searchReducer,
  [animeApi.reducerPath]: animeApi.reducer,
  selectedCards: selectedCardReducer
});
