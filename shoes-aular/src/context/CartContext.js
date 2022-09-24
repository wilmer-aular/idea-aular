import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCartContent() {
    return useContext(CartContext);
}

export const NotifyConsumer = CartContext.Consumer;

export function CartProvider({ children }) {
    const [notify, setNotify] = useState(0);
    const [discount, setDiscount] = useState(0)
    const [taxes, setTaxes] = useState(0)
    const [listCart, setListCart] = useState([]);

    const addItem = (item, qty) => {
        const exist = listCart?.find(i => i.id === item.id);
        if (exist) {
            setListCart(listCart.map(i => {
                if (i.id === item.id) {
                    i.qty += qty;
                }
                i.total = i.qty * i.price;
                return i
            }))
        } else {
            const newItem = { ...item, qty, isInCart: true, total: item.price * qty };
            listCart.push(newItem)
            setListCart(listCart)
        }
        setNotify(notify + qty);
    }
    const removeItem = (item) => {
        setListCart(listCart.filter(i => i.id !== item.id))
        setNotify(notify - item.qty);
    }

    const clear = () => {
        setListCart([]);
        setNotify(0);
    }
    const isInCart = (id, isInCart) => {
        setListCart(listCart.map(i => {
            if (i.id === id) {
                i.isInCart = isInCart;
            }
            return i
        }))
    };

    const getSubTotal = () => {
        return listCart.length > 1 ? listCart.reduce((a, b) => a.total + b.total) : listCart[0].total;
    }

    const getTotal = () => {
        if (listCart.length) {
            const total = getSubTotal();
            return (Number(total) + Number(taxes)) - Number(discount);
        }
        return 0;
    };

    const value = { notify, setNotify, listCart, setListCart, clear, isInCart, removeItem, addItem, getTotal, discount, setDiscount, taxes, setTaxes, getSubTotal };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
