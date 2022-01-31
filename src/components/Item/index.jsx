import { useNavigate } from "react-router";
import "./styles.css";

const Item = ({ producto }) => {
  const navigate = useNavigate();

  return (
    <div className="item-card">
      <img
        src={producto.img}
        alt={producto.descrition}
        className="item-card-img"
      />
      <p> {producto.name} </p>
      <p> Precio ${producto.precio} </p>
      <button onClick={() => navigate(`/productos/${producto.id}`)}>
        Ver detalle
      </button>
    </div>
  );
};

export default Item;
