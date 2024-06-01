import {useState, useEffect} from 'react';
import api from '../../database/api/api';
import CartsProducts from '../../components/cartsProducts/CartsProducts';



const Hombres = () => {
  
  const [productos, setProductos] = useState ([])
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('productos');
        // Filtrar los productos donde la categoryId sea igual a 3
        const filteredProducts = response.data.filter(product => product.categoriaId === 1);
        setProductos(filteredProducts);
        console.log(productos)
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [api]);


  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Productos para Hombres</h1>
      <div className="mb-4">
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {productos.map(product => (
          <CartsProducts key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Hombres;
