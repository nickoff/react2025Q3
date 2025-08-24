import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalSwitchWidget } from '../components/ui/ModalSwitchWidget';
import { rootReducer } from '../store/reducers/rootReducer';
import { restcountries } from '../utils/restcountries.api';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

vi.mock('../components/ui/Modal', () => ({
  Modal: ({ children }: { children: React.ReactNode }) => <div data-testid="mock-modal">{children}</div>,
}));

vi.mock('../components/ui/ReactHookForm', () => ({
  ReactHookForm: ({ onSuccess }: { onSuccess: () => void }) => (
    <button onClick={onSuccess} data-testid="mock-form">
      Mock Submit
    </button>
  ),
}));

const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restcountries.middleware),
});

describe('ModalSwitchWidget component', () => {
  it('renders buttons', () => {
    render(
      <Provider store={mockStore}>
        <ModalSwitchWidget />
      </Provider>
    );

    expect(screen.getByText('React Hook Form')).toBeInTheDocument();
    expect(screen.getByText('Form uncontrolled')).toBeInTheDocument();
  });

  it('opens React Hook Form modal on button click', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={mockStore}>
        <ModalSwitchWidget />
      </Provider>
    );

    await user.click(screen.getByRole('button', { name: /React Hook Form/i }));

    expect(screen.getByTestId('mock-modal')).toBeInTheDocument();
    expect(screen.getByTestId('mock-form')).toBeInTheDocument();
  });

  it('opens Form uncontrolled on button click', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={mockStore}>
        <ModalSwitchWidget />
      </Provider>
    );

    await user.click(screen.getByRole('button', { name: /Form uncontrolled/i }));

    expect(screen.getByTestId('mock-modal')).toBeInTheDocument();
  });

  it('close modal React Hook Form on button click', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={mockStore}>
        <ModalSwitchWidget />
      </Provider>
    );

    await user.click(screen.getByRole('button', { name: /React Hook Form/i }));
    expect(screen.getByTestId('mock-form')).toBeInTheDocument();

    await user.click(screen.getByTestId('mock-form'));

    expect(screen.queryByTestId('mock-form')).not.toBeInTheDocument();
  });
});
