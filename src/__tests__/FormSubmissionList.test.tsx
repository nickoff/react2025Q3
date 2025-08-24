import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../store/reducers/rootReducer';
import { FormSubmissionList } from '../components/ui/FormSubmissionList';
import { Provider } from 'react-redux';
import { mockFormToStored } from './mocks/mockFormData';

const mockStore = configureStore({
  reducer: rootReducer,
});

const mockStoreWithData = configureStore({
  reducer: rootReducer,
  preloadedState: { form: { lastFormId: 1, formSubmissions: [{ id: 1, storedForm: mockFormToStored }] } },
});

describe('FormSubmissionList component', () => {
  it('renders if no items', () => {
    render(
      <Provider store={mockStore}>
        <FormSubmissionList />
      </Provider>
    );

    expect(screen.getByText('No items')).toBeInTheDocument();
  });

  it('renders if have store form', () => {
    render(
      <Provider store={mockStoreWithData}>
        <FormSubmissionList />
      </Provider>
    );

    expect(screen.getByText('Nickolas')).toBeInTheDocument();
  });
});
