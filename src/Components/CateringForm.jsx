import React, { useState } from "react";
import { ArrowLeft, Utensils, ChefHat, Users, Banknote, X } from "lucide-react";

// Form steps based on catering details
const steps = [
  "Vendor Details",
  "Contact Information",
  "Business & Legal",
  "Cuisine & Menu",
  "Capacity & Service",
  "Pricing Details",
  "Hygiene & Quality",
  "Service Coverage",
  "Experience",
  "Bank Details",
  "Declaration"
];

// Catering types
const cateringTypes = [
  "Vegetarian",
  "Non-Vegetarian",
  "Both",
  "Jain Food",
  "Continental"
];

// Cuisines offered
const cuisines = [
  "South Indian",
  "North Indian",
  "Chinese",
  "Continental",
  "Arabic"
];

// Special menus
const specialMenus = [
  "Wedding Feast",
  "Reception",
  "Engagement",
  "Sangeet / Mehendi",
  "Buffet",
  "Live Counters"
];

// Service types
const serviceTypes = [
  "Buffet",
  "Banana Leaf Service",
  "Table Service"
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

export default function CateringVendorModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    vendorName: "",
    proprietorName: "",
    selectedCateringTypes: [],
    otherCateringType: "",
    
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
    fssaiNumber: "",
    experience: "",
    
    // Step 4
    selectedCuisines: [],
    otherCuisine: "",
    selectedSpecialMenus: [],
    
    // Step 5
    minCapacity: "",
    maxCapacity: "",
    selectedServiceType: "",
    hasServingStaff: "",
    hasUniformedStaff: "",
    
    // Step 6
    minPrice: "",
    maxPrice: "",
    hasAdvancePayment: "",
    advancePercent: "",
    paymentTerms: "",
    
    // Step 7
    hasFssaiCompliance: "",
    foodPrepLocation: "",
    hasWaterSource: "",
    hasWasteManagement: "",
    
    // Step 8
    preferredLocations: [],
    hasTransportCharges: "",
    
    // Step 9
    weddingsCatered: "",
    references: "",
    
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
    console.log("Catering form submitted:", formData);
    alert("Catering Registration submitted successfully!");
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
            Catering Vendor Registration
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
                <Utensils className="inline w-4 h-4 mr-2" />
                Vendor Basic Details
              </h3>
              
              <input 
                name="vendorName"
                value={formData.vendorName}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Catering Company / Vendor Name *" 
              />
              
              <input 
                name="proprietorName"
                value={formData.proprietorName}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Proprietor / Contact Person Name *" 
              />
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Type of Catering: *
              </p>
              
              <div className="space-y-2 pl-2">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {cateringTypes.map(type => (
                    <label key={type} className="flex items-center gap-2 text-xs">
                      <input 
                        type="checkbox" 
                        checked={formData.selectedCateringTypes.includes(type)}
                        onChange={() => handleArrayToggle('selectedCateringTypes', type)}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="truncate">{type}</span>
                    </label>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 mt-3">
                  <label className="text-xs font-semibold">Other:</label>
                  <input 
                    name="otherCateringType"
                    value={formData.otherCateringType}
                    onChange={handleInputChange}
                    className="input-field text-sm flex-1" 
                    placeholder="Specify other catering type" 
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
                name="fssaiNumber"
                value={formData.fssaiNumber}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="FSSAI License Number *" 
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

          {/* STEP 4: Cuisine & Menu Details */}
          {step === 3 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <ChefHat className="inline w-4 h-4 mr-2" />
                Cuisine & Menu Details
              </h3>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Cuisines Offered: *
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pl-2 mb-4">
                {cuisines.map(cuisine => (
                  <label key={cuisine} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedCuisines.includes(cuisine)}
                      onChange={() => handleArrayToggle('selectedCuisines', cuisine)}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    {cuisine}
                  </label>
                ))}
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <label className="text-xs font-semibold">Other Cuisine:</label>
                <input 
                  name="otherCuisine"
                  value={formData.otherCuisine}
                  onChange={handleInputChange}
                  className="input-field text-sm flex-1" 
                  placeholder="Specify other cuisine" 
                />
              </div>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Special Menus Available: *
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pl-2">
                {specialMenus.map(menu => (
                  <label key={menu} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedSpecialMenus.includes(menu)}
                      onChange={() => handleArrayToggle('selectedSpecialMenus', menu)}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    {menu}
                  </label>
                ))}
              </div>
            </>
          )}

          {/* STEP 5: Capacity & Service Details */}
          {step === 4 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Users className="inline w-4 h-4 mr-2" />
                Capacity & Service Details
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                <input 
                  name="minCapacity"
                  value={formData.minCapacity}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Minimum Plate Capacity *" 
                  type="number"
                />
                <input 
                  name="maxCapacity"
                  value={formData.maxCapacity}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Maximum Plate Capacity *" 
                  type="number"
                />
              </div>
              
              <p className="text-sm font-semibold text-red-800 mt-3 mb-2">
                Service Type: *
              </p>
              
              <div className="flex flex-wrap gap-3 pl-2">
                {serviceTypes.map(type => (
                  <label key={type} className="flex items-center gap-2 text-xs">
                    <input 
                      type="radio" 
                      name="selectedServiceType" 
                      value={type}
                      checked={formData.selectedServiceType === type}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    {type}
                  </label>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Serving Staff Provided: *
                  </p>
                  <div className="flex gap-3 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="hasServingStaff" 
                        value="yes"
                        checked={formData.hasServingStaff === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="hasServingStaff" 
                        value="no"
                        checked={formData.hasServingStaff === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Uniformed Staff: *
                  </p>
                  <div className="flex gap-3 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="hasUniformedStaff" 
                        value="yes"
                        checked={formData.hasUniformedStaff === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="hasUniformedStaff" 
                        value="no"
                        checked={formData.hasUniformedStaff === "no"}
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

          {/* STEP 6: Pricing Details */}
          {step === 5 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Banknote className="inline w-4 h-4 mr-2" />
                Pricing Details
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                <input 
                  name="minPrice"
                  value={formData.minPrice}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Min Price per Plate (₹)" 
                />
                <input 
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Max Price per Plate (₹)" 
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
                    name="advancePercent"
                    value={formData.advancePercent}
                    onChange={handleInputChange}
                    className="input-field text-sm mt-3" 
                    placeholder="Advance %" 
                  />
                )}
              </div>
              
              <input 
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleInputChange}
                className="input-field text-sm mt-3" 
                placeholder="Balance Payment Terms" 
              />
            </>
          )}

          {/* STEP 7: Hygiene & Quality Assurance */}
          {step === 6 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Hygiene & Quality Assurance
              </h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    FSSAI Compliance: *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="hasFssaiCompliance" 
                        value="yes"
                        checked={formData.hasFssaiCompliance === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="hasFssaiCompliance" 
                        value="no"
                        checked={formData.hasFssaiCompliance === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      No
                    </label>
                  </div>
                </div>
                
                <input 
                  name="foodPrepLocation"
                  value={formData.foodPrepLocation}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Food Preparation Location *" 
                />
                
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Water Source (RO / Mineral): *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="hasWaterSource" 
                        value="yes"
                        checked={formData.hasWaterSource === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="hasWaterSource" 
                        value="no"
                        checked={formData.hasWaterSource === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Waste Management Arranged: *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="hasWasteManagement" 
                        value="yes"
                        checked={formData.hasWasteManagement === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="hasWasteManagement" 
                        value="no"
                        checked={formData.hasWasteManagement === "no"}
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

          {/* STEP 8: Service Coverage */}
          {step === 7 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Service Coverage
              </h3>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Preferred Locations: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2">
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

          {/* STEP 9: Previous Experience */}
          {step === 8 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Previous Experience & References
              </h3>
              
              <input 
                name="weddingsCatered"
                value={formData.weddingsCatered}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Number of Weddings Catered" 
                type="number"
              />
              
              <textarea 
                name="references"
                value={formData.references}
                onChange={handleInputChange}
                className="input-field text-sm min-h-[100px]" 
                placeholder="Major Clients / References (if any)" 
              />
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
                  I agree to provide catering services for marriage functions as per 
                  agreed menu, quality, hygiene standards, and terms.
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
        
        textarea.input-field {
          min-height: 80px;
          resize: vertical;
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