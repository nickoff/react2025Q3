import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { restcountries } from '../utils/restcountries.api';
import { rootReducer } from '../store/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { FormUncontrolled } from '../components/ui/FormUncontrolled';

const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restcountries.middleware),
});

describe('FormUncontrolled component', () => {
  it('render button', () => {
    render(
      <Provider store={mockStore}>
        <FormUncontrolled onSuccess={() => {}} />
      </Provider>
    );

    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });
});
