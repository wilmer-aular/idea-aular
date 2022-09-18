import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCartContent() {
    return useContext(CartContext);
}

export const NotifyConsumer = CartContext.Consumer;

export function CartProvider({ children }) {
    const [notify, setNotify] = useState(0)
    const [listCart, setListCart] = useState([])

    const addItem = (item, qty) => {
        const exist = listCart?.find(i => i.id === item.id);
        if (exist) {
            setListCart(listCart.map(i => {
                if (i.id === item.id) {
                    i.qty += qty;
                }
                return i
            }))
        } else {
            const newItem = { ...item, qty, isInCart: true };
            listCart.push(newItem)
            setListCart(listCart)
        }
        setNotify(notify + 1);
    }
    const removeItem = (id) => {
        setListCart(listCart.filter(i => i.id !== id))
    }

    const clear = () => {
        setListCart([])
    }
    const isInCart = (id, isInCart) => {
        setListCart(listCart.map(i => {
            if (i.id === id) {
                i.isInCart = isInCart;
            }
            return i
        }))
    }

    const value = { notify, setNotify, listCart, setListCart, clear, isInCart, removeItem, addItem };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
