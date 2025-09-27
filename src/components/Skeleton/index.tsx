import type { FC } from 'react';
import styles from './Skeleton.module.css';

const Skeleton: FC = () => {
  return (
    <div className={styles.skeleton}>
      <span className={styles.line}></span>
      <span className={styles.lineShort}></span>
    </div>
  );
};

export default Skeleton;
