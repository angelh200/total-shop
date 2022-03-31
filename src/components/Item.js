import { Link } from "react-router-dom";
import React from "react";
import ItemCount from "./ItemCount";

function Item({ item }) {
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
                        <h5 className="fw-bold mb-0 text-danger">${item.price.toFixed(2)}</h5>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                        <p className="text-muted mb-0">Stock: <span className="fw-bold">10</span></p>
                    </div>
                    <Link to={`/item/${item.id}`} className="d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-primary">Ver detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;