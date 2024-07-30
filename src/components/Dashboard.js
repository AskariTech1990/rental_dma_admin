// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [activeRentals, setActiveRentals] = useState(0)
  const [orders, setOrders] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/totaluser"
        );
        const data = await response.json();
        setTotalUsers(data);
        console.log("Data coming total revenue.....", data);
      } catch (error) {
        console.log("error coming here", error);
      }
    };

    const fetchTotalItems = async () => {
      try {
        const itemResponse = await fetch(
          "https://2lkz6gq8-5002.inc1.devtunnels.ms/api/inventory/total-items"
        );
        const itemData = await itemResponse.json();
        setTotalItems(itemData.totalCount);
        console.log("items coming", itemData);
      } catch (error) {
        console.log("error in item", error);
      }
    };

    const fetchRentals = async () => {
      try {
        const response = await fetch(
          "https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/active-rentals"
        );
        const data2 = await response.json();
        setActiveRentals(data2);
        console.log("Data coming total revenue.....", data2);
      } catch (error) {
        console.log("error coming here", error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://2lkz6gq8-5002.inc1.devtunnels.ms/api/admin/total-orders"
        );
        const data3 = await response.json();
        setOrders(data3.totalOrderCount);
        console.log("Data coming total orders.....", data3);
      } catch (error) {
        console.log("error coming here", error);
      }
    };


    fetchData();
    fetchTotalItems();
    fetchRentals();
    fetchOrders()
  }, []);
const navigate = useNavigate()
  return (
    <div className="flex w-full gap-10">
      <div className="lg:w-[20%] md:w-[15%] w-[10%]"></div>
      <div className="dashboard p-4 lg:w-[80%] md:w-[85%] w-[90%] lg:ml-0 md:ml-20" >
        <h1 className="text-3xl font-bold mb-5 text-left">Dashboard</h1>
        <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <div className="stat p-5 bg-white rounded-lg shadow-md font-bold text-center h-24 cursor-pointer" onClick={()=> navigate("/users")}>
            Total Users: {totalUsers}
          </div>
          <div className="stat p-5 bg-white rounded-lg shadow-md font-bold text-center cursor-pointer h-24" onClick={()=> navigate("/rentals")}>
            Total Rentals: {activeRentals}
          </div>
          <div className="stat p-5 bg-white rounded-lg shadow-md font-bold text-center cursor-pointer h-24" onClick={()=> navigate("/inventory")}>
            Total Items: {totalItems}
          </div>
          <div className="stat p-5 bg-white rounded-lg shadow-md font-bold text-center h-24 cursor-pointer" onClick={()=> navigate("/rentalRequest")}>
            Total Orders: {orders}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
