import '../App.css'
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-blue-800 text-white py-3 shadow-md">

        <div className=" flex justify-between items-center px-4">

            <h2 className="text-xl font-bold">Repo</h2>
            <nav className="hidden md:flex space-x-6">
                <a href="#inicio" className="hover:text-blue-200">Inicio</a>
                <a href="#subir" className="hover:text-blue-200">Subir</a>
                <a href="#ver" className="hover:text-blue-200">Ver</a>
            </nav>
        </div>
      
    </header>
  );
};

export default Header;
