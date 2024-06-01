import React from 'react';
import RoutesComponent from "./routes/Routes.jsx";
import { CartProvider } from './components/cartContext/CartContext.jsx';

function App() {
  return (
    <CartProvider>
    <RoutesComponent />
  </CartProvider>
  );
}

export default App;
