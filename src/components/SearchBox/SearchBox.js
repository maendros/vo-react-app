import React from "react";
import SelectSearch from "react-select-search";
import "./SearchBox.css";
import { useHistory } from "react-router-dom";
const SearchBox = () => {
  let history = useHistory();
  const options = [
    { name: "HomePage", value: "home" },
    { name: "All", value: "all" },
    { name: "Section 1", value: "section1" },
    { name: "Section 2", value: "section2" },
    { name: "Page 2", value: "page2" }
  ];
  const handleValue = event => {
    if (event.index === 0) {
    }
    switch (event.index) {
      case 0:
      case 1:
      case 2:
        history.push("/section1");
        break;
      case 3:
        history.push("/section2");
        break;
      case 4:
        history.push("/page2");
        break;

      default:
        break;
    }
  };
  return (
    <div className="SearchBox">
      <SelectSearch
        options={options}
        value=""
        name="pages"
        placeholder=""
        search={true}
        onChange={handleValue}
      />
    </div>
  );
};

export default SearchBox;
