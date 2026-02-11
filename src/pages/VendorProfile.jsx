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
    { id: 'basic', title: 'Basic Details', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'contact', title: 'Contact Information', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
    { id: 'legal', title: 'Business & Legal Details', icon: 'M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'equipment', title: 'Equipment & Team Details', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { id: 'coverage', title: 'Service Coverage', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z' },
    { id: 'pricing', title: 'Packages & Pricing', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'delivery', title: 'Delivery Timeline', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'portfolio', title: 'Portfolio & Online Presence', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'bank', title: 'Bank Details', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { id: 'declaration', title: 'Declaration', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
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
    <div>
      <h4 className="text-xs font-bold text-gray-600 mb-1">{label}</h4>
      {children}
    </div>
  );
  const Val = ({ children }) => (
    <p className="text-sm font-medium text-gray-800">{children}</p>
  );

  // ── section renderers ──
  const renderSectionContent = (sectionId = activeSection) => {
    switch (sectionId) {
      case 'basic':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Vendor / Studio Name">
                <Val>{vendorData.basicDetails.businessName}</Val>
              </Field>
              <Field label="Owner / Photographer Name">
                <Val>{vendorData.basicDetails.ownerName}</Val>
              </Field>
            </div>
            <Field label="Type of Service">
              <div className="flex flex-wrap gap-1.5 mt-1">
                {vendorData.basicDetails.typeOfService.map((service, i) => (
                  <span key={i} className="inline-flex items-center bg-red-50 text-red-700 text-xs px-2.5 py-1 rounded-full">
                    <svg className="w-2.5 h-2.5 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {service}
                  </span>
                ))}
              </div>
            </Field>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Business Type">
                <Val>{vendorData.basicDetails.businessType}</Val>
              </Field>
              <Field label="Years of Experience">
                <Val>{vendorData.basicDetails.yearsOfExperience}</Val>
              </Field>
            </div>
          </div>
        );

      case 'contact':
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <Field label="Mobile Number">
          <Val>{vendorData.contactInfo.mobile}</Val>
        </Field>
        <Field label="Alternate Mobile">
          <Val>{vendorData.contactInfo.alternateMobile}</Val>
        </Field>

        <Field label="Email ID">
          <Val>{vendorData.contactInfo.email}</Val>
        </Field>
        <Field label="Office Address">
          <Val>{vendorData.contactInfo.officeAddress}</Val>
        </Field>

        <Field label="City / District">
          <Val>{vendorData.contactInfo.cityDistrict}</Val>
        </Field>
        <Field label="State">
          <Val>{vendorData.contactInfo.state}</Val>
        </Field>

        <Field label="PIN Code">
          <Val>{vendorData.contactInfo.pinCode}</Val>
        </Field>
        <Field label="Current Location">
          <p className="text-sm font-medium text-gray-800 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {vendorData.contactInfo.currentLocation}
          </p>
        </Field>

        <Field label="Website">
          <a
            href={`https://${vendorData.contactInfo.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            {vendorData.contactInfo.website}
          </a>
        </Field>
      </div>
    </div>
  );


      case 'legal':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Business Type">
                <Val>Proprietorship</Val>
              </Field>
              <Field label="GST Number">
                <Val>{vendorData.businessLegal.gstNumber}</Val>
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="PAN Number">
                <Val>{vendorData.businessLegal.panNumber}</Val>
              </Field>
              <Field label="Years of Experience">
                <Val>{vendorData.businessLegal.yearsOfExperience}</Val>
              </Field>
            </div>
          </div>
        );

      case 'equipment':
        return (
          <div className="space-y-4">
            <Field label="Camera Models Used">
              <div className="flex flex-wrap gap-1.5 mt-1">
                {vendorData.equipmentTeam.cameraModels.map((c, i) => (
                  <span key={i} className="inline-flex items-center bg-yellow-50 text-yellow-700 text-xs px-2.5 py-1 rounded-full">{c}</span>
                ))}
              </div>
            </Field>
            <Field label="Video Equipment / Drone">
              <div className="flex flex-wrap gap-1.5 mt-1">
                {vendorData.equipmentTeam.videoEquipment.map((e, i) => (
                  <span key={i} className="inline-flex items-center bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full">{e}</span>
                ))}
              </div>
            </Field>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Number of Team Members">
                <Val>{vendorData.equipmentTeam.teamMembers}</Val>
              </Field>
              <Field label="Backup Equipment Available">
                <Val>{vendorData.equipmentTeam.backupEquipment}</Val>
              </Field>
            </div>
          </div>
        );

      case 'coverage':
        return (
          <div className="space-y-4">
            <Field label="Preferred Wedding Locations">
              <div className="flex flex-wrap gap-1.5 mt-1">
                {vendorData.serviceCoverage.preferredLocations.map((loc, i) => (
                  <span key={i} className="inline-flex items-center bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full">
                    <svg className="w-2.5 h-2.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {loc}
                  </span>
                ))}
              </div>
            </Field>
            <Field label="Travel Charges Applicable">
              <Val>{vendorData.serviceCoverage.travelCharges}</Val>
            </Field>
          </div>
        );

      case 'pricing':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-4 rounded-lg border border-red-100">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Basic Wedding Package</h4>
                <p className="text-xl md:text-2xl font-bold text-red-700">{vendorData.packagesPricing.basicWeddingPackage}</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-4 rounded-lg border border-yellow-100">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Full Wedding Package</h4>
                <p className="text-xl md:text-2xl font-bold text-red-700">{vendorData.packagesPricing.fullWeddingPackage}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Candid Photography', val: vendorData.packagesPricing.candidPhotography },
                { label: 'Videography / Cinematic', val: vendorData.packagesPricing.videography },
                { label: 'Album Charges', val: vendorData.packagesPricing.albumCharges },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="text-xs font-bold text-gray-600 mb-1">{item.label}</h4>
                  <p className="text-base font-bold text-gray-800">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'delivery':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Photo Delivery Time', val: vendorData.deliveryTimeline.photoDelivery },
              { label: 'Video Delivery Time', val: vendorData.deliveryTimeline.videoDelivery },
              { label: 'Album Delivery Time', val: vendorData.deliveryTimeline.albumDelivery },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-red-50 to-yellow-50 p-5 rounded-lg border border-red-100 text-center">
                <h4 className="text-xs font-bold text-gray-600 mb-2">{item.label}</h4>
                <p className="text-2xl md:text-3xl font-bold text-red-700">{item.val}</p>
                <p className="text-xs text-gray-500 mt-1">Days</p>
              </div>
            ))}
          </div>
        );

      case 'portfolio':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Website / Portfolio Link">
                <a href={`https://${vendorData.portfolio.website}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  {vendorData.portfolio.website}
                </a>
              </Field>
              <Field label="Instagram / Facebook Page">
                <Val>{vendorData.portfolio.instagram}</Val>
                <p className="text-sm font-medium text-gray-800">{vendorData.portfolio.facebook}</p>
              </Field>
            </div>
            <Field label="Google Drive / Sample Work Link">
              <a href={`https://${vendorData.portfolio.driveLink}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                {vendorData.portfolio.driveLink}
              </a>
            </Field>
            <div>
              <h4 className="text-xs font-bold text-gray-600 mb-2">Sample Work Photos</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {vendorData.workPhotos.map((photo, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-gray-200 bg-gray-100 h-24 flex items-center justify-center">
                    {photo ? (
                      <img src={photo} alt={`Sample Work ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'bank':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Account Holder Name">
                <Val>{vendorData.bankDetails.accountHolder}</Val>
              </Field>
              <Field label="Bank Name">
                <Val>{vendorData.bankDetails.bankName}</Val>
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Account Number">
                <Val>{vendorData.bankDetails.accountNumber}</Val>
              </Field>
              <Field label="IFSC Code">
                <Val>{vendorData.bankDetails.ifscCode}</Val>
              </Field>
            </div>
            <Field label="UPI ID (Optional)">
              <Val>{vendorData.bankDetails.upiId}</Val>
            </Field>
          </div>
        );

      case 'declaration':
        return (
          <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-5 rounded-lg border border-red-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              I hereby declare that the above information is true and correct. I agree to provide photography services professionally for marriage events as per agreed terms and conditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
              <Field label="Vendor Signature">
                <p className="text-sm font-semibold text-gray-800 italic" style={{ fontFamily: 'Georgia, serif' }}>{vendorData.declaration.signature}</p>
              </Field>
              <Field label="Date">
                <Val>{vendorData.declaration.date}</Val>
              </Field>
              <Field label="Place">
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
      <div key={section.id} className={`${index !== sections.length - 1 ? 'mb-8' : 'mb-6'}`}>
        <div className="flex items-center mb-3 md:mb-4">
          <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
          </svg>
          <h3 className="text-base md:text-lg font-bold text-red-800">{section.title}</h3>
          <div className="ml-2 flex-1 h-0.5 bg-gradient-to-r from-red-600 to-yellow-500"></div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-4 md:p-6 rounded-lg border border-red-100">
          {renderSectionContent(section.id)}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      <div className="container mx-auto px-3 py-3 md:px-4 md:py-6">
        {/* Breadcrumb */}
        <nav className="mb-3 md:mb-6">
          <ol className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
            <li><a href="/" className="text-red-600 hover:text-red-800">Home</a></li>
            <li className="text-gray-400">/</li>
            <li><a href="/photography" className="text-red-600 hover:text-red-800">Photography</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-medium">Vendor Profile</li>
          </ol>
        </nav>

        {/* Main Profile Card */}
        <div className="bg-white rounded-lg md:rounded-xl shadow-lg border border-red-200 overflow-hidden mb-4 md:mb-8">
          {/* Profile Header - Logo and Business Name in one line */}
          <div className="relative bg-gradient-to-r from-red-600 to-red-700 p-3 md:p-6">
            {/* Mobile Layout: Logo on right, text on left */}
            <div className="flex flex-row-reverse md:flex-row items-start">
              {/* Logo - On RIGHT for mobile, LEFT for desktop */}
              <div className="w-12 h-12 md:w-28 md:h-28 rounded-full border-2 md:border-4 border-white shadow-md md:shadow-lg overflow-hidden bg-gradient-to-br from-red-50 to-yellow-50 flex-shrink-0 ml-3 md:ml-0 md:mr-6">
                {vendorData.basicDetails.logo ? (
                  <img src={vendorData.basicDetails.logo} alt={vendorData.basicDetails.businessName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-red-100">
                    <svg className="w-6 h-6 md:w-12 md:h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Text info - On LEFT for mobile, fills space */}
              <div className="flex-1 min-w-0">
                {/* Business Name - Top Line */}
                <h1 className="text-sm md:text-2xl font-bold text-white leading-tight mb-1.5">
                  {vendorData.basicDetails.businessName}
                </h1>

                {/* Vendor ID Badge */}
                <div className="mb-2">
                  <span className="inline-flex items-center gap-1 bg-yellow-400 text-red-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-sm">
                    <svg className="w-2.5 h-2.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={2} />
                      <path d="M3 10h18" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                    Vendor ID: {vendorData.id}
                  </span>
                </div>

                {/* All details in compact layout - Fills left side */}
                <div className="space-y-1 text-white">
                  {/* Location */}
                  <div className="flex items-start">
                    <span className="text-xs md:text-sm font-bold inline-block min-w-[90px]"> Location:</span>
                    <span className="text-xs md:text-sm font-bold ml-1">{vendorData.contactInfo.currentLocation}</span>
                  </div>
                  
                  {/* Owner Name */}
                  <div className="flex items-start">
                    <span className="text-xs md:text-sm font-bold inline-block min-w-[90px]"> Owner:</span>
                    <span className="text-xs md:text-sm font-bold ml-1">
                      {vendorData.basicDetails.ownerName} ({vendorData.basicDetails.designation})
                    </span>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start">
                    <span className="text-xs md:text-sm font-bold inline-block min-w-[90px]"> Phone:</span>
                    <a 
                      href={`tel:${vendorData.contactInfo.mobile.replace(/\s/g, '')}`}
                      className="text-xs md:text-sm font-bold ml-1 hover:underline"
                    >
                      {vendorData.contactInfo.mobile}
                    </a>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start">
                    <span className="text-xs md:text-sm font-bold inline-block min-w-[90px]"> Email:</span>
                    <a 
                      href={`mailto:${vendorData.contactInfo.email}`}
                      className="text-xs md:text-sm font-bold ml-1 hover:underline"
                    >
                      {vendorData.contactInfo.email}
                    </a>
                  </div>
                  
                  {/* Website */}
                  <div className="flex items-start">
                    <span className="text-xs md:text-sm font-bold inline-block min-w-[90px]"> Website:</span>
                    <a 
                      href={`https://${vendorData.contactInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm font-bold ml-1 hover:underline"
                    >
                      {vendorData.contactInfo.website}
                    </a>
                  </div>
                </div>

                {/* Contact Buttons - Below all details */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <a href={`tel:${vendorData.contactInfo.mobile.replace(/\s/g, '')}`} className="bg-white text-red-700 hover:bg-red-50 px-2 py-1 md:px-3 md:py-1.5 rounded text-xs md:text-sm font-bold flex items-center gap-1 md:gap-1.5 transition-all duration-300 no-underline">
                    <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="hidden md:inline">Call Now</span>
                    <span className="md:hidden text-xs">Call</span>
                  </a>
                  
                  <a href={`mailto:${vendorData.contactInfo.email}`} className="bg-white text-red-700 hover:bg-red-50 px-2 py-1 md:px-3 md:py-1.5 rounded text-xs md:text-sm font-bold flex items-center gap-1 md:gap-1.5 transition-all duration-300 no-underline">
                    <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="hidden md:inline">Send Email</span>
                    <span className="md:hidden text-xs">Email</span>
                  </a>
                  
                  <a href={`https://${vendorData.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="bg-white text-red-700 hover:bg-red-50 px-2 py-1 md:px-3 md:py-1.5 rounded text-xs md:text-sm font-bold flex items-center gap-1 md:gap-1.5 transition-all duration-300 no-underline">
                    <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" />
                    </svg>
                    <span className="hidden md:inline">Visit Website</span>
                    <span className="md:hidden text-xs">Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section Navigation - Hide when showing full details */}
          {!showFullDetails && (
            <div className="border-t border-gray-200">
              <div className="overflow-x-auto">
                <div className="flex w-full min-w-max border-b border-gray-200">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex-shrink-0 flex items-center gap-1 md:gap-2 px-2 py-1.5 md:px-4 md:py-3 border-r border-gray-200 last:border-r-0 transition-all ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                      </svg>
                      <span className="text-xs md:text-sm font-medium whitespace-nowrap">{section.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active section content - Show when not in full details mode */}
              <div className="p-3 md:p-6">
                <div className="flex items-center mb-2 md:mb-4">
                  <h3 className="text-sm md:text-lg font-bold text-red-800">
                    {sections.find((s) => s.id === activeSection)?.title}
                  </h3>
                  <div className="ml-2 w-8 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full"></div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-3 md:p-6 rounded-lg border border-red-100">
                  {renderSectionContent()}
                  
                  {/* Navigation Buttons with View Full Details */}
                  <div className="mt-3 md:mt-6 pt-2 md:pt-4 border-t border-red-200 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-1.5 w-full sm:w-auto">
                      <button
                        onClick={goToPreviousSection}
                        disabled={activeSection === sections[0].id}
                        className={`flex items-center gap-1 px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                          activeSection === sections[0].id
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-red-600 hover:bg-red-50 border border-red-300'
                        }`}
                      >
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="hidden sm:inline">Back</span>
                      </button>

                      <button
                        onClick={goToNextSection}
                        disabled={activeSection === sections[sections.length - 1].id}
                        className={`flex items-center gap-1 px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                          activeSection === sections[sections.length - 1].id
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                        }`}
                      >
                        <span className="hidden sm:inline">Next</span>
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>

                    {/* View Full Details Button */}
                    <button
                      onClick={() => setShowFullDetails(true)}
                      className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-1.5 px-3 md:py-2 md:px-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all shadow flex items-center justify-center gap-1.5 text-xs md:text-sm"
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Full Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Sections Content - Show when in full details mode */}
          {showFullDetails && (
            <div className="p-4 md:p-8 border-t border-gray-200">
              {/* Header with Back Button */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-red-800 text-center md:text-left">Complete Vendor Details</h2>
                <button
                  onClick={() => setShowFullDetails(false)}
                  className="mt-3 md:mt-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-2 px-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all shadow flex items-center justify-center gap-2 text-sm md:w-auto"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Normal View
                </button>
              </div>
              
              {/* All Sections */}
              <div className="space-y-6 md:space-y-8">
                {renderAllSections()}
                
                {/* Vendor Addresses */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-red-800 mb-3 md:mb-4">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Primary Address */}
                    <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-4 md:p-6 rounded-lg border border-yellow-200">
                      <h4 className="text-sm md:text-base font-bold text-red-700 mb-3 md:mb-4 flex items-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Primary Vendor Address
                      </h4>
                      <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="font-medium text-gray-800">{vendorData.contactInfo.mobile}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium text-gray-800">{vendorData.contactInfo.email}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium text-gray-800">
                            {vendorData.contactInfo.officeAddress}, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state} - {vendorData.contactInfo.pinCode}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Office Address */}
                    <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-4 md:p-6 rounded-lg border border-red-200">
                      <h4 className="text-sm md:text-base font-bold text-red-700 mb-3 md:mb-4 flex items-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Office Address (Secondary)
                      </h4>
                      <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="font-medium text-gray-800">{vendorData.contactInfo.alternateMobile}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium text-gray-800">{vendorData.contactInfo.email}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium text-gray-800">
                            Secondary Office, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* For Enquiry - Our Address with Logo */}
                <div className="bg-gradient-to-r from-red-100 to-yellow-100 p-4 md:p-6 rounded-lg border-2 border-red-300">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                    {/* Logo */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      {companyLogo ? (
                        <img src={companyLogo} alt="Eliteinova" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                      ) : (
                        <svg className="w-10 h-10 md:w-14 md:h-14 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Contact Details */}
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-bold text-red-800 mb-2 md:mb-3">For Enquiry - Eliteinova Matrimonial Services</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="font-medium text-gray-800">+91 99999 88888</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium text-gray-800">support@eliteinova.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium text-gray-800">Mon-Sat: 9:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex items-start gap-2 sm:col-span-2">
                          <svg className="w-4 h-4 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium text-gray-800">123 Elite Plaza, Wedding Street, Chennai - 600001</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Primary & Office Address - At the bottom (only show when not in full details) */}
          {!showFullDetails && (
            <div className="p-3 md:p-6 bg-gradient-to-r from-yellow-50 to-red-50 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                {/* Primary Address */}
                <div className="bg-white p-3 md:p-4 rounded-lg shadow border border-yellow-200">
                  <h3 className="text-xs md:text-base font-bold text-red-700 mb-2 md:mb-3 flex items-center">
                    <svg className="w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Primary Vendor Address
                  </h3>
                  <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-bold text-gray-800">{vendorData.contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-bold text-gray-800">{vendorData.contactInfo.email}</span>
                    </div>
                    <div className="flex items-start gap-1.5 md:gap-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-bold text-gray-800 text-xs md:text-sm">
                        {vendorData.contactInfo.officeAddress}, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state} - {vendorData.contactInfo.pinCode}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Office Address */}
                <div className="bg-white p-3 md:p-4 rounded-lg shadow border border-red-200">
                  <h3 className="text-xs md:text-base font-bold text-red-700 mb-2 md:mb-3 flex items-center">
                    <svg className="w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Office Address
                  </h3>
                  <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-bold text-gray-800">{vendorData.contactInfo.alternateMobile}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-bold text-gray-800">{vendorData.contactInfo.email}</span>
                    </div>
                    <div className="flex items-start gap-1.5 md:gap-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-bold text-gray-800 text-xs md:text-sm">
                        Office 2, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* For Enquiry - Our Address with Logo (only show when not in full details) */}
          {!showFullDetails && (
            <div className="p-3 md:p-6 bg-gradient-to-r from-red-100 to-yellow-100 border-t border-red-300">
              <div className="flex items-start gap-2 md:gap-4">
                {/* Logo */}
                <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  {companyLogo ? (
                    <img src={companyLogo} alt="Eliteinova" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
                  ) : (
                    <svg className="w-6 h-6 md:w-10 md:h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                </div>
                
                {/* Contact Details */}
                <div className="flex-1">
                  <h4 className="text-xs md:text-sm font-bold text-red-800 mb-1.5 md:mb-2">For Enquiry - Eliteinova Matrimonial Services</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-bold text-gray-800">+91 99999 88888</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-bold text-gray-800">support@eliteinova.com</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-bold text-gray-800">Mon-Sat: 9AM-7PM</span>
                    </div>
                    <div className="flex items-start gap-1.5 md:gap-2 md:col-span-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-bold text-gray-800 text-xs md:text-sm">123 Elite Plaza, Wedding Street, Chennai - 600001</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;