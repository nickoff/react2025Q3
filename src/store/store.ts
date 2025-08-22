import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';
import { restcountries } from '../utils/restcountries.api';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restcountries.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
