import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import banner images from assets
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';

// Import category images
import photography from '../assets/photography.jpg';
import catering from '../assets/catering.jpg';
import weddinghalls from '../assets/weddinghalls.jpg';
import decoration from '../assets/decoration.jpg';
import invitation from '../assets/invitation.jpg';
import makeup from '../assets/makeup.jpg';
import entertainment from '../assets/entertainment.jpg';

// Import icons
import { 
  Camera, 
  Utensils, 
  Home, 
  Flower2, 
  Music, 
  Gift, 
  Palette,
  User,
  Shield,
  Star,
  CheckCircle,
  Users,
  TrendingUp,
  CreditCard,
  Headphones
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
      icon: <Camera className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      image: photography,
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800'
    },
    {
      id: 'catering',
      name: 'Catering & Foods',
      description: 'Food Catering & Banquet Services',
      icon: <Utensils className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      image: catering,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-800'
    },
    {
      id: 'wedding-halls',
      name: 'Mandapam & Wedding Halls',
      description: 'Venue & Mandapam Services',
      icon: <Home className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      image: weddinghalls,
      color: 'from-amber-500 to-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-800'
    },
    {
      id: 'decorations',
      name: 'Decorations',
      description: 'Wedding Decoration & Floral Services',
      icon: <Flower2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      image: decoration,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800'
    },
    {
      id: 'entertainment',
      name: 'Entertainment & Events',
      description: 'DJ, Music & Entertainment Services',
      icon: <Music className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      image: entertainment,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800'
    },
    {
      id: 'invitation',
      name: 'Invitation & Gifts',
      description: 'Invitation Cards & Gift Services',
      icon: <Gift className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      image: invitation,
      color: 'from-teal-500 to-teal-700',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      textColor: 'text-teal-800'
    },
    {
      id: 'styling',
      name: 'Bridal & Groom Styling',
      description: 'Makeup & Styling Services',
      icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      image: makeup,
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-800'
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
                  <div className="p-5 md:p-6 lg:p-8">
                    <div className="flex flex-col items-center text-center">
                      {/* Icon Container */}
                      <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      
                      {/* Category Name */}
                      <h3 className={`font-bold text-lg md:text-xl lg:text-2xl mb-2 ${category.textColor}`}>
                        {category.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm md:text-base mb-4">
                        {category.description}
                      </p>
                      
                      {/* Click to Register Text */}
                      <div className={`mt-2 px-4 py-2 rounded-full ${category.bgColor} border ${category.borderColor} group-hover:bg-white transition-colors duration-300`}>
                        <span className={`text-sm md:text-base font-medium ${category.textColor}`}>
                          Click to Register →
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </button>
              ))}
            </div>

            {/* Additional Categories Section - Rounded Images */}
            <div className="mt-12 md:mt-16">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-red-800 mb-8 md:mb-12">
                Browse All Service Categories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10 max-w-6xl mx-auto">
                {vendorCategories.map((category) => (
                  <div key={category.id} className="flex flex-col items-center">
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="block group"
                    >
                      <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full border-3 md:border-4 lg:border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 p-0.5 md:p-1">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img 
                            src={category.image}
                            alt={category.name} 
                            className="w-full h-full object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </button>
                    <h3 className="mt-3 md:mt-4 lg:mt-5 text-center font-semibold text-gray-800 text-base md:text-lg lg:text-xl">
                      {category.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">Register Now</p>
                  </div>
                ))}
              </div>
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