import { useRouter, useSearchParams } from 'next/navigation';

export const useQueryUpdater = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    replace(`/?${params.toString()}`);
  };

  return { updateParam };
};
