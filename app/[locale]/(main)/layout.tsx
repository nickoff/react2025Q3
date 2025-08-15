import { Suspense } from 'react';
import HomeWrapper from '../../ui/home/home-wrapper';
import { Loading } from '../../ui/components';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function MainSectionLayout({
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
    <Suspense fallback={<Loading />}>
      <HomeWrapper>{children}</HomeWrapper>
    </Suspense>
  );
}
