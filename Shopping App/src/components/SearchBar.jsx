import { IoMdSearch } from "react-icons/io";
import { useContext } from "react";
import SearchContext from "../Context/SearchContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <div className="flex h-[3rem] items-center justify-center text-slate-800 sm:w-[50vw]">
      <div className="flex items-center w-full h-[80%] gap-2 px-2 bg-white rounded-sm">
        <IoMdSearch />
        <input
          className="w-[95%] focus:outline-none h-full"
          type="text"
          placeholder="Search for products,brand..."
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default SearchBar;
