import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contacto from "./pages/Contacto";
import HomePage from "./pages/HomePage"
import Productos from "./pages/Productos";
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="productos">
            <Route index element={<Productos />} />
            <Route path=":idProducto" element={<ProductDetail />} />
          </Route>
          <Route path="cart"  element={<Cart/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;














