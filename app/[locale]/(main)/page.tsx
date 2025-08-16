import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);

  setRequestLocale(locale);
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col gap-5 items-center mt-28 text-center text-muted-foreground px-6">
      <h2 className="text-8xl font-bold text-orange-600 text-shadow-amber-950">{t('title')}</h2>
      <p className="text-3xl">{t('content')}</p>
    </div>
  );
}
