import React, {useContext} from 'react';
import { CartContext } from '../../components/cartContext/CartContext';

const Carts = () => {
  const { cartItems } = useContext(CartContext);

  
  return (
    <div className="container p-4 mx-auto">
    <h1 className="mb-8 text-3xl font-bold text-gray-900">Carrito de Compras</h1>
    {cartItems.length === 0 ? (
      <p className="text-gray-700">Tu carrito está vacío.</p>
    ) : (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cartItems.map(item => (
          <div key={item.id} className="p-4 border rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-full h-48 bg-gray-100 rounded-lg">
              <img src={item.image} alt={item.name} className="object-contain max-w-full max-h-full" />
            </div>
            <h2 className="mt-4 text-lg font-bold text-gray-900">{item.name}</h2>
            <p className="text-gray-700">${item.price}</p>
            <p className="text-gray-700">Cantidad: {item.quantity}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  );
}

export default Carts;
