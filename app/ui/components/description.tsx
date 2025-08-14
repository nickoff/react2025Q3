'use client';

import { useGetAnimeByIdQuery } from '../../lib/utils/animeApi';
import { Button } from '@/app/ui/components';
import { Loading } from './loading/loading';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const CONTENT = {
  error: '❌ Loading error: ',
  source: 'Source: ',
  duration: 'Duration: ',
  close: 'Close',
};

const pageParam = '/?page=';

type CustomError = {
  data: {
    status: string;
    message: string;
  };
};

const DescriptionContent = (props: { malId: string }) => {
  const { malId } = props;
  const { isFetching, isLoading, isError, error, data: description, refetch } = useGetAnimeByIdQuery(malId);

  const handleRefresh = () => {
    refetch();
  };

  if (isFetching) return <Loading />;

  if (!isLoading && isError) {
    const err = error as CustomError;

    return (
      <div className="flex justify-center items-center text-3xl mt-48 mb-65 w-full text-red-500">
        {CONTENT.error} {err.data.status} {err.data.message}
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
          {isFetching ? 'Refreshing ...' : 'Refresh'}
        </Button>
        <Image width={200} height={150} src={description.data.images.webp.image_url} alt="Description image" />
        <p className="text-2xl text-left ">{description.data.synopsis}</p>
        <p className="text-2xl text-left">
          {CONTENT.source} {description.data.source}
        </p>
        <p className="text-2xl text-left">
          {CONTENT.duration} {description.data.duration}
        </p>
      </>
    );
};

export const Description = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const mal_id = params.mal_id as string;

  if (!mal_id) return null;

  return (
    <div
      className={`dark:bg-[rgba(0,0,0,0.7)] dark:text-gray-300 bg-[rgba(235,232,232,0.7)] text-gray-600 w-full relative h-fit flex flex-col justify-start items-start rounded-md gap-5 py-5 px-8`}>
      <Link
        className="absolute top-5 right-5 text-2xl text-amber-50 px-4 py-1 ml-auto rounded-md border border-black outline-none bg-gray-500 transition duration-300 ease-in-out hover:bg-orange-400"
        href={pageParam + searchParams.get('page')}>
        {CONTENT.close}
      </Link>
      <DescriptionContent malId={mal_id} />
    </div>
  );
};
