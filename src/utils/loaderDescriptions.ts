import type { LoaderFunction } from 'react-router';
import { getDescription } from './getDescription';

export const loaderDescription: LoaderFunction = async ({ params }) => {
  if (!params.mal_id) return null;

  return {
    description: await getDescription(params.mal_id.toString())
  };
};
