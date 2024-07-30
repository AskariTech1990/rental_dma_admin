import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

// Import your logo as a base64 string or a URL
import logo from '../assets/Images/LogoRental.png'; // Adjust the path to your logo file

const Receipts = () => {
  const [formData, setFormData] = useState({
    receiptDate: '',
    receiptNumber: '',
    clientName: '',
    clientAddress: '',
    clientPhone: '',
    amountReceived: '',
    amountInWords: '',
    purposeOfPayment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF('landscape');
    
    // Set background color
    doc.setFillColor(255, 253, 208); // Light yellow background
    doc.rect(0, 0, 297, 210, 'F'); // Fill whole page

    // Add Header with logo
    doc.addImage(logo, 'PNG', 20, 10, 50, 30); // Adjust the dimensions as needed
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('7 Thomas Street, Sunshine Avenue, San Juan', 80, 20);
    doc.text('Ph/Fax:', 80, 30);
    doc.text('email:', 80, 40);

    // Add Receipt Title and Date
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Receipt Date', 230, 20);
    doc.text(formData.receiptDate, 230, 30);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Receipt No.', 230, 40);
    doc.text(formData.receiptNumber, 230, 50);

    // Add Received From Section
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Received From', 20, 60);
    doc.setFont('helvetica', 'normal');
    doc.text(formData.clientName, 20, 70);
    doc.text(formData.clientAddress, 20, 80);
    doc.text(`Phone: ${formData.clientPhone}`, 20, 90);

    // Add Received By Section
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Received By', 150, 60);
    doc.setFont('helvetica', 'normal');
    doc.text('DMA Transport & Scaffolding Services Ltd.', 150, 70);
    doc.text('7 Thomas Street, Sunshine Avenue, San Juan', 150, 80);
    doc.text('Phone: 674-6178', 150, 90);

    // Add Paid By Section
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Paid by', 230, 60);
    doc.setFont('helvetica', 'normal');
    doc.text('TR', 230, 70);
    doc.text('UE', 230, 80);
    doc.text('FALSE', 230, 90);
    doc.text('FALSE', 230, 100);

    // Add Amount Received Section
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Amount Received', 20, 110);
    doc.setFont('helvetica', 'normal');
    doc.text(`$${formData.amountReceived}`, 20, 120);

    // Add Amount in Words Section
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Amount in words', 150, 110);
    doc.setFont('helvetica', 'normal');
    doc.text(formData.amountInWords, 150, 120);

    // Add Purpose of Payment Section
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Purpose of Payment:', 20, 130);
    doc.setFont('helvetica', 'normal');
    doc.text(formData.purposeOfPayment, 20, 140);

    doc.save(`${formData.clientName}_receipt.pdf`);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Manage Receipts</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Receipt Date</label>
        <input
          type="date"
          name="receiptDate"
          value={formData.receiptDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Receipt Number</label>
        <input
          type="text"
          name="receiptNumber"
          value={formData.receiptNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Client Name</label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Client Address</label>
        <input
          type="text"
          name="clientAddress"
          value={formData.clientAddress}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Client Phone</label>
        <input
          type="text"
          name="clientPhone"
          value={formData.clientPhone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amount Received</label>
        <input
          type="text"
          name="amountReceived"
          value={formData.amountReceived}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amount in Words</label>
        <input
          type="text"
          name="amountInWords"
          value={formData.amountInWords}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Purpose of Payment</label>
        <textarea
          name="purposeOfPayment"
          value={formData.purposeOfPayment}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handleGeneratePDF}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors duration-300"
        >
          Generate PDF
        </button>
      </div>
    </div>
  );
};

export default Receipts;
