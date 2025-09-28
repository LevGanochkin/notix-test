import type { FC } from 'react';
import type { SearchResultItem } from '../../types';
import { SearchItem } from '../SearchItem';
import styles from './SearchResult.module.css';

interface SearchResultProps {
  data: SearchResultItem[];
}

export const SearchResult: FC<SearchResultProps> = ({ data }) => {
  if (data && data.length === 0) {
    return <p className={styles.empty}>No recipes found :(</p>;
  }

  return (
    <ul className={styles.list}>
      {data.map((elem) => (
        <SearchItem key={elem.id} {...elem} />
      ))}
    </ul>
  );
};
