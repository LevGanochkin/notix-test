import type { FC } from 'react';
import type { SearchResultItem } from '../types';

export const SearchItem: FC<SearchResultItem> = ({ id, quote, author }) => {
  return (
    <li key={id}>
      <p>{quote}</p>
      <p>{author}</p>
    </li>
  );
};
