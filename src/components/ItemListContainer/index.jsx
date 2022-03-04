import { useEffect, useState } from "react";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router";
import ItemList from "../ItemList";
import "./styles.css";


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const { idCategory } = useParams();


  useEffect(() => {
    const db = getFirestore();
    const products = idCategory ? db.collection('productos').where('categoria', '==', idCategory) : db.collection('productos');

    const getData = async () => {
      const results = await products.get();

      try {
        setProductos(results.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
      catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();


  }, [idCategory]);

  if (isLoading) {
    return (
      <div className="item-list-container">
      <div className="spinner"></div>
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