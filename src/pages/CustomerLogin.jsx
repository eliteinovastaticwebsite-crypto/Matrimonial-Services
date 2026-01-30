import React from 'react';
import { Link } from 'react-router-dom';

const CustomerLogin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-red-800 mb-8">
          Customer Login
        </h1>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6">
            Customer login page content goes here...
          </p>
          <Link 
            to="/" 
            className="block text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;