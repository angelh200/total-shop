import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import './App.css';
import Cart from "./components/Cart";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route exact path='/' element={<ItemListContainer/>} />
          <Route exact path='/category/:id' element={<ItemListContainer/>} />
          <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
          <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
