import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import profileIcon from '../assets/profile-icon.svg'; // You can add this icon or use an SVG

const Header = ({ onOpenVendorForm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);
  const vendorDropdownRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const activeMenu = location.pathname.substring(1) || 'HOME';

  // Check if user is logged in (you can replace this with actual auth logic)
  // For now, we'll set it to false to test the login flow
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to false initially

  // Check for stored login status on component mount
  useEffect(() => {
    // In a real app, you would check localStorage, cookies, or an auth token
    const storedLoginStatus = localStorage.getItem('vendorLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const menuItems = [
    { name: 'HOME', path: '/' },
    { 
      name: 'CUSTOMER LOGIN', 
      path: '/customer-login',
      hasDropdown: true,
      dropdownType: 'customer',
      submenus: [
        { name: 'Photography', path: '/photography', type: 'page' },
        { name: 'Catering & Foods', path: '/catering', type: 'page' },
        { name: 'Mandapam & Wedding Halls', path: '/wedding-halls', type: 'page' },
        { name: 'Decorations', path: '/decorations', type: 'page' },
        { name: 'Entertainment & Events', path: '/entertainment', type: 'page' },
        { name: 'Invitation & Gifts', path: '/invitation', type: 'page' },
        { name: 'Bridal & Groom Styling', path: '/styling', type: 'page' },
      ]
    },
    { 
      name: 'VENDOR LOGIN', 
      path: '/vendor-login',
      hasDropdown: true,
      dropdownType: 'vendor',
      submenus: [
        { name: 'Photography Vendor Form', path: '/photography-vendor', formType: 'photography', type: 'form' },
        { name: 'Catering & Foods Vendor Form', path: '/catering-vendor', formType: 'catering', type: 'form' },
        { name: 'Wedding Halls Vendor Form', path: '/wedding-halls-vendor', formType: 'wedding-halls', type: 'form' },
        { name: 'Decorations Vendor Form', path: '/decorations-vendor', formType: 'decorations', type: 'form' },
        { name: 'Entertainment Vendor Form', path: '/entertainment-vendor', formType: 'entertainment', type: 'form' },
        { name: 'Invitation & Gifts Vendor Form', path: '/invitation-vendor', formType: 'invitation', type: 'form' },
        { name: 'Styling Vendor Form', path: '/styling-vendor', formType: 'styling', type: 'form' },
      ]
    },
    { name: 'OFFICE PANNEL', path: '/office-panel' },
    { name: 'ADMIN PANNEL', path: '/admin-panel' },
    { name: 'HELP & SUPPORT', path: '/help-support' },
    { name: 'ABOUT US', path: '/about-us' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is inside dropdowns
      const isInsideCustomerDropdown = dropdownRef.current?.contains(event.target);
      const isInsideVendorDropdown = vendorDropdownRef.current?.contains(event.target);
      const isCustomerDropdownButton = event.target.closest('button')?.textContent?.includes('CUSTOMER LOGIN');
      const isVendorDropdownButton = event.target.closest('button')?.textContent?.includes('VENDOR LOGIN');
      
      if (!isInsideCustomerDropdown && !isCustomerDropdownButton && activeDropdown === 'CUSTOMER LOGIN') {
        setActiveDropdown(null);
      }
      
      if (!isInsideVendorDropdown && !isVendorDropdownButton && activeDropdown === 'VENDOR LOGIN') {
        setActiveDropdown(null);
      }
      
      // Close mobile menu if clicking outside
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setMobileDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [activeDropdown]);

  const handleMenuClick = (item) => {
    if (item.hasDropdown) {
      // Toggle dropdown for login items
      if (activeDropdown === item.name) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(item.name);
      }
      setIsMenuOpen(false);
      if (window.innerWidth < 1024) {
        if (mobileDropdownOpen === item.dropdownType) {
          setMobileDropdownOpen(null);
        } else {
          setMobileDropdownOpen(item.dropdownType);
        }
      }
    } else {
      // Close dropdowns and navigate for other items
      setActiveDropdown(null);
      setMobileDropdownOpen(null);
      setIsMenuOpen(false);
      navigate(item.path);
    }
  };

  const handleSubmenuClick = (item) => {
    if (item.type === 'form' && item.formType && onOpenVendorForm) {
      // Open vendor form modal
      onOpenVendorForm(item.formType);
      setActiveDropdown(null);
      setMobileDropdownOpen(null);
      setIsMenuOpen(false);
    } else {
      // Navigate to page
      navigate(item.path);
      setActiveDropdown(null);
      setMobileDropdownOpen(null);
      setIsMenuOpen(false);
    }
  };

  const handleVendorLoginClick = () => {
    navigate('/vendor-login');
    setActiveDropdown(null);
    setMobileDropdownOpen(null);
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (itemName) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = (itemName) => {
    if (window.innerWidth >= 1024) {
      // Only hide if not hovering over dropdown
      setTimeout(() => {
        if (activeDropdown === itemName) {
          const dropdownElement = itemName === 'CUSTOMER LOGIN' ? dropdownRef.current : vendorDropdownRef.current;
          if (!dropdownElement?.contains(document.activeElement) && 
              !dropdownElement?.matches(':hover')) {
            setActiveDropdown(null);
          }
        }
      }, 300); // Increased delay for better UX
    }
  };

  const handleDropdownMouseEnter = (dropdownType) => {
    if (window.innerWidth >= 1024) {
      if (dropdownType === 'customer') {
        setActiveDropdown('CUSTOMER LOGIN');
      } else if (dropdownType === 'vendor') {
        setActiveDropdown('VENDOR LOGIN');
      }
    }
  };

  const handleDropdownMouseLeave = (dropdownType) => {
    if (window.innerWidth >= 1024) {
      setTimeout(() => {
        const mainButton = document.querySelector(`button:contains("${dropdownType === 'customer' ? 'CUSTOMER LOGIN' : 'VENDOR LOGIN'}")`);
        if (!mainButton?.matches(':hover') && 
            !(dropdownType === 'customer' ? dropdownRef.current : vendorDropdownRef.current)?.matches(':hover')) {
          setActiveDropdown(null);
        }
      }, 300); // Increased delay for better UX
    }
  };

  const toggleMobileDropdown = (dropdownType) => {
    if (mobileDropdownOpen === dropdownType) {
      setMobileDropdownOpen(null);
    } else {
      setMobileDropdownOpen(dropdownType);
    }
  };

  const isActiveMenu = (item) => {
    const currentPath = location.pathname;
    if (item.hasDropdown) {
      return item.submenus.some(submenu => submenu.path === currentPath) || 
             item.path === currentPath;
    }
    return item.path === currentPath || (item.path === '/' && currentPath === '');
  };

  const isActiveSubmenu = (path) => {
    return location.pathname === path;
  };

  const getDropdownRef = (dropdownType) => {
    return dropdownType === 'customer' ? dropdownRef : vendorDropdownRef;
  };

  // Custom hover detection
  useEffect(() => {
    const handleGlobalMouseMove = (event) => {
      if (window.innerWidth >= 1024) {
        if (activeDropdown) {
          const dropdownElement = activeDropdown === 'CUSTOMER LOGIN' ? dropdownRef.current : vendorDropdownRef.current;
          const mainButton = document.querySelector(`button:contains("${activeDropdown}")`);
          
          // Check if mouse is over dropdown or main button
          const isOverDropdown = dropdownElement?.contains(event.target);
          const isOverButton = mainButton?.contains(event.target);
          
          // If mouse is not over either, close dropdown after delay
          if (!isOverDropdown && !isOverButton) {
            setTimeout(() => {
              if (!dropdownElement?.contains(document.activeElement) && 
                  !mainButton?.contains(document.activeElement)) {
                setActiveDropdown(null);
              }
            }, 300);
          }
        }
      }
    };

    if (window.innerWidth >= 1024) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
      };
    }
  }, [activeDropdown]);

  const handleProfileClick = () => {
    // Check if user is logged in
    if (isLoggedIn) {
      // If logged in, navigate to vendor profile page
      // In real app, you might need to pass vendor ID: `/vendor-profile/${vendorId}`
      navigate('/vendor-profile/VEN-2024-00123'); // Example vendor ID
    } else {
      // If not logged in, navigate to vendor login page
      navigate('/vendor-login');
    }
    
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdownOpen(null);
  };

  // Function to handle successful login (to be called from login page)
  const handleLoginSuccess = (vendorId) => {
    setIsLoggedIn(true);
    localStorage.setItem('vendorLoggedIn', 'true');
    // Optionally store vendor ID for future use
    if (vendorId) {
      localStorage.setItem('vendorId', vendorId);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('vendorLoggedIn');
    localStorage.removeItem('vendorId');
    // Redirect to home or login page
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg w-full">
      {/* Top decorative strip */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 w-full"></div>
      
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Logo, Heading, Profile and Register Now Buttons */}
          <div className="flex items-center justify-between py-3 border-b border-yellow-500/30">
            {/* Logo and Heading - LEFT */}
            <div className="flex items-center space-x-3">
              {/* Logo with Link to Home */}
              <Link 
                to="/" 
                className="flex items-center space-x-3" 
                onClick={() => {
                  setActiveDropdown(null);
                  setMobileDropdownOpen(null);
                  setIsMenuOpen(false);
                }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg border-3 border-yellow-300 overflow-hidden flex-shrink-0">
                  <img 
                    src={logo} 
                    alt="Eliteinova Logo" 
                    className="h-full w-full object-contain p-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23F59E0B'/%3E%3Cstop offset='100%25' stop-color='%23D97706'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='30' fill='url(%23grad)'/%3E%3Ctext x='32' y='38' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='%23DC2626'%3EE%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                {/* Heading and Subheading */}
                <div className="text-yellow-50">
                  <h1 className="font-bold text-lg sm:text-xl md:text-2xl leading-tight" style={{ fontFamily: 'Pacifico, cursive' }}>
                    Eliteinova Matrimonial Services
                  </h1>
                  <p className="text-yellow-200 text-xs md:text-sm" style={{ fontFamily: 'Pacifico, cursive' }}>
                    Eliteinova Tech Pvt Ltd
                  </p>
                </div>
              </Link>
            </div>

            {/* Profile Icon and Register Now Button - RIGHT */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Profile Icon - Showing all the time */}
              <div className="relative group">
                <button
                  onClick={handleProfileClick}
                  className="p-2 rounded-full hover:bg-red-800 transition-all duration-300"
                  title={isLoggedIn ? "My Profile" : "Vendor Login"}
                >
                  {/* Profile Icon SVG */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center border-2 border-yellow-300 shadow-md">
                    <svg className="w-5 h-5 text-red-900" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  
                  {/* Logged in indicator */}
                  {isLoggedIn && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </button>
                
                {/* Tooltip on hover */}
                <div className="absolute right-0 top-full mt-2 w-32 bg-red-900 text-yellow-50 text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 shadow-lg">
                  <div className="text-center font-medium">
                    {isLoggedIn ? "My Profile" : "Vendor Login"}
                  </div>
                  {isLoggedIn && (
                    <div className="text-center text-yellow-200 text-[10px] mt-0.5">
                      Click to view profile
                    </div>
                  )}
                </div>

                {/* Logout button when logged in (optional dropdown) */}
                {isLoggedIn && (
                  <div className="absolute right-0 top-full mt-8 w-40 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-300 rounded-t-md"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Register Now Button */}
              <Link 
                to="/register" 
                onClick={() => {
                  setActiveDropdown(null);
                  setMobileDropdownOpen(null);
                }}
              >
                <button className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-bold text-base rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                  REGISTER NOW
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button - RIGHT (for mobile) */}
            <button
              className="lg:hidden text-yellow-50 p-2 rounded-lg hover:bg-red-800 flex-shrink-0"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setActiveDropdown(null);
                setMobileDropdownOpen(null);
              }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Menu Row */}
          <div className="py-1">
            {/* Desktop Navigation - Full Width */}
            <nav className="hidden lg:flex items-center justify-center space-x-1">
              {menuItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative h-full group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={() => handleMouseLeave(item.name)}
                >
                  {item.hasDropdown ? (
                    <div 
                      ref={getDropdownRef(item.dropdownType)}
                      className="relative h-full"
                      onMouseEnter={() => handleDropdownMouseEnter(item.dropdownType)}
                      onMouseLeave={() => handleDropdownMouseLeave(item.dropdownType)}
                    >
                      {/* Main Menu Button for Dropdown */}
                      <button
                        onClick={() => handleMenuClick(item)}
                        className={`px-3 py-1.5 rounded transition-all duration-300 font-medium text-sm whitespace-nowrap text-center flex items-center gap-1 min-w-[140px] h-full ${
                          (isActiveMenu(item) || activeDropdown === item.name)
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 shadow-md'
                            : 'text-yellow-50 hover:bg-red-800 hover:text-yellow-200'
                        }`}
                      >
                        {item.name}
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown Menu - Properly aligned */}
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute top-full left-0 mt-0 w-72 bg-white rounded-b-lg shadow-2xl border border-gray-200 py-2 z-50 animate-dropdown-slide"
                          onMouseEnter={() => handleDropdownMouseEnter(item.dropdownType)}
                          onMouseLeave={() => handleDropdownMouseLeave(item.dropdownType)}
                        >
                          {/* Also link to main login page */}
                          <button
                            onClick={() => {
                              if (item.dropdownType === 'vendor') {
                                handleVendorLoginClick();
                              } else {
                                navigate(item.path);
                                setActiveDropdown(null);
                              }
                            }}
                            className={`w-full text-left px-4 py-3 transition-all duration-300 font-medium border-b border-gray-100 ${
                              isActiveSubmenu(item.path)
                                ? 'bg-red-50 text-red-700'
                                : 'text-gray-700 hover:bg-red-50 hover:text-red-700'
                            }`}
                          >
                            <span className="font-bold">
                              {item.dropdownType === 'customer' ? 'All Customer Services' : 'Vendor Login Page'}
                            </span>
                          </button>
                          
                          {/* Submenu Items */}
                          {item.submenus.map((submenu) => (
                            <button
                              key={submenu.name}
                              onClick={() => handleSubmenuClick(submenu)}
                              className={`w-full text-left px-4 py-3 transition-all duration-300 font-medium ${
                                isActiveSubmenu(submenu.path)
                                  ? 'bg-red-50 text-red-700'
                                  : 'text-gray-700 hover:bg-red-50 hover:text-red-700'
                              }`}
                            >
                              {submenu.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => handleMenuClick(item)}
                      className={`px-3 py-1.5 rounded transition-all duration-300 font-medium text-sm whitespace-nowrap text-center min-w-[140px] block ${
                        isActiveMenu(item)
                          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 shadow-md'
                          : 'text-yellow-50 hover:bg-red-800 hover:text-yellow-200'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div ref={menuRef} className="lg:hidden bg-gradient-to-b from-red-700 to-red-800 rounded-lg shadow-xl border border-yellow-500/30 p-4">
                <div className="flex flex-col space-y-2">
                  {/* Mobile Profile Section */}
                  <div className="pb-3 border-b border-yellow-500/20">
                    <button
                      onClick={handleProfileClick}
                      className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg hover:from-yellow-500/30 hover:to-yellow-600/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center border-2 border-yellow-300 relative">
                        <svg className="w-6 h-6 text-red-900" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {isLoggedIn && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-yellow-50">
                          {isLoggedIn ? "My Profile" : "Vendor Login"}
                        </div>
                        <div className="text-xs text-yellow-200">
                          {isLoggedIn ? "View vendor profile" : "Login to access profile"}
                        </div>
                      </div>
                    </button>
                    {isLoggedIn && (
                      <button
                        onClick={handleLogout}
                        className="w-full mt-2 px-4 py-2 text-sm text-yellow-100 hover:text-white hover:bg-red-600 rounded-md transition-all duration-300"
                      >
                        Logout
                      </button>
                    )}
                  </div>

                  {menuItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div className="border-b border-yellow-500/20 pb-2">
                          {/* Mobile dropdown button */}
                          <button
                            onClick={() => {
                              if (window.innerWidth < 1024) {
                                toggleMobileDropdown(item.dropdownType);
                              }
                            }}
                            className={`w-full px-4 py-3 rounded text-center transition-all duration-300 font-medium flex items-center justify-between ${
                              (isActiveMenu(item) || mobileDropdownOpen === item.dropdownType)
                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900'
                                : 'text-yellow-100 hover:bg-red-600'
                            }`}
                          >
                            {item.name}
                            <svg 
                              className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen === item.dropdownType ? 'rotate-180' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {/* Mobile Dropdown Content */}
                          {mobileDropdownOpen === item.dropdownType && (
                            <div className="mt-2 space-y-1 bg-white rounded-lg p-2 shadow-lg">
                              {/* Main login link in dropdown */}
                              <button
                                onClick={() => {
                                  if (item.dropdownType === 'vendor') {
                                    handleVendorLoginClick();
                                  } else {
                                    navigate(item.path);
                                    setMobileDropdownOpen(null);
                                    setIsMenuOpen(false);
                                  }
                                }}
                                className={`block w-full text-left px-4 py-2.5 rounded transition-all duration-300 font-medium ${
                                  isActiveSubmenu(item.path)
                                    ? 'bg-red-50 text-red-700'
                                    : 'text-gray-700 hover:bg-red-50 hover:text-red-700'
                                }`}
                              >
                                <span className="font-bold">
                                  {item.dropdownType === 'customer' ? 'All Customer Services' : 'Vendor Login Page'}
                                </span>
                              </button>
                              
                              {/* Submenu items */}
                              {item.submenus.map((submenu) => (
                                <button
                                  key={submenu.name}
                                  onClick={() => handleSubmenuClick(submenu)}
                                  className={`block w-full text-left px-4 py-2.5 rounded transition-all duration-300 font-medium ${
                                    isActiveSubmenu(submenu.path)
                                      ? 'bg-red-50 text-red-700'
                                      : 'text-gray-700 hover:bg-red-50 hover:text-red-700'
                                  }`}
                                >
                                  {submenu.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => handleMenuClick(item)}
                          className={`px-4 py-3 rounded text-center transition-all duration-300 font-medium block ${
                            isActiveMenu(item)
                              ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900'
                              : 'text-yellow-100 hover:bg-red-600'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile Register Now Button */}
                  <div className="pt-4 border-t border-yellow-500/20">
                    <Link 
                      to="/register" 
                      onClick={() => {
                        setActiveDropdown(null);
                        setMobileDropdownOpen(null);
                        setIsMenuOpen(false);
                      }}
                    >
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-bold rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300">
                        REGISTER NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom decorative strip */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 w-full"></div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes dropdown-slide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-dropdown-slide {
          animation: dropdown-slide 0.2s ease-out forwards;
        }
        
        /* Ensure dropdown stays open when hovering over it */
        .group:hover .dropdown-content {
          display: block;
        }
      `}</style>
    </header>
  );
};

export default Header;