import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VendorLoginForm from './VendorLoginForm'; // Import the VendorLoginForm component

// Import banner images from assets
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';
import photography from '../assets/photography.jpg';
import catering from '../assets/catering.jpg';
import weddinghalls from '../assets/weddinghalls.jpg';
import decoration from '../assets/decoration.jpg';
import invitation from '../assets/invitation.jpg';
import makeup from '../assets/makeup.jpg';
import entertainment from '../assets/entertainment.jpg';

const Home = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [showVendorLogin, setShowVendorLogin] = useState(false); // Add state for vendor login modal

  // Banner images data - using local assets
  const banners = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
    {
      id: 4,
      image: banner4,
    },
    {
      id: 5,
      image: banner5,
    },
  ];

  // Auto change banner every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  // Manual banner navigation
  const goToBanner = (index) => {
    setCurrentBannerIndex(index);
  };

  // Categories data - includes all 8 categories with Matchproof Investigations
  const categories = [
    {
      name: 'Photography',
      path: '/photography',
      image: photography,
    },
    {
      name: 'Catering & Foods',
      path: '/catering',
      image: catering,
    },
    {
      name: 'Wedding Halls',
      path: '/wedding-halls',
      image: weddinghalls,
    },
    {
      name: 'Decorations',
      path: '/decorations',
      image: decoration,
    },
    {
      name: 'Entertainment',
      path: '/entertainment',
      image: entertainment,
    },
    {
      name: 'Invitation & Gifts',
      path: '/invitation',
      image: invitation,
    },
    {
      name: 'Bridal Styling',
      path: '/styling',
      image: makeup,
    },
    {
      name: 'Bride & Groom Background Investigations',
      path: '/background-investigations',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Online image as fallback
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      {/* Banner Section - FULLY FITTED FOR ALL SCREENS */}
      <section className="relative w-full overflow-hidden bg-gray-100">
        {/* Responsive height - 600px only in desktop view */}
        <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[700px] w-full">
          {/* Banner Images - Contain to fit on mobile, cover on desktop */}
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentBannerIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <img
                  src={banner.image}
                  alt={`Banner ${banner.id}`}
                  className="w-full h-full object-contain md:object-cover"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
              </div>
            </div>
          ))}

          {/* Banner Navigation Dots - Centered and visible */}
          <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToBanner(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentBannerIndex
                    ? 'bg-yellow-500 w-6 h-2 sm:w-8 sm:h-2.5 md:w-10 md:h-3'
                    : 'bg-white/90 hover:bg-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next Buttons - Perfectly positioned */}
          <button
            onClick={() => goToBanner(currentBannerIndex === 0 ? banners.length - 1 : currentBannerIndex - 1)}
            className="absolute left-3 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 z-20"
            aria-label="Previous banner"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => goToBanner(currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1)}
            className="absolute right-3 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 z-20"
            aria-label="Next banner"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Welcome Section - Mobile responsive */}
<main className="container mx-auto px-4 md:px-6 py-6 md:py-8 mt-4 md:mt-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-800 mb-4 md:mb-6">
      Welcome to Eliteinova Matrimonial Services
    </h2>
  </div>

  {/* Portal Access Section - moved OUTSIDE the max-w-4xl div */}
  <section id="portal-access" className="mb-24 scroll-mt-20">
    <div className="text-center mb-12">
      <p className="text-sm font-semibold tracking-[0.3em] uppercase text-amber-600 mb-3">
        ✦ Access Your Account ✦
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-800 via-red-600 to-amber-700 bg-clip-text text-transparent mb-4">
        Portal Login & Registration
      </h2>
      <div className="flex items-center justify-center gap-3">
        <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-red-500" />
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-red-500" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

      {/* Vendor Portal */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-t-2xl" />

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
            Vendor Portal
          </h3>
          <p className="text-gray-500 text-sm mb-6">Partner services & business access</p>

          <div className="flex gap-3">
            <button onClick={() => setShowVendorLogin(true)}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              Login
            </button>
            <button onClick={() => setShowComingSoon(true)}
              className="flex-1 px-4 py-2.5 bg-amber-50 text-amber-700 text-sm font-semibold rounded-xl border border-amber-200 hover:bg-amber-100 hover:scale-105 transition-all duration-300 text-center">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Customer Portal */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-red-100">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-rose-500 rounded-t-2xl" />

          <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs font-bold rounded-full shadow-lg">
            Popular
          </div>

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
            Customer Portal
          </h3>
          <p className="text-gray-500 text-sm mb-6">Access your profile & matches</p>

          <div className="flex gap-3">
            <button onClick={() => setShowComingSoon(true)}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-red-500 to-rose-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              Login
            </button>
            <button onClick={() => setShowComingSoon(true)}
              className="flex-1 px-4 py-2.5 bg-red-50 text-red-700 text-sm font-semibold rounded-xl border border-red-200 hover:bg-red-100 hover:scale-105 transition-all duration-300 text-center">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Matrimony Portal */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-pink-100">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-rose-600 rounded-t-2xl" />

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
            Matrimony Portal
          </h3>
          <p className="text-gray-500 text-sm mb-6">Find your perfect life partner</p>

          <div className="flex gap-3">
            <a href="https://eliteinovamatrimony.com/" target="_blank" rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              Login
            </a>
            <a href="https://eliteinovamatrimony.com/" target="_blank" rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-pink-50 text-pink-700 text-sm font-semibold rounded-xl border border-pink-200 hover:bg-pink-100 hover:scale-105 transition-all duration-300 text-center">
              Register
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* Vendor Login Modal */}
  {showVendorLogin && (
    <VendorLoginForm
      onClose={() => setShowVendorLogin(false)}
      showRegisterOptions={true}
    />
  )}
</main>

      {/* Categories Section - Mobile responsive */}
      <section className="container mx-auto px-3 md:px-4 py-6 md:py-8 lg:py-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-red-800 mb-6 md:mb-8 lg:mb-12">
          Our Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link to={category.path} className="block group">
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full border-3 md:border-4 lg:border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 p-0.5 md:p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.name} 
                      className="w-full h-full object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        // Fallback image
                        e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
                      }}
                    />
                  </div>
                </div>
              </Link>
              <h3 className="mt-2 md:mt-3 lg:mt-4 text-center font-semibold text-gray-800 text-sm md:text-base lg:text-lg">
                {category.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section - Mobile responsive */}
      <section className="container mx-auto px-3 md:px-4 py-6 md:py-8 lg:py-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-red-800 mb-6 md:mb-8">
          Why Choose Eliteinova?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-base md:text-lg text-red-700 mb-1 md:mb-2 text-center">Verified Profiles</h3>
            <p className="text-gray-600 text-xs md:text-sm text-center">All profiles are thoroughly verified for authenticity and reliability</p>
          </div>
          
          <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-base md:text-lg text-red-700 mb-1 md:mb-2 text-center">Privacy Protected</h3>
            <p className="text-gray-600 text-xs md:text-sm text-center">Your personal data is secure with advanced encryption technology</p>
          </div>
          
          <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            </div>
            <h3 className="font-bold text-base md:text-lg text-red-700 mb-1 md:mb-2 text-center">Expert Matchmaking</h3>
            <p className="text-gray-600 text-xs md:text-sm text-center">Professional assistance using advanced algorithms for perfect matches</p>
          </div>
          
          <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-base md:text-lg text-red-700 mb-1 md:mb-2 text-center">24/7 Support</h3>
            <p className="text-gray-600 text-xs md:text-sm text-center">Round-the-clock customer support for all your queries and concerns</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;