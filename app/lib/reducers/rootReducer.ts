import { combineReducers } from '@reduxjs/toolkit';
import { animeApi } from '../utils/animeApi';
import selectedCardReducer from './selectedCards';

export const rootReducer = combineReducers({
  [animeApi.reducerPath]: animeApi.reducer,
  selectedCards: selectedCardReducer,
});
