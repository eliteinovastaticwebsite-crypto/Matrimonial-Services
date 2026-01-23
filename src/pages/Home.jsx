// Home.jsx
import React, { useState, useEffect } from 'react';

// Import banner images from assets
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';

const Home = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Banner images data - using local assets
  const banners = [
    {
      id: 1,
      image: banner1,
      title: "Find Your Perfect Match",
      subtitle: "Join thousands of successful matches"
    },
    {
      id: 2,
      image: banner2,
      title: "Trusted Matrimonial Services",
      subtitle: "Over 10,000 happy marriages"
    },
    {
      id: 3,
      image: banner3,
      title: "Secure & Private Profiles",
      subtitle: "Your privacy is our priority"
    },
    {
      id: 4,
      image: banner4,
      title: "Premium Membership Benefits",
      subtitle: "Exclusive features for serious seekers"
    },
    {
      id: 5,
      image: banner5,
      title: "Premium Membership Benefits",
      subtitle: "Exclusive features for serious seekers"
    },
    /*{
      id: 4,
      image: banner4,
      title: "Premium Membership Benefits",
      subtitle: "Exclusive features for serious seekers"
    }*/
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      {/* Banner Section - Clean version without overlay text */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Banner Images */}
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBannerIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-fill"
              onError={(e) => {
                e.target.onerror = null;
                // Fallback if image fails to load
                e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
              }}
            />
            
            {/* Light gradient overlay for better visibility (optional, can be removed too) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5"></div>
          </div>
        ))}

        {/* Banner Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBannerIndex
                  ? 'bg-yellow-500 w-8'
                  : 'bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>

        {/* Previous/Next Buttons */}
        <button
          onClick={() => goToBanner(currentBannerIndex === 0 ? banners.length - 1 : currentBannerIndex - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300"
          aria-label="Previous banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => goToBanner(currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300"
          aria-label="Next banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Demo content to show the header in context */}
      <main className="container mx-auto px-4 py-8 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-6">
            Welcome to Eliteinova Matrimonial Services
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 text-lg mb-4">
              This is a demo page to showcase the header component with the requested red and yellow theme, Pacifico font for headings, and all the required menu items.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-red-100 to-yellow-100 p-6 rounded-lg border border-red-200">
                <h3 className="font-pacifico text-xl text-red-700 mb-2">Customer Login</h3>
                <p className="text-gray-600">Access your matrimonial profile</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-red-100 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-pacifico text-xl text-red-700 mb-2">Vendor Login</h3>
                <p className="text-gray-600">Partner portal access</p>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-yellow-100 p-6 rounded-lg border border-red-200">
                <h3 className="font-pacifico text-xl text-red-700 mb-2">Help & Support</h3>
                <p className="text-gray-600">Get assistance anytime</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
          Why Choose Eliteinova?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Verified Profiles</h3>
            <p className="text-gray-600 text-center">All profiles are thoroughly verified for authenticity</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Privacy Protected</h3>
            <p className="text-gray-600 text-center">Your data is secure with advanced encryption</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Expert Matchmaking</h3>
            <p className="text-gray-600 text-center">Professional assistance for perfect matches</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">24/7 Support</h3>
            <p className="text-gray-600 text-center">Round-the-clock customer support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;