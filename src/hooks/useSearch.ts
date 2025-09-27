import { useEffect, useState } from 'react';
import type { SearchResultItem } from '../types';
import { searchProducts } from '../api';

interface SearchHookResult {
  result: SearchResultItem[];
  isLoading: boolean;
  error?: Error;
}

export const useSearch = (debouncedValue: string): SearchHookResult => {
  const [result, setResult] = useState<SearchResultItem[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (debouncedValue) {
      setIsloading(true);
      searchProducts(debouncedValue)
        .then(setResult)
        .catch(setError)
        .finally(() => setIsloading(false));
    } else {
      setResult([]);
    }
  }, [debouncedValue]);

  return { result, isLoading, error };
};
