'use client';

import { Provider } from 'react-redux';
import { store } from '@/app/lib/store';

interface StoreProviderProps {
  children: React.ReactNode;
}

export default function StoreProvider(props: StoreProviderProps) {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
}
