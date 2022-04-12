import ItemCount from "./ItemCount";
import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {CartContext} from "../context/CartContext";

const ItemDetail = ({ item }) => {
    const [isReady, setIsReady] = useState(false);
    const {cart, addItem, removeItem, clear, isInCart} = useContext(CartContext);

    function onAdd(quantity) {
        // Se recibe el evento que emite ItemCount
        addItem(item, quantity);
        setIsReady(true);
    }

    return (
        <div className="row justify-content-start my-5">
            <div className="col-6">
                <img src={item.pictureUrl} className="img-fluid"/>
            </div>
            <div className="col-6 text-start">
                <p className="small">
                    <Link to={`/category/${item.categoryId}`} className="text-muted">{item.categoryName}</Link>
                </p>
                <h2 className="mb-3">{item.title}</h2>
                <p className="mb-1 fw-bold text-start">Descripción: </p>
                <ul className="list-group">
                    {item.description.split(',').map(el => <p key={el} className="list-group-item list-group-item-dark text-capitalize">{el.trim()}</p>)}
                </ul>
                <h5 className="fw-bold mb-4 text-danger text-start">${item.price.toFixed(2)}</h5>
                <div className="text-center">
                    {
                        isReady
                        ? <button className="btn btn-danger"><Link to="/cart">Terminar compra</Link></button>
                        : <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;