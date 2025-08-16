import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <main className="w-full flex flex-col justify-center items-center gap-5 min-h-[85vh]">
      <h3 className="text-8xl font-bold text-orange-600 text-shadow-amber-950">{t('404')}</h3>
      <Link
        className="text-2xl text-amber-50 px-4 py-1 rounded-md border border-black outline-none bg-gray-600"
        href={'/'}>
        {t('back')}
      </Link>
    </main>
  );
}
