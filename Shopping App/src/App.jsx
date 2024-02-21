import CartContextProvider from "./Context/CartContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";
import "./index.css";
import CartList from "./pages/CartList";
import Home from "./pages/Home";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Home />
        <CartList />
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
