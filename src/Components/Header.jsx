// Header.jsx - Updated with React Router and Pacifico Font
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const activeMenu = location.pathname.substring(1) || 'HOME';

  const menuItems = [
    { name: 'HOME', path: '/' },
    { 
      name: 'CUSTOMER LOGIN', 
      path: '/customer-login',
      hasDropdown: true,
      submenus: [
        { name: 'Photography', path: '/photography' },
        { name: 'Catering & Foods', path: '/catering' },
        { name: 'Mandapam & Wedding Halls', path: '/wedding-halls' },
        { name: 'Decorations', path: '/decorations' },
        { name: 'Entertainment & Events', path: '/entertainment' },
        { name: 'Invitation & Gifts', path: '/invitation' },
        { name: 'Bridal & Groom Styling', path: '/styling' },
      ]
    },
    { name: 'VENDOR LOGIN', path: '/vendor-login' },
    { name: 'OFFICE PANNEL', path: '/office-panel' },
    { name: 'ADMIN PANNEL', path: '/admin-panel' },
    { name: 'HELP & SUPPORT', path: '/help-support' },
    { name: 'ABOUT US', path: '/about-us' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCustomerDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    setIsCustomerDropdownOpen(false);
  };

  const handleSubmenuClick = () => {
    setIsCustomerDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg w-full">
      {/* Top decorative strip */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 w-full"></div>
      
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Logo, Heading, and Register Now Button */}
          <div className="flex items-center justify-between py-3 border-b border-yellow-500/30">
            {/* Logo and Heading - LEFT */}
            <div className="flex items-center space-x-3">
              {/* Logo with Link to Home */}
              <Link to="/" className="flex items-center space-x-3">
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

            {/* Register Now Button - RIGHT */}
            <div className="hidden lg:block">
              <Link to="/register">
                <button className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-bold text-base rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                  REGISTER NOW
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button - RIGHT (for mobile) */}
            <button
              className="lg:hidden text-yellow-50 p-2 rounded-lg hover:bg-red-800 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <nav className="hidden lg:flex items-center justify-center space-x-2">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setIsCustomerDropdownOpen(true)}
                      onMouseLeave={() => setIsCustomerDropdownOpen(false)}
                    >
                      <button
                        onClick={() => setIsCustomerDropdownOpen(!isCustomerDropdownOpen)}
                        className={`px-3 py-1 rounded transition-all duration-300 font-medium text-sm whitespace-nowrap text-center flex items-center gap-1 ${
                          activeMenu === (item.path.substring(1) || 'HOME')
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 shadow-md'
                            : 'text-yellow-50 hover:bg-red-800 hover:text-yellow-200'
                        }`}
                      >
                        {item.name}
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${isCustomerDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown Menu - Milder Colors */}
                      {isCustomerDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 z-50">
                          {item.submenus.map((submenu) => (
                            <Link
                              key={submenu.name}
                              to={submenu.path}
                              onClick={handleSubmenuClick}
                              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-300 font-medium"
                            >
                              {submenu.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={handleMenuClick}
                      className={`px-3 py-1 rounded transition-all duration-300 font-medium text-sm whitespace-nowrap text-center ${
                        activeMenu === (item.path.substring(1) || 'HOME')
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
              <div className="lg:hidden bg-gradient-to-b from-red-700 to-red-800 rounded-lg shadow-xl border border-yellow-500/30 p-4">
                <div className="flex flex-col space-y-2">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsCustomerDropdownOpen(!isCustomerDropdownOpen)}
                            className={`w-full px-4 py-3 rounded text-center transition-all duration-300 font-medium flex items-center justify-between ${
                              activeMenu === (item.path.substring(1) || 'HOME')
                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900'
                                : 'text-yellow-100 hover:bg-red-600'
                            }`}
                          >
                            {item.name}
                            <svg 
                              className={`w-4 h-4 transition-transform duration-300 ${isCustomerDropdownOpen ? 'rotate-180' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {/* Mobile Dropdown - Milder Colors */}
                          {isCustomerDropdownOpen && (
                            <div className="mt-2 ml-4 space-y-2 bg-white rounded-lg p-2 shadow-lg">
                              {item.submenus.map((submenu) => (
                                <Link
                                  key={submenu.name}
                                  to={submenu.path}
                                  onClick={handleMenuClick}
                                  className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded transition-all duration-300 font-medium"
                                >
                                  {submenu.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={handleMenuClick}
                          className={`px-4 py-3 rounded text-center transition-all duration-300 font-medium block ${
                            activeMenu === (item.path.substring(1) || 'HOME')
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
                  <Link to="/register" onClick={handleMenuClick}>
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-bold rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 mt-2">
                      REGISTER NOW
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom decorative strip */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 w-full"></div>
    </header>
  );
};

export default Header;