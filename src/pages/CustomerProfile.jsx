import React, { useState } from 'react';

const CustomerProfile = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    fullName: 'Priya Sharma',
    dateOfBirth: '1995-05-15',
    gender: 'Female',
    religion: 'Hindu',
    caste: 'Brahmin',
    mobile: '+91 98765 43210',
    email: 'priya.sharma@example.com',
    address: '123 Marriage Street, Chennai',
    cityDistrict: 'Chennai',
    state: 'Tamil Nadu',
    pinCode: '600001',
  });

  const handleEditChange = (e) => {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    setShowEditModal(false);
  };

  const customerData = {
    id: 'CUST-2024-00456',
    profilePhoto: '',
    personalDetails: {
      fullName: editForm.fullName,
      dateOfBirth: editForm.dateOfBirth,
      age: '28 Years',
      gender: editForm.gender,
      maritalStatus: 'Never Married',
      religion: editForm.religion,
      caste: editForm.caste,
      motherTongue: 'Tamil',
      height: '5\'5"',
      weight: '55 kg',
      physicalStatus: 'Normal',
      bodyType: 'Average',
      complexion: 'Fair',
    },
    contactInfo: {
      mobile: editForm.mobile,
      alternateMobile: '+91 87654 32109',
      email: editForm.email,
      address: editForm.address,
      cityDistrict: editForm.cityDistrict,
      state: editForm.state,
      pinCode: editForm.pinCode,
      currentLocation: 'Chennai, Tamil Nadu',
    },
    familyDetails: {
      fatherName: 'Mr. Rajesh Sharma',
      fatherOccupation: 'Business Owner',
      motherName: 'Mrs. Sunita Sharma',
      motherOccupation: 'Homemaker',
      siblings: '1 Brother, 1 Sister',
      familyType: 'Nuclear Family',
      familyStatus: 'Middle Class',
      familyValues: 'Traditional',
    },
    educationCareer: {
      highestEducation: 'M.Tech - Computer Science',
      college: 'Anna University, Chennai',
      occupation: 'Software Engineer',
      company: 'Tech Solutions Pvt Ltd',
      annualIncome: '₹12,00,000',
      workLocation: 'Chennai',
    },
    partnerPreferences: {
      ageRange: '28-32 Years',
      heightRange: '5\'8" - 6\'0"',
      maritalStatus: 'Never Married',
      religion: 'Hindu',
      caste: 'Any',
      education: 'Engineering or Higher',
      occupation: 'Professional',
      location: 'Chennai, Bangalore, Hyderabad',
      annualIncome: '₹10,00,000+',
    },
    hobbiesInterests: {
      hobbies: ['Reading', 'Cooking', 'Travel', 'Music', 'Yoga'],
      interests: ['Technology', 'Photography', 'Food', 'Fitness'],
    },
    servicesInterested: {
      photography: true,
      catering: true,
      weddingHalls: true,
      decorations: true,
      entertainment: false,
      invitation: true,
      styling: true,
    },
  };

  const sections = [
    { id: 'personal', title: 'Personal Details' },
    { id: 'contact', title: 'Contact Information' },
    { id: 'family', title: 'Family Details' },
    { id: 'education', title: 'Education & Career' },
    { id: 'partner', title: 'Partner Preferences' },
    { id: 'hobbies', title: 'Hobbies & Interests' },
    { id: 'services', title: 'Wedding Services' },
  ];

  // Field and Value components for consistent styling
  const Field = ({ label, children, className = '' }) => (
    <div className={`mb-4 ${className}`}>
      <h4 className="text-xs font-bold text-gray-600 mb-1">{label}</h4>
      <div className="min-h-[20px]">
        {children}
      </div>
    </div>
  );

  const Val = ({ children, className = '' }) => (
    <p className={`text-sm font-medium text-gray-800 ${className}`}>{children}</p>
  );

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <div className="space-y-6">
            {/* Row 1: Name and DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Full Name">
                <Val>{customerData.personalDetails.fullName}</Val>
              </Field>
              <Field label="Date of Birth">
                <Val>{customerData.personalDetails.dateOfBirth}</Val>
              </Field>
            </div>
            
            {/* Row 2: Age, Gender, Marital Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Field label="Age">
                <Val>{customerData.personalDetails.age}</Val>
              </Field>
              <Field label="Gender">
                <Val>{customerData.personalDetails.gender}</Val>
              </Field>
              <Field label="Marital Status">
                <Val>{customerData.personalDetails.maritalStatus}</Val>
              </Field>
            </div>
            
            {/* Row 3: Religion, Caste, Mother Tongue */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Field label="Religion">
                <Val>{customerData.personalDetails.religion}</Val>
              </Field>
              <Field label="Caste">
                <Val>{customerData.personalDetails.caste}</Val>
              </Field>
              <Field label="Mother Tongue">
                <Val>{customerData.personalDetails.motherTongue}</Val>
              </Field>
            </div>
            
            {/* Row 4: Physical Details */}
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-xs font-bold text-gray-600 mb-3">Physical Details</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Field label="Height">
                  <Val>{customerData.personalDetails.height}</Val>
                </Field>
                <Field label="Weight">
                  <Val>{customerData.personalDetails.weight}</Val>
                </Field>
                <Field label="Body Type">
                  <Val>{customerData.personalDetails.bodyType}</Val>
                </Field>
                <Field label="Complexion">
                  <Val>{customerData.personalDetails.complexion}</Val>
                </Field>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            {/* Row 1: Contact Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Mobile Number">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <Val>{customerData.contactInfo.mobile}</Val>
                </div>
              </Field>
              <Field label="Alternate Mobile">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <Val>{customerData.contactInfo.alternateMobile}</Val>
                </div>
              </Field>
            </div>
            
            {/* Row 2: Email */}
            <Field label="Email ID">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Val>{customerData.contactInfo.email}</Val>
              </div>
            </Field>
            
            {/* Row 3: Address */}
            <Field label="Address">
              <Val className="break-words">{customerData.contactInfo.address}</Val>
            </Field>
            
            {/* Row 4: Location Details */}
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-xs font-bold text-gray-600 mb-3">Location Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Field label="City / District">
                  <Val>{customerData.contactInfo.cityDistrict}</Val>
                </Field>
                <Field label="State">
                  <Val>{customerData.contactInfo.state}</Val>
                </Field>
                <Field label="PIN Code">
                  <Val>{customerData.contactInfo.pinCode}</Val>
                </Field>
              </div>
            </div>
            
            {/* Row 5: Current Location */}
            <Field label="Current Location">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <Val>{customerData.contactInfo.currentLocation}</Val>
              </div>
            </Field>
          </div>
        );

      case 'family':
        return (
          <div className="space-y-6">
            {/* Row 1: Father's Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Father's Name">
                <Val>{customerData.familyDetails.fatherName}</Val>
              </Field>
              <Field label="Father's Occupation">
                <Val>{customerData.familyDetails.fatherOccupation}</Val>
              </Field>
            </div>
            
            {/* Row 2: Mother's Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Mother's Name">
                <Val>{customerData.familyDetails.motherName}</Val>
              </Field>
              <Field label="Mother's Occupation">
                <Val>{customerData.familyDetails.motherOccupation}</Val>
              </Field>
            </div>
            
            {/* Row 3: Siblings & Family Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Siblings">
                <Val>{customerData.familyDetails.siblings}</Val>
              </Field>
              <Field label="Family Type">
                <Val>{customerData.familyDetails.familyType}</Val>
              </Field>
            </div>
            
            {/* Row 4: Family Status & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Family Status">
                <Val>{customerData.familyDetails.familyStatus}</Val>
              </Field>
              <Field label="Family Values">
                <Val>{customerData.familyDetails.familyValues}</Val>
              </Field>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            {/* Row 1: Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Highest Education">
                <Val>{customerData.educationCareer.highestEducation}</Val>
              </Field>
              <Field label="College / University">
                <Val>{customerData.educationCareer.college}</Val>
              </Field>
            </div>
            
            {/* Row 2: Career */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Occupation">
                <Val>{customerData.educationCareer.occupation}</Val>
              </Field>
              <Field label="Company / Organization">
                <Val>{customerData.educationCareer.company}</Val>
              </Field>
            </div>
            
            {/* Row 3: Income & Work Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Annual Income">
                <p className="text-sm font-bold text-green-700">{customerData.educationCareer.annualIncome}</p>
              </Field>
              <Field label="Work Location">
                <Val>{customerData.educationCareer.workLocation}</Val>
              </Field>
            </div>
          </div>
        );

      case 'partner':
        return (
          <div className="space-y-6">
            {/* Row 1: Basic Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Preferred Age Range">
                <Val>{customerData.partnerPreferences.ageRange}</Val>
              </Field>
              <Field label="Preferred Height Range">
                <Val>{customerData.partnerPreferences.heightRange}</Val>
              </Field>
            </div>
            
            {/* Row 2: Marital & Religious Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Marital Status">
                <Val>{customerData.partnerPreferences.maritalStatus}</Val>
              </Field>
              <Field label="Religion">
                <Val>{customerData.partnerPreferences.religion}</Val>
              </Field>
            </div>
            
            {/* Row 3: Education & Caste */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Caste">
                <Val>{customerData.partnerPreferences.caste}</Val>
              </Field>
              <Field label="Education">
                <Val>{customerData.partnerPreferences.education}</Val>
              </Field>
            </div>
            
            {/* Row 4: Occupation & Income */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Occupation">
                <Val>{customerData.partnerPreferences.occupation}</Val>
              </Field>
              <Field label="Annual Income">
                <Val>{customerData.partnerPreferences.annualIncome}</Val>
              </Field>
            </div>
            
            {/* Row 5: Location */}
            <Field label="Preferred Location">
              <Val>{customerData.partnerPreferences.location}</Val>
            </Field>
          </div>
        );

      case 'hobbies':
        return (
          <div className="space-y-6">
            {/* Hobbies */}
            <Field label="Hobbies">
              <div className="flex flex-wrap gap-2">
                {customerData.hobbiesInterests.hobbies.map((hobby, i) => (
                  <span key={i} className="inline-flex items-center bg-purple-50 text-purple-700 text-xs md:text-sm px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3 md:w-4 md:h-4 mr-1.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {hobby}
                  </span>
                ))}
              </div>
            </Field>
            
            {/* Interests */}
            <Field label="Interests">
              <div className="flex flex-wrap gap-2">
                {customerData.hobbiesInterests.interests.map((interest, i) => (
                  <span key={i} className="inline-flex items-center bg-blue-50 text-blue-700 text-xs md:text-sm px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3 md:w-4 md:h-4 mr-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {interest}
                  </span>
                ))}
              </div>
            </Field>
          </div>
        );

      case 'services':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(customerData.servicesInterested).map(([service, interested]) => (
              <div key={service} className={`p-4 rounded-lg border-2 ${interested ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'} transition-all duration-300 hover:scale-105`}>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-800 capitalize">
                    {service.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  {interested ? (
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <p className={`text-xs mt-1 ${interested ? 'text-green-600' : 'text-gray-600'}`}>
                  {interested ? 'Interested' : 'Not Interested'}
                </p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      {/* EDIT MODAL */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 flex items-center justify-between">
              <h2 className="text-white text-lg font-bold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Profile
              </h2>
              <button onClick={() => setShowEditModal(false)} className="text-white/80 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-5 space-y-4 max-h-[60vh] overflow-y-auto">
              {[
                { name: 'fullName', label: 'Full Name' },
                { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
                { name: 'gender', label: 'Gender' },
                { name: 'religion', label: 'Religion' },
                { name: 'caste', label: 'Caste' },
                { name: 'mobile', label: 'Mobile Number' },
                { name: 'email', label: 'Email ID' },
                { name: 'address', label: 'Address' },
                { name: 'cityDistrict', label: 'City / District' },
                { name: 'state', label: 'State' },
                { name: 'pinCode', label: 'PIN Code' },
              ].map((field) => (
                <div key={field.name} className="space-y-1">
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {field.label}
                  </label>
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={editForm[field.name]}
                    onChange={handleEditChange}
                    className="w-full border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none transition-all"
                  />
                </div>
              ))}
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
              <button 
                onClick={() => setShowEditModal(false)} 
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave} 
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold hover:from-red-700 hover:to-red-800 transition-all shadow"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAGE BODY */}
      <div className="container mx-auto px-2 md:px-4 py-3 md:py-6">
        {/* Breadcrumb */}
        <nav className="mb-3 md:mb-6">
          <ol className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
            <li><a href="/" className="text-red-600 hover:text-red-800">Home</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-medium">Customer Profile</li>
          </ol>
        </nav>

        {/* Main Profile Card */}
        <div className="bg-white rounded-lg md:rounded-xl shadow-lg border border-red-200 overflow-hidden mb-4 md:mb-8">
          {/* Profile Header */}
          <div className="relative bg-gradient-to-r from-red-600 to-red-700 p-4 md:p-6">
            {/* Edit Profile button */}
            <div className="flex justify-end mb-3">
              <button
                onClick={() => setShowEditModal(true)}
                className="bg-white text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-md text-xs md:text-sm font-bold flex items-center gap-1.5 transition-all duration-300 shadow-sm"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Profile
              </button>
            </div>

            {/* Profile Photo + Info */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              {/* Profile Photo */}
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-red-50 to-yellow-50 flex-shrink-0">
                {customerData.profilePhoto ? (
                  <img src={customerData.profilePhoto} alt={customerData.personalDetails.fullName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-red-100">
                    <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <h1 className="text-lg md:text-2xl font-bold text-white">
                    {customerData.personalDetails.fullName}
                  </h1>
                  <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-red-800 px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-sm w-fit">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={2} />
                      <path d="M3 10h18" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                    Customer ID: {customerData.id}
                  </span>
                </div>

                <div className="text-white/90 text-sm md:text-base space-y-1 mt-3">
                  <div className="flex items-center">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{customerData.contactInfo.currentLocation}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{customerData.educationCareer.occupation} at {customerData.educationCareer.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    { icon: 'phone', label: customerData.contactInfo.mobile },
                    { icon: 'mail', label: customerData.contactInfo.email },
                  ].map((btn, i) => (
                    <button key={i} className="bg-white text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all duration-300">
                      {btn.icon === 'phone' && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                      {btn.icon === 'mail' && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="p-4 md:p-6 bg-gradient-to-r from-yellow-50 to-red-50 border-b border-gray-200">
            <div className="bg-white p-4 rounded-lg shadow border border-yellow-200">
              <h3 className="text-sm md:text-base font-bold text-red-700 mb-3 flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Quick Contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-800">{customerData.contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-800">{customerData.contactInfo.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Navigation + Content */}
          <div className="border-t border-gray-200">
            {/* Mobile tabs */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto px-3 py-2 border-b border-gray-200 bg-gray-50 no-scrollbar">
                <div className="flex space-x-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 whitespace-nowrap min-w-max ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop tabs */}
            <div className="hidden md:flex border-b border-gray-200">
              <div className="w-full">
                <div className="grid grid-cols-4">
                  {sections.slice(0, 4).map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`p-3 text-sm font-medium transition-all duration-300 border-r border-gray-200 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3">
                  {sections.slice(4, 7).map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`p-3 text-sm font-medium transition-all duration-300 border-r border-gray-200 last:border-r-0 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active section content */}
            <div className="p-4 md:p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-base md:text-lg font-bold text-red-800">
                  {sections.find((s) => s.id === activeSection)?.title}
                </h3>
                <div className="ml-2 w-8 h-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full"></div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-4 md:p-6 rounded-lg border border-red-100">
                {renderSectionContent()}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 md:p-6 border-t border-gray-200 bg-gradient-to-r from-red-50 to-yellow-50">
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Find Matches
              </button>
              <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-3 px-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Browse Vendors
              </button>
              <button className="flex-1 bg-white border-2 border-red-600 text-red-700 py-3 px-4 rounded-lg font-bold hover:bg-red-50 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                My Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;