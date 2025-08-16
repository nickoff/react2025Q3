'use client';

import { useGetAnimeByIdQuery } from '../../lib/utils/animeApi';
import { Button } from '@/app/ui/components';
import { Loading } from './loading/loading';
import { useParams, useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const pageParam = '/?page=';

type CustomError = {
  status: number;
  data: {
    message: string;
  };
};

const DescriptionContent = (props: { malId: string }) => {
  const { malId } = props;
  const { isFetching, isError, error, data: description, refetch } = useGetAnimeByIdQuery(malId);
  const t = useTranslations('ResultList');

  const handleRefresh = () => {
    refetch();
  };

  if (isFetching) return <Loading />;

  if (isError && error) {
    const err = error as CustomError;

    return (
      <div className="flex justify-center items-center text-3xl mt-48 mb-65 w-full text-red-500">
        {t('error')} {err.data.message}
      </div>
    );
  }

  if (!isFetching && description)
    return (
      <>
        <h2 className="text-3xl text-left w-[80%] font-bold text-orange-500 text-shadow-amber-950">
          {description.data.titles[0].title}
        </h2>
        <Button disabled={isFetching} onClick={handleRefresh}>
          {isFetching ? t('refresh_button_fetching') : t('refresh_button')}
        </Button>
        <div className="aspect-[3/4] relative w-[30%]">
          <Image fill src={description.data.images.webp.image_url} alt="Description image" />
        </div>
        <p className="text-2xl text-left ">{description.data.synopsis}</p>
        <p className="text-2xl text-left">
          {t('source')} {description.data.source}
        </p>
        <p className="text-2xl text-left">
          {t('duration')} {description.data.duration}
        </p>
      </>
    );
};

export const Description = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const mal_id = params.mal_id as string;
  const t = useTranslations('ResultList');

  return (
    <div
      className={`dark:bg-[rgba(0,0,0,0.7)] dark:text-gray-300 bg-[rgba(235,232,232,0.7)] text-gray-600 w-full relative h-fit flex flex-col justify-start items-start rounded-md gap-5 py-5 px-8`}>
      <Link
        className="absolute top-5 right-5 text-2xl text-amber-50 px-4 py-1 ml-auto rounded-md border border-black outline-none bg-gray-500 transition duration-300 ease-in-out hover:bg-orange-400"
        href={pageParam + searchParams.get('page')}>
        {t('close')}
      </Link>
      <DescriptionContent malId={mal_id} />
    </div>
  );
};
