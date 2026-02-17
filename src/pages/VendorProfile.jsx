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
    { id: 'basic', title: 'Basic Details', emoji: '👤' },
    { id: 'contact', title: 'Contact Info', emoji: '📞' },
    { id: 'legal', title: 'Legal Details', emoji: '📋' },
    { id: 'equipment', title: 'Equipment', emoji: '📷' },
    { id: 'coverage', title: 'Coverage', emoji: '🗺️' },
    { id: 'pricing', title: 'Pricing', emoji: '💰' },
    { id: 'delivery', title: 'Timeline', emoji: '⏰' },
    { id: 'portfolio', title: 'Portfolio', emoji: '🎨' },
    { id: 'bank', title: 'Bank Info', emoji: '🏦' },
    { id: 'declaration', title: 'Declaration', emoji: '✍️' },
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

  // ── section renderers ──
  const renderSectionContent = (sectionId = activeSection) => {
    switch (sectionId) {
      case 'basic':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🏢 VENDOR / STUDIO NAME</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.basicDetails.businessName}</p>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">👨‍💼 OWNER / PHOTOGRAPHER NAME</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.basicDetails.ownerName}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🏛️ BUSINESS TYPE</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.basicDetails.businessType}</p>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📅 EXPERIENCE</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C0392B]">{vendorData.basicDetails.yearsOfExperience.split(' ')[0]}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#9A7B2C]">Years</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-2">✨ TYPE OF SERVICE</span>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap gap-2">
                {vendorData.basicDetails.typeOfService.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#fff0f0] to-[#fff8e8] text-[#C0392B] border border-[#f5c6c6] rounded-lg px-3 py-2 text-xs font-bold"
                  >
                    <span className="text-base">□</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📱 MOBILE NUMBER</span>
                <a href={`tel:${vendorData.contactInfo.mobile.replace(/\s/g, '')}`} className="text-[#C0392B] font-semibold text-xs sm:text-sm md:text-base hover:text-[#9A7B2C] transition-colors">
                  {vendorData.contactInfo.mobile}
                </a>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📞 ALTERNATE MOBILE</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.contactInfo.alternateMobile}</p>
              </div>

              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">✉️ EMAIL ID</span>
                <a href={`mailto:${vendorData.contactInfo.email}`} className="text-[#C0392B] font-semibold text-xs sm:text-sm md:text-base hover:text-[#9A7B2C] hover:underline transition-colors break-all">
                  {vendorData.contactInfo.email}
                </a>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🏢 OFFICE ADDRESS</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.contactInfo.officeAddress}</p>
              </div>

              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🏙️ CITY / DISTRICT</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.contactInfo.cityDistrict}</p>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🗺️ STATE</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.contactInfo.state}</p>
              </div>

              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📮 PIN CODE</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.contactInfo.pinCode}</p>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📍 CURRENT LOCATION</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base flex items-center gap-1">
                  {vendorData.contactInfo.currentLocation}
                </p>
              </div>

              <div className="sm:col-span-2">
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🌐 WEBSITE</span>
                <a href={`https://${vendorData.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-[#C0392B] font-semibold text-xs sm:text-sm md:text-base hover:text-[#9A7B2C] hover:underline transition-colors break-all">
                  {vendorData.contactInfo.website}
                </a>
              </div>
            </div>
          </div>
        );

      case 'legal':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🏛️ BUSINESS TYPE</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">Proprietorship</p>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📄 GST NUMBER</span>
                <div className="bg-gradient-to-r from-[#fff8e8] to-white border border-[#e8c98a] rounded-lg px-3 py-2">
                  <p className="font-mono font-bold text-xs sm:text-sm text-[#1a1a1a]">{vendorData.businessLegal.gstNumber}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🆔 PAN NUMBER</span>
                <div className="bg-gradient-to-r from-[#fff0f0] to-white border border-[#f5a5a5] rounded-lg px-3 py-2">
                  <p className="font-mono font-bold text-xs sm:text-sm text-[#1a1a1a]">{vendorData.businessLegal.panNumber}</p>
                </div>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📅 YEARS OF EXPERIENCE</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.businessLegal.yearsOfExperience}</p>
              </div>
            </div>
          </div>
        );

      case 'equipment':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-2">📸 CAMERA MODELS USED</span>
              <div className="flex flex-wrap gap-2">
                {vendorData.equipmentTeam.cameraModels.map((c, i) => (
                  <span key={i} className="inline-flex items-center gap-1 bg-gradient-to-r from-[#fff8e8] to-white text-[#7a5c10] border border-[#e8c98a] rounded-full px-3 py-1.5 text-xs font-bold">
                    📷 {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-2">🎥 VIDEO EQUIPMENT / DRONE</span>
              <div className="flex flex-wrap gap-2">
                {vendorData.equipmentTeam.videoEquipment.map((e, i) => (
                  <span key={i} className="inline-flex items-center gap-1 bg-gradient-to-r from-[#fff0f0] to-[#fff8e8] text-[#C0392B] border border-[#f5c6c6] rounded-full px-3 py-1.5 text-xs font-bold">
                    🎬 {e}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">👥 TEAM MEMBERS</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C0392B]">{vendorData.equipmentTeam.teamMembers.split(' ')[0]}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#9A7B2C]">Members</span>
                </div>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🔄 BACKUP EQUIPMENT</span>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg text-green-600">✅</span>
                  <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.equipmentTeam.backupEquipment}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'coverage':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-2">🗺️ PREFERRED WEDDING LOCATIONS</span>
              <div className="flex flex-wrap gap-2">
                {vendorData.serviceCoverage.preferredLocations.map((loc, i) => (
                  <span key={i} className="inline-flex items-center gap-1 bg-gradient-to-r from-[#fff8e8] to-white text-[#7a5c10] border border-[#e8c98a] rounded-full px-3 py-1.5 text-xs font-bold">
                    ✓ {loc}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🚗 TRAVEL CHARGES APPLICABLE</span>
              <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.serviceCoverage.travelCharges}</p>
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-[#C0392B] to-[#e74c3c] rounded-xl p-4 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute top-2 right-3 text-2xl sm:text-3xl opacity-70">💎</div>
                <p className="text-[8px] sm:text-[10px] uppercase tracking-wider opacity-80 mb-1">Basic Wedding Package</p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-black">{vendorData.packagesPricing.basicWeddingPackage}</p>
                <p className="text-[10px] sm:text-xs opacity-80 mt-1">Perfect for intimate weddings</p>
              </div>
              <div className="bg-gradient-to-br from-[#9A7B2C] to-[#d4a847] rounded-xl p-4 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute top-2 right-3 text-2xl sm:text-3xl opacity-70">👑</div>
                <p className="text-[8px] sm:text-[10px] uppercase tracking-wider opacity-80 mb-1">Full Wedding Package</p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-black">{vendorData.packagesPricing.fullWeddingPackage}</p>
                <p className="text-[10px] sm:text-xs opacity-80 mt-1">Complete coverage with all services</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { label: 'Candid Photography', val: vendorData.packagesPricing.candidPhotography, emoji: '📸' },
                { label: 'Videography', val: vendorData.packagesPricing.videography, emoji: '🎬' },
                { label: 'Album Charges', val: vendorData.packagesPricing.albumCharges, emoji: '📖' },
              ].map((item, i) => (
                <div key={i} className="border-2 border-[#f0e0c0] rounded-xl p-3 sm:p-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                    <span className="text-lg sm:text-xl">{item.emoji}</span>
                    <span className="text-[8px] sm:text-[10px] font-bold text-[#C0392B] uppercase">{item.label}</span>
                  </div>
                  <p className="text-base sm:text-xl md:text-2xl font-black text-[#9A7B2C]">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'delivery':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: 'Photo Delivery', val: vendorData.deliveryTimeline.photoDelivery, emoji: '📸', bg: 'from-[#C0392B] to-[#e74c3c]' },
              { label: 'Video Delivery', val: vendorData.deliveryTimeline.videoDelivery, emoji: '🎥', bg: 'from-[#9A7B2C] to-[#d4a847]' },
              { label: 'Album Delivery', val: vendorData.deliveryTimeline.albumDelivery, emoji: '📚', bg: 'from-[#8B1A1A] to-[#C0392B]' },
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.bg} rounded-xl p-4 sm:p-6 text-center text-white`}>
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.emoji}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black">{item.val.split(' ')[0]}</div>
                <div className="text-xs sm:text-sm opacity-80 mb-0.5 sm:mb-1">Days</div>
                <div className="text-[8px] sm:text-xs uppercase tracking-wider opacity-80">{item.label}</div>
              </div>
            ))}
          </div>
        );

      case 'portfolio':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🌐 WEBSITE / PORTFOLIO LINK</span>
                <a href={`https://${vendorData.portfolio.website}`} target="_blank" rel="noopener noreferrer" className="text-[#C0392B] font-semibold text-xs sm:text-sm md:text-base hover:text-[#9A7B2C] hover:underline break-all">
                  {vendorData.portfolio.website}
                </a>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">☁️ GOOGLE DRIVE LINK</span>
                <a href={`https://${vendorData.portfolio.driveLink}`} target="_blank" rel="noopener noreferrer" className="text-[#C0392B] font-semibold text-xs sm:text-sm md:text-base hover:text-[#9A7B2C] hover:underline break-all">
                  {vendorData.portfolio.driveLink}
                </a>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📱 INSTAGRAM</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.portfolio.instagram}</p>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">👍 FACEBOOK</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.portfolio.facebook}</p>
              </div>
            </div>
            <div>
              <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-2">🎨 SAMPLE WORK PHOTOS</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-20 sm:h-24 md:h-32 bg-gradient-to-br from-[#fff0f0] to-[#fff8e8] rounded-xl border-2 border-dashed border-[#e8c98a] flex flex-col items-center justify-center">
                    <span className="text-xl sm:text-2xl mb-0.5 sm:mb-1">📷</span>
                    <span className="text-[8px] sm:text-xs text-[#9A7B2C] font-semibold">Sample {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'bank':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">👤 ACCOUNT HOLDER NAME</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.bankDetails.accountHolder}</p>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🏦 BANK NAME</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.bankDetails.bankName}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">💳 ACCOUNT NUMBER</span>
                <div className="bg-gradient-to-r from-[#fff8e8] to-white border border-[#e8c98a] rounded-lg px-3 py-2">
                  <p className="font-mono font-bold text-xs sm:text-sm text-[#1a1a1a]">{vendorData.bankDetails.accountNumber}</p>
                </div>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">🔢 IFSC CODE</span>
                <div className="bg-gradient-to-r from-[#fff0f0] to-white border border-[#f5a5a5] rounded-lg px-3 py-2">
                  <p className="font-mono font-bold text-xs sm:text-sm text-[#1a1a1a]">{vendorData.bankDetails.ifscCode}</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-[#9A7B2C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📱 UPI ID</span>
              <div className="inline-flex bg-gradient-to-r from-[#9A7B2C] to-[#d4a847] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2">
                <span className="text-white font-bold text-xs sm:text-sm">{vendorData.bankDetails.upiId}</span>
              </div>
            </div>
          </div>
        );

      case 'declaration':
        return (
          <div className="bg-gradient-to-br from-[#fff8f8] to-[#fffbf0] border-2 border-[#e8c98a] rounded-xl p-4 sm:p-6">
            <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">✍️</span>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                I hereby declare that the above information is true and correct. I agree to provide photography services professionally for marriage events as per agreed terms and conditions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-3 sm:pt-4 border-t-2 border-[#e8c98a]">
              <div>
                <span className="text-[#9A7B2C] text-[8px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">✍️ VENDOR SIGNATURE</span>
                <p className="text-base sm:text-xl font-semibold text-[#1a1a1a] italic" style={{ fontFamily: 'Georgia, serif' }}>{vendorData.declaration.signature}</p>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[8px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📅 DATE</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.declaration.date}</p>
              </div>
              <div>
                <span className="text-[#9A7B2C] text-[8px] sm:text-[10px] font-bold uppercase tracking-widest block mb-1">📍 PLACE</span>
                <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm md:text-base">{vendorData.declaration.place}</p>
              </div>
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
      <div key={section.id} className={`${index !== sections.length - 1 ? 'mb-6 sm:mb-8' : 'mb-4 sm:mb-6'}`}>
        <div className="flex items-center mb-3 sm:mb-4">
          <span className="text-xl sm:text-2xl mr-2">{section.emoji}</span>
          <h3 className="text-base sm:text-lg font-bold text-[#C0392B]">{section.title}</h3>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#C0392B] to-[#e8c98a] to-transparent rounded-full ml-3"></div>
        </div>
        <div className="border-2 border-[#f0d5b0] rounded-xl p-3 sm:p-6">
          {renderSectionContent(section.id)}
        </div>
      </div>
    ));
  };

  return (
    <>
      {/* Import Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f5] via-[#fffbf0] to-white font-['DM_Sans'] p-2 sm:p-4">
        <div className="max-w-7xl mx-auto">

          {/* BANNER - Increased height with red and gold theme */}
          <div className="bg-gradient-to-r from-[#6B0E0E] via-[#9B1F1F] to-[#C0392B] rounded-t-2xl pt-4 sm:pt-6 pb-6 sm:pb-8 px-3 sm:px-6 relative overflow-hidden">
            {/* Decorative golden elements */}
            <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#d4a847]/10 rounded-full -mr-10 sm:-mr-16 -mt-10 sm:-mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 sm:w-40 h-24 sm:h-40 bg-[#d4a847]/10 rounded-full -ml-8 sm:-ml-12 -mb-8 sm:-mb-12"></div>
            <div className="absolute top-1/2 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#d4a847] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 sm:w-3 h-2 sm:h-3 bg-[#d4a847] rounded-full animate-pulse delay-300"></div>
            
            {/* Main content with logo on left */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
              {/* Logo - Left side */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-[#fff0f0] to-[#fffbf0] border-2 sm:border-4 border-[#d4a847] shadow-xl flex items-center justify-center">
                  {vendorData.basicDetails.logo ? (
                    <img src={vendorData.basicDetails.logo} alt="Vendor Logo" className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  )}
                </div>
              </div>

              {/* Center content - Title and details */}
              <div className="flex-1 min-w-0">
                {/* Wedding Photography Vendor badge - Golden */}
                <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#d4a847]/20 to-[#e5b95a]/20 backdrop-blur-sm border border-[#d4a847] rounded-full px-2 sm:px-3 py-1 text-[#d4a847] text-[8px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                  📸 WEDDING PHOTOGRAPHY VENDOR
                </div>

                {/* Business Name - Golden gradient */}
                <h1 className="font-['Playfair_Display'] text-base sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-[#d4a847] via-[#e5b95a] to-[#f0c040] bg-clip-text text-transparent mb-2 sm:mb-3 leading-tight">
                  {vendorData.basicDetails.businessName}
                </h1>

                {/* Details row with golden text */}
                <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-4 gap-y-1 text-[#d4a847] text-[10px] sm:text-xs font-semibold">
                  <span>{vendorData.basicDetails.designation}</span>
                  <span className="text-[#d4a847]/40 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <span>📍</span> Chennai
                  </span>
                  <span className="text-[#d4a847]/40 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <span>⭐</span> {vendorData.basicDetails.yearsOfExperience}
                  </span>
                  <span className="text-[#d4a847]/40 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <span>🏛️</span> {vendorData.basicDetails.businessType}
                  </span>
                </div>
              </div>

              {/* Right side - Email and Website buttons with golden theme */}
              <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <a href={`mailto:${vendorData.contactInfo.email}`} className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-gradient-to-r from-[#d4a847] to-[#e5b95a] text-[#6B0E0E] rounded-lg px-3 sm:px-5 py-1.5 sm:py-2.5 font-bold text-[10px] sm:text-xs hover:shadow-lg hover:scale-105 transition-all">
                  ✉️ Email
                </a>
                <a href={`https://${vendorData.contactInfo.website}`} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-transparent border border-[#d4a847] text-[#d4a847] rounded-lg px-3 sm:px-5 py-1.5 sm:py-2.5 font-bold text-[10px] sm:text-xs hover:bg-[#d4a847]/10 hover:scale-105 transition-all">
                  🌐 Website
                </a>
              </div>
            </div>

            {/* Vendor ID and Mobile contact chips */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              {/* Vendor ID - Golden */}
              <div className="bg-gradient-to-r from-[#d4a847]/20 to-[#e5b95a]/20 backdrop-blur-sm border border-[#d4a847] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2">
                <p className="text-[8px] sm:text-[10px] uppercase tracking-wider text-[#d4a847] mb-0.5">VENDOR ID</p>
                <p className="text-xs sm:text-sm font-bold text-[#d4a847] font-mono">{vendorData.id}</p>
              </div>

              {/* Mobile contact chips - Only visible on mobile */}
              <div className="flex flex-wrap items-center gap-2 sm:hidden">
                <a href={`tel:${vendorData.contactInfo.mobile.replace(/\s/g, '')}`} className="inline-flex items-center gap-1 bg-[#d4a847]/20 border border-[#d4a847] rounded-lg px-2.5 py-1 text-[#d4a847] text-[10px] font-semibold">
                  📱 {vendorData.contactInfo.mobile}
                </a>
                <span className="inline-flex items-center gap-1 bg-[#d4a847]/20 border border-[#d4a847] rounded-lg px-2.5 py-1 text-[#d4a847] text-[10px] font-semibold">
                  📍 Chennai
                </span>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="bg-white border-2 border-[#f0d5b0] border-t-2 border-t-[#fdf0d8] rounded-b-2xl p-3 sm:p-6">

            {!showFullDetails ? (
              <>
                {/* Section Navigation with View Full Details button at the end */}
                <div className="overflow-x-auto mb-4 sm:mb-6 -mx-3 px-3 sm:mx-0 sm:px-0">
                  <div className="flex min-w-max bg-gradient-to-br from-[#fff9f5] to-[#fffcf0] border border-[#f0e0c0] rounded-xl p-1 gap-0.5 items-stretch">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`flex flex-col items-center gap-0.5 px-2 sm:px-4 py-1.5 sm:py-3 rounded-lg transition-all ${
                          activeSection === section.id
                            ? 'bg-gradient-to-br from-[#fff0f0] to-[#fff8e8] shadow-md text-[#C0392B] font-bold'
                            : 'text-gray-500 hover:text-[#C0392B]'
                        }`}
                      >
                        <span className="text-sm sm:text-base md:text-xl">{section.emoji}</span>
                        <span className="text-[7px] sm:text-[8px] md:text-xs font-bold whitespace-nowrap">{section.title}</span>
                      </button>
                    ))}
                    
                    {/* View Full Details button in navigation */}
                    <button
                      onClick={() => setShowFullDetails(true)}
                      className="flex flex-col items-center gap-0.5 px-2 sm:px-4 py-1.5 sm:py-3 rounded-lg transition-all bg-gradient-to-r from-[#C0392B] to-[#e74c3c] text-white font-bold hover:opacity-90"
                    >
                      <span className="text-sm sm:text-base md:text-xl">👁️</span>
                      <span className="text-[7px] sm:text-[8px] md:text-xs font-bold whitespace-nowrap">Full View</span>
                    </button>
                  </div>
                </div>

                {/* Active Section Header */}
                <div className="flex items-center mb-3 pb-2 border-b-2 border-[#fdf0d8]">
                  <span className="text-lg sm:text-xl md:text-2xl mr-2">{sections.find(s => s.id === activeSection)?.emoji}</span>
                  <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-[#C0392B]">{sections.find(s => s.id === activeSection)?.title}</h3>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#C0392B] to-[#e8c98a] to-transparent rounded-full ml-3"></div>
                </div>

                {/* Active Section Content */}
                <div className="border-2 border-[#f0d5b0] rounded-xl p-3 sm:p-6">
                  {renderSectionContent()}
                  
                  {/* Navigation Buttons */}
                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-[#fdf0d8] flex justify-between items-center">
                    <button
                      onClick={goToPreviousSection}
                      disabled={activeSection === sections[0].id}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-[10px] sm:text-xs transition-all ${
                        activeSection === sections[0].id
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-[#C0392B] border border-[#f5c6c6] hover:bg-[#fff0f0]'
                      }`}
                    >
                      ← Back
                    </button>

                    <div className="flex gap-1 sm:gap-1.5">
                      {sections.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveSection(sections[i].id)}
                          className={`h-1 sm:h-1.5 rounded-full transition-all ${
                            sections.findIndex(s => s.id === activeSection) === i
                              ? 'w-3 sm:w-5 bg-[#C0392B]'
                              : 'w-1 sm:w-1.5 bg-[#f5c6c6]'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={goToNextSection}
                      disabled={activeSection === sections[sections.length - 1].id}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-[10px] sm:text-xs text-white transition-all ${
                        activeSection === sections[sections.length - 1].id
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#C0392B] to-[#e74c3c] hover:opacity-90'
                      }`}
                    >
                      Next →
                    </button>
                  </div>
                </div>

                {/* Bottom Contact Cards */}
                <ContactCards vendorData={vendorData} companyLogo={companyLogo} />
              </>
            ) : (
              <>
                {/* Full Details Header with Back to Normal button */}
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl md:text-3xl">📋</span>
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-[#C0392B]">Complete Profile</h2>
                  </div>
                  <button
                    onClick={() => setShowFullDetails(false)}
                    className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#9A7B2C] to-[#d4a847] text-white rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 font-bold text-xs sm:text-sm shadow-lg hover:opacity-90 transition-all w-full xs:w-auto"
                  >
                    ← Back to Normal
                  </button>
                </div>

                {/* All Sections */}
                {renderAllSections()}

                {/* Contact Cards in Full View */}
                <ContactCards vendorData={vendorData} companyLogo={companyLogo} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// Contact Cards Component - Mobile optimized
const ContactCards = ({ vendorData, companyLogo }) => (
  <>
    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-[#fdf0d8]">
      <div className="flex items-center mb-3 sm:mb-4">
        <span className="text-base sm:text-lg md:text-xl mr-2">📇</span>
        <h3 className="text-xs sm:text-sm md:text-base font-extrabold text-[#C0392B]">Vendor Contact Details</h3>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-[#C0392B] to-[#e8c98a] to-transparent rounded-full ml-3"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Primary Address */}
        <div className="border-2 border-[#e8c98a] rounded-xl p-3 sm:p-5">
          <h4 className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-extrabold text-[#C0392B] mb-2 sm:mb-3">
            <span className="text-sm sm:text-base">🏢</span> Primary Vendor Address
          </h4>
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-start gap-1 sm:gap-1.5">
              <span className="text-amber-500 text-sm sm:text-base">📞</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 break-all">{vendorData.contactInfo.mobile}</span>
            </div>
            <div className="flex items-start gap-1 sm:gap-1.5">
              <span className="text-red-500 text-sm sm:text-base">✉️</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 break-all">{vendorData.contactInfo.email}</span>
            </div>
            <div className="flex items-start gap-1 sm:gap-1.5">
              <span className="text-amber-500 text-sm sm:text-base flex-shrink-0">📍</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">
                {vendorData.contactInfo.officeAddress}, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state} - {vendorData.contactInfo.pinCode}
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Address */}
        <div className="border-2 border-[#f5c6c6] rounded-xl p-3 sm:p-5">
          <h4 className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-extrabold text-[#C0392B] mb-2 sm:mb-3">
            <span className="text-sm sm:text-base">🏛️</span> Office Address (Secondary)
          </h4>
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-start gap-1 sm:gap-1.5">
              <span className="text-amber-500 text-sm sm:text-base">📞</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">{vendorData.contactInfo.alternateMobile}</span>
            </div>
            <div className="flex items-start gap-1 sm:gap-1.5">
              <span className="text-red-500 text-sm sm:text-base">✉️</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 break-all">{vendorData.contactInfo.email}</span>
            </div>
            <div className="flex items-start gap-1 sm:gap-1.5">
              <span className="text-amber-500 text-sm sm:text-base flex-shrink-0">📍</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">
                Secondary Office, {vendorData.contactInfo.cityDistrict}, {vendorData.contactInfo.state}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Enquiry Section - Mobile optimized */}
    <div className="mt-3 sm:mt-4 bg-gradient-to-br from-[#fff5f0] via-[#fff8f0] to-[#fff5e8] border-2 border-[#f0d5b0] rounded-xl p-3 sm:p-5">
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#f5f0e8] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#e8d5a0]">
          <span className="text-xl sm:text-2xl md:text-3xl">💼</span>
        </div>
        
        <div className="flex-1 w-full">
          <h4 className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-extrabold text-[#C0392B] mb-2 sm:mb-3">
            <span className="text-sm sm:text-base">📞</span> For Enquiry - Eliteinova
          </h4>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-red-500 text-sm sm:text-base">📱</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">+91 99999 88888</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-amber-500 text-sm sm:text-base">✉️</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 break-all">support@eliteinova.com</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-gray-600 text-sm sm:text-base">🕒</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Mon-Sat: 9AM-7PM</span>
            </div>
            <div className="flex items-start gap-1 sm:gap-1.5 xs:col-span-2 sm:col-span-1">
              <span className="text-amber-500 text-sm sm:text-base flex-shrink-0">📍</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">123 Elite Plaza, Chennai - 600001</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default VendorProfile;