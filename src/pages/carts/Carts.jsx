import React, { useContext } from 'react';
import { CartContext } from '../../components/cartContext/CartContext';
import { toast } from 'react-toastify';

const Carts = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handlePurchase = () => {
    toast.success('Compra realizada con éxito.');
    clearCart();
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cartItems.map(item => (
              <div key={item.id} className="p-4 border rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-full h-48 bg-gray-100 rounded-lg">
                  <img src={item.imagen} alt={item.nombre} className="object-contain max-w-full max-h-full" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-gray-900">{item.nombre}</h2>
                <p className="text-gray-700">${item.precio}</p>
                <p className="text-gray-700">Cantidad: {item.quantity}</p>
                <button 
                  className="p-2 mt-4 text-white bg-red-500 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar del Carrito
                </button>
              </div>
            ))}
          </div>
          <button 
        className="w-full p-4 mt-8 text-white bg-green-500 rounded"
        onClick={handlePurchase}
      >
        Comprar
      </button>
        </>
      )}
    </div>
  );
};

export default Carts;
