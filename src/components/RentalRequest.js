import React, { useEffect, useState } from "react";

const RentalRequest = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({});

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/users"
        );
        const result = await response.json();
        console.log("rental request", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleStatusChange = (e, userId, orderId) => {
    const { value } = e.target;
    setStatus((prevStatus) => ({
      ...prevStatus,
      [`${userId}-${orderId}`]: value,
    }));
  };

  const handleSubmit = async (e, userId, orderId, productId) => {
    e.preventDefault();
    const selectedStatus = status[`${userId}-${orderId}`];
    if (!selectedStatus) {
      return;
    }

    // Update the status in the backend
    try {
      const response = await fetch(
        `https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/verify-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            productId,
            isOrderVerified: selectedStatus,
          }),
        }
      );

      if (response.ok) {
        // Update the status in the local state
        setData((prevData) =>
          prevData.map((user) => ({
            ...user,
            orders: user.orders.map((order) =>
              order._id === orderId
                ? { ...order, isOrderVerified: selectedStatus }
                : order
            ),
          }))
        );
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleSubmitInvoice = async() =>{
    
  }

  return (
    <div className="flex w-full gap-10">
      <div className="lg:w-[20%] md:w-[15%] w-[10%]"></div>
      <div className="dashboard p-4 lg:w-[80%] md:w-[85%] w-[90%] lg:ml-0 md:ml-20">
        <div className="max-w-6xl mx-auto p-4 bg-gray-100 min-h-screen">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Rental Requests
          </h2>
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border">Username</th>
                <th className="py-3 px-4 border">Email</th>
                <th className="py-3 px-4 border">Phone Number</th>
                <th className="py-3 px-4 border">Front Image</th>
                <th className="py-3 px-4 border">Back Image</th>
                <th className="py-3 px-4 border">User National ID</th>
                <th className="py-3 px-4 border">Quantity</th>
                <th className="py-3 px-4 border">Product Name</th>
                <th className="py-3 px-4 border">Status</th>
                <th className="py-3 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) =>
                user.orders.map((order) => (
                  <tr
                    key={`${user._id}-${order._id}`}
                    className="hover:bg-gray-100"
                  >
                    <td className="py-3 px-4 border">{user.name}</td>
                    <td className="py-3 px-4 border">{user.email}</td>
                    <td className="py-3 px-4 border">{user.phoneNumber}</td>
                    <td className="py-3 px-4 border">
                      <img
                        src={`https://2lkz6gq8-5002.inc1.devtunnels.ms/gallery/${user.imageFront}`}
                        alt="Front"
                        className="w-16 h-16 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/150";
                        }}
                      />
                    </td>
                    <td className="py-3 px-4 border">
                      <img
                        src={`https://2lkz6gq8-5002.inc1.devtunnels.ms/gallery/${user.imageBack}`}
                        alt="Back"
                        className="w-16 h-16 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/150";
                        }}
                      />
                    </td>
                    <td className="py-3 px-4 border">{order.nationalId}</td>
                    <td className="py-3 px-4 border">{order.quantity}</td>
                    <td className="py-3 px-4 border">{order.productName}</td>
                    <td className="py-3 px-4 border">
                      <select
                        value={
                          status[`${user._id}-${order._id}`] ||
                          order.isOrderVerified
                        }
                        onChange={(e) =>
                          handleStatusChange(e, user._id, order._id)
                        }
                        className="border rounded p-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Hold">Hold</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 border flex gap-2">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                        onClick={(e) =>
                          handleSubmit(e, user._id, order._id, order.productId)
                        }
                      >
                        Update
                      </button>
                      {/* <button
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                        onClick={(e) =>
                          handleSubmitInvoice(e, user._id, order._id, order.productId)
                        }
                      >
                        Generate Invoice
                      </button> */}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RentalRequest;
