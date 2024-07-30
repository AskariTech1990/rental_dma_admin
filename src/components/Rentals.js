// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Rentals = () => {
//   const [rentals, setRentals] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   const [filteredRentals, setFilteredRentals] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     axios.get('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/get-all-rentals')
//       .then(response => {
//         console.log('Rentals data:', response.data);
//         setRentals(response.data.rentals || []); // Set rentals directly from response data
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch(error => {
//         console.error('Error fetching rentals:', error);
//         setLoading(false); // Set loading to false on error as well
//       });
//   }, []);

//   useEffect(()=>{

//     setFilteredRentals(
//       rentals.filter(rental =>
//         rental.userName.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     )
//   },[searchTerm, rentals])

//   return (
//     <div className='w-[100%] flex lg:gap-8 md:gap-8'>
//     <div className='lg:w-[20%] md:w-[15%] w-[10%]'></div>
//     <div className="rentals lg:w-[80%] md:w-[85%] w-[90%] p-4">
//       <h1 className="text-3xl font-bold mb-4">All Rentals</h1>
//       <div className='mb-4'>
//         <input
//         type = "text"
//         placeholder='Search by user name.....'
//         value = {searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className='border border-gray-800 rounded p-2'
//          />

//       </div>
//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//           <p className="ml-2">Loading...</p>
//         </div>
//       ) : (
//         <table className="table-auto w-full border-collapse border border-green-800">
//           <thead>
//             <tr className="bg-customColor-circleColor">
//               <th className="border border-gray-700 px-4 py-2">Product Name</th>
//               <th className="border border-gray-700 px-4 py-2">Quantity</th>
//               <th className="border border-gray-700 px-4 py-2">Rental Date</th>
//               <th className="border border-gray-700 px-4 py-2">Return Date</th>
//               <th className="border border-gray-700 px-4 py-2">Status</th>
//               <th className="border border-gray-700 px-4 py-2">Terms </th>
//               <th className="border border-gray-700 px-4 py-2">User </th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredRentals.map(rental => (
//               <tr key={rental._id} className="bg-gray-100">
//                 <td className="border border-gray-700 px-4 py-2 ">{rental.itemName}</td>
//                 <td className="border border-gray-700 px-4 py-2 ">{rental.quantity}</td>
//                 <td className="border border-gray-700 px-4 py-2">{new Date(rental.rentalDate).toLocaleDateString()}</td>
//                 <td className="border border-gray-700 px-4 py-2">{new Date(rental.returnDate).toLocaleDateString()}</td>
//                 <td className="border border-gray-700 px-4 py-2">{rental.status}</td>
//                 <td className="border border-gray-700 px-4 py-2">{rental.termsAccepted ? 'Accepted' : 'Not Accepted'}</td>
//                 <td className="border border-gray-700 px-4 py-2">{rental.userName}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Rentals;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Rentals = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [filteredRentals, setFilteredRentals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/get-all-rentals')
      .then(response => {
        console.log('Rentals data:', response.data);
        setRentals(response.data.rentals || []); // Set rentals directly from response data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching rentals:', error);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);

  useEffect(() => {
    setFilteredRentals(
      rentals.filter(rental =>
        rental.userName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, rentals]);

  const handleReturn = (rental) => {
    axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/return-rental', {
      itemId: rental.itemId,
      userId: rental.userId,
      rentId: rental._id,
      quantity: rental.quantity,
    })
    .then(response => {
      console.log('Return successful:', response.data);
      // Update the rental status to returned
      setRentals(prevRentals =>
        prevRentals.map(r => 
          r._id === rental._id ? { ...r, status: 'returned' } : r
        )
      );
    })
    .catch(error => {
      console.error('Error returning rental:', error);
    });
  };

  const isReturnDatePassed = (returnDate) => {
    const currentDate = new Date();
    return new Date(returnDate) < currentDate;
  };

  return (
    <div className='w-[100%] flex lg:gap-8 md:gap-8'>
      <div className='lg:w-[20%] md:w-[15%] w-[10%]'></div>
      <div className="rentals lg:w-[80%] md:w-[85%] w-[90%] p-4">
        <h1 className="text-3xl font-bold mb-4">All Rentals</h1>
        <div className='mb-4'>
          <input
            type="text"
            placeholder='Search by user name.....'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='border border-gray-800 rounded p-2'
          />
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            <p className="ml-2">Loading...</p>
          </div>
        ) : (
          <table className="table-auto w-full border-collapse border border-green-800">
            <thead>
              <tr className="bg-customColor-circleColor">
                <th className="border border-gray-700 px-4 py-2">Product Name</th>
                <th className="border border-gray-700 px-4 py-2">Quantity</th>
                <th className="border border-gray-700 px-4 py-2">Rental Date</th>
                <th className="border border-gray-700 px-4 py-2">Return Date</th>
                <th className="border border-gray-700 px-4 py-2">Status</th>
                <th className="border border-gray-700 px-4 py-2">Terms</th>
                <th className="border border-gray-700 px-4 py-2">User</th>
                <th className="border border-gray-700 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRentals.map(rental => (
                <tr key={rental._id} className={`bg-gray-100 ${isReturnDatePassed(rental.returnDate) ? 'bg-red-500' : ''}`}>
                  <td className="border border-gray-700 px-4 py-2">{rental.itemName}</td>
                  <td className="border border-gray-700 px-4 py-2">{rental.quantity}</td>
                  <td className="border border-gray-700 px-4 py-2">{new Date(rental.rentalDate).toLocaleDateString()}</td>
                  <td className="border border-gray-700 px-4 py-2">{new Date(rental.returnDate).toLocaleDateString()}</td>
                  <td className="border border-gray-700 px-4 py-2">{rental.status}</td>
                  <td className="border border-gray-700 px-4 py-2">{rental.termsAccepted ? 'Accepted' : 'Not Accepted'}</td>
                  <td className="border border-gray-700 px-4 py-2">{rental.userName}</td>
                  <td className="border border-gray-700 px-4 py-2">
                    {rental.status === 'rented' && (
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => handleReturn(rental)}
                      >
                        Returned
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Rentals;


