import ProductContext from "./ProductContext";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiUrl, setApiUrl] = useState(
    "https://dummyjson.com/products/?limit=0"
  );

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
    (() => fetchData(apiUrl))();
  }, [apiUrl]);

  return (
    <ProductContext.Provider value={{ productData, error, loading, setApiUrl }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
