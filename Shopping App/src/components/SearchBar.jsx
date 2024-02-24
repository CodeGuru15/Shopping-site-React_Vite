import { IoMdSearch } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../Context/ProductContext";
import SearchContext from "../Context/SearchContext";

const SearchBar = () => {
  const productData = useContext(ProductContext);
  const { searchItem, setSearchItem } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    setSearchItem(() =>
      productData.filter((user) =>
        user.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="flex h-[3rem] items-center justify-center text-slate-800 sm:w-[50vw]">
      <div className="flex items-center w-full h-[80%] gap-2 px-2 bg-white rounded-sm">
        <IoMdSearch />
        <input
          className="w-[95%] focus:outline-none h-full"
          type="text"
          placeholder="Search for products"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default SearchBar;
