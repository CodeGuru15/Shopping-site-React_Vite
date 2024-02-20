import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import { Squash as Hamburger } from "hamburger-react";
import Cart from "./Cart";

const SearchBar = () => {
  return (
    <div className="flex h-[3rem] items-center justify-center text-slate-800 sm:w-[50vw]">
      <div className="flex items-center w-full h-[80%] gap-2 px-2 bg-white rounded-sm">
        <IoMdSearch />
        <input
          className="w-[95%] focus:outline-none h-full"
          type="text"
          placeholder="Search for products"
        />
      </div>
    </div>
  );
};

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => setWidth(window.innerWidth);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    handleWidth;
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 px-5 py-2 text-white bg-blue-600">
        <div className="flex h-[3rem] justify-between">
          <div className="flex items-center gap-5">
            <div className="text-2xl cursor-pointer">
              <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
            </div>
            <div className=" italic font-bold tracking-widest sm:text-2xl text-[20px] text-yellow-200">
              ShopKart
            </div>
          </div>
          <div>{width > 500 && <SearchBar />}</div>
          <div className="flex items-center gap-5 sm:px-2 sm:text-2xl">
            <Cart />
            <div className="cursor-pointer ">Login</div>
          </div>
        </div>
        {width < 500 && <SearchBar />}
      </div>
      {isOpen && <SideMenu />}
    </>
  );
};

export default Nav;
