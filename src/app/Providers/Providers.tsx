import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Fallback } from '../../views/Fallback/Fallback';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <ErrorBoundary fallback={(handlerReload) => <Fallback reloadCallback={handlerReload} />}>{children}</ErrorBoundary>
  );
};
