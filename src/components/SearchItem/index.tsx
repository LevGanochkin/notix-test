import type { FC } from 'react';
import type { SearchResultItem } from '../../types';
import styles from './SearchItem.module.css';

export const SearchItem: FC<SearchResultItem> = ({ id, name, cuisine }) => {
  return (
    <li className={styles.item} key={id} tabIndex={0}>
      <div className={styles.left}>
        <span className={styles.marker}></span>
        <p className={styles.name}>{name}</p>
      </div>
      <p className={styles.cuisine}>{cuisine}</p>
    </li>
  );
};
