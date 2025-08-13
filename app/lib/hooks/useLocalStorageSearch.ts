import { useEffect, useState } from 'react';

export const useLocalStorage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('searchTerm');
    if (stored) {
      setSearchTerm(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm.trim());
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
  };
};
