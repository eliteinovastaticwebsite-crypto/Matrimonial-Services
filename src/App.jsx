// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

// Import page components
import Home from './pages/Home';
{/*import CustomerLogin from './pages/CustomerLogin';
import VendorLogin from './pages/VendorLogin';
import OfficePanel from './pages/OfficePanel';
import AdminPanel from './pages/AdminPanel';
import HelpSupport from './pages/HelpSupport';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register'; // You'll need to create this */}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
         {/*} <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/office-panel" element={<OfficePanel />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
           Add a 404 page if needed */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;