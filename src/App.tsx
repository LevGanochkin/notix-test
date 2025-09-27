import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResult } from './components/SearchResult';
import { useDebounce } from './hooks/useDebounce';
import { useSearch } from './hooks/useSearch';
import { urlParams } from './utils/urlParams';
import ErrorMessage from './components/ErrorMessage';
import Skeleton from './components/Skeleton';

function App() {
  const [value, setValue] = useState(urlParams.get('search'));
  const debouncedValue = useDebounce(value);
  const { result, isLoading, error } = useSearch(debouncedValue);

  const handleSearch = (searchQuery: string) => {
    setValue(searchQuery);
  };

  return (
    <>
      <SearchBar value={value} onSearch={handleSearch} />
      {!result && error && <ErrorMessage error={error} />}
      {isLoading ? <Skeleton /> : <SearchResult data={result} />}
    </>
  );
}

export default App;
