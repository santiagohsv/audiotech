import { Link } from "react-router-dom";

import "./styles.css";

const Contacto = () => {
  return (
    <>
      <div className="underConstruction">
        <div className="underContainer">
          <h1 className="secondFont">sitio en construccion</h1>
          <h2 className="fistFont">Escribinos a <a href="mailto">contacto@audiotech.com</a></h2>
          <Link to="/Productos" className="secondFont productos">Ir a TIENDA</Link>
        </div>
      </div>
    </>
  );
};

export default Contacto;
