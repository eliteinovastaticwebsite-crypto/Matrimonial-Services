import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import weddingmc from '../assets/weddingmc.jpg';
import dj from '../assets/dj.jpg';
import danceshow from '../assets/danceshow.jpg';
import livemusic from '../assets/livemusic.jpg';
import photobooth from '../assets/photobooth.jpg';
import ledeffects from '../assets/ledeffects.jpg';
import kidsentertainment from '../assets/kidsentertainment.jpg';
import photography from '../assets/photography.jpg';
import catering from '../assets/catering.jpg';
import weddinghalls from '../assets/weddinghalls.jpg';
import decoration from '../assets/decoration.jpg';
import invitation from '../assets/invitation.jpg';
import makeup from '../assets/makeup.jpg';
import entertainment from '../assets/entertainment.jpg';
import entertainmentbanner1 from '../assets/ledeffects.jpg';
import entertainmentbanner2 from '../assets/ledeffects.jpg';

const Entertainment = () => {
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
      image: entertainmentbanner1,
      title: "Entertainment Services",
      subtitle: "Make Your Event Unforgettable"
    },
    {
      id: 2,
      image: entertainmentbanner2,
      title: "Premium Entertainment",
      subtitle: "Create Magical Experiences"
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

  const entertainmentCategories = [
    { name: 'Wedding MCs', path: '/entertainment/wedding-mc', image: weddingmc },
    { name: 'DJ & Remix', path: '/entertainment/dj-remix', image: dj },
    { name: 'Dance Shows', path: '/entertainment/dance-shows', image: danceshow },
    { name: 'Live Music', path: '/entertainment/live-music', image: livemusic },
    { name: 'Photo Booths', path: '/entertainment/photo-booths', image: photobooth },
    { name: 'LED Effects', path: '/entertainment/led-effects', image: ledeffects },
    { name: 'Kids Entertainment', path: '/entertainment/kids-entertainment', image: kidsentertainment },
  ];

  const eventTypes = [
    'Wedding MCs',
    'DJ & Remix',
    'Dance Shows',
    'Live Music',
    'Photo Booths',
    'LED Effects',
    'Kids Entertainment'
  ];

  const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'];
  const districts = ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy'];

  // Sample vendor data - 2 vendors for each entertainment type
  const vendors = [
    // Wedding MCs Vendors
    {
      id: 1,
      name: 'Master of Ceremonies',
      businessName: 'Master of Ceremonies Entertainment',
      businessCategory: 'Wedding MCs',
      eventType: 'Wedding MCs',
      personName: 'Rajesh Kumar',
      designation: 'Lead MC',
      description: 'Professional wedding MC with 10+ years experience in hosting memorable wedding events',
      services: ['Wedding Hosting', 'Event Coordination', 'Audience Engagement', 'Script Writing', 'Bilingual MC'],
      logo: weddingmc,
      location: 'Chennai, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹20,000 - ₹1,00,000'
    },
    {
      id: 2,
      name: 'Celebration Hosts',
      businessName: 'Celebration Hosts MC Services',
      businessCategory: 'Wedding MCs',
      eventType: 'Wedding MCs',
      personName: 'Priya Sharma',
      designation: 'Wedding Host',
      description: 'Energetic and engaging MC services for weddings and special celebrations',
      services: ['Traditional Weddings', 'Modern Events', 'Interactive Games', 'Guest Management', 'Multilingual Hosting'],
      logo: weddingmc,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹25,000 - ₹1,20,000'
    },
    // DJ & Remix Vendors
    {
      id: 3,
      name: 'Sound Waves DJ',
      businessName: 'Sound Waves DJ Entertainment',
      businessCategory: 'DJ & Remix',
      eventType: 'DJ & Remix',
      personName: 'Arun Mehta',
      designation: 'Head DJ',
      description: 'Professional DJ services with latest music collection and state-of-the-art equipment',
      services: ['Wedding Mixes', 'Bollywood Remixes', 'International Music', 'Sound System Setup', 'Light Effects'],
      logo: dj,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹15,000 - ₹80,000'
    },
    {
      id: 4,
      name: 'Beat Masters',
      businessName: 'Beat Masters DJ Services',
      businessCategory: 'DJ & Remix',
      eventType: 'DJ & Remix',
      personName: 'Sneha Reddy',
      designation: 'DJ Specialist',
      description: 'Creating perfect party atmosphere with custom music mixes and professional DJing',
      services: ['Custom Playlists', 'Live Mixing', 'Karaoke Setup', 'Wireless Mic System', 'Party Music'],
      logo: dj,
      location: 'Hyderabad, Telangana',
      rating: 4.6,
      priceRange: '₹12,000 - ₹75,000'
    },
    // Dance Shows Vendors
    {
      id: 5,
      name: 'Dance Express',
      businessName: 'Dance Express Performances',
      businessCategory: 'Dance Shows',
      eventType: 'Dance Shows',
      personName: 'Vikram Singh',
      designation: 'Dance Director',
      description: 'Professional dance performances for weddings and special events with trained artists',
      services: ['Bollywood Dance', 'Traditional Dances', 'Fusion Performances', 'Group Dances', 'Solo Performances'],
      logo: danceshow,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹25,000 - ₹1,50,000'
    },
    {
      id: 6,
      name: 'Rhythm Masters',
      businessName: 'Rhythm Masters Dance Troupe',
      businessCategory: 'Dance Shows',
      eventType: 'Dance Shows',
      personName: 'Anjali Nair',
      designation: 'Choreographer',
      description: 'Energetic dance performances that add glamour and excitement to your celebrations',
      services: ['Themed Performances', 'Classical Dances', 'Contemporary Dance', 'Interactive Performances', 'Costume Design'],
      logo: danceshow,
      location: 'Kochi, Kerala',
      rating: 4.8,
      priceRange: '₹20,000 - ₹1,20,000'
    },
    // Live Music Vendors
    {
      id: 7,
      name: 'Melody Makers',
      businessName: 'Melody Makers Live Music',
      businessCategory: 'Live Music',
      eventType: 'Live Music',
      personName: 'Rahul Verma',
      designation: 'Music Director',
      description: 'Live musical performances with professional singers and instrumentalists',
      services: ['Live Singing', 'Instrumental Music', 'Band Performances', 'Classical Music', 'Fusion Music'],
      logo: livemusic,
      location: 'Madurai, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹30,000 - ₹2,00,000'
    },
    {
      id: 8,
      name: 'Harmony Ensemble',
      businessName: 'Harmony Ensemble Music Group',
      businessCategory: 'Live Music',
      eventType: 'Live Music',
      personName: 'Meera Patel',
      designation: 'Lead Vocalist',
      description: 'Creating beautiful musical ambiance with live performances for special occasions',
      services: ['Wedding Songs', 'Background Music', 'Cultural Music', 'Western Music', 'Custom Compositions'],
      logo: livemusic,
      location: 'Ahmedabad, Gujarat',
      rating: 4.6,
      priceRange: '₹25,000 - ₹1,80,000'
    },
    // Photo Booths Vendors
    {
      id: 9,
      name: 'Snap Happy',
      businessName: 'Snap Happy Photo Booth',
      businessCategory: 'Photo Booths',
      eventType: 'Photo Booths',
      personName: 'Aisha Khan',
      designation: 'Booth Manager',
      description: 'Fun and interactive photo booth services for weddings and events with instant prints',
      services: ['Instant Prints', 'Custom Backdrops', 'Props Collection', 'Digital Copies', 'Social Media Sharing'],
      logo: photobooth,
      location: 'Mumbai, Maharashtra',
      rating: 4.9,
      priceRange: '₹10,000 - ₹50,000'
    },
    {
      id: 10,
      name: 'Memory Booth',
      businessName: 'Memory Booth Services',
      businessCategory: 'Photo Booths',
      eventType: 'Photo Booths',
      personName: 'Kabir Malhotra',
      designation: 'Photo Booth Specialist',
      description: 'Creating memorable photo experiences with themed booths and instant sharing options',
      services: ['360° Video Booth', 'GIF Booth', 'Green Screen', 'Custom Themes', 'Online Gallery'],
      logo: photobooth,
      location: 'Delhi, Delhi',
      rating: 4.8,
      priceRange: '₹12,000 - ₹60,000'
    },
    // LED Effects Vendors
    {
      id: 11,
      name: 'Light Magic',
      businessName: 'Light Magic LED Effects',
      businessCategory: 'LED Effects',
      eventType: 'LED Effects',
      personName: 'Sanjay Gupta',
      designation: 'Lighting Designer',
      description: 'Professional LED lighting effects and installations for weddings and events',
      services: ['LED Walls', 'Light Shows', 'Stage Lighting', 'Ambience Lighting', 'Special Effects'],
      logo: ledeffects,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹20,000 - ₹1,00,000'
    },
    {
      id: 12,
      name: 'Glow Effects',
      businessName: 'Glow Effects Lighting',
      businessCategory: 'LED Effects',
      eventType: 'LED Effects',
      personName: 'Neha Joshi',
      designation: 'Effects Specialist',
      description: 'Creating magical lighting effects that transform event spaces',
      services: ['LED Dance Floor', 'Moving Lights', 'Projection Mapping', 'Color Effects', 'Sound Sync Lights'],
      logo: ledeffects,
      location: 'Pune, Maharashtra',
      rating: 4.8,
      priceRange: '₹25,000 - ₹1,20,000'
    },
    // Kids Entertainment Vendors
    {
      id: 13,
      name: 'Kids Kingdom',
      businessName: 'Kids Kingdom Entertainment',
      businessCategory: 'Kids Entertainment',
      eventType: 'Kids Entertainment',
      personName: 'Venkatesh Iyer',
      designation: 'Kids Activity Coordinator',
      description: 'Specialized entertainment services for children at weddings and family events',
      services: ['Magic Shows', 'Face Painting', 'Games & Activities', 'Balloon Art', 'Storytelling'],
      logo: kidsentertainment,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹8,000 - ₹40,000'
    },
    {
      id: 14,
      name: 'Little Stars',
      businessName: 'Little Stars Kids Entertainment',
      businessCategory: 'Kids Entertainment',
      eventType: 'Kids Entertainment',
      personName: 'Radha Krishnan',
      designation: 'Kids Entertainer',
      description: 'Engaging and fun entertainment activities specially designed for children',
      services: ['Puppet Shows', 'Art & Craft', 'Treasure Hunts', 'Interactive Games', 'Toy Zone'],
      logo: kidsentertainment,
      location: 'Kanyakumari, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹10,000 - ₹50,000'
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
                <h3 className="text-lg sm:text-xl font-bold text-red-800">Filter Entertainment Services</h3>
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
                  <label className="block text-sm font-bold text-gray-700 mb-2">Budget Range (₹)</label>
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

                {/* Type of Entertainment */}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Type of Entertainment</label>
                  <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  >
                    <option value="">All Entertainment Types</option>
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
            {/* Entertainment Categories Grid - Mobile Responsive */}
            <section className="py-3 md:py-4 lg:py-4">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-red-800 mb-4 md:mb-6 lg:mb-8">
                Our Entertainment Categories
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
                {entertainmentCategories.map((category) => (
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
                      {selectedEvent ? `${filteredVendors.length} ${selectedEvent} Vendors Available` : '14 Entertainment Vendors Available'}
                    </h3>
                    <p className="text-yellow-200 mt-1 md:mt-2 text-xs sm:text-sm md:text-base">
                      {selectedEvent ? `Showing results for "${selectedEvent}"` : 'Browse our professional entertainment vendors'}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white/20 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg">
                      <span className="text-white font-semibold text-[10px] sm:text-xs md:text-sm">Price Range:</span>
                      <span className="text-yellow-300 ml-1 md:ml-2 text-[10px] sm:text-xs md:text-sm">₹8,000 - ₹2,00,000</span>
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
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700 mb-1 md:mb-2">No Entertainment Vendors Found</h3>
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
                Why Choose Our Entertainment Services?
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                <div className="bg-white p-3 sm:p-4 md:p-4 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-red-100 hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 mx-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-red-700 mb-1 md:mb-2 text-center">Professional Artists</h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm text-center leading-tight">Talented and experienced entertainers</p>
                </div>
                
                <div className="bg-white p-3 sm:p-4 md:p-4 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-yellow-100 hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 mx-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-red-700 mb-1 md:mb-2 text-center">Latest Equipment</h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm text-center leading-tight">State-of-the-art sound and lighting systems</p>
                </div>
                
                <div className="bg-white p-3 sm:p-4 md:p-4 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-red-100 hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 mx-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-red-700 mb-1 md:mb-2 text-center">Customized Packages</h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm text-center leading-tight">Tailored entertainment solutions for your event</p>
                </div>
                
                <div className="bg-white p-3 sm:p-4 md:p-4 lg:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-yellow-100 hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 mx-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-red-700 mb-1 md:mb-2 text-center">Memorable Experience</h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm text-center leading-tight">Creating unforgettable moments for your guests</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Filter Section - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-2xl border-2 border-red-200 p-6">
              <h3 className="text-xl lg:text-2xl font-bold text-red-800 mb-6 text-center border-b-2 border-yellow-500 pb-3">
                Filter Entertainment Services
              </h3>

              {/* Budget Range */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Budget Range (₹)</label>
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

              {/* Type of Entertainment */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Type of Entertainment</label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                >
                  <option value="">All Entertainment Types</option>
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

export default Entertainment;