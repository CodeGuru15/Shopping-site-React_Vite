import ProductContext from "./ProductContext";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(url);
      setProductData(response.data.products);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    (() => fetchData("https://dummyjson.com/products/?limit=10"))();
  }, []);

  return (
    <ProductContext.Provider value={{ productData, error, loading, fetchData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
