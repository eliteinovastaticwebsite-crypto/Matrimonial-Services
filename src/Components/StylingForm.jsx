import React, { useState } from "react";
import { ArrowLeft, Palette, Scissors, Brush, Sparkles, User, Users, Heart, Globe, Banknote, X } from "lucide-react";

// Form steps
const steps = [
  "Vendor Details",
  "Contact Information",
  "Business & Legal",
  "Styling Specialization",
  "Products & Hygiene",
  "Team & Equipment",
  "Packages & Pricing",
  "Service Coverage",
  "Portfolio & Experience",
  "Bank Details",
  "Declaration"
];

// Service types
const serviceTypes = [
  "Bridal Makeup",
  "Groom Makeup & Styling",
  "Hairstyling",
  "Saree / Costume Draping",
  "Mehendi (Henna)",
  "Pre-Bridal / Pre-Groom Packages"
];

// Bridal makeup styles
const bridalStyles = [
  "Traditional",
  "HD Makeup",
  "Airbrush Makeup",
  "Natural / Minimal",
  "Celebrity / Theme-based"
];

// Groom styling services
const groomServices = [
  "Hairstyling",
  "Makeup",
  "Beard / Grooming",
  "Costume Draping"
];

// Product brands
const productBrands = [
  "MAC",
  "HUDA Beauty",
  "Bobbi Brown",
  "Kryolan"
];

// Business types
const businessTypes = [
  "Individual",
  "Proprietorship",
  "Partnership",
  "Private Limited"
];

// Preferred locations
const serviceLocations = [
  "Salon",
  "Client Location",
  "Wedding Venue",
  "Outstation"
];

export default function StylingVendorRegistrationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    vendorName: "",
    leadStylist: "",
    selectedServices: [],
    otherService: "",
    
    // Step 2
    mobile: "",
    alternateMobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    
    // Step 3
    businessType: "",
    gstNumber: "",
    panNumber: "",
    certification: "",
    experience: "",
    
    // Step 4
    selectedBridalStyles: [],
    selectedGroomServices: [],
    
    // Step 5
    selectedProductBrands: [],
    otherBrands: "",
    hygieneKits: "",
    patchTest: "",
    
    // Step 6
    teamSize: "",
    ownKit: "",
    backupArtist: "",
    
    // Step 7
    bridalPackage: "",
    groomPackage: "",
    engagementPackage: "",
    mehendiCharges: "",
    advanceRequired: "",
    advanceAmount: "",
    
    // Step 8
    preferredLocations: [],
    travelCharges: "",
    
    // Step 9
    weddingsStyled: "",
    portfolioLink: "",
    photosAttached: "",
    
    // Step 10
    accountName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
    
    // Step 11
    declaration: false
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const services = [...prev.selectedServices];
      if (services.includes(service)) {
        return { ...prev, selectedServices: services.filter(s => s !== service) };
      } else {
        return { ...prev, selectedServices: [...services, service] };
      }
    });
  };

  const handleBridalStyleToggle = (style) => {
    setFormData(prev => {
      const styles = [...prev.selectedBridalStyles];
      if (styles.includes(style)) {
        return { ...prev, selectedBridalStyles: styles.filter(s => s !== style) };
      } else {
        return { ...prev, selectedBridalStyles: [...styles, style] };
      }
    });
  };

  const handleGroomServiceToggle = (service) => {
    setFormData(prev => {
      const services = [...prev.selectedGroomServices];
      if (services.includes(service)) {
        return { ...prev, selectedGroomServices: services.filter(s => s !== service) };
      } else {
        return { ...prev, selectedGroomServices: [...services, service] };
      }
    });
  };

  const handleProductBrandToggle = (brand) => {
    setFormData(prev => {
      const brands = [...prev.selectedProductBrands];
      if (brands.includes(brand)) {
        return { ...prev, selectedProductBrands: brands.filter(b => b !== brand) };
      } else {
        return { ...prev, selectedProductBrands: [...brands, brand] };
      }
    });
  };

  const handleLocationToggle = (location) => {
    setFormData(prev => {
      const locations = [...prev.preferredLocations];
      if (locations.includes(location)) {
        return { ...prev, preferredLocations: locations.filter(l => l !== location) };
      } else {
        return { ...prev, preferredLocations: [...locations, location] };
      }
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Registration submitted successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-gradient-to-b from-pink-50 to-rose-50 w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh] lg:max-h-[90vh] border border-pink-200">

        {/* Top Bar */}
        <div className="bg-gradient-to-r from-pink-700 via-rose-600 to-pink-700 rounded-t-xl flex items-center gap-3 px-4 py-3 sm:py-3 shrink-0">
          <button 
            onClick={onClose} 
            className="shrink-0 text-pink-200 hover:text-pink-300 hover:scale-110 transition-transform duration-200"
          >
            <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
          <h2 className="font-pacifico font-semibold text-sm sm:text-base text-pink-50 truncate">
            Bridal & Groom Styling Registration
          </h2>
          <button 
            onClick={onClose} 
            className="ml-auto shrink-0 text-pink-200 hover:text-pink-300 hover:scale-110 transition-transform duration-200 lg:hidden"
          >
            <X className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="bg-gradient-to-r from-pink-600/90 to-rose-700/90 px-3 py-2 sm:py-2 shrink-0 overflow-x-auto">
          <div className="flex items-start justify-between">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center min-w-[55px] sm:min-w-0">
                <div
                  className={`w-6 h-6 sm:w-6 sm:h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                    i <= step
                      ? "bg-gradient-to-br from-rose-400 to-pink-600 text-pink-900 shadow-lg"
                      : "bg-pink-800/50 text-pink-100"
                  }`}
                >
                  {i + 1}
                </div>
                <p
                  className={`text-[9px] sm:text-[10px] mt-1 text-center font-medium ${
                    i === step
                      ? "text-rose-300 font-semibold"
                      : "text-pink-100/80"
                  }`}
                >
                  {s}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-4 py-3 sm:py-4 space-y-3 overflow-y-auto flex-1">

          {/* STEP 1: Vendor Details */}
          {step === 0 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                <Palette className="inline w-4 h-4 mr-2" />
                Vendor Basic Details
              </h3>
              
              <input 
                name="vendorName"
                value={formData.vendorName}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Salon / Studio / Vendor Name *" 
              />
              
              <input 
                name="leadStylist"
                value={formData.leadStylist}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Proprietor / Lead Stylist Name *" 
              />
              
              <p className="text-sm font-semibold text-pink-800 mb-2">
                Type of Styling Services Provided: *
              </p>
              
              <div className="space-y-2 pl-2">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {serviceTypes.map(service => (
                    <label key={service} className="flex items-center gap-2 text-xs">
                      <input 
                        type="checkbox" 
                        checked={formData.selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-3.5 h-3.5 accent-pink-600" 
                      /> 
                      <span className="truncate">{service}</span>
                    </label>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 mt-3">
                  <label className="text-xs font-semibold">Other:</label>
                  <input 
                    name="otherService"
                    value={formData.otherService}
                    onChange={handleInputChange}
                    className="input-field text-sm flex-1" 
                    placeholder="Specify other service" 
                  />
                </div>
              </div>
            </>
          )}

          {/* STEP 2: Contact Information */}
          {step === 1 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                Contact Information
              </h3>
              
              <input 
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Mobile Number *" 
                type="tel"
              />
              
              <input 
                name="alternateMobile"
                value={formData.alternateMobile}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Alternate Mobile Number" 
                type="tel"
              />
              
              <input 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Email ID *" 
                type="email"
              />
              
              <input 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Studio / Office Address *" 
              />
              
              <div className="grid grid-cols-2 gap-2">
                <input 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="City / District *" 
                />
                <input 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="State *" 
                />
              </div>
              
              <input 
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="PIN Code *" 
              />
            </>
          )}

          {/* STEP 3: Business & Legal Details */}
          {step === 2 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                Business & Legal Details
              </h3>
              
              <p className="text-sm font-semibold text-pink-800 mb-2">
                Business Type: *
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {businessTypes.map(type => (
                  <label key={type} className="flex items-center gap-2 text-xs">
                    <input 
                      type="radio" 
                      name="businessType" 
                      value={type}
                      checked={formData.businessType === type}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-pink-600" 
                    /> 
                    {type}
                  </label>
                ))}
              </div>
              
              <input 
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="GST Number (if applicable)" 
              />
              
              <input 
                name="panNumber"
                value={formData.panNumber}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="PAN Number *" 
              />
              
              <input 
                name="certification"
                value={formData.certification}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Professional Certification (if any)" 
              />
              
              <input 
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Years of Experience *" 
                type="number"
              />
            </>
          )}

          {/* STEP 4: Styling & Specialization Details */}
          {step === 3 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                <Sparkles className="inline w-4 h-4 mr-2" />
                Styling & Specialization Details
              </h3>
              
              <p className="text-sm font-semibold text-pink-800 mb-2">
                Bridal Makeup Styles: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2 mb-4">
                {bridalStyles.map(style => (
                  <label key={style} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedBridalStyles.includes(style)}
                      onChange={() => handleBridalStyleToggle(style)}
                      className="w-3.5 h-3.5 accent-pink-600" 
                    /> 
                    {style}
                  </label>
                ))}
              </div>
              
              <p className="text-sm font-semibold text-pink-800 mb-2">
                Groom Styling Services: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2">
                {groomServices.map(service => (
                  <label key={service} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedGroomServices.includes(service)}
                      onChange={() => handleGroomServiceToggle(service)}
                      className="w-3.5 h-3.5 accent-pink-600" 
                    /> 
                    {service}
                  </label>
                ))}
              </div>
            </>
          )}

          {/* STEP 5: Products & Hygiene Standards */}
          {step === 4 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                <Brush className="inline w-4 h-4 mr-2" />
                Products & Hygiene Standards
              </h3>
              
              <p className="text-sm font-semibold text-pink-800 mb-2">
                Products Used: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2 mb-4">
                {productBrands.map(brand => (
                  <label key={brand} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedProductBrands.includes(brand)}
                      onChange={() => handleProductBrandToggle(brand)}
                      className="w-3.5 h-3.5 accent-pink-600" 
                    /> 
                    {brand}
                  </label>
                ))}
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <label className="text-xs font-semibold">Other Premium Brands:</label>
                <input 
                  name="otherBrands"
                  value={formData.otherBrands}
                  onChange={handleInputChange}
                  className="input-field text-sm flex-1" 
                  placeholder="Specify other brands" 
                />
              </div>
              
              <p className="text-sm font-semibold text-pink-800 mb-2">
                Disposable / Hygiene Kits Used: *
              </p>
              <div className="flex gap-4 text-sm pl-2 mb-3">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="hygieneKits" 
                    value="yes"
                    checked={formData.hygieneKits === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="hygieneKits" 
                    value="no"
                    checked={formData.hygieneKits === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  No
                </label>
              </div>
              
              <p className="text-sm font-semibold text-pink-800 mb-2">
                Patch Test Available: *
              </p>
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="patchTest" 
                    value="yes"
                    checked={formData.patchTest === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="patchTest" 
                    value="no"
                    checked={formData.patchTest === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 6: Team & Equipment */}
          {step === 5 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                <Users className="inline w-4 h-4 mr-2" />
                Team & Equipment
              </h3>
              
              <input 
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Number of Stylists / Assistants *" 
                type="number"
              />
              
              <p className="text-sm font-semibold text-pink-800 mt-3 mb-2">
                Own Makeup Kit & Tools: *
              </p>
              <div className="flex gap-4 text-sm pl-2 mb-3">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="ownKit" 
                    value="yes"
                    checked={formData.ownKit === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="ownKit" 
                    value="no"
                    checked={formData.ownKit === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  No
                </label>
              </div>
              
              <p className="text-sm font-semibold text-pink-800 mb-2">
                Backup Artist Available: *
              </p>
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="backupArtist" 
                    value="yes"
                    checked={formData.backupArtist === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="backupArtist" 
                    value="no"
                    checked={formData.backupArtist === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 7: Packages & Pricing */}
          {step === 6 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                <Banknote className="inline w-4 h-4 mr-2" />
                Packages & Pricing
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input 
                  name="bridalPackage"
                  value={formData.bridalPackage}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Bridal Package (₹) *" 
                />
                
                <input 
                  name="groomPackage"
                  value={formData.groomPackage}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Groom Package (₹) *" 
                />
                
                <input 
                  name="engagementPackage"
                  value={formData.engagementPackage}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Engagement / Reception Package (₹)" 
                />
                
                <input 
                  name="mehendiCharges"
                  value={formData.mehendiCharges}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Mehendi Charges (₹)" 
                />
              </div>
              
              <p className="text-sm font-semibold text-pink-800 mt-3 mb-2">
                Advance Payment Required: *
              </p>
              <div className="flex gap-4 text-sm pl-2 mb-3">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="advanceRequired" 
                    value="yes"
                    checked={formData.advanceRequired === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="advanceRequired" 
                    value="no"
                    checked={formData.advanceRequired === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  No
                </label>
              </div>
              
              {formData.advanceRequired === "yes" && (
                <input 
                  name="advanceAmount"
                  value={formData.advanceAmount}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Advance % / Amount *" 
                />
              )}
            </>
          )}

          {/* STEP 8: Service Coverage */}
          {step === 7 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                Service Coverage
              </h3>
              
              <p className="text-sm font-semibold text-pink-800 mb-2">
                Preferred Locations: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2 mb-4">
                {serviceLocations.map(location => (
                  <label key={location} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.preferredLocations.includes(location)}
                      onChange={() => handleLocationToggle(location)}
                      className="w-3.5 h-3.5 accent-pink-600" 
                    /> 
                    {location}
                  </label>
                ))}
              </div>
              
              <p className="text-sm font-semibold text-pink-800 mb-2">
                Travel / Accommodation Charges Applicable: *
              </p>
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="travelCharges" 
                    value="yes"
                    checked={formData.travelCharges === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="travelCharges" 
                    value="no"
                    checked={formData.travelCharges === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 9: Portfolio & Previous Work */}
          {step === 8 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                <Heart className="inline w-4 h-4 mr-2" />
                Portfolio & Previous Work
              </h3>
              
              <input 
                name="weddingsStyled"
                value={formData.weddingsStyled}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Number of Weddings Styled *" 
                type="number"
              />
              
              <input 
                name="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Portfolio / Instagram / Website Link" 
              />
              
              <p className="text-sm font-semibold text-pink-800 mt-3 mb-2">
                Photos / Videos Attached: *
              </p>
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="photosAttached" 
                    value="yes"
                    checked={formData.photosAttached === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="photosAttached" 
                    value="no"
                    checked={formData.photosAttached === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-pink-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 10: Bank Details */}
          {step === 9 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                <Banknote className="inline w-4 h-4 mr-2" />
                Bank Details (For Payments)
              </h3>
              
              <input 
                name="accountName"
                value={formData.accountName}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Account Holder Name *" 
              />
              
              <input 
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Bank Name *" 
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input 
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Account Number *" 
                />
                
                <input 
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="IFSC Code *" 
                />
              </div>
              
              <input 
                name="upiId"
                value={formData.upiId}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="UPI ID (Optional)" 
              />
            </>
          )}

          {/* STEP 11: Declaration */}
          {step === 10 && (
            <>
              <h3 className="text-pink-800 font-bold text-center text-sm mb-2">
                Declaration
              </h3>
              
              <div className="bg-gradient-to-r from-pink-100 to-rose-50 rounded-lg p-4 border border-pink-200">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  I hereby declare that the above information is true and correct. 
                  I agree to provide bridal and groom styling services for marriage functions 
                  as per agreed timelines, hygiene standards, and terms.
                </p>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm">
                    <input 
                      type="checkbox" 
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-pink-600" 
                    />
                    <span className="font-semibold">I accept the terms and conditions *</span>
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input 
                      className="input-field text-sm" 
                      placeholder="Vendor Signature *" 
                    />
                    <input 
                      className="input-field text-sm" 
                      placeholder="Date *" 
                      type="date"
                    />
                  </div>
                  
                  <input 
                    className="input-field text-sm" 
                    placeholder="Place *" 
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex gap-3 p-4 border-t border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 shrink-0 rounded-b-xl">

          {step > 0 && (
            <button 
              className="btn-outline-pink text-sm px-3 py-2" 
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          
          <button
            className="btn-primary-pink ml-auto text-sm px-3 py-2"
            onClick={() => (step === 10 ? handleSubmit() : setStep(step + 1))}
            disabled={step === 10 && !formData.declaration}
          >
            {step === 10 ? "Submit Registration" : "Continue"}
          </button>
        </div>

      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid #DB2777;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .input-field:focus {
          outline: none;
          border-color: #BE185D;
          box-shadow: 0 0 0 3px rgba(219, 39, 119, 0.2);
        }
        
        .input-field::placeholder {
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        
        .btn-primary-pink {
          background: linear-gradient(135deg, #DB2777, #BE185D);
          color: white;
          font-weight: 600;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(219, 39, 119, 0.3);
        }
        
        .btn-primary-pink:hover:not(:disabled) {
          background: linear-gradient(135deg, #BE185D, #9D174D);
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(219, 39, 119, 0.4);
        }
        
        .btn-primary-pink:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-outline-pink {
          background: transparent;
          color: #DB2777;
          font-weight: 600;
          border: 1.5px solid #DB2777;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-outline-pink:hover {
          background: #FCE7F3;
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(219, 39, 119, 0.2);
        }
      `}</style>
    </div>
  );
}