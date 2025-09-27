import type { FC } from 'react';
import type { SearchResultItem } from '../types';

export const SearchItem: FC<SearchResultItem> = ({ id, name }) => {
  return (
    <li key={id}>
      <p>{name}</p>
    </li>
  );
};
