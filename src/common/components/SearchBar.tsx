import { useState } from "react";

const SearchBar = ({ placeholder, onSearch }: { placeholder: string; onSearch: (query: string) => void }) => {
    const [query, setQuery] = useState("");
  
    const handleSearch = () => {
      if (query) onSearch(query);
    };
  
    return (
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </div>
    );
};
  
export default SearchBar;
  