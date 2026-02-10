import React, { useState, useEffect } from 'react';
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

// Import Background Investigations components
import BackgroundInvestigationsForm from './Components/BackgroundInvestigationsForm';
import BackgroundInvestigationsPage from './pages/BackgroundInvestigationsPage';

// Create a wrapper component for VendorProfile with params
const VendorProfileWrapper = () => {
  const { vendorId } = useParams();
  return <VendorProfile vendorId={vendorId} />;
};

// Create wrapper components for each page to pass the openVendorForm prop
const PhotographyWrapper = ({ openVendorForm }) => <Photography openVendorForm={openVendorForm} />;
const CateringWrapper = ({ openVendorForm }) => <Catering openVendorForm={openVendorForm} />;
const WeddingHallsWrapper = ({ openVendorForm }) => <WeddingHalls openVendorForm={openVendorForm} />;
const DecorationWrapper = ({ openVendorForm }) => <Decoration openVendorForm={openVendorForm} />;
const EntertainmentWrapper = ({ openVendorForm }) => <Entertainment openVendorForm={openVendorForm} />;
const InvitationWrapper = ({ openVendorForm }) => <Invitation openVendorForm={openVendorForm} />;
const StylingWrapper = ({ openVendorForm }) => <Styling openVendorForm={openVendorForm} />;
const BackgroundInvestigationsWrapper = ({ openVendorForm }) => <BackgroundInvestigationsPage openVendorForm={openVendorForm} />;
const VendorLoginWrapper = ({ openVendorForm }) => <VendorLogin openVendorForm={openVendorForm} />;

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeFormType, setActiveFormType] = useState(null);
  const [showVendorLoginModal, setShowVendorLoginModal] = useState(false);

  const openVendorForm = (formType) => {
    console.log(`App.jsx: Opening ${formType} form`);
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
    console.log(`App.jsx: Rendering ${activeFormType} form, isOpen: ${isFormOpen}`);
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
      case 'background-investigations':
        return <BackgroundInvestigationsForm isOpen={isFormOpen} onClose={closeVendorForm} />;
      default:
        return null;
    }
  };

  // Listen for form opening events from anywhere in the app
  useEffect(() => {
    const handleGlobalFormOpen = (event) => {
      if (event.detail && event.detail.formType) {
        console.log(`Global event: Opening ${event.detail.formType} form`);
        openVendorForm(event.detail.formType);
      }
    };

    window.addEventListener('openVendorFormGlobal', handleGlobalFormOpen);

    return () => {
      window.removeEventListener('openVendorFormGlobal', handleGlobalFormOpen);
    };
  }, []);

  // Also update the Header to add a global event dispatcher
  // Add this function to your Header component:
  // const dispatchFormOpenEvent = (formType) => {
  //   const event = new CustomEvent('openVendorFormGlobal', {
  //     detail: { formType }
  //   });
  //   window.dispatchEvent(event);
  // };

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
          <Route path="/photography" element={<PhotographyWrapper openVendorForm={openVendorForm} />} />
          <Route path="/catering" element={<CateringWrapper openVendorForm={openVendorForm} />} />
          <Route path="/wedding-halls" element={<WeddingHallsWrapper openVendorForm={openVendorForm} />} />
          <Route path="/decorations" element={<DecorationWrapper openVendorForm={openVendorForm} />} />
          <Route path="/entertainment" element={<EntertainmentWrapper openVendorForm={openVendorForm} />} />
          <Route path="/invitation" element={<InvitationWrapper openVendorForm={openVendorForm} />} />
          <Route path="/styling" element={<StylingWrapper openVendorForm={openVendorForm} />} />
          <Route path="/background-investigations" element={<BackgroundInvestigationsWrapper openVendorForm={openVendorForm} />} />
          
          {/* ============================================ */}
          {/* VENDOR LOGIN & PROFILE ROUTES - UPDATED */}
          {/* ============================================ */}
          <Route path="/vendor-login" element={<VendorLoginWrapper openVendorForm={openVendorForm} />} />
          
          {/* Vendor Profile Routes - Both with and without ID */}
          <Route path="/vendor-profile" element={<VendorProfileWrapper />} />
          <Route path="/vendor-profile/:vendorId" element={<VendorProfileWrapper />} />
          
          {/* Alternative vendor dashboard route */}
          <Route path="/vendor-dashboard" element={<VendorProfileWrapper />} />
          <Route path="/vendor-dashboard/:vendorId" element={<VendorProfileWrapper />} />
          
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
          <Route path="/register/background-investigations" element={
            <BackgroundInvestigationsForm isOpen={true} onClose={() => window.history.back()} />
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