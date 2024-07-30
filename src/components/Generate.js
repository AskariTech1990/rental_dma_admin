import React, { useState } from 'react';
import Receipts from './Receipts';
import Invoice from './Invoice';
import Statements from './Statements';


const Generate = () => {
  const [activeTab, setActiveTab] = useState('receipts');

  const renderContent = () => {
    switch (activeTab) {
      case 'receipts':
        return <Receipts />;
      case 'invoices':
        return <Invoice />;
      case 'statements':
        return <Statements />;
      default:
        return <Receipts />;
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center">Admin Panel</h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'receipts' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('receipts')}
          >
            Receipts
          </button>
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'invoices' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('invoices')}
          >
            Invoices
          </button>
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'statements' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('statements')}
          >
            Statements
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Generate;
