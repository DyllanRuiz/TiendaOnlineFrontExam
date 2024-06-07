import React, { useContext } from 'react';
import { CartContext } from '../../components/cartContext/CartContext';
import { toast } from 'react-toastify';



const CartsProducts = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`"${product.nombre}" añadido al carrito.`);
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <div className="flex items-center justify-center w-full h-48 bg-gray-100 rounded-lg">
        <img src={product.imagen} alt={product.nombre} className="object-contain max-w-full max-h-full" />
      </div>
      <h2 className="mt-4 text-lg font-bold text-gray-900">{product.nombre}</h2>
      <p className="text-gray-700">${product.precio}</p>
      <button 
        className="p-2 mt-4 text-white bg-blue-500 rounded"
        onClick={() => handleAddToCart(product)}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default CartsProducts;
