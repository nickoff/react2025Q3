import { Await, Link, Navigate, useLoaderData, useSearchParams } from 'react-router';
import type { ICard } from '../../types/card';
import { Suspense } from 'react';

const CONTENT = {
  loading: 'Loading...',
  noResults: 'Ups... No results found 😟',
  error: '❌ Ошибка загрузки: ',
  source: 'Source: ',
  duration: 'Duration: ',
  close: 'Go back'
};

export const Description = () => {
  const { description } = useLoaderData() as { description: Promise<{ data: ICard }> };
  const [searchParams] = useSearchParams();

  return (
    <div className="w-full h-fit flex flex-col justify-start items-start rounded-md gap-5 py-5 px-8 bg-[rgba(0,0,0,0.7)]">
      <Link
        className="text-2xl text-amber-50 px-4 py-1 rounded-md border border-black outline-none bg-gray-600"
        to={'/?page=' + searchParams.get('page')}>
        {CONTENT.close}
      </Link>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-w-[400px] text-3xl mt-48 mb-65 w-full animate-pulse">
            {CONTENT.loading}
          </div>
        }>
        <Await resolve={description}>
          {({ data }) =>
            data ? (
              <>
                <h2 className="text-3xl font-bold text-orange-500 text-shadow-amber-950">{data.titles[0].title}</h2>
                <img src={data.images.webp.image_url} alt="Description image" />
                <p className="text-2xl text-left text-gray-300">{data.synopsis}</p>
                <p className="text-2xl text-left text-gray-300">
                  {CONTENT.source} {data.source}
                </p>
                <p className="text-2xl text-left text-gray-300">
                  {CONTENT.duration} {data.duration}
                </p>
              </>
            ) : (
              <Navigate to="/not-found" replace />
            )
          }
        </Await>
      </Suspense>
    </div>
  );
};
