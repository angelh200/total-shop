import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

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
        <Link to='/cart' className="mx-3" style={btnCart}>
            <FontAwesomeIcon icon={faCartShopping} style={cartStyle}/>
        </Link>
    );
};

export default CartWidget;