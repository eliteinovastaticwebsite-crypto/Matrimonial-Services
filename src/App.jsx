import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './Components/Header';
import VendorLoginForm from './pages/VendorLoginForm';

// Import existing page components
import Home from './pages/Home';
import Photography from './pages/Photography'; 
import Catering from './pages/Catering';
import WeddingHalls from './pages/WeddingHalls';
import Decoration from './pages/Decoration';
import Entertainment from './pages/Entertainment';
import Invitation from './pages/Invitation';
import Styling from './pages/Styling';
import VendorLogin from './pages/VendorLogin';
import VendorProfile from './pages/VendorProfile'; 

// Import NEW customer authentication pages
import CustomerProfile from './pages/CustomerProfile';
import CustomerRegistration from './pages/CustomerRegistration';
import CustomerLogin from './pages/CustomerLogin';
import RegisterChoice from './pages/RegisterChoice';
import LoginChoice from './pages/LoginChoice';

// Import all vendor form components
import PhotographyVendorForm from './Components/PhotographyForm';
import CateringVendorForm from './Components/CateringForm';
import WeddingHallsVendorForm from './Components/WeddingHallsForm';
import DecorationsVendorForm from './Components/DecorationsForm';
import EntertainmentVendorForm from './Components/EntertainmentForm';
import InvitationVendorForm from './Components/InvitationForm';
import StylingVendorForm from './Components/StylingForm';

// Create a wrapper component for VendorProfile with params
const VendorProfileWrapper = () => {
  const { vendorId } = useParams();
  return <VendorProfile vendorId={vendorId} />;
};

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeFormType, setActiveFormType] = useState(null);
  const [showVendorLoginModal, setShowVendorLoginModal] = useState(false);

  const openVendorForm = (formType) => {
    console.log(`Opening ${formType} form`);
    setActiveFormType(formType);
    setIsFormOpen(true);
  };

  const closeVendorForm = () => {
    setIsFormOpen(false);
    setActiveFormType(null);
  };

  const openVendorLoginModal = () => {
    setShowVendorLoginModal(true);
  };

  const closeVendorLoginModal = () => {
    setShowVendorLoginModal(false);
  };

  // Function to render the correct form based on type
  const renderVendorForm = () => {
    switch (activeFormType) {
      case 'photography':
        return <PhotographyVendorForm isOpen={isFormOpen} onClose={closeVendorForm} />;
      case 'catering':
        return <CateringVendorForm isOpen={isFormOpen} onClose={closeVendorForm} />;
      case 'wedding-halls':
        return <WeddingHallsVendorForm isOpen={isFormOpen} onClose={closeVendorForm} />;
      case 'decorations':
        return <DecorationsVendorForm isOpen={isFormOpen} onClose={closeVendorForm} />;
      case 'entertainment':
        return <EntertainmentVendorForm isOpen={isFormOpen} onClose={closeVendorForm} />;
      case 'invitation':
        return <InvitationVendorForm isOpen={isFormOpen} onClose={closeVendorForm} />;
      case 'styling':
        return <StylingVendorForm isOpen={isFormOpen} onClose={closeVendorForm} />;
      default:
        return null;
    }
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Header 
          onOpenVendorForm={openVendorForm} 
          onOpenVendorLoginModal={openVendorLoginModal}
        />
        
        {isFormOpen && renderVendorForm()}

        {showVendorLoginModal && (
          <VendorLoginForm 
            onClose={closeVendorLoginModal}
            showRegisterOptions={true}
          />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* ============================================ */}
          {/* CUSTOMER AUTHENTICATION ROUTES */}
          {/* ============================================ */}
          <Route path="/register-choice" element={<RegisterChoice />} />
          <Route path="/login-choice" element={<LoginChoice />} />
          <Route path="/customer-registration" element={<CustomerRegistration />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          
          {/* ============================================ */}
          {/* CUSTOMER SERVICE PAGES */}
          {/* ============================================ */}
          <Route path="/photography" element={<Photography />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/wedding-halls" element={<WeddingHalls />} />
          <Route path="/decorations" element={<Decoration />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/styling" element={<Styling />} />
          
          {/* ============================================ */}
          {/* VENDOR LOGIN & PROFILE ROUTES - UPDATED */}
          {/* ============================================ */}
          <Route path="/vendor-login" element={<VendorLogin onOpenVendorForm={openVendorForm} />} />
          
          {/* Vendor Profile Routes - Both with and without ID */}
          <Route path="/vendor-profile" element={<VendorProfileWrapper />} />
          <Route path="/vendor-profile/:vendorId" element={<VendorProfileWrapper />} />
          
          {/* Alternative vendor dashboard route */}
          <Route path="/vendor-dashboard" element={<VendorProfileWrapper />} />
          <Route path="/vendor-dashboard/:vendorId" element={<VendorProfileWrapper />} />
          
          {/* ============================================ */}
          {/* VENDOR REGISTRATION ROUTES */}
          {/* ============================================ */}
          <Route path="/vendor-registration" element={
            <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-50 flex items-center justify-center p-4">
              <div className="max-w-md w-full">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-yellow-700 mb-2">Vendor Registration</h1>
                  <p className="text-gray-600">Please use the service forms to register as a vendor</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-center text-gray-700 mb-4">
                    Click on any service in the navigation bar to register as a vendor for that service.
                  </p>
                  <button
                    onClick={() => navigate('/')}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all"
                  >
                    Go to Home
                  </button>
                </div>
              </div>
            </div>
          } />
          
          {/* ============================================ */}
          {/* VENDOR SERVICE FORMS ROUTES */}
          {/* ============================================ */}
          <Route path="/register/photography" element={
            <PhotographyVendorForm isOpen={true} onClose={() => window.history.back()} />
          } />
          <Route path="/register/catering" element={
            <CateringVendorForm isOpen={true} onClose={() => window.history.back()} />
          } />
          <Route path="/register/wedding-halls" element={
            <WeddingHallsVendorForm isOpen={true} onClose={() => window.history.back()} />
          } />
          <Route path="/register/decorations" element={
            <DecorationsVendorForm isOpen={true} onClose={() => window.history.back()} />
          } />
          <Route path="/register/entertainment" element={
            <EntertainmentVendorForm isOpen={true} onClose={() => window.history.back()} />
          } />
          <Route path="/register/invitation" element={
            <InvitationVendorForm isOpen={true} onClose={() => window.history.back()} />
          } />
          <Route path="/register/styling" element={
            <StylingVendorForm isOpen={true} onClose={() => window.history.back()} />
          } />
          
          {/* Redirect old /register to new choice page */}
          <Route path="/register" element={<RegisterChoice />} />
          
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;