import '../App.css'
import React from 'react';

const ListLeft = ({ lista_repo }) => {
    return (
        <div className="h-screen bg-blue-800 p-4 w-64 h-full">
            <h2 className="text-lg font-bold mb-4">Lista de Repositorios</h2>
            <ul className="space-y-2">
                {lista_repo.map((repo, index) => (
                    <li key={index} className="p-2 bg-gray-400 rounded shadow hover:bg-gray-500">
                        {repo}
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default ListLeft;