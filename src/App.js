import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import './App.css';
import Cart from "./components/Cart";

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
                url: ['/category/0']
            },
            {
                name: 'Teclados',
                url: ['/category/1']
            },
            {
                name: 'Taretas gráficas',
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
    <BrowserRouter>
      <NavBar links={LINKS}/>
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
