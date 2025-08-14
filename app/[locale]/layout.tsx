import '@/app/globals.css';
import { Metadata } from 'next';
import { architectsDaughter } from '@/app/ui/fonts';
import { Header, Loading } from '@/app/ui/components';
import StoreProvider from '../lib/store-provider';
import { Suspense } from 'react';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: {
    template: '%s | React2025q3',
    default: 'React2025q3',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${architectsDaughter.className} antialiased`}>
        <div id="root">
          <NextIntlClientProvider>
            <StoreProvider>
              <div
                className={`h-[100vh] bg-[url('/light-theme.png')] dark:bg-[url('/dark-theme.jpg')] [overflow:overlay] bg-center bg-no-repeat bg-fixed bg-[length:100%_auto]`}>
                <div className="max-w-7xl mx-auto flex flex-col">
                  <Header />
                  <main className="w-full flex flex-1 justify-between gap-5 p-5 pb-10">
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                  </main>
                </div>
              </div>
            </StoreProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
