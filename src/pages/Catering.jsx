import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import traditional from '../assets/traditional.jpg';
import specialcatering from '../assets/specialcatering.jpg';
import snackscatering from '../assets/snackscatering.jpg';
import buffet from '../assets/buffet.jpg';
import livecounter from '../assets/livecounter.jpg';
import nonveg from '../assets/nonveg.jpg';
import veg from '../assets/veg.jpg';
import multicuisine from '../assets/multicuisine.jpg';
import themebased from '../assets/themebased.jpg';
import eventbased from '../assets/eventbased.jpg';
import photography from '../assets/photography.jpg';
import catering from '../assets/catering.jpg';
import weddinghalls from '../assets/weddinghalls.jpg';
import decoration from '../assets/decoration.jpg';
import invitation from '../assets/invitation.jpg';
import makeup from '../assets/makeup.jpg';
import entertainment from '../assets/entertainment.jpg';
import caterbanner1 from '../assets/multicuisine.jpg';
import caterbanner2 from '../assets/multicuisine.jpg';

const Catering = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const banners = [
    {
      id: 1,
      image: caterbanner1,
      title: "Catering Services",
      subtitle: "Delicious Food for Your Special Occasions"
    },
    {
      id: 2,
      image: caterbanner2,
      title: "Professional Catering",
      subtitle: "Exquisite Cuisine, Unforgettable Events"
    }
  ];

  const mainCategories = [
    { name: 'Photography', path: '/photography', image: photography },
    { name: 'Catering & Foods', path: '/catering', image: catering },
    { name: 'Wedding Halls', path: '/wedding-halls', image: weddinghalls },
    { name: 'Decorations', path: '/decorations', image: decoration },
    { name: 'Entertainment', path: '/entertainment', image: entertainment },
    { name: 'Invitation & Gifts', path: '/invitation', image: invitation },
    { name: 'Bridal Styling', path: '/styling', image: makeup },
  ];

  const cateringCategories = [
    { name: 'Traditional Catering', path: '/catering/traditional-catering', image: traditional },
    { name: 'Vegetarian Catering', path: '/catering/vegetarian-catering', image: veg },
    { name: 'Non-Vegetarian Catering', path: '/catering/non-vegetarian-catering', image: nonveg },
    { name: 'Multi-Cuisine Catering', path: '/catering/multi-cuisine-catering', image: multicuisine },
    { name: 'Buffet Catering', path: '/catering/buffet-catering', image: buffet },
    { name: 'Live Counter Catering', path: '/catering/live-counter-catering', image: livecounter },
    { name: 'Theme-Based Catering', path: '/catering/theme-based-catering', image: themebased },
    { name: 'Event-Based Catering', path: '/catering/event-based-catering', image: eventbased },
    { name: 'Snack & Beverage Catering', path: '/catering/snack-beverage-catering', image: snackscatering },
    { name: 'Special Service Catering', path: '/catering/special-service-catering', image: specialcatering },
  ];

  const eventTypes = [
    'Traditional Catering',
    'Vegetarian Catering',
    'Non-Vegetarian Catering',
    'Multi-Cuisine Catering',
    'Buffet Catering',
    'Live Counter Catering',
    'Theme-Based Catering',
    'Event-Based Catering',
    'Snack & Beverage Catering',
    'Special Service Catering'
  ];

  const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'];
  const districts = ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy'];

  // Sample vendor data - 2 vendors for each catering type
  const vendors = [
    // Traditional Catering Vendors
    {
      id: 1,
      name: 'Traditional Tastes',
      businessName: 'Traditional Tastes Catering Service',
      businessCategory: 'Traditional Catering',
      eventType: 'Traditional Catering',
      personName: 'Rajeshwari Iyer',
      designation: 'Head Chef',
      description: 'Authentic traditional Indian cuisine with family recipes passed down for generations',
      services: ['South Indian Meals', 'North Indian Thali', 'Wedding Banquets', 'Traditional Sweets'],
      logo: traditional,
      location: 'Chennai, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹500 - ₹1,500 per plate'
    },
    {
      id: 2,
      name: 'Heritage Kitchen',
      businessName: 'Heritage Kitchen Caterers',
      businessCategory: 'Traditional Catering',
      eventType: 'Traditional Catering',
      personName: 'Vikram Singh',
      designation: 'Catering Manager',
      description: 'Preserving culinary heritage with authentic regional cuisines',
      services: ['Royal Rajasthani Food', 'Hyderabadi Biryani', 'Kerala Sadya', 'Bengali Cuisine'],
      logo: traditional,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹600 - ₹2,000 per plate'
    },
    // Vegetarian Catering Vendors
    {
      id: 3,
      name: 'Pure Veg Delights',
      businessName: 'Pure Veg Delights Catering',
      businessCategory: 'Vegetarian Catering',
      eventType: 'Vegetarian Catering',
      personName: 'Priya Sharma',
      designation: 'Nutrition Specialist',
      description: '100% vegetarian catering with emphasis on organic and healthy ingredients',
      services: ['Organic Vegetable Dishes', 'Jain Food Options', 'Healthy Salads', 'Fresh Juices'],
      logo: veg,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹400 - ₹1,200 per plate'
    },
    {
      id: 4,
      name: 'Green Leaf Caterers',
      businessName: 'Green Leaf Vegetarian Catering',
      businessCategory: 'Vegetarian Catering',
      eventType: 'Vegetarian Catering',
      personName: 'Arun Mehta',
      designation: 'Executive Chef',
      description: 'Innovative vegetarian cuisine with global flavors',
      services: ['Continental Vegetarian', 'Italian Pasta', 'Mexican Veg', 'Asian Fusion'],
      logo: veg,
      location: 'Hyderabad, Telangana',
      rating: 4.6,
      priceRange: '₹450 - ₹1,500 per plate'
    },
    // Non-Vegetarian Catering Vendors
    {
      id: 5,
      name: 'Royal Non-Veg Caterers',
      businessName: 'Royal Non-Veg Catering Services',
      businessCategory: 'Non-Vegetarian Catering',
      eventType: 'Non-Vegetarian Catering',
      personName: 'Rahul Kapoor',
      designation: 'Master Chef',
      description: 'Specializing in premium non-vegetarian dishes with expert preparation',
      services: ['Mutton Biryani', 'Chicken Specialties', 'Seafood Spread', 'BBQ Grill'],
      logo: nonveg,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹700 - ₹2,500 per plate'
    },
    {
      id: 6,
      name: 'Ocean Delights',
      businessName: 'Ocean Delights Seafood Catering',
      businessCategory: 'Non-Vegetarian Catering',
      eventType: 'Non-Vegetarian Catering',
      personName: 'Anjali Nair',
      designation: 'Seafood Specialist',
      description: 'Fresh seafood catering with coastal flavors',
      services: ['Prawn Specialties', 'Fish Curries', 'Crab Dishes', 'Lobster Preparations'],
      logo: nonveg,
      location: 'Kochi, Kerala',
      rating: 4.8,
      priceRange: '₹800 - ₹3,000 per plate'
    },
    // Multi-Cuisine Catering Vendors
    {
      id: 7,
      name: 'Global Flavors',
      businessName: 'Global Flavors Multi-Cuisine Catering',
      businessCategory: 'Multi-Cuisine Catering',
      eventType: 'Multi-Cuisine Catering',
      personName: 'David Wilson',
      designation: 'Culinary Director',
      description: 'World cuisine experts offering diverse menu options',
      services: ['Indian', 'Chinese', 'Continental', 'Mexican', 'Italian'],
      logo: multicuisine,
      location: 'Madurai, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹600 - ₹2,000 per plate'
    },
    {
      id: 8,
      name: 'Fusion Feast',
      businessName: 'Fusion Feast Catering',
      businessCategory: 'Multi-Cuisine Catering',
      eventType: 'Multi-Cuisine Catering',
      personName: 'Meera Patel',
      designation: 'Fusion Chef',
      description: 'Creative fusion cuisine blending traditional and modern flavors',
      services: ['Indo-Chinese', 'Continental-Indian Fusion', 'Asian Mix', 'Dessert Stations'],
      logo: multicuisine,
      location: 'Ahmedabad, Gujarat',
      rating: 4.6,
      priceRange: '₹650 - ₹2,200 per plate'
    },
    // Buffet Catering Vendors
    {
      id: 9,
      name: 'Grand Buffet Services',
      businessName: 'Grand Buffet Catering',
      businessCategory: 'Buffet Catering',
      eventType: 'Buffet Catering',
      personName: 'Aisha Khan',
      designation: 'Buffet Manager',
      description: 'Professional buffet setup with extensive menu options',
      services: ['Live Counters', 'Salad Bars', 'Dessert Stations', 'Beverage Centers'],
      logo: buffet,
      location: 'Mumbai, Maharashtra',
      rating: 4.9,
      priceRange: '₹550 - ₹1,800 per plate'
    },
    {
      id: 10,
      name: 'Unlimited Buffet',
      businessName: 'Unlimited Buffet Caterers',
      businessCategory: 'Buffet Catering',
      eventType: 'Buffet Catering',
      personName: 'Kabir Malhotra',
      designation: 'Operations Head',
      description: 'Unlimited buffet services for large gatherings',
      services: ['Unlimited Food', 'Multiple Cuisines', 'Specialty Counters', 'Kids Corner'],
      logo: buffet,
      location: 'Delhi, Delhi',
      rating: 4.8,
      priceRange: '₹500 - ₹1,700 per plate'
    },
    // Live Counter Catering Vendors
    {
      id: 11,
      name: 'Live Kitchen Masters',
      businessName: 'Live Kitchen Masters Catering',
      businessCategory: 'Live Counter Catering',
      eventType: 'Live Counter Catering',
      personName: 'Sanjay Gupta',
      designation: 'Live Counter Chef',
      description: 'Interactive live cooking stations for engaging dining experience',
      services: ['Live Pasta Station', 'Chaat Counter', 'Dosa Counter', 'Barbecue Station'],
      logo: livecounter,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹700 - ₹2,500 per plate'
    },
    {
      id: 12,
      name: 'Interactive Dining',
      businessName: 'Interactive Dining Experiences',
      businessCategory: 'Live Counter Catering',
      eventType: 'Live Counter Catering',
      personName: 'Neha Joshi',
      designation: 'Event Coordinator',
      description: 'Customized live counters based on event theme',
      services: ['Sushi Bar', 'Taco Station', 'Waffle Counter', 'Mongolian Grill'],
      logo: livecounter,
      location: 'Pune, Maharashtra',
      rating: 4.8,
      priceRange: '₹750 - ₹2,800 per plate'
    },
    // Theme-Based Catering Vendors
    {
      id: 13,
      name: 'Themed Cuisine',
      businessName: 'Themed Cuisine Catering',
      businessCategory: 'Theme-Based Catering',
      eventType: 'Theme-Based Catering',
      personName: 'Venkatesh Iyer',
      designation: 'Theme Specialist',
      description: 'Complete theme-based catering including decor and menu',
      services: ['Royal Theme', 'Beach Theme', 'Garden Party', 'Retro Theme'],
      logo: themebased,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹1,000 - ₹3,500 per plate'
    },
    {
      id: 14,
      name: 'Concept Catering',
      businessName: 'Concept Catering Services',
      businessCategory: 'Theme-Based Catering',
      eventType: 'Theme-Based Catering',
      personName: 'Radha Krishnan',
      designation: 'Concept Designer',
      description: 'Innovative concept-based catering solutions',
      services: ['Destination Themes', 'Cultural Themes', 'Seasonal Themes', 'Color Themes'],
      logo: themebased,
      location: 'Kanyakumari, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹900 - ₹3,200 per plate'
    },
    // Event-Based Catering Vendors
    {
      id: 15,
      name: 'Event Specialists',
      businessName: 'Event Specialists Catering',
      businessCategory: 'Event-Based Catering',
      eventType: 'Event-Based Catering',
      personName: 'Pooja Mehta',
      designation: 'Event Manager',
      description: 'Specialized catering for different types of events',
      services: ['Weddings', 'Corporate Events', 'Birthday Parties', 'Anniversaries'],
      logo: eventbased,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹600 - ₹2,000 per plate'
    },
    {
      id: 16,
      name: 'Occasion Experts',
      businessName: 'Occasion Experts Catering',
      businessCategory: 'Event-Based Catering',
      eventType: 'Event-Based Catering',
      personName: 'Ramesh Kumar',
      designation: 'Event Planner',
      description: 'Customized catering solutions for every occasion',
      services: ['Engagements', 'Baby Showers', 'House Warmings', 'Festival Events'],
      logo: eventbased,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹550 - ₹1,800 per plate'
    },
    // Snack & Beverage Catering Vendors
    {
      id: 17,
      name: 'Snack Masters',
      businessName: 'Snack Masters Catering',
      businessCategory: 'Snack & Beverage Catering',
      eventType: 'Snack & Beverage Catering',
      personName: 'Suresh Reddy',
      designation: 'Snack Specialist',
      description: 'Premium snack and beverage services for all events',
      services: ['Finger Foods', 'Mocktail Bar', 'Coffee Station', 'Dessert Bar'],
      logo: snackscatering,
      location: 'Hyderabad, Telangana',
      rating: 4.6,
      priceRange: '₹300 - ₹1,000 per person'
    },
    {
      id: 18,
      name: 'Beverage Plus',
      businessName: 'Beverage Plus Catering',
      businessCategory: 'Snack & Beverage Catering',
      eventType: 'Snack & Beverage Catering',
      personName: 'Geetha Nair',
      designation: 'Beverage Manager',
      description: 'Specialized beverage and snack catering',
      services: ['Juice Bar', 'Tea/Coffee Station', 'Canapés', 'Mini Desserts'],
      logo: snackscatering,
      location: 'Trichy, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹250 - ₹900 per person'
    },
    // Special Service Catering Vendors
    {
      id: 19,
      name: 'Special Services',
      businessName: 'Special Services Catering',
      businessCategory: 'Special Service Catering',
      eventType: 'Special Service Catering',
      personName: 'Anand Kumar',
      designation: 'Service Director',
      description: 'Premium catering services with additional amenities',
      services: ['Silver Service', 'Butler Service', 'VIP Catering', 'Luxury Setup'],
      logo: specialcatering,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹1,500 - ₹5,000 per plate'
    },
    {
      id: 20,
      name: 'Elite Catering',
      businessName: 'Elite Catering Services',
      businessCategory: 'Special Service Catering',
      eventType: 'Special Service Catering',
      personName: 'Divya Sharma',
      designation: 'Premium Services Manager',
      description: 'Luxury catering for high-profile events',
      services: ['Personalized Menus', 'Celebrity Chefs', 'Gourmet Dining', 'Wine Pairing'],
      logo: specialcatering,
      location: 'Bangalore, Karnataka',
      rating: 4.8,
      priceRange: '₹2,000 - ₹6,000 per plate'
    }
  ];

  // Filter vendors based on selections
  const filteredVendors = vendors.filter(vendor => {
    if (selectedEvent && vendor.eventType !== selectedEvent) return false;
    if (selectedState && !vendor.location.includes(selectedState)) return false;
    if (selectedDistrict && !vendor.location.includes(selectedDistrict)) return false;
    if (selectedLocation && !vendor.location.toLowerCase().includes(selectedLocation.toLowerCase())) return false;
    
    // Budget filter logic
    if (minBudget || maxBudget) {
      const minPrice = parseInt(minBudget) || 0;
      const maxPrice = parseInt(maxBudget) || Infinity;
      const vendorPrice = parseInt(vendor.priceRange.replace(/[^0-9]/g, '').split('-')[0]) || 0;
      return vendorPrice >= minPrice && vendorPrice <= maxPrice;
    }
    
    return true;
  });

  // Auto change banner every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToBanner = (index) => {
    setCurrentBannerIndex(index);
  };

  const handleFilter = () => {
    console.log('Filtering...', filteredVendors.length);
    setShowMobileFilter(false);
  };

  const handleReset = () => {
    setMinBudget('');
    setMaxBudget('');
    setSelectedEvent('');
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedLocation('');
    setShowMobileFilter(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      {/* Banner Section - FULL WIDTH ON MOBILE */}
      <section className="relative w-full overflow-hidden">
        {/* Responsive height - Full width on mobile, matches home page on desktop */}
        <div className="relative h-[35vh] min-h-[250px] sm:h-[40vh] md:h-[45vh] lg:h-[600px] w-full">
          {/* Banner Images - Optimized for mobile quality */}
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentBannerIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Image Container with optimized rendering - FULL WIDTH ON MOBILE */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-500/5 to-yellow-500/5">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover md:object-cover object-contain"
                  style={{
                    objectPosition: 'center center',
                    // Optimized for mobile rendering
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    // Ensure sharp edges on mobile
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                />
              </div>
            </div>
          ))}

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

      {/* Main Categories Navigation - Mobile Responsive */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 shadow-xl py-3 sm:py-4 md:py-6 lg:py-8">
        <div className="container mx-auto px-3 md:px-4">
          <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-center">
            Browse All Wedding Services
          </h3>
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-2 md:pb-3 scrollbar-hide space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-10">
            {mainCategories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="flex flex-col items-center transition-all duration-300 flex-shrink-0 min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-2 md:border-3 lg:border-4 border-white p-0.5 md:p-1 shadow-lg md:shadow-xl lg:shadow-xl mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 transition-all duration-300 group-hover:border-yellow-300 group-hover:shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white text-center leading-tight px-1 transition-all duration-300 group-hover:text-yellow-300 group-hover:font-extrabold">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Filter Sidebar */}
      <div className="container mx-auto px-3 md:px-4 py-4 md:py-6 lg:py-8">
        {/* Mobile Filter Toggle Button - Only shows on mobile */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" />
            </svg>
            <span>{showMobileFilter ? 'Hide Filters' : 'Show Filters'}</span>
            <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${showMobileFilter ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Mobile Filter Overlay - Shows when toggle button is clicked */}
        {showMobileFilter && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end sm:items-center justify-center">
            <div className="bg-white w-full sm:max-w-md sm:mx-4 rounded-t-2xl sm:rounded-xl shadow-2xl max-h-[85vh] overflow-y-auto">
              <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200 flex justify-between items-center rounded-t-2xl sm:rounded-t-xl">
                <h3 className="text-lg sm:text-xl font-bold text-red-800">Filter Catering Services</h3>
                <button
                  onClick={() => setShowMobileFilter(false)}
                  className="text-gray-500 hover:text-red-700 p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-4">
                {/* Budget Range */}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Budget Range (₹ per plate)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={minBudget}
                      onChange={(e) => setMinBudget(e.target.value)}
                      className="w-1/2 px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxBudget}
                      onChange={(e) => setMaxBudget(e.target.value)}
                      className="w-1/2 px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Type of Catering */}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Type of Catering</label>
                  <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  >
                    <option value="">All Catering Types</option>
                    {eventTypes.map((event) => (
                      <option key={event} value={event}>{event}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred State */}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Preferred State</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  >
                    <option value="">All States</option>
                    {states.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700 mb-2">District</label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  >
                    <option value="">All Districts</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-3 pb-2">
                  <button
                    onClick={handleFilter}
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    Apply Filter
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-3 px-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
          {/* Main Content Area */}
          <div className="lg:flex-1">
            {/* Catering Categories Grid - Mobile Responsive */}
            <section className="py-3 md:py-4 lg:py-4">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-red-800 mb-4 md:mb-6 lg:mb-8">
                Our Catering Categories
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
                {cateringCategories.map((category) => (
                  <div key={category.name} className="flex flex-col items-center group">
                    <Link 
                      to={category.path}
                      className="relative block w-full aspect-square max-w-[90px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] mx-auto"
                    >
                      <div className="w-full h-full rounded-full border-2 md:border-3 border-amber-700 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-md hover:shadow-lg transition-all duration-300">
                        <img 
                          src={category.image}
                          alt={category.name} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <h3 className="mt-1.5 md:mt-2 text-center font-medium text-gray-800 text-[11px] sm:text-xs md:text-sm px-1 leading-tight">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Vendor Count and Filter Results Section - Mobile Responsive */}
            <section className="py-4 md:py-6 lg:py-8">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg md:rounded-xl shadow-md md:shadow-lg p-3 sm:p-4 md:p-4 lg:p-6 mb-4 md:mb-5 lg:mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                  <div className="text-center sm:text-left">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                      {selectedEvent ? `${filteredVendors.length} ${selectedEvent} Vendors Available` : '20 Catering Vendors Available'}
                    </h3>
                    <p className="text-yellow-200 mt-1 md:mt-2 text-xs sm:text-sm md:text-base">
                      {selectedEvent ? `Showing results for "${selectedEvent}"` : 'Browse our professional catering vendors'}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white/20 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg">
                      <span className="text-white font-semibold text-[10px] sm:text-xs md:text-sm">Price Range:</span>
                      <span className="text-yellow-300 ml-1 md:ml-2 text-[10px] sm:text-xs md:text-sm">₹250 - ₹6,000 per plate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vendor Profiles - Mobile Responsive */}
              {filteredVendors.length > 0 ? (
                <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                  {filteredVendors.map((vendor) => (
                    <div key={vendor.id} className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-gray-200 overflow-hidden hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row">
                        {/* Left Section - Logo - Mobile Responsive */}
                        <div className="md:w-1/4 p-3 sm:p-4 md:p-4 lg:p-6 flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-yellow-50">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 md:border-3 lg:border-4 border-white shadow-md md:shadow-lg mb-2 md:mb-3 lg:mb-4">
                            <img 
                              src={vendor.logo} 
                              alt={vendor.businessName} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center mb-1 md:mb-2">
                              <div className="flex items-center bg-yellow-100 px-2 sm:px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                                <span className="text-yellow-700 font-bold mr-1 text-xs sm:text-sm">{vendor.rating}</span>
                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-red-700 font-bold text-xs sm:text-sm md:text-sm lg:text-base">{vendor.priceRange}</p>
                          </div>
                        </div>

                        {/* Middle Section - Business Details - Mobile Responsive */}
                        <div className="md:w-2/4 p-3 sm:p-4 md:p-4 lg:p-6 border-t md:border-t-0 md:border-r border-gray-100">
                          <div className="mb-2 md:mb-3 lg:mb-4">
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-red-800 mb-1">{vendor.businessName}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 md:gap-3 mb-2 md:mb-3">
                              <span className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-red-100 text-red-700 rounded-full text-[10px] sm:text-xs md:text-sm font-medium mb-1 sm:mb-0 w-fit">
                                {vendor.businessCategory}
                              </span>
                              <span className="text-gray-600 flex items-center text-[10px] sm:text-xs md:text-sm">
                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {vendor.location}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-2 sm:mb-3 md:mb-3 lg:mb-4 text-xs sm:text-sm md:text-sm leading-relaxed">{vendor.description}</p>
                          
                          <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                            <div className="flex items-start sm:items-center">
                              <span className="text-gray-600 w-20 sm:w-24 md:w-32 text-[10px] sm:text-xs md:text-sm flex-shrink-0">Contact Person:</span>
                              <span className="font-medium text-gray-800 text-[10px] sm:text-xs md:text-sm">{vendor.personName}</span>
                            </div>
                            <div className="flex items-start sm:items-center">
                              <span className="text-gray-600 w-20 sm:w-24 md:w-32 text-[10px] sm:text-xs md:text-sm flex-shrink-0">Designation:</span>
                              <span className="font-medium text-gray-800 text-[10px] sm:text-xs md:text-sm">{vendor.designation}</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Section - Services - Mobile Responsive */}
                        <div className="md:w-1/4 p-3 sm:p-4 md:p-4 lg:p-6 border-t md:border-t-0 border-gray-100 bg-gray-50 md:bg-white">
                          <h4 className="font-bold text-red-700 mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 text-xs sm:text-sm md:text-base lg:text-lg">Services Offered</h4>
                          <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 mb-3 sm:mb-4 md:mb-4 lg:mb-6">
                            {vendor.services.map((service, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-green-500 mr-1 sm:mr-1.5 md:mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 text-[10px] sm:text-xs md:text-sm leading-tight">{service}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 sm:py-2.5 md:py-3 px-3 md:px-4 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center text-[11px] sm:text-xs md:text-sm">
                            <span>View Details</span>
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-1 sm:ml-1.5 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-6 md:p-8 lg:p-12 text-center">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700 mb-1 md:mb-2">No Catering Vendors Found</h3>
                  <p className="text-gray-600 mb-4 md:mb-5 lg:mb-6 text-sm md:text-base">Try adjusting your filter criteria to find more vendors</p>
                  <button 
                    onClick={handleReset}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl text-xs md:text-sm"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </section>

            {/* Why Choose Us Section - Mobile Responsive */}
            <section className="py-4 sm:py-6 md:py-8 lg:py-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-red-800 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                Why Choose Our Catering Services?
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                <div className="bg-white p-3 sm:p-4 md:p-4 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-red-100 hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 mx-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-red-700 mb-1 md:mb-2 text-center">Fresh Ingredients</h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm text-center leading-tight">Daily sourced fresh and quality ingredients</p>
                </div>
                
                <div className="bg-white p-3 sm:p-4 md:p-4 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-yellow-100 hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 mx-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-red-700 mb-1 md:mb-2 text-center">Timely Service</h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm text-center leading-tight">Punctual delivery and setup for your event</p>
                </div>
                
                <div className="bg-white p-3 sm:p-4 md:p-4 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-red-100 hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 mx-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-red-700 mb-1 md:mb-2 text-center">Expert Chefs</h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm text-center leading-tight">Experienced culinary team with diverse expertise</p>
                </div>
                
                <div className="bg-white p-3 sm:p-4 md:p-4 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-yellow-100 hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 mx-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-red-700 mb-1 md:mb-2 text-center">Customer Satisfaction</h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm text-center leading-tight">Committed to exceeding your expectations</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Filter Section - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-2xl border-2 border-red-200 p-6">
              <h3 className="text-xl lg:text-2xl font-bold text-red-800 mb-6 text-center border-b-2 border-yellow-500 pb-3">
                Filter Catering Services
              </h3>

              {/* Budget Range */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Budget Range (₹ per plate)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minBudget}
                    onChange={(e) => setMinBudget(e.target.value)}
                    className="w-1/2 px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    className="w-1/2 px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Type of Catering */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Type of Catering</label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                >
                  <option value="">All Catering Types</option>
                  {eventTypes.map((event) => (
                    <option key={event} value={event}>{event}</option>
                  ))}
                </select>
              </div>

              {/* Preferred State */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Preferred State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                >
                  <option value="">All States</option>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">District</label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                >
                  <option value="">All Districts</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Enter location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleFilter}
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                >
                  Apply Filter
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-3 px-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;