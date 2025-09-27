import { useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResult } from './components/SearchResult';
import { searchQuotes } from './api';
import type { SearchResultItem } from './types';

function App() {
  const [results, setResults] = useState<SearchResultItem[]>();
  const handleSearch = (searchQuery: string) => {};

  useEffect(() => {
    searchQuotes('a').then((res) => setResults(res));
  }, []);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {results && <SearchResult data={results} />}
    </>
  );
}

export default App;
