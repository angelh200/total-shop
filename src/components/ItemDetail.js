import ItemCount from "./ItemCount";
import React from "react";

const ItemDetail = ({ item }) => {
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
                    <ItemCount stock={10} initial={0}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;