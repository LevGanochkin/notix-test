import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number = 300): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timestamp = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timestamp);
    };
  }, [value]);

  return debouncedValue;
};
