import React, { useEffect, useState } from "react";

const NewQuote = () => {
  const [quoteData, setQuoteData] = useState([]);
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://2lkz6gq8-5002.inc1.devtunnels.ms/api/quote/get",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log("quote data coming", data);
        setQuoteData(data);
      } catch (error) {
        console.log("error in fetching quote request", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="flex justify-center p-4 bg-gray-100 min-h-screen">
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Quotes</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-8 border border-gray-200">Name</th>
            <th className="py-2 px-4 border border-gray-200">Email</th>
            <th className="py-2 px-4 border border-gray-200">Phone</th>
            <th className="py-2 px-4 border border-gray-200">Message</th>
          </tr>
        </thead>
        <tbody>
          {quoteData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-8 border border-gray-200">{item.name}</td>
              <td className="py-2 px-4 border border-gray-200">{item.email}</td>
              <td className="py-2 px-4 border border-gray-200">{item.phone}</td>
              <td className="py-2 px-4 border border-gray-200">{item.msg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default NewQuote;
