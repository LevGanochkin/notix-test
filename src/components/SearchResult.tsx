import type { FC } from 'react';
import { SearchItem } from './SearchItem';
import type { SearchResultItem } from '../types';

interface SearchResultProps {
  data: SearchResultItem[];
}

export const SearchResult: FC<SearchResultProps> = ({ data }) => {
  if (data.length === 0) {
    return <p>No recipes</p>;
  }

  return (
    <ul>
      {data.map((elem) => (
        <SearchItem key={elem.id} {...elem} />
      ))}
    </ul>
  );
};
