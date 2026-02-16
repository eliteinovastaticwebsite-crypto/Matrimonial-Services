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
    { id: 'personal', title: 'Personal Details', emoji: '👤' },
    { id: 'contact', title: 'Contact Information', emoji: '📞' },
    { id: 'family', title: 'Family Details', emoji: '👨‍👩‍👧‍👦' },
    { id: 'education', title: 'Education & Career', emoji: '🎓' },
    { id: 'partner', title: 'Partner Preferences', emoji: '💑' },
    { id: 'hobbies', title: 'Hobbies & Interests', emoji: '🎨' },
    { id: 'services', title: 'Wedding Services', emoji: '💒' },
  ];

  const Field = ({ label, children, emoji }) => (
    <div className="group mb-4 transform transition-all duration-300 hover:translate-x-1">
      <h4 className="text-xs font-bold text-gray-600 mb-1 flex items-center gap-1">
        {emoji && <span className="text-sm">{emoji}</span>}
        <span className="group-hover:text-red-600 transition-colors duration-300">{label}</span>
      </h4>
      <div className="min-h-[20px] bg-white/50 rounded-lg p-2 group-hover:bg-white group-hover:shadow-md transition-all duration-300 border border-transparent group-hover:border-red-200">
        {children}
      </div>
    </div>
  );

  const Val = ({ children }) => (
    <p className="text-sm font-medium text-gray-800 flex items-center gap-1">
      {children}
    </p>
  );

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Field label="Full Name" emoji="✨">
                <Val>{customerData.personalDetails.fullName}</Val>
              </Field>
              <Field label="Date of Birth" emoji="🎂">
                <Val>{customerData.personalDetails.dateOfBirth}</Val>
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Age" emoji="📅">
                  <Val>{customerData.personalDetails.age}</Val>
                </Field>
                <Field label="Gender" emoji="⚥">
                  <Val>{customerData.personalDetails.gender}</Val>
                </Field>
              </div>
            </div>
            <div className="space-y-4">
              <Field label="Marital Status" emoji="💍">
                <Val>{customerData.personalDetails.maritalStatus}</Val>
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Religion" emoji="🕉️">
                  <Val>{customerData.personalDetails.religion}</Val>
                </Field>
                <Field label="Caste" emoji="👥">
                  <Val>{customerData.personalDetails.caste}</Val>
                </Field>
              </div>
              <Field label="Mother Tongue" emoji="🗣️">
                <Val>{customerData.personalDetails.motherTongue}</Val>
              </Field>
            </div>
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-red-200">
                <Field label="Height" emoji="📏">
                  <Val>{customerData.personalDetails.height}</Val>
                </Field>
                <Field label="Weight" emoji="⚖️">
                  <Val>{customerData.personalDetails.weight}</Val>
                </Field>
                <Field label="Body Type" emoji="💪">
                  <Val>{customerData.personalDetails.bodyType}</Val>
                </Field>
                <Field label="Complexion" emoji="🌟">
                  <Val>{customerData.personalDetails.complexion}</Val>
                </Field>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Field label="Mobile Number" emoji="📱">
                <Val>{customerData.contactInfo.mobile}</Val>
              </Field>
              <Field label="Alternate Mobile" emoji="📲">
                <Val>{customerData.contactInfo.alternateMobile}</Val>
              </Field>
            </div>
            <div className="space-y-4">
              <Field label="Email ID" emoji="✉️">
                <Val>{customerData.contactInfo.email}</Val>
              </Field>
              <Field label="Address" emoji="🏠">
                <Val className="break-words">{customerData.contactInfo.address}</Val>
              </Field>
            </div>
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-red-200">
                <Field label="City / District" emoji="🏙️">
                  <Val>{customerData.contactInfo.cityDistrict}</Val>
                </Field>
                <Field label="State" emoji="🗺️">
                  <Val>{customerData.contactInfo.state}</Val>
                </Field>
                <Field label="PIN Code" emoji="📍">
                  <Val>{customerData.contactInfo.pinCode}</Val>
                </Field>
              </div>
              <div className="pt-4">
                <Field label="Current Location" emoji="🌍">
                  <p className="text-sm font-medium text-gray-800 flex items-center">
                    <span className="mr-1.5">📍</span>
                    {customerData.contactInfo.currentLocation}
                  </p>
                </Field>
              </div>
            </div>
          </div>
        );

      case 'family':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Field label="Father's Name" emoji="👨">
                <Val>{customerData.familyDetails.fatherName}</Val>
              </Field>
              <Field label="Father's Occupation" emoji="💼">
                <Val>{customerData.familyDetails.fatherOccupation}</Val>
              </Field>
            </div>
            <div className="space-y-4">
              <Field label="Mother's Name" emoji="👩">
                <Val>{customerData.familyDetails.motherName}</Val>
              </Field>
              <Field label="Mother's Occupation" emoji="👗">
                <Val>{customerData.familyDetails.motherOccupation}</Val>
              </Field>
            </div>
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-red-200">
                <Field label="Siblings" emoji="👫">
                  <Val>{customerData.familyDetails.siblings}</Val>
                </Field>
                <Field label="Family Type" emoji="🏡">
                  <Val>{customerData.familyDetails.familyType}</Val>
                </Field>
                <Field label="Family Status" emoji="💰">
                  <Val>{customerData.familyDetails.familyStatus}</Val>
                </Field>
                <Field label="Family Values" emoji="💝">
                  <Val>{customerData.familyDetails.familyValues}</Val>
                </Field>
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Field label="Highest Education" emoji="🎓">
                <Val>{customerData.educationCareer.highestEducation}</Val>
              </Field>
              <Field label="College / University" emoji="🏛️">
                <Val>{customerData.educationCareer.college}</Val>
              </Field>
            </div>
            <div className="space-y-4">
              <Field label="Occupation" emoji="💻">
                <Val>{customerData.educationCareer.occupation}</Val>
              </Field>
              <Field label="Company" emoji="🏢">
                <Val>{customerData.educationCareer.company}</Val>
              </Field>
            </div>
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-red-200">
                <Field label="Annual Income" emoji="💰">
                  <p className="text-sm font-bold text-green-700 flex items-center gap-1">
                    <span>💵</span> {customerData.educationCareer.annualIncome}
                  </p>
                </Field>
                <Field label="Work Location" emoji="🏢">
                  <Val>{customerData.educationCareer.workLocation}</Val>
                </Field>
              </div>
            </div>
          </div>
        );

      case 'partner':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Field label="Preferred Age Range" emoji="📊">
                <Val>{customerData.partnerPreferences.ageRange}</Val>
              </Field>
              <Field label="Preferred Height Range" emoji="📏">
                <Val>{customerData.partnerPreferences.heightRange}</Val>
              </Field>
            </div>
            <div className="space-y-4">
              <Field label="Marital Status" emoji="💍">
                <Val>{customerData.partnerPreferences.maritalStatus}</Val>
              </Field>
              <Field label="Religion" emoji="🕉️">
                <Val>{customerData.partnerPreferences.religion}</Val>
              </Field>
            </div>
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-red-200">
                <Field label="Caste" emoji="👥">
                  <Val>{customerData.partnerPreferences.caste}</Val>
                </Field>
                <Field label="Education" emoji="🎓">
                  <Val>{customerData.partnerPreferences.education}</Val>
                </Field>
                <Field label="Occupation" emoji="💼">
                  <Val>{customerData.partnerPreferences.occupation}</Val>
                </Field>
                <Field label="Annual Income" emoji="💰">
                  <Val>{customerData.partnerPreferences.annualIncome}</Val>
                </Field>
              </div>
              <div className="pt-4 border-t border-red-200">
                <Field label="Preferred Location" emoji="🌍">
                  <Val>{customerData.partnerPreferences.location}</Val>
                </Field>
              </div>
            </div>
          </div>
        );

      case 'hobbies':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Field label="Hobbies" emoji="🎯">
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {customerData.hobbiesInterests.hobbies.map((hobby, i) => (
                    <span key={i} className="inline-flex items-center bg-gradient-to-r from-red-50 to-golden-50 text-red-700 text-xs px-3 py-1.5 rounded-full border border-red-200 hover:shadow-md transform hover:scale-105 transition-all duration-300">
                      <span className="mr-1">
                        {hobby === 'Reading' && '📚'}
                        {hobby === 'Cooking' && '🍳'}
                        {hobby === 'Travel' && '✈️'}
                        {hobby === 'Music' && '🎵'}
                        {hobby === 'Yoga' && '🧘'}
                      </span>
                      {hobby}
                    </span>
                  ))}
                </div>
              </Field>
            </div>
            <div className="space-y-4">
              <Field label="Interests" emoji="💫">
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {customerData.hobbiesInterests.interests.map((interest, i) => (
                    <span key={i} className="inline-flex items-center bg-gradient-to-r from-golden-50 to-yellow-50 text-golden-700 text-xs px-3 py-1.5 rounded-full border border-golden-200 hover:shadow-md transform hover:scale-105 transition-all duration-300">
                      <span className="mr-1">
                        {interest === 'Technology' && '💻'}
                        {interest === 'Photography' && '📸'}
                        {interest === 'Food' && '🍜'}
                        {interest === 'Fitness' && '💪'}
                      </span>
                      {interest}
                    </span>
                  ))}
                </div>
              </Field>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(customerData.servicesInterested).map(([service, interested]) => (
              <div key={service} className={`group p-4 rounded-lg border-2 transform hover:scale-105 transition-all duration-300 ${
                interested 
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 hover:shadow-lg hover:border-green-400' 
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:shadow-md hover:border-gray-300'
              }`}>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-800 capitalize flex items-center gap-2">
                    <span>
                      {service === 'photography' && '📸'}
                      {service === 'catering' && '🍽️'}
                      {service === 'weddingHalls' && '🏰'}
                      {service === 'decorations' && '🎨'}
                      {service === 'entertainment' && '🎭'}
                      {service === 'invitation' && '💌'}
                      {service === 'styling' && '💇'}
                    </span>
                    {service.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  {interested ? (
                    <span className="text-green-600 group-hover:scale-110 transition-transform duration-300">✅</span>
                  ) : (
                    <span className="text-gray-400 group-hover:scale-110 transition-transform duration-300">❌</span>
                  )}
                </div>
                <p className={`text-xs mt-2 font-medium ${
                  interested ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {interested ? '✓ Interested' : '✗ Not Interested'}
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-golden-50">
      {/* EDIT MODAL */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden transform animate-fadeIn">
            <div className="bg-gradient-to-r from-red-600 to-golden-600 px-6 py-4 flex items-center justify-between">
              <h2 className="text-white text-lg font-bold flex items-center gap-2">
                <span>✏️</span>
                Edit Profile
              </h2>
              <button onClick={() => setShowEditModal(false)} className="text-white/80 hover:text-white transition-all hover:scale-110">
                <span className="text-xl">❌</span>
              </button>
            </div>

            <div className="px-6 py-5 space-y-4 max-h-[60vh] overflow-y-auto">
              {[
                { name: 'fullName', label: 'Full Name', emoji: '✨' },
                { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', emoji: '🎂' },
                { name: 'gender', label: 'Gender', emoji: '⚥' },
                { name: 'religion', label: 'Religion', emoji: '🕉️' },
                { name: 'caste', label: 'Caste', emoji: '👥' },
                { name: 'mobile', label: 'Mobile Number', emoji: '📱' },
                { name: 'email', label: 'Email ID', emoji: '✉️' },
                { name: 'address', label: 'Address', emoji: '🏠' },
                { name: 'cityDistrict', label: 'City / District', emoji: '🏙️' },
                { name: 'state', label: 'State', emoji: '🗺️' },
                { name: 'pinCode', label: 'PIN Code', emoji: '📍' },
              ].map((field) => (
                <div key={field.name} className="space-y-1 group">
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1">
                    <span>{field.emoji}</span>
                    {field.label}
                  </label>
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={editForm[field.name]}
                    onChange={handleEditChange}
                    className="w-full border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none transition-all group-hover:border-red-300"
                  />
                </div>
              ))}
            </div>

            <div className="px-6 py-4 bg-gradient-to-r from-red-50 to-golden-50 border-t border-gray-200 flex justify-end gap-3">
              <button 
                onClick={() => setShowEditModal(false)} 
                className="px-5 py-2 rounded-lg border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all transform hover:scale-105"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave} 
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-600 to-golden-600 text-white text-sm font-bold hover:from-red-700 hover:to-golden-700 transition-all transform hover:scale-105 shadow-lg"
              >
                💾 Save Changes
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
            <li><a href="/" className="text-red-600 hover:text-red-800 hover:underline flex items-center gap-1">🏠 Home</a></li>
            <li className="text-golden-600">›</li>
            <li className="text-gray-600 font-medium flex items-center gap-1">👤 Customer Profile</li>
          </ol>
        </nav>

        {/* Main Profile Card */}
        <div className="bg-white rounded-lg md:rounded-xl shadow-2xl border border-red-200 overflow-hidden mb-4 md:mb-8 transform hover:shadow-3xl transition-all duration-500">
          {/* Profile Header */}
          <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-golden-600 p-4 md:p-6">
            {/* Edit Profile button */}
            <div className="flex justify-end mb-3">
              <button
                onClick={() => setShowEditModal(true)}
                className="bg-white text-red-700 hover:bg-gradient-to-r hover:from-golden-400 hover:to-yellow-400 hover:text-red-800 px-4 py-2 rounded-md text-xs md:text-sm font-bold flex items-center gap-1.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                <span className="group-hover:rotate-12 transition-transform duration-300">✏️</span>
                Edit Profile
              </button>
            </div>

            {/* Profile Photo + Info */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-red-100 to-golden-100 flex-shrink-0 transform hover:scale-105 transition-all duration-300">
                {customerData.profilePhoto ? (
                  <img src={customerData.profilePhoto} alt={customerData.personalDetails.fullName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-200 to-golden-200">
                    <span className="text-4xl md:text-5xl">👤</span>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h1 className="text-lg md:text-3xl font-bold text-white flex items-center gap-2">
                  {customerData.personalDetails.fullName}
                  <span className="text-2xl">✨</span>
                </h1>

                <span className="inline-flex items-center gap-1.5 mt-1.5 mb-2 bg-gradient-to-r from-golden-400 to-yellow-400 text-red-800 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
                  <span>🆔</span>
                  Customer ID: {customerData.id}
                </span>

                <div className="text-white/90 text-sm md:text-base space-y-1">
                  <div className="flex items-center group hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-1.5">📍</span>
                    <span>{customerData.contactInfo.currentLocation}</span>
                  </div>
                  <div className="flex items-center group hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-1.5">💼</span>
                    <span>{customerData.educationCareer.occupation} at {customerData.educationCareer.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <button className="bg-white text-red-700 hover:bg-gradient-to-r hover:from-golden-400 hover:to-yellow-400 hover:text-red-800 px-4 py-2 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                    <span>📞</span>
                    {customerData.contactInfo.mobile}
                  </button>
                  <button className="bg-white text-red-700 hover:bg-gradient-to-r hover:from-golden-400 hover:to-yellow-400 hover:text-red-800 px-4 py-2 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                    <span>✉️</span>
                    {customerData.contactInfo.email}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="p-3 md:p-6 bg-gradient-to-r from-red-50 via-white to-golden-50 border-b border-red-200">
            <div className="bg-white p-4 rounded-lg shadow-lg border border-golden-200 transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-sm md:text-base font-bold text-red-700 mb-3 flex items-center gap-2">
                <span className="text-lg">📬</span>
                Contact Information
                <span className="text-golden-500">✨</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300">
                  <span className="text-red-500">📱</span>
                  <span className="text-sm font-medium text-gray-800">{customerData.contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300">
                  <span className="text-red-500">✉️</span>
                  <span className="text-sm font-medium text-gray-800">{customerData.contactInfo.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Navigation + Content */}
          <div className="border-t border-red-200">
            {/* Mobile tabs */}
            <div className="md:hidden overflow-x-auto">
              <div className="flex space-x-1 px-3 py-2 border-b border-red-200 bg-gradient-to-r from-red-50 to-golden-50">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-md text-xs font-medium transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-red-600 to-golden-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-red-100 hover:to-golden-100 border border-red-200'
                    }`}
                  >
                    <span className="mr-1">{section.emoji}</span>
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop tabs */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 border-b border-red-200">
              {sections.slice(0, 4).map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`p-4 text-sm font-medium transition-all duration-300 border-r border-red-200 last:border-r-0 transform hover:scale-105 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-red-600 to-golden-600 text-white shadow-lg'
                      : 'bg-gradient-to-r from-red-50 to-golden-50 text-gray-700 hover:from-red-100 hover:to-golden-100'
                  }`}
                >
                  <span className="mr-2 text-lg">{section.emoji}</span>
                  {section.title}
                </button>
              ))}
              {sections.slice(4, 7).map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`p-4 text-sm font-medium transition-all duration-300 border-r border-red-200 last:border-r-0 transform hover:scale-105 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-red-600 to-golden-600 text-white shadow-lg'
                      : 'bg-gradient-to-r from-red-50 to-golden-50 text-gray-700 hover:from-red-100 hover:to-golden-100'
                  }`}
                >
                  <span className="mr-2 text-lg">{section.emoji}</span>
                  {section.title}
                </button>
              ))}
            </div>

            {/* Active section content */}
            <div className="p-4 md:p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-base md:text-lg font-bold text-red-800 flex items-center gap-2">
                  <span className="text-2xl">{sections.find((s) => s.id === activeSection)?.emoji}</span>
                  {sections.find((s) => s.id === activeSection)?.title}
                </h3>
                <div className="ml-2 w-8 h-1 bg-gradient-to-r from-red-600 to-golden-500 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-gradient-to-br from-red-50 via-white to-golden-50 p-4 md:p-6 rounded-lg border border-red-200 shadow-inner">
                {renderSectionContent()}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 md:p-6 border-t border-red-200 bg-gradient-to-r from-red-50 via-white to-golden-50">
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 group">
                <span className="group-hover:rotate-12 transition-transform">🔍</span>
                Find Matches
              </button>
              <button className="flex-1 bg-gradient-to-r from-golden-500 to-yellow-500 text-red-900 py-3 px-4 rounded-lg font-bold hover:from-golden-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 group">
                <span className="group-hover:rotate-12 transition-transform">🛍️</span>
                Browse Vendors
              </button>
              <button className="flex-1 bg-white border-2 border-red-600 text-red-700 py-3 px-4 rounded-lg font-bold hover:bg-gradient-to-r hover:from-red-50 hover:to-golden-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 group">
                <span className="group-hover:rotate-12 transition-transform">📅</span>
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