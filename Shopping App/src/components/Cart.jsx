import { useContext, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import CartContext from "../Context/CartContext";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const [cartAmount, serCartAmount] = useState(0);

  return (
    <>
      <div className="relative flex gap-1 p-1 text-xl border items-centers">
        <div className="text-2xl">
          <BsCartFill />
        </div>
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
        <div className="absolute z-50 right-0 p-2 top-[52px] flex flex-col gap-1 w-[350px] text-sm text-black bg-white">
          {cartItem.length === 0 ? (
            <div className=" text-[15px] text-center text-red-500">
              Cart is empty
            </div>
          ) : (
            <div>
              {[...new Set(cartItem)].map((item, index) => {
                return (
                  <div key={index}>
                    <div className="flex gap-2 p-1">
                      <div className="flex gap-2 basis-2/4">
                        <span>{index + 1}.</span>
                        <span className="">{item.title}</span>
                      </div>

                      <div className="flex gap-2 basis-1/4">
                        <button>+</button>
                        <span>
                          Qty. {cartItem.filter((i) => i.id === item.id).length}
                        </span>
                        <button>-</button>
                      </div>

                      <div className="basis-1/4">
                        Rs.{" "}
                        {item.price *
                          cartItem.filter((i) => i.id === item.id).length}
                      </div>
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
