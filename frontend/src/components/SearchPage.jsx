import { useState } from "react";
import { Search, Filter } from "lucide-react";


export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Mock search function
    setResults([`Result for "${query}"`, "Another result", "More results"]);
  };

  return (
    <div className=" ">
      <div className="w-full max-w-lg bg-white p-1 rounded-2xl shadow-lg flex items-center gap-2">
        <Search className=" w-5 h-5 text-gray-500" />
        <input
          className="flex-1"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <Filter className="text-gray-500 cursor-pointer" />
      </div>
      {/* <div className="mt-6 w-full max-w-lg bg-white p-4 rounded-2xl shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Results:</h2>
        <ul>
          {results.length > 0 ? (
            results.map((result, index) => <li key={index}>{result}</li>)) : (
            <p className="text-gray-500">No results found</p>
          )}
        </ul>
      </div> */}
    </div>
  );
}
