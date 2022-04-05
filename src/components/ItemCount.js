import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial);

    const addToCounter = (quantity) => {
        let newCounter = counter;
        if ((counter + quantity <= stock) && (counter + quantity >=0)) {
            newCounter = counter + quantity;
        }
        setCounter(newCounter);
    }

        return (
            <div>
                <div className="top mb-2">
                    <button className="btn btn-primary" onClick={() => addToCounter(-1)}>-</button>
                    <span className="mx-2">{counter}</span>
                    <button className="btn btn-primary" onClick={() => addToCounter(1)}>+</button>
                </div>
                <div className="bottom">
                    <button className="btn btn-outline-primary" onClick={() => onAdd(counter)}>Añadir al carrito</button>
                </div>
            </div>
        );
}

export default ItemCount;