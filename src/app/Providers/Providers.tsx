import { Provider } from 'react-redux';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Fallback } from '../../views/Fallback/Fallback';
import { ThemeContextProvider } from './ThemeContextProvider/ThemeContextProvider';
import { store } from '../store';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <ErrorBoundary fallback={(handlerReload) => <Fallback reloadCallback={handlerReload} />}>
      <Provider store={store}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </Provider>
    </ErrorBoundary>
  );
};
