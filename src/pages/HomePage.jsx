import { Link } from "react-router-dom";
import "./styles.css";
//import { getFirestore } from "../firebase";




const HomePage = () => {

 /*  const db= getFirestore();
  const collection = db.collection("productos");
  const addProducts = () =>{

    productos.forEach((productos)=>{
      collection.add(productos)
                .then((res)=>console.log("producto agregad", res.id))
                .catch((err)=>console.log("error", err))
    })
  }
 */


  return (
    <>
      <div className="underConstruction">
        <div className="underContainer">
        <h1 className="secondFont">Bienvenidos a nuestra Tienda!</h1>
        <h2 className="secondFont">SITIO EN CONSTRUCCION </h2> 
        <Link to="productos" className="secondFont productos"> IR A TIENDA</Link>
        </div>
       </div>

    </>
  );
};

export default HomePage;
