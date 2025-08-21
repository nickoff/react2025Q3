import { combineReducers } from '@reduxjs/toolkit';
import { restcountries } from '../../utils/restcountries.api';

export const rootReducer = combineReducers({
  [restcountries.reducerPath]: restcountries.reducer,
});
