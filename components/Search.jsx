import React from "react";

export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="search my-2">
      <input
        type="search"
        placeholder="Search by make"
        className="p-2 border bg-gray-50 w-3/5 outline-none rounded-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
