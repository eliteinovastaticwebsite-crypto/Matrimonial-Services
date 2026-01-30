import React, { useState } from "react";
import { ArrowLeft, Music, Users, Volume2, Star, Banknote, X, Mic, Sparkles, Gamepad2 } from "lucide-react";

// Form steps
const steps = [
  "Vendor Details",
  "Contact Information",
  "Business & Legal",
  "Event & Performance",
  "Equipment & Setup",
  "Manpower & Logistics",
  "Packages & Pricing",
  "Service Coverage",
  "Portfolio & Experience",
  "Bank Details",
  "Declaration"
];

// Entertainment service types
const serviceTypes = [
  "DJ & Music",
  "Live Band / Orchestra",
  "Classical Music / Nadaswaram",
  "Dance Troupe",
  "MC / Anchor",
  "Celebrity Appearance",
  "Magic Show",
  "Games & Interactive Activities",
  "Sound & Light Systems"
];

// Event types covered
const eventTypes = [
  "Wedding",
  "Reception",
  "Engagement",
  "Sangeet / Mehendi",
  "Pre-Wedding Events",
  "Post-Wedding Events"
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

export default function EntertainmentVendorRegistrationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    vendorName: "",
    contactPerson: "",
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
    experience: "",
    
    // Step 4
    selectedEvents: [],
    performanceDuration: "",
    customPerformances: "",
    
    // Step 5
    soundSystem: "",
    lightingSetup: "",
    ledEffects: "",
    powerRequirement: "",
    backupEquipment: "",
    
    // Step 6
    teamSize: "",
    uniformProvided: "",
    setupIncluded: "",
    
    // Step 7
    basicPackage: "",
    premiumPackage: "",
    customCharges: "",
    advanceRequired: "",
    advanceAmount: "",
    overtimeCharges: "",
    
    // Step 8
    preferredLocations: [],
    travelCharges: "",
    noiseRestrictions: "",
    
    // Step 9
    eventsCovered: "",
    majorClients: "",
    portfolioLink: "",
    
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

  const handleEventToggle = (event) => {
    setFormData(prev => {
      const events = [...prev.selectedEvents];
      if (events.includes(event)) {
        return { ...prev, selectedEvents: events.filter(e => e !== event) };
      } else {
        return { ...prev, selectedEvents: [...events, event] };
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
      <div className="bg-gradient-to-b from-purple-50 to-pink-50 w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh] lg:max-h-[90vh] border border-purple-200">

        {/* Top Bar */}
        <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 rounded-t-xl flex items-center gap-3 px-4 py-3 sm:py-3 shrink-0">
          <button 
            onClick={onClose} 
            className="shrink-0 text-pink-200 hover:text-pink-300 hover:scale-110 transition-transform duration-200"
          >
            <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
          <h2 className="font-pacifico font-semibold text-sm sm:text-base text-pink-50 truncate">
            Entertainment Vendor Registration
          </h2>
          <button 
            onClick={onClose} 
            className="ml-auto shrink-0 text-pink-200 hover:text-pink-300 hover:scale-110 transition-transform duration-200 lg:hidden"
          >
            <X className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="bg-gradient-to-r from-purple-600/90 to-purple-700/90 px-3 py-2 sm:py-2 shrink-0 overflow-x-auto">
          <div className="flex items-start justify-between">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center min-w-[55px] sm:min-w-0">
                <div
                  className={`w-6 h-6 sm:w-6 sm:h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                    i <= step
                      ? "bg-gradient-to-br from-pink-400 to-pink-600 text-purple-900 shadow-lg"
                      : "bg-purple-800/50 text-pink-100"
                  }`}
                >
                  {i + 1}
                </div>
                <p
                  className={`text-[9px] sm:text-[10px] mt-1 text-center font-medium ${
                    i === step
                      ? "text-pink-300 font-semibold"
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
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
                <Music className="inline w-4 h-4 mr-2" />
                Vendor Basic Details
              </h3>
              
              <input 
                name="vendorName"
                value={formData.vendorName}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Company / Vendor Name *" 
              />
              
              <input 
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Proprietor / Contact Person Name *" 
              />
              
              <p className="text-sm font-semibold text-purple-800 mb-2">
                Type of Entertainment Services: *
              </p>
              
              <div className="space-y-2 pl-2">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {serviceTypes.map(service => (
                    <label key={service} className="flex items-center gap-2 text-xs">
                      <input 
                        type="checkbox" 
                        checked={formData.selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-3.5 h-3.5 accent-purple-600" 
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
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
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
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
                Business & Legal Details
              </h3>
              
              <p className="text-sm font-semibold text-purple-800 mb-2">
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
                      className="w-3.5 h-3.5 accent-purple-600" 
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

          {/* STEP 4: Event & Performance Details */}
          {step === 3 && (
            <>
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
                <Sparkles className="inline w-4 h-4 mr-2" />
                Event & Performance Details
              </h3>
              
              <p className="text-sm font-semibold text-purple-800 mb-2">
                Events Covered: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2">
                {eventTypes.map(event => (
                  <label key={event} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedEvents.includes(event)}
                      onChange={() => handleEventToggle(event)}
                      className="w-3.5 h-3.5 accent-purple-600" 
                    /> 
                    {event}
                  </label>
                ))}
              </div>
              
              <input 
                name="performanceDuration"
                value={formData.performanceDuration}
                onChange={handleInputChange}
                className="input-field text-sm mt-3" 
                placeholder="Typical Performance Duration (Hours) *" 
                type="number"
              />
              
              <p className="text-sm font-semibold text-purple-800 mt-3 mb-2">
                Custom Performances Available: *
              </p>
              
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="customPerformances" 
                    value="yes"
                    checked={formData.customPerformances === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="customPerformances" 
                    value="no"
                    checked={formData.customPerformances === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 5: Equipment & Technical Setup */}
          {step === 4 && (
            <>
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
                <Volume2 className="inline w-4 h-4 mr-2" />
                Equipment & Technical Setup
              </h3>
              
              <p className="text-sm font-semibold text-purple-800 mb-2">
                Sound System Provided: *
              </p>
              <div className="flex gap-4 text-sm pl-2 mb-3">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="soundSystem" 
                    value="yes"
                    checked={formData.soundSystem === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="soundSystem" 
                    value="no"
                    checked={formData.soundSystem === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  No
                </label>
              </div>
              
              <p className="text-sm font-semibold text-purple-800 mb-2">
                Lighting Setup Provided: *
              </p>
              <div className="flex gap-4 text-sm pl-2 mb-3">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="lightingSetup" 
                    value="yes"
                    checked={formData.lightingSetup === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="lightingSetup" 
                    value="no"
                    checked={formData.lightingSetup === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  No
                </label>
              </div>
              
              <p className="text-sm font-semibold text-purple-800 mb-2">
                LED / Special Effects: *
              </p>
              <div className="flex gap-4 text-sm pl-2 mb-3">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="ledEffects" 
                    value="yes"
                    checked={formData.ledEffects === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="ledEffects" 
                    value="no"
                    checked={formData.ledEffects === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  No
                </label>
              </div>
              
              <input 
                name="powerRequirement"
                value={formData.powerRequirement}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Power Requirement (Watts)" 
                type="number"
              />
              
              <p className="text-sm font-semibold text-purple-800 mt-3 mb-2">
                Backup Equipment Available: *
              </p>
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="backupEquipment" 
                    value="yes"
                    checked={formData.backupEquipment === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="backupEquipment" 
                    value="no"
                    checked={formData.backupEquipment === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 6: Manpower & Logistics */}
          {step === 5 && (
            <>
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
                <Users className="inline w-4 h-4 mr-2" />
                Manpower & Logistics
              </h3>
              
              <input 
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Number of Performers / Crew *" 
                type="number"
              />
              
              <p className="text-sm font-semibold text-purple-800 mt-3 mb-2">
                Uniform / Dress Code Provided: *
              </p>
              <div className="flex gap-4 text-sm pl-2 mb-3">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="uniformProvided" 
                    value="yes"
                    checked={formData.uniformProvided === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="uniformProvided" 
                    value="no"
                    checked={formData.uniformProvided === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  No
                </label>
              </div>
              
              <p className="text-sm font-semibold text-purple-800 mb-2">
                Setup & Dismantling Included: *
              </p>
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="setupIncluded" 
                    value="yes"
                    checked={formData.setupIncluded === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="setupIncluded" 
                    value="no"
                    checked={formData.setupIncluded === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 7: Packages & Pricing */}
          {step === 6 && (
            <>
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
                <Banknote className="inline w-4 h-4 mr-2" />
                Packages & Pricing
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input 
                  name="basicPackage"
                  value={formData.basicPackage}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Basic Package (₹) *" 
                />
                
                <input 
                  name="premiumPackage"
                  value={formData.premiumPackage}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Premium Package (₹) *" 
                />
              </div>
              
              <input 
                name="customCharges"
                value={formData.customCharges}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Custom Event Charges (₹)" 
              />
              
              <p className="text-sm font-semibold text-purple-800 mt-3 mb-2">
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
                    className="w-3.5 h-3.5 accent-purple-600" 
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
                    className="w-3.5 h-3.5 accent-purple-600" 
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
                  placeholder="Advance % / Amount" 
                />
              )}
              
              <input 
                name="overtimeCharges"
                value={formData.overtimeCharges}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Overtime Charges (if any)" 
              />
            </>
          )}

          {/* STEP 8: Service Coverage */}
          {step === 7 && (
            <>
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
                Service Coverage
              </h3>
              
              <p className="text-sm font-semibold text-purple-800 mb-2">
                Preferred Locations: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2 mb-4">
                {locations.map(location => (
                  <label key={location} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.preferredLocations.includes(location)}
                      onChange={() => handleLocationToggle(location)}
                      className="w-3.5 h-3.5 accent-purple-600" 
                    /> 
                    {location}
                  </label>
                ))}
              </div>
              
              <p className="text-sm font-semibold text-purple-800 mb-2">
                Travel / Accommodation Charges Applicable: *
              </p>
              <div className="flex gap-4 text-sm pl-2 mb-3">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="travelCharges" 
                    value="yes"
                    checked={formData.travelCharges === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
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
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  No
                </label>
              </div>
              
              <p className="text-sm font-semibold text-purple-800 mb-2">
                Noise / Time Restrictions Aware: *
              </p>
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="noiseRestrictions" 
                    value="yes"
                    checked={formData.noiseRestrictions === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="noiseRestrictions" 
                    value="no"
                    checked={formData.noiseRestrictions === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-purple-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 9: Previous Experience & Portfolio */}
          {step === 8 && (
            <>
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
                <Star className="inline w-4 h-4 mr-2" />
                Previous Experience & Portfolio
              </h3>
              
              <input 
                name="eventsCovered"
                value={formData.eventsCovered}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Number of Wedding Events Covered *" 
                type="number"
              />
              
              <input 
                name="majorClients"
                value={formData.majorClients}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Major Clients / Events (if any)" 
              />
              
              <input 
                name="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Portfolio / Website / Social Media Link" 
              />
            </>
          )}

          {/* STEP 10: Bank Details */}
          {step === 9 && (
            <>
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
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
              <h3 className="text-purple-800 font-bold text-center text-sm mb-2">
                Declaration
              </h3>
              
              <div className="bg-gradient-to-r from-purple-100 to-pink-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  I hereby declare that the above information is true and correct. 
                  I agree to provide entertainment and event services for marriage functions 
                  as per agreed schedule, performance quality, and terms.
                </p>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm">
                    <input 
                      type="checkbox" 
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-purple-600" 
                    />
                    <span className="font-semibold">I accept the terms and conditions *</span>
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input 
                      className="input-field text-sm" 
                      placeholder="Authorized Signature *" 
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
        <div className="flex gap-3 p-4 border-t border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 shrink-0 rounded-b-xl">

          {step > 0 && (
            <button 
              className="btn-outline-purple text-sm px-3 py-2" 
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          
          <button
            className="btn-primary-purple ml-auto text-sm px-3 py-2"
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
          border: 1.5px solid #7C3AED;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .input-field:focus {
          outline: none;
          border-color: #6D28D9;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
        }
        
        .input-field::placeholder {
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        
        .btn-primary-purple {
          background: linear-gradient(135deg, #7C3AED, #6D28D9);
          color: white;
          font-weight: 600;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(124, 58, 237, 0.3);
        }
        
        .btn-primary-purple:hover:not(:disabled) {
          background: linear-gradient(135deg, #6D28D9, #5B21B6);
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(124, 58, 237, 0.4);
        }
        
        .btn-primary-purple:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-outline-purple {
          background: transparent;
          color: #7C3AED;
          font-weight: 600;
          border: 1.5px solid #7C3AED;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-outline-purple:hover {
          background: #F3E8FF;
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(124, 58, 237, 0.2);
        }
      `}</style>
    </div>
  );
}