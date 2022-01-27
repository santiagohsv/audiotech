import "./styles.css";

const ItemDetail = ({ item }) => {
  return (
    <>
      <h1>{item.name}</h1>
      <div className="itemDetailContainer">
        <div className="imgContainer">
          <img src={item.img} alt="{item.description}" />
        </div>

        <div className="detailContainer">
          <p className="itemStock">Stock: {item.stock} </p>
          <p className="itemPrice">$ {item.precio}</p>
          <h2>Caracteristicas</h2>
          <li>{item.specs[0]}</li>
          <li>{item.specs[1]}</li>
          <li>{item.specs[2]}</li>
          <li>{item.specs[3]}</li>

          <div className="productDescription">{item.longDescription}</div>
          <button>Agregar </button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
