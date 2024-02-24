import { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import SingleProduct from "./SingleProduct";
import CartContext from "../Context/CartContext";
import SearchContext from "../Context/SearchContext";

const AllProducts = () => {
  const productData = useContext(ProductContext);
  const { cartItem, setCartItem } = useContext(CartContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const searchKeys = ["title", "brand"]; //  keywords for searching

  return (
    <>
      <div className="flex flex-wrap justify-around gap-2 p-2 sm:gap-3">
        {productData
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
          ))}
      </div>
    </>
  );
};

export default AllProducts;
