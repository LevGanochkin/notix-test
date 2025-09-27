interface SearchResultItem {
  id: number;
  quote: string;
  author: string;
}

/** This interface need only for dummyJSON usage.
 * For another source (real API or self-made Mock) its probably redundand*/
interface SearchResultPayload {
  quotes: SearchResultItem[];
  total: number;
  skip: number;
  limit: number;
}

export type { SearchResultPayload, SearchResultItem };
