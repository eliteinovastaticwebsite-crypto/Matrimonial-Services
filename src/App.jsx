import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

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

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeFormType, setActiveFormType] = useState(null);

  const openVendorForm = (formType) => {
    console.log(`Opening ${formType} form`);
    setActiveFormType(formType);
    setIsFormOpen(true);
  };

  const closeVendorForm = () => {
    setIsFormOpen(false);
    setActiveFormType(null);
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
        <Header onOpenVendorForm={openVendorForm} />
        
        {/* Render the active vendor form modal */}
        {isFormOpen && renderVendorForm()}

        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* ============================================ */}
          {/* CUSTOMER AUTHENTICATION ROUTES (NEW) */}
          {/* ============================================ */}
          <Route path="/register-choice" element={<RegisterChoice />} />
          <Route path="/login-choice" element={<LoginChoice />} />
          <Route path="/customer-registration" element={<CustomerRegistration />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          
          {/* ============================================ */}
          {/* CUSTOMER SERVICE PAGES (existing) */}
          {/* ============================================ */}
          <Route path="/photography" element={<Photography />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/wedding-halls" element={<WeddingHalls />} />
          <Route path="/decorations" element={<Decoration />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/styling" element={<Styling />} />
          
          {/* ============================================ */}
          {/* VENDOR SERVICE PAGES (existing) */}
          {/* ============================================ */}
          <Route path="/photography-vendor" element={<Photography />} />
          <Route path="/catering-vendor" element={<Catering />} />
          <Route path="/wedding-halls-vendor" element={<WeddingHalls />} />
          <Route path="/decorations-vendor" element={<Decoration />} />
          <Route path="/entertainment-vendor" element={<Entertainment />} />
          <Route path="/invitation-vendor" element={<Invitation />} />
          <Route path="/styling-vendor" element={<Styling />} />
          
          {/* ============================================ */}
          {/* VENDOR LOGIN & PROFILE ROUTES (existing) */}
          {/* ============================================ */}
          <Route path="/vendor-login" element={<VendorLogin onOpenVendorForm={openVendorForm} />} />
          <Route path="/vendor-profile" element={<VendorProfile />} />
          <Route path="/vendor-profile/:vendorId" element={<VendorProfile />} />
          
          {/* ============================================ */}
          {/* OTHER PAGES (existing) */}
          {/* ============================================ 
          <Route path="/office-panel" element={<Home />} />
          <Route path="/admin-panel" element={<Home />} />
          <Route path="/help-support" element={<Home />} />
          <Route path="/about-us" element={<Home />} />*/}
          
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