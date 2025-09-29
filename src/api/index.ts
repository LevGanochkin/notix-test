import type { SearchResultItem, SearchResultPayload } from '../types';

type FetchType = <T>(url: string, options?: RequestInit) => Promise<T>;

const fetchResponseToJSON: FetchType = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
  return response.json();
};

export const searchProducts = async (query: string, options?: RequestInit): Promise<SearchResultItem[]> => {
  try {
    const result = await fetchResponseToJSON<SearchResultPayload>(
      `https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`,
      options,
    );
    return result.recipes;
  } catch (e) {
    throw new Error('Failed to load quotes');
  }
};
