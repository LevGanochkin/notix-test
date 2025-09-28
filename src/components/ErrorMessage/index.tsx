import type { FC } from 'react';
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  error: Error;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return (
    <p role="alert" className={styles.error}>
      {error.message}
    </p>
  );
};
