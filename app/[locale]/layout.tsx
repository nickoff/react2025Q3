import '@/app/globals.css';
import { Metadata } from 'next';
import { architectsDaughter } from '@/app/ui/fonts';
import { Header, Loading } from '@/app/ui/components';
import StoreProvider from '../lib/store-provider';
import { Suspense } from 'react';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { ThemeContextProvider } from '../lib/theme-provider';
import AppBackground from '../ui/components/app-background';

export const metadata: Metadata = {
  title: {
    template: '%s | React2025q3',
    default: 'React2025q3',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${architectsDaughter.className} antialiased`}>
        <div id="root">
          <NextIntlClientProvider>
            <ThemeContextProvider>
              <StoreProvider>
                <AppBackground>
                  <div className="max-w-7xl mx-auto flex flex-col">
                    <Header locale={locale} />
                    <main className="w-full flex flex-1 justify-between gap-5 p-5 pb-10">
                      <Suspense fallback={<Loading />}>{children}</Suspense>
                    </main>
                  </div>
                </AppBackground>
              </StoreProvider>
            </ThemeContextProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
