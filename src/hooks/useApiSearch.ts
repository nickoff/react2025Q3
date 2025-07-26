import { useState, useEffect } from 'react';
import type { ICard } from '../types/card';
import type { IPagination } from '../types/pagination';

export const useApiSearch = (searchTerm: string, page: string) => {
  const [data, setData] = useState<ICard[]>([]);
  const [pagination, setPagination] = useState<IPagination>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://api.jikan.moe/v4/anime';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_URL}?page=${page}&limit=10&q=${searchTerm}`, { method: 'GET' });

        if (!res.ok) throw new Error(`Status: ${res.status}`);

        const json = await res.json();
        setPagination(json.pagination);
        setData(json.data as ICard[]);
      } catch (err) {
        setError(err as Error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, searchTerm]);

  return { data, pagination, error, loading };
};
