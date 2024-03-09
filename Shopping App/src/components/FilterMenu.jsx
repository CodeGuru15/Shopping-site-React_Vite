import { useContext } from "react";
import ProductContext from "../Context/ProductContext";

const FilterMenu = ({ item }) => {
  const { setApiUrl } = useContext(ProductContext);

  const itemCategories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  return (
    <div className="pl-5">
      <label className="flex items-center w-full py-2">{item}</label>

      <select
        onChange={(e) => {
          setApiUrl(
            `https://dummyjson.com/products/category/${e.target.value}`
          );
        }}
        className="p-1 text-sm bg-blue-400 "
      >
        {itemCategories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterMenu;
