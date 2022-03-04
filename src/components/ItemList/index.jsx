import Item from "../Item";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((item) => {
        return <Item key={item.id} producto={item} />;
      })}
    </>
  );
};

export default ItemList;