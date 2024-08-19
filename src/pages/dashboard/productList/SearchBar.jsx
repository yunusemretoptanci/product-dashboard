import React from "react";
import { Search } from "react-bootstrap-icons";

const SearchBar = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div style={{width:"initial"}} className="input-group ">
      <span className="input-group-text border-0 bg-gray-light" id="basic-addon1">
        <Search />
      </span>
      <input
        type="text"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="form-control border-0 bg-gray-light fw-semibold"
        placeholder="Search a product"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;