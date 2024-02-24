import CartContextProvider from "./Context/CartContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";
import SearchContextProvider from "./Context/SearchContextProvider";
import "./index.css";
import CartList from "./pages/CartList";
import Home from "./pages/Home";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <SearchContextProvider>
          <Home />
          <CartList />
        </SearchContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
