import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VendorLoginForm = ({ onClose, showRegisterOptions = false }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    vendorId: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [showServiceForms, setShowServiceForms] = useState(false);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!loginData.vendorId || !loginData.email || !loginData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Check if vendor exists in localStorage
    const vendors = JSON.parse(localStorage.getItem('vendors') || '[]');
    const vendor = vendors.find(v => 
      (v.id === loginData.vendorId || v.vendorId === loginData.vendorId) && 
      v.email === loginData.email
    );

    // For demo purposes, also check if it's the current vendor
    const currentVendorData = JSON.parse(localStorage.getItem('vendorData') || '{}');
    const isCurrentVendor = currentVendorData.id === loginData.vendorId || 
                           currentVendorData.vendorId === loginData.vendorId;

    if (vendor || isCurrentVendor) {
      // Set vendor as logged in
      localStorage.setItem('vendorLoggedIn', 'true');
      
      // If vendor is found in vendors list, use that data
      if (vendor) {
        localStorage.setItem('vendorData', JSON.stringify(vendor));
        navigate(`/vendor-profile/${vendor.id || vendor.vendorId}`);
      } else if (isCurrentVendor) {
        // Use current vendor data
        navigate(`/vendor-profile/${currentVendorData.id || currentVendorData.vendorId}`);
      }
      
      if (onClose) onClose();
    } else {
      setError('Invalid Vendor ID, Email or Password');
    }
  };

  const handleServiceFormClick = (formType) => {
    localStorage.setItem('selectedVendorForm', formType);
    navigate('/vendor-login');
    if (onClose) onClose();
  };

  // Handle click outside modal to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-yellow-700">Vendor Login</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!showServiceForms ? (
            /* Login Form */
            <form onSubmit={handleLoginSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Vendor ID <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="vendorId"
                    value={loginData.vendorId}
                    onChange={handleChange}
                    placeholder="Enter your Vendor ID"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    placeholder="Enter your registered email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-3 px-6 rounded-xl font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Login
                </button>

                {showRegisterOptions && (
                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setShowServiceForms(true)}
                      className="text-yellow-700 hover:text-yellow-900 font-medium text-sm"
                    >
                      Need to register your services? Click here
                    </button>
                  </div>
                )}
              </div>
            </form>
          ) : (
            /* Service Registration Options */
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Register Your Services</h3>
                <p className="text-sm text-gray-600">Select your service category</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Photography', formType: 'photography' },
                  { name: 'Catering', formType: 'catering' },
                  { name: 'Wedding Halls', formType: 'wedding-halls' },
                  { name: 'Decorations', formType: 'decorations' },
                  { name: 'Entertainment', formType: 'entertainment' },
                  { name: 'Styling', formType: 'styling' },
                ].map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleServiceFormClick(service.formType)}
                    className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-all text-sm font-medium text-yellow-800 hover:border-yellow-400"
                  >
                    {service.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowServiceForms(false)}
                className="w-full mt-4 text-gray-600 hover:text-yellow-700 text-sm font-medium flex items-center justify-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorLoginForm;