import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {CartContext} from "../context/CartContext";

const cartStyle = {
    color: 'white'
};

const btnCart = {
    background: 'transparent',
    border: 'none',
    "font-size": '20px'
};

const CartWidget = () => {
    const {cart} = useContext(CartContext);

    return (
        <Link to='/cart' className="mx-4 position-relative" style={btnCart}>
            <FontAwesomeIcon icon={faCartShopping} style={cartStyle}/>
            {cart.length !== 0 &&
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{"font-size": "10px"}}>
                    {cart.length}
                    <span className="visually-hidden">Número de items</span>
                </span>
            }
        </Link>
    );
};

export default CartWidget;