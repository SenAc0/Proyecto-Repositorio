import '../App.css'
import React, { useEffect } from 'react';

const ListLeft = ({ lista_repo }) => {

    const handleClick = () => {
        fetch('http://localhost:3000/ask')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }

    return (
        <div className="p-4 w-64 h-full" style={{ backgroundColor: '#242847' }}>
            <h2 className="text-lg font-bold mb-4">Lista de Repositorios</h2>
            <ul className="space-y-2">
                {lista_repo.map((repo, index) => (
                    <li
                        key={index}
                        onClick={handleClick}
                        className="p-2 rounded shadow cursor-pointer text-white bg-[#4C5070] hover:bg-[#5C6090] transition-colors duration-200"
                        >
                    {repo}
                    </li>

                ))}
            </ul>
        </div>
    );
};



export default ListLeft;