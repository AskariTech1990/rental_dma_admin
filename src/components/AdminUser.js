import React, { useEffect, useState } from 'react';

const AdminUser = () => {
  const [adminRequests, setAdminRequests] = useState([]);

  // Fetch the admin requests from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/get-admin');
        if (!response.ok) {
          throw new Error('Failed to fetch admin requests');
        }
        const data = await response.json();
        console.log('Fetched admin requests:', data);
        setAdminRequests(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching admin requests:', error);
      }
    };

    fetchData();
  }, []);

  // Update the status of the admin request
  const updateRequestStatus = async (id, isVerified) => {
    const requestBody = { adminId : id, status: isVerified };

    console.log('Sending request:', requestBody);
    try {
      const response = await fetch('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/verify-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to update request status');
      }

      const data = await response.json();
      console.log('Response data:', data);

      // Update the state with the response data or refetch
      if (Array.isArray(data)) {
        setAdminRequests(data);
      } else {
        // If the response is not an array, handle it accordingly
        console.error('Unexpected data format:', data);
        const updatedRequests = adminRequests.map((request) =>
          request._id === id ? { ...request, status: isVerified ? 'Accepted' : 'Rejected' } : request
        );
        setAdminRequests(updatedRequests);
      }
    } catch (error) {
      console.error('Error updating request status:', error);
    }
  };

  // Handle accepting an admin request
  const handleAccept = (id) => {
    console.log('Accepting admin with id:', id);
    updateRequestStatus(id, true); // true for accepted
  };

  // Handle rejecting an admin request
  const handleReject = (id) => {
    console.log('Rejecting admin with id:', id);
    updateRequestStatus(id, false); // false for rejected
  };

  return (
    <div className='w-[100%] flex lg:gap-8 gap-20'>
    <div className='lg:w-[20%] md:w-[15%] w-[10%]'></div>
    <div className="container mx-auto p-4 lg:w-[80%] md:w-[85%] w-[90%] ml-20">
      <header className="AdminUser-header mb-4">
        <h1 className="text-2xl font-bold">Admin Requests</h1>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(adminRequests) && adminRequests.length > 0 ? (
              adminRequests.map((request) => (
                <tr key={request._id}>
                  <td className="py-2 px-4 border-b">{request.name}</td>
                  <td className="py-2 px-4 border-b">{request.email}</td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    {request.status}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {request.status === 'Pending' ? (
                      <>
                        <button
                          onClick={() => handleAccept(request._id)}
                          className="bg-green-500 text-white px-4 py-1 rounded mr-2 hover:bg-green-600"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(request._id)}
                          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                        >
                          Reject
                        </button>
                      </>
                    ) : request.status === 'Rejected' ? (
                      <button
                        onClick={() => handleAccept(request._id)}
                        className="bg-green-500 text-white px-4 py-1 rounded mr-2 hover:bg-green-600"
                      >
                        Accept
                      </button>
                    ) : (
                      <button
                        onClick={() => handleReject(request._id)}
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-2 px-4 border-b text-center">
                  No admin requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default AdminUser;
