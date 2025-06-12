"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Search = () => {
  const [query, setQuery] = useState("");
  const route = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    route.push(`/?q=${encodeURIComponent(query.trim())}`);
  };
  const clearQuery = () =>{
    setQuery("");
    route.push("/");
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="relative" >
        <input
          type="text"
          placeholder="Search Startups"
          value={query}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="search-bar w-100 md:w-200 h-20 "
        />
         {  query && <button
          onClick={clearQuery}
          className="w-15 h-15 absolute right-23 top-1/2 -translate-y-1/2 cursor-pointer bg-black flex items-center justify-center rounded-full"
        >
          <MdClose color="white" size={24} />
        </button>
}
        <button
          type="submit"
          className="w-15 h-15 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer bg-black flex items-center justify-center rounded-full"
        >
          <FaSearch color="white" size={24} />
        </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
