import { useEffect, useState } from 'react';
import type { SearchResultItem } from '../types';
import { searchProducts } from '../api';
import { urlParams } from '../utils/urlParams';

interface SearchHookResult {
  // result: SearchResultItem[] | null;
  result: SearchResultItem[];
  isLoading: boolean;
  error?: Error;
}

export const useSearch = (debouncedValue: string): SearchHookResult => {
  // const [result, setResult] = useState<SearchResultItem[] | null>(null);
  const [result, setResult] = useState<SearchResultItem[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const controller = new AbortController();

    if (!debouncedValue) {
      // setResult(null);
      setResult([]);
      setError(undefined);
      urlParams.set('search', '');
      return;
    }

    setIsloading(true);
    searchProducts(debouncedValue, { signal: controller.signal })
      .then((res) => {
        setResult(res);
        setError(undefined);
        urlParams.set('search', debouncedValue);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      })
      .finally(() => {
        setIsloading(false);
      });

    return () => controller.abort();
  }, [debouncedValue]);

  return { result, isLoading, error };
};
