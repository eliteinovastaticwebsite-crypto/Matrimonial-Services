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
  };

  const handleReset = () => {
    setMinBudget('');
    setMaxBudget('');
    setSelectedEvent('');
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedLocation('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      {/* Banner Section */}
      <section className="relative h-[600px] overflow-hidden">
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}

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

        <button
          onClick={() => goToBanner(currentBannerIndex === 0 ? banners.length - 1 : currentBannerIndex - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all duration-300"
          aria-label="Previous banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => goToBanner(currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all duration-300"
          aria-label="Next banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Main Categories Navigation */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 shadow-xl py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-white text-2xl font-bold mb-6 text-center">
            Browse All Wedding Services
          </h3>
          <div className="flex items-center justify-center overflow-x-auto pb-3 scrollbar-hide space-x-10">
            {mainCategories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="flex flex-col items-center transition-all duration-300 flex-shrink-0 min-w-[120px] group"
              >
                <div className="w-32 h-32 rounded-full border-4 border-white p-1 shadow-xl mb-4 transition-all duration-300 group-hover:border-yellow-300 group-hover:shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <span className="text-base font-bold text-white text-center leading-tight px-1 transition-all duration-300 group-hover:text-yellow-300 group-hover:font-extrabold">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Filter Sidebar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:flex-1">
            {/* Catering Categories Grid */}
            <section className="py-4">
              <h2 className="text-2xl font-bold text-center text-red-800 mb-8">
                Our Catering Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cateringCategories.map((category) => (
                  <div key={category.name} className="flex flex-col items-center group">
                    <Link 
                      to={category.path}
                      className="relative block w-full aspect-square max-w-[150px] mx-auto"
                    >
                      <div className="w-full h-full rounded-full border-2 border-amber-700 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-md hover:shadow-lg transition-all duration-300">
                        <img 
                          src={category.image}
                          alt={category.name} 
                          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <h3 className="mt-2 text-center font-medium text-gray-800 text-sm px-1">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Vendor Count and Filter Results Section */}
            <section className="py-8">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg p-6 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">
                      {selectedEvent ? `${filteredVendors.length} ${selectedEvent} Vendors Available` : '20 Catering Vendors Available'}
                    </h3>
                    <p className="text-yellow-200 mt-2">
                      {selectedEvent ? `Showing results for "${selectedEvent}"` : 'Browse our professional catering vendors'}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <span className="text-white font-semibold">Price Range:</span>
                      <span className="text-yellow-300 ml-2">₹300 - ₹6,000 per plate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vendor Profiles */}
              {filteredVendors.length > 0 ? (
                <div className="space-y-6">
                  {filteredVendors.map((vendor) => (
                    <div key={vendor.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row">
                        {/* Left Section - Logo */}
                        <div className="md:w-1/4 p-6 flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-yellow-50">
                          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                            <img 
                              src={vendor.logo} 
                              alt={vendor.businessName} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                              <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                                <span className="text-yellow-700 font-bold mr-1">{vendor.rating}</span>
                                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-red-700 font-bold">{vendor.priceRange}</p>
                          </div>
                        </div>

                        {/* Middle Section - Business Details */}
                        <div className="md:w-2/4 p-6 border-r border-gray-100">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-red-800 mb-1">{vendor.businessName}</h3>
                            <div className="flex items-center space-x-4 mb-3">
                              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                {vendor.businessCategory}
                              </span>
                              <span className="text-gray-600 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {vendor.location}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4">{vendor.description}</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="text-gray-600 w-32">Contact Person:</span>
                              <span className="font-medium text-gray-800">{vendor.personName}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-gray-600 w-32">Designation:</span>
                              <span className="font-medium text-gray-800">{vendor.designation}</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Section - Services */}
                        <div className="md:w-1/4 p-6">
                          <h4 className="font-bold text-red-700 mb-4 text-lg">Services Offered</h4>
                          <ul className="space-y-2 mb-6">
                            {vendor.services.map((service, index) => (
                              <li key={index} className="flex items-center">
                                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">{service}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                            <span>View Details</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No Catering Vendors Found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your filter criteria to find more vendors</p>
                  <button 
                    onClick={handleReset}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12">
              <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
                Why Choose Our Catering Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Fresh Ingredients</h3>
                  <p className="text-gray-600 text-center">Daily sourced fresh and quality ingredients</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Timely Service</h3>
                  <p className="text-gray-600 text-center">Punctual delivery and setup for your event</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Expert Chefs</h3>
                  <p className="text-gray-600 text-center">Experienced culinary team with diverse expertise</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Customer Satisfaction</h3>
                  <p className="text-gray-600 text-center">Committed to exceeding your expectations</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Filter Section */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-2xl border-2 border-red-200 p-6">
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center border-b-2 border-yellow-500 pb-3">
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
                    className="w-1/2 px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    className="w-1/2 px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Type of Catering */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Type of Catering</label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleFilter}
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Apply Filter
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-3 px-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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