import {useContext} from "react";
import {CartContext} from "../context/CartContext";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext);

    function mapItems(cart) {
        return cart.map(item => {
            return (
                <div key={item.id} className="card mb-4">
                    <div className="card-body p-4">

                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <img
                                    alt="actual product"
                                    src={item.pictureUrl}
                                    className="img-fluid"/>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Nombre</p>
                                    <p className="lead fw-normal mb-0">{item.title}</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Cantidad</p>
                                    <p className="lead fw-normal mb-0">{item.quantity}</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Precio</p>
                                    <p className="lead fw-normal mb-0">${item.price}</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Subtotal</p>
                                    <p className="lead fw-normal mb-0">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Eliminar</p>
                                    <button onClick={() => removeItem(item.id)} className="btn btn-danger">
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            );
        });
    }

    return(
        <section className="vh-100">
            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <p><span className="h2">Carrito de compras: </span><span className="badge bg-success">{cart.length} items</span></p>

                        {cart.length !== 0 ?
                            <>
                                {mapItems(cart)}
                                <div className="card mb-5">
                                    <div className="card-body p-4">

                                        <div className="float-end">
                                            <p className="mb-0 me-5 d-flex align-items-center">
                                                <span className="small text-muted me-2">Monto Total:</span>
                                                <span className="lead fw-normal">${cart.reduce((prev, next) => prev + next.price * next.quantity, 0).toFixed(2)}</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link to='/' className="btn btn-light btn-lg me-2">Continuar Comprando</Link>
                                    <button onClick={() => clear()} type="button" className="btn btn-danger btn-l me-2">Vaciar Carrito</button>
                                    <button type="button" className="btn btn-primary btn-lg">Terminar Compra</button>
                                </div>
                            </> :
                            <div className="card mb-5">
                                <div className="alert alert-danger" role="alert">El carrito esta vacio!</div>
                                <Link className="btn btn-primary" to='/'>Volver a la tienda</Link>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
