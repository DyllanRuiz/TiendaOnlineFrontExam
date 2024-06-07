import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesComponent from "./routes/Routes.jsx";
import CartProvider from './components/cartContext/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <RoutesComponent />
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
