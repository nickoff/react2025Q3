import { useEffect, useState } from 'react';

export const useLocalStorage = () => {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm.trim());
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm
  };
};
