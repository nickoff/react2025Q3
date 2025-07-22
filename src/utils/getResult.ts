import { API_KEY, API_URL } from './constants';

export const getResult = async (searchTerm: string) => {
  const fetchOptions: RequestInit = {
    headers: {
      'X-Api-Key': API_KEY
    },
    method: 'GET'
  };

  return await fetch(`${API_URL}?page=1&pageSize=20&q=name:${searchTerm}*`, fetchOptions);
};
