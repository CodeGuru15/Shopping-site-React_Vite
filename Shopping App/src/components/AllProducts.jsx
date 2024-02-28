import { useContext, useState } from "react";
import ProductContext from "../Context/ProductContext";
import SingleProduct from "./SingleProduct";
import CartContext from "../Context/CartContext";
import SearchContext from "../Context/SearchContext";

const AllProducts = () => {
  const { productData, error, loading, fetchData } = useContext(ProductContext);
  const { cartItem, setCartItem } = useContext(CartContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const searchKeys = ["title", "brand"]; //  keywords for searching

  const pageLimit = 10;
  const url = "https://dummyjson.com/products";

  const Page = ({ num }) => {
    return (
      <button
        className="p-1"
        onClick={() => {
          fetchData(`${url}/?limit=${pageLimit}&skip=${(num - 1) * pageLimit}`);
        }}
      >
        {num}
      </button>
    );
  };

  return (
    <>
      <div className="flex flex-wrap justify-around p-5 sm:gap-3">
        {error && (
          <h1 className="flex flex-col gap-2 text-3xl font-semibold text-red-500">
            <span>Something Went Wrong.</span>
            <span className="text-center ">Please Try Again.</span>
          </h1>
        )}
        {loading && (
          <h1 className="text-3xl font-semibold text-red-500">Loading...</h1>
        )}
        {productData.filter((product) =>
          searchKeys.some((key) =>
            product[key].toLowerCase().includes(searchTerm.toLowerCase())
          )
        ).length === 0 ? (
          <div className=" h-[80vh] text-red-600 text-2xl flex items-center font-bold">
            <h1>No Such Product Found</h1>
          </div>
        ) : (
          productData
            .filter((product) =>
              searchKeys.some((key) =>
                product[key].toLowerCase().includes(searchTerm.toLowerCase())
              )
            )
            .map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center py-2 rounded-md bg-black/5 "
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
            ))
        )}
      </div>
      <div className="flex justify-center gap-5">
        {[...Array(10)].map((x, i) => {
          return (
            <>
              <Page num={i + 1} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllProducts;
