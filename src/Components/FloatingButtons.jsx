import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingButtons = () => {
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  // Check for login status (to conditionally show/hide or change behavior)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  // Check login status on mount
  useEffect(() => {
    const checkLoginStatus = () => {
      const customerLoggedIn = localStorage.getItem('customerLoggedIn');
      const vendorLoggedIn = localStorage.getItem('vendorLoggedIn');
      
      if (customerLoggedIn === 'true') {
        setIsLoggedIn(true);
        setUserType('customer');
      } else if (vendorLoggedIn === 'true') {
        setIsLoggedIn(true);
        setUserType('vendor');
      } else {
        setIsLoggedIn(false);
        setUserType(null);
      }
    };

    checkLoginStatus();
    
    // Optional: Listen for storage changes (if login happens in another tab)
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  // Check scroll position to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle login click - matches Header behavior
  const handleLoginClick = () => {
    if (isLoggedIn) {
      // If already logged in, navigate to profile
      if (userType === 'customer') {
        navigate('/customer-profile');
      } else if (userType === 'vendor') {
        navigate('/vendor-profile/VEN-2024-00123'); // Or fetch actual vendor ID
      }
    } else {
      // If not logged in, go to login choice page
      navigate('/login-choice');
    }
  };

  // Handle register click - matches Header behavior
  const handleRegisterClick = () => {
    navigate('/register-choice');
  };

  // Handle logout (optional - you might want to add this to the social menu)
  const handleLogout = () => {
    if (userType === 'customer') {
      localStorage.removeItem('customerLoggedIn');
      localStorage.removeItem('customerData');
    } else if (userType === 'vendor') {
      localStorage.removeItem('vendorLoggedIn');
      localStorage.removeItem('vendorData');
    }
    setIsLoggedIn(false);
    setUserType(null);
    navigate('/');
  };

  return (
    <div className="fixed right-4 bottom-8 z-50 flex flex-col items-center gap-3">

      {/* Login Button - Updated to match Header behavior */}
      <button
        onClick={handleLoginClick}
        className="w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 gap-1"
        style={{ background: isLoggedIn ? 'linear-gradient(135deg, #7c3aed, #6d28d9)' : 'linear-gradient(135deg, #16a34a, #15803d)' }}
        title={isLoggedIn ? "My Profile" : "Login"}
      >
        {isLoggedIn ? (
          // Profile icon when logged in
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        ) : (
          // Login icon when not logged in
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        )}
        <span className="text-white font-bold text-xs">
          {isLoggedIn ? (userType === 'customer' ? 'Profile' : 'Vendor') : 'Login'}
        </span>
      </button>

      {/* Register Button - Updated to navigate to register choice */}
      <button
        onClick={handleRegisterClick}
        className="w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 gap-1"
        style={{ background: 'linear-gradient(135deg, #dc2626, #9b1c1c)' }}
        title="Register"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
        <span className="text-white font-bold text-xs">Reg</span>
      </button>

      {/* Optionally, add a Logout button in the social menu when logged in */}
      {/* YouTube Button */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, #ff0000, #cc0000)' }}
        title="YouTube"
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.5 6.2s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.8 2 12 2 12 2s-4.8 0-7.3.1c-.6.1-1.9.1-3 1.3C.8 4.2.5 6.2.5 6.2S.2 8.5.2 10.8v2.1c0 2.3.3 4.5.3 4.5s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.2 21.6 12 21.6 12 21.6s4.8 0 7.3-.2c.6-.1 1.9-.1 3-1.2.9-.8 1.2-2.8 1.2-2.8s.3-2.3.3-4.5v-2.1C23.8 8.5 23.5 6.2 23.5 6.2zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z" />
        </svg>
      </a>

      {/* Social Media Toggle */}
      <div className="relative flex flex-col items-center">
        {showSocialMenu && (
          <div
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-52 border border-gray-100"
            style={{ boxShadow: '0 8px 32px rgba(185,28,28,0.15)' }}
          >
            <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Follow Us</p>
            <div className="grid grid-cols-3 gap-3">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-all shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5 6.2s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.8 2 12 2 12 2s-4.8 0-7.3.1c-.6.1-1.9.1-3 1.3C.8 4.2.5 6.2.5 6.2S.2 8.5.2 10.8v2.1c0 2.3.3 4.5.3 4.5s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.2 21.6 12 21.6 12 21.6s4.8 0 7.3-.2c.6-.1 1.9-.1 3-1.2.9-.8 1.2-2.8 1.2-2.8s.3-2.3.3-4.5v-2.1C23.8 8.5 23.5 6.2 23.5 6.2zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-gray-600">YouTube</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-all shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-gray-600">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-all shadow-md">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-gray-600">X (Twitter)</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all shadow-md"
                  style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-gray-600">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center group-hover:scale-110 transition-all shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-gray-600">LinkedIn</span>
              </a>
            </div>
            
            {/* Optional: Add Logout button in social menu when logged in */}
            {isLoggedIn && (
              <div className="mt-3 pt-2 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full text-center text-xs font-semibold text-red-600 hover:text-red-700 py-1 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Social Media Button */}
        <button
          onClick={() => setShowSocialMenu(prev => !prev)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
          style={{ background: showSocialMenu ? 'linear-gradient(135deg, #dc2626, #b91c1c)' : 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
          title="Social Media"
        >
          {showSocialMenu ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
            </svg>
          )}
        </button>
      </div>

      {/* Scroll to Top - Only shows when page is scrolled down */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)', border: '2px solid #555' }}
          title="Scroll to Top"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

    </div>
  );
};

export default FloatingButtons;