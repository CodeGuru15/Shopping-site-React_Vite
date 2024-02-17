import { useEffect, useState } from "react";
import axios from "axios";

// const AllProducts = () => {
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then(console.log);
// };

const ProductCard = ({ img, title, discount, category }) => {
  return (
    <>
      <div className=" cursor-pointer hover:scale-105 duration-500 border rounded-md flex flex-col w-[150px] sm:w-[200px] bg-white overflow-hidden">
        <div className="p-1 h-[150px] sm:h-[200px] overflow-hidden">
          <img className=" h-full w-full" src={img} alt={category} />
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <div className="p-1 font-bold text-xl bg-black text-white truncate">
            {title}
          </div>
          <div className="p-1 font-semibold">
            Discount: <span className=" text-red-600">{discount}%</span>
          </div>
        </div>
      </div>
    </>
  );
};

const AllProducts = () => {
  const [productData, setProductData] = useState([]);
  const url = "https://dummyjson.com/products";

  const fetchData = () => {
    return axios.get(url).then((res) => setProductData(res.data.products));
  };

  useEffect(() => fetchData, []);

  return (
    <>
      <div className=" p-2 bg-yellow-300 gap-1 sm:gap-3 justify-evenly flex flex-wrap">
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
