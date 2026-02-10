import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import banner images from assets
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';

// Import category images - make sure these images exist in your assets folder
import photographyImage from '../assets/photography.jpg';
import cateringImage from '../assets/catering.jpg';
import weddinghallsImage from '../assets/weddinghalls.jpg';
import decorationImage from '../assets/decoration.jpg';
import invitationImage from '../assets/invitation.jpg';
import makeupImage from '../assets/makeup.jpg';
import entertainmentImage from '../assets/entertainment.jpg';

// Import icons for benefits section
import { 
  Users,
  Shield,
  Star,
  TrendingUp,
  CreditCard,
  Headphones,
  CheckCircle,
  User,
  ArrowRight
} from 'lucide-react';

const VendorLogin = ({ onOpenVendorForm }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  // Banner images data - using same banners as home
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

  const vendorCategories = [
    {
      id: 'photography',
      name: 'Photography',
      description: 'Wedding Photography & Videography Services',
      image: photographyImage,
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      gradientOverlay: 'from-red-600/20 to-transparent'
    },
    {
      id: 'catering',
      name: 'Catering & Foods',
      description: 'Food Catering & Banquet Services',
      image: cateringImage,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-800',
      gradientOverlay: 'from-orange-600/20 to-transparent'
    },
    {
      id: 'wedding-halls',
      name: 'Mandapam & Wedding Halls',
      description: 'Venue & Mandapam Services',
      image: weddinghallsImage,
      color: 'from-amber-500 to-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-800',
      gradientOverlay: 'from-amber-600/20 to-transparent'
    },
    {
      id: 'decorations',
      name: 'Decorations',
      description: 'Wedding Decoration & Floral Services',
      image: decorationImage,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      gradientOverlay: 'from-green-600/20 to-transparent'
    },
    {
      id: 'entertainment',
      name: 'Entertainment & Events',
      description: 'DJ, Music & Entertainment Services',
      image: entertainmentImage,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800',
      gradientOverlay: 'from-purple-600/20 to-transparent'
    },
    {
      id: 'invitation',
      name: 'Invitation & Gifts',
      description: 'Invitation Cards & Gift Services',
      image: invitationImage,
      color: 'from-teal-500 to-teal-700',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      textColor: 'text-teal-800',
      gradientOverlay: 'from-teal-600/20 to-transparent'
    },
    {
      id: 'styling',
      name: 'Bridal & Groom Styling',
      description: 'Makeup & Styling Services',
      image: makeupImage,
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-800',
      gradientOverlay: 'from-pink-600/20 to-transparent'
    }
  ];

  const benefits = [
    { 
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: 'Wide Reach',
      text: 'Connect with thousands of wedding customers' 
    },
    { 
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: 'Verified Status',
      text: 'Get verified badge & build trust' 
    },
    { 
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: 'Premium Listing',
      text: 'Featured listings & priority placement' 
    },
    { 
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: 'Business Growth',
      text: 'Increase bookings & revenue' 
    },
    { 
      icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: 'Easy Payments',
      text: 'Secure & timely payment processing' 
    },
    { 
      icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: '24/7 Support',
      text: 'Dedicated vendor support team' 
    },
  ];

  const handleCategoryClick = (category) => {
    setActiveButton(category.id);
    if (onOpenVendorForm) {
      onOpenVendorForm(category.id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      {/* Banner Section - SAME AS HOME PAGE */}
      <section className="relative w-full overflow-hidden bg-gray-100">
        {/* Responsive height - matches Home page: 40vh mobile, 50vh small, 60vh medium, 700px large */}
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
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => goToBanner(currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1)}
            className="absolute right-3 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 z-20"
            aria-label="Next banner"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Category Selection Section - FIRST (as in screenshots) */}
      <main className="container mx-auto px-4 md:px-6 py-6 md:py-8 mt-4 md:mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6 lg:p-8 text-center">
            {/* Category Selection Heading */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-800 mb-3">
                Select Your Service Category
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Click on your service category to register
              </p>
            </div>

            {/* Categories Grid - 7 Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
              {vendorCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  onMouseEnter={() => setActiveButton(category.id)}
                  onMouseLeave={() => setActiveButton(null)}
                  className={`group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                    activeButton === category.id ? 'ring-2 ring-offset-2 ring-yellow-500 scale-[1.02]' : ''
                  } ${category.bgColor} border ${category.borderColor}`}
                >
                  {/* Category Image Container */}
                  <div className="relative h-48 md:h-52 lg:h-56 w-full overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        // Fallback colors if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentElement.style.backgroundColor = category.bgColor.replace('bg-', '');
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradientOverlay}`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 md:p-6 lg:p-8">
                    <div className="flex flex-col items-center text-center">
                      {/* Category Name */}
                      <h3 className={`font-bold text-lg md:text-xl lg:text-2xl mb-2 ${category.textColor}`}>
                        {category.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm md:text-base mb-4">
                        {category.description}
                      </p>
                      
                      {/* Click to Register Button */}
                      <div className={`mt-2 px-4 py-2 rounded-full ${category.bgColor} border ${category.borderColor} group-hover:bg-white transition-all duration-300 flex items-center gap-2`}>
                        <span className={`text-sm md:text-base font-medium ${category.textColor}`}>
                          Click to Register
                        </span>
                        <ArrowRight className={`w-4 h-4 ${category.textColor}`} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Vendor Registration Portal Section - SECOND (as in screenshots) */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-6 md:p-8 lg:p-10 text-center">
            {/* Vendor Registration Portal Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-800 mb-6 md:mb-8">
              Vendor Registration Portal
            </h2>
            <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto">
              Join our elite network of wedding service providers. Register your business in one of the categories below to start receiving booking requests.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-yellow-50 p-5 md:p-6 lg:p-8 rounded-xl border border-red-200 flex items-start space-x-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-red-700 text-lg md:text-xl lg:text-2xl mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-red-800 mb-8 md:mb-12">
            Why Register With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-red-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <CheckCircle className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-red-700 mb-2 md:mb-3 text-center">Quick Registration</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">Simple 10-minute registration process</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-yellow-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <User className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-red-700 mb-2 md:mb-3 text-center">Direct Customers</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">Get direct leads from verified customers</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-red-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <Shield className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-red-700 mb-2 md:mb-3 text-center">Secure Platform</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">Safe & secure transaction handling</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-yellow-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-red-700 mb-2 md:mb-3 text-center">Business Analytics</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">Track performance & insights dashboard</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VendorLogin;