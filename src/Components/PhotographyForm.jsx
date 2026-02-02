import React, { useState, useEffect } from "react";
import { ArrowLeft, Camera, Video, Upload, Globe, Banknote, X, Pen } from "lucide-react";

// Form steps based on the details provided
const steps = [
  "Vendor Details",
  "Contact Information",
  "Business & Legal",
  "Equipment & Team",
  "Service Coverage",
  "Packages & Pricing",
  "Delivery Timeline",
  "Portfolio & Online",
  "Bank Details",
  "Declaration"
];

// Photography service types
const serviceTypes = [
  "Wedding Photography",
  "Candid Photography",
  "Videography",
  "Cinematic Wedding Film",
  "Pre-Wedding Shoot",
  "Drone Coverage"
];

// Business types
const businessTypes = [
  "Individual",
  "Proprietorship",
  "Partnership",
  "Private Limited"
];

// Preferred wedding locations
const locations = [
  "Local",
  "Within State",
  "Outstation",
  "International"
];

export default function VendorRegistrationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = React.useRef(null);
  const [formData, setFormData] = useState({
    // Step 1
    vendorName: "",
    ownerName: "",
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
    cameraModels: "",
    videoEquipment: "",
    teamMembers: "",
    hasBackup: "",
    
    // Step 5
    preferredLocations: [],
    hasTravelCharges: "",
    
    // Step 6
    basicPackage: "",
    fullPackage: "",
    candidPackage: "",
    videographyPackage: "",
    albumCharges: "",
    
    // Step 7
    photoDelivery: "",
    videoDelivery: "",
    albumDelivery: "",
    
    // Step 8
    website: "",
    instagram: "",
    portfolioLink: "",
    
    // Step 9
    accountName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
    
    // Step 10
    declaration: false
  });

  // Handle mobile safe area
  useEffect(() => {
    if (isOpen) {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--safe-area-height', `calc(${vh}px * 100)`);
    }
  }, [isOpen]);

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

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    const ctx = canvas.getContext('2d');
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#991B1B';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Registration submitted successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-gradient-to-b from-red-50 to-yellow-50 w-full max-w-md rounded-2xl shadow-2xl flex flex-col h-[90vh] max-h-[calc(var(--safe-area-height)-80px)] sm:h-auto sm:max-h-[85vh] border-2 border-red-200 mx-2 sm:mx-0">
        
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-t-2xl flex items-center gap-3 px-4 py-3 shrink-0">
          <button 
            onClick={onClose} 
            className="shrink-0 text-yellow-200 hover:text-yellow-300 hover:scale-110 transition-transform duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="font-pacifico font-semibold text-sm sm:text-base text-yellow-50 truncate">
            Photography Vendor Registration
          </h2>
          <button 
            onClick={onClose} 
            className="ml-auto shrink-0 text-yellow-200 hover:text-yellow-300 hover:scale-110 transition-transform duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="bg-gradient-to-r from-red-600/90 to-red-700/90 px-3 py-2 shrink-0 overflow-x-auto">
          <div className="flex items-start justify-between min-w-max">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center min-w-[60px] sm:min-w-0">
                <div
                  className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold ${
                    i <= step
                      ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-red-900 shadow-lg"
                      : "bg-red-800/50 text-yellow-100"
                  }`}
                >
                  {i + 1}
                </div>
                <p
                  className={`text-[9px] sm:text-[10px] mt-1 text-center font-medium truncate w-full px-0.5 ${
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
        <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-4 overflow-y-auto flex-1">
          
          {/* STEP 1: Vendor Details */}
          {step === 0 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-3">
                <Camera className="inline w-4 h-4 mr-2" />
                Vendor Basic Details
              </h3>
              
              <div className="form-group">
                <label className="form-label">Vendor / Studio Name *</label>
                <input 
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter vendor or studio name" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Owner / Photographer Name *</label>
                <input 
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter owner or photographer name" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Type of Service *</label>
                <div className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceTypes.map(service => (
                      <label key={service} className="flex items-center gap-2 text-xs">
                        <input 
                          type="checkbox" 
                          checked={formData.selectedServices.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-3.5 h-3.5 accent-red-600" 
                        /> 
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <label className="text-xs font-semibold whitespace-nowrap">Other:</label>
                    <input 
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleInputChange}
                      className="input-field flex-1" 
                      placeholder="Specify other service" 
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* STEP 2: Contact Information */}
          {step === 1 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-3">
                Contact Information
              </h3>
              
              <div className="form-group">
                <label className="form-label">Mobile Number *</label>
                <input 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter mobile number" 
                  type="tel"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Alternate Mobile Number</label>
                <input 
                  name="alternateMobile"
                  value={formData.alternateMobile}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter alternate mobile number" 
                  type="tel"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email ID *</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter email address" 
                  type="email"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Office Address *</label>
                <input 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter office address" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="form-group">
                  <label className="form-label">City / District *</label>
                  <input 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="Enter city" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">State *</label>
                  <input 
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="Enter state" 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">PIN Code *</label>
                <input 
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter PIN code" 
                />
              </div>
            </>
          )}

          {/* STEP 3: Business & Legal Details */}
          {step === 2 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-3">
                Business & Legal Details
              </h3>
              
              <div className="form-group">
                <label className="form-label">Business Type *</label>
                <div className="grid grid-cols-2 gap-2">
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
              </div>
              
              <div className="form-group">
                <label className="form-label">GST Number (if applicable)</label>
                <input 
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter GST number" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">PAN Number *</label>
                <input 
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter PAN number" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Years of Experience *</label>
                <input 
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter years of experience" 
                  type="number"
                />
              </div>
            </>
          )}

          {/* STEP 4: Equipment & Team Details */}
          {step === 3 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-3">
                <Camera className="inline w-4 h-4 mr-2" />
                Equipment & Team Details
              </h3>
              
              <div className="form-group">
                <label className="form-label">Camera Models Used *</label>
                <input 
                  name="cameraModels"
                  value={formData.cameraModels}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter camera models" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Video Equipment / Drone (if any)</label>
                <input 
                  name="videoEquipment"
                  value={formData.videoEquipment}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter video equipment details" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Number of Team Members *</label>
                <input 
                  name="teamMembers"
                  value={formData.teamMembers}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter number of team members" 
                  type="number"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Backup Equipment Available *</label>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="hasBackup" 
                      value="yes"
                      checked={formData.hasBackup === "yes"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="hasBackup" 
                      value="no"
                      checked={formData.hasBackup === "no"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    No
                  </label>
                </div>
              </div>
            </>
          )}

          {/* STEP 5: Service Coverage */}
          {step === 4 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-3">
                Service Coverage
              </h3>
              
              <div className="form-group">
                <label className="form-label">Preferred Wedding Locations *</label>
                <div className="grid grid-cols-2 gap-2">
                  {locations.map(location => (
                    <label key={location} className="flex items-center gap-2 text-xs">
                      <input 
                        type="checkbox" 
                        checked={formData.preferredLocations.includes(location)}
                        onChange={() => handleLocationToggle(location)}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      {location}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Travel Charges Applicable *</label>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="hasTravelCharges" 
                      value="yes"
                      checked={formData.hasTravelCharges === "yes"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="hasTravelCharges" 
                      value="no"
                      checked={formData.hasTravelCharges === "no"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    No
                  </label>
                </div>
              </div>
            </>
          )}

          {/* STEP 6: Packages & Pricing */}
          {step === 5 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-3">
                <Banknote className="inline w-4 h-4 mr-2" />
                Packages & Pricing
              </h3>
              
              <div className="form-group">
                <label className="form-label">Basic Wedding Package (₹) *</label>
                <input 
                  name="basicPackage"
                  value={formData.basicPackage}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter basic package price" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Full Wedding Package (₹) *</label>
                <input 
                  name="fullPackage"
                  value={formData.fullPackage}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter full package price" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Candid Photography (₹)</label>
                <input 
                  name="candidPackage"
                  value={formData.candidPackage}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter candid photography price" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Videography / Cinematic (₹)</label>
                <input 
                  name="videographyPackage"
                  value={formData.videographyPackage}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter videography price" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Album Charges (if separate)</label>
                <input 
                  name="albumCharges"
                  value={formData.albumCharges}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter album charges" 
                />
              </div>
            </>
          )}

          {/* STEP 7: Delivery Timeline */}
          {step === 6 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-3">
                Delivery Timeline
              </h3>
              
              <div className="form-group">
                <label className="form-label">Photo Delivery (Days) *</label>
                <input 
                  name="photoDelivery"
                  value={formData.photoDelivery}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter number of days" 
                  type="number"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Video Delivery (Days)</label>
                <input 
                  name="videoDelivery"
                  value={formData.videoDelivery}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter number of days" 
                  type="number"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Album Delivery (Days)</label>
                <input 
                  name="albumDelivery"
                  value={formData.albumDelivery}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter number of days" 
                  type="number"
                />
              </div>
            </>
          )}

          {/* STEP 8: Portfolio & Online Presence */}
          {step === 7 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-3">
                <Globe className="inline w-4 h-4 mr-2" />
                Portfolio & Online Presence
              </h3>
              
              <div className="form-group">
                <label className="form-label">Website / Portfolio Link</label>
                <input 
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter website URL" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Instagram / Facebook Page</label>
                <input 
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter social media handle" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Google Drive / Sample Work Link</label>
                <input 
                  name="portfolioLink"
                  value={formData.portfolioLink}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter portfolio link" 
                />
              </div>
            </>
          )}

          {/* STEP 9: Bank Details */}
          {step === 8 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-3">
                <Banknote className="inline w-4 h-4 mr-2" />
                Bank Details (For Payments)
              </h3>
              
              <div className="form-group">
                <label className="form-label">Account Holder Name *</label>
                <input 
                  name="accountName"
                  value={formData.accountName}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter account holder name" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Bank Name *</label>
                <input 
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter bank name" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Account Number *</label>
                <input 
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter account number" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">IFSC Code *</label>
                <input 
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter IFSC code" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">UPI ID (Optional)</label>
                <input 
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter UPI ID" 
                />
              </div>
            </>
          )}

          {/* STEP 10: Declaration */}
          {step === 9 && (
            <>
              <h3 className="text-red-800 font-bold text-center text-sm mb-3">
                Declaration
              </h3>
              
              <div className="bg-gradient-to-r from-red-100 to-yellow-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  I hereby declare that the above information is true and correct. 
                  I agree to provide photography services professionally for marriage events 
                  as per agreed terms and conditions.
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
                  
                  <div className="form-group">
                    <label className="form-label flex items-center gap-2">
                      <Pen className="w-4 h-4" />
                      Vendor Signature *
                    </label>
                    <p className="text-xs text-gray-600 mb-2">Draw your signature in the box below</p>
                    <div className="relative">
                      <canvas
                        ref={canvasRef}
                        width={400}
                        height={150}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          startDrawing(e);
                        }}
                        onTouchMove={(e) => {
                          e.preventDefault();
                          draw(e);
                        }}
                        onTouchEnd={stopDrawing}
                        className="signature-canvas"
                      />
                      <button
                        type="button"
                        onClick={clearSignature}
                        className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Date *</label>
                    <input 
                      className="input-field" 
                      placeholder="Select date" 
                      type="date"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Place *</label>
                    <input 
                      className="input-field" 
                      placeholder="Enter place" 
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex gap-3 p-4 border-t border-red-200 bg-gradient-to-r from-red-50 to-yellow-50 shrink-0 rounded-b-2xl">

          {step > 0 && (
            <button 
              className="btn-outline-red text-sm px-4 py-2.5" 
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          
          <button
            className="btn-primary-red ml-auto text-sm px-4 py-2.5"
            onClick={() => (step === 9 ? handleSubmit() : setStep(step + 1))}
            disabled={step === 9 && !formData.declaration}
          >
            {step === 9 ? "Submit Registration" : "Continue"}
          </button>
        </div>

      </div>

      <style jsx>{`
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #991B1B;
          padding-left: 0.25rem;
        }
        
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
        
        .signature-canvas {
          width: 100%;
          height: 150px;
          border: 1.5px solid #DC2626;
          border-radius: 0.5rem;
          background: white;
          cursor: crosshair;
          touch-action: none;
        }
      `}</style>
    </div>
  );
}