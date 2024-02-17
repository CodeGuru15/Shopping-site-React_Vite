const Menu = ({ item }) => {
  return (
    <div className="py-2 hover:bg-blue-400 flex w-full justify-center items-center cursor-pointer">
      Menu {item}
    </div>

    // <Link
    //   className="py-2 hover:bg-blue-400 flex w-full justify-center items-center"
    //   to={url}
    // >
    //   Menu {item}
    // </Link>
  );
};

const SideMenu = () => {
  return (
    <div className=" animate-slide_left bg-blue-500 fixed left-0 top-[64px] w-[200px] h-[90vh] text-white flex flex-col items-center py-5 font-semibold">
      <Menu item="1" />
      <Menu item="2" />
      <Menu item="3" />
      <Menu item="4" />
    </div>
  );
};

export default SideMenu;
