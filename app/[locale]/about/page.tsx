import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export const metadata: Metadata = {
  title: 'About',
};

export default function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations('About');

  return (
    <div className={`text-white w-full flex flex-col justify-start items-start gap-8`}>
      <h1 className="text-8xl font-bold text-orange-600 text-shadow-amber-950">{t('title')}</h1>
      <p className="text-3xl text-left">
        {t('paragraph_1')}{' '}
        <Link
          className={`text-orange-300 underline hover:text-orange-400 cursor-pointer transition duration-300 ease-in-out`}
          href="https://rs.school/courses/reactjs">
          RS School
        </Link>
        {t('paragraph_1')}
      </p>
      <p className={`text-3xl font-bold 'text-orange-300`}>
        {t('author')}{' '}
        <Link
          className={`text-orange-300 underline hover:text-orange-400 cursor-pointer transition duration-300 ease-in-out`}
          href="https://github.com/nickoff">
          Mikalai A
        </Link>
      </p>
    </div>
  );
}
