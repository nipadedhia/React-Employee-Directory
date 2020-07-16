import React from "react";

function SearchBar(props) {
  return (
    <form className="form-inline justify-content-center">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        label={props.label}
      />
    </form>
  );
}

export default SearchBar;
