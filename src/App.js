import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage"
import Productos from "./pages/Productos";
import ProductDetail from "./pages/ProductDetail"
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/audiotech">
            <Route index element={<HomePage />} />
            <Route exact path="/audiotech/productos">
              <Route index element={<Productos />} />
              <Route path="/audiotech/productos/:idProducto" element={<ProductDetail />} />
              <Route path="/audiotech/productoscategorias/:idCategory" element={<Productos />} />
            </Route>
            <Route path="/audiotech/cart" element={<CartPage />} />
            <Route path="/audiotech/checkout/:orderId" element={<CheckoutPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;














