import React from 'react'
import CardList from './CardList'

const Feed = () => {
  return (
      <div>
      {/* this would contain the search bar */}
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for a prompt"
          className="w-96 h-12 px-4 border-2 border-gray-300 rounded-md"
        />
        <button className="bg-zinc-900 text-white h-12 px-4 ml-2 rounded-md">
          Search
        </button>
      </div>
      
      <CardList/>
    </div>
  )
}

export default Feed