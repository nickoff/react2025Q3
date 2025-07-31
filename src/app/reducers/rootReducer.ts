import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './search';
import { animeApi } from '../../utils/animeApi';

export const rootReducer = combineReducers({
  search: searchReducer,
  [animeApi.reducerPath]: animeApi.reducer
});
