import { NavLink } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";

import "./styles.css";


const Productos = () => {
  return (
    <>
      <div className="category-container">
        <h2>CATEGORIAS</h2>
        <div className="category-links">
          <NavLink end  to="/audiotech/productos">todas</NavLink>
          <NavLink to="/audiotech/productos/categorias/recording">grabacion</NavLink>
          <NavLink to="/audiotech/productos/categorias/synthesizer">sintetizadores</NavLink>
        </div>
      </div>
      <ItemListContainer />
    </>
  );
};



export default Productos;





