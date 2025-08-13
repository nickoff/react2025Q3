import '@/app/globals.css';
import { Metadata } from 'next';
import { architectsDaughter } from '@/app/ui/fonts';
import { Header, Loading } from '@/app/ui/components';
import StoreProvider from './lib/store-provider';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'React2025q3',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${architectsDaughter.className} antialiased`}>
        <div id="root">
          <StoreProvider>
            <div
              className={`h-[100vh] bg-[url('/light-theme.png')] dark:bg-[url('/dark-theme.jpg')] [overflow:overlay] bg-center bg-no-repeat bg-fixed bg-[length:100%_auto]`}>
              <div className="max-w-7xl mx-auto flex flex-col">
                <Suspense fallback={<Loading />}>
                  <Header />
                </Suspense>
                <main className="w-full flex flex-1 justify-between gap-5 p-5 pb-10">
                  <Suspense fallback={<Loading />}>{children}</Suspense>
                </main>
              </div>
            </div>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
