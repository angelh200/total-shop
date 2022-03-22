import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from "./components/ItemListContainer";



function App() {
  return (
    <div className="App">
        <header>
            <NavBar />
        </header>
        <ItemListContainer greeting="Bienvenido, esta es tu lista de productos:"/>
    </div>
  );
}

export default App;
