import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import album from '../assets/album.jpg';
import kids from '../assets/kids.jpg';
import videography from '../assets/videography.jpg';
import event from '../assets/event.jpg';
import weddingphoto from '../assets/weddingphoto.jpg';
import fashion from '../assets/fashion.jpg';
import commercial from '../assets/commercial.jpg';
import religious from '../assets/religious.jpg';
import photobanner1 from '../assets/photobanner1.png';
import photobanner2 from '../assets/photobanner2.png';
import photography from '../assets/photography.jpg';
import catering from '../assets/catering.jpg';
import weddinghalls from '../assets/weddinghalls.jpg';
import decoration from '../assets/decoration.jpg';
import invitation from '../assets/invitation.jpg';
import makeup from '../assets/makeup.jpg';
import entertainment from '../assets/entertainment.jpg';

const Photography = () => {
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
      image: photobanner1,
      title: "Photography Services",
      subtitle: "Capture Your Special Moments"
    },
    {
      id: 2,
      image: photobanner2,
      title: "Professional Photography",
      subtitle: "Timeless Memories Forever"
    }
  ];

  const mainCategories = [
    { name: 'Photography', path: '/photography' },
    { name: 'Catering & Foods', path: '/catering' },
    { name: 'Wedding Halls', path: '/wedding-halls' },
    { name: 'Decorations', path: '/decorations' },
    { name: 'Entertainment', path: '/entertainment' },
    { name: 'Invitation & Gifts', path: '/invitation' },
    { name: 'Bridal Styling', path: '/styling' },
  ];

  const photographyCategories = [
    { name: 'Wedding Photography', path: '/photography/wedding-photography', image: weddingphoto },
    { name: 'Event Photography', path: '/photography/event-photography', image: event },
    { name: 'Videography', path: '/photography/videography', image: videography },
    { name: 'Editing & Album Services', path: '/photography/album-services', image: album },
    { name: 'Fashion & Lifestyle', path: '/photography/fashion', image: fashion },
    { name: 'Commercial Photography', path: '/photography/commercial', image: commercial },
    { name: 'Religious & Cultural', path: '/photography/religious', image: religious },
    { name: 'Kids & Special Shoots', path: '/photography/kids', image: kids },
  ];

  const eventTypes = [
    'Wedding Photography',
    'Event Photography',
    'Videography',
    'Editing & Album Services',
    'Fashion & Lifestyle',
    'Commercial Photography',
    'Religious & Cultural Photography',
    'Kids & Special Shoots'
  ];

  const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'];
  const districts = ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy'];

  // Sample vendor data - 2 vendors for each event type
  const vendors = [
    // Wedding Photography Vendors
    {
      id: 1,
      name: 'Capture Moments Studio',
      businessName: 'Capture Moments Wedding Photography',
      businessCategory: 'Wedding Photography',
      eventType: 'Wedding Photography',
      personName: 'Rajesh Kumar',
      designation: 'Lead Photographer',
      description: 'Specializing in candid wedding photography with 10+ years of experience',
      services: ['Pre-wedding Shoots', 'Candid Photography', 'Traditional Wedding Coverage', 'Album Design'],
      logo: weddingphoto,
      location: 'Chennai, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹50,000 - ₹2,00,000'
    },
    {
      id: 2,
      name: 'Evergreen Memories',
      businessName: 'Evergreen Wedding Photography',
      businessCategory: 'Wedding Photography',
      eventType: 'Wedding Photography',
      personName: 'Priya Sharma',
      designation: 'Creative Director',
      description: 'Documenting love stories with artistic vision and modern techniques',
      services: ['Destination Weddings', 'Drone Photography', 'Cinematic Videos', 'Photo Booths'],
      logo: weddingphoto,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹75,000 - ₹3,00,000'
    },
    // Event Photography Vendors
    {
      id: 3,
      name: 'Event Masters Pro',
      businessName: 'Event Masters Photography',
      businessCategory: 'Event Photography',
      eventType: 'Event Photography',
      personName: 'Arun Mehta',
      designation: 'Event Photographer',
      description: 'Professional event coverage for corporate and social events',
      services: ['Corporate Events', 'Birthday Parties', 'Product Launches', 'Conferences'],
      logo: event,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹25,000 - ₹1,50,000'
    },
    {
      id: 4,
      name: 'Celebration Shots',
      businessName: 'Celebration Photography Services',
      businessCategory: 'Event Photography',
      eventType: 'Event Photography',
      personName: 'Sneha Reddy',
      designation: 'Event Manager',
      description: 'Capturing the essence of every celebration with precision',
      services: ['Anniversary Events', 'Festival Celebrations', 'Award Functions', 'Social Gatherings'],
      logo: event,
      location: 'Hyderabad, Telangana',
      rating: 4.6,
      priceRange: '₹20,000 - ₹1,00,000'
    },
    // Videography Vendors
    {
      id: 5,
      name: 'Motion Picture Studio',
      businessName: 'Motion Picture Videography',
      businessCategory: 'Videography',
      eventType: 'Videography',
      personName: 'Vikram Singh',
      designation: 'Videography Director',
      description: 'Creating cinematic wedding films and corporate videos',
      services: ['Wedding Films', 'Corporate Videos', 'Documentaries', 'Promotional Videos'],
      logo: videography,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹1,00,000 - ₹5,00,000'
    },
    {
      id: 6,
      name: 'Visual Storytellers',
      businessName: 'Visual Storytellers Studio',
      businessCategory: 'Videography',
      eventType: 'Videography',
      personName: 'Anjali Nair',
      designation: 'Creative Producer',
      description: 'Story-driven video production for memorable occasions',
      services: ['Short Films', 'Event Coverage', 'Music Videos', 'Animation Videos'],
      logo: videography,
      location: 'Kochi, Kerala',
      rating: 4.8,
      priceRange: '₹80,000 - ₹4,00,000'
    },
    // Editing & Album Services Vendors
    {
      id: 7,
      name: 'Pixel Perfect Editing',
      businessName: 'Pixel Perfect Photo Studio',
      businessCategory: 'Editing & Album Services',
      eventType: 'Editing & Album Services',
      personName: 'Rahul Verma',
      designation: 'Photo Editor',
      description: 'Professional photo editing and custom album design services',
      services: ['Photo Retouching', 'Album Design', 'Photo Restoration', 'Digital Artwork'],
      logo: album,
      location: 'Madurai, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹10,000 - ₹50,000'
    },
    {
      id: 8,
      name: 'Memory Albums',
      businessName: 'Memory Album Creators',
      businessCategory: 'Editing & Album Services',
      eventType: 'Editing & Album Services',
      personName: 'Meera Patel',
      designation: 'Album Designer',
      description: 'Creating beautiful photo albums that tell your story',
      services: ['Custom Albums', 'Photo Books', 'Digital Albums', 'Coffee Table Books'],
      logo: album,
      location: 'Ahmedabad, Gujarat',
      rating: 4.6,
      priceRange: '₹15,000 - ₹75,000'
    },
    // Fashion & Lifestyle Vendors
    {
      id: 9,
      name: 'Style Frame Studio',
      businessName: 'Style Frame Fashion Photography',
      businessCategory: 'Fashion & Lifestyle',
      eventType: 'Fashion & Lifestyle',
      personName: 'Aisha Khan',
      designation: 'Fashion Photographer',
      description: 'Specializing in fashion editorial and lifestyle photography',
      services: ['Fashion Shoots', 'Portfolio Photography', 'Lookbook Creation', 'Model Portfolios'],
      logo: fashion,
      location: 'Mumbai, Maharashtra',
      rating: 4.9,
      priceRange: '₹50,000 - ₹3,00,000'
    },
    {
      id: 10,
      name: 'Urban Lifestyle',
      businessName: 'Urban Lifestyle Photography',
      businessCategory: 'Fashion & Lifestyle',
      eventType: 'Fashion & Lifestyle',
      personName: 'Kabir Malhotra',
      designation: 'Creative Director',
      description: 'Contemporary lifestyle and urban photography',
      services: ['Street Photography', 'Lifestyle Brands', 'E-commerce Photography', 'Personal Branding'],
      logo: fashion,
      location: 'Delhi, Delhi',
      rating: 4.8,
      priceRange: '₹40,000 - ₹2,50,000'
    },
    // Commercial Photography Vendors
    {
      id: 11,
      name: 'Business Lens',
      businessName: 'Business Lens Commercial Photography',
      businessCategory: 'Commercial Photography',
      eventType: 'Commercial Photography',
      personName: 'Sanjay Gupta',
      designation: 'Commercial Photographer',
      description: 'Professional commercial photography for businesses',
      services: ['Product Photography', 'Architecture', 'Food Photography', 'Corporate Headshots'],
      logo: commercial,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹30,000 - ₹2,00,000'
    },
    {
      id: 12,
      name: 'Brand Visuals',
      businessName: 'Brand Visuals Studio',
      businessCategory: 'Commercial Photography',
      eventType: 'Commercial Photography',
      personName: 'Neha Joshi',
      designation: 'Brand Photographer',
      description: 'Creating compelling visual content for brands',
      services: ['Brand Campaigns', 'Advertising Photography', 'Packaging Shots', 'Corporate Events'],
      logo: commercial,
      location: 'Pune, Maharashtra',
      rating: 4.8,
      priceRange: '₹50,000 - ₹3,00,000'
    },
    // Religious & Cultural Photography Vendors
    {
      id: 13,
      name: 'Cultural Heritage',
      businessName: 'Cultural Heritage Photography',
      businessCategory: 'Religious & Cultural',
      eventType: 'Religious & Cultural Photography',
      personName: 'Venkatesh Iyer',
      designation: 'Cultural Photographer',
      description: 'Documenting religious ceremonies and cultural events',
      services: ['Temple Festivals', 'Religious Ceremonies', 'Cultural Events', 'Traditional Rituals'],
      logo: religious,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹25,000 - ₹1,50,000'
    },
    {
      id: 14,
      name: 'Divine Moments',
      businessName: 'Divine Moments Photography',
      businessCategory: 'Religious & Cultural',
      eventType: 'Religious & Cultural Photography',
      personName: 'Radha Krishnan',
      designation: 'Religious Event Specialist',
      description: 'Specializing in religious event photography with respect and devotion',
      services: ['Pujas', 'Religious Processions', 'Temple Events', 'Spiritual Gatherings'],
      logo: religious,
      location: 'Kanyakumari, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹20,000 - ₹1,00,000'
    },
    // Kids & Special Shoots Vendors
    {
      id: 15,
      name: 'Little Angels',
      businessName: 'Little Angels Photography',
      businessCategory: 'Kids & Special Shoots',
      eventType: 'Kids & Special Shoots',
      personName: 'Pooja Mehta',
      designation: 'Children Photographer',
      description: 'Creating magical memories for children and families',
      services: ['Newborn Photography', 'Birthday Shoots', 'Family Portraits', 'Baby Showers'],
      logo: kids,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹15,000 - ₹80,000'
    },
    {
      id: 16,
      name: 'Special Moments',
      businessName: 'Special Moments Studio',
      businessCategory: 'Kids & Special Shoots',
      eventType: 'Kids & Special Shoots',
      personName: 'David Wilson',
      designation: 'Special Shoots Director',
      description: 'Specialized photography for unique occasions and celebrations',
      services: ['Maternity Shoots', 'Pet Photography', 'Anniversary Shoots', 'Surprise Events'],
      logo: kids,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹20,000 - ₹1,00,000'
    }
  ];

  // Filter vendors based on selections
  const filteredVendors = vendors.filter(vendor => {
    if (selectedEvent && vendor.eventType !== selectedEvent) return false;
    if (selectedState && !vendor.location.includes(selectedState)) return false;
    if (selectedDistrict && !vendor.location.includes(selectedDistrict)) return false;
    if (selectedLocation && !vendor.location.toLowerCase().includes(selectedLocation.toLowerCase())) return false;
    
    // Budget filter logic (simplified)
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
    // Filter logic already handled by filteredVendors
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
      {/* Banner Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] w-full">
          {/* Banner Images */}
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentBannerIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-500/5 to-yellow-500/5">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center center',
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                  }}
                />
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={() => goToBanner(currentBannerIndex === 0 ? banners.length - 1 : currentBannerIndex - 1)}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full transition-all duration-300 z-20"
            aria-label="Previous banner"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => goToBanner(currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1)}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full transition-all duration-300 z-20"
            aria-label="Next banner"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Main Categories Navigation */}
      <div className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 shadow-md py-2 md:py-3">
        <div className="container mx-auto px-2 md:px-4">
          <h3 className="text-white text-xs sm:text-sm md:text-lg font-bold mb-2 md:mb-3 text-center">
            Browse All Wedding Services
          </h3>
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-1 scrollbar-hide gap-1.5 md:gap-3">
            {mainCategories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="flex-shrink-0 transition-all duration-300 group"
              >
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-1.5 md:py-2.5 px-2.5 md:px-5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-[10px] md:text-sm whitespace-nowrap border border-white/20 hover:border-yellow-300">
                  {category.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Filter Sidebar */}
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-4 lg:py-6">
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-2">
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-3 rounded-md font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center text-xs"
          >
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>{showMobileFilter ? 'Hide Filters' : 'Show Filters'}</span>
            <svg className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${showMobileFilter ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Mobile Filter Overlay */}
        {showMobileFilter && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end sm:items-center justify-center">
            <div className="bg-white w-full sm:max-w-md sm:mx-4 rounded-t-xl sm:rounded-lg shadow-2xl max-h-[80vh] overflow-y-auto">
              <div className="sticky top-0 bg-white z-10 p-3 border-b border-gray-200 flex justify-between items-center rounded-t-xl sm:rounded-t-lg">
                <h3 className="text-sm sm:text-base font-bold text-red-800">Filter Photographers</h3>
                <button
                  onClick={() => setShowMobileFilter(false)}
                  className="text-gray-500 hover:text-red-700 p-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-3">
                {/* Budget Range */}
                <div className="mb-3">
                  <label className="block text-xs font-bold text-gray-700 mb-1">Budget Range (₹)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={minBudget}
                      onChange={(e) => setMinBudget(e.target.value)}
                      className="w-1/2 px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-xs"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxBudget}
                      onChange={(e) => setMaxBudget(e.target.value)}
                      className="w-1/2 px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-xs"
                    />
                  </div>
                </div>

                {/* Type of Event */}
                <div className="mb-3">
                  <label className="block text-xs font-bold text-gray-700 mb-1">Type of Event</label>
                  <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="w-full px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-xs"
                  >
                    <option value="">All Event Types</option>
                    {eventTypes.map((event) => (
                      <option key={event} value={event}>{event}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred State */}
                <div className="mb-3">
                  <label className="block text-xs font-bold text-gray-700 mb-1">Preferred State</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-xs"
                  >
                    <option value="">All States</option>
                    {states.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div className="mb-3">
                  <label className="block text-xs font-bold text-gray-700 mb-1">District</label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-xs"
                  >
                    <option value="">All Districts</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div className="mb-3">
                  <label className="block text-xs font-bold text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-xs"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handleFilter}
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-3 rounded-md font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-sm hover:shadow-md text-xs"
                  >
                    Apply Filter
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-2 px-3 rounded-md font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-sm hover:shadow-md text-xs"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-6">
          {/* Main Content Area */}
          <div className="lg:flex-1">
            {/* Photography Categories Grid */}
            <section className="py-2 md:py-4">
              <h2 className="text-sm md:text-xl font-bold text-center text-red-800 mb-2 md:mb-5">
                Our Photography Categories
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-2 md:gap-4">
                {photographyCategories.map((category) => (
                  <div key={category.name} className="flex flex-col items-center group">
                    <Link 
                      to={category.path}
                      className="relative block w-full aspect-square max-w-[70px] sm:max-w-[85px] md:max-w-[120px] mx-auto"
                    >
                      <div className="w-full h-full rounded-full border-2 border-amber-700 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-sm hover:shadow-md transition-all duration-300">
                        <img 
                          src={category.image}
                          alt={category.name} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <h3 className="mt-1 md:mt-2 text-center font-medium text-gray-800 text-[9px] sm:text-[10px] md:text-sm px-0.5 leading-tight">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Vendor Count and Filter Results Section */}
            <section className="py-2 md:py-6">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-md shadow-md p-2 md:p-4 mb-2 md:mb-5">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-1.5 md:gap-2">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xs sm:text-sm md:text-lg font-bold text-white">
                      {selectedEvent ? `${filteredVendors.length} ${selectedEvent} Vendors Available` : '16 Photography Vendors Available'}
                    </h3>
                    <p className="text-yellow-200 mt-0.5 text-[9px] md:text-xs">
                      {selectedEvent ? `Showing results for "${selectedEvent}"` : 'Browse our professional photography vendors'}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white/20 px-2 md:px-3 py-0.5 md:py-1 rounded-md">
                      <span className="text-white font-medium text-[9px] md:text-xs">Price Range:</span>
                      <span className="text-yellow-300 ml-1 text-[9px] md:text-xs">₹5,000 - ₹5,00,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vendor Profiles */}
              {filteredVendors.length > 0 ? (
                <div className="space-y-2 md:space-y-5">
                  {filteredVendors.map((vendor) => (
                    <div key={vendor.id} className="bg-white rounded-md shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row">
                        {/* Left Section - Logo (Desktop Only) */}
                        <div className="hidden md:flex md:w-1/4 p-4 flex-col items-center justify-center bg-gradient-to-br from-red-50 to-yellow-50">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md mb-2">
                            <img 
                              src={vendor.logo} 
                              alt={vendor.businessName} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center mb-1">
                              <div className="flex items-center bg-yellow-100 px-2 py-0.5 rounded-full">
                                <span className="text-yellow-700 font-bold mr-0.5 text-xs">{vendor.rating}</span>
                                <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-red-700 font-medium text-sm">{vendor.priceRange}</p>
                          </div>
                        </div>

                        {/* Middle Section - Business Details & Services (Mobile: Stacked, Desktop: Full Width) */}
                        <div className="md:w-2/4 md:p-4 md:border-r border-gray-100">
                          {/* Mobile Layout - Three sections */}
                          <div className="md:hidden">
                            {/* Top Section - Logo/Rating/Price LEFT + Services RIGHT */}
                            <div className="flex border-b border-gray-200">
                              {/* Left Half - Logo, Rating, Price */}
                              <div className="w-1/2 p-2.5 flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-yellow-50 border-r border-gray-200">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mb-1.5">
                                  <img 
                                    src={vendor.logo} 
                                    alt={vendor.businessName} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex items-center bg-yellow-100 px-2 py-0.5 rounded-full mb-1">
                                  <span className="text-yellow-700 font-bold mr-0.5 text-[10px]">{vendor.rating}</span>
                                  <svg className="w-2.5 h-2.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                                <p className="text-red-700 font-bold text-[10px] text-center">{vendor.priceRange}</p>
                              </div>

                              {/* Right Half - Services */}
                              <div className="w-1/2 p-2.5 bg-white">
                                <h4 className="font-bold text-red-700 mb-1.5 text-[11px]">Services Offered</h4>
                                <ul className="space-y-1">
                                  {vendor.services.map((service, index) => (
                                    <li key={index} className="flex items-start">
                                      <svg className="w-2 h-2 text-green-500 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span className="text-gray-700 text-[8px] leading-tight">{service}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Middle Section - Business Details (Full Width) */}
                            <div className="w-full p-2.5 bg-white relative">
                              {/* Business Name */}
                              <h3 className="text-xs font-bold text-red-800 mb-1 leading-tight">{vendor.businessName}</h3>
                              
                              {/* Category Badge */}
                              <span className="inline-block px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-[9px] font-medium mb-1.5">
                                {vendor.businessCategory}
                              </span>
                              
                              {/* Location */}
                              <div className="text-gray-600 flex items-start text-[9px] mb-1.5">
                                <svg className="w-2.5 h-2.5 mr-0.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="leading-tight">{vendor.location}</span>
                              </div>
                              
                              {/* Description */}
                              <p className="text-gray-700 mb-1.5 text-[9px] leading-relaxed pr-20">{vendor.description}</p>
                              
                              {/* Contact Details */}
                              <div className="space-y-0.5 text-[9px] mb-2">
                                <div className="flex items-start">
                                  <span className="text-gray-600 w-20 flex-shrink-0">Contact Person:</span>
                                  <span className="font-medium text-gray-800 leading-tight">{vendor.personName}</span>
                                </div>
                                <div className="flex items-start">
                                  <span className="text-gray-600 w-20 flex-shrink-0">Role:</span>
                                  <span className="font-medium text-gray-800 leading-tight">{vendor.designation}</span>
                                </div>
                              </div>

                              {/* View Details Button - Bottom Right Corner */}
                              <button className="absolute bottom-2 right-2 bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 px-3 rounded-md font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center text-[9px]">
                                <span>View Details</span>
                                <svg className="w-2.5 h-2.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* Desktop Layout - Original */}
                          <div className="hidden md:block">
                            <div className="mb-2">
                              <h3 className="text-base font-bold text-red-800 mb-0.5">{vendor.businessName}</h3>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium mb-0.5 sm:mb-0 w-fit">
                                  {vendor.businessCategory}
                                </span>
                                <span className="text-gray-600 flex items-center text-xs">
                                  <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  {vendor.location}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-gray-700 mb-2 text-xs leading-relaxed">{vendor.description}</p>
                            
                            <div className="space-y-0.5">
                              <div className="flex items-start sm:items-center">
                                <span className="text-gray-600 w-24 text-xs flex-shrink-0">Contact Person:</span>
                                <span className="font-medium text-gray-800 text-xs">{vendor.personName}</span>
                              </div>
                              <div className="flex items-start sm:items-center">
                                <span className="text-gray-600 w-24 text-xs flex-shrink-0">Designation:</span>
                                <span className="font-medium text-gray-800 text-xs">{vendor.designation}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Section - Services (Desktop Only) */}
                        <div className="hidden md:block md:w-1/4 p-4 bg-white">
                          <h4 className="font-bold text-red-700 mb-2 text-base">Services Offered</h4>
                          <ul className="space-y-1 mb-3">
                            {vendor.services.map((service, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 text-xs leading-tight">{service}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2.5 px-3 rounded-md font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center text-xs">
                            <span>View Details</span>
                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-md shadow-md p-4 md:p-8 text-center">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400 mx-auto mb-2 md:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-sm md:text-lg font-bold text-gray-700 mb-1">No Vendors Found</h3>
                  <p className="text-gray-600 mb-3 text-xs md:text-sm">Try adjusting your filter criteria to find more vendors</p>
                  <button 
                    onClick={handleReset}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 md:py-2 px-3 md:px-4 rounded-md font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg text-xs"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </section>

            {/* Why Choose Us Section */}
            <section className="py-2 md:py-8">
              <h2 className="text-sm md:text-2xl font-bold text-center text-red-800 mb-2 md:mb-6">
                Why Choose Our Photography Services?
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                <div className="bg-white p-2 md:p-4 rounded-md shadow-md border border-red-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-1 md:mb-3 mx-auto">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[10px] md:text-base text-red-700 mb-0.5 md:mb-1 text-center">Professional Equipment</h3>
                  <p className="text-gray-600 text-[9px] md:text-xs text-center leading-tight">High-end cameras and latest technology</p>
                </div>
                
                <div className="bg-white p-2 md:p-4 rounded-md shadow-md border border-yellow-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-1 md:mb-3 mx-auto">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[10px] md:text-base text-red-700 mb-0.5 md:mb-1 text-center">Timely Delivery</h3>
                  <p className="text-gray-600 text-[9px] md:text-xs text-center leading-tight">Quick turnaround without compromising quality</p>
                </div>
                
                <div className="bg-white p-2 md:p-4 rounded-md shadow-md border border-red-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-1 md:mb-3 mx-auto">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[10px] md:text-base text-red-700 mb-0.5 md:mb-1 text-center">Experienced Team</h3>
                  <p className="text-gray-600 text-[9px] md:text-xs text-center leading-tight">Years of expertise in wedding photography</p>
                </div>
                
                <div className="bg-white p-2 md:p-4 rounded-md shadow-md border border-yellow-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-1 md:mb-3 mx-auto">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[10px] md:text-base text-red-700 mb-0.5 md:mb-1 text-center">Customer Satisfaction</h3>
                  <p className="text-gray-600 text-[9px] md:text-xs text-center leading-tight">Dedicated to exceeding expectations</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Filter Section - Desktop Only */}
          <div className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-20 bg-white rounded-lg shadow-lg border border-red-200 p-4">
              <h3 className="text-lg font-bold text-red-800 mb-4 text-center border-b border-yellow-500 pb-2">
                Filter Photographers
              </h3>

              {/* Budget Range */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 mb-1">Budget Range (₹)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minBudget}
                    onChange={(e) => setMinBudget(e.target.value)}
                    className="w-1/2 px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    className="w-1/2 px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Type of Event */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 mb-1">Type of Event</label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                >
                  <option value="">All Event Types</option>
                  {eventTypes.map((event) => (
                    <option key={event} value={event}>{event}</option>
                  ))}
                </select>
              </div>

              {/* Preferred State */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 mb-1">Preferred State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                >
                  <option value="">All States</option>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 mb-1">District</label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                >
                  <option value="">All Districts</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  placeholder="Enter location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleFilter}
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-3 rounded-md font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-sm hover:shadow-md text-xs"
                >
                  Apply Filter
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-2 px-3 rounded-md font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-sm hover:shadow-md text-xs"
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

export default Photography;
