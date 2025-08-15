import { Description } from '@/app/ui/components';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return <Description />;
}
