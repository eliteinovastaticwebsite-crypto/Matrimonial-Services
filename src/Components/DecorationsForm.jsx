import React, { useState } from "react";
import { ArrowLeft, Flower, Palette, Settings, Users, Banknote, X } from "lucide-react";

// Form steps based on decoration details
const steps = [
  "Vendor Details",
  "Contact Information",
  "Business & Legal",
  "Style & Materials",
  "Service Details",
  "Pricing & Packages",
  "Service Coverage",
  "Manpower & Equipment",
  "Previous Work",
  "Bank Details",
  "Declaration"
];

// Decoration service types
const serviceTypes = [
  "Wedding Stage Decoration",
  "Mandap Decoration",
  "Floral Decoration",
  "Reception Decoration",
  "Engagement / Mehendi / Sangeet",
  "Theme Decoration",
  "Balloon Decoration",
  "LED / Lighting Decoration"
];

// Decoration styles
const decorationStyles = [
  "Traditional",
  "Modern",
  "Royal",
  "Minimal",
  "Theme-based",
  "Customized"
];

// Materials used
const materials = [
  "Fresh Flowers",
  "Artificial Flowers",
  "Fabrics & Drapes",
  "Props & Structures",
  "Lights & LEDs"
];

// Services included
const servicesIncluded = [
  "Stage Setup",
  "Mandap Setup",
  "Entrance Arch",
  "Dining Area Decoration",
  "Photo Booth",
  "Lighting Setup"
];

// Business types
const businessTypes = [
  "Individual",
  "Proprietorship",
  "Partnership",
  "Private Limited"
];

// Preferred locations
const locations = [
  "Local",
  "Within District",
  "Outstation"
];

export default function DecorationVendorModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    vendorName: "",
    proprietorName: "",
    selectedServiceTypes: [],
    otherServiceType: "",
    
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
    experience: "",
    
    // Step 4
    selectedStyles: [],
    selectedMaterials: [],
    
    // Step 5
    selectedServices: [],
    setupTime: "",
    dismantlingIncluded: "",
    
    // Step 6
    basicPackage: "",
    premiumPackage: "",
    customPackage: "",
    hasAdvancePayment: "",
    advanceAmount: "",
    
    // Step 7
    preferredLocations: [],
    hasTransportCharges: "",
    
    // Step 8
    numberOfStaff: "",
    uniformedStaff: "",
    ownEquipment: "",
    
    // Step 9
    weddingsDecorated: "",
    portfolioLink: "",
    hasPhotos: "",
    
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

  const handleArrayToggle = (arrayName, item) => {
    setFormData(prev => {
      const array = [...prev[arrayName]];
      if (array.includes(item)) {
        return { ...prev, [arrayName]: array.filter(i => i !== item) };
      } else {
        return { ...prev, [arrayName]: [...array, item] };
      }
    });
  };

  const handleSubmit = () => {
    console.log("Decoration form submitted:", formData);
    alert("Decoration Vendor Registration submitted successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-gradient-to-b from-red-50 to-yellow-50 w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh] lg:max-h-[90vh] border border-red-200">

        {/* Top Bar */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-t-xl flex items-center gap-3 px-4 py-3 sm:py-3 shrink-0">
          <button 
            onClick={onClose} 
            className="shrink-0 text-yellow-200 hover:text-yellow-300 hover:scale-110 transition-transform duration-200"
          >
            <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
          <h2 className="font-pacifico font-semibold text-sm sm:text-base text-yellow-50 truncate">
            Wedding Decoration Registration
          </h2>
          <button 
            onClick={onClose} 
            className="ml-auto shrink-0 text-yellow-200 hover:text-yellow-300 hover:scale-110 transition-transform duration-200 lg:hidden"
          >
            <X className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="bg-gradient-to-r from-red-600/90 to-red-700/90 px-3 py-2 sm:py-2 shrink-0 overflow-x-auto">
          <div className="flex items-start justify-between">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center min-w-[50px] sm:min-w-0">
                <div
                  className={`w-6 h-6 sm:w-6 sm:h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                    i <= step
                      ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-red-900 shadow-lg"
                      : "bg-red-800/50 text-yellow-100"
                  }`}
                >
                  {i + 1}
                </div>
                <p
                  className={`text-[9px] sm:text-[10px] mt-1 text-center font-medium ${
                    i === step
                      ? "text-yellow-300 font-semibold"
                      : "text-yellow-100/80"
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
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Flower className="inline w-4 h-4 mr-2" />
                Vendor Basic Details
              </h3>
              
              <input 
                name="vendorName"
                value={formData.vendorName}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Decoration Company / Vendor Name *" 
              />
              
              <input 
                name="proprietorName"
                value={formData.proprietorName}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Proprietor / Contact Person Name *" 
              />
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Type of Decoration Services: *
              </p>
              
              <div className="space-y-2 pl-2">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {serviceTypes.map(service => (
                    <label key={service} className="flex items-center gap-2 text-xs">
                      <input 
                        type="checkbox" 
                        checked={formData.selectedServiceTypes.includes(service)}
                        onChange={() => handleArrayToggle('selectedServiceTypes', service)}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="truncate">{service}</span>
                    </label>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 mt-3">
                  <label className="text-xs font-semibold">Other:</label>
                  <input 
                    name="otherServiceType"
                    value={formData.otherServiceType}
                    onChange={handleInputChange}
                    className="input-field text-sm flex-1" 
                    placeholder="Specify other decoration service" 
                  />
                </div>
              </div>
            </>
          )}

          {/* STEP 2: Contact Information */}
          {step === 1 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
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
                placeholder="Office Address *" 
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
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Business & Legal Details
              </h3>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
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
                      className="w-3.5 h-3.5 accent-red-600" 
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
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Years of Experience *" 
                type="number"
              />
            </>
          )}

          {/* STEP 4: Decoration Style & Materials */}
          {step === 3 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Palette className="inline w-4 h-4 mr-2" />
                Decoration Style & Materials
              </h3>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Decoration Styles Offered: *
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pl-2 mb-4">
                {decorationStyles.map(style => (
                  <label key={style} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedStyles.includes(style)}
                      onChange={() => handleArrayToggle('selectedStyles', style)}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    {style}
                  </label>
                ))}
              </div>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Materials Used: *
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pl-2">
                {materials.map(material => (
                  <label key={material} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedMaterials.includes(material)}
                      onChange={() => handleArrayToggle('selectedMaterials', material)}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    {material}
                  </label>
                ))}
              </div>
            </>
          )}

          {/* STEP 5: Service Details */}
          {step === 4 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Settings className="inline w-4 h-4 mr-2" />
                Service Details
              </h3>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Services Included: *
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pl-2 mb-4">
                {servicesIncluded.map(service => (
                  <label key={service} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedServices.includes(service)}
                      onChange={() => handleArrayToggle('selectedServices', service)}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    <span className="truncate">{service}</span>
                  </label>
                ))}
              </div>
              
              <input 
                name="setupTime"
                value={formData.setupTime}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Setup Time Required (Hours)" 
                type="number"
              />
              
              <div className="mt-3">
                <p className="text-sm font-semibold text-red-800 mb-2">
                  Dismantling Included: *
                </p>
                <div className="flex gap-4 pl-2">
                  <label className="flex items-center gap-2 text-xs">
                    <input 
                      type="radio" 
                      name="dismantlingIncluded" 
                      value="yes"
                      checked={formData.dismantlingIncluded === "yes"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <input 
                      type="radio" 
                      name="dismantlingIncluded" 
                      value="no"
                      checked={formData.dismantlingIncluded === "no"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    No
                  </label>
                </div>
              </div>
            </>
          )}

          {/* STEP 6: Pricing & Packages */}
          {step === 5 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Banknote className="inline w-4 h-4 mr-2" />
                Pricing & Packages
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input 
                  name="basicPackage"
                  value={formData.basicPackage}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Basic Decoration Package (₹)" 
                />
                
                <input 
                  name="premiumPackage"
                  value={formData.premiumPackage}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Premium Decoration Package (₹)" 
                />
                
                <input 
                  name="customPackage"
                  value={formData.customPackage}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Custom Decoration (₹)" 
                />
              </div>
              
              <div className="mt-3">
                <p className="text-sm font-semibold text-red-800 mb-2">
                  Advance Payment Required: *
                </p>
                <div className="flex gap-4 pl-2">
                  <label className="flex items-center gap-2 text-xs">
                    <input 
                      type="radio" 
                      name="hasAdvancePayment" 
                      value="yes"
                      checked={formData.hasAdvancePayment === "yes"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <input 
                      type="radio" 
                      name="hasAdvancePayment" 
                      value="no"
                      checked={formData.hasAdvancePayment === "no"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    No
                  </label>
                </div>
                
                {formData.hasAdvancePayment === "yes" && (
                  <input 
                    name="advanceAmount"
                    value={formData.advanceAmount}
                    onChange={handleInputChange}
                    className="input-field text-sm mt-3" 
                    placeholder="Advance % / Amount" 
                  />
                )}
              </div>
            </>
          )}

          {/* STEP 7: Service Coverage */}
          {step === 6 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Service Coverage
              </h3>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Preferred Locations: *
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pl-2">
                {locations.map(location => (
                  <label key={location} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.preferredLocations.includes(location)}
                      onChange={() => handleArrayToggle('preferredLocations', location)}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    {location}
                  </label>
                ))}
              </div>
              
              <p className="text-sm font-semibold text-red-800 mt-4 mb-2">
                Transportation Charges Applicable: *
              </p>
              
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="hasTransportCharges" 
                    value="yes"
                    checked={formData.hasTransportCharges === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-red-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="hasTransportCharges" 
                    value="no"
                    checked={formData.hasTransportCharges === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-red-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 8: Manpower & Equipment */}
          {step === 7 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Users className="inline w-4 h-4 mr-2" />
                Manpower & Equipment
              </h3>
              
              <input 
                name="numberOfStaff"
                value={formData.numberOfStaff}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Number of Staff Provided" 
                type="number"
              />
              
              <div className="space-y-4 mt-3">
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Uniformed Staff: *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="uniformedStaff" 
                        value="yes"
                        checked={formData.uniformedStaff === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="uniformedStaff" 
                        value="no"
                        checked={formData.uniformedStaff === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Own Tools & Equipment: *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="ownEquipment" 
                        value="yes"
                        checked={formData.ownEquipment === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="ownEquipment" 
                        value="no"
                        checked={formData.ownEquipment === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      No
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* STEP 9: Previous Work & Portfolio */}
          {step === 8 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Previous Work & Portfolio
              </h3>
              
              <input 
                name="weddingsDecorated"
                value={formData.weddingsDecorated}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Number of Weddings Decorated" 
                type="number"
              />
              
              <input 
                name="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleInputChange}
                className="input-field text-sm mt-3" 
                placeholder="Portfolio / Website / Instagram Link" 
              />
              
              <div className="mt-3">
                <p className="text-sm font-semibold text-red-800 mb-2">
                  Sample Photos Attached: *
                </p>
                <div className="flex gap-4 pl-2">
                  <label className="flex items-center gap-2 text-xs">
                    <input 
                      type="radio" 
                      name="hasPhotos" 
                      value="yes"
                      checked={formData.hasPhotos === "yes"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <input 
                      type="radio" 
                      name="hasPhotos" 
                      value="no"
                      checked={formData.hasPhotos === "no"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    No
                  </label>
                </div>
              </div>
            </>
          )}

          {/* STEP 10: Bank Details */}
          {step === 9 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
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
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Declaration
              </h3>
              
              <div className="bg-gradient-to-r from-red-100 to-yellow-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  I hereby declare that the above information is true and correct. 
                  I agree to provide wedding decoration services for marriage functions 
                  as per agreed designs, timelines, and terms.
                </p>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm">
                    <input 
                      type="checkbox" 
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-red-600" 
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
        <div className="flex gap-3 p-4 border-t border-red-200 bg-gradient-to-r from-red-50 to-yellow-50 shrink-0 rounded-b-xl">
          {step > 0 && (
            <button 
              className="btn-outline-red text-sm px-3 py-2" 
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          
          <button
            className="btn-primary-red ml-auto text-sm px-3 py-2"
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
          border: 1.5px solid #DC2626;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .input-field:focus {
          outline: none;
          border-color: #B91C1C;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
        }
        
        .input-field::placeholder {
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        
        .btn-primary-red {
          background: linear-gradient(135deg, #DC2626, #B91C1C);
          color: white;
          font-weight: 600;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(220, 38, 38, 0.3);
        }
        
        .btn-primary-red:hover:not(:disabled) {
          background: linear-gradient(135deg, #B91C1C, #991B1B);
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(220, 38, 38, 0.4);
        }
        
        .btn-primary-red:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-outline-red {
          background: transparent;
          color: #DC2626;
          font-weight: 600;
          border: 1.5px solid #DC2626;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-outline-red:hover {
          background: #FEE2E2;
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(220, 38, 38, 0.2);
        }
      `}</style>
    </div>
  );
}