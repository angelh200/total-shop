import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cartStyle = {
    color: 'white'
};

const btnCart = {
    background: 'transparent',
    border: 'none',
    "font-size": '20px'
};

const CartWidget = () => {
    return (
        <button className="mx-3" style={btnCart}>
            <FontAwesomeIcon icon={faCartShopping} style={cartStyle}/>
        </button>
    );
};

export default CartWidget;