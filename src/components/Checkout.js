import {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";
import {collection, getFirestore, addDoc} from "firebase/firestore";

const Checkout = () => {
    const [orderId, setOrderId] = useState(false);
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const {cart, cartTotal, clear} = useContext(CartContext);

    const handleOnChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    }

    const submitOrder = (e) => {
        e.preventDefault();

        const order = {
            buyer,
            items: cart,
            date: new Date(),
            total: cartTotal()
        };

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id);
            clear();
        });
    };

    return (
        <section className="form-container">
            <h1 className="title">Finaliza tu orden</h1>
            <form className="contact-form row" onSubmit={submitOrder}>
                <div className="form-field col-lg-6">
                    <input
                        id="name"
                        className="input-text js-input"
                        type="text"
                        value={buyer.name}
                        required
                        name='name'
                        onChange={handleOnChange}
                    />
                        <label className="label" htmlFor="name">Nombre</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input
                        id="email"
                        className="input-text js-input"
                        type="email"
                        required
                        name='email'
                        onChange={handleOnChange}
                        value={buyer.email}
                    />
                        <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input
                        id="phone"
                        className="input-text js-input"
                        type="text"
                        required
                        name='phone'
                        onChange={handleOnChange}
                        value={buyer.phone}
                    />
                        <label className="label" htmlFor="phone">Celular / Telefono</label>
                </div>
                {!orderId ?
                    <div className="form-field col-lg-12">
                        <input className="submit-btn" type="submit" value="Generar Orden"/>
                    </div> :
                    <h1>Tu id de orden es: {orderId}</h1>
                }
            </form>
        </section>
    );
};

export default Checkout;