import { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import SingleProduct from "./SingleProduct";
import CartContext from "../Context/CartContext";

const AllProducts = () => {
  const productData = useContext(ProductContext);
  const { cartItem, setCartItem } = useContext(CartContext);

  return (
    <>
      <div className="flex flex-wrap gap-1 p-2 sm:gap-3 justify-evenly">
        {productData.map((item) => (
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
              onClick={() => setCartItem((cartItem) => [...cartItem, item])}
              className="p-1 w-[70%] text-white bg-blue-500 border rounded-sm hover:text-black hover:bg-green-500"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
