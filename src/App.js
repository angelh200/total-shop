import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";



function App() {
  return (
    <div className="App">
        <header>
            <NavBar />
        </header>
        <ItemListContainer greeting="Bienvenido, esta es tu lista de productos:"/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
