import { useContext, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import CartContext from "../Context/CartContext";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div className="relative flex gap-1 p-1 text-xl border cursor-pointer items-centers">
        <button className="text-2xl">
          <BsCartFill />
        </button>
        <div className="">{cartItem.length}</div>
        {showCart ? (
          <button onClick={() => setShowCart(false)}>
            <IoIosArrowUp />
          </button>
        ) : (
          <button onClick={() => setShowCart(true)}>
            <IoIosArrowDown />
          </button>
        )}
      </div>

      {showCart && (
        <div className="absolute z-50 right-0 p-2 top-[52px] flex flex-col gap-1 w-[250px] text-sm text-black bg-white">
          {cartItem.length === 0 ? (
            <div className=" text-[15px] text-center text-red-500">
              Cart is empty
            </div>
          ) : (
            <div>
              {cartItem.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="flex gap-1">
                      <span>{index + 1}.</span>
                      <span>{item.title}</span>
                      <span>Qty.</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
