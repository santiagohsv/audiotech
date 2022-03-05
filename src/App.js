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
          <Route path="/curso-react">
            <Route index element={<HomePage />} />
            <Route exact path="productos">
              <Route index element={<Productos />} />
              <Route path=":idProducto" element={<ProductDetail />} />
              <Route path="categorias/:idCategory" element={<Productos />} />
            </Route>
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout/:orderId" element={<CheckoutPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;














