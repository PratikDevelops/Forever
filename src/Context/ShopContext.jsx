import React, { createContext, useContext, useState } from "react";
import { products } from "../assets/assets"; 

export const ShopContext = createContext();

function ShopContextProvider({ children }) {
  const deliveryFee = 10;
  const currency = "₹";
  const [search, setSearch] = useState(""); 
  const [showSearch, setShowSearch] = useState(false);
  const [cart, setCart] = useState([]); 

  
  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

 
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item._id === product._id);
    
    if (existingProduct) {
      
      setCart(cart.map(item =>
        item._id === product._id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  
  const updateQuantity = (productId, quantity) => {
    setCart(cart.map(item =>
      item._id === productId 
        ? { ...item, quantity: quantity } 
        : item
    ));
  };

  const value = {
    products: filteredProducts,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    deliveryFee,
    currency,
    showSearch,
    setShowSearch,
    search, 
    setSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export default ShopContextProvider;
