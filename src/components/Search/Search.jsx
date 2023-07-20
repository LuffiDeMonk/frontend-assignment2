import React from "react";

const Search = () => {
  return (
    <form className="w-40 md:w-60 h-10 border border-red-400 rounded-full overflow-hidden">
      <input
        type="text"
        className="w-full h-full outline-none focus:outline-none px-2"
        placeholder="Search..."
      />
    </form>
  );
};

export default Search;
