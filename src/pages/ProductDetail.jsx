import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { getFirestore } from "../firebase";

const ProductDetail = () => {
  const { idProducto } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const collection = db.collection("productos");
    const selectedProduct = collection.doc(idProducto);
    selectedProduct
      .get()
      .then((response) => {
        if (!response.exists) console.log("El producto no existe");
        setItem({ ...response.data(), id: response.id });
      })
      .catch((error) => setIsError(true))
      .finally(setIsLoading(false));

      
  }, [idProducto]);

  if (isLoading) {
    return (
      <div className="item-list-container">
        <div className="spinner"></div>
      </div>
    );
  } else if (isError) {
    return <p>Error</p>;
  } else {
    return <ItemDetailContainer item={item} />;
  }
};

export default ProductDetail;
