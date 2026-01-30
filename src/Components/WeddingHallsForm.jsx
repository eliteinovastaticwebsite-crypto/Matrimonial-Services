import React, { useState } from "react";
import { ArrowLeft, Home, Calendar, Car, Users, Banknote, X } from "lucide-react";

// Form steps based on wedding halls details
const steps = [
  "Venue Details",
  "Contact Information",
  "Business & Legal",
  "Capacity & Facilities",
  "Rooms & Accommodation",
  "Event & Time Slots",
  "Pricing & Terms",
  "Catering & Policy",
  "Service Coverage",
  "Photos & Online",
  "Bank Details",
  "Declaration"
];

// Venue types
const venueTypes = [
  "Mandapam",
  "Wedding Hall",
  "Convention Center",
  "Banquet Hall",
  "Open Lawn"
];

// Business types
const businessTypes = [
  "Individual",
  "Proprietorship",
  "Partnership",
  "Private Limited",
  "Trust / Society"
];

// Events allowed
const eventsAllowed = [
  "Marriage",
  "Reception",
  "Engagement",
  "Seemantham",
  "Sangeet / Mehendi",
  "Other Functions"
];

// Time slots
const timeSlots = [
  "Morning",
  "Evening",
  "Full Day"
];

// Facilities available
const facilities = [
  "AC Hall",
  "Non-AC Hall",
  "Generator Backup",
  "Lift",
  "Wheelchair Access",
  "Green Rooms (Bridal / Groom)",
  "Power Backup",
  "CCTV",
  "Fire Safety",
  "RO Water"
];

export default function WeddingHallsVendorModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    venueName: "",
    ownerName: "",
    selectedVenueTypes: [],
    otherVenueType: "",
    
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
    yearsOperation: "",
    
    // Step 4
    seatingCapacity: "",
    diningCapacity: "",
    parkingCapacity: "",
    numberOfFloors: "",
    selectedFacilities: [],
    
    // Step 5
    numberOfRooms: "",
    roomType: "",
    checkInTime: "",
    checkOutTime: "",
    
    // Step 6
    selectedEvents: [],
    selectedTimeSlots: [],
    
    // Step 7
    morningSlotPrice: "",
    eveningSlotPrice: "",
    fullDayPrice: "",
    securityDeposit: "",
    hasAdvance: "",
    advanceAmount: "",
    cancellationPolicy: "",
    
    // Step 8
    inhouseCatering: "",
    outsideCatering: "",
    decorationAllowed: "",
    soundAllowed: "",
    
    // Step 9
    noiseRestrictions: "",
    permissionsRequired: "",
    alcoholAllowed: "",
    
    // Step 10
    website: "",
    mapsLink: "",
    socialMedia: "",
    hasPhotos: "",
    
    // Step 11
    accountName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
    
    // Step 12
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
    console.log("Wedding Halls form submitted:", formData);
    alert("Wedding Hall Registration submitted successfully!");
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
            Wedding Halls / Mandapam Registration
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

          {/* STEP 1: Venue Details */}
          {step === 0 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Home className="inline w-4 h-4 mr-2" />
                Venue Basic Details
              </h3>
              
              <input 
                name="venueName"
                value={formData.venueName}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Mandapam / Wedding Hall Name *" 
              />
              
              <input 
                name="ownerName"
                value={formData.ownerName}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Owner / Management Name *" 
              />
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Type of Venue: *
              </p>
              
              <div className="space-y-2 pl-2">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {venueTypes.map(type => (
                    <label key={type} className="flex items-center gap-2 text-xs">
                      <input 
                        type="checkbox" 
                        checked={formData.selectedVenueTypes.includes(type)}
                        onChange={() => handleArrayToggle('selectedVenueTypes', type)}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="truncate">{type}</span>
                    </label>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 mt-3">
                  <label className="text-xs font-semibold">Other:</label>
                  <input 
                    name="otherVenueType"
                    value={formData.otherVenueType}
                    onChange={handleInputChange}
                    className="input-field text-sm flex-1" 
                    placeholder="Specify other venue type" 
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
                placeholder="Venue Address *" 
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
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
                name="yearsOperation"
                value={formData.yearsOperation}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Years in Operation *" 
                type="number"
              />
            </>
          )}

          {/* STEP 4: Venue Capacity & Facilities */}
          {step === 3 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Users className="inline w-4 h-4 mr-2" />
                Venue Capacity & Facilities
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                <input 
                  name="seatingCapacity"
                  value={formData.seatingCapacity}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Seating Capacity (Hall) *" 
                  type="number"
                />
                <input 
                  name="diningCapacity"
                  value={formData.diningCapacity}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Dining Capacity *" 
                  type="number"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-3">
                <input 
                  name="parkingCapacity"
                  value={formData.parkingCapacity}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Parking Capacity" 
                  type="number"
                />
                <input 
                  name="numberOfFloors"
                  value={formData.numberOfFloors}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Number of Floors" 
                  type="number"
                />
              </div>
              
              <p className="text-sm font-semibold text-red-800 mt-4 mb-2">
                Facilities Available: *
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pl-2">
                {facilities.map(facility => (
                  <label key={facility} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedFacilities.includes(facility)}
                      onChange={() => handleArrayToggle('selectedFacilities', facility)}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    <span className="truncate">{facility}</span>
                  </label>
                ))}
              </div>
            </>
          )}

          {/* STEP 5: Rooms & Accommodation */}
          {step === 4 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Home className="inline w-4 h-4 mr-2" />
                Rooms & Accommodation
              </h3>
              
              <input 
                name="numberOfRooms"
                value={formData.numberOfRooms}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Number of Rooms Available" 
                type="number"
              />
              
              <p className="text-sm font-semibold text-red-800 mt-3 mb-2">
                Room Type: *
              </p>
              
              <div className="flex gap-4 text-sm pl-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="roomType" 
                    value="AC"
                    checked={formData.roomType === "AC"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-red-600" 
                  /> 
                  AC
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="roomType" 
                    value="Non-AC"
                    checked={formData.roomType === "Non-AC"}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 accent-red-600" 
                  /> 
                  Non-AC
                </label>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-3">
                <input 
                  name="checkInTime"
                  value={formData.checkInTime}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Check-in Time" 
                />
                <input 
                  name="checkOutTime"
                  value={formData.checkOutTime}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Check-out Time" 
                />
              </div>
            </>
          )}

          {/* STEP 6: Event & Time Slot Details */}
          {step === 5 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Calendar className="inline w-4 h-4 mr-2" />
                Event & Time Slot Details
              </h3>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Events Allowed: *
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pl-2 mb-4">
                {eventsAllowed.map(event => (
                  <label key={event} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedEvents.includes(event)}
                      onChange={() => handleArrayToggle('selectedEvents', event)}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    <span className="truncate">{event}</span>
                  </label>
                ))}
              </div>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Time Slots Available: *
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pl-2">
                {timeSlots.map(slot => (
                  <label key={slot} className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={formData.selectedTimeSlots.includes(slot)}
                      onChange={() => handleArrayToggle('selectedTimeSlots', slot)}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    {slot}
                  </label>
                ))}
              </div>
            </>
          )}

          {/* STEP 7: Pricing & Booking Terms */}
          {step === 6 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                <Banknote className="inline w-4 h-4 mr-2" />
                Pricing & Booking Terms
              </h3>
              
              <p className="text-sm font-semibold text-red-800 mb-2">
                Hall Rent (₹):
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <input 
                  name="morningSlotPrice"
                  value={formData.morningSlotPrice}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Morning Slot" 
                />
                <input 
                  name="eveningSlotPrice"
                  value={formData.eveningSlotPrice}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Evening Slot" 
                />
                <input 
                  name="fullDayPrice"
                  value={formData.fullDayPrice}
                  onChange={handleInputChange}
                  className="input-field text-sm" 
                  placeholder="Full Day" 
                />
              </div>
              
              <input 
                name="securityDeposit"
                value={formData.securityDeposit}
                onChange={handleInputChange}
                className="input-field text-sm mt-3" 
                placeholder="Security Deposit (if any)" 
              />
              
              <div className="mt-3">
                <p className="text-sm font-semibold text-red-800 mb-2">
                  Advance Amount Required: *
                </p>
                <div className="flex gap-4 pl-2">
                  <label className="flex items-center gap-2 text-xs">
                    <input 
                      type="radio" 
                      name="hasAdvance" 
                      value="yes"
                      checked={formData.hasAdvance === "yes"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <input 
                      type="radio" 
                      name="hasAdvance" 
                      value="no"
                      checked={formData.hasAdvance === "no"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    No
                  </label>
                </div>
                
                {formData.hasAdvance === "yes" && (
                  <input 
                    name="advanceAmount"
                    value={formData.advanceAmount}
                    onChange={handleInputChange}
                    className="input-field text-sm mt-3" 
                    placeholder="Advance % / Amount" 
                  />
                )}
              </div>
              
              <input 
                name="cancellationPolicy"
                value={formData.cancellationPolicy}
                onChange={handleInputChange}
                className="input-field text-sm mt-3" 
                placeholder="Cancellation Policy" 
              />
            </>
          )}

          {/* STEP 8: Catering & Vendor Policy */}
          {step === 7 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Catering & Vendor Policy
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    In-house Catering Available: *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="inhouseCatering" 
                        value="yes"
                        checked={formData.inhouseCatering === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="inhouseCatering" 
                        value="no"
                        checked={formData.inhouseCatering === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Outside Catering Allowed: *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="outsideCatering" 
                        value="yes"
                        checked={formData.outsideCatering === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="outsideCatering" 
                        value="no"
                        checked={formData.outsideCatering === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Decoration Allowed: *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="decorationAllowed" 
                        value="inhouse"
                        checked={formData.decorationAllowed === "inhouse"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      In-house
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="decorationAllowed" 
                        value="outside"
                        checked={formData.decorationAllowed === "outside"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Outside
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Sound / DJ Allowed: *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="soundAllowed" 
                        value="yes"
                        checked={formData.soundAllowed === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="soundAllowed" 
                        value="no"
                        checked={formData.soundAllowed === "no"}
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

          {/* STEP 9: Service Coverage & Permissions */}
          {step === 8 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Service Coverage & Permissions
              </h3>
              
              <input 
                name="noiseRestrictions"
                value={formData.noiseRestrictions}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Noise Restrictions / Time Limit" 
              />
              
              <div className="space-y-4 mt-3">
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Fire / Police Permission Required: *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="permissionsRequired" 
                        value="yes"
                        checked={formData.permissionsRequired === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="permissionsRequired" 
                        value="no"
                        checked={formData.permissionsRequired === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Alcohol Allowed: *
                  </p>
                  <div className="flex gap-4 pl-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="alcoholAllowed" 
                        value="yes"
                        checked={formData.alcoholAllowed === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input 
                        type="radio" 
                        name="alcoholAllowed" 
                        value="no"
                        checked={formData.alcoholAllowed === "no"}
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

          {/* STEP 10: Photos & Online Presence */}
          {step === 9 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Photos & Online Presence
              </h3>
              
              <input 
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Website / Booking Link" 
              />
              
              <input 
                name="mapsLink"
                value={formData.mapsLink}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Google Maps Location Link" 
              />
              
              <input 
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleInputChange}
                className="input-field text-sm" 
                placeholder="Social Media Pages" 
              />
              
              <div className="mt-3">
                <p className="text-sm font-semibold text-red-800 mb-2">
                  Photos / Video of Venue Attached: *
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

          {/* STEP 11: Bank Details */}
          {step === 10 && (
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

          {/* STEP 12: Declaration */}
          {step === 11 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-2">
                Declaration
              </h3>
              
              <div className="bg-gradient-to-r from-red-100 to-yellow-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  I hereby declare that the above details are true and correct. 
                  I agree to provide Mandapam / Wedding Hall services for marriage 
                  functions as per agreed terms and conditions.
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
            onClick={() => (step === 11 ? handleSubmit() : setStep(step + 1))}
            disabled={step === 11 && !formData.declaration}
          >
            {step === 11 ? "Submit Registration" : "Continue"}
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