import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Track the user being edited
  const [loading, setLoading] = useState(true); // Track loading state
  const [searchTerm, setSearchTerm] = useState(''); // Track the search term

  useEffect(() => {
    axios.get('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/users')
      .then(response => {
        console.log('Users data:', response.data);
        setUsers(response.data);
        setFilteredUsers(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  const deleteUser = (id) => {
    axios.delete(`https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user._id !== id));
        setFilteredUsers(filteredUsers.filter(user => user._id !== id));
        console.log(`User with ID ${id} deleted successfully.`);
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  const handleEdit = (user) => {
    setEditingUser(user); // Set the user to be edited
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/users/${editingUser._id}`, editingUser);
      console.log('Updated user:', response.data);
      // Update locally after successful save
      const updatedUsers = users.map(user => (user._id === editingUser._id ? editingUser : user));
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
      setEditingUser(null); // Clear editing state
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setEditingUser({ ...editingUser, [name]: newValue });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter(user => 
        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.role.toLowerCase().includes(e.target.value.toLowerCase())
      ));
    }
  };

  return (
    <div className='w-[100%] flex lg:gap-8 gap-20'>
    <div className='lg:w-[20%] md:w-[15%] w-[10%]'></div>
    <div className="container mx-auto p-4 lg:w-[80%] md:w-[85%] w-[90%] ml-20">
      <h1 className="text-3xl font-bold mb-5">Users</h1>
      <div className="mb-5">
        <input 
          type="text" 
          placeholder="Search users..." 
          value={searchTerm} 
          onChange={handleSearch} 
          className="border border-gray-400 px-2 py-1 w-full"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          <p className="ml-2">Loading...</p>
        </div>
      ) : (
        <table className="table-auto w-full border-collapse border border-black">
          <thead>
            <tr className="bg-customColor-circleColor">
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Email</th>
              <th className="border border-black px-4 py-2">Role</th>
              <th className="border border-black px-4 py-2">Is Verified</th>
              <th className="border border-black px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user._id} className="bg-gray-100">
                {editingUser && editingUser._id === user._id ? (
                  <>
                    <td className="border border-black px-4 py-2">
                      <input type="text" name="name" value={editingUser.name} onChange={handleChange} className="border border-gray-400 px-2 py-1 w-full" />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input type="email" name="email" value={editingUser.email} onChange={handleChange} className="border border-gray-400 px-2 py-1 w-full" />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input type="text" name="role" value={editingUser.role} onChange={handleChange} className="border border-gray-400 px-2 py-1 w-full" />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input type="checkbox" name="isVerified" checked={editingUser.isVerified} onChange={handleChange} className="mx-2" />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Save
                      </button>
                      <button onClick={() => setEditingUser(null)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border border-black px-4 py-2">{user.name}</td>
                    <td className="border border-black px-4 py-2">{user.email}</td>
                    <td className="border border-black px-4 py-2">{user.role}</td>
                    <td className="border border-black px-4 py-2">{user.isVerified ? 'Yes' : 'No'}</td>
                    <td className="border border-green-600 px-4 py-2">
                      <button onClick={() => handleEdit(user)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Edit
                      </button>
                      <button onClick={() => deleteUser(user._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default Users;
