import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import weddingmc from '../assets/weddingmc.jpg';
import dj from '../assets/dj.jpg';
import danceshow from '../assets/danceshow.jpg';
import livemusic from '../assets/livemusic.jpg';
import photobooth from '../assets/photobooth.jpg';
import ledeffects from '../assets/ledeffects.jpg';
import kidsentertainment from '../assets/kidsentertainment.jpg';
import photobanner1 from '../assets/enbanner.jpg';
import photobanner2 from '../assets/enbanner2.jpg';
// Add a matrimony banner image
import matrimonyBanner from '../assets/Matrimonybanner.jpg';

const Entertainment = () => {
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
      image: photobanner1,
      title: "Entertainment Services",
      subtitle: "Make Your Event Unforgettable"
    },
    {
      id: 2,
      image: photobanner2,
      title: "Premium Entertainment",
      subtitle: "Create Magical Experiences"
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

  const entertainmentCategories = [
    { name: 'Wedding MCs', image: weddingmc },
    { name: 'DJ & Remix', image: dj },
    { name: 'Dance Shows', image: danceshow },
    { name: 'Live Music', image: livemusic },
    { name: 'Photo Booths', image: photobooth },
    { name: 'LED Effects', image: ledeffects },
    { name: 'Kids Entertainment', image: kidsentertainment },
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

  const handleCategoryClick = (categoryName) => {
    let eventType = categoryName;
    
    switch(categoryName) {
      case 'Wedding MCs':
        eventType = 'Wedding MCs';
        break;
      case 'DJ & Remix':
        eventType = 'DJ & Remix';
        break;
      case 'Dance Shows':
        eventType = 'Dance Shows';
        break;
      case 'Live Music':
        eventType = 'Live Music';
        break;
      case 'Photo Booths':
        eventType = 'Photo Booths';
        break;
      case 'LED Effects':
        eventType = 'LED Effects';
        break;
      case 'Kids Entertainment':
        eventType = 'Kids Entertainment';
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

  const handleFilterButtonClick = () => {
    if (window.location.pathname === '/entertainment') {
      const filterSection = document.getElementById('filter-section');
      if (filterSection) {
        filterSection.scrollIntoView({ behavior: 'smooth' });
      }
      if (window.innerWidth < 1024) {
        setShowMobileFilter(true);
      }
    } else {
      navigate('/entertainment?openFilter=true');
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

      {/* Banner Section - Updated to match Catering page */}
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
            {/* Entertainment Categories */}
            <section className="py-2 md:py-3">
              <h2 className="text-sm md:text-lg font-bold text-center text-red-800 mb-1 md:mb-3">
                Our Entertainment Categories
              </h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex space-x-1 px-1 min-w-max">
                  {entertainmentCategories.map((category) => (
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
              <div className="hidden md:grid grid-cols-4 md:grid-cols-7 gap-1 md:gap-1.5 px-1">
                {entertainmentCategories.map((category) => (
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

            {/* Mobile Matrimony Card - Clear image with better branding (UPDATED to match Photography page) */}
<div className="md:hidden mb-3 mt-2">
  <div className="bg-white rounded-md shadow-lg border-2 border-red-300 overflow-hidden max-w-[95%] mx-auto">
    <div className="flex h-28">
      {/* Left Side: Clear Image without overlay */}
      <div className="w-2/5 relative overflow-hidden">
        <img
          src={matrimonyBanner || "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"}
          alt="Eliteinova Matrimony"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right Side: Text and Button */}
      <div className="w-3/5 p-2 bg-gradient-to-r from-red-50 to-yellow-50 flex flex-col justify-center">
        <h2 className="text-sm font-bold text-red-600 mb-1 leading-tight" style={{ fontFamily: "'Pacifico', cursive" }}>
          Eliteinova Matrimony
        </h2>
        <h3 className="text-xs font-bold text-yellow-500 mb-1.5 leading-tight">
          Find Your Perfect Partner
        </h3>
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
                        {selectedEvent ? `${filteredVendors.length} ${selectedEvent} Vendors` : '14 Entertainment Vendors'}
                      </h3>
                      <p className="text-yellow-200 mt-0.5 text-[9px] leading-tight">
                        {selectedEvent ? `Showing results for "${selectedEvent}"` : 'Browse our professional entertainment vendors'}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="bg-white/20 px-1.5 py-0.5 rounded mb-0.5">
                        <span className="text-white font-medium text-[8px]">Price Range:</span>
                        <span className="text-yellow-300 ml-0.5 text-[8px]">₹8,000 - ₹2,00,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Applied Filters Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {selectedEvent && (
                    <span className="inline-flex items-center bg-red-100 text-red-700 text-[9px] px-1.5 py-0.5 rounded-full">
                      Event: {selectedEvent}
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
                      <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Event Type</label>
                      <select
                        value={selectedEvent}
                        onChange={(e) => setSelectedEvent(e.target.value)}
                        className="w-full px-2 py-1 border border-red-300 rounded-md focus:outline-none focus:ring-0.5 focus:ring-red-500 text-xs"
                      >
                        <option value="">All Events</option>
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
                        {selectedEvent ? `${filteredVendors.length} ${selectedEvent} Vendors` : '14 Entertainment Vendors'}
                      </h3>
                      <p className="text-yellow-200 mt-0.5 text-sm">
                        {selectedEvent ? `Showing results for "${selectedEvent}"` : 'Browse our professional entertainment vendors'}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="bg-white/20 px-2.5 py-1.5 rounded">
                        <span className="text-white font-medium text-sm">Price Range:</span>
                        <span className="text-yellow-300 ml-1.5 font-bold text-sm">₹8,000 - ₹2,00,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedEvent && (
                      <span className="inline-flex items-center bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                        Event: {selectedEvent}
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
                            {/* Top Section - Image and Details Side by Side */}
                            <div className="flex border-b border-gray-200">
                              {/* Left Box - Image ONLY (no overlay) */}
                              <div className="w-2/5 p-1.5 flex items-center justify-center bg-gradient-to-br from-red-50 to-yellow-50 border-r border-gray-200">
                                <div className="w-full aspect-square rounded-md overflow-hidden border border-white shadow-sm">
                                  <img 
                                    src={vendor.logo} 
                                    alt={vendor.businessName} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>

                              {/* Right Box - Business Details */}
                              <div className="w-3/5 p-1.5 bg-white">
                                {/* Title with Star Rating */}
                                <div className="flex items-start justify-between mb-0.5">
                                  <h3 className="text-xs font-bold text-red-800 leading-tight line-clamp-2 pr-1">{vendor.businessName}</h3>
                                  <div className="flex items-center bg-yellow-100 px-1.5 py-0.5 rounded-full flex-shrink-0">
                                    <span className="text-yellow-700 font-bold mr-0.5 text-[10px]">{vendor.rating}</span>
                                    <svg className="w-2.5 h-2.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  </div>
                                </div>

                                {/* Budget below title */}
                                <p className="text-red-700 font-bold text-xs mb-1">{vendor.priceRange}</p>
                                
                                {/* Business Category */}
                                <span className="inline-block px-1.5 py-0.5 bg-red-100 text-red-700 rounded-full text-[10px] font-medium mb-1">
                                  {vendor.businessCategory}
                                </span>
                                
                                {/* Location */}
                                <div className="text-gray-600 flex items-start text-[10px] mb-1">
                                  <svg className="w-2.5 h-2.5 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span className="leading-tight">{vendor.location}</span>
                                </div>
                                
                                {/* Contact Details */}
                                <div className="space-y-0.5 text-[10px]">
                                  <div className="flex items-start">
                                    <span className="text-gray-600 font-bold w-16 flex-shrink-0">Contact Person:</span>
                                    <span className="text-gray-800 leading-tight">{vendor.personName}</span>
                                  </div>
                                  <div className="flex items-start">
                                    <span className="text-gray-600 font-bold w-16 flex-shrink-0">Role:</span>
                                    <span className="text-gray-800 leading-tight">{vendor.designation}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Bottom Section - Full Width Description and Services */}
                            <div className="w-full p-2 bg-white relative pb-10">
                              {/* Description */}
                              <p className="text-gray-700 mb-2 text-xs leading-relaxed">{vendor.description}</p>
                              
                              {/* Services Offered */}
                              <h4 className="font-bold text-red-700 mb-1.5 text-sm">Services Offered</h4>
                              <ul className="space-y-0.5 mb-1">
                                {vendor.services.map((service, index) => (
                                  <li key={index} className="flex items-start">
                                    <svg className="w-3 h-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 text-xs leading-tight">{service}</span>
                                  </li>
                                ))}
                              </ul>

                              {/* Small View Details Button in Right Bottom Corner */}
                              <div className="absolute bottom-2 right-2">
                                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 px-3 rounded-md font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center text-xs">
                                  <span>View Details</span>
                                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </button>
                              </div>
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
                Why Choose Our Entertainment Services?
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-2">
                <div className="bg-white p-1.5 md:p-3 rounded-md shadow border border-red-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-0.5 md:mb-2 mx-auto">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[9px] md:text-sm text-red-700 mb-0.5 md:mb-0.5 text-center">Professional Artists</h3>
                  <p className="text-gray-600 text-[8px] md:text-xs text-center leading-tight">Talented and experienced entertainers</p>
                </div>
                
                <div className="bg-white p-1.5 md:p-3 rounded-md shadow border border-yellow-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-0.5 md:mb-2 mx-auto">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[9px] md:text-sm text-red-700 mb-0.5 md:mb-0.5 text-center">Latest Equipment</h3>
                  <p className="text-gray-600 text-[8px] md:text-xs text-center leading-tight">State-of-the-art sound and lighting systems</p>
                </div>
                
                <div className="bg-white p-1.5 md:p-3 rounded-md shadow border border-red-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-0.5 md:mb-2 mx-auto">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[9px] md:text-sm text-red-700 mb-0.5 md:mb-0.5 text-center">Customized Packages</h3>
                  <p className="text-gray-600 text-[8px] md:text-xs text-center leading-tight">Tailored entertainment solutions for your event</p>
                </div>
                
                <div className="bg-white p-1.5 md:p-3 rounded-md shadow border border-yellow-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-0.5 md:mb-2 mx-auto">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[9px] md:text-sm text-red-700 mb-0.5 md:mb-0.5 text-center">Memorable Experience</h3>
                  <p className="text-gray-600 text-[8px] md:text-xs text-center leading-tight">Creating unforgettable moments for your guests</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Filter Section - Desktop Only - COMPLETELY STICKY */}
          <div id="filter-section" className="hidden lg:block lg:w-72 flex-shrink-0">
            {/* This wrapper will be sticky - Fixed positioning with proper spacing */}
            <div className="sticky top-20 space-y-4 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-4">
              {/* NEW: Matrimony Registration Box - Clear image with branding (UPDATED to match Photography page) */}
<div className="bg-white rounded-lg shadow-lg border-2 border-red-300 overflow-hidden mt-2">
  {/* Banner Image - Clear without overlay */}
  <div className="relative h-40 overflow-hidden">
    <img
      src={matrimonyBanner}
      alt="Eliteinova Matrimony"
      className="w-full h-full object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80";
      }}
    />
  </div>
  
  {/* Content below image */}
  <div className="p-4">
    {/* Branding */}
    <h2 className="text-2xl font-bold text-red-600 mb-1 text-center" style={{ fontFamily: "'Pacifico', cursive" }}>
      Eliteinova Matrimony
    </h2>
    <h3 className="text-lg font-bold text-yellow-500 mb-4 text-center">
      Find Your Perfect Partner
    </h3>
    
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

              {/* Filter Container - Only this box remains */}
              <div className="bg-white rounded-lg shadow-lg border border-red-200 p-4">
                <h3 className="text-base font-bold text-red-800 mb-3 text-center border-b border-yellow-500 pb-2">
                  Filter Entertainers
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
                  <label className="block text-xs font-bold text-gray-700 mb-1">Type of Entertainment</label>
                  <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="w-full px-2 py-1.5 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                  >
                    <option value="">All Entertainment Types</option>
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
              <h3 className="text-base font-bold text-red-800">Filter Entertainers</h3>
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

              {/* Type of Entertainment */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Type of Entertainment</label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                >
                  <option value="">All Entertainment Types</option>
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

export default Entertainment;