import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerRegistration = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    // Personal Details
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
    
    // Contact Information
    mobile: '',
    alternateMobile: '',
    email: '',
    address: '',
    cityDistrict: '',
    state: '',
    pinCode: '',
    
    // Family Details
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    siblings: '',
    familyType: '',
    familyStatus: '',
    familyValues: '',
    
    // Education & Career
    highestEducation: '',
    college: '',
    occupation: '',
    company: '',
    annualIncome: '',
    workLocation: '',
    
    // Password
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
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

  const InputField = ({ label, name, type = 'text', required = false, options = null, colSpan = 1 }) => (
    <div className={`${colSpan === 2 ? 'md:col-span-2' : ''}`}>
      <label className="block text-sm font-bold text-gray-700 mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {options ? (
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
        >
          <option value="">Select {label}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
        />
      )}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Personal Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Full Name" name="fullName" required />
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
              <InputField label="Caste" name="caste" />
              <InputField 
                label="Mother Tongue" 
                name="motherTongue" 
                options={['Tamil', 'Telugu', 'Hindi', 'Malayalam', 'Kannada', 'English', 'Other']} 
              />
              <div className="grid grid-cols-2 gap-4 md:col-span-2">
                <InputField label="Height (e.g., 5'5\)" name="height" />
                <InputField label="Weight (kg)" name="weight" type="number" />
              </div>
              <InputField 
                label="Body Type" 
                name="bodyType" 
                options={['Slim', 'Average', 'Athletic', 'Heavy']} 
              />
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
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Contact Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Mobile Number" name="mobile" type="tel" required />
              <InputField label="Alternate Mobile" name="alternateMobile" type="tel" />
              <InputField label="Email ID" name="email" type="email" required colSpan={2} />
              <InputField label="Address" name="address" required colSpan={2} />
              <InputField label="City / District" name="cityDistrict" required />
              <InputField 
                label="State" 
                name="state" 
                options={['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Telangana', 'Other']} 
                required 
              />
              <InputField label="PIN Code" name="pinCode" type="text" required />
              <div className="md:col-span-2"></div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Family Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Father's Name" name="fatherName" />
              <InputField label="Father's Occupation" name="fatherOccupation" />
              <InputField label="Mother's Name" name="motherName" />
              <InputField label="Mother's Occupation" name="motherOccupation" />
              <InputField label="Siblings" name="siblings" />
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
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800">Education & Career</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Highest Education" name="highestEducation" required />
              <InputField label="College / University" name="college" />
              <InputField label="Occupation" name="occupation" required />
              <InputField label="Company / Organization" name="company" />
              <InputField label="Annual Income" name="annualIncome" />
              <InputField label="Work Location" name="workLocation" />
              
              <div className="md:col-span-2 border-t border-gray-200 pt-8 mt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Create Password</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Password" name="password" type="password" required />
                  <InputField label="Confirm Password" name="confirmPassword" type="password" required />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-3" style={{ fontFamily: 'Pacifico, cursive' }}>
            Customer Registration
          </h1>
          <p className="text-gray-600 text-lg">Create your matrimonial profile in 4 simple steps</p>
        </div>

        {/* Progress Steps - Aligned as per your design */}
        <div className="mb-10">
          <div className="flex justify-between items-start">
            {[
              { number: 1, label: "Personal" },
              { number: 2, label: "Contact" },
              { number: 3, label: "Family" },
              { number: 4, label: "Career" }
            ].map((step, index) => (
              <div key={step.number} className="flex flex-col items-center flex-1 relative">
                {/* Step Number Circle */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg mb-3 z-10 transition-all transform ${
                  step.number <= currentStep 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-200 scale-110' 
                    : 'bg-white text-gray-400 border-2 border-gray-300'
                }`}>
                  {step.number}
                </div>
                
                {/* Step Label */}
                <span className={`text-sm font-semibold transition-all ${
                  step.number <= currentStep ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {step.label}
                </span>
                
                {/* Connecting Lines */}
                {index < 3 && (
                  <div className="absolute top-6 left-1/2 w-full h-0.5 -translate-y-1/2 z-0">
                    <div className={`h-full transition-all duration-300 ${
                      step.number < currentStep ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gray-300'
                    }`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500"
                style={{ width: `${(currentStep - 1) / (totalSteps - 1) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-red-100">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10 pt-8 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
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
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Next Step
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-bold hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Complete Registration
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Back to Login */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
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