import React, { useState } from "react";
import { ArrowLeft, Gift, Package, Palette, Printer, FileText, Globe, Banknote, X, Scissors } from "lucide-react";

// Form steps
const steps = [
  "Vendor Details",
  "Contact Information",
  "Business & Legal",
  "Invitation Details",
  "Gift & Return Gifts",
  "Pricing & Payment",
  "Delivery & Timeline",
  "Samples & Portfolio",
  "Bank Details",
  "Declaration"
];

// Service types
const serviceTypes = [
  "Wedding Invitation Printing",
  "Digital Invitations / E-Cards",
  "Customized Invitation Design",
  "Wedding Return Gifts",
  "Wedding Favors",
  "Corporate / Bulk Gifts",
  "Hampers & Custom Packaging"
];

// Invitation types
const invitationTypes = [
  "Traditional Cards",
  "Theme-based Cards",
  "Premium / Box Invitations",
  "Eco-friendly Invitations",
  "Digital / Video Invitations"
];

// Printing options
const printingOptions = [
  "Offset",
  "Digital",
  "Letterpress",
  "Foil / Embossing"
];

// Gift types
const giftTypes = [
  "Traditional Gifts",
  "Customized Gifts",
  "Eco-friendly Gifts",
  "Edible Gifts",
  "Premium Hampers"
];

// Business types
const businessTypes = [
  "Individual",
  "Proprietorship",
  "Partnership",
  "Private Limited"
];

// Delivery locations
const deliveryLocations = [
  "Local",
  "Outstation"
];

export default function InvitationVendorRegistrationModal({ isOpen, onClose }) {
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
    selectedInvitationTypes: [],
    selectedPrintingOptions: [],
    minOrderQuantity: "",
    customizationAvailable: "",
    
    // Step 5
    selectedGiftTypes: [],
    giftMinOrder: "",
    brandingAvailable: "",
    packingIncluded: "",
    
    // Step 6
    invitationMinPrice: "",
    invitationMaxPrice: "",
    giftMinPrice: "",
    giftMaxPrice: "",
    advanceRequired: "",
    advanceAmount: "",
    balanceTerms: "",
    
    // Step 7
    designApprovalTime: "",
    printingDeliveryTime: "",
    giftPreparationTime: "",
    deliveryLocations: [],
    
    // Step 8
    samplesProvided: "",
    portfolioLink: "",
    photosAttached: "",
    
    // Step 9
    accountName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
    
    // Step 10
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

  const handleInvitationTypeToggle = (type) => {
    setFormData(prev => {
      const types = [...prev.selectedInvitationTypes];
      if (types.includes(type)) {
        return { ...prev, selectedInvitationTypes: types.filter(t => t !== type) };
      } else {
        return { ...prev, selectedInvitationTypes: [...types, type] };
      }
    });
  };

  const handlePrintingOptionToggle = (option) => {
    setFormData(prev => {
      const options = [...prev.selectedPrintingOptions];
      if (options.includes(option)) {
        return { ...prev, selectedPrintingOptions: options.filter(o => o !== option) };
      } else {
        return { ...prev, selectedPrintingOptions: [...options, option] };
      }
    });
  };

  const handleGiftTypeToggle = (type) => {
    setFormData(prev => {
      const types = [...prev.selectedGiftTypes];
      if (types.includes(type)) {
        return { ...prev, selectedGiftTypes: types.filter(t => t !== type) };
      } else {
        return { ...prev, selectedGiftTypes: [...types, type] };
      }
    });
  };

  const handleDeliveryLocationToggle = (location) => {
    setFormData(prev => {
      const locations = [...prev.deliveryLocations];
      if (locations.includes(location)) {
        return { ...prev, deliveryLocations: locations.filter(l => l !== location) };
      } else {
        return { ...prev, deliveryLocations: [...locations, location] };
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
      <div className="bg-gradient-to-b from-teal-50 to-emerald-50 w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh] lg:max-h-[90vh] border border-teal-200">

        {/* Top Bar */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 rounded-t-xl flex items-center gap-3 px-4 py-3 sm:py-3 shrink-0">
          <button 
            onClick={onClose} 
            className="shrink-0 text-emerald-200 hover:text-emerald-300 hover:scale-110 transition-transform duration-200"
          >
            <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
          <h2 className="font-pacifico font-semibold text-sm sm:text-base text-emerald-50 truncate">
            Invitation & Gifts Vendor Registration
          </h2>
          <button 
            onClick={onClose} 
            className="ml-auto shrink-0 text-emerald-200 hover:text-emerald-300 hover:scale-110 transition-transform duration-200 lg:hidden"
          >
            <X className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="bg-gradient-to-r from-teal-600/90 to-teal-700/90 px-3 py-2 sm:py-2 shrink-0 overflow-x-auto">
          <div className="flex items-start justify-between">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center min-w-[55px] sm:min-w-0">
                <div
                  className={`w-6 h-6 sm:w-6 sm:h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                    i <= step
                      ? "bg-gradient-to-br from-emerald-400 to-emerald-600 text-teal-900 shadow-lg"
                      : "bg-teal-800/50 text-emerald-100"
                  }`}
                >
                  {i + 1}
                </div>
                <p
                  className={`text-[9px] sm:text-[10px] mt-1 text-center font-medium ${
                    i === step
                      ? "text-emerald-300 font-semibold"
                      : "text-emerald-100/80"
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
              <h3 className="text-teal-800 font-bold text-center text-sm mb-2">
                <Gift className="inline w-4 h-4 mr-2" />
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
              
              <p className="text-sm font-semibold text-teal-800 mb-2">
                Type of Services Provided: *
              </p>
              
              <div className="space-y-2 pl-2">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {serviceTypes.map(service => (
                    <label key={service} className="flex items-center gap-2 text-xs">
                      <input 
                        type="checkbox" 
                        checked={formData.selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-3.5 h-3.5 accent-teal-600" 
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
              <h3 className="text-teal-800 font-bold text-center text-sm mb-2">
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
                placeholder="Office / Shop Address *" 
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
              <h3 className="text-teal-800 font-bold text-center text-sm mb-2">
                Business & Legal Details
              </h3>
              
              <p className="text-sm font-semibold text-teal-800 mb-2">
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
                      className="w-3.5 h-3.5 accent-teal-600" 
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

          {/* STEP 4: Invitation Details */}
          {step === 3 && (
            <>
              <h3 className="text-teal-800 font-bold text-center text-sm mb-2">
                <FileText className="inline w-4 h-4 mr-2" />
                Invitation Details
              </h3>
              
              <p className="text-sm font-semibold text-teal-800 mb-2">
                Invitation Types Offered: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2 mb-4">
                {invitationTypes.map(type => (
                  <label key={type} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedInvitationTypes.includes(type)}
                      onChange={() => handleInvitationTypeToggle(type)}
                      className="w-3.5 h-3.5 accent-teal-600" 
                    /> 
                    <span className="truncate">{type}</span>
                  </label>
                ))}
              </div>
              
              <p className="text-sm font-semibold text-teal-800 mb-2">
                Printing Options: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2 mb-4">
                {printingOptions.map(option => (
                  <label key={option} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedPrintingOptions.includes(option)}
                      onChange={() => handlePrintingOptionToggle(option)}
                      className="w-3.5 h-3.5 accent-teal-600" 
                    /> 
                    {option}
                  </label>
                ))}
              </div>
              
              <input 
                name="minOrderQuantity"
                value={formData.minOrderQuantity}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Minimum Order Quantity *" 
                type="number"
              />
              
              <p className="text-sm font-semibold text-teal-800 mt-3 mb-2">
                Customization Available: *
              </p>
              
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="customizationAvailable" 
                    value="yes"
                    checked={formData.customizationAvailable === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-teal-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="customizationAvailable" 
                    value="no"
                    checked={formData.customizationAvailable === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-teal-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 5: Gift & Return Gift Details */}
          {step === 4 && (
            <>
              <h3 className="text-teal-800 font-bold text-center text-sm mb-2">
                <Package className="inline w-4 h-4 mr-2" />
                Gift & Return Gift Details
              </h3>
              
              <p className="text-sm font-semibold text-teal-800 mb-2">
                Types of Gifts Offered: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2 mb-4">
                {giftTypes.map(type => (
                  <label key={type} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedGiftTypes.includes(type)}
                      onChange={() => handleGiftTypeToggle(type)}
                      className="w-3.5 h-3.5 accent-teal-600" 
                    /> 
                    <span className="truncate">{type}</span>
                  </label>
                ))}
              </div>
              
              <input 
                name="giftMinOrder"
                value={formData.giftMinOrder}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Minimum Order Quantity for Gifts *" 
                type="number"
              />
              
              <p className="text-sm font-semibold text-teal-800 mt-3 mb-2">
                Branding / Name Printing Available: *
              </p>
              <div className="flex gap-4 text-sm pl-2 mb-3">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="brandingAvailable" 
                    value="yes"
                    checked={formData.brandingAvailable === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-teal-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="brandingAvailable" 
                    value="no"
                    checked={formData.brandingAvailable === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-teal-600" 
                  /> 
                  No
                </label>
              </div>
              
              <p className="text-sm font-semibold text-teal-800 mb-2">
                Packing & Wrapping Included: *
              </p>
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="packingIncluded" 
                    value="yes"
                    checked={formData.packingIncluded === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-teal-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="packingIncluded" 
                    value="no"
                    checked={formData.packingIncluded === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-teal-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 6: Pricing & Payment Terms */}
          {step === 5 && (
            <>
              <h3 className="text-teal-800 font-bold text-center text-sm mb-2">
                <Banknote className="inline w-4 h-4 mr-2" />
                Pricing & Payment Terms
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                <input 
                  name="invitationMinPrice"
                  value={formData.invitationMinPrice}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Invitation Min Price (₹) *" 
                />
                
                <input 
                  name="invitationMaxPrice"
                  value={formData.invitationMaxPrice}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Invitation Max Price (₹) *" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-2">
                <input 
                  name="giftMinPrice"
                  value={formData.giftMinPrice}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Gift Min Price (₹) *" 
                />
                
                <input 
                  name="giftMaxPrice"
                  value={formData.giftMaxPrice}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Gift Max Price (₹) *" 
                />
              </div>
              
              <p className="text-sm font-semibold text-teal-800 mt-3 mb-2">
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
                    className="w-3.5 h-3.5 accent-teal-600" 
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
                    className="w-3.5 h-3.5 accent-teal-600" 
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
              
              <input 
                name="balanceTerms"
                value={formData.balanceTerms}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Balance Payment Terms *" 
              />
            </>
          )}

          {/* STEP 7: Delivery & Timeline */}
          {step === 6 && (
            <>
              <h3 className="text-teal-800 font-bold text-center text-sm mb-2">
                Delivery & Timeline
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input 
                  name="designApprovalTime"
                  value={formData.designApprovalTime}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Design Approval (Days) *" 
                  type="number"
                />
                
                <input 
                  name="printingDeliveryTime"
                  value={formData.printingDeliveryTime}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Printing & Delivery (Days) *" 
                  type="number"
                />
                
                <input 
                  name="giftPreparationTime"
                  value={formData.giftPreparationTime}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Gift Preparation (Days) *" 
                  type="number"
                />
              </div>
              
              <p className="text-sm font-semibold text-teal-800 mt-3 mb-2">
                Delivery Locations: *
              </p>
              
              <div className="grid grid-cols-2 gap-2 pl-2">
                {deliveryLocations.map(location => (
                  <label key={location} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.deliveryLocations.includes(location)}
                      onChange={() => handleDeliveryLocationToggle(location)}
                      className="w-3.5 h-3.5 accent-teal-600" 
                    /> 
                    {location}
                  </label>
                ))}
              </div>
            </>
          )}

          {/* STEP 8: Samples & Portfolio */}
          {step === 7 && (
            <>
              <h3 className="text-teal-800 font-bold text-center text-sm mb-2">
                <Palette className="inline w-4 h-4 mr-2" />
                Samples & Portfolio
              </h3>
              
              <p className="text-sm font-semibold text-teal-800 mb-2">
                Sample Cards / Gifts Provided: *
              </p>
              <div className="flex gap-4 text-sm pl-2 mb-3">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="samplesProvided" 
                    value="yes"
                    checked={formData.samplesProvided === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-teal-600" 
                  /> 
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="samplesProvided" 
                    value="no"
                    checked={formData.samplesProvided === "no"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-teal-600" 
                  /> 
                  No
                </label>
              </div>
              
              <input 
                name="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Website / Portfolio / Instagram Link" 
              />
              
              <p className="text-sm font-semibold text-teal-800 mt-3 mb-2">
                Photos Attached: *
              </p>
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="photosAttached" 
                    value="yes"
                    checked={formData.photosAttached === "yes"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-teal-600" 
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
                    className="w-3.5 h-3.5 accent-teal-600" 
                  /> 
                  No
                </label>
              </div>
            </>
          )}

          {/* STEP 9: Bank Details */}
          {step === 8 && (
            <>
              <h3 className="text-teal-800 font-bold text-center text-sm mb-2">
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

          {/* STEP 10: Declaration */}
          {step === 9 && (
            <>
              <h3 className="text-teal-800 font-bold text-center text-sm mb-2">
                Declaration
              </h3>
              
              <div className="bg-gradient-to-r from-teal-100 to-emerald-50 rounded-lg p-4 border border-teal-200">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  I hereby declare that the above information is true and correct. 
                  I agree to provide invitation and gift services for marriage functions 
                  as per agreed designs, quantities, timelines, and terms.
                </p>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm">
                    <input 
                      type="checkbox" 
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-teal-600" 
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
        <div className="flex gap-3 p-4 border-t border-teal-200 bg-gradient-to-r from-teal-50 to-emerald-50 shrink-0 rounded-b-xl">

          {step > 0 && (
            <button 
              className="btn-outline-teal text-sm px-3 py-2" 
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          
          <button
            className="btn-primary-teal ml-auto text-sm px-3 py-2"
            onClick={() => (step === 9 ? handleSubmit() : setStep(step + 1))}
            disabled={step === 9 && !formData.declaration}
          >
            {step === 9 ? "Submit Registration" : "Continue"}
          </button>
        </div>

      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid #0D9488;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .input-field:focus {
          outline: none;
          border-color: #0F766E;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.2);
        }
        
        .input-field::placeholder {
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        
        .btn-primary-teal {
          background: linear-gradient(135deg, #0D9488, #0F766E);
          color: white;
          font-weight: 600;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(13, 148, 136, 0.3);
        }
        
        .btn-primary-teal:hover:not(:disabled) {
          background: linear-gradient(135deg, #0F766E, #115E59);
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(13, 148, 136, 0.4);
        }
        
        .btn-primary-teal:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-outline-teal {
          background: transparent;
          color: #0D9488;
          font-weight: 600;
          border: 1.5px solid #0D9488;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-outline-teal:hover {
          background: #CCFBF1;
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(13, 148, 136, 0.2);
        }
      `}</style>
    </div>
  );
}