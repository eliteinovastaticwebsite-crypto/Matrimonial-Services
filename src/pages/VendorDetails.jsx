import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { photographyVendors } from '../data/photographyData';
// import other category data as needed

const VendorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  // Determine which category we're in based on the current path
  const getCategoryFromPath = () => {
    const path = window.location.pathname;
    if (path.includes('/photography/')) return 'photography';
    if (path.includes('/catering/')) return 'catering';
    if (path.includes('/wedding-halls/')) return 'wedding-halls';
    if (path.includes('/decorations/')) return 'decorations';
    if (path.includes('/entertainment/')) return 'entertainment';
    if (path.includes('/invitation/')) return 'invitation';
    if (path.includes('/styling/')) return 'styling';
    if (path.includes('/background-investigations/')) return 'background-investigations';
    return '';
  };

  const category = getCategoryFromPath();

  // Get the correct data array based on category
  const getVendorsByCategory = () => {
    switch(category) {
      case 'photography':
        return photographyVendors;
      default:
        return [];
    }
  };

  useEffect(() => {
    const vendors = getVendorsByCategory();
    const vendorId = parseInt(id);
    const foundVendor = vendors.find(v => v.id === vendorId);
    
    if (foundVendor) {
      setVendor(foundVendor);
    }
    setLoading(false);
  }, [id, category]);

  // Image Modal Component
  const ImageModal = ({ image, title, onClose }) => (
    <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-yellow-300 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={image} alt={title} className="w-full h-auto rounded-lg" />
        <p className="text-white text-center mt-2 text-lg">{title}</p>
      </div>
    </div>
  );

  // Handle close button click
  const handleClose = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Loading vendor details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full">
          <div className="text-center">
            <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Vendor Not Found</h2>
            <p className="text-gray-600 mb-6">The vendor you're looking for doesn't exist or has been removed.</p>
            <button
              onClick={() => navigate(`/${category}`)}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-6 rounded-md font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300"
            >
              Back to {category?.charAt(0).toUpperCase() + category?.slice(1) || 'Vendors'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={handleClose}></div>
      
      {/* Modal/Form container - Reduced width to max-w-3xl */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-red-50 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main Content */}
            <div className="bg-gradient-to-b from-red-50 to-yellow-50">
              {/* Image Modal */}
              {selectedImage && (
                <ImageModal
                  image={selectedImage.image}
                  title={selectedImage.title}
                  onClose={() => setSelectedImage(null)}
                />
              )}

              {/* Header with Business Name */}
              <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-6 sticky top-0 z-30 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleClose}
                    className="text-white hover:text-yellow-200 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </button>
                  <h1 className="text-white font-bold text-lg truncate max-w-md">
                    {vendor.businessName || vendor.name}
                  </h1>
                  <div className="w-6"></div>
                </div>
              </div>

              {/* Content - Reduced padding */}
              <div className="px-4 py-6 space-y-6">
                {/* Hero Section - Simplified */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-r from-red-100 to-yellow-100">
                    <img 
                      src={vendor.logo} 
                      alt={vendor.businessName || vendor.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x200?text=' + (vendor.businessName || vendor.name);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-end justify-between">
                          <div>
                            <h2 className="text-xl font-bold text-white mb-1">
                              {vendor.businessName || vendor.name}
                            </h2>
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-white text-sm font-bold">{vendor.rating}</span>
                              </div>
                              <span className="text-white/90 text-sm">{vendor.location || 'Location not specified'}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setShowEnquiryForm(!showEnquiryForm)}
                            className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:from-red-700 hover:to-yellow-700 transition-all duration-300 shadow-md"
                          >
                            {showEnquiryForm ? 'Close' : 'Enquire'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats - Simplified */}
                <div className="bg-white rounded-xl shadow-md p-4">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="font-bold text-red-700">{vendor.experience || 0}Y</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Team</p>
                      <p className="font-bold text-red-700">{vendor.teamMembers || 1}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Starting</p>
                      <p className="font-bold text-red-700 text-sm">{vendor.priceRange?.split(' - ')[0] || '₹0'}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Projects</p>
                      <p className="font-bold text-red-700">{vendor.portfolio?.length || 0}</p>
                    </div>
                  </div>
                </div>

                {/* Overview Section */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Overview
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {vendor.longDescription || vendor.description || 'No description available.'}
                  </p>
                </div>

                {/* Services Section */}
                {vendor.services && vendor.services.length > 0 && (
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Services
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {vendor.services.map((service, index) => (
                        <span key={index} className="bg-gradient-to-r from-red-50 to-yellow-50 border border-red-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Portfolio Section */}
                {vendor.portfolio && vendor.portfolio.length > 0 && (
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Portfolio
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {vendor.portfolio.slice(0, 3).map((item) => (
                        <div 
                          key={item.id} 
                          className="relative rounded-lg overflow-hidden cursor-pointer aspect-square"
                          onClick={() => setSelectedImage(item)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://via.placeholder.com/150';
                            }}
                          />
                        </div>
                      ))}
                      {vendor.portfolio.length > 3 && (
                        <div className="relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center aspect-square">
                          <span className="text-gray-500 font-bold">+{vendor.portfolio.length - 3}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Packages Section */}
                {vendor.packages && vendor.packages.length > 0 && (
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      Packages
                    </h3>
                    <div className="space-y-3">
                      {vendor.packages.map((pkg, index) => (
                        <div key={index} className="border border-red-100 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-red-700">{pkg.name}</h4>
                            <span className="text-red-600 font-bold">{pkg.price}</span>
                          </div>
                          <ul className="space-y-1">
                            {pkg.features.slice(0, 2).map((feature, idx) => (
                              <li key={idx} className="flex items-start text-xs">
                                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                            {pkg.features.length > 2 && (
                              <li className="text-xs text-gray-400 ml-6">+{pkg.features.length - 2} more</li>
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Section */}
                {vendor.reviews && vendor.reviews.length > 0 && (
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-red-800 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        Reviews
                      </h3>
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                        <span className="text-yellow-700 font-bold text-sm mr-1">{vendor.rating}</span>
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {vendor.reviews.slice(0, 2).map((review) => (
                        <div key={review.id} className="border-b border-gray-100 pb-3 last:border-0">
                          <div className="flex items-start">
                            <img 
                              src={review.avatar || 'https://via.placeholder.com/40'} 
                              alt={review.name} 
                              className="w-8 h-8 rounded-full mr-3 border border-red-200"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
                                <span className="text-xs text-gray-400">{review.date}</span>
                              </div>
                              <div className="flex items-center mb-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg 
                                    key={i} 
                                    className={`w-3 h-3 ${i < Math.floor(review.rating) ? 'text-yellow-500' : 'text-gray-200'}`} 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <p className="text-xs text-gray-600 line-clamp-2">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {vendor.reviews.length > 2 && (
                      <button className="w-full mt-3 text-xs text-red-600 font-medium hover:text-red-700">
                        View all {vendor.reviews.length} reviews
                      </button>
                    )}
                  </div>
                )}

                {/* Equipment Details - Photography specific */}
                {category === 'photography' && vendor.cameraModels && (
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Equipment
                    </h3>
                    <p className="text-sm text-gray-700">{vendor.cameraModels}</p>
                  </div>
                )}

                {/* Delivery Timeline */}
                {vendor.photoDelivery && (
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Delivery Timeline
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-red-50 rounded-lg p-2 text-center">
                        <p className="text-xs text-gray-600">Photos</p>
                        <p className="font-bold text-red-700 text-sm">{vendor.photoDelivery} Days</p>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-2 text-center">
                        <p className="text-xs text-gray-600">Videos</p>
                        <p className="font-bold text-yellow-700 text-sm">{vendor.videoDelivery || 'N/A'}</p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2 text-center">
                        <p className="text-xs text-gray-600">Album</p>
                        <p className="font-bold text-orange-700 text-sm">{vendor.albumDelivery || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Enquiry Form */}
                {showEnquiryForm && (
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <div className="bg-gradient-to-r from-red-600 to-yellow-600 -m-5 mb-5 p-4 rounded-t-xl">
                      <h3 className="text-lg font-bold text-white">
                        Send Enquiry
                      </h3>
                    </div>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email *"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <input
                        type="date"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <textarea
                        placeholder="Your Message *"
                        rows="3"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-red-600 to-yellow-600 text-white py-3 rounded-lg font-bold text-sm hover:from-red-700 hover:to-yellow-700 transition-all duration-300"
                      >
                        Send Enquiry
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorDetails;