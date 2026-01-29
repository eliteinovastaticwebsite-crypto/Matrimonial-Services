import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bridalmakeup from '../assets/bridalmakeup.jpg';
import groomstyling from '../assets/groomstyling.jpg';
import hairstyling from '../assets/hairstyling.jpg';
import mehendiart from '../assets/mehendiart.jpg';
import preweddingstyling from '../assets/mehendiart.jpg';
import traditionalstyling from '../assets/mehendiart.jpg';
import luxurystyling from '../assets/mehendiart.jpg';
import stylingservice from '../assets/mehendiart.jpg';
import stylingbanner1 from '../assets/mehendiart.jpg';
import stylingbanner2 from '../assets/mehendiart.jpg';
import photography from '../assets/photography.jpg';
import catering from '../assets/catering.jpg';
import weddinghalls from '../assets/weddinghalls.jpg';
import decoration from '../assets/decoration.jpg';
import invitation from '../assets/invitation.jpg';
import makeup from '../assets/makeup.jpg';
import entertainment from '../assets/entertainment.jpg';

const Styling = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const banners = [
    {
      id: 1,
      image: stylingbanner1,
      title: "Bridal & Groom Styling",
      subtitle: "Look Your Best on Your Special Day"
    },
    {
      id: 2,
      image: stylingbanner2,
      title: "Professional Styling Services",
      subtitle: "Transform Into Royalty"
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

  const stylingCategories = [
    { name: 'Bridal Makeup', path: '/styling/bridal-makeup', image: bridalmakeup },
    { name: 'Groom Styling', path: '/styling/groom-styling', image: groomstyling },
    { name: 'Hair Styling', path: '/styling/hair-styling', image: hairstyling },
    { name: 'Mehendi Art', path: '/styling/mehendi-art', image: mehendiart },
    { name: 'Pre-Wedding Styling', path: '/styling/pre-wedding', image: preweddingstyling },
    { name: 'Traditional Styling', path: '/styling/traditional', image: traditionalstyling },
    { name: 'Luxury Styling', path: '/styling/luxury', image: luxurystyling },
    { name: 'Complete Styling', path: '/styling/complete', image: stylingservice },
  ];

  const serviceTypes = [
    'Bridal Makeup',
    'Groom Styling',
    'Hair Styling',
    'Mehendi Art',
    'Pre-Wedding Styling',
    'Traditional Styling',
    'Luxury Styling',
    'Complete Styling Package'
  ];

  const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'];
  const districts = ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy'];

  // Sample vendor data for styling services
  const vendors = [
    // Bridal Makeup Vendors
    {
      id: 1,
      name: 'Glow Bridal Studio',
      businessName: 'Glow Bridal Makeup & Styling',
      businessCategory: 'Bridal Makeup',
      serviceType: 'Bridal Makeup',
      personName: 'Priya Sharma',
      designation: 'Lead Makeup Artist',
      description: 'Specializing in bridal makeup with 8+ years of experience, creating flawless looks for your big day',
      services: ['Bridal Makeup', 'Engagement Makeup', 'Reception Look', 'Trial Sessions'],
      logo: bridalmakeup,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹25,000 - ₹1,50,000'
    },
    {
      id: 2,
      name: 'Royal Beauty Hub',
      businessName: 'Royal Bridal Makeup Artists',
      businessCategory: 'Bridal Makeup',
      serviceType: 'Bridal Makeup',
      personName: 'Anjali Mehta',
      designation: 'Creative Director',
      description: 'Creating timeless bridal looks with international quality products and techniques',
      services: ['Airbrush Makeup', 'Traditional Bridal Look', 'Contemporary Styles', 'Makeup for Events'],
      logo: bridalmakeup,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹30,000 - ₹2,00,000'
    },
    // Groom Styling Vendors
    {
      id: 3,
      name: 'Gentleman Grooming',
      businessName: 'Gentleman Grooming Studio',
      businessCategory: 'Groom Styling',
      serviceType: 'Groom Styling',
      personName: 'Rahul Verma',
      designation: 'Groom Stylist',
      description: 'Professional grooming services for grooms with attention to detail and style',
      services: ['Groom Makeup', 'Beard Styling', 'Hair Grooming', 'Traditional Attire Styling'],
      logo: groomstyling,
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      priceRange: '₹15,000 - ₹80,000'
    },
    {
      id: 4,
      name: 'Dapper Grooms',
      businessName: 'Dapper Groom Styling',
      businessCategory: 'Groom Styling',
      serviceType: 'Groom Styling',
      personName: 'Arun Kumar',
      designation: 'Style Consultant',
      description: 'Transforming grooms into stylish gentlemen for their wedding day',
      services: ['Complete Groom Package', 'Suit Styling', 'Traditional Look', 'Accessory Consultation'],
      logo: groomstyling,
      location: 'Hyderabad, Telangana',
      rating: 4.6,
      priceRange: '₹20,000 - ₹1,00,000'
    },
    // Hair Styling Vendors
    {
      id: 5,
      name: 'Locks & Curls',
      businessName: 'Locks & Curls Hair Studio',
      businessCategory: 'Hair Styling',
      serviceType: 'Hair Styling',
      personName: 'Meera Reddy',
      designation: 'Lead Hair Stylist',
      description: 'Creating beautiful bridal hairstyles with floral decorations and accessories',
      services: ['Bridal Hairstyles', 'Hair Extensions', 'Flower Decorations', 'Traditional Plaits'],
      logo: hairstyling,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹10,000 - ₹50,000'
    },
    {
      id: 6,
      name: 'Crown Glory',
      businessName: 'Crown Glory Hair Design',
      businessCategory: 'Hair Styling',
      serviceType: 'Hair Styling',
      personName: 'Sneha Nair',
      designation: 'Hair Designer',
      description: 'Specialized in traditional and contemporary wedding hairstyles',
      services: ['Modern Hairstyles', 'Traditional Buns', 'Hair Accessories', 'Pre-wedding Hair Care'],
      logo: hairstyling,
      location: 'Kochi, Kerala',
      rating: 4.8,
      priceRange: '₹12,000 - ₹60,000'
    },
    // Mehendi Art Vendors
    {
      id: 7,
      name: 'Henna Expressions',
      businessName: 'Henna Expressions Studio',
      businessCategory: 'Mehendi Art',
      serviceType: 'Mehendi Art',
      personName: 'Fatima Khan',
      designation: 'Mehendi Artist',
      description: 'Traditional and contemporary mehendi designs for brides and guests',
      services: ['Bridal Mehendi', 'Arabic Designs', 'Rajasthani Patterns', 'Custom Designs'],
      logo: mehendiart,
      location: 'Madurai, Tamil Nadu',
      rating: 4.7,
      priceRange: '₹5,000 - ₹30,000'
    },
    {
      id: 8,
      name: 'Bridal Henna Art',
      businessName: 'Bridal Henna Artists',
      businessCategory: 'Mehendi Art',
      serviceType: 'Mehendi Art',
      personName: 'Zara Ahmed',
      designation: 'Lead Artist',
      description: 'Creating intricate mehendi designs that tell your love story',
      services: ['Full Hand Designs', 'Feet Mehendi', 'Groom Design', 'Guest Mehendi'],
      logo: mehendiart,
      location: 'Chennai, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹8,000 - ₹40,000'
    },
    // Pre-Wedding Styling Vendors
    {
      id: 9,
      name: 'Pre-Wedding Glam',
      businessName: 'Pre-Wedding Glam Studio',
      businessCategory: 'Pre-Wedding Styling',
      serviceType: 'Pre-Wedding Styling',
      personName: 'Aisha Kapoor',
      designation: 'Style Director',
      description: 'Complete pre-wedding styling for engagement and pre-wedding shoots',
      services: ['Engagement Styling', 'Outdoor Shoot Looks', 'Theme-based Styling', 'Couple Styling'],
      logo: preweddingstyling,
      location: 'Mumbai, Maharashtra',
      rating: 4.9,
      priceRange: '₹30,000 - ₹2,00,000'
    },
    {
      id: 10,
      name: 'Shoot Ready',
      businessName: 'Shoot Ready Styling',
      businessCategory: 'Pre-Wedding Styling',
      serviceType: 'Pre-Wedding Styling',
      personName: 'Kabir Singh',
      designation: 'Creative Stylist',
      description: 'Making you camera-ready for pre-wedding photography sessions',
      services: ['Photoshoot Makeup', 'Wardrobe Styling', 'Location-based Looks', 'Natural Makeup'],
      logo: preweddingstyling,
      location: 'Delhi, Delhi',
      rating: 4.8,
      priceRange: '₹25,000 - ₹1,50,000'
    },
    // Traditional Styling Vendors
    {
      id: 11,
      name: 'Traditional Elegance',
      businessName: 'Traditional Elegance Styling',
      businessCategory: 'Traditional Styling',
      serviceType: 'Traditional Styling',
      personName: 'Lakshmi Iyer',
      designation: 'Traditional Stylist',
      description: 'Specializing in South Indian traditional wedding looks and jewelry styling',
      services: ['Traditional Attire Draping', 'Temple Jewelry', 'Classic Makeup', 'Traditional Hairstyles'],
      logo: traditionalstyling,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹35,000 - ₹2,50,000'
    },
    {
      id: 12,
      name: 'Heritage Looks',
      businessName: 'Heritage Wedding Styling',
      businessCategory: 'Traditional Styling',
      serviceType: 'Traditional Styling',
      personName: 'Radha Krishnan',
      designation: 'Traditional Consultant',
      description: 'Preserving and presenting traditional wedding styles with modern comfort',
      services: ['Regional Traditional Styles', 'Antique Jewelry', 'Cultural Attire', 'Traditional Accessories'],
      logo: traditionalstyling,
      location: 'Kanyakumari, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹40,000 - ₹3,00,000'
    },
    // Luxury Styling Vendors
    {
      id: 13,
      name: 'Luxe Bridal',
      businessName: 'Luxe Bridal Styling',
      businessCategory: 'Luxury Styling',
      serviceType: 'Luxury Styling',
      personName: 'Neha Malhotra',
      designation: 'Luxury Stylist',
      description: 'Premium luxury styling with international designers and exclusive products',
      services: ['International Brands', 'Designer Coordination', 'Luxury Beauty Products', 'VIP Service'],
      logo: luxurystyling,
      location: 'Bangalore, Karnataka',
      rating: 5.0,
      priceRange: '₹1,00,000 - ₹10,00,000'
    },
    {
      id: 14,
      name: 'Royal Treatment',
      businessName: 'Royal Treatment Styling',
      businessCategory: 'Luxury Styling',
      serviceType: 'Luxury Styling',
      personName: 'Rohan Mehra',
      designation: 'Luxury Director',
      description: 'Complete luxury experience for royal wedding celebrations',
      services: ['Personal Stylist', 'International Artists', 'Custom Creations', 'Exclusive Packages'],
      logo: luxurystyling,
      location: 'Hyderabad, Telangana',
      rating: 4.9,
      priceRange: '₹80,000 - ₹8,00,000'
    },
    // Complete Styling Package Vendors
    {
      id: 15,
      name: 'Complete Wedding Styling',
      businessName: 'Complete Wedding Styling Services',
      businessCategory: 'Complete Styling',
      serviceType: 'Complete Styling Package',
      personName: 'Pooja Gupta',
      designation: 'Wedding Stylist',
      description: 'End-to-end wedding styling solutions for bride, groom, and family',
      services: ['Bridal Package', 'Groom Package', 'Family Styling', 'Complete Wedding Coordination'],
      logo: stylingservice,
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      priceRange: '₹75,000 - ₹5,00,000'
    },
    {
      id: 16,
      name: 'Wedding Perfection',
      businessName: 'Wedding Perfection Stylists',
      businessCategory: 'Complete Styling',
      serviceType: 'Complete Styling Package',
      personName: 'David Wilson',
      designation: 'Styling Director',
      description: 'Comprehensive styling services ensuring perfect looks for all wedding events',
      services: ['All Events Coverage', 'Theme Consistency', 'Multiple Look Changes', 'On-site Styling'],
      logo: stylingservice,
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.8,
      priceRange: '₹1,00,000 - ₹6,00,000'
    }
  ];

  // Filter vendors based on selections
  const filteredVendors = vendors.filter(vendor => {
    if (selectedService && vendor.serviceType !== selectedService) return false;
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
    // Filter logic already handled by filteredVendors
    console.log('Filtering...', filteredVendors.length);
  };

  const handleReset = () => {
    setMinBudget('');
    setMaxBudget('');
    setSelectedService('');
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

      {/* Main Categories Navigation - SAME AS PHOTOGRAPHY */}
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
            {/* Styling Categories Grid - SAME AS PHOTOGRAPHY */}
            <section className="py-4">
              <h2 className="text-2xl font-bold text-center text-red-800 mb-8">
                Our Styling Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stylingCategories.map((category) => (
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

            {/* Vendor Count and Filter Results Section - SAME AS PHOTOGRAPHY */}
            <section className="py-8">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg p-6 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">
                      {selectedService ? `${filteredVendors.length} ${selectedService} Vendors Available` : '16 Styling Vendors Available'}
                    </h3>
                    <p className="text-yellow-200 mt-2">
                      {selectedService ? `Showing results for "${selectedService}"` : 'Browse our professional styling vendors'}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <span className="text-white font-semibold">Price Range:</span>
                      <span className="text-yellow-300 ml-2">₹5,000 - ₹10,00,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vendor Profiles - SAME AS PHOTOGRAPHY */}
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
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No Vendors Found</h3>
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

            {/* Why Choose Us Section - SAME AS PHOTOGRAPHY */}
            <section className="py-12">
              <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
                Why Choose Our Styling Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Expert Stylists</h3>
                  <p className="text-gray-600 text-center">Certified makeup artists with years of experience</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Premium Products</h3>
                  <p className="text-gray-600 text-center">Using high-quality, branded cosmetics and tools</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Personalized Looks</h3>
                  <p className="text-gray-600 text-center">Customized styling based on your preferences</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-red-700 mb-2 text-center">On-Time Service</h3>
                  <p className="text-gray-600 text-center">Punctual and reliable service for all events</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Filter Section - SAME AS PHOTOGRAPHY */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-2xl border-2 border-red-200 p-6">
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center border-b-2 border-yellow-500 pb-3">
                Filter Stylists
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

              {/* Type of Service */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Type of Service</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">All Services</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>{service}</option>
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

export default Styling;