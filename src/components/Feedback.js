// src/components/Feedback.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/feedback/get-feedback')
      .then(response => {
        console.log(response.data.feedback); // Log the data received
        setFeedback(response.data.feedback);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFeedback = feedback.filter(fb =>
    fb.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='w-[100%] flex'>
    <div className='lg:w-[20%] md:w-[15%] w-[10%]'></div>
    <div className="feedback p-4 lg:w-[80%] md:w-[85%] w-[90%]">
      <h1 className="text-2xl font-bold text-left mb-4">All Feedback</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by user name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-gray-300 md:border-none block md:table-row">
              <th className="bg-customColor-circleColor p-2 text-gray-600 font-bold border border-gray-300 text-left block md:table-cell">User Name</th>
              <th className="bg-customColor-circleColor p-2 text-gray-700 font-bold border border-gray-300 text-left block md:table-cell">Message</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {filteredFeedback.map(fb => (
              <tr key={fb._id} className="border border-gray-300 md:border-none block md:table-row">
                <td className="p-2 border border-gray-300 block md:table-cell">{fb.userName}</td>
                <td className="p-2 border border-gray-300 block md:table-cell">{fb.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Feedback;
