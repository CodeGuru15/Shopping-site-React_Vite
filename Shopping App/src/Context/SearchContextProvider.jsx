import { useState } from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState([]);

  return (
    <SearchContext.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
