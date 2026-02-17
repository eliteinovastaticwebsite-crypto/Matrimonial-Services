import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { photographyVendors } from '../data/photographyData';
// import other category data as needed

const VendorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
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
        console.log('Loading photography vendors:', photographyVendors.length);
        return photographyVendors;
      // case 'catering':
      //   console.log('Loading catering vendors:', cateringVendors.length);
      //   return cateringVendors;
      // case 'wedding-halls':
      //   return weddingHallsVendors;
      // case 'decorations':
      //   return decorationVendors;
      // case 'entertainment':
      //   return entertainmentVendors;
      // case 'invitation':
      //   return invitationVendors;
      // case 'styling':
      //   return stylingVendors;
      // case 'background-investigations':
      //   return backgroundInvestigationsVendors;
      default:
        console.log('No vendors found for category:', category);
        return [];
    }
  };

  useEffect(() => {
    console.log('Category from path:', category);
    console.log('ID from params:', id);
    
    const vendors = getVendorsByCategory();
    console.log('Vendors array length:', vendors.length);
    
    // Convert id to number for comparison
    const vendorId = parseInt(id);
    console.log('Looking for vendor with ID:', vendorId);
    
    const foundVendor = vendors.find(v => v.id === vendorId);
    
    console.log('Found vendor:', foundVendor);
    
    if (foundVendor) {
      setVendor(foundVendor);
    } else {
      console.log('Vendor not found with ID:', vendorId);
      console.log('Available IDs:', vendors.map(v => v.id));
    }
    setLoading(false);
  }, [id, category]);

  // Image Modal Component
  const ImageModal = ({ image, title, onClose }) => (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading vendor details...</p>
        </div>
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
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
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage.image}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {/* Navigation Bar - Changed to red/golden theme */}
      <div className="bg-gradient-to-r from-red-600 to-yellow-600 shadow-md py-3 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-white hover:text-yellow-200 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back to Vendors</span>
            </button>
            <h1 className="text-white font-bold text-lg truncate max-w-md">
              {vendor.businessName || vendor.name}
            </h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section - Updated colors */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 transform hover:shadow-2xl transition-shadow duration-300">
          <div className="relative h-80 md:h-96 bg-gradient-to-r from-red-100 to-yellow-100">
            <img 
              src={vendor.logo} 
              alt={vendor.businessName || vendor.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/800x400?text=' + (vendor.businessName || vendor.name);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {vendor.businessName || vendor.name}
                    </h1>
                    <p className="text-yellow-300 text-lg font-medium">{vendor.businessCategory || category}</p>
                    <div className="flex items-center mt-3 space-x-4">
                      <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white font-bold">{vendor.rating}</span>
                        <span className="text-white/80 text-sm ml-1">({vendor.totalReviews || 0} reviews)</span>
                      </div>
                      <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <svg className="w-5 h-5 text-green-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-white">{vendor.location || 'Location not specified'}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowEnquiryForm(true)}
                    className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-8 py-3 rounded-lg font-bold hover:from-red-700 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar - Updated colors */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-bold text-red-700 text-lg">{vendor.experience || 0}+ Years</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Team Size</p>
              <p className="font-bold text-red-700 text-lg">{vendor.teamMembers || 1} Members</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Starting Price</p>
              <p className="font-bold text-red-700 text-lg">{vendor.priceRange?.split(' - ')[0] || '₹0'}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Portfolio</p>
              <p className="font-bold text-red-700 text-lg">{vendor.portfolio?.length || 0}+ Projects</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation - Updated colors */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="flex border-b border-gray-200">
            {[
              { id: 'overview', label: 'Overview', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { id: 'portfolio', label: 'Portfolio', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
              { id: 'packages', label: 'Packages', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
              { id: 'reviews', label: 'Reviews', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-4 text-sm font-medium capitalize transition-all duration-300 flex items-center justify-center space-x-2 ${
                  activeTab === tab.id
                    ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                    : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                </svg>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* About Section */}
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    About {vendor.businessName || vendor.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {vendor.longDescription || vendor.description || 'No description available.'}
                  </p>
                </div>

                {/* Services Grid */}
                {vendor.services && vendor.services.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Services Offered
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {vendor.services.map((service, index) => (
                        <div key={index} className="bg-gradient-to-br from-red-50 to-yellow-50 border border-red-200 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                          <svg className="w-8 h-8 text-red-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-semibold text-gray-800">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Equipment Details - Photography specific */}
                {category === 'photography' && vendor.cameraModels && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-red-700 mb-3 flex items-center text-lg">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Camera Equipment
                      </h4>
                      <p className="text-gray-700">{vendor.cameraModels}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-red-700 mb-3 flex items-center text-lg">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Video Equipment
                      </h4>
                      <p className="text-gray-700">{vendor.videoEquipment || 'Not specified'}</p>
                    </div>
                  </div>
                )}

                {/* Delivery Timeline */}
                {vendor.photoDelivery && (
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Delivery Timeline
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-red-50 rounded-xl p-4 text-center">
                        <p className="text-sm text-gray-600 mb-1">Photos</p>
                        <p className="font-bold text-red-700 text-xl">{vendor.photoDelivery} Days</p>
                      </div>
                      <div className="bg-yellow-50 rounded-xl p-4 text-center">
                        <p className="text-sm text-gray-600 mb-1">Videos</p>
                        <p className="font-bold text-yellow-700 text-xl">{vendor.videoDelivery || 'N/A'}</p>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 text-center">
                        <p className="text-sm text-gray-600 mb-1">Album</p>
                        <p className="font-bold text-orange-700 text-xl">{vendor.albumDelivery || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && vendor.portfolio && vendor.portfolio.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                  <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Portfolio Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {vendor.portfolio.map((item) => (
                    <div 
                      key={item.id} 
                      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                      onClick={() => setSelectedImage(item)}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/400x300?text=' + item.title;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 text-lg font-medium">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Packages Tab - Updated colors */}
            {activeTab === 'packages' && vendor.packages && vendor.packages.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                  <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Packages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {vendor.packages.map((pkg, index) => (
                    <div key={index} className="bg-white border-2 border-red-200 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                      <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-6 text-center">
                        <h4 className="text-white font-bold text-2xl mb-2">{pkg.name}</h4>
                        <p className="text-yellow-300 font-bold text-3xl">{pkg.price}</p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <button className="w-full mt-6 bg-gradient-to-r from-red-600 to-yellow-600 text-white py-3 rounded-xl font-bold hover:from-red-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                          Select Package
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && vendor.reviews && vendor.reviews.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-red-800 flex items-center">
                    <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Customer Reviews
                  </h3>
                  <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full">
                    <span className="text-yellow-700 font-bold text-2xl mr-2">{vendor.rating}</span>
                    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-600 ml-2">({vendor.totalReviews || vendor.reviews.length} reviews)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {vendor.reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start">
                        <img 
                          src={review.avatar || 'https://via.placeholder.com/50'} 
                          alt={review.name} 
                          className="w-14 h-14 rounded-full mr-4 border-2 border-red-200"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-800 text-lg">
                              {review.name}
                            </h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center mb-3">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-5 h-5 ${i < Math.floor(review.rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            "{review.comment}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-8 bg-gradient-to-r from-red-600 to-yellow-600 text-white py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                  Write a Review
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Enquiry Form Modal - Updated colors */}
        {showEnquiryForm && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-red-600 to-yellow-600 p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    Send Enquiry to {vendor.businessName || vendor.name}
                  </h3>
                  <button
                    onClick={() => setShowEnquiryForm(false)}
                    className="text-white hover:text-yellow-200 transition-colors"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email *</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Event Date *</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  {vendor.services && vendor.services.length > 0 && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Select Service *</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                        <option value="">Choose a service</option>
                        {vendor.services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                    <textarea
                      placeholder="Tell us about your requirements..."
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-yellow-600 text-white py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorDetails;