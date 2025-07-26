import type { LoaderFunction } from 'react-router';
import { getDescription } from './getDescription';

export const loaderDescription: LoaderFunction = ({ params }) => {
  if (!params.mal_id) return null;

  return {
    description: getDescription(params.mal_id.toString())
  };
};
