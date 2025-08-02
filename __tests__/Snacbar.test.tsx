import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { Snackbar } from '../src/components/Snackbar/Snackbar';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../src/app/reducers/rootReducer';
import { mockCard } from './mocks/mocks';

const mockState = {
  selectedCards: [mockCard]
};

const mockStore = configureStore({
  reducer: rootReducer,
  preloadedState: { selectedCards: mockState }
});

describe('Snackbar component', () => {
  it('renders snackbar', () => {
    render(
      <Provider store={mockStore}>
        <Snackbar />
      </Provider>
    );

    expect(screen.getByText('Unselect all')).toBeInTheDocument();
    expect(screen.getByText('Download')).toBeInTheDocument();
  });
});
