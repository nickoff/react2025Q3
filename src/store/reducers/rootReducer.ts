import { combineReducers } from '@reduxjs/toolkit';
import { restcountries } from '../../utils/restcountries.api';
import { formSlice } from './formSlice';

export const rootReducer = combineReducers({
  form: formSlice.reducer,
  [restcountries.reducerPath]: restcountries.reducer,
});
