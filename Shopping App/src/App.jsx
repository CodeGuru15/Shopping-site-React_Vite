import ProductContextProvider from "./Context/ProductContextProvider";
import "./index.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <ProductContextProvider>
      <Home />
    </ProductContextProvider>
  );
};

export default App;
