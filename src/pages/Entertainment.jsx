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
            {/* Entertainment Categories Grid - COMPACT SIZE */}
            <section className="py-4">
              <h2 className="text-2xl font-bold text-center text-red-800 mb-8">
                Our Entertainment Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {entertainmentCategories.map((category) => (
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
                      {selectedEvent ? `${filteredVendors.length} ${selectedEvent} Vendors Available` : '14 Entertainment Vendors Available'}
                    </h3>
                    <p className="text-yellow-200 mt-2">
                      {selectedEvent ? `Showing results for "${selectedEvent}"` : 'Browse our professional entertainment vendors'}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <span className="text-white font-semibold">Price Range:</span>
                      <span className="text-yellow-300 ml-2">₹8,000 - ₹2,00,000</span>
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
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No Entertainment Vendors Found</h3>
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
                Why Choose Our Entertainment Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Professional Artists</h3>
                  <p className="text-gray-600 text-center">Talented and experienced entertainers</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Latest Equipment</h3>
                  <p className="text-gray-600 text-center">State-of-the-art sound and lighting systems</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Customized Packages</h3>
                  <p className="text-gray-600 text-center">Tailored entertainment solutions for your event</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Memorable Experience</h3>
                  <p className="text-gray-600 text-center">Creating unforgettable moments for your guests</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Filter Section */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-2xl border-2 border-red-200 p-6">
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center border-b-2 border-yellow-500 pb-3">
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

              {/* Type of Entertainment */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Type of Entertainment</label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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

export default Entertainment;