import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { getItem } from "../database";

const ProductDetail = () => {
  const { idProducto } = useParams();
  const [item, setItem] = useState({});
  const id = Number(idProducto);

  useEffect(() => {
    getItem(id)
      .then((result) => setItem(result))
      .catch((error) => console.error("Ha ocurrido un error"));
  }, []);

  return <ItemDetailContainer item={item}/>
};

export default ProductDetail;
