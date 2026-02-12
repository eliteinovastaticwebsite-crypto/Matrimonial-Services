import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerRegistration = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 9;
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    fullName: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    religion: '',
    caste: '',
    motherTongue: '',
    height: '',
    weight: '',
    bodyType: '',
    complexion: '',
    
    // Step 2: Contact Information
    mobile: '',
    alternateMobile: '',
    email: '',
    address: '',
    cityDistrict: '',
    state: '',
    pinCode: '',
    
    // Step 3: Family Details
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    siblings: '',
    familyType: '',
    familyStatus: '',
    familyValues: '',
    
    // Step 4: Education & Career
    highestEducation: '',
    college: '',
    occupation: '',
    company: '',
    annualIncome: '',
    workLocation: '',
    
    // Step 5: Bride/Groom Details
    brideGroomName: '',
    age: '',
    religionBrideGroom: '',
    casteSubcaste: '',
    occupationBrideGroom: '',
    educationBrideGroom: '',
    
    // Step 6: Marriage Event Details
    weddingDate: '',
    weddingVenue: '',
    city: '',
    expectedGuests: '',
    
    // Step 7: Wedding Event Services (Checkboxes)
    weddingPlanner: false,
    photographyVideography: false,
    cateringServices: false,
    makeupArtist: false,
    decorationStageDesign: false,
    invitationDesign: false,
    djMusicBand: false,
    honeymoonPlanning: false,
    
    // Step 8: Package & Budget Selection
    packageSelection: '',
    budgetRange: '',
    specialRequirements: '',
    
    // Step 9: Declaration
    declaration: false,
    signatureData: '',
    declarationDate: '',
    
    // Password
    password: '',
    confirmPassword: '',
  });

  // Initialize canvas for signature
  useEffect(() => {
    if (currentStep === 9 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Set canvas size
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * 2;
      canvas.height = rect.height * 2;
      ctx.scale(2, 2);
      
      // Set drawing style
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      // Fill with white background
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, [currentStep]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Signature pad functions
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    setIsDrawing(true);
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
    setHasSignature(true);
  };

  const stopDrawing = () => {
    if (isDrawing) {
      const canvas = canvasRef.current;
      setFormData(prev => ({ 
        ...prev, 
        signatureData: canvas.toDataURL() 
      }));
    }
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
    setFormData(prev => ({ ...prev, signatureData: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.declaration) {
      alert('Please confirm the declaration!');
      return;
    }
    
    if (!hasSignature) {
      alert('Please provide your signature!');
      return;
    }
    
    // Store customer data
    const customerData = {
      id: `CUST-2024-${Math.floor(Math.random() * 10000).toString().padStart(5, '0')}`,
      name: formData.fullName,
      email: formData.email,
      mobile: formData.mobile,
      ...formData
    };
    
    localStorage.setItem('customerData', JSON.stringify(customerData));
    localStorage.setItem('customerLoggedIn', 'true');
    
    // Navigate to customer profile
    navigate('/customer-profile');
  };

  const InputField = ({ label, name, type = 'text', required = false, options = null, colSpan = 1, placeholder = '' }) => (
    <div className={`${colSpan === 2 ? 'col-span-full' : ''}`}>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {options ? (
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white"
        >
          <option value="">Select {label}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>{opt}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          rows="5"
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
        />
      )}
    </div>
  );

  const CheckboxField = ({ label, name }) => (
    <div className="flex items-start space-x-3">
      <input
        type="checkbox"
        name={name}
        checked={formData[name]}
        onChange={handleChange}
        className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500 mt-0.5 flex-shrink-0"
      />
      <label className="text-gray-700 font-medium cursor-pointer select-none" onClick={() => {
        setFormData(prev => ({ ...prev, [name]: !prev[name] }));
      }}>
        {label}
      </label>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2.5 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Personal Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Full Name" name="fullName" required placeholder="Enter your full name" />
              <InputField label="Date of Birth" name="dateOfBirth" type="date" required />
              <InputField 
                label="Gender" 
                name="gender" 
                options={['Male', 'Female', 'Other']} 
                required 
              />
              <InputField 
                label="Marital Status" 
                name="maritalStatus" 
                options={['Never Married', 'Divorced', 'Widowed', 'Awaiting Divorce']} 
                required 
              />
              <InputField 
                label="Religion" 
                name="religion" 
                options={['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain', 'Other']} 
                required 
              />
              <InputField label="Caste/Subcaste" name="caste" placeholder="Enter caste/subcaste" />
              <InputField 
                label="Mother Tongue" 
                name="motherTongue" 
                options={['Tamil', 'Telugu', 'Hindi', 'Malayalam', 'Kannada', 'English', 'Other']} 
              />
              <InputField 
                label="Body Type" 
                name="bodyType" 
                options={['Slim', 'Average', 'Athletic', 'Heavy']} 
              />
              <InputField label="Height" name="height" placeholder="e.g., 5ft 5in" />
              <InputField label="Weight (kg)" name="weight" type="number" placeholder="Enter weight" />
              <InputField 
                label="Complexion" 
                name="complexion" 
                options={['Fair', 'Wheatish', 'Dark']} 
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2.5 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Contact Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Mobile Number" name="mobile" type="tel" required placeholder="+91 XXXXX XXXXX" />
              <InputField label="Alternate Mobile" name="alternateMobile" type="tel" placeholder="+91 XXXXX XXXXX" />
              <InputField label="Email ID" name="email" type="email" required colSpan={2} placeholder="your.email@example.com" />
              <InputField label="Address" name="address" required colSpan={2} placeholder="Enter your complete address" />
              <InputField label="City/District" name="cityDistrict" required placeholder="Enter city/district" />
              <InputField 
                label="State" 
                name="state" 
                options={['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Telangana', 'Maharashtra', 'Other']} 
                required 
              />
              <InputField label="PIN Code" name="pinCode" type="text" required placeholder="Enter 6-digit PIN code" />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2.5 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Family Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Father's Name" name="fatherName" placeholder="Enter father's name" />
              <InputField label="Father's Occupation" name="fatherOccupation" placeholder="Enter occupation" />
              <InputField label="Mother's Name" name="motherName" placeholder="Enter mother's name" />
              <InputField label="Mother's Occupation" name="motherOccupation" placeholder="Enter occupation" />
              <InputField label="Number of Siblings" name="siblings" placeholder="e.g., 1 brother, 1 sister" />
              <InputField 
                label="Family Type" 
                name="familyType" 
                options={['Nuclear Family', 'Joint Family']} 
              />
              <InputField 
                label="Family Status" 
                name="familyStatus" 
                options={['Lower Middle Class', 'Middle Class', 'Upper Middle Class', 'Rich']} 
              />
              <InputField 
                label="Family Values" 
                name="familyValues" 
                options={['Traditional', 'Moderate', 'Liberal']} 
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2.5 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Education & Career</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Highest Education" name="highestEducation" required placeholder="e.g., B.Tech, MBA, M.Sc" />
              <InputField label="College/University" name="college" placeholder="Enter college/university name" />
              <InputField label="Occupation" name="occupation" required placeholder="e.g., Software Engineer" />
              <InputField label="Company/Organization" name="company" placeholder="Enter company name" />
              <InputField label="Annual Income" name="annualIncome" placeholder="e.g., ₹5,00,000" />
              <InputField label="Work Location" name="workLocation" placeholder="e.g., Chennai, Bangalore" />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2.5 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Bride/Groom Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Name of Bride/Groom" name="brideGroomName" required placeholder="Enter full name" />
              <InputField label="Age" name="age" type="number" required placeholder="Enter age" />
              <InputField label="Religion" name="religionBrideGroom" required placeholder="Enter religion" />
              <InputField label="Caste/Subcaste" name="casteSubcaste" placeholder="Enter caste/subcaste" />
              <InputField label="Occupation" name="occupationBrideGroom" required placeholder="Enter occupation" />
              <InputField label="Education" name="educationBrideGroom" required placeholder="Enter education qualification" />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2.5 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Marriage Event Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Wedding Date" name="weddingDate" type="date" required />
              <InputField label="City" name="city" required placeholder="Enter city name" />
              <InputField label="Wedding Venue" name="weddingVenue" required colSpan={2} placeholder="Enter complete venue address" />
              <InputField label="Expected Number of Guests" name="expectedGuests" type="number" required placeholder="Enter approximate count" />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2.5 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-800">Wedding Event Services</h3>
                <p className="text-sm text-gray-600 mt-1">Select the optional add-on services you require</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CheckboxField label="Wedding Planner" name="weddingPlanner" />
              <CheckboxField label="Photography & Videography" name="photographyVideography" />
              <CheckboxField label="Catering Services" name="cateringServices" />
              <CheckboxField label="Makeup Artist" name="makeupArtist" />
              <CheckboxField label="Decoration & Stage Design" name="decorationStageDesign" />
              <CheckboxField label="Invitation Design & Printing" name="invitationDesign" />
              <CheckboxField label="DJ / Music Band" name="djMusicBand" />
              <CheckboxField label="Honeymoon Planning" name="honeymoonPlanning" />
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2.5 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Package & Budget Selection</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField 
                label="Package Selection" 
                name="packageSelection" 
                options={['Basic Package', 'Standard Package', 'Premium Package', 'Custom Package']} 
                required 
              />
              <InputField 
                label="Budget Range" 
                name="budgetRange" 
                options={['Below ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000 – ₹3,00,000', 'Above ₹3,00,000']} 
                required 
              />
              <InputField 
                label="Special Requirements" 
                name="specialRequirements" 
                type="textarea"
                colSpan={2}
                placeholder="Please mention any special requirements, preferences, or additional details you would like us to know..."
              />
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2.5 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Declaration & Signature</h3>
            </div>
            
            <div className="space-y-6">
              {/* Declaration Checkbox */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h4 className="text-lg font-bold text-gray-800 mb-3">Declaration</h4>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    I hereby declare that all the information provided by me in this registration form is true, 
                    accurate, and complete to the best of my knowledge. I understand that any false information 
                    may result in the cancellation of my registration and services.
                  </p>
                  <div className="pt-2">
                    <CheckboxField 
                      label="I confirm that the above information provided is true and correct." 
                      name="declaration"
                    />
                  </div>
                </div>
              </div>

              {/* Signature Pad */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Signature <span className="text-red-600">*</span>
                </label>
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
                  <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="w-full h-40 cursor-crosshair touch-none"
                    style={{ touchAction: 'none' }}
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-gray-500">Please sign above using your mouse or touchscreen</p>
                  <button
                    type="button"
                    onClick={clearSignature}
                    className="text-sm text-red-600 hover:text-red-800 font-medium flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Clear
                  </button>
                </div>
              </div>

              {/* Date Field */}
              <div>
                <InputField 
                  label="Date" 
                  name="declarationDate" 
                  type="date" 
                  required 
                />
              </div>

              {/* Password Section */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Create Your Account Password</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label="Password" name="password" type="password" required placeholder="Enter password" />
                  <InputField label="Confirm Password" name="confirmPassword" type="password" required placeholder="Re-enter password" />
                </div>
                <p className="text-xs text-gray-500 mt-2">Password should be at least 8 characters long</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-50 py-6 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Pacifico, cursive' }}>
            Matrimony Service Registration
          </h1>
          <p className="text-gray-600 text-sm md:text-lg">Complete your registration in 9 simple steps</p>
        </div>

        {/* Progress Steps - Mobile Optimized */}
        <div className="mb-8 md:mb-12">
          {/* Desktop View */}
          <div className="hidden md:flex justify-between items-start">
            {[
              { number: 1, label: "Personal" },
              { number: 2, label: "Contact" },
              { number: 3, label: "Family" },
              { number: 4, label: "Career" },
              { number: 5, label: "Bride/Groom" },
              { number: 6, label: "Event" },
              { number: 7, label: "Services" },
              { number: 8, label: "Package" },
              { number: 9, label: "Declaration" }
            ].map((step, index) => (
              <div key={step.number} className="flex flex-col items-center flex-1 relative">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm mb-2 z-10 transition-all ${
                  step.number <= currentStep 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg' 
                    : 'bg-white text-gray-400 border-2 border-gray-300'
                }`}>
                  {step.number}
                </div>
                <span className={`text-xs font-semibold text-center ${
                  step.number <= currentStep ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {step.label}
                </span>
                {index < 8 && (
                  <div className="absolute top-5 left-1/2 w-full h-0.5 -translate-y-1/2 z-0">
                    <div className={`h-full transition-all ${
                      step.number < currentStep ? 'bg-red-600' : 'bg-gray-300'
                    }`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile View - Current Step Display */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold shadow-lg">
                  {currentStep}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Step {currentStep} of {totalSteps}</p>
                  <p className="text-sm font-bold text-red-800">
                    {['Personal Details', 'Contact Info', 'Family Details', 'Education & Career', 
                      'Bride/Groom Details', 'Event Details', 'Services', 'Package Selection', 'Declaration'][currentStep - 1]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500 ease-out"
                style={{ width: `${((currentStep) / totalSteps) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 px-1">
              <span className="text-xs text-gray-600 font-medium">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
              <span className="text-xs text-gray-500">{totalSteps - currentStep} steps remaining</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl p-5 md:p-8 border border-red-100">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`w-full sm:w-auto px-6 md:px-8 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md active:scale-95'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                >
                  Next Step
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-bold hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete Registration
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Back to Login */}
        <div className="text-center mt-6 md:mt-8">
          <p className="text-gray-600 text-sm md:text-base">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/customer-login')}
              className="text-red-600 font-semibold hover:text-red-800 hover:underline"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;