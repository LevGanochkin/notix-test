import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResult } from './components/SearchResult';
import { useDebounce } from './hooks/useDebounce';
import { useSearch } from './hooks/useSearch';
import { urlParams } from './utils/urlParams';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import styles from './App.module.css';

function App() {
  const [value, setValue] = useState(urlParams.get('search'));
  const debouncedValue = useDebounce(value);
  const { result, isLoading, error } = useSearch(debouncedValue);

  const handleSearch = (searchQuery: string) => {
    setValue(searchQuery);
  };

  return (
    <section className={styles.searchSection}>
      <SearchBar value={value} onSearch={handleSearch} />
      {isLoading && <Loader />}
      {!isLoading && result && <SearchResult data={result} />}
      {!isLoading && !result && error && <ErrorMessage error={error} />}
    </section>
  );
}

export default App;
