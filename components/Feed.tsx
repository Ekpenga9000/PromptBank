import React from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";

const Feed = () => {
  return (
    <div>
      {/* this would contain the search bar */}
     <SearchBar />

      {/* This would contain the card list. */}
      <CardList />
    </div>
  );
};

export default Feed;
