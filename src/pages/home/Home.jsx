import {useState, useEffect} from 'react';
import CartProducts from "../../components/cartsProducts/CartsProducts.jsx";
import api from "../../database/api/api.js";

const Home = () => {

  const [productos, setProductos] = useState ([])
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('productos ');
        setProductos(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, [api]);

  
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Nuestros Productos</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {productos.map(productos => (
          <CartProducts key={productos.id} product={productos} />
        ))}
      </div>
    </div>
  );
}

export default Home;
