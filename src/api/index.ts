import type { SearchResultItem, SearchResultPayload } from '../types';

type FetchWrapperType = <T>(url: string, options?: RequestInit) => Promise<T>;

export const fetchWrapper: FetchWrapperType = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
  return response.json();
};

export const searchQuotes = async (query: string): Promise<SearchResultItem[]> => {
  try {
    const result = await fetchWrapper<SearchResultPayload>(
      `https://dummyjson.com/quotes/search?q=${encodeURIComponent(query)}`,
    );
    return result.quotes;
  } catch (e) {
    throw new Error('Failed to load quotes');
  }
};
