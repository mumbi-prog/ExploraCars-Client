
import React from 'react'

export default function Search({searchQuery, setSearchQuery}) {
  return (
   <div className="search my-2">
    <input
      type="text"
      placeholder="Search by make"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input"
    />
  </div>
  )
}
