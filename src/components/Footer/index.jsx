import { Link } from "react-router-dom";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
         <Link to="contacto">CONTACTO</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

