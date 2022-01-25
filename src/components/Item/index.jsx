import "./styles.css";

const Item = ({producto}) => {

    return (    
        <div className="user-card">
        <p> {producto.name} </p>
        <p> Despripción:{producto.description} </p>
        <p> Precio: {producto.precio} </p>
        <button>Ver detalle</button>
    </div>
    );
};

export default Item;