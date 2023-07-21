import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../features/FilterSlice";

const Search = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearch(event.target.value));
    setTerm(event.target.value);
  };
  return (
    <form className="w-40 md:w-60 h-10 border border-red-400 rounded-full overflow-hidden">
      <input
        onChange={(event) => handleChange(event)}
        type="text"
        value={term}
        className="w-full h-full outline-none focus:outline-none px-3 text-sm placeholder:text-sm"
        placeholder="Search..."
      />
    </form>
  );
};

export default Search;
