import { useContext, useEffect, useState } from "react";
import { getProductos } from "../../database";
import ItemList from "../ItemList";
import {getFirestore} from "../../firebase";
import "./styles.css";
import { CartContex } from "../../contexts/CartContext";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { clear } = useContext(CartContex);
  
  
  useEffect(() => {
    const db = getFirestore();
    const collection = db.collection("productos");

    const getData = async () => {
      const results = await collection.get();
       setIsLoading(true);
       try {
       setProductos(results.docs.map((doc) => ({ ...doc.data(), id: doc.id })));}
       catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
        clear()
      }
    };
    getData();

    /*     const fetchData = async () => {
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
    fetchData();  */
  }, []);

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