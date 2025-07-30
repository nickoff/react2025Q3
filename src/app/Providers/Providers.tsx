import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Fallback } from '../../views/Fallback/Fallback';
import { ThemeContextProvider } from './ThemeContextProvider/ThemeContextProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <ErrorBoundary fallback={(handlerReload) => <Fallback reloadCallback={handlerReload} />}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ErrorBoundary>
  );
};
