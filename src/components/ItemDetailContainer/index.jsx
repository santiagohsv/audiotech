import { useEffect, useState } from "react";
import {  getItem } from "../../database";

import ItemDetail from "../ItemDetail";


function ItemDetailContainer() {

  const [item, setItem] = useState([]);

 useEffect(() => {
    getItem()
      .then((result) => setItem(result))
      .catch((error) => console.error(error));
  }, []);
 



  return (
    <>
    {console.log(item)};
    <ItemDetail item = {item}/>
    </>
  );
}

export default ItemDetailContainer