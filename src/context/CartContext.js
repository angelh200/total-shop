import {createContext, useState} from "react";

const CartContext = createContext(false);

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
    }

    function removeItem(itemId) {
        const newCart = cart.slice();
        if(isInCart(itemId)) {
            const itemIndex = cart.findIndex(item => item.id === itemId);
            newCart.splice(itemIndex, 1);
            setCart(newCart);
        }
    }

    function clear() {
        setCart([]);
    }

    // Devuelve falso o el index donde encuentra el item
    function isInCart(itemId) {
        return cart.some(item => item.id === itemId);
    }

    return (
        <CartContext.Provider value={{cart, addItem,  removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    );
}

export {CartContext, CartProvider};