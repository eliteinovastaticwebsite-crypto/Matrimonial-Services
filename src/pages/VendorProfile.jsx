import React, { useState } from 'react';

// ─── placeholder image paths (keep your own imports in real app) ───
const vendorLogo = '';
const companyLogo = ''; // Your company logo
const sampleWork1 = '';
const sampleWork2 = '';
const sampleWork3 = '';
const sampleWork4 = '';

const VendorProfile = () => {
  const [activeSection, setActiveSection] = useState('basic');
  const [showFullDetails, setShowFullDetails] = useState(false);

  // ── vendor data ──
  const vendorData = {
    id: 'VEN-2024-00123',
    basicDetails: {
      logo: vendorLogo,
      businessName: 'Capture Moments Wedding Photography',
      ownerName: 'Rajesh Kumar',
      designation: 'Lead Photographer & Owner',
      typeOfService: [
        'Wedding Photography',
        'Candid Photography',
        'Videography',
        'Pre-Wedding Shoot',
        'Drone Coverage',
      ],
      yearsOfExperience: '8 Years',
      businessType: 'Proprietorship',
    },
    contactInfo: {
      mobile: '+91 98765 43210',
      alternateMobile: '+91 87654 32109',
      email: 'capturemoments@example.com',
      officeAddress: '123 Wedding Street, Photography Nagar',
      cityDistrict: 'Chennai',
      state: 'Tamil Nadu',
      pinCode: '600001',
      currentLocation: 'Chennai, Tamil Nadu',
      website: 'www.capturemoments.com',
    },
    businessLegal: {
      gstNumber: '27ABCDE1234F1Z5',
      panNumber: 'ABCDE1234F',
      yearsOfExperience: '8 Years',
    },
    equipmentTeam: {
      cameraModels: ['Canon EOS R5', 'Sony A7III', 'Nikon D850'],
      videoEquipment: ['DJI Ronin-S', 'Sony PXW-FS7', 'DJI Mavic 3 Pro'],
      teamMembers: '8 Members',
      backupEquipment: 'Yes',
    },
    serviceCoverage: {
      preferredLocations: ['Local', 'Within State', 'Outstation'],
      travelCharges: 'Yes (Negotiable)',
    },
    packagesPricing: {
      basicWeddingPackage: '₹50,000',
      fullWeddingPackage: '₹1,20,000',
      candidPhotography: '₹25,000',
      videography: '₹75,000',
      albumCharges: '₹15,000 (Separate)',
    },
    deliveryTimeline: {
      photoDelivery: '15 Days',
      videoDelivery: '30 Days',
      albumDelivery: '45 Days',
    },
    portfolio: {
      website: 'www.capturemoments.com/portfolio',
      instagram: '@capturemoments_weddings',
      facebook: '/CaptureMomentsWeddings',
      driveLink: 'drive.google.com/sample-work',
    },
    bankDetails: {
      accountHolder: 'Rajesh Kumar',
      bankName: 'State Bank of India',
      accountNumber: '123456789012',
      ifscCode: 'SBIN0001234',
      upiId: 'capturemoments@upi',
    },
    declaration: {
      signature: 'Rajesh Kumar',
      date: '2024-01-15',
      place: 'Chennai',
    },
    workPhotos: [sampleWork1, sampleWork2, sampleWork3, sampleWork4],
  };

  const sections = [
    { id: 'basic', title: 'Basic Details', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', emoji: '👤' },
    { id: 'contact', title: 'Contact Info', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', emoji: '📞' },
    { id: 'legal', title: 'Legal Details', icon: 'M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z', emoji: '📋' },
    { id: 'equipment', title: 'Equipment', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', emoji: '📷' },
    { id: 'coverage', title: 'Coverage', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z', emoji: '🗺️' },
    { id: 'pricing', title: 'Pricing', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', emoji: '💰' },
    { id: 'delivery', title: 'Timeline', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', emoji: '⏰' },
    { id: 'portfolio', title: 'Portfolio', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', emoji: '🎨' },
    { id: 'bank', title: 'Bank Info', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', emoji: '🏦' },
    { id: 'declaration', title: 'Declaration', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', emoji: '✍️' },
  ];

  // Function to go to next section
  const goToNextSection = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
    }
  };

  // Function to go to previous section
  const goToPreviousSection = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id);
    }
  };

  // ── shared label / value pair ──
  const Field = ({ label, children }) => (
    <div className="space-y-0.5 group">
      <h4 className="text-[10px] md:text-base font-bold text-red-700 uppercase tracking-wide group-hover:text-amber-600 transition-colors duration-300">{label}</h4>
      <div className="transition-all duration-300 group-hover:shadow-lg group-hover:border-amber-300 rounded-lg">
        {children}
      </div>
    </div>
  );
  
  const Val = ({ children }) => (
    <p className="text-xs md:text-lg font-semibold text-gray-800 group-hover:text-red-700 transition-colors duration-300">{children}</p>
  );

  // ── section renderers ──
  const renderSectionContent = (sectionId = activeSection) => {
    switch (sectionId) {
      case 'basic':
  return (
    <div className="space-y-6">
      {/* Row 1: Business + Owner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="🏢 Vendor / Studio Name">
          <Val>{vendorData.basicDetails.businessName}</Val>
        </Field>
        <Field label="👨‍💼 Owner / Photographer Name">
          <Val>{vendorData.basicDetails.ownerName}</Val>
        </Field>
      </div>

      {/* Row 3: Business Type + Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="🏛️ Business Type">
          <Val>{vendorData.basicDetails.businessType}</Val>
        </Field>
        <Field label="📅 Experience">
          <div className="flex items-center gap-2">
            <span className="text-3xl md:text-5xl font-bold text-red-600 group-hover:text-amber-600 transition-colors duration-300">
              {vendorData.basicDetails.yearsOfExperience.split(' ')[0]}
            </span>
            <span className="text-sm md:text-xl font-semibold text-amber-600 group-hover:text-red-600 transition-colors duration-300">Years</span>
          </div>
        </Field>
      </div>

      {/* Row 2: Type of Service */}
      <Field label="✨ Type of Service">
        <div className="flex flex-wrap gap-2 mt-2">
          {vendorData.basicDetails.typeOfService.map((service, i) => (
            <span
              key={i}
              className="inline-flex items-center bg-gradient-to-r from-red-50 to-white text-red-700 text-xs md:text-base font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full border-2 border-red-200 shadow-sm hover:shadow-xl hover:scale-105 hover:border-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-white hover:text-amber-700 transition-all duration-300 cursor-default"
            >
              <svg
                className="w-3 h-3 md:w-4 md:h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {service}
            </span>
          ))}
        </div>
      </Field>
    </div>
  );


      case 'contact':
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              <Field label="📱 Mobile Number">
                <div className="flex items-center gap-2">
                  <Val>{vendorData.contactInfo.mobile}</Val>
                  <a href={`tel:${vendorData.contactInfo.mobile.replace(/\s/g, '')}`} className="text-amber-500 hover:text-red-600 transition-colors duration-300 hover:scale-110 inline-block">
                    <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </Field>
              <Field label="📞 Alternate Mobile">
                <Val>{vendorData.contactInfo.alternateMobile}</Val>
              </Field>

              <Field label="✉️ Email ID">
                <a href={`mailto:${vendorData.contactInfo.email}`} className="text-xs md:text-lg font-semibold text-red-600 hover:text-amber-600 hover:underline break-all transition-all duration-300 hover:scale-105 inline-block">
                  {vendorData.contactInfo.email}
                </a>
              </Field>
              <Field label="🏢 Office Address">
                <Val>{vendorData.contactInfo.officeAddress}</Val>
              </Field>

              <Field label="🏙️ City / District">
                <Val>{vendorData.contactInfo.cityDistrict}</Val>
              </Field>
              <Field label="🗺️ State">
                <Val>{vendorData.contactInfo.state}</Val>
              </Field>

              <Field label="📮 PIN Code">
                <Val>{vendorData.contactInfo.pinCode}</Val>
              </Field>
              <Field label="📍 Current Location">
                <p className="text-xs md:text-lg font-semibold text-gray-800 flex items-center gap-1.5 md:gap-2 group-hover:text-red-600 transition-colors duration-300">
                  <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-amber-500 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {vendorData.contactInfo.currentLocation}
                </p>
              </Field>

              <Field label="🌐 Website">
                <a href={`https://${vendorData.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-lg font-semibold text-red-600 hover:text-amber-600 hover:underline break-all transition-all duration-300 hover:scale-105 inline-block">
                  {vendorData.contactInfo.website}
                </a>
              </Field>
            </div>
          </div>
        );

      case 'legal':
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Field label="🏛️ Business Type">
                <Val>Proprietorship</Val>
              </Field>
              <Field label="📄 GST Number">
                <div className="bg-gradient-to-r from-amber-50 to-white px-2 md:px-4 py-1.5 md:py-3 rounded border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <Val>{vendorData.businessLegal.gstNumber}</Val>
                </div>
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Field label="🆔 PAN Number">
                <div className="bg-gradient-to-r from-red-50 to-white px-2 md:px-4 py-1.5 md:py-3 rounded border-2 border-red-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <Val>{vendorData.businessLegal.panNumber}</Val>
                </div>
              </Field>
              <Field label="📅 Years of Experience">
                <Val>{vendorData.businessLegal.yearsOfExperience}</Val>
              </Field>
            </div>
          </div>
        );

      case 'equipment':
        return (
          <div className="space-y-4 md:space-y-6">
            <Field label="📸 Camera Models Used">
              <div className="flex flex-wrap gap-1.5 md:gap-3 mt-1 md:mt-2">
                {vendorData.equipmentTeam.cameraModels.map((c, i) => (
                  <span key={i} className="inline-flex items-center bg-gradient-to-r from-amber-50 to-white text-amber-800 text-[10px] md:text-base font-semibold px-2 md:px-4 py-1 md:py-2 rounded-full border-2 border-amber-300 shadow-sm hover:shadow-xl hover:scale-105 hover:border-red-400 hover:bg-gradient-to-r hover:from-red-50 hover:to-white hover:text-red-700 transition-all duration-300 cursor-default">
                    📷 {c}
                  </span>
                ))}
              </div>
            </Field>
            <Field label="🎥 Video Equipment / Drone">
              <div className="flex flex-wrap gap-1.5 md:gap-3 mt-1 md:mt-2">
                {vendorData.equipmentTeam.videoEquipment.map((e, i) => (
                  <span key={i} className="inline-flex items-center bg-gradient-to-r from-red-50 to-white text-red-800 text-[10px] md:text-base font-semibold px-2 md:px-4 py-1 md:py-2 rounded-full border-2 border-red-300 shadow-sm hover:shadow-xl hover:scale-105 hover:border-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-white hover:text-amber-700 transition-all duration-300 cursor-default">
                    🎬 {e}
                  </span>
                ))}
              </div>
            </Field>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
              <Field label="👥 Team Members">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <span className="text-xl md:text-5xl font-bold text-red-600 group-hover:text-amber-600 transition-colors duration-300">{vendorData.equipmentTeam.teamMembers.split(' ')[0]}</span>
                  <span className="text-[10px] md:text-xl font-semibold text-amber-600 group-hover:text-red-600 transition-colors duration-300">Members</span>
                </div>
              </Field>
              <Field label="🔄 Backup Equipment">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <span className="text-lg md:text-3xl text-green-500 group-hover:scale-110 transition-transform duration-300">✅</span>
                  <Val>{vendorData.equipmentTeam.backupEquipment}</Val>
                </div>
              </Field>
            </div>
          </div>
        );

      case 'coverage':
        return (
          <div className="space-y-4 md:space-y-6">
            <Field label="🗺️ Preferred Wedding Locations">
              <div className="flex flex-wrap gap-1.5 md:gap-3 mt-1 md:mt-2">
                {vendorData.serviceCoverage.preferredLocations.map((loc, i) => (
                  <span key={i} className="inline-flex items-center bg-gradient-to-r from-red-50 to-white text-red-700 text-[10px] md:text-base font-semibold px-2 md:px-4 py-1 md:py-2 rounded-full border-2 border-red-200 shadow-sm hover:shadow-xl hover:scale-105 hover:border-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-white hover:text-amber-700 transition-all duration-300 cursor-default">
                    <svg className="w-2.5 h-2.5 md:w-4 md:h-4 mr-1 md:mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {loc}
                  </span>
                ))}
              </div>
            </Field>
            <Field label="🚗 Travel Charges Applicable">
              <Val>{vendorData.serviceCoverage.travelCharges}</Val>
            </Field>
          </div>
        );

      case 'pricing':
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="relative bg-gradient-to-br from-red-500 to-red-600 p-4 md:p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl hover:from-amber-500 hover:to-amber-600 transition-all duration-300 group">
                <div className="absolute top-2 right-2 md:top-3 md:right-3 text-xl md:text-4xl group-hover:rotate-12 transition-transform duration-300">💎</div>
                <h4 className="text-[10px] md:text-base font-bold text-amber-200 mb-1 md:mb-2 uppercase tracking-wide group-hover:text-red-200">Basic Wedding Package</h4>
                <p className="text-2xl md:text-5xl font-bold text-white">{vendorData.packagesPricing.basicWeddingPackage}</p>
                <p className="text-[10px] md:text-base text-amber-100 mt-0.5 md:mt-1">Perfect for intimate weddings</p>
              </div>
              <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 p-4 md:p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl hover:from-red-500 hover:to-red-600 transition-all duration-300 group">
                <div className="absolute top-2 right-2 md:top-3 md:right-3 text-xl md:text-4xl group-hover:rotate-12 transition-transform duration-300">👑</div>
                <h4 className="text-[10px] md:text-base font-bold text-red-200 mb-1 md:mb-2 uppercase tracking-wide group-hover:text-amber-200">Full Wedding Package</h4>
                <p className="text-2xl md:text-5xl font-bold text-white">{vendorData.packagesPricing.fullWeddingPackage}</p>
                <p className="text-[10px] md:text-base text-red-100 mt-0.5 md:mt-1">Complete coverage with all services</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { label: 'Candid Photography', val: vendorData.packagesPricing.candidPhotography, emoji: '📸' },
                { label: 'Videography / Cinematic', val: vendorData.packagesPricing.videography, emoji: '🎬' },
                { label: 'Album Charges', val: vendorData.packagesPricing.albumCharges, emoji: '📖' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 md:p-5 rounded-xl border-2 border-red-200 hover:border-amber-400 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                    <span className="text-lg md:text-3xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                    <h4 className="text-[10px] md:text-base font-bold text-red-700 uppercase tracking-wide group-hover:text-amber-600">{item.label}</h4>
                  </div>
                  <p className="text-base md:text-2xl font-bold text-amber-600 group-hover:text-red-600 transition-colors duration-300">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'delivery':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { label: 'Photo Delivery Time', val: vendorData.deliveryTimeline.photoDelivery, emoji: '📸', color: 'from-red-500 to-red-600', hoverColor: 'from-amber-500 to-amber-600' },
              { label: 'Video Delivery Time', val: vendorData.deliveryTimeline.videoDelivery, emoji: '🎥', color: 'from-amber-500 to-amber-600', hoverColor: 'from-red-500 to-red-600' },
              { label: 'Album Delivery Time', val: vendorData.deliveryTimeline.albumDelivery, emoji: '📚', color: 'from-red-600 to-amber-600', hoverColor: 'from-amber-600 to-red-600' },
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.color} p-4 md:p-6 rounded-xl shadow-lg text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group hover:bg-gradient-to-br ${item.hoverColor}`}>
                <div className="text-2xl md:text-5xl mb-2 md:mb-3 group-hover:rotate-12 transition-transform duration-300">{item.emoji}</div>
                <h4 className="text-[10px] md:text-base font-bold text-amber-200 mb-2 md:mb-3 uppercase tracking-wide group-hover:text-red-200">{item.label}</h4>
                <p className="text-3xl md:text-6xl font-bold text-white mb-0.5 md:mb-1">{item.val.split(' ')[0]}</p>
                <p className="text-xs md:text-lg text-amber-100 font-semibold group-hover:text-red-100">Days</p>
              </div>
            ))}
          </div>
        );

      case 'portfolio':
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Field label="🌐 Website / Portfolio Link">
                <a href={`https://${vendorData.portfolio.website}`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-lg font-semibold text-red-600 hover:text-amber-600 hover:underline flex items-center gap-1.5 md:gap-2 break-all transition-all duration-300 hover:scale-105">
                  {vendorData.portfolio.website}
                  <svg className="w-3 h-3 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Field>
              <Field label="📱 Instagram / Facebook Page">
                <div className="space-y-1">
                  <p className="text-xs md:text-lg font-semibold text-gray-800 flex items-center gap-1.5 md:gap-2 group-hover:text-red-600 transition-colors duration-300">
                    <span className="text-base md:text-xl text-amber-500 group-hover:text-red-600 transition-colors duration-300">📷</span> {vendorData.portfolio.instagram}
                  </p>
                  <p className="text-xs md:text-lg font-semibold text-gray-800 flex items-center gap-1.5 md:gap-2 group-hover:text-red-600 transition-colors duration-300">
                    <span className="text-base md:text-xl text-red-500 group-hover:text-amber-600 transition-colors duration-300">👍</span> {vendorData.portfolio.facebook}
                  </p>
                </div>
              </Field>
            </div>
            <Field label="☁️ Google Drive / Sample Work Link">
              <a href={`https://${vendorData.portfolio.driveLink}`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-lg font-semibold text-red-600 hover:text-amber-600 hover:underline flex items-center gap-1.5 md:gap-2 break-all transition-all duration-300 hover:scale-105">
                {vendorData.portfolio.driveLink}
                <svg className="w-3 h-3 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </Field>
            <div>
              <h4 className="text-[10px] md:text-base font-bold text-red-700 mb-2 md:mb-3 uppercase tracking-wide flex items-center gap-1.5 md:gap-2 hover:text-amber-600 transition-colors duration-300">
                <span className="text-base md:text-2xl">🎨</span> Sample Work Photos
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                {vendorData.workPhotos.map((photo, i) => (
                  <div key={i} className="group relative rounded-lg md:rounded-xl overflow-hidden border-2 border-red-200 bg-gradient-to-br from-red-50 to-white h-24 md:h-40 flex items-center justify-center hover:border-amber-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    {photo ? (
                      <img src={photo} alt={`Sample Work ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="text-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 md:w-10 md:h-10 text-amber-400 mx-auto mb-1 md:mb-2 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-[10px] md:text-sm text-red-500 font-semibold group-hover:text-amber-600 transition-colors duration-300">Sample {i + 1}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'bank':
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Field label="👤 Account Holder Name">
                <Val>{vendorData.bankDetails.accountHolder}</Val>
              </Field>
              <Field label="🏦 Bank Name">
                <Val>{vendorData.bankDetails.bankName}</Val>
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Field label="💳 Account Number">
                <div className="bg-gradient-to-r from-amber-50 to-white px-2 md:px-4 py-1.5 md:py-3 rounded border-2 border-amber-200 hover:border-red-400 hover:shadow-lg transition-all duration-300">
                  <Val>{vendorData.bankDetails.accountNumber}</Val>
                </div>
              </Field>
              <Field label="🔢 IFSC Code">
                <div className="bg-gradient-to-r from-red-50 to-white px-2 md:px-4 py-1.5 md:py-3 rounded border-2 border-red-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <Val>{vendorData.bankDetails.ifscCode}</Val>
                </div>
              </Field>
            </div>
            <Field label="📱 UPI ID (Optional)">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-3 md:px-4 py-2 md:py-3 rounded-lg text-white hover:from-red-500 hover:to-red-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Val className="text-white">{vendorData.bankDetails.upiId}</Val>
              </div>
            </Field>
          </div>
        );

      case 'declaration':
        return (
          <div className="bg-gradient-to-br from-red-50 via-white to-amber-50 p-4 md:p-6 rounded-xl border-2 border-amber-300 shadow-inner hover:border-red-400 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="text-xl md:text-4xl hover:scale-110 transition-transform duration-300">✍️</span>
              <p className="text-xs md:text-lg text-gray-700 leading-relaxed font-medium hover:text-red-700 transition-colors duration-300">
                I hereby declare that the above information is true and correct. I agree to provide photography services professionally for marriage events as per agreed terms and conditions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6 pt-4 md:pt-6 border-t-2 border-amber-300 hover:border-red-400 transition-colors duration-300">
              <Field label="✍️ Vendor Signature">
                <p className="text-base md:text-2xl font-semibold text-gray-800 italic hover:text-red-600 transition-colors duration-300" style={{ fontFamily: 'Georgia, serif' }}>{vendorData.declaration.signature}</p>
              </Field>
              <Field label="📅 Date">
                <Val>{vendorData.declaration.date}</Val>
              </Field>
              <Field label="📍 Place">
                <Val>{vendorData.declaration.place}</Val>
              </Field>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Render all sections for full details view
  const renderAllSections = () => {
    return sections.map((section, index) => (
      <div key={section.id} className={`${index !== sections.length - 1 ? 'mb-6 md:mb-10' : 'mb-4 md:mb-8'}`}>
        <div className="flex items-center mb-3 md:mb-5">
          <span className="text-xl md:text-3xl mr-2 md:md-3 hover:scale-110 transition-transform duration-300">{section.emoji}</span>
          <h3 className="text-base md:text-2xl font-bold text-red-700 hover:text-amber-600 transition-colors duration-300">{section.title}</h3>
          <div className="ml-2 md:ml-3 flex-1 h-0.5 md:h-1 bg-gradient-to-r from-red-400 via-amber-400 to-red-400 rounded-full hover:from-amber-400 hover:via-red-400 hover:to-amber-400 transition-all duration-300"></div>
        </div>
        <div className="bg-gradient-to-br from-white via-red-50/30 to-white p-4 md:p-8 rounded-xl border-2 border-red-200 shadow-md hover:shadow-2xl hover:border-amber-300 transition-all duration-300">
          {renderSectionContent(section.id)}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-amber-50">
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-8 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="mb-4 md:mb-6">
          <ol className="flex items-center space-x-1.5 md:space-x-2 text-xs md:text-base">
            <li><a href="/" className="text-red-600 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105 inline-block">🏠 Home</a></li>
            <li className="text-amber-400">/</li>
            <li><a href="/photography" className="text-red-600 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105 inline-block">📸 Photography</a></li>
            <li className="text-amber-400">/</li>
            <li className="text-gray-700 font-semibold">Vendor Profile</li>
          </ol>
        </nav>

        {/* Main Profile Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl border-2 border-red-300 overflow-hidden mb-4 md:mb-8 hover:shadow-3xl hover:border-amber-400 transition-all duration-500">
          {/* Profile Header */}
          <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-amber-500 p-4 md:p-5 hover:from-amber-500 hover:via-red-500 hover:to-red-600 transition-all duration-500">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 md:w-24 bg-amber-300/20 rounded-full -mr-12 md:-mr-14 -mt-12 md:-mt-14 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-14 md:w-20 bg-red-300/20 rounded-full -ml-8 md:-ml-10 -mb-8 md:-mb-10 animate-pulse"></div>
            
            {/* Mobile view - UNCHANGED */}
            <div className="md:hidden relative">
              {/* Row 1: Logo and Business Name (stacked) */}
              <div className="flex items-start gap-3 mb-2">
                <div className="w-14 h-14 rounded-xl border-2 border-amber-300 shadow-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-white flex-shrink-0 hover:scale-110 hover:border-red-400 transition-all duration-300">
                  {vendorData.basicDetails.logo ? (
                    <img src={vendorData.basicDetails.logo} alt={vendorData.basicDetails.businessName} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-white">
                      <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-sm font-bold text-white leading-tight flex items-center gap-1">
                    {vendorData.basicDetails.businessName}
                    <span className="text-sm hover:rotate-12 transition-transform duration-300">✨</span>
                  </h1>
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-red-800 px-2.5 py-0.5 mt-1 rounded-full text-[10px] font-bold shadow-lg hover:from-red-400 hover:to-amber-400 hover:text-amber-800 transition-all duration-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={2} />
                      <path d="M3 10h18" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                    ID: {vendorData.id}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-white mt-3">
                <div className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm flex-shrink-0">📍</span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-amber-200 font-semibold">Location</p>
                    <p className="text-xs font-bold truncate">{vendorData.contactInfo.currentLocation}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm flex-shrink-0">👨‍💼</span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-amber-200 font-semibold">Owner</p>
                    <p className="text-xs font-bold truncate">{vendorData.basicDetails.ownerName}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm flex-shrink-0">📞</span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-amber-200 font-semibold">Phone</p>
                    <a href={`tel:${vendorData.contactInfo.mobile.replace(/\s/g, '')}`} className="text-xs font-bold hover:text-amber-300 hover:underline truncate block">
                      {vendorData.contactInfo.mobile}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm flex-shrink-0">✉️</span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-amber-200 font-semibold">Email</p>
                    <a href={`mailto:${vendorData.contactInfo.email}`} className="text-xs font-bold hover:text-amber-300 hover:underline break-all block">
                      {vendorData.contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                <a href={`mailto:${vendorData.contactInfo.email}`} className="flex items-center gap-1 bg-white text-red-700 hover:bg-amber-100 hover:text-amber-700 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md hover:shadow-xl hover:scale-105 no-underline">
                  <span className="text-sm">✉️</span>
                  <span>Email</span>
                </a>
                <a href={`https://${vendorData.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-white text-red-700 hover:bg-amber-100 hover:text-amber-700 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md hover:shadow-xl hover:scale-105 no-underline">
                  <span className="text-sm">🌐</span>
                  <span>Web</span>
                </a>
                {!showFullDetails && (
                  <button onClick={() => setShowFullDetails(true)} className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-red-500 hover:to-red-600 px-2.5 py-1.5 rounded-lg font-bold transition-all shadow-md hover:shadow-xl hover:scale-105 text-xs whitespace-nowrap">
                    <span className="text-sm">👁️</span>
                    <span>View Full Details</span>
                  </button>
                )}
              </div>
            </div>

            {/* Desktop view */}
            <div className="hidden md:block relative">
              <div className="flex items-start gap-5">
                {/* Logo - Left side */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl border-3 border-amber-300 shadow-xl overflow-hidden bg-gradient-to-br from-amber-50 to-white hover:scale-110 hover:border-red-400 transition-all duration-300">
                    {vendorData.basicDetails.logo ? (
                      <img src={vendorData.basicDetails.logo} alt={vendorData.basicDetails.businessName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-white">
                        <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side content */}
                <div className="flex-1">
                  {/* Business Name */}
                  <h1 className="text-3xl font-bold text-white leading-tight flex items-center gap-2 mb-1.5">
                    {vendorData.basicDetails.businessName}
                    <span className="text-2xl hover:rotate-12 transition-transform duration-300">✨</span>
                  </h1>
                  
                  {/* Vendor ID */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-red-800 px-3 py-1 rounded-full text-base font-bold shadow-md hover:from-red-400 hover:to-amber-400 hover:text-amber-800 transition-all duration-300">
                      <span className="text-lg">📷</span>
                      Vendor ID: {vendorData.id}
                    </span>
                  </div>

                  {/* Contact Details - 2x2 Grid with ALL CAPS labels */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-white mb-3">
                    {/* LOCATION with emoji */}
                    <div>
                      <p className="text-xs text-amber-200 font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                        <span className="text-base">📍</span> LOCATION
                      </p>
                      <p className="text-lg font-bold flex items-center gap-1 hover:text-amber-300 transition-colors duration-300">
                        {vendorData.contactInfo.currentLocation}
                      </p>
                    </div>
                    {/* PHONE with emoji */}
                    <div>
                      <p className="text-xs text-amber-200 font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                        <span className="text-base">📞</span> PHONE
                      </p>
                      <a href={`tel:${vendorData.contactInfo.mobile.replace(/\s/g, '')}`} className="text-lg font-bold text-white hover:text-amber-300 hover:underline flex items-center gap-1 transition-colors duration-300">
                        {vendorData.contactInfo.mobile}
                      </a>
                    </div>
                    {/* OWNER with emoji */}
                    <div>
                      <p className="text-xs text-amber-200 font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                        <span className="text-base">👤</span> OWNER
                      </p>
                      <p className="text-lg font-bold flex items-center gap-1 hover:text-amber-300 transition-colors duration-300">
                        {vendorData.basicDetails.ownerName}
                      </p>
                    </div>
                    {/* EMAIL with emoji */}
                    <div>
                      <p className="text-xs text-amber-200 font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                        <span className="text-base">✉️</span> EMAIL
                      </p>
                      <a href={`mailto:${vendorData.contactInfo.email}`} className="text-lg font-bold text-white hover:text-amber-300 hover:underline break-all flex items-center gap-1 transition-colors duration-300">
                        {vendorData.contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons - Email and Web on left, View Full Details on right */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <a href={`mailto:${vendorData.contactInfo.email}`} className="flex items-center gap-1.5 bg-white text-red-700 hover:bg-amber-100 hover:text-amber-700 px-4 py-2 rounded-lg text-base font-bold transition-all shadow-md hover:shadow-xl hover:scale-105 no-underline">
                        <span className="text-lg">✉️</span>
                        <span>Email</span>
                      </a>
                      <a href={`https://${vendorData.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-white text-red-700 hover:bg-amber-100 hover:text-amber-700 px-4 py-2 rounded-lg text-base font-bold transition-all shadow-md hover:shadow-xl hover:scale-105 no-underline">
                        <span className="text-lg">🌐</span>
                        <span>Web</span>
                      </a>
                    </div>
                    
                    {/* View Full Details Button - Bottom Right Corner */}
                    {!showFullDetails && (
                      <button 
                        onClick={() => setShowFullDetails(true)} 
                        className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-red-500 hover:to-red-600 px-4 py-2 rounded-lg font-bold transition-all shadow-md hover:shadow-xl hover:scale-105 text-base whitespace-nowrap"
                      >
                        <span className="text-lg">👁️</span>
                        <span>View Full Details</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Navigation - Hide when showing full details */}
          {!showFullDetails && (
            <div className="border-t-2 border-red-200">
              <div className="overflow-x-auto">
                <div className="flex w-full min-w-max">
                  {sections.map((section) => (
                    <button key={section.id} onClick={() => setActiveSection(section.id)} className={`flex-1 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-4 border-r border-red-200 last:border-r-0 transition-all duration-300 font-semibold ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-red-500 to-amber-500 text-white shadow-lg'
                          : 'bg-white text-red-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-amber-50 hover:text-amber-700 hover:shadow-md'
                      }`}>
                      <span className="text-base md:text-2xl">{section.emoji}</span>
                      <span className="text-[10px] md:text-base whitespace-nowrap">{section.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active section content */}
              <div className="p-4 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <span className="text-2xl md:text-4xl mr-2 md:mr-3 hover:scale-110 transition-transform duration-300">{sections.find((s) => s.id === activeSection)?.emoji}</span>
                  <h3 className="text-base md:text-3xl font-bold text-red-700 hover:text-amber-600 transition-colors duration-300">
                    {sections.find((s) => s.id === activeSection)?.title}
                  </h3>
                  <div className="ml-2 md:ml-3 flex-1 h-0.5 md:h-1 bg-gradient-to-r from-red-400 via-amber-400 to-red-400 rounded-full hover:from-amber-400 hover:via-red-400 hover:to-amber-400 transition-all duration-300"></div>
                </div>
                <div className="bg-white p-4 md:p-8 rounded-xl border-2 border-red-200 shadow-md hover:shadow-2xl hover:border-amber-300 transition-all duration-300">
                  {renderSectionContent()}
                  
                  {/* Navigation Buttons */}
                  <div className="mt-5 md:mt-8 pt-4 md:pt-6 border-t-2 border-red-200 flex justify-between items-center">
                    <button onClick={goToPreviousSection} disabled={activeSection === sections[0].id} className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-lg font-bold transition-all duration-300 text-xs md:text-lg ${
                        activeSection === sections[0].id
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-red-700 hover:bg-amber-100 hover:text-amber-700 border-2 border-red-200 shadow-md hover:shadow-xl hover:scale-105'
                      }`}>
                      <span className="text-sm md:text-xl">⬅️</span>
                      <span className="hidden md:inline">Previous</span>
                      <span className="md:hidden">Prev</span>
                    </button>

                    <div className="text-[10px] md:text-base font-semibold text-red-700">
                      {sections.findIndex(s => s.id === activeSection) + 1} / {sections.length}
                    </div>

                    <button onClick={goToNextSection} disabled={activeSection === sections[sections.length - 1].id} className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-lg font-bold transition-all duration-300 text-xs md:text-lg ${
                        activeSection === sections[sections.length - 1].id
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-red-500 to-amber-500 text-white hover:from-amber-500 hover:to-red-500 shadow-md hover:shadow-xl hover:scale-105'
                      }`}>
                      <span>Next</span>
                      <span className="text-sm md:text-xl">➡️</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Sections Content - Show when in full details mode */}
          {showFullDetails && (
            <div className="p-4 md:p-10 border-t-2 border-red-200">
              {/* Header with Back Button */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-10">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-5xl hover:scale-110 transition-transform duration-300">📋</span>
                  <h2 className="text-xl md:text-4xl font-bold text-red-700 hover:text-amber-600 transition-colors duration-300">Complete Details</h2>
                </div>
                <button onClick={() => setShowFullDetails(false)} className="mt-3 md:mt-0 flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-red-500 hover:to-red-600 py-2 md:py-3 px-4 md:px-6 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 text-xs md:text-lg">
                  <span className="text-base md:text-2xl">⬅️</span>
                  <span>Back to Normal View</span>
                </button>
              </div>
              
              {/* All Sections */}
              <div className="space-y-6 md:space-y-10">
                {renderAllSections()}
                
                {/* Contact Information Cards */}
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center mb-4 md:mb-6">
                    <span className="text-2xl md:text-4xl mr-2 md:mr-3 hover:scale-110 transition-transform duration-300">📇</span>
                    <h3 className="text-base md:text-3xl font-bold text-red-700 hover:text-amber-600 transition-colors duration-300">Vendor Contact Details</h3>
                    <div className="ml-2 md:ml-3 flex-1 h-0.5 md:h-1 bg-gradient-to-r from-red-400 via-amber-400 to-red-400 rounded-full hover:from-amber-400 hover:via-red-400 hover:to-amber-400 transition-all duration-300"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Primary Address */}
                    <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-amber-300 shadow-lg hover:shadow-2xl hover:border-red-400 hover:scale-105 transition-all duration-300">
                      <h4 className="text-sm md:text-xl font-bold text-red-700 mb-3 md:mb-4 flex items-center gap-1.5 md:gap-2 hover:text-amber-600 transition-colors duration-300">
                        <span className="text-lg md:text-3xl">🏢</span>
                        Primary Vendor Address
                      </h4>
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-center gap-2 md:gap-3 group">
                          <span className="text-base md:text-2xl text-amber-500 group-hover:text-red-600 transition-colors duration-300">📞</span>
                          <span className="font-semibold text-gray-800 text-xs md:text-lg group-hover:text-red-600 transition-colors duration-300">{vendorData.contactInfo.mobile}</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 group">
                          <span className="text-base md:text-2xl text-red-500 group-hover:text-amber-600 transition-colors duration-300">✉️</span>
                          <span className="font-semibold text-gray-800 text-xs md:text-lg break-all group-hover:text-red-600 transition-colors duration-300">{vendorData.contactInfo.email}</span>
                        </div>
                        <div className="flex items-start gap-2 md:gap-3 group">
                          <span className="text-base md:text-2xl text-amber-500 group-hover:text-red-600 transition-colors duration-300 flex-shrink-0">📍</span>
                          <span className="font-semibold text-gray-800 text-xs md:text-lg group-hover:text-red-600 transition-colors duration-300">
                            {vendorData.contactInfo.officeAddress}, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state} - {vendorData.contactInfo.pinCode}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Office Address */}
                    <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-red-300 shadow-lg hover:shadow-2xl hover:border-amber-400 hover:scale-105 transition-all duration-300">
                      <h4 className="text-sm md:text-xl font-bold text-red-700 mb-3 md:mb-4 flex items-center gap-1.5 md:gap-2 hover:text-amber-600 transition-colors duration-300">
                        <span className="text-lg md:text-3xl">🏛️</span>
                        Office Address (Secondary)
                      </h4>
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-center gap-2 md:gap-3 group">
                          <span className="text-base md:text-2xl text-amber-500 group-hover:text-red-600 transition-colors duration-300">📞</span>
                          <span className="font-semibold text-gray-800 text-xs md:text-lg group-hover:text-red-600 transition-colors duration-300">{vendorData.contactInfo.alternateMobile}</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 group">
                          <span className="text-base md:text-2xl text-red-500 group-hover:text-amber-600 transition-colors duration-300">✉️</span>
                          <span className="font-semibold text-gray-800 text-xs md:text-lg break-all group-hover:text-red-600 transition-colors duration-300">{vendorData.contactInfo.email}</span>
                        </div>
                        <div className="flex items-start gap-2 md:gap-3 group">
                          <span className="text-base md:text-2xl text-amber-500 group-hover:text-red-600 transition-colors duration-300 flex-shrink-0">📍</span>
                          <span className="font-semibold text-gray-800 text-xs md:text-lg group-hover:text-red-600 transition-colors duration-300">
                            Secondary Office, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* For Enquiry - Our Address with Logo */}
                <div className="bg-gradient-to-r from-red-100 via-amber-100 to-red-100 p-4 md:p-8 rounded-xl border-2 border-amber-400 shadow-xl hover:shadow-2xl hover:border-red-500 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 hover:scale-110 hover:rotate-3 transition-all duration-300">
                      {companyLogo ? (
                        <img src={companyLogo} alt="Eliteinova" className="w-12 h-12 md:w-20 md:h-20 object-contain" />
                      ) : (
                        <span className="text-2xl md:text-5xl">💼</span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-base md:text-2xl font-bold text-red-800 mb-3 md:mb-4 flex items-center gap-1.5 md:gap-2 hover:text-amber-700 transition-colors duration-300">
                        <span className="text-lg md:text-3xl">📞</span>
                        For Enquiry - Eliteinova
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                        <div className="flex items-center gap-2 md:gap-3 group">
                          <span className="text-base md:text-2xl text-red-500 group-hover:text-amber-600 transition-colors duration-300">📱</span>
                          <span className="font-semibold text-gray-800 text-xs md:text-lg group-hover:text-red-600 transition-colors duration-300">+91 99999 88888</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 group">
                          <span className="text-base md:text-2xl text-amber-500 group-hover:text-red-600 transition-colors duration-300">✉️</span>
                          <span className="font-semibold text-gray-800 text-xs md:text-lg break-all group-hover:text-amber-600 transition-colors duration-300">support@eliteinova.com</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 group">
                          <span className="text-base md:text-2xl">🕒</span>
                          <span className="font-semibold text-gray-800 text-xs md:text-lg group-hover:text-red-600 transition-colors duration-300">Mon-Sat: 9AM-7PM</span>
                        </div>
                        <div className="flex items-start gap-2 md:gap-3 sm:col-span-2 group">
                          <span className="text-base md:text-2xl text-amber-500 group-hover:text-red-600 transition-colors duration-300 flex-shrink-0">📍</span>
                          <span className="font-semibold text-gray-800 text-xs md:text-lg group-hover:text-amber-600 transition-colors duration-300">123 Elite Plaza, Wedding Street, Chennai - 600001</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Contact Cards - Only show when not in full details */}
          {!showFullDetails && (
            <>
              <div className="p-4 md:p-8 bg-white border-t-2 border-red-200">
                <div className="flex items-center mb-4 md:mb-6">
                  <span className="text-lg md:text-3xl mr-2 md:mr-3 hover:scale-110 transition-transform duration-300">📇</span>
                  <h3 className="text-sm md:text-2xl font-bold text-red-700 hover:text-amber-600 transition-colors duration-300">Vendor Contact Details</h3>
                  <div className="ml-2 md:ml-3 flex-1 h-0.5 bg-gradient-to-r from-red-400 to-amber-400 rounded-full hover:from-amber-400 hover:to-red-400 transition-all duration-300"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Primary Address */}
                  <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-2 border-amber-300 hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <h4 className="text-sm md:text-xl font-bold text-red-700 mb-3 md:mb-4 flex items-center gap-1.5 md:gap-2 hover:text-amber-600 transition-colors duration-300">
                      <span className="text-base md:text-2xl">🏢</span>
                      Primary Vendor Address
                    </h4>
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 md:gap-3 group">
                        <span className="text-sm md:text-xl text-amber-500 group-hover:text-red-600 transition-colors duration-300">📞</span>
                        <span className="font-semibold text-gray-800 text-xs md:text-lg group-hover:text-red-600 transition-colors duration-300">{vendorData.contactInfo.mobile}</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 group">
                        <span className="text-sm md:text-xl text-red-500 group-hover:text-amber-600 transition-colors duration-300">✉️</span>
                        <span className="font-semibold text-gray-800 text-xs md:text-base break-all group-hover:text-red-600 transition-colors duration-300">{vendorData.contactInfo.email}</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 group">
                        <span className="text-sm md:text-xl text-amber-500 group-hover:text-red-600 transition-colors duration-300 flex-shrink-0">📍</span>
                        <span className="font-semibold text-gray-800 text-xs md:text-base group-hover:text-amber-600 transition-colors duration-300">
                          {vendorData.contactInfo.officeAddress}, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state} - {vendorData.contactInfo.pinCode}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-2 border-red-300 hover:border-amber-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <h4 className="text-sm md:text-xl font-bold text-red-700 mb-3 md:mb-4 flex items-center gap-1.5 md:gap-2 hover:text-amber-600 transition-colors duration-300">
                      <span className="text-base md:text-2xl">🏛️</span>
                      Office Address (Secondary)
                    </h4>
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 md:gap-3 group">
                        <span className="text-sm md:text-xl text-amber-500 group-hover:text-red-600 transition-colors duration-300">📞</span>
                        <span className="font-semibold text-gray-800 text-xs md:text-lg group-hover:text-red-600 transition-colors duration-300">{vendorData.contactInfo.alternateMobile}</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 group">
                        <span className="text-sm md:text-xl text-red-500 group-hover:text-amber-600 transition-colors duration-300">✉️</span>
                        <span className="font-semibold text-gray-800 text-xs md:text-base break-all group-hover:text-red-600 transition-colors duration-300">{vendorData.contactInfo.email}</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 group">
                        <span className="text-sm md:text-xl text-amber-500 group-hover:text-red-600 transition-colors duration-300 flex-shrink-0">📍</span>
                        <span className="font-semibold text-gray-800 text-xs md:text-base group-hover:text-amber-600 transition-colors duration-300">
                          Office 2, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Enquiry Section */}
              <div className="p-4 md:p-8 bg-gradient-to-r from-red-100 via-amber-100 to-red-100 border-t-2 border-amber-400 hover:border-red-500 transition-colors duration-300">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-md flex-shrink-0 hover:scale-110 hover:rotate-3 transition-all duration-300">
                    {companyLogo ? (
                      <img src={companyLogo} alt="Eliteinova" className="w-10 h-10 md:w-16 md:h-16 object-contain" />
                    ) : (
                      <span className="text-2xl md:text-4xl">💼</span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm md:text-2xl font-bold text-red-800 mb-2 md:mb-3 flex items-center gap-1.5 md:gap-2 hover:text-amber-700 transition-colors duration-300">
                      <span className="text-base md:text-2xl">📞</span>
                      For Enquiry - Eliteinova
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 text-xs md:text-lg">
                      <div className="flex items-center gap-1.5 md:gap-2 group">
                        <span className="text-sm md:text-xl text-red-500 group-hover:text-amber-600 transition-colors duration-300">📱</span>
                        <span className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">+91 99999 88888</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 group">
                        <span className="text-sm md:text-xl text-amber-500 group-hover:text-red-600 transition-colors duration-300">✉️</span>
                        <span className="font-semibold text-gray-800 break-all group-hover:text-amber-600 transition-colors duration-300">support@eliteinova.com</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 group">
                        <span className="text-sm md:text-xl">🕒</span>
                        <span className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">Mon-Sat: 9AM-7PM</span>
                      </div>
                      <div className="flex items-start gap-1.5 md:gap-2 md:col-span-1 group">
                        <span className="text-sm md:text-xl text-amber-500 group-hover:text-red-600 transition-colors duration-300 flex-shrink-0">📍</span>
                        <span className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">123 Elite Plaza, Chennai - 600001</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;