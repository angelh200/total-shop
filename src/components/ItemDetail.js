import ItemCount from "./ItemCount";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const ItemDetail = ({ item }) => {
    const [isReady, setIsReady] = useState(false);

    function onAdd(quantity) {
        // Se recibe el evento que emite ItemCount
        console.log('Se compro ', item.title, ' Cantidad: ', quantity);
        setIsReady(true);
    }

    return (
        <div className="row justify-content-start my-5">
            <div className="col-6">
                <img src={item.pictureUrl} className="img-fluid"/>
            </div>
            <div className="col-6 text-start">
                <p className="small"><a href="#" className="text-muted">{item.categoryName}</a></p>
                <h2 className="mb-3">{item.title}</h2>
                <p className="mb-1 fw-bold text-start">Descripción: </p>
                <ul className="list-group">
                    {item.description.split(',').map(el => <p className="list-group-item list-group-item-dark text-capitalize">{el.trim()}</p>)}
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