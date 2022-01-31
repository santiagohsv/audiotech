import "./styles.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="main">
      <div className="item-title ">
        <h1>{item.name}</h1>
      </div>
      <div className="itemDetailContainer">
        <div className="imgContainer">
          <img src={item.img} alt="{item.description}" />
        </div>
        <div className="detailContainer">
          <p className="itemStock">Stock: {item.stock} </p>
          <p className="itemPrice">$ {item.precio}</p>
          <h2>Caracteristicas</h2>
          <p className="productDescription">{item.longDescription}</p>
          <button>Agregar </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
