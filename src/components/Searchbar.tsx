import React from "react";
import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";

const { Search } = Input;
interface SearchbarProps {
  setSearchedString: React.Dispatch<React.SetStateAction<string>>;
  resetFn: () => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  setSearchedString,
  resetFn,
}) => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    setSearchedString(value);
  return (
    <>
      <Search
        placeholder="Search..."
        allowClear
        onSearch={onSearch}
        onChange={(e) => {
          if (e.target.value === "") {
            resetFn();
          }
        }}
        style={{ width: 300, margin: "20px" }}
      />
    </>
  );
};

export default Searchbar;
