// src/components/EditItem.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    rentalPrice: "",
    duration: "",
    category: "",
    quantity: "",
    available: false,
    maintenance: false,
    newArrival: false,
    image: "",
  });
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    axios
      .get(`https://2lkz6gq8-5002.inc1.devtunnels.ms/api/inventory/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSaveClick = async () => {
    const updatedFormData = new FormData();
    updatedFormData.append("name", formData.name);
    updatedFormData.append("description", formData.description);
    updatedFormData.append("rentalPrice", formData.rentalPrice);
    updatedFormData.append("duration", "1 day");
    updatedFormData.append("category", formData.category);
    updatedFormData.append("quantity", formData.quantity);
    updatedFormData.append("available", formData.available);
    updatedFormData.append("maintenance", true);
    updatedFormData.append("newArrival", true);

    if (newImage) {
      updatedFormData.append("image", newImage);
    } else {
      updatedFormData.append("image", formData.image);
    }

    try {
      await axios.put(
        `https://2lkz6gq8-5002.inc1.devtunnels.ms/api/inventory/${id}`,
        updatedFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/inventory");
    } catch (error) {
      console.error("Error updating item", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Edit Item</h1>
      <div className="max-w-screen-md mx-auto bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rental Price</label>
          <input
            type="number"
            name="rentalPrice"
            value={formData.rentalPrice}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 flex gap-10">
          <label className="block text-gray-700">Available</label>
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleFormChange}
            className="ml-2 h-8 w-8"
          />
        </div>

        {/* <div className="mb-4">
                    <label className="block text-gray-700">New Arrival</label>
                    <input type="checkbox" name="newArrival" checked={formData.newArrival} onChange={handleFormChange} className="ml-2" />
                </div> */}
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          <div className="flex justify-center border rounded mt-4 shadow-2xl">
            <img
              src={`https://2lkz6gq8-5002.inc1.devtunnels.ms${formData.image}`}
              alt={formData.name}
              className=" w-28 h-28 object-cover mt-2 "
            />
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
