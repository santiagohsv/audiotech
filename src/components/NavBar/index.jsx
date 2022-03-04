import { Link } from "react-router-dom";
import CardWidget from "../CardWidget";
import "./styles.css";


const NavBar = () => {
    return (
      <nav>
        <div className="navBar">
          <h1 className="brand">
          <Link to="/">audio tech</Link></h1>
          <ul>
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
            <Link to="productos">TIENDA</Link>
            </li>
          </ul>
        </div>
        <CardWidget />
      </nav>
    );

};

export default NavBar;