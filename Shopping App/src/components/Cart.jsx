import { useContext, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import CartContext from "../Context/CartContext";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosAddCircleOutline,
} from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  let CartAmount = 0;
  cartItem.map((n) => (CartAmount = CartAmount + n.price)); // Calculate Total Cart Amount

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
        <div className="absolute shadow-lg z-50 max-h-[400px] overflow-y-scroll right-0 p-2 top-[52px] bg-white flex flex-col gap-1 text-sm text-black">
          {/* If cart is empty render this div */}
          {cartItem.length === 0 ? (
            <div className="p-5 text-[15px] text-center text-red-500">
              Cart is empty
            </div>
          ) : (
            <div>
              {[...new Set(cartItem)].map((item, index) => {
                return (
                  <div key={index} className="">
                    <div className="flex gap-2 p-1">
                      <div className="flex items-center gap-2 basis-2/4">
                        {/* <span>{index + 1}.</span> */}
                        <span className="font-semibold">{item.title}</span>
                      </div>

                      <div className="flex items-center gap-2 basis-1/4">
                        <button
                          className="text-xl px-[2px]"
                          onClick={
                            () => setCartItem((cartItem) => [...cartItem, item]) //add item to cart
                          }
                        >
                          <IoIosAddCircleOutline />
                        </button>
                        <span>
                          {cartItem.filter((i) => i.id === item.id).length}
                        </span>
                        <button
                          className="text-xl px-[2px]"
                          onClick={
                            () =>
                              setCartItem(() => [
                                ...cartItem.filter((i) => i.id != item.id),
                                ...cartItem
                                  .filter((i) => i.id === item.id)
                                  .slice(1),
                              ]) // remove item from cart
                          }
                        >
                          <MdOutlineDeleteOutline />
                        </button>
                      </div>

                      <div className="flex items-center basis-1/4">
                        Rs.{" "}
                        {item.price *
                          cartItem.filter((i) => i.id === item.id).length}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="py-2 pr-10 text-xl font-bold text-right">
                Subtotal = Rs. {CartAmount}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
