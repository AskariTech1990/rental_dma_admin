import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/inventory/get-inventory')
            .then(response => {
                setInventory(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const deleteItem = (id) => {
        axios.delete(`https://2lkz6gq8-5002.inc1.devtunnels.ms/api/inventory/${id}`)
            .then(() => setInventory(inventory.filter(item => item._id !== id)))
            .catch(error => console.error(error));
    };

    const handleEditClick = (id) => {
        navigate(`/editItem/${id}`);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredInventory = inventory.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='w-[100%] flex'>
            <div className='w-[20%]'></div>
            <div className="inventory p-4 overflow-x-auto w-[80%]">
                <div className='flex justify-between'>
                <h1 className="text-3xl font-bold text-left mb-4">Inventory</h1>
                <button className='border bg-blue-500' onClick={() => navigate('/add-inventory')}>Add Inventory</button>
                </div>
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                        className="p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <table className="min-w-full bg-white border-collapse block md:table">
                    <thead className="block md:table-header-group">
                        <tr className="border border-gray-300 md:border-none block md:table-row">
                            <th className="bg-customColor-circleColor p-2 text-gray-600 font-bold border border-gray-300 text-left block md:table-cell" style={{width: '15%'}}>Name</th>
                            <th className="bg-customColor-circleColor p-2 text-gray-600 font-bold border border-gray-300 text-left block md:table-cell" style={{width: '33%'}}>Description</th>
                            <th className="bg-customColor-circleColor p-2 text-gray-600 font-bold border border-gray-300 text-left block md:table-cell" style={{width: '8%'}}>Rental Price</th>
                            <th className="bg-customColor-circleColor p-2 text-gray-600 font-bold border border-gray-300 text-left block md:table-cell" style={{width: '10%'}}>Category</th>
                            <th className="bg-customColor-circleColor p-2 text-gray-600 font-bold border border-gray-300 text-left block md:table-cell" style={{width: '7%'}}>Quantity</th>
                            <th className="bg-customColor-circleColor p-2 text-gray-600 font-bold border border-gray-300 text-left block md:table-cell" style={{width: '10%'}}>Image</th>
                            <th className="bg-customColor-circleColor p-2 text-gray-600 font-bold border border-gray-300 text-left block md:table-cell" style={{width: '12%'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        {filteredInventory.map(item => (
                            <tr key={item._id} className="border border-gray-300 md:border-none block md:table-row">
                                <td className="p-2 border border-gray-300 block md:table-cell" style={{width: '15%'}}>{item.name}</td>
                                <td className="p-2 border border-gray-300 block md:table-cell" style={{width: '33%'}}>{item.description}</td>
                                <td className="p-2 border border-gray-300 block md:table-cell" style={{width: '8%'}}>{item.rentalPrice}</td>
                                <td className="p-2 border border-gray-300 block md:table-cell" style={{width: '10%'}}>{item.category}</td>
                                <td className="p-2 border border-gray-300 block md:table-cell" style={{width: '7%'}}>{item.quantity}</td>
                                <td className="p-2 border border-gray-300 block md:table-cell" style={{width: '10%'}}>
                                    <img src={`https://2lkz6gq8-5002.inc1.devtunnels.ms${item.image}`} alt={item.name} className="w-16 h-16 object-cover" />
                                </td>
                                <td className="p-2 border border-gray-300 block md:table-cell gap-4" style={{width: '12%'}}>
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-3" onClick={() => handleEditClick(item._id)}>Edit</button>
                                    <button className="bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded" onClick={() => deleteItem(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;
