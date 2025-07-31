import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './search';

export const rootReducer = combineReducers({
  search: searchReducer
});
