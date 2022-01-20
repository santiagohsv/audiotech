import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="item-list-container">
      <ItemListContainer productTittle='Producto 1' productPrice='1000' productStock={2} /> 
      <ItemListContainer productTittle='Producto 2' productPrice='2400' productStock={0} /> 
      <ItemListContainer productTittle='Producto 3' productPrice='790' productStock={3}/> 
      </div>

    </div>
  )
}

export default App;
