import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { getItem } from "../database";
import { getFirestore } from "../firebase";

const ProductDetail = () => {
  const { idProducto } = useParams();
  const [item, setItem] = useState({});


  useEffect(() => {

    const db = getFirestore();
    const collection = db.collection("productos");
    const selectedProduct=collection.doc(idProducto);
    selectedProduct.get().then((response)=>{
      if(!response.exists) console.log("El producto no existe");
      setItem({...response.data(),id: response.id});
    })

/*     getItem(id)
      .then((result) => setItem(result))
      .catch((error) => console.error("Ha ocurrido un error")); */
  }, [idProducto]);

  return <ItemDetailContainer item={item}/>
};

export default ProductDetail;
