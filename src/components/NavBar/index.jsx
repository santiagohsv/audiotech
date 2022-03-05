import { Link } from "react-router-dom";
import CardWidget from "../CardWidget";
import "./styles.css";


const NavBar = () => {
    return (
      <nav>
        <div className="navBar">
          <h1 className="brand">
          <Link to="/audiotech">audio tech</Link></h1>
          <ul>
            <li>
              <Link to="/audiotech">INICIO</Link>
            </li>
            <li>
            <Link to="/audiotech/productos">TIENDA</Link>
            </li>
          </ul>
        </div>
        <CardWidget />
      </nav>
    );

};

export default NavBar;