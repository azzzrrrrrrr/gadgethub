import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.name === product.name);
      if (existing) {
        return items.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCartItems((items) =>
      items.filter((item) => item.name !== product.name)
    );
  };

  const updateQuantity = (product, quantity) => {
    if (quantity <= 0) {
      removeFromCart(product);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.name === product.name ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
