import React from "react";
import { TextField } from "@material-ui/core";
import { clone, isEmpty } from "lodash";

const SearchBox = ({ term, onSearch }) => {
  const protect = (event) => {
    const value = clone(event.target.value);
    if (!isEmpty(value.trim())) {
      return onSearch(event);
    }
  };
  return (
    <TextField
      label="Search"
      value={term}
      data-test="Search"
      onChange={protect}
      margin="normal"
      variant="outlined"
    />
  );
};

export default SearchBox;
