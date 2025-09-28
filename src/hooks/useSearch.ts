import { useEffect, useState } from 'react';
import type { SearchResultItem } from '../types';
import { searchProducts } from '../api';
import { urlParams } from '../utils/urlParams';

interface SearchHookResult {
  result: SearchResultItem[] | null;
  isLoading: boolean;
  error: Error | null;
}

export const useSearch = (debouncedValue: string): SearchHookResult => {
  const [result, setResult] = useState<SearchResultItem[] | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    if (!debouncedValue) {
      setResult(null);
      setError(null);
      urlParams.set('search', '');
      return;
    }

    setIsloading(true);
    searchProducts(debouncedValue, { signal: controller.signal })
      .then((res) => {
        setResult(res);
        setError(null);
        urlParams.set('search', debouncedValue);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsloading(false);
        }
      });

    return () => controller.abort();
  }, [debouncedValue]);

  return { result, isLoading, error };
};
