import { BsCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <div className="px-5 py-2 text-white bg-blue-600 ">
      <div className="flex h-[3rem] justify-between">
        <div className="flex items-center gap-5">
          <div className="text-2xl cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <div>LOGO</div>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-xl cursor-pointer">
            <BsCartFill />
          </div>
          <div className="cursor-pointer ">Login</div>
        </div>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 bg-white rounded-sm text-slate-800">
        <FaSearch />
        <input className="w-[90%] caret-transparents" type="text" />
      </div>
    </div>
  );
};

export default Nav;
