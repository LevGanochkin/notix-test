import type { SearchResultItem, SearchResultPayload } from '../types';

type FetchWrapperType = <T>(url: string, options?: RequestInit) => Promise<T>;

const fetchWrapper: FetchWrapperType = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
  return response.json();
};

export const searchProducts = async (query: string): Promise<SearchResultItem[]> => {
  try {
    const result = await fetchWrapper<SearchResultPayload>(
      `https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`,
    );
    return result.recipes;
  } catch (e) {
    throw new Error('Failed to load quotes');
  }
};
