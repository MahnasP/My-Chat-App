import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function SearchInput() {
  return (
    <form className=" flex items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered input-accent w-full max-w-xs"
      />
          <button className="btn btn-circle bg-orange-400 hover:bg-orange-200">
          <BiSearchAlt2 className=" w-6 h-6 outline-none"/>
          </button>
    </form>
  );
}

export default SearchInput;
