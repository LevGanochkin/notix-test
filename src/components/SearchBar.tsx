import { useState } from 'react';
import type { ChangeEvent, FC } from 'react';

interface SearchBarProps {
  onSearch: (arg: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onSearch(newValue);
  };

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Enter your query..."
      value={value}
      onChange={handleChange}
    />
  );
};
