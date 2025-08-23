import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { restcountries } from '../utils/restcountries.api';
import { rootReducer } from '../store/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ReactHookForm } from '../components/ui/ReactHookForm';

const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restcountries.middleware),
});

describe('ReactHookForm component', () => {
  it('render button', () => {
    render(
      <Provider store={mockStore}>
        <ReactHookForm onSuccess={() => {}} />
      </Provider>
    );

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
