import { RiSearchLine } from "@remixicon/react";
import React from "react";

const Search = () => {
  return (
    <div>
      <input type="text" placeholder="Search for anything" />
      <button className="">
        <RiSearchLine />
      </button>
    </div>
  );
};

export default Search;
