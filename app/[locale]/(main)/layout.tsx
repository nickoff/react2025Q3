import { ReactNode, Suspense } from 'react';
import HomeWrapper from '../../ui/home/home-wrapper';
import { Loading } from '../../ui/components';

export default function MainSectionLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <HomeWrapper>{children}</HomeWrapper>
    </Suspense>
  );
}
