import CartContextProvider from "./Context/CartContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";
import "./index.css";
import CartList from "./pages/CartList";
import Home from "./pages/Home";

const App = () => {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Home />
        <CartList />
      </ProductContextProvider>
    </CartContextProvider>
  );
};

export default App;
