import { useEffect, useState } from "react";
import { getProductos } from "../../database";
import ItemList from "../ItemList";
import "./styles.css";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const results = await getProductos();
        setProductos(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="item-list-container">
     

<div class="spinner"></div>


      </div>
    );
  } else if (isError) {
    return <p>Error</p>;
  } else {
    return (
      <div className="item-list-container">
        <ItemList productos={productos} />
      </div>
    );
  }
}

export default ItemListContainer;