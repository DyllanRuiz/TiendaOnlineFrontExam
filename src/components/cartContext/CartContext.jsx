import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product, callback) => {
      setCartItems((prevItems) => {
        const itemExists = prevItems.find(item => item.id === product.id);
        if (itemExists) {
          return prevItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });
  
      if (callback) {
        callback();
      }
    };
  
    const value = {
      cartItems,
      addToCart,
    };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
