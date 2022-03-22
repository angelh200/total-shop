import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {

    // Funcion provisional de callback
    function myCallback(counter) {
        console.log('Añadido al carrito ' + counter + ' items.');
    }

    return (
        <div className="container-fluid py-4">
            <h2>{props.greeting}</h2>
            <ItemCount stock={10} initial={0} onAdd={myCallback}/>
        </div>
    );
};

export default ItemListContainer;