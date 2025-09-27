import type { ChangeEvent, FC } from 'react';

interface SearchBarProps {
  value: string;
  onSearch: (arg: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ value, onSearch }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
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
