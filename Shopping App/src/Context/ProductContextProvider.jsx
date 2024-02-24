import ProductContext from "./ProductContext";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  const url = "https://dummyjson.com/products";

  const fetchData = async () => {
    return axios.get(url).then((res) => setProductData(res.data.products));
  };

  useEffect(() => fetchData, []);

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
