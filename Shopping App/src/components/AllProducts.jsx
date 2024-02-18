import { useContext } from "react";

import ProductContext from "../Context/ProductContext";

const ProductCard = ({ img, title, discount, category }) => {
  return (
    <>
      <div className=" cursor-pointer hover:scale-105 duration-500 border rounded-md flex flex-col w-[150px] sm:w-[200px] bg-white overflow-hidden">
        <div className="p-1 h-[150px] sm:h-[200px] overflow-hidden">
          <img className="w-full h-full " src={img} alt={category} />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div className="p-1 text-xl font-bold text-white truncate bg-black">
            {title}
          </div>
          <div className="p-1 font-semibold">
            Discount: <span className="text-red-600 ">{discount}%</span>
          </div>
        </div>
      </div>
    </>
  );
};

const AllProducts = () => {
  const productData = useContext(ProductContext);

  return (
    <>
      <div className="flex flex-wrap gap-1 p-2 bg-yellow-300 sm:gap-3 justify-evenly">
        {productData.map((item) => (
          <ProductCard
            title={item.title}
            discount={item.discountPercentage}
            category={item.category}
            img={item.images[0]}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
