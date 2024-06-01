import {useContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../cartContext/CartContext";
import api from "../../database/api/api";



const CartsProducts = ({ product }) => {
    
//   const [productos, setProductos] = useState ([])
  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await api.get('productos ');
//         setProductos(response.data);
//         console.log(response.data)
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchProducts();
//   }, []);
  
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
  
    const handleAddToCart = () => {
      addToCart(product, () => {
        navigate('/carts');
      });
    };

    return (
<div className="p-4 transition-transform transform border rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
  <div className="flex items-center justify-center w-full h-48 bg-gray-100 rounded-lg">
    <img src={product.imagen} alt={product.nombre} className="object-contain max-w-full max-h-full" />
  </div>
  <h2 className="mt-4 text-lg font-bold text-gray-900">{product.nombre}</h2>
  <p className="text-gray-700">${parseFloat(product.precio).toFixed(2)}</p>
  <p className="text-gray-700">Stock: {product.stock}</p>
  <p className="text-gray-700">{product.descripcion}</p>
  <button
    onClick={handleAddToCart}
    className="px-4 py-2 mt-4 text-white transition duration-200 bg-blue-600 rounded hover:bg-blue-700"
  >
    Agregar al Carrito
  </button>
</div>


    );
}

export default CartsProducts;
