import { useContext, useState } from "react";
import ProductContext from "../Context/ProductContext";
import SingleProduct from "./SingleProduct";
import CartContext from "../Context/CartContext";
import SearchContext from "../Context/SearchContext";

const AllProducts = () => {
  const { productData, error, loading } = useContext(ProductContext);
  const { cartItem, setCartItem } = useContext(CartContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage] = useState(10); // Adjust as required

  const totalPages = Math.ceil(productData.length / itemsPerPage); // Calculation of total

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = productData.slice(startIndex, endIndex);

  const searchKeys = ["title", "brand"]; //  keywords for searching

  const pageStyle =
    "text-2xl text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white size-10";
  const activePageStyle =
    "text-2xl text-white border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white size-10 bg-blue-500";

  const PageBtn = ({ num }) => {
    return (
      <button
        onClick={() => {
          setCurrentPage(num);
        }}
        className={num === currentPage ? activePageStyle : pageStyle}
      >
        {num}
      </button>
    );
  };

  return (
    <>
      <div className="flex flex-wrap justify-around p-5 sm:gap-3 min-h-[90vh]">
        {error && (
          <h1 className="flex flex-col gap-2 text-3xl font-semibold text-red-500">
            <span>Something Went Wrong.</span>
            <span className="text-center ">Please Try Again.</span>
          </h1>
        )}
        {loading && (
          <h1 className="text-3xl font-semibold text-red-500">Loading...</h1>
        )}
        {currentPageData
          .filter((product) =>
            searchKeys.some((key) =>
              product[key].toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center py-2 duration-500 rounded-md shadow-lg max-h-[350px] hover:scale-105"
            >
              <SingleProduct
                title={item.title}
                discount={Math.floor(item.discountPercentage)}
                category={item.category}
                img={item.thumbnail}
                price={item.price}
                brand={item.brand}
                rating={item.rating}
              />
              <button
                onClick={() => {
                  setCartItem((cartItem) => [...cartItem, item]);
                  // alert("added to cart successfully!");
                }}
                className="p-1 w-[70%] text-white bg-blue-500 border rounded-sm hover:text-black"
              >
                Add
              </button>
            </div>
          ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2 p-5">
        {[...Array(totalPages)].map((_, i) => {
          return <PageBtn key={i} num={i + 1} />;
        })}
      </div>
    </>
  );
};

export default AllProducts;
