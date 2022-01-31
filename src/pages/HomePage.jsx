import { Link } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  return (
    <>
      <div className="underConstruction">
        <div className="underContainer">
        <h1 className="secondFont">Bienvenidos a nuestra Tienda!</h1>
        <h2 className="secondFont">SITIO EN CONSTRUCCION </h2> 
        <Link to="productos" className="secondFont productos"> IR A TIENDA</Link>
        </div>
       </div>
    </>
  );
};

export default HomePage;
     <Link to="productos">PRODUCTOS</Link>