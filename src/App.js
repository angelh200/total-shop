import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import './App.css';
import Cart from "./components/Cart";
import {CartProvider} from "./context/CartContext";
import Checkout from "./components/Checkout";

const LINKS = [
    {
        name: 'Inicio',
        url: ['/']
    },
    {
        name: 'Categorias',
        url: [
            {
                name: 'Tarjetas gráficas',
                url: ['/category/0zz']
            },
            {
                name: 'Teclados',
                url: ['/category/1']
            },
            {
                name: 'Mouse',
                url: ['/category/2']
            }
        ]
    },
    {
        name: 'Nosotros',
        url: ['/nosotros']
    },
    {
        name: 'Contacto',
        url: ['/contacto']
    }
];

function App() {
  return (
      <CartProvider>
        <BrowserRouter>
          <NavBar links={LINKS}/>
          <Routes>
              <Route exact path='/' element={<ItemListContainer/>} />
              <Route exact path='/category/:id' element={<ItemListContainer/>} />
              <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
              <Route exact path='/cart' element={<Cart/>}/>
              <Route exact path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
