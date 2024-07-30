import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const Statements = () => {
  const [formData, setFormData] = useState({
    clientName : '',
    clientEmail: '',
    statementPeriod: '',
    scaffoldingType: '',
    totalAmount: '',
    balanceDue: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Statement', 105, 20, null, null, 'center');
    
    doc.setFontSize(12);

    doc.text('Client Name:', 20, 40);
    doc.text(formData.clientName, 60, 40);

    doc.text('Client Email:', 20, 50);
    doc.text(formData.clientEmail, 60, 50);
    
    doc.text('Statement Period:', 20, 60);
    doc.text(formData.statementPeriod, 60, 60);
    
    doc.text('Scaffolding Type:', 20, 70);
    doc.text(formData.scaffoldingType, 60, 70);
    
    doc.text('Total Amount:', 20, 80);
    doc.text(formData.totalAmount, 60, 80);
    
    doc.text('Balance Due:', 20, 90);
    doc.text(formData.balanceDue, 60, 90);
    
    doc.text('Notes:', 20, 110);
    doc.text(formData.notes, 60, 110);
    
    doc.save(`${formData.clientName}_statement.pdf`);
  };

  const handleSendEmail = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.clientEmail,
          documentType: 'statement',
          documentContent: `
            Statement\n
            Client Email: ${formData.clientEmail}\n
            Statement Period: ${formData.statementPeriod}\n
            Scaffolding Type: ${formData.scaffoldingType}\n
            Total Amount: ${formData.totalAmount}\n
            Balance Due: ${formData.balanceDue}\n
            Notes: ${formData.notes}\n
          `,
        }),
      });
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email.');
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Manage Statements</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Client Name</label>
        <input
          type="name"
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
        <label className="block text-gray-700 font-bold mb-2">Statement Period</label>
        <input
          type="text"
          name="statementPeriod"
          value={formData.statementPeriod}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Scaffolding Type</label>
        <input
          type="text"
          name="scaffoldingType"
          value={formData.scaffoldingType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Total Amount</label>
        <input
          type="text"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Balance Due</label>
        <input
          type="text"
          name="balanceDue"
          value={formData.balanceDue}
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
        <button
          onClick={handleSendEmail}
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors duration-300"
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default Statements;
