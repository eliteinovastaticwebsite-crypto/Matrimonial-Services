import React, { useState } from 'react';

// ─── placeholder image paths (keep your own imports in real app) ───
const vendorLogo = '';
const sampleWork1 = '';
const sampleWork2 = '';
const sampleWork3 = '';
const sampleWork4 = '';

const VendorProfile = () => {
  const [activeSection, setActiveSection] = useState('basic');

  // ── Edit-modal state ──
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    businessName: 'Capture Moments Wedding Photography',
    ownerName: 'Rajesh Kumar',
    designation: 'Lead Photographer & Owner',
    mobile: '+91 98765 43210',
    email: 'capturemoments@example.com',
    website: 'www.capturemoments.com',
    officeAddress: '123 Wedding Street, Photography Nagar',
    cityDistrict: 'Chennai',
    state: 'Tamil Nadu',
    pinCode: '600001',
  });

  const handleEditChange = (e) => {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    // In a real app you would push editForm to your API here.
    setShowEditModal(false);
  };

  // ── vendor data (unchanged) ──
  const vendorData = {
    id: 'VEN-2024-00123',
    basicDetails: {
      logo: vendorLogo,
      businessName: editForm.businessName,
      ownerName: editForm.ownerName,
      designation: editForm.designation,
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
      mobile: editForm.mobile,
      alternateMobile: '+91 87654 32109',
      email: editForm.email,
      officeAddress: editForm.officeAddress,
      cityDistrict: editForm.cityDistrict,
      state: editForm.state,
      pinCode: editForm.pinCode,
      currentLocation: 'Chennai, Tamil Nadu',
      website: editForm.website,
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
    { id: 'basic', title: 'Basic Details' },
    { id: 'contact', title: 'Contact Information' },
    { id: 'legal', title: 'Business & Legal Details' },
    { id: 'equipment', title: 'Equipment & Team Details' },
    { id: 'coverage', title: 'Service Coverage' },
    { id: 'pricing', title: 'Packages & Pricing' },
    { id: 'delivery', title: 'Delivery Timeline' },
    { id: 'portfolio', title: 'Portfolio & Online Presence' },
    { id: 'bank', title: 'Bank Details' },
    { id: 'declaration', title: 'Declaration' },
  ];

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

  // ── section renderers (unchanged logic, only wrapped in shared <Field>) ──
  const renderSectionContent = () => {
    switch (activeSection) {
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
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Mobile Number">
                <Val>{vendorData.contactInfo.mobile}</Val>
              </Field>
              <Field label="Alternate Mobile">
                <Val>{vendorData.contactInfo.alternateMobile}</Val>
              </Field>
            </div>
            <Field label="Email ID">
              <Val>{vendorData.contactInfo.email}</Val>
            </Field>
            <Field label="Office Address">
              <Val>{vendorData.contactInfo.officeAddress}</Val>
            </Field>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Field label="City / District">
                <Val>{vendorData.contactInfo.cityDistrict}</Val>
              </Field>
              <Field label="State">
                <Val>{vendorData.contactInfo.state}</Val>
              </Field>
              <Field label="PIN Code">
                <Val>{vendorData.contactInfo.pinCode}</Val>
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Current Location">
                <p className="text-sm font-medium text-gray-800 flex items-center">
                  <svg className="w-3.5 h-3.5 mr-1.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {vendorData.contactInfo.currentLocation}
                </p>
              </Field>
              <Field label="Website">
                <a href={`https://${vendorData.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-800">
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
                <p className="text-xl font-bold text-red-700">{vendorData.packagesPricing.basicWeddingPackage}</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-4 rounded-lg border border-yellow-100">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Full Wedding Package</h4>
                <p className="text-xl font-bold text-red-700">{vendorData.packagesPricing.fullWeddingPackage}</p>
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
                <p className="text-2xl font-bold text-red-700">{item.val}</p>
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

  // ─────────────────────────── RENDER ───────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">

      {/* ══════════════ EDIT MODAL ══════════════ */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden">
            {/* modal header */}
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

            {/* modal body */}
            <div className="px-6 py-5 space-y-4 max-h-[60vh] overflow-y-auto">
              {[
                { name: 'businessName', label: 'Business Name' },
                { name: 'ownerName', label: 'Owner Name' },
                { name: 'designation', label: 'Designation' },
                { name: 'mobile', label: 'Mobile Number' },
                { name: 'email', label: 'Email ID' },
                { name: 'website', label: 'Website' },
                { name: 'officeAddress', label: 'Office Address' },
                { name: 'cityDistrict', label: 'City / District' },
                { name: 'state', label: 'State' },
                { name: 'pinCode', label: 'PIN Code' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    value={editForm[field.name]}
                    onChange={handleEditChange}
                    className="w-full border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none transition-all"
                  />
                </div>
              ))}
            </div>

            {/* modal footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
              <button onClick={() => setShowEditModal(false)} className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors">
                Cancel
              </button>
              <button onClick={handleSave} className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold hover:from-red-700 hover:to-red-800 transition-all shadow">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════ PAGE BODY ══════════════ */}
      <div className="container mx-auto px-2 md:px-4 py-3 md:py-6">

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

        {/* ── Main Profile Card ── */}
        <div className="bg-white rounded-lg md:rounded-xl shadow-lg border border-red-200 overflow-hidden mb-4 md:mb-8">

          {/* ── Profile Header ── */}
          <div className="relative bg-gradient-to-r from-red-600 to-red-700 p-4 md:p-6">

            {/* Edit Profile button – top right, no overlap */}
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

            {/* Logo + info row */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              {/* Logo */}
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-red-50 to-yellow-50 flex-shrink-0">
                {vendorData.basicDetails.logo ? (
                  <img src={vendorData.basicDetails.logo} alt={vendorData.basicDetails.businessName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-red-100">
                    <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Text info */}
              <div className="flex-1 min-w-0">
                <h1 className="text-lg md:text-2xl font-bold text-white">
                  {vendorData.basicDetails.businessName}
                </h1>

                {/* ── Vendor ID – clearly visible below name ── */}
                <span className="inline-flex items-center gap-1.5 mt-1.5 mb-2 bg-yellow-400 text-red-800 px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-sm">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={2} />
                    <path d="M3 10h18" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                  Vendor ID: {vendorData.id}
                </span>

                <div className="text-white/90 text-sm md:text-base space-y-1">
                  <div className="flex items-center">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{vendorData.contactInfo.currentLocation}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{vendorData.basicDetails.ownerName} ({vendorData.basicDetails.designation})</span>
                  </div>
                </div>

                {/* contact pills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    { icon: 'phone', label: vendorData.contactInfo.mobile },
                    { icon: 'mail', label: vendorData.contactInfo.email },
                    { icon: 'globe', label: vendorData.contactInfo.website },
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
                      {btn.icon === 'globe' && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" />
                        </svg>
                      )}
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Contact Numbers Section ── */}
          <div className="p-3 md:p-6 bg-gradient-to-r from-yellow-50 to-red-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Vendor Office */}
              <div className="bg-white p-4 rounded-lg shadow border border-yellow-200">
                <h3 className="text-sm md:text-base font-bold text-red-700 mb-3 flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Vendor Office Contact
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">{vendorData.contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">{vendorData.contactInfo.email}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">
                      {vendorData.contactInfo.officeAddress}, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state} - {vendorData.contactInfo.pinCode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Our Office */}
              <div className="bg-white p-4 rounded-lg shadow border border-red-200">
                <h3 className="text-sm md:text-base font-bold text-red-700 mb-3 flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Our Office Contact
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">+91 99999 88888</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">support@eliteinova.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">Mon-Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">123 Elite Plaza, Wedding Street, Chennai - 600001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 10-Section Navigation + Content ── */}
          <div className="border-t border-gray-200">
            {/* Mobile tabs – horizontal scroll */}
            <div className="md:hidden overflow-x-auto">
              <div className="flex space-x-1 px-3 py-2 border-b border-gray-200 bg-gray-50">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
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

            {/* Desktop tabs – grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 border-b border-gray-200">
              {sections.map((section) => (
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

          {/* ── Action Buttons ── */}
          <div className="p-4 md:p-6 border-t border-gray-200 bg-gradient-to-r from-red-50 to-yellow-50">
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Vendor
              </button>
              <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 py-3 px-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Full Portfolio
              </button>
              <button className="flex-1 bg-white border-2 border-red-600 text-red-700 py-3 px-4 rounded-lg font-bold hover:bg-red-50 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Save Vendor
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom 3-col cards (unchanged) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Rating */}
          <div className="bg-white rounded-lg md:rounded-xl shadow border border-gray-200 p-4 md:p-6">
            <h3 className="text-base md:text-lg font-bold text-red-800 mb-3 md:mb-4">Customer Reviews</h3>
            <div className="flex items-center mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-lg md:text-xl font-bold text-gray-800">4.8/5</span>
              <span className="ml-2 text-sm text-gray-600">(124 reviews)</span>
            </div>
            <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 rounded-md font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 text-sm">
              View All Reviews
            </button>
          </div>

          {/* Similar Vendors */}
          <div className="bg-white rounded-lg md:rounded-xl shadow border border-gray-200 p-4 md:p-6">
            <h3 className="text-base md:text-lg font-bold text-red-800 mb-3 md:mb-4">Similar Vendors</h3>
            <div className="space-y-2">
              {['Wedding Photography', 'Candid Photography', 'Videography'].map((service, i) => (
                <div key={i} className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-100 to-yellow-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-3 bg-white border border-red-300 text-red-700 py-2 px-4 rounded-md font-medium hover:bg-red-50 transition-all duration-300 text-sm">
              Browse More
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg md:rounded-xl shadow border border-gray-200 p-4 md:p-6">
            <h3 className="text-base md:text-lg font-bold text-red-800 mb-3 md:mb-4">Quick Links</h3>
            <div className="space-y-1">
              {['Download Brochure', 'Request Quote', 'Schedule Meeting', 'Share Profile'].map((link, i) => (
                <button key={i} className="w-full text-left p-2.5 hover:bg-red-50 rounded-md transition-all duration-300 text-sm text-gray-700 hover:text-red-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;