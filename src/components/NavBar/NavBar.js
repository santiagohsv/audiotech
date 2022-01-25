
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";


const NavBar = () => {
  return (
    <nav className="navBar">
      <button>Inicio</button>
      <button>Contacto</button>
      <button>Tienda</button>
      <CardWidget/>
    </nav>
  );
};

export default NavBar;
