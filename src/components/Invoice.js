import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';

// Import your logo as a base64 string or a URL
import logo from '../assets/Images/LogoRental.png';

const Invoice = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientAddress1: '',
    clientAddress2: '',
    clientAddress3: '',
    shipToName: '',
    shipToAddress1: '',
    shipToAddress2: '',
    shipToAddress3: '',
    poNumber: '',
    shipDate: '',
    shipVia: '',
    fobPoint: '',
    quantity: '',
    description: '',
    unitPrice: '',
    amount: '',
    rentalPeriod: '',
    scaffoldingType: '',
    amountDue: '',
    dueDate: '',
    notes: '',
    vatReg: '124639',
    invoiceNumber: '',
    companyAddress: '7 Thomas Street, Sunshine Avenue, San Juan',
    companyPhone: '(868) 674-6178, (868) 374-7563',
    companyEmail: 'dma_07@yahoo.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4');

    // Add Header with logo
    doc.addImage(logo, 'PNG', 40, 20, 100, 50); // Adjust the dimensions as needed

    // Company details
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(formData.companyAddress, 150, 30);
    doc.text(`Ph/Fax: ${formData.companyPhone}`, 150, 45);
    doc.text(`email: ${formData.companyEmail}`, 150, 60);

    // Add Invoice Title and Details
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Invoice', 450, 50);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 450, 65);
    doc.text(`Invoice #: ${formData.invoiceNumber}`, 450, 80);
    doc.text(`V.A.T. Reg. # ${formData.vatReg}`, 450, 95);

    // Draw Bill To / Ship To Details
    doc.setLineWidth(1);
    doc.line(40, 110, 555, 110);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Bill To:', 45, 125);
    doc.text('Ship To:', 320, 125);

    doc.setFont('helvetica', 'normal');
    doc.text(`Client's Name: ${formData.clientName}`, 45, 140);
    doc.text(`Company's Address: ${formData.clientAddress1}`, 45, 155);
    doc.text(`${formData.clientAddress2}`, 45, 170);
    doc.text(`${formData.clientAddress3}`, 45, 185);

    doc.text(`Client's Name: ${formData.shipToName}`, 320, 140);
    doc.text(`Job location address: ${formData.shipToAddress1}`, 320, 155);
    doc.text(`Job location address: ${formData.shipToAddress2}`, 320, 170);
    doc.text(`Job location address: ${formData.shipToAddress3}`, 320, 185);

    // Table for shipment and other details
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    doc.rect(40, 210, 515, 20, 'FD'); // Header row

    doc.setFont('helvetica', 'bold');
    doc.text('SAL ESP ERS', 45, 225);
    doc.text('P.O. NUMBER', 120, 225);
    doc.text('SHIP DATE', 220, 225);
    doc.text('SHIP VIA', 320, 225);
    doc.text('F.O.B. POINT', 420, 225);
    doc.text('TERMS', 520, 225);

    // Add shipment and other details
    doc.setFont('helvetica', 'normal');
    doc.text(formData.poNumber, 120, 245);
    doc.text(formData.shipDate, 220, 245);
    doc.text(formData.shipVia, 320, 245);
    doc.text(formData.fobPoint, 420, 245);

    // Add Scaffolding Details
    doc.text('Attention : Client\'s Name', 45, 270);
    doc.text('Scaffold Description:', 45, 285);
    doc.text('Quotation#:', 45, 300);
    doc.text('Quotation Date:', 45, 315);
    doc.text('Rental:', 45, 330);
    doc.text('Rental Period:', 45, 345);

    // Add Rental Details
    doc.text(`Rental of 3 hgt H frames and 19 planks from ${formData.rentalPeriod}`, 45, 360);
    doc.text(`Rental: 22 days`, 45, 375);

    // Draw Payment Terms
    doc.text('Payment Terms:', 45, 390);
    doc.text('1. Full payment on satisfactory completion and acceptance by client.', 45, 405);
    doc.text('2. Kindly note that outstanding invoices will be given a grace period of 3 days', 45, 420);
    doc.text('and after the 3 days grace period, interest will be added.', 45, 435);
    doc.text('3. Online Payment is to be made to:', 45, 450);

    // Bank Details
    doc.text('Account Name: DMA TRANSPORT & SCAFFOLDING SERVICE LTD', 45, 465);
    doc.text('Bank: First Citizens Bank', 45, 480);
    doc.text('Account#: 1933184', 45, 495);
    doc.text('Account Type: Chequings', 45, 510);

    // Add Footer Notes
    doc.setFontSize(9);
    doc.text('We trust this keeping meets with your requirements and invite you to', 45, 530);
    doc.text('contact our office should you require any further information.', 45, 545);

    // Draw Total Amount
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Net Total', 400, 580);
    doc.text('Vat 12.5%', 400, 595);
    doc.text('Total', 400, 610);

    doc.text(formData.amountDue, 500, 580);
    doc.text((parseFloat(formData.amountDue) * 0.125).toFixed(2), 500, 595);
    doc.text((parseFloat(formData.amountDue) * 1.125).toFixed(2), 500, 610);

    doc.save(`${formData.clientName}_invoice.pdf`);
  };


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users",
          {
            method: "GET"
          }
        )
      } catch (error) {

      }
    }
  })


  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Manage Invoice</h3>
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
        <label className="block text-gray-700 font-bold mb-2">Client Email</label>
        <input
          type="email"
          name="clientEmail"
          value={formData.clientEmail}
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
        <label className="block text-gray-700 font-bold mb-2">Client Address Line 1</label>
        <input
          type="text"
          name="clientAddress1"
          value={formData.clientAddress1}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Client Address Line 2</label>
        <input
          type="text"
          name="clientAddress2"
          value={formData.clientAddress2}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Client Address Line 3</label>
        <input
          type="text"
          name="clientAddress3"
          value={formData.clientAddress3}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Ship To Name</label>
        <input
          type="text"
          name="shipToName"
          value={formData.shipToName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Ship To Address Line 1</label>
        <input
          type="text"
          name="shipToAddress1"
          value={formData.shipToAddress1}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Ship To Address Line 2</label>
        <input
          type="text"
          name="shipToAddress2"
          value={formData.shipToAddress2}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Ship To Address Line 3</label>
        <input
          type="text"
          name="shipToAddress3"
          value={formData.shipToAddress3}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">P.O. Number</label>
        <input
          type="text"
          name="poNumber"
          value={formData.poNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Ship Date</label>
        <input
          type="date"
          name="shipDate"
          value={formData.shipDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Ship Via</label>
        <input
          type="text"
          name="shipVia"
          value={formData.shipVia}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">F.O.B. Point</label>
        <input
          type="text"
          name="fobPoint"
          value={formData.fobPoint}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Quantity</label>
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Unit Price</label>
        <input
          type="text"
          name="unitPrice"
          value={formData.unitPrice}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amount</label>
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amount Due</label>
        <input
          type="text"
          name="amountDue"
          value={formData.amountDue}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
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

export default Invoice;
