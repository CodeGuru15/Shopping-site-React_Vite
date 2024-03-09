import FilterMenu from "./FilterMenu";

const SideMenu = () => {
  return (
    <div className="animate-slide_left z-50 bg-blue-500 fixed left-0 top-[64px] w-[200px] h-[90vh] text-white flex flex-col py-5 font-semibold">
      <FilterMenu item="FILTER BY" />
    </div>
  );
};

export default SideMenu;
