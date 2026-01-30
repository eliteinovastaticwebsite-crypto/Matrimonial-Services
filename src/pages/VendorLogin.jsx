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
      title: "Vendor Registration Portal",
      subtitle: "Register Your Wedding Services Business"
    },
    {
      id: 2,
      image: banner2,
      title: "Grow Your Business",
      subtitle: "Connect With Thousands of Wedding Couples"
    },
    {
      id: 3,
      image: banner3,
      title: "Premium Listing",
      subtitle: "Get Featured as a Verified Vendor"
    },
    {
      id: 4,
      image: banner4,
      title: "Easy Management",
      subtitle: "Manage Bookings & Payments Seamlessly"
    },
    {
      id: 5,
      image: banner5,
      title: "24/7 Support",
      subtitle: "Dedicated Vendor Support Team"
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
      {/* Banner Section - Same as Home page */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[35vh] min-h-[250px] sm:h-[40vh] md:h-[45vh] lg:h-[500px]">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentBannerIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-900/70 to-yellow-900/50">
                <img
                  src={banner.image}
                  alt={`Vendor Banner ${banner.id}`}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center center',
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
              </div>
              
              {/* Banner Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center px-4 sm:px-6 md:px-8">
                  <div className="inline-flex items-center justify-center space-x-2 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-pacifico">
                      Vendor Portal
                    </h1>
                  </div>
                  
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-300 mb-2 sm:mb-3">
                    {banner.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-yellow-100 max-w-2xl mx-auto">
                    {banner.subtitle}
                  </p>
                  
                  <div className="mt-4 sm:mt-6 inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                    <span className="text-xs sm:text-sm md:text-base text-yellow-100 font-medium">
                      Join 5000+ Verified Wedding Vendors
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Banner Navigation Dots */}
          <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4 z-30">
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

          {/* Previous/Next Buttons */}
          <button
            onClick={() => goToBanner(currentBannerIndex === 0 ? banners.length - 1 : currentBannerIndex - 1)}
            className="absolute left-3 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 z-30"
            aria-label="Previous banner"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => goToBanner(currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1)}
            className="absolute right-3 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 z-30"
            aria-label="Next banner"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Welcome Section */}
      <main className="container mx-auto px-4 md:px-6 py-6 md:py-8 mt-4 md:mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6 lg:p-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-800 mb-4 md:mb-6">
              Register Your Wedding Business
            </h2>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg mb-6 md:mb-8">
              Join our elite network of wedding service providers. Register your business in one of the categories below to start receiving booking requests.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-yellow-50 p-4 md:p-5 lg:p-6 rounded-lg border border-red-200 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-red-700 text-base md:text-lg mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Selection Heading */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-red-800 mb-2">
                Select Your Service Category
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Click on your service category to register
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Categories Section - 7 Buttons */}
      <section className="container mx-auto px-3 md:px-4 py-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
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
                    <span className={`text-sm md:text-base font-medium ${category.textColor} group-hover:${category.textColor}`}>
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

        {/* Additional Categories Section - Rounded Images (like Home page) */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-red-800 mb-6 md:mb-8 lg:mb-12">
            Browse All Service Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 max-w-6xl mx-auto">
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
                <h3 className="mt-2 md:mt-3 lg:mt-4 text-center font-semibold text-gray-800 text-sm md:text-base lg:text-lg">
                  {category.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">Register Now</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-3 md:px-4 py-6 md:py-8 lg:py-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-red-800 mb-6 md:mb-8">
          Why Register With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-red-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-red-700 mb-1 md:mb-2 text-center">Quick Registration</h3>
            <p className="text-gray-600 text-xs md:text-sm text-center">Simple 10-minute registration process</p>
          </div>
          
          <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-yellow-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <User className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-red-700 mb-1 md:mb-2 text-center">Direct Customers</h3>
            <p className="text-gray-600 text-xs md:text-sm text-center">Get direct leads from verified customers</p>
          </div>
          
          <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-red-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <Shield className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-red-700 mb-1 md:mb-2 text-center">Secure Platform</h3>
            <p className="text-gray-600 text-xs md:text-sm text-center">Safe & secure transaction handling</p>
          </div>
          
          <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-yellow-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-red-700 mb-1 md:mb-2 text-center">Business Analytics</h3>
            <p className="text-gray-600 text-xs md:text-sm text-center">Track performance & insights dashboard</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl md:rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Grow Your Wedding Business?
          </h2>
          <p className="text-yellow-100 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
            Join thousands of successful wedding vendors who have expanded their business through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenVendorForm && onOpenVendorForm('photography')}
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-bold text-base md:text-lg rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              Register Your Business
            </button>
            <Link
              to="/"
              className="px-6 md:px-8 py-3 md:py-4 bg-white/20 backdrop-blur-sm text-white font-bold text-base md:text-lg rounded-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorLogin;