import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import digitalinvites from '../assets/digitalinvites.jpg';
import luxurycards from '../assets/luxurycards.jpg';
import printedcards from '../assets/printedcards.jpg';
import customdesigns from '../assets/customdesigns.jpg';
import returngifts from '../assets/returngifts.jpg';
import gifthampers from '../assets/gifthampers.jpg';
import ecogifts from '../assets/ecogifts.jpg';
import luxuryhampers from '../assets/luxuryhampers.jpg';
import invitationbanner1 from '../assets/inbanner1.jpg';
import invitationbanner2 from '../assets/inbanner2.jpg';
// Add a matrimony banner image - you can add your own image or use a placeholder
import matrimonyBanner from '../assets/Matrimonybanner.jpg'; // You'll need to add this image

const Invitation = () => {
  const navigate = useNavigate();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Check if there's a filter parameter in the URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const openFilter = urlParams.get('openFilter');
    
    if (openFilter === 'true') {
      setTimeout(() => {
        const filterSection = document.getElementById('filter-section');
        if (filterSection) {
          filterSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (window.innerWidth < 1024) {
          setShowMobileFilter(true);
        }
      }, 500);
    }
  }, []);

  const banners = [
    {
      id: 1,
      image: invitationbanner1,
      title: "Invitation & Gifts",
      subtitle: "Make Your First Impression Count"
    },
    {
      id: 2,
      image: invitationbanner2,
      title: "Exquisite Invitations",
      subtitle: "Set the Tone for Your Special Day"
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
    { name: 'Background Investigations', path: '/background-investigations' },
  ];

  const invitationCategories = [
    { name: 'Digital Invites', image: digitalinvites },
    { name: 'Luxury Cards', image: luxurycards },
    { name: 'Printed Cards', image: printedcards },
    { name: 'Custom Designs', image: customdesigns },
    { name: 'Return Gifts', image: returngifts },
    { name: 'Gift Hampers', image: gifthampers },
    { name: 'Eco Gifts', image: ecogifts },
    { name: 'Luxury Hampers', image: luxuryhampers },
  ];

  const eventTypes = [
    'Digital Invites',
    'Luxury Cards',
    'Printed Cards',
    'Custom Designs',
    'Return Gifts',
    'Gift Hampers',
    'Eco Gifts',
    'Luxury Hampers'
  ];

  const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'];
  const districts = ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy'];

  const handleCategoryClick = (categoryName) => {
    let eventType = categoryName;
    
    switch(categoryName) {
      case 'Digital Invites':
        eventType = 'Digital Invites';
        break;
      case 'Luxury Cards':
        eventType = 'Luxury Cards';
        break;
      case 'Printed Cards':
        eventType = 'Printed Cards';
        break;
      case 'Custom Designs':
        eventType = 'Custom Designs';
        break;
      case 'Return Gifts':
        eventType = 'Return Gifts';
        break;
      case 'Gift Hampers':
        eventType = 'Gift Hampers';
        break;
      case 'Eco Gifts':
        eventType = 'Eco Gifts';
        break;
      case 'Luxury Hampers':
        eventType = 'Luxury Hampers';
        break;
      default:
        eventType = categoryName;
    }
    
    setSelectedEvent(eventType);
    
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        const vendorSection = document.querySelector('.vendor-profiles');
        if (vendorSection) {
          vendorSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Sample vendor data
  const vendors = [
    // Digital Invites Vendors
    {
      id: 1,
      name: 'Digital Wedding Cards',
      businessName: 'Digital Wedding Invitations',
      businessCategory: 'Digital Invites',
      eventType: 'Digital Invites',
      personName: 'Rajesh Kumar',
      designation: 'Creative Director',
      description: 'Professional digital invitation design services with interactive features and tracking',
      services: ['Animated Invites', 'RSVP Tracking', 'Social Media Integration', 'Custom Animations'],
      logo: digitalinvites,
      location: 'Chennai, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹5,000 - ₹50,000'
    },
    {
      id: 2,
      name: 'E-Invite Masters',
      businessName: 'E-Invite Masters Studio',
      businessCategory: 'Digital Invites',
      eventType: 'Digital Invites',
      personName: 'Priya Sharma',
      designation: 'Digital Designer',
      description: 'Creating beautiful digital invitations with modern designs and user-friendly interfaces',
      services: ['Interactive Designs', 'Video Invites', 'WhatsApp Integration', 'Guest Management'],
      logo: digitalinvites,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹8,000 - ₹75,000'
    },
    // Luxury Cards Vendors
    {
      id: 3,
      name: 'Luxury Invitation Studio',
      businessName: 'Luxury Wedding Cards',
      businessCategory: 'Luxury Cards',
      eventType: 'Luxury Cards',
      personName: 'Arun Mehta',
      designation: 'Premium Designer',
      description: 'Premium luxury wedding cards with exquisite materials and craftsmanship',
      services: ['Embossed Cards', 'Foil Stamping', 'Handmade Paper', 'Velvet Finishing'],
      logo: luxurycards,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹200 - ₹1,000 per card'
    },
    {
      id: 4,
      name: 'Royal Wedding Cards',
      businessName: 'Royal Luxury Invitations',
      businessCategory: 'Luxury Cards',
      eventType: 'Luxury Cards',
      personName: 'Sneha Reddy',
      designation: 'Luxury Card Specialist',
      description: 'Royal themed luxury wedding cards with premium finishes and elegant designs',
      services: ['Gold Foiling', 'Silk Finishes', 'Crystal Embellishments', 'Premium Packaging'],
      logo: luxurycards,
      location: 'Hyderabad, Telangana',
      rating: 4.6,
      priceRange: '₹300 - ₹1,500 per card'
    },
    // Printed Cards Vendors
    {
      id: 5,
      name: 'Print Masters',
      businessName: 'Print Masters Invitations',
      businessCategory: 'Printed Cards',
      eventType: 'Printed Cards',
      personName: 'Vikram Singh',
      designation: 'Printing Specialist',
      description: 'High-quality printed wedding cards with various paper options and finishes',
      services: ['Offset Printing', 'Digital Printing', 'Paper Selection', 'Design Templates'],
      logo: printedcards,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹50 - ₹500 per card'
    },
    {
      id: 6,
      name: 'Traditional Prints',
      businessName: 'Traditional Printed Cards',
      businessCategory: 'Printed Cards',
      eventType: 'Printed Cards',
      personName: 'Anjali Nair',
      designation: 'Print Manager',
      description: 'Traditional and contemporary printed wedding cards with excellent print quality',
      services: ['Traditional Designs', 'Modern Layouts', 'Color Options', 'Envelope Printing'],
      logo: printedcards,
      location: 'Kochi, Kerala',
      rating: 4.8,
      priceRange: '₹40 - ₹400 per card'
    },
    // Custom Designs Vendors
    {
      id: 7,
      name: 'Custom Creations',
      businessName: 'Custom Invitation Designs',
      businessCategory: 'Custom Designs',
      eventType: 'Custom Designs',
      personName: 'Rahul Verma',
      designation: 'Design Head',
      description: 'Fully customized invitation designs created from scratch based on your vision',
      services: ['Personalized Designs', 'Theme Based', 'Photo Integration', 'Family Crests'],
      logo: customdesigns,
      location: 'Madurai, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹10,000 - ₹1,00,000'
    },
    {
      id: 8,
      name: 'Design Studio',
      businessName: 'Design Studio Invitations',
      businessCategory: 'Custom Designs',
      eventType: 'Custom Designs',
      personName: 'Meera Patel',
      designation: 'Creative Designer',
      description: 'Unique custom-designed invitations that tell your personal love story',
      services: ['Story-Based Designs', 'Illustrated Invites', 'Hand Drawn Elements', 'Personal Themes'],
      logo: customdesigns,
      location: 'Ahmedabad, Gujarat',
      rating: 4.6,
      priceRange: '₹15,000 - ₹1,20,000'
    },
    // Return Gifts Vendors
    {
      id: 9,
      name: 'Gift Solutions',
      businessName: 'Wedding Return Gifts',
      businessCategory: 'Return Gifts',
      eventType: 'Return Gifts',
      personName: 'Aisha Khan',
      designation: 'Gift Consultant',
      description: 'Beautiful and thoughtful return gifts for wedding guests',
      services: ['Personalized Gifts', 'Themed Gifts', 'Premium Packaging', 'Bulk Orders'],
      logo: returngifts,
      location: 'Mumbai, Maharashtra',
      rating: 4.9,
      priceRange: '₹200 - ₹2,000 per gift'
    },
    {
      id: 10,
      name: 'Thank You Gifts',
      businessName: 'Thank You Return Gifts',
      businessCategory: 'Return Gifts',
      eventType: 'Return Gifts',
      personName: 'Kabir Malhotra',
      designation: 'Gift Specialist',
      description: 'Elegant return gifts that show appreciation to your wedding guests',
      services: ['Customized Tags', 'Gift Sets', 'Traditional Gifts', 'Modern Gifts'],
      logo: returngifts,
      location: 'Delhi, Delhi',
      rating: 4.8,
      priceRange: '₹150 - ₹1,500 per gift'
    },
    // Gift Hampers Vendors
    {
      id: 11,
      name: 'Hamper House',
      businessName: 'Wedding Gift Hampers',
      businessCategory: 'Gift Hampers',
      eventType: 'Gift Hampers',
      personName: 'Sanjay Gupta',
      designation: 'Hamper Designer',
      description: 'Beautifully curated gift hampers for wedding guests and family',
      services: ['Theme Hampers', 'Food Hampers', 'Wellness Hampers', 'Custom Arrangements'],
      logo: gifthampers,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹500 - ₹5,000 per hamper'
    },
    {
      id: 12,
      name: 'Premium Hampers',
      businessName: 'Premium Gift Hampers',
      businessCategory: 'Gift Hampers',
      eventType: 'Gift Hampers',
      personName: 'Neha Joshi',
      designation: 'Premium Hamper Curator',
      description: 'Luxury gift hampers with premium products and elegant packaging',
      services: ['Luxury Items', 'Gourmet Products', 'Designer Packaging', 'Personal Touch'],
      logo: gifthampers,
      location: 'Pune, Maharashtra',
      rating: 4.8,
      priceRange: '₹1,000 - ₹10,000 per hamper'
    },
    // Eco Gifts Vendors
    {
      id: 13,
      name: 'Eco Gifts',
      businessName: 'Eco-Friendly Wedding Gifts',
      businessCategory: 'Eco Gifts',
      eventType: 'Eco Gifts',
      personName: 'Venkatesh Iyer',
      designation: 'Eco Products Manager',
      description: 'Environmentally friendly gift options for eco-conscious weddings',
      services: ['Sustainable Materials', 'Plantable Gifts', 'Organic Products', 'Recycled Packaging'],
      logo: ecogifts,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹100 - ₹1,000 per gift'
    },
    {
      id: 14,
      name: 'Green Gifts',
      businessName: 'Green Wedding Gifts',
      businessCategory: 'Eco Gifts',
      eventType: 'Eco Gifts',
      personName: 'Radha Krishnan',
      designation: 'Sustainable Gift Expert',
      description: 'Sustainable and eco-friendly gift options with minimal environmental impact',
      services: ['Biodegradable Items', 'Handmade Products', 'Natural Materials', 'Eco Packaging'],
      logo: ecogifts,
      location: 'Kanyakumari, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹150 - ₹1,200 per gift'
    },
    // Luxury Hampers Vendors
    {
      id: 15,
      name: 'Luxury Hampers',
      businessName: 'Luxury Wedding Hampers',
      businessCategory: 'Luxury Hampers',
      eventType: 'Luxury Hampers',
      personName: 'Pooja Mehta',
      designation: 'Luxury Hamper Curator',
      description: 'Ultra-premium luxury hampers for VIP guests and family members',
      services: ['Designer Brands', 'Imported Products', 'Personalized Notes', 'Premium Wrapping'],
      logo: luxuryhampers,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹5,000 - ₹50,000 per hamper'
    },
    {
      id: 16,
      name: 'Royal Hampers',
      businessName: 'Royal Luxury Hampers',
      businessCategory: 'Luxury Hampers',
      eventType: 'Luxury Hampers',
      personName: 'David Wilson',
      designation: 'Royal Hamper Specialist',
      description: 'Royal themed luxury hampers with premium international brands',
      services: ['International Brands', 'Exclusive Products', 'Custom Branding', 'VIP Packaging'],
      logo: luxuryhampers,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹10,000 - ₹1,00,000 per hamper'
    }
  ];

  // Filter vendors based on selections
  const filteredVendors = vendors.filter(vendor => {
    if (selectedEvent && vendor.eventType !== selectedEvent) return false;
    if (selectedState && !vendor.location.includes(selectedState)) return false;
    if (selectedDistrict && !vendor.location.includes(selectedDistrict)) return false;
    if (selectedLocation && !vendor.location.toLowerCase().includes(selectedLocation.toLowerCase())) return false;
    
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
    
    // Scroll to vendor section after applying filters
    setTimeout(() => {
      const vendorSection = document.querySelector('.vendor-profiles');
      if (vendorSection) {
        vendorSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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

  const handleFilterButtonClick = () => {
    if (window.location.pathname === '/invitation') {
      const filterSection = document.getElementById('filter-section');
      if (filterSection) {
        filterSection.scrollIntoView({ behavior: 'smooth' });
      }
      if (window.innerWidth < 1024) {
        setShowMobileFilter(true);
      }
    } else {
      navigate('/invitation?openFilter=true');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      {/* Add Pacifico font */}
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      
      {/* Floating Filter Button */}
      <button
        onClick={handleFilterButtonClick}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-red-600 to-red-700 text-white p-3 rounded-full shadow-lg hover:from-red-700 hover:to-red-800 hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center lg:hidden"
        aria-label="Open Filters"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <span className="ml-2 font-bold text-sm">Filter</span>
      </button>

      {/* Banner Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[550px] w-full">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentBannerIndex 
                  ? 'opacity-100 z-10 pointer-events-auto' 
                  : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-500/5 to-yellow-500/5">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  style={{
                    objectPosition: 'center center',
                  }}
                />
              </div>
            </div>
          ))}

          {/* Navigation Buttons - Mobile Optimized */}
          <button
            onClick={() => goToBanner(currentBannerIndex === 0 ? banners.length - 1 : currentBannerIndex - 1)}
            className="absolute left-1 xs:left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 active:bg-black/80 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 z-20 touch-manipulation"
            aria-label="Previous banner"
          >
            <svg 
              className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => goToBanner(currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1)}
            className="absolute right-1 xs:right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 active:bg-black/80 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 z-20 touch-manipulation"
            aria-label="Next banner"
          >
            <svg 
              className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators - Mobile Friendly */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToBanner(index)}
                className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentBannerIndex 
                    ? 'bg-white scale-110' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Categories Navigation - INCREASED FONT SIZE FOR DESKTOP */}
                  <div className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 shadow-md py-2 md:py-4">
                    <div className="container mx-auto px-2 md:px-4">
                      <h3 className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        Browse All Wedding Services
                      </h3>
                      <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-1 scrollbar-hide gap-1 md:gap-2">
                        {mainCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.path}
                            className="flex-shrink-0 transition-all duration-300"
                          >
                            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-1 md:py-2.5 px-2 md:px-5 rounded-md shadow hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] text-[10px] md:text-sm whitespace-nowrap border border-white/20 hover:border-yellow-300">
                              {category.name}
                            </button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
      

      {/* Main Content with Filter Sidebar */}
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-3 lg:py-4">
        <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
          {/* Main Content Area */}
          <div className="lg:flex-1 lg:max-w-[calc(100%-300px)]">
            {/* Invitation Categories */}
            <section className="py-2 md:py-3">
              <h2 className="text-sm md:text-lg font-bold text-center text-red-800 mb-1 md:mb-3">
                Our Invitation & Gift Categories
              </h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex space-x-1 px-1 min-w-max">
                  {invitationCategories.map((category) => (
                    <div key={category.name} className="flex flex-col items-center group flex-shrink-0 w-14">
                      <button 
                        onClick={() => handleCategoryClick(category.name)}
                        className="relative block w-12 h-12 mx-auto focus:outline-none"
                      >
                        <div className={`w-full h-full rounded-full border ${selectedEvent && selectedEvent.includes(category.name.split(' ')[0]) ? 'border-yellow-500' : 'border-amber-700'} overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-sm hover:shadow transition-all duration-300 p-0.5`}>
                          <img 
                            src={category.image}
                            alt={category.name} 
                            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
                      </button>
                      <h3 className="mt-0.5 text-center font-medium text-gray-800 text-[7px] px-0.5 leading-tight line-clamp-2">
                        {category.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-4 md:grid-cols-8 gap-1 md:gap-1.5 px-1">
                {invitationCategories.map((category) => (
                  <div key={category.name} className="flex flex-col items-center group">
                    <button 
                      onClick={() => handleCategoryClick(category.name)}
                      className="relative block w-full aspect-square max-w-[60px] md:max-w-[65px] mx-auto focus:outline-none"
                    >
                      <div className={`w-full h-full rounded-full border ${selectedEvent && selectedEvent.includes(category.name.split(' ')[0]) ? 'border-yellow-500' : 'border-amber-700'} overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-sm hover:shadow transition-all duration-300 p-0.5`}>
                        <img 
                          src={category.image}
                          alt={category.name} 
                          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
                    </button>
                    <h3 className="mt-0.5 text-center font-medium text-gray-800 text-[9px] md:text-[10px] px-0.5 leading-tight line-clamp-2">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>

              {selectedEvent && (
                <div className="text-center mt-1 md:mt-2">
                  <button
                    onClick={() => setSelectedEvent('')}
                    className="inline-flex items-center text-red-600 hover:text-red-800 text-[9px] md:text-xs font-medium"
                  >
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Clear "{selectedEvent}" filter
                  </button>
                </div>
              )}
            </section>

            {/* Mobile Matrimony Card - Enhanced with Pacifico font */}
            <div className="md:hidden mb-3 mt-2">
              <div className="bg-white rounded-md shadow-lg border-2 border-red-300 overflow-hidden max-w-[95%] mx-auto">
                <div className="flex h-24">
                  {/* Left Side: Image */}
                  <div className="w-2/5 relative">
                    <img
                      src={matrimonyBanner || "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"}
                      alt="Find Your Perfect Partner"
                      className="w-full h-full object-cover"
                    />
                    {/* Darker overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  </div>
                  
                  {/* Right Side: Text and Button */}
                  <div className="w-3/5 p-2 bg-gradient-to-r from-red-50 to-yellow-50 flex flex-col justify-center">
                    <h2 className="text-xs font-bold text-red-700 mb-1 leading-tight" style={{ fontFamily: "'Pacifico', cursive" }}>
                      Eliteinova Matrimony
                    </h2>
                    <h3 className="text-[10px] font-bold text-gray-800 mb-0.5 leading-tight">
                      Find Your Perfect Partner
                    </h3>
                    <p className="text-gray-600 text-[8px] mb-1.5 leading-tight">
                      Join our matrimony service
                    </p>
                    <a 
                      href="https://eliteinovamatrimony.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 px-2 rounded-md hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-sm hover:shadow-md text-[9px] font-bold flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Vendor Count & Filters */}
            <div className="lg:hidden">
              {/* Vendor Count */}
              <section className="py-1 md:py-2">
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-md shadow p-2 mb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-2">
                      <h3 className="text-xs font-bold text-white leading-tight">
                        {selectedEvent ? `${filteredVendors.length} ${selectedEvent} Vendors` : '16 Invitation & Gift Vendors'}
                      </h3>
                      <p className="text-yellow-200 mt-0.5 text-[9px] leading-tight">
                        {selectedEvent ? `Showing results for "${selectedEvent}"` : 'Browse our professional invitation & gift vendors'}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="bg-white/20 px-1.5 py-0.5 rounded mb-0.5">
                        <span className="text-white font-medium text-[8px]">Price Range:</span>
                        <span className="text-yellow-300 ml-0.5 text-[8px]">₹40 - ₹1,00,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Applied Filters Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {selectedEvent && (
                    <span className="inline-flex items-center bg-red-100 text-red-700 text-[9px] px-1.5 py-0.5 rounded-full">
                      Service: {selectedEvent}
                      <button onClick={() => setSelectedEvent('')} className="ml-0.5 text-red-500 hover:text-red-700">
                        ×
                      </button>
                    </span>
                  )}
                  {selectedState && (
                    <span className="inline-flex items-center bg-yellow-100 text-yellow-700 text-[9px] px-1.5 py-0.5 rounded-full">
                      State: {selectedState}
                      <button onClick={() => setSelectedState('')} className="ml-0.5 text-yellow-500 hover:text-yellow-700">
                        ×
                      </button>
                    </span>
                  )}
                  {(minBudget || maxBudget) && (
                    <span className="inline-flex items-center bg-green-100 text-green-700 text-[9px] px-1.5 py-0.5 rounded-full">
                      Budget: {minBudget || '0'} - {maxBudget || '∞'}
                      <button onClick={() => { setMinBudget(''); setMaxBudget(''); }} className="ml-0.5 text-green-500 hover:text-green-700">
                        ×
                      </button>
                    </span>
                  )}
                </div>
              </section>

              {/* Mobile Filters */}
              <section className="py-1 mb-2">
                <div className="bg-white rounded-md shadow border border-red-200 p-2">
                  <div className="flex items-center justify-between mb-2 border-b border-gray-100 pb-1.5">
                    <h3 className="text-xs font-bold text-red-800 flex items-center">
                      <svg className="w-3.5 h-3.5 mr-1 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                      Filter Options
                    </h3>
                    <button 
                      onClick={handleReset}
                      className="text-[10px] font-medium text-red-600 hover:text-red-800 flex items-center"
                    >
                      <svg className="w-2.5 h-2.5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Reset
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2">
                      <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Budget (₹)</label>
                      <div className="flex gap-1.5">
                        <input
                          type="number"
                          placeholder="Min"
                          value={minBudget}
                          onChange={(e) => setMinBudget(e.target.value)}
                          className="w-1/2 px-2 py-1 border border-red-300 rounded-md focus:outline-none focus:ring-0.5 focus:ring-red-500 text-xs"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={maxBudget}
                          onChange={(e) => setMaxBudget(e.target.value)}
                          className="w-1/2 px-2 py-1 border border-red-300 rounded-md focus:outline-none focus:ring-0.5 focus:ring-red-500 text-xs"
                        />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Service Type</label>
                      <select
                        value={selectedEvent}
                        onChange={(e) => setSelectedEvent(e.target.value)}
                        className="w-full px-2 py-1 border border-red-300 rounded-md focus:outline-none focus:ring-0.5 focus:ring-red-500 text-xs"
                      >
                        <option value="">All Services</option>
                        {eventTypes.map((event) => (
                          <option key={event} value={event}>{event}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-0.5">State</label>
                      <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full px-2 py-1 border border-red-300 rounded-md focus:outline-none focus:ring-0.5 focus:ring-red-500 text-xs"
                      >
                        <option value="">All States</option>
                        {states.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-0.5">District</label>
                      <select
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        className="w-full px-2 py-1 border border-red-300 rounded-md focus:outline-none focus:ring-0.5 focus:ring-red-500 text-xs"
                      >
                        <option value="">All Districts</option>
                        {districts.map((district) => (
                          <option key={district} value={district}>{district}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Location</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="City or area"
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-full pl-7 pr-2 py-1 border border-red-300 rounded-md focus:outline-none focus:ring-0.5 focus:ring-red-500 text-xs"
                        />
                        <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleFilter}
                    className="w-full mt-3 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-3 rounded-md font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center text-xs"
                  >
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Apply Filters
                    <span className="ml-1 bg-white/30 px-1 py-0.5 rounded text-[10px]">
                      ({filteredVendors.length} found)
                    </span>
                  </button>
                </div>
              </section>
            </div>

            {/* Desktop: Vendor Count */}
            <div className="hidden lg:block mb-4">
              <section className="py-2">
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {selectedEvent ? `${filteredVendors.length} ${selectedEvent} Vendors` : '16 Invitation & Gift Vendors'}
                      </h3>
                      <p className="text-yellow-200 mt-0.5 text-sm">
                        {selectedEvent ? `Showing results for "${selectedEvent}"` : 'Browse our professional invitation & gift vendors'}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="bg-white/20 px-2.5 py-1.5 rounded">
                        <span className="text-white font-medium text-sm">Price Range:</span>
                        <span className="text-yellow-300 ml-1.5 font-bold text-sm">₹40 - ₹1,00,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedEvent && (
                      <span className="inline-flex items-center bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                        Service: {selectedEvent}
                        <button onClick={() => setSelectedEvent('')} className="ml-1 text-red-500 hover:text-red-700">
                          ×
                        </button>
                      </span>
                    )}
                    {selectedState && (
                      <span className="inline-flex items-center bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                        State: {selectedState}
                        <button onClick={() => setSelectedState('')} className="ml-1 text-yellow-500 hover:text-yellow-700">
                          ×
                        </button>
                      </span>
                    )}
                    {(minBudget || maxBudget) && (
                      <span className="inline-flex items-center bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        Budget: {minBudget || '0'} - {maxBudget || '∞'}
                        <button onClick={() => { setMinBudget(''); setMaxBudget(''); }} className="ml-1 text-green-500 hover:text-green-700">
                          ×
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              </section>
            </div>

            {/* Vendor Profiles */}
            <section className="py-1 md:py-2 vendor-profiles">
              {filteredVendors.length > 0 ? (
                <div className="space-y-1.5 md:space-y-3">
                  {filteredVendors.map((vendor) => (
                    <div key={vendor.id} className="bg-white rounded-md shadow border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row">
                        {/* Left Section - Logo (Desktop Only) */}
                        <div className="hidden md:flex md:w-1/4 p-2 flex-col items-center justify-center bg-gradient-to-br from-red-50 to-yellow-50">
                          <div className="w-20 h-20 rounded-full overflow-hidden border border-white shadow mb-1">
                            <img 
                              src={vendor.logo} 
                              alt={vendor.businessName} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center mb-0.5">
                              <div className="flex items-center bg-yellow-100 px-1.5 py-0.5 rounded-full">
                                <span className="text-yellow-700 font-bold mr-0.5 text-xs">{vendor.rating}</span>
                                <svg className="w-2.5 h-2.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-red-700 font-medium text-xs">{vendor.priceRange}</p>
                          </div>
                        </div>

                        {/* Middle Section - Business Details & Services */}
                        <div className="md:w-2/4 md:p-3 md:border-r border-gray-100">
                          {/* Mobile Layout */}
                          <div className="md:hidden">
                            {/* Top Section */}
                            <div className="flex border-b border-gray-200">
                              {/* Left Half - Logo, Rating, Price */}
                              <div className="w-1/2 p-2 flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-yellow-50 border-r border-gray-200">
                                <div className="w-14 h-14 rounded-full overflow-hidden border border-white shadow mb-1">
                                  <img 
                                    src={vendor.logo} 
                                    alt={vendor.businessName} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex items-center bg-yellow-100 px-1.5 py-0.5 rounded-full mb-0.5">
                                  <span className="text-yellow-700 font-bold mr-0.5 text-[9px]">{vendor.rating}</span>
                                  <svg className="w-2 h-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                                <p className="text-red-700 font-bold text-[9px] text-center">{vendor.priceRange}</p>
                              </div>

                              {/* Right Half - Services */}
                              <div className="w-1/2 p-2 bg-white">
                                <h4 className="font-bold text-red-700 mb-1 text-[10px]">Services Offered</h4>
                                <ul className="space-y-0.5">
                                  {vendor.services.map((service, index) => (
                                    <li key={index} className="flex items-start">
                                      <svg className="w-1.5 h-1.5 text-green-500 mr-0.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span className="text-gray-700 text-[7px] leading-tight">{service}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Middle Section */}
                            <div className="w-full p-2 bg-white relative">
                              <h3 className="text-[10px] font-bold text-red-800 mb-0.5 leading-tight">{vendor.businessName}</h3>
                              
                              <span className="inline-block px-1.5 py-0.5 bg-red-100 text-red-700 rounded-full text-[8px] font-medium mb-1">
                                {vendor.businessCategory}
                              </span>
                              
                              <div className="text-gray-600 flex items-start text-[8px] mb-1">
                                <svg className="w-2 h-2 mr-0.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="leading-tight">{vendor.location}</span>
                              </div>
                              
                              <p className="text-gray-700 mb-1 text-[8px] leading-relaxed pr-16">{vendor.description}</p>
                              
                              <div className="space-y-0.5 text-[8px] mb-1.5">
                                <div className="flex items-start">
                                  <span className="text-gray-600 w-16 flex-shrink-0">Contact Person:</span>
                                  <span className="font-medium text-gray-800 leading-tight">{vendor.personName}</span>
                                </div>
                                <div className="flex items-start">
                                  <span className="text-gray-600 w-16 flex-shrink-0">Role:</span>
                                  <span className="font-medium text-gray-800 leading-tight">{vendor.designation}</span>
                                </div>
                              </div>

                              <button className="absolute bottom-1.5 right-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white py-1 px-2 rounded-md font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center text-[8px]">
                                <span>View Details</span>
                                <svg className="w-2 h-2 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* Desktop Layout */}
                          <div className="hidden md:block">
                            <div className="mb-1.5">
                              <h3 className="text-sm font-bold text-red-800 mb-0.5">{vendor.businessName}</h3>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5 mb-1.5">
                                <span className="px-1.5 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium mb-0.5 sm:mb-0 w-fit">
                                  {vendor.businessCategory}
                                </span>
                                <span className="text-gray-600 flex items-center text-xs">
                                  <svg className="w-2.5 h-2.5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  {vendor.location}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-gray-700 mb-1.5 text-xs leading-relaxed">{vendor.description}</p>
                            
                            <div className="space-y-0.5">
                              <div className="flex items-start sm:items-center">
                                <span className="text-gray-600 w-20 text-xs flex-shrink-0">Contact Person:</span>
                                <span className="font-medium text-gray-800 text-xs">{vendor.personName}</span>
                              </div>
                              <div className="flex items-start sm:items-center">
                                <span className="text-gray-600 w-20 text-xs flex-shrink-0">Designation:</span>
                                <span className="font-medium text-gray-800 text-xs">{vendor.designation}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Section - Services (Desktop Only) */}
                        <div className="hidden md:block md:w-1/4 p-3 bg-white">
                          <h4 className="font-bold text-red-700 mb-1.5 text-sm">Services Offered</h4>
                          <ul className="space-y-0.5 mb-2">
                            {vendor.services.map((service, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-2.5 h-2.5 text-green-500 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 text-xs leading-tight">{service}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-3 rounded-md font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center text-xs">
                            <span>View Details</span>
                            <svg className="w-2.5 h-2.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-md shadow p-3 md:p-4 text-center">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mx-auto mb-1.5 md:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xs md:text-base font-bold text-gray-700 mb-0.5">No Vendors Found</h3>
                  <p className="text-gray-600 mb-2 text-[10px] md:text-sm">Try adjusting your filter criteria to find more vendors</p>
                  <button 
                    onClick={handleReset}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white py-1 md:py-1.5 px-2.5 md:px-3 rounded-md font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow hover:shadow-md text-xs"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </section>

            {/* Why Choose Us Section */}
            <section className="py-2 md:py-4">
              <h2 className="text-sm md:text-lg font-bold text-center text-red-800 mb-1.5 md:mb-3">
                Why Choose Our Invitation & Gift Services?
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-2">
                <div className="bg-white p-1.5 md:p-3 rounded-md shadow border border-red-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-0.5 md:mb-2 mx-auto">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[9px] md:text-sm text-red-700 mb-0.5 md:mb-0.5 text-center">Creative Designs</h3>
                  <p className="text-gray-600 text-[8px] md:text-xs text-center leading-tight">Unique and personalized invitation designs</p>
                </div>
                
                <div className="bg-white p-1.5 md:p-3 rounded-md shadow border border-yellow-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-0.5 md:mb-2 mx-auto">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[9px] md:text-sm text-red-700 mb-0.5 md:mb-0.5 text-center">Quick Delivery</h3>
                  <p className="text-gray-600 text-[8px] md:text-xs text-center leading-tight">Fast printing and delivery services</p>
                </div>
                
                <div className="bg-white p-1.5 md:p-3 rounded-md shadow border border-red-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-0.5 md:mb-2 mx-auto">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[9px] md:text-sm text-red-700 mb-0.5 md:mb-0.5 text-center">Premium Quality</h3>
                  <p className="text-gray-600 text-[8px] md:text-xs text-center leading-tight">High-quality materials and printing</p>
                </div>
                
                <div className="bg-white p-1.5 md:p-3 rounded-md shadow border border-yellow-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-0.5 md:mb-2 mx-auto">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[9px] md:text-sm text-red-700 mb-0.5 md:mb-0.5 text-center">Affordable Prices</h3>
                  <p className="text-gray-600 text-[8px] md:text-xs text-center leading-tight">Competitive pricing with no hidden costs</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Filter Section - Desktop Only - COMPLETELY STICKY */}
          <div id="filter-section" className="hidden lg:block lg:w-72 flex-shrink-0">
            {/* This wrapper will be sticky - Fixed positioning with proper spacing */}
            <div className="sticky top-20 space-y-4 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-4">
              {/* NEW: Matrimony Registration Box - UPDATED to match Catering page style */}
              <div className="bg-white rounded-lg shadow-lg border-2 border-red-300 overflow-hidden mt-2">
                {/* Banner Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={matrimonyBanner}
                    alt="Find Your Perfect Partner"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      // Fallback image if the matrimony banner doesn't exist
                      e.target.src = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80";
                    }}
                  />
                  {/* Darker overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Text on image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Pacifico', cursive" }}>
                      Eliteinova Matrimony
                    </h2>
                    <h3 className="text-base font-bold text-yellow-300">
                      Find Your Perfect Partner
                    </h3>
                  </div>
                </div>
                
                {/* Content below image */}
                <div className="p-4">
                  <p className="text-gray-600 text-xs mb-4 text-center leading-relaxed">
                    Find your soulmate and create beautiful memories together. 
                    Join our matrimony service and find your life partner.
                  </p>
                  
                  {/* Register Now Button */}
                  <a 
                    href="https://eliteinovamatrimony.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2.5 px-4 rounded-md font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Register Now
                  </a>
                  
                  {/* Small note */}
                  <p className="text-gray-500 text-[10px] text-center mt-3">
                    Redirects to eliteinovamatrimony.com
                  </p>
                </div>
              </div>

              {/* Filter Container */}
              <div className="bg-white rounded-lg shadow-lg border border-red-200 p-4">
                <h3 className="text-base font-bold text-red-800 mb-3 text-center border-b border-yellow-500 pb-2">
                  Filter Services
                </h3>

                <div className="mb-3">
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

                <div className="mb-3">
                  <label className="block text-xs font-bold text-gray-700 mb-1">Type of Service</label>
                  <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="w-full px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                  >
                    <option value="">All Service Types</option>
                    {eventTypes.map((event) => (
                      <option key={event} value={event}>{event}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
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

                <div className="mb-3">
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

      {/* Mobile Filter Overlay - COMPACT VERSION */}
      {showMobileFilter && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-black/50 flex items-end justify-center">
          <div className="bg-white w-full rounded-t-2xl max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-gray-200 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-base font-bold text-red-800">Filter Services</h3>
              <button
                onClick={() => setShowMobileFilter(false)}
                className="text-gray-500 hover:text-red-700 p-1"
                aria-label="Close filter"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Filter Content */}
            <div className="px-4 py-3 space-y-3">
              {/* Budget Range */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Budget Range (₹)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minBudget}
                    onChange={(e) => setMinBudget(e.target.value)}
                    className="flex-1 px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    className="flex-1 px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Type of Service */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Type of Service</label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                >
                  <option value="">All Service Types</option>
                  {eventTypes.map((event) => (
                    <option key={event} value={event}>{event}</option>
                  ))}
                </select>
              </div>

              {/* Preferred State */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Preferred State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                >
                  <option value="">All States</option>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">District</label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                >
                  <option value="">All Districts</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Location</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter city or area"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 pl-9 border border-red-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2 pb-1">
                <button
                  onClick={handleFilter}
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-2.5 px-3 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm flex items-center justify-center"
                >
                  Apply Filter
                  <span className="ml-1.5 bg-white/30 px-1.5 py-0.5 rounded text-xs">
                    ({filteredVendors.length})
                  </span>
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-2.5 px-3 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invitation;