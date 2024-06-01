import React from 'react';

const Footer = () => {
    return (
      <footer className="p-8 text-white bg-blue-600">
        <div className="container mx-auto text-center md:text-left">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Kalooks Boutique</h3>
              <p>&copy; 2024 Tienda de Ropa. Todos los derechos reservados.</p>
            </div>
            <div className="mb-4 md:mb-0">
            </div>
            <div>
              <h4 className="mb-2 text-xl font-semibold">Síguenos</h4>
              <div className="flex justify-center space-x-4 md:justify-start">
                <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6"/>
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6"/>
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-6 h-6"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
