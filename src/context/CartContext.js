import {createContext, useState} from "react";

const CartContext = createContext();

function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState(defaultValue);

    function addItem(newItem, quantity) {
        const newCart = cart.slice();
        if(isInCart(newItem.id)) {
            const itemIndex = cart.findIndex(item => item.id === newItem.id);
            newCart[itemIndex].quantity += 1;
        } else {
            newCart.push({
                ...newItem,
                quantity
            });
        }
        setCart(newCart);
        console.log('Se añadio al carrito ', newItem.title);
    }

    function removeItem(itemId) {
        if(isInCart(itemId)) {
            const itemIndex = cart.findIndex(item => item.id === itemId);
            setCart(cart.splice(itemIndex, 1));
        }
    }

    function clear() {
        setCart([]);
    }

    // Devuelve falso o el index donde encuentra el item
    function isInCart(itemId) {
        const foundItem= cart.find(item => item.id === itemId);
        return !!foundItem;
    }

    return (
        <CartContext.Provider value={{cart, addItem,  removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    );
}

export {CartContext, CartProvider};