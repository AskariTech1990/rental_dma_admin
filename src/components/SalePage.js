import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const categories = [
  { value: 'Cup Lock', label: 'Cup Lock', products: ['Standards', 'Ledgers', 'Base Plates'] },
  { value: 'H-Frame', label: 'H-Frame', products: ['H Frames', 'Braces', 'Planks'] },
  { value: 'Tube & Clamp', label: 'Tube & Clamp', products: ['Tubes', 'Clamps'] },
  { value: 'Heavy Equipment', label: 'Heavy Equipment', products: ['Powerwasher', 'Chain Saw'] },
  { value: 'Transportation', label: 'Transportation', products: ['Casters'] },
  { value: 'Tools', label: 'Tools', products: ['Powerwasher', 'Small Hilti'] },
  { value: 'Accro Props', label: 'Accro Props', products: ['Accor Props'] },
];

const getSizesForProduct = (product) => {
  const sizeMap = {
    'Standards': ['2ft', '3ft', '6ft', '10ft'],
    'Ledgers': ['2ft', '3ft', '4ft', '8ft'],
    'Base Plates': ['Regular', 'Heavy Duty'],
    'H Frames': ['3x5', '5x5'],
    'Braces': ['3ft', '4ft', '8ft'],
    'Planks': ['10ft Heavy'],
    'Tubes': ['2ft', '3ft', '6ft', '10ft'],
    'Clamps': ['Right Angle', 'Swivel', 'Beam'],
    'Powerwasher': [],
    'Chain Saw': [],
    'Casters': ['With Toggle Pins'],
    'Small Hilti': [],
    'Accor Props': []
  };
  return sizeMap[product] || [];
};

const ScaffoldingSalePage = () => {
  const [products, setProducts] = useState([
    { category: '', name: '', quantity: 1, amount: '', rentalDays: '', size: '', totalAmount: 0 },
  ]);
  const [clientInfo, setClientInfo] = useState({
    clientName: '',
    companyName: '',
    address: '',
    paymentMethod: '',
  });

  const handleInputChange = (index, event) => {
    const values = [...products];
    values[index][event.target.name] = event.target.value;
    if (event.target.name === 'quantity' || event.target.name === 'amount' || event.target.name === 'rentalDays') {
      values[index].totalAmount = values[index].quantity * values[index].amount * values[index].rentalDays;
    }
    setProducts(values);
  };

  const handleAddFields = () => {
    setProducts([
      ...products,
      { category: '', name: '', quantity: 1, amount: '', rentalDays: '', size: '', totalAmount: 0 },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...products];
    values.splice(index, 1);
    setProducts(values);
  };

  const handleCategoryChange = (index, event) => {
    const values = [...products];
    values[index].category = event.target.value;
    values[index].name = ''; // Clear the product name when the category changes
    values[index].size = ''; // Clear the size when the category changes
    setProducts(values);
  };

  const handleProductChange = (index, event) => {
    const values = [...products];
    values[index].name = event.target.value;
    values[index].size = ''; // Clear the size when the product changes
    setProducts(values);
  };

  const handleClientInfoChange = (event) => {
    const { name, value } = event.target;
    setClientInfo({
      ...clientInfo,
      [name]: value,
    });
  };

  const generatePDF = () => {
    const input = document.getElementById('invoice');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save("invoice.pdf");
    });
  };

  const grandTotal = products.reduce((acc, product) => acc + product.totalAmount, 0);

  return (
    <div className="flex w-full gap-10">
      <div className="lg:w-[20%] md:w-[15%] w-[10%]"></div>
      <div className="dashboard p-4 lg:w-[80%] md:w-[85%] w-[90%] lg:ml-0 md:ml-20">
        <h2 className="text-2xl font-bold mb-4">In-House Scaffolding Sale</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-2">Client Information</h3>
          <div className="mb-2">
            <label className="block text-gray-700">Client's Name:</label>
            <input
              type="text"
              name="clientName"
              value={clientInfo.clientName}
              onChange={handleClientInfoChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Company's Name:</label>
            <input
              type="text"
              name="companyName"
              value={clientInfo.companyName}
              onChange={handleClientInfoChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Address:</label>
            <input
              type="text"
              name="address"
              value={clientInfo.address}
              onChange={handleClientInfoChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Method of Payment:</label>
            <input
              type="text"
              name="paymentMethod"
              value={clientInfo.paymentMethod}
              onChange={handleClientInfoChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
        </div>
        <div id="invoice">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rental Days</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <input
                      list="categories"
                      name="category"
                      value={product.category}
                      onChange={(event) => handleCategoryChange(index, event)}
                      placeholder="Category"
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                    <datalist id="categories">
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>{category.label}</option>
                      ))}
                    </datalist>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      list={`products-${index}`}
                      name="name"
                      value={product.name}
                      onChange={(event) => handleProductChange(index, event)}
                      placeholder="Product Name"
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                    <datalist id={`products-${index}`}>
                      {categories
                        .find((category) => category.value === product.category)?.products.map((productName) => (
                          <option key={productName} value={productName}>{productName}</option>
                        ))}
                    </datalist>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      name="quantity"
                      value={product.quantity}
                      onChange={(event) => handleInputChange(index, event)}
                      placeholder="Quantity"
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      name="amount"
                      value={product.amount}
                      onChange={(event) => handleInputChange(index, event)}
                      placeholder="Amount"
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      name="rentalDays"
                      value={product.rentalDays}
                      onChange={(event) => handleInputChange(index, event)}
                      placeholder="Rental Days"
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      list={`sizes-${index}`}
                      name="size"
                      value={product.size}
                      onChange={(event) => handleInputChange(index, event)}
                      placeholder="Size"
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                    <datalist id={`sizes-${index}`}>
                      {getSizesForProduct(product.name).map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </datalist>
                  </td>
                  <td className="px-6 py-4">{product.totalAmount}</td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() => handleRemoveFields(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <h3 className="text-xl font-bold">Grand Total: {grandTotal}</h3>
          </div>
        </div>
        <button
          type="button"
          onClick={generatePDF}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Generate PDF
        </button>
        <button
          type="button"
          onClick={handleAddFields}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ScaffoldingSalePage;
