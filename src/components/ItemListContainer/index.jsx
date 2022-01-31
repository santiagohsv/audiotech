import { useEffect, useState } from "react";
import { getProductos } from "../../database";
import ItemList from "../ItemList";
import "./styles.css";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((result) => setProductos(result))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="item-list-container">
        <ItemList productos={productos} />
      </div>
    </>
  );
}

export default ItemListContainer;
