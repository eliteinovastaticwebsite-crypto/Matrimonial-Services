import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mandapdecor from '../assets/mandapdecor.jpg';
import stagedecor from '../assets/stagedecor.jpg';
import weddingdecor from '../assets/weddingdecor.jpg';
import receptiondecor from '../assets/receptiondecor.jpg';
import eventdecor from '../assets/eventdecor.jpg';
import floraldecor from '../assets/floraldecor.jpg';
import themedecor from '../assets/themedecor.jpg';
import lightingdecor from '../assets/lightingdecor.jpg';
import photography from '../assets/photography.jpg';
import catering from '../assets/catering.jpg';
import weddinghalls from '../assets/weddinghalls.jpg';
import decoration from '../assets/decoration.jpg';
import invitation from '../assets/invitation.jpg';
import makeup from '../assets/makeup.jpg';
import entertainment from '../assets/entertainment.jpg';
import decorationbanner1 from '../assets/mandapdecor.jpg';
import decorationbanner2 from '../assets/mandapdecor.jpg';

const Decoration = () => {
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
      image: decorationbanner1,
      title: "Wedding Decoration",
      subtitle: "Transform Your Dreams into Reality"
    },
    {
      id: 2,
      image: decorationbanner2,
      title: "Exquisite Decoration Services",
      subtitle: "Create Magical Moments"
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

  const decorationCategories = [
    { name: 'Wedding Decoration', path: '/decoration/wedding-decoration', image: weddingdecor },
    { name: 'Stage Decoration', path: '/decoration/stage-decoration', image: stagedecor },
    { name: 'Mandap Decoration', path: '/decoration/mandap-decoration', image: mandapdecor },
    { name: 'Reception Decoration', path: '/decoration/reception-decoration', image: receptiondecor },
    { name: 'Event Decoration', path: '/decoration/event-decoration', image: eventdecor },
    { name: 'Floral Decoration', path: '/decoration/floral-decoration', image: floraldecor },
    { name: 'Theme-Based Decoration', path: '/decoration/theme-decoration', image: themedecor },
    { name: 'Lighting & Ambience Decoration', path: '/decoration/lighting-decoration', image: lightingdecor },
  ];

  const eventTypes = [
    'Wedding Decoration',
    'Stage Decoration',
    'Mandap Decoration',
    'Reception Decoration',
    'Event Decoration',
    'Floral Decoration',
    'Theme-Based Decoration',
    'Lighting & Ambience Decoration'
  ];

  const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'];
  const districts = ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy'];

  // Sample vendor data - 2 vendors for each decoration type
  const vendors = [
    // Wedding Decoration Vendors
    {
      id: 1,
      name: 'Royal Wedding Decorators',
      businessName: 'Royal Wedding Decoration Services',
      businessCategory: 'Wedding Decoration',
      eventType: 'Wedding Decoration',
      personName: 'Rajesh Kumar',
      designation: 'Creative Director',
      description: 'Specializing in elegant wedding decorations with 10+ years of experience creating magical wedding setups',
      services: ['Complete Wedding Setup', 'Entrance Decor', 'Seating Arrangements', 'Ceiling Decorations', 'Stage Design'],
      logo: weddingdecor,
      location: 'Chennai, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹50,000 - ₹5,00,000'
    },
    {
      id: 2,
      name: 'Dream Wedding Decor',
      businessName: 'Dream Wedding Decoration Studio',
      businessCategory: 'Wedding Decoration',
      eventType: 'Wedding Decoration',
      personName: 'Priya Sharma',
      designation: 'Head Designer',
      description: 'Creating dream wedding decorations with artistic vision and modern design techniques',
      services: ['Custom Wedding Themes', 'Destination Weddings', 'Traditional Decor', 'Modern Designs', 'Complete Setup'],
      logo: weddingdecor,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹75,000 - ₹6,00,000'
    },
    // Stage Decoration Vendors
    {
      id: 3,
      name: 'Stage Masters Decor',
      businessName: 'Stage Masters Decoration Services',
      businessCategory: 'Stage Decoration',
      eventType: 'Stage Decoration',
      personName: 'Arun Mehta',
      designation: 'Stage Designer',
      description: 'Professional stage decoration for weddings and events with spectacular designs',
      services: ['Main Stage Setup', 'Backdrop Designs', 'Floral Stage Decor', 'LED Stage Effects', 'Custom Themes'],
      logo: stagedecor,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹25,000 - ₹2,50,000'
    },
    {
      id: 4,
      name: 'Elevated Stages',
      businessName: 'Elevated Stage Decoration',
      businessCategory: 'Stage Decoration',
      eventType: 'Stage Decoration',
      personName: 'Sneha Reddy',
      designation: 'Event Decorator',
      description: 'Creating elevated stage designs that become the focal point of every celebration',
      services: ['Multi-level Stages', 'Themed Backdrops', 'Lighting Effects', 'Props and Sets', 'Quick Setup'],
      logo: stagedecor,
      location: 'Hyderabad, Telangana',
      rating: 4.6,
      priceRange: '₹30,000 - ₹3,00,000'
    },
    // Mandap Decoration Vendors
    {
      id: 5,
      name: 'Divine Mandap Decor',
      businessName: 'Divine Mandap Decoration Services',
      businessCategory: 'Mandap Decoration',
      eventType: 'Mandap Decoration',
      personName: 'Vikram Singh',
      designation: 'Traditional Decor Specialist',
      description: 'Traditional and modern mandap decorations for Hindu wedding ceremonies',
      services: ['Traditional Mandaps', 'Floral Mandaps', 'Theme Mandaps', 'Custom Mandap Designs', 'Ceremony Setup'],
      logo: mandapdecor,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹40,000 - ₹4,00,000'
    },
    {
      id: 6,
      name: 'Sacred Mandap Studio',
      businessName: 'Sacred Mandap Decoration',
      businessCategory: 'Mandap Decoration',
      eventType: 'Mandap Decoration',
      personName: 'Anjali Nair',
      designation: 'Mandap Designer',
      description: 'Creating sacred and beautiful mandap setups for traditional wedding ceremonies',
      services: ['Wooden Mandaps', 'Floral Mandaps', 'Jeweled Mandaps', 'Traditional Themes', 'Complete Ceremony Decor'],
      logo: mandapdecor,
      location: 'Kochi, Kerala',
      rating: 4.8,
      priceRange: '₹35,000 - ₹3,50,000'
    },
    // Reception Decoration Vendors
    {
      id: 7,
      name: 'Reception Elegance',
      businessName: 'Reception Elegance Decoration',
      businessCategory: 'Reception Decoration',
      eventType: 'Reception Decoration',
      personName: 'Rahul Verma',
      designation: 'Reception Decor Manager',
      description: 'Elegant reception decorations that create memorable party atmospheres',
      services: ['Reception Entrance', 'Dance Floor Setup', 'Table Decorations', 'Bar Setup', 'Party Lighting'],
      logo: receptiondecor,
      location: 'Madurai, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹30,000 - ₹3,00,000'
    },
    {
      id: 8,
      name: 'Celebration Reception',
      businessName: 'Celebration Reception Decoration',
      businessCategory: 'Reception Decoration',
      eventType: 'Reception Decoration',
      personName: 'Meera Patel',
      designation: 'Party Decor Specialist',
      description: 'Creating celebration-ready reception spaces with vibrant and elegant decorations',
      services: ['Balloon Decor', 'Centerpieces', 'Photo Booth Setup', 'Cake Table Decor', 'Guest Seating'],
      logo: receptiondecor,
      location: 'Ahmedabad, Gujarat',
      rating: 4.6,
      priceRange: '₹25,000 - ₹2,50,000'
    },
    // Event Decoration Vendors
    {
      id: 9,
      name: 'Event Stylists',
      businessName: 'Event Stylists Decoration Services',
      businessCategory: 'Event Decoration',
      eventType: 'Event Decoration',
      personName: 'Aisha Khan',
      designation: 'Event Stylist',
      description: 'Comprehensive event decoration services for all types of celebrations and functions',
      services: ['Corporate Events', 'Birthday Parties', 'Anniversary Celebrations', 'Festival Decor', 'Special Events'],
      logo: eventdecor,
      location: 'Mumbai, Maharashtra',
      rating: 4.9,
      priceRange: '₹20,000 - ₹2,00,000'
    },
    {
      id: 10,
      name: 'All Occasion Decor',
      businessName: 'All Occasion Decoration',
      businessCategory: 'Event Decoration',
      eventType: 'Event Decoration',
      personName: 'Kabir Malhotra',
      designation: 'Event Manager',
      description: 'Versatile decoration services for every type of event and celebration',
      services: ['Theme Events', 'Outdoor Events', 'Indoor Events', 'Seasonal Decor', 'Quick Transformations'],
      logo: eventdecor,
      location: 'Delhi, Delhi',
      rating: 4.8,
      priceRange: '₹15,000 - ₹1,50,000'
    },
    // Floral Decoration Vendors
    {
      id: 11,
      name: 'Floral Artistry',
      businessName: 'Floral Artistry Decoration',
      businessCategory: 'Floral Decoration',
      eventType: 'Floral Decoration',
      personName: 'Sanjay Gupta',
      designation: 'Floral Designer',
      description: 'Exquisite floral decorations using fresh and premium quality flowers',
      services: ['Fresh Flower Arrangements', 'Floral Arches', 'Flower Walls', 'Centerpieces', 'Bouquet Designs'],
      logo: floraldecor,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹25,000 - ₹3,00,000'
    },
    {
      id: 12,
      name: 'Bloom & Petal',
      businessName: 'Bloom & Petal Floral Decor',
      businessCategory: 'Floral Decoration',
      eventType: 'Floral Decoration',
      personName: 'Neha Joshi',
      designation: 'Floral Artist',
      description: 'Creating stunning floral decorations with artistic arrangements and premium blooms',
      services: ['Exotic Flower Arrangements', 'Seasonal Flowers', 'Floral Installations', 'Garlands', 'Flower Crowns'],
      logo: floraldecor,
      location: 'Pune, Maharashtra',
      rating: 4.8,
      priceRange: '₹30,000 - ₹3,50,000'
    },
    // Theme-Based Decoration Vendors
    {
      id: 13,
      name: 'Theme Creators',
      businessName: 'Theme Creators Decoration Studio',
      businessCategory: 'Theme-Based Decoration',
      eventType: 'Theme-Based Decoration',
      personName: 'Venkatesh Iyer',
      designation: 'Theme Designer',
      description: 'Complete theme-based decoration services that transform venues into magical spaces',
      services: ['Royal Themes', 'Beach Themes', 'Garden Themes', 'Cultural Themes', 'Custom Themes'],
      logo: themedecor,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹50,000 - ₹5,00,000'
    },
    {
      id: 14,
      name: 'Concept Decor',
      businessName: 'Concept Decoration Services',
      businessCategory: 'Theme-Based Decoration',
      eventType: 'Theme-Based Decoration',
      personName: 'Radha Krishnan',
      designation: 'Concept Designer',
      description: 'Innovative concept-based decorations that tell your unique story',
      services: ['Destination Themes', 'Color Themes', 'Era-based Themes', 'Fantasy Themes', 'Personalized Themes'],
      logo: themedecor,
      location: 'Kanyakumari, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹45,000 - ₹4,50,000'
    },
    // Lighting & Ambience Decoration Vendors
    {
      id: 15,
      name: 'Light Masters',
      businessName: 'Light Masters Decoration',
      businessCategory: 'Lighting & Ambience Decoration',
      eventType: 'Lighting & Ambience Decoration',
      personName: 'Pooja Mehta',
      designation: 'Lighting Designer',
      description: 'Creating magical ambience with professional lighting decoration services',
      services: ['LED Lighting', 'Fairy Lights', 'Spot Lighting', 'Color Lighting', 'Dance Floor Lighting'],
      logo: lightingdecor,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹15,000 - ₹1,50,000'
    },
    {
      id: 16,
      name: 'Ambience Experts',
      businessName: 'Ambience Experts Lighting',
      businessCategory: 'Lighting & Ambience Decoration',
      eventType: 'Lighting & Ambience Decoration',
      personName: 'David Wilson',
      designation: 'Ambience Specialist',
      description: 'Professional lighting and ambience decoration to create the perfect mood',
      services: ['Mood Lighting', 'Projection Mapping', 'Chandeliers', 'Outdoor Lighting', 'Smart Lighting'],
      logo: lightingdecor,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹20,000 - ₹2,00,000'
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
            {/* Decoration Categories Grid - COMPACT SIZE */}
            <section className="py-4">
              <h2 className="text-2xl font-bold text-center text-red-800 mb-8">
                Our Decoration Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {decorationCategories.map((category) => (
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
                      {selectedEvent ? `${filteredVendors.length} ${selectedEvent} Vendors Available` : '16 Decoration Vendors Available'}
                    </h3>
                    <p className="text-yellow-200 mt-2">
                      {selectedEvent ? `Showing results for "${selectedEvent}"` : 'Browse our professional decoration vendors'}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <span className="text-white font-semibold">Price Range:</span>
                      <span className="text-yellow-300 ml-2">₹15,000 - ₹6,00,000</span>
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
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No Decoration Vendors Found</h3>
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
                Why Choose Our Decoration Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Creative Designs</h3>
                  <p className="text-gray-600 text-center">Unique and innovative decoration concepts</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Timely Setup</h3>
                  <p className="text-gray-600 text-center">Professional and punctual service delivery</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Expert Team</h3>
                  <p className="text-gray-600 text-center">Experienced decorators and designers</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Premium Quality</h3>
                  <p className="text-gray-600 text-center">High-quality materials and craftsmanship</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Filter Section */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-2xl border-2 border-red-200 p-6">
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center border-b-2 border-yellow-500 pb-3">
                Filter Decoration Services
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

              {/* Type of Decoration */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Type of Decoration</label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">All Decoration Types</option>
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

export default Decoration;