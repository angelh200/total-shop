import React from "react";
import ItemCount from "./ItemCount";

function Item({ item }) {
    // Funcion provisional de callback
    function myCallback(counter) {
        console.log('Añadido al carrito ' + counter + ' items.');
    }

    return (
        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div className="card">
                <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Ofertas</p>
                </div>
                <img
                    src={item.pictureUrl}
                    className="card-img-top"
                    alt="laptop"
                />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <p className="small"><a href="#!" className="text-muted">Tarjetas gráficas</a></p>
                        <p className="small text-danger">ID: {item.id}</p>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{item.title}</h5>
                        <h5 className="text-dark mb-0">${item.price.toFixed(2)}</h5>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                        <p className="text-muted mb-0">Stock: <span className="fw-bold">10</span></p>
                    </div>
                    <ItemCount stock={10} initial={0} onAdd={myCallback}/>
                </div>
            </div>
        </div>
    );
}

export default Item;