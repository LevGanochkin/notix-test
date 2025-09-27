import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResult } from './components/SearchResult';
import { useDebounce } from './hooks/useDebounce';
import { useSearch } from './hooks/useSearch';

function App() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);
  const { result, isLoading, error } = useSearch(debouncedValue);

  const handleSearch = (searchQuery: string) => {
    setValue(searchQuery);
  };

  return (
    <>
      <SearchBar value={value} onSearch={handleSearch} />
      {error && <p>{error.message}</p>}
      {isLoading ? <p>Loading, please wait...</p> : <SearchResult data={result} />}
    </>
  );
}

export default App;
