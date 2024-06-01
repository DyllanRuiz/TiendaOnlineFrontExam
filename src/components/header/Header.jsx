import React from 'react';

const Header = () => {
    return (
      <header className="text-white bg-blue-600">
      <nav className="bg-white shadow-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center shrink-0">
                <a href="/" className="text-2xl font-bold text-gray-900" aria-label="Kalooks Boutique">Kalooks Boutique</a>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500 hover:text-indigo-700">
                  Inicio
                </a>
                <a href="/mujeres" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-indigo-500">
                  Mujeres
                </a>
                <a href="/hombres" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-indigo-500">
                  Hombres
                </a>
                <a href="/kids" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-indigo-500">
                  Niños
                </a>
              </div>
            </div>
            {/* <div className="flex items-center space-x-4">
              <a href="/carts" className="flex items-center" aria-label="Carrito de compras">
                <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Carrito de compras" className="w-6 h-6" />
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
    );
}

export default Header;
