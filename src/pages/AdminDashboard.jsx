import React, { useState } from 'react';

const Icon = ({ d, size = 18, stroke = 'currentColor', fill = 'none' }) => (
  <svg width={size} height={size} fill={fill} stroke={stroke} strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const ICONS = {
  dashboard: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  customers: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  vendors: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  booking: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  payments: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  complaints: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  analytics: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  roles: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  notifications: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  chevronDown: 'M19 9l-7 7-7-7',
  chevronRight: 'M9 5l7 7-7 7',
  logout: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
  bell: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 18L18 6M6 6l12 12',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  filter: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
  download: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
  eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  edit: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
};

// ─── SHARED COMPONENTS ───────────────────────────────────

const StatCard = ({ label, value, color, icon, sub }) => (
  <div className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${color} hover:shadow-md transition-all duration-200`}>
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{label}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
        {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
      </div>
      <div className="text-2xl">{icon}</div>
    </div>
  </div>
);

const FeatureCard = ({ emoji, title, points, accentColor }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${accentColor}`}>{emoji}</div>
      <h4 className="font-bold text-gray-800 text-sm leading-tight">{title}</h4>
    </div>
    <ul className="space-y-2">
      {points.map((pt, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
          <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
          <span>{pt}</span>
        </li>
      ))}
    </ul>
  </div>
);

const StatusBadge = ({ status }) => {
  const map = { Active: 'bg-green-50 text-green-700 border-green-200', Inactive: 'bg-gray-50 text-gray-500 border-gray-200', Pending: 'bg-amber-50 text-amber-700 border-amber-200', Blocked: 'bg-red-50 text-red-700 border-red-200' };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${map[status] || map.Inactive}`}>{status}</span>;
};

const BookingBadge = ({ status }) => {
  const map = { Completed: 'bg-green-50 text-green-700 border-green-200', Confirmed: 'bg-blue-50 text-blue-700 border-blue-200', Pending: 'bg-amber-50 text-amber-700 border-amber-200', 'In Progress': 'bg-purple-50 text-purple-700 border-purple-200', Cancelled: 'bg-red-50 text-red-700 border-red-200' };
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${map[status] || ''}`}>{status}</span>;
};

const PaymentBadge = ({ status }) => {
  const map = { Paid: 'bg-green-50 text-green-700', Partial: 'bg-amber-50 text-amber-700', Pending: 'bg-gray-50 text-gray-500', Refunded: 'bg-blue-50 text-blue-700' };
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold ${map[status] || ''}`}>{status}</span>;
};

const SectionHeader = ({ icon, title, count, action }) => (
  <div className="flex items-center justify-between mb-5">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={icon} size={18} /></div>
      <div><h3 className="font-bold text-gray-800 text-base">{title}</h3>{count && <p className="text-xs text-gray-400">{count}</p>}</div>
    </div>
    {action && (
      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors">
        <Icon d={action.icon} size={13} />{action.label}
      </button>
    )}
  </div>
);

const SearchBar = ({ placeholder }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="flex-1 relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
      <input type="text" placeholder={placeholder} className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" />
    </div>
    <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors"><Icon d={ICONS.filter} size={14} />Filters</button>
    <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors"><Icon d={ICONS.download} size={14} />Export</button>
  </div>
);

// ─── VENDOR TABLE ─────────────────────────────────────────
const VendorTable = ({ vendors, title, count }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
    <div className="p-5 border-b border-gray-100">
      <SectionHeader icon={ICONS.vendors} title={title} count={count} action={{ icon: ICONS.download, label: 'Export' }} />
      <SearchBar placeholder="Search by name, location, rating or status..." />
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            {['Vendor ID', 'Business Name', 'Specialization', 'Location', 'Rating', 'Bookings', 'Status', 'Verified', 'Actions'].map(h => (
              <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {vendors.map(v => (
            <tr key={v.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-xs font-mono text-gray-500">{v.id}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg ${v.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{v.name[0]}</div>
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{v.name}</span>
                </div>
              </td>
              <td className="px-4 py-3"><span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${v.tagColor}`}>{v.specialization}</span></td>
              <td className="px-4 py-3 text-xs text-gray-600">{v.location}</td>
              <td className="px-4 py-3"><div className="flex items-center gap-1"><span className="text-amber-400 text-sm">★</span><span className="text-xs font-bold text-gray-700">{v.rating}</span></div></td>
              <td className="px-4 py-3 text-xs font-bold text-gray-700 text-center">{v.bookings}</td>
              <td className="px-4 py-3"><StatusBadge status={v.status} /></td>
              <td className="px-4 py-3">{v.verified ? <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">✅ Verified</span> : <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">Pending</span>}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button>
                  <button className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors"><Icon d={ICONS.edit} size={14} /></button>
                  <button className="p-1.5 rounded-lg hover:bg-green-50 text-green-500 transition-colors"><Icon d={ICONS.shield} size={14} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ─── CATEGORY PAGE BUILDER ────────────────────────────────
const CategoryPage = ({ emoji, title, badge, gradient, stats, vendors, featureCards }) => (
  <div>
    <div className={`rounded-2xl p-5 mb-6 bg-gradient-to-r ${gradient} border`}>
      <div className="flex items-center gap-4">
        <div className="text-4xl">{emoji}</div>
        <div><h3 className="text-lg font-bold text-gray-800">{title}</h3><p className="text-sm text-gray-500 mt-0.5">{badge}</p></div>
      </div>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">{stats.map((s, i) => <StatCard key={i} {...s} />)}</div>
    <VendorTable vendors={vendors} title={`All ${title} Vendors`} count={`${vendors.length} vendors shown`} />
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">{featureCards.map((c, i) => <FeatureCard key={i} {...c} />)}</div>
  </div>
);

// ─── 8 CATEGORY PAGES ────────────────────────────────────

const PhotographyPage = () => (
  <CategoryPage
    emoji="📸" title="Photography"
    badge="Wedding, Candid, Traditional & Pre-wedding Photography Vendors"
    gradient="from-pink-50 to-red-50 border-pink-200"
    stats={[
      { label: 'Total Photographers', value: '67', icon: '📸', color: 'border-pink-400' },
      { label: 'Active', value: '54', icon: '✅', color: 'border-green-400' },
      { label: 'Pending Approval', value: '8', icon: '⏳', color: 'border-amber-400' },
      { label: 'Top Rated (4.5+)', value: '31', icon: '⭐', color: 'border-purple-400' },
    ]}
    vendors={[
      { id: 'PHO001', name: 'LensArt Studio', specialization: 'Candid & Traditional', location: 'Mumbai', rating: 4.9, bookings: 124, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-pink-400 to-red-400', tagColor: 'bg-pink-50 text-pink-700' },
      { id: 'PHO002', name: 'Shutter Stories', specialization: 'Pre-Wedding Shoots', location: 'Delhi', rating: 4.7, bookings: 89, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-rose-400 to-pink-400', tagColor: 'bg-rose-50 text-rose-700' },
      { id: 'PHO003', name: 'Golden Moments', specialization: 'Full-Day Coverage', location: 'Bangalore', rating: 4.5, bookings: 67, status: 'Pending', verified: false, avatarBg: 'bg-gradient-to-br from-amber-400 to-orange-400', tagColor: 'bg-amber-50 text-amber-700' },
      { id: 'PHO004', name: 'Pixel Perfect Co.', specialization: 'Drone & Aerial', location: 'Chennai', rating: 4.8, bookings: 45, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-400', tagColor: 'bg-purple-50 text-purple-700' },
    ]}
    featureCards={[
      { emoji: '🖼️', title: 'Portfolio Management', accentColor: 'bg-pink-50', points: ['Review sample photos & albums', 'Check video reels & past work', 'Approve portfolio quality', 'Flag low-quality submissions'] },
      { emoji: '📦', title: 'Service Packages & Pricing', accentColor: 'bg-rose-50', points: ['Basic, premium & full-day packages', 'Monitor pricing per package', 'Track included services', 'Update pricing on request'] },
      { emoji: '📅', title: 'Availability Tracking', accentColor: 'bg-purple-50', points: ['Check date-wise availability', 'Avoid booking conflicts', 'Manage concurrent bookings', 'Calendar view per vendor'] },
      { emoji: '⭐', title: 'Ratings & Reviews Monitoring', accentColor: 'bg-amber-50', points: ['Track customer feedback & stars', 'Highlight top performers', 'View assigned event bookings', 'Monitor service delivery status'] },
    ]}
  />
);

const CateringPage = () => (
  <CategoryPage
    emoji="🍽️" title="Catering"
    badge="South Indian, North Indian, Continental & Multi-Cuisine Wedding Caterers"
    gradient="from-orange-50 to-amber-50 border-orange-200"
    stats={[
      { label: 'Total Caterers', value: '54', icon: '🍽️', color: 'border-orange-400' },
      { label: 'Active', value: '41', icon: '✅', color: 'border-green-400' },
      { label: 'Pending Approval', value: '9', icon: '⏳', color: 'border-amber-400' },
      { label: 'Hygiene Certified', value: '38', icon: '🛡️', color: 'border-blue-400' },
    ]}
    vendors={[
      { id: 'CAT001', name: 'Royal Feast', specialization: 'Multi-Cuisine Buffet', location: 'Delhi', rating: 4.8, bookings: 112, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400', tagColor: 'bg-orange-50 text-orange-700' },
      { id: 'CAT002', name: 'Spice Garden', specialization: 'South Indian Cuisine', location: 'Chennai', rating: 4.6, bookings: 78, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-yellow-400 to-orange-400', tagColor: 'bg-yellow-50 text-yellow-700' },
      { id: 'CAT003', name: "Nawab's Kitchen", specialization: 'Mughal & North Indian', location: 'Lucknow', rating: 4.5, bookings: 54, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-red-400 to-orange-400', tagColor: 'bg-red-50 text-red-700' },
      { id: 'CAT004', name: 'Continental Bites', specialization: 'Continental & Fusion', location: 'Mumbai', rating: 4.3, bookings: 29, status: 'Pending', verified: false, avatarBg: 'bg-gradient-to-br from-amber-400 to-yellow-400', tagColor: 'bg-amber-50 text-amber-700' },
    ]}
    featureCards={[
      { emoji: '🍱', title: 'Menu & Package Management', accentColor: 'bg-orange-50', points: ['Veg / non-veg menu options', 'Buffet or plate service tracking', 'Customizable meal plans', 'Special dietary options'] },
      { emoji: '👥', title: 'Pricing & Guest Capacity', accentColor: 'bg-amber-50', points: ['Monitor per-plate pricing', 'Min. guest requirements', 'Max serving capacity per vendor', 'Bulk order discount tracking'] },
      { emoji: '🛡️', title: 'Quality & Hygiene Compliance', accentColor: 'bg-green-50', points: ['FSSAI certification check', 'Hygiene audit records', 'Food safety compliance', 'Health inspection reports'] },
      { emoji: '📋', title: 'Vendor Approval & Booking', accentColor: 'bg-blue-50', points: ['Verify licenses & certifications', 'Approve/reject registrations', 'View catering bookings', 'Track special requirements'] },
    ]}
  />
);

const WeddingHallsPage = () => (
  <CategoryPage
    emoji="🏛️" title="Wedding Halls"
    badge="Banquet Halls, Convention Centers, Outdoor Venues & Resort Venues"
    gradient="from-blue-50 to-cyan-50 border-blue-200"
    stats={[
      { label: 'Total Venues', value: '87', icon: '🏛️', color: 'border-blue-400' },
      { label: 'Active', value: '71', icon: '✅', color: 'border-green-400' },
      { label: 'Pending Approval', value: '11', icon: '⏳', color: 'border-amber-400' },
      { label: 'Premium Venues', value: '24', icon: '👑', color: 'border-purple-400' },
    ]}
    vendors={[
      { id: 'HAL001', name: 'Grand Palace Banquets', specialization: 'Banquet Hall (1500 pax)', location: 'Mumbai', rating: 4.9, bookings: 89, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-blue-400 to-cyan-400', tagColor: 'bg-blue-50 text-blue-700' },
      { id: 'HAL002', name: 'Lakeview Convention', specialization: 'Outdoor + Indoor Venue', location: 'Udaipur', rating: 4.8, bookings: 56, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-cyan-400 to-teal-400', tagColor: 'bg-cyan-50 text-cyan-700' },
      { id: 'HAL003', name: 'Heritage Mahal', specialization: 'Heritage Venue', location: 'Jaipur', rating: 4.7, bookings: 43, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-indigo-400 to-blue-400', tagColor: 'bg-indigo-50 text-indigo-700' },
      { id: 'HAL004', name: 'Serene Gardens', specialization: 'Garden / Outdoor', location: 'Pune', rating: 4.4, bookings: 27, status: 'Pending', verified: false, avatarBg: 'bg-gradient-to-br from-teal-400 to-green-400', tagColor: 'bg-teal-50 text-teal-700' },
    ]}
    featureCards={[
      { emoji: '🏟️', title: 'Capacity & Space Details', accentColor: 'bg-blue-50', points: ['Seating & floating capacity', 'Hall size & number of rooms', 'Parking & stage area info', 'Dining hall specifications'] },
      { emoji: '🏠', title: 'Amenities & Facilities', accentColor: 'bg-cyan-50', points: ['AC, power backup status', 'Decoration support available', 'Accommodation availability', 'Valet parking service'] },
      { emoji: '🖼️', title: 'Gallery & Pricing', accentColor: 'bg-indigo-50', points: ['Review venue images & videos', 'Per-day rental pricing', 'Package deals with services', 'Availability calendar view'] },
      { emoji: '📋', title: 'Approval & Booking Control', accentColor: 'bg-purple-50', points: ['Verify ownership documents', 'License & compliance check', 'Manage event bookings', 'Conflict detection alerts'] },
    ]}
  />
);

const EntertainmentPage = () => (
  <CategoryPage
    emoji="🎶" title="Entertainment & Events"
    badge="DJs, Live Bands, Emcees, Dancers, Musicians & Event Coordinators"
    gradient="from-violet-50 to-purple-50 border-violet-200"
    stats={[
      { label: 'Total Entertainers', value: '42', icon: '🎶', color: 'border-violet-400' },
      { label: 'Active', value: '33', icon: '✅', color: 'border-green-400' },
      { label: 'Pending Approval', value: '6', icon: '⏳', color: 'border-amber-400' },
      { label: 'Featured Artists', value: '12', icon: '🌟', color: 'border-purple-400' },
    ]}
    vendors={[
      { id: 'ENT001', name: 'DJ Rhythm Pro', specialization: 'DJ & Sound Setup', location: 'Mumbai', rating: 4.9, bookings: 134, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-400', tagColor: 'bg-violet-50 text-violet-700' },
      { id: 'ENT002', name: 'Melody Live Band', specialization: 'Live Band & Singers', location: 'Delhi', rating: 4.7, bookings: 67, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-400', tagColor: 'bg-purple-50 text-purple-700' },
      { id: 'ENT003', name: 'StarHost Events', specialization: 'Emcee & Event Host', location: 'Bangalore', rating: 4.6, bookings: 89, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-fuchsia-400 to-violet-400', tagColor: 'bg-fuchsia-50 text-fuchsia-700' },
      { id: 'ENT004', name: 'Cultural Beats', specialization: 'Folk & Classical Dance', location: 'Chennai', rating: 4.4, bookings: 34, status: 'Pending', verified: false, avatarBg: 'bg-gradient-to-br from-pink-400 to-purple-400', tagColor: 'bg-pink-50 text-pink-700' },
    ]}
    featureCards={[
      { emoji: '🎬', title: 'Performance Portfolio', accentColor: 'bg-violet-50', points: ['Review video & audio samples', 'Past event highlights', 'Setlist & repertoire review', 'Stage presence assessment'] },
      { emoji: '🔊', title: 'Equipment & Setup Details', accentColor: 'bg-purple-50', points: ['Sound system specifications', 'Lighting & stage setup', 'Special effects equipment', 'Technical rider review'] },
      { emoji: '🗂️', title: 'Service Categories', accentColor: 'bg-fuchsia-50', points: ['DJ services & sound setups', 'Live band & vocal acts', 'Cultural & folk performances', 'Celebrity appearances'] },
      { emoji: '📅', title: 'Booking & Availability', accentColor: 'bg-pink-50', points: ['Date-wise availability check', 'Hourly or full-event booking', 'Custom entertainment plans', 'Conflict-free scheduling'] },
    ]}
  />
);

const DecorationsPage = () => (
  <CategoryPage
    emoji="🎊" title="Decorations"
    badge="Wedding Stage, Floral Décor, Mandap Setup, Reception Themes & Custom Concepts"
    gradient="from-purple-50 to-pink-50 border-purple-200"
    stats={[
      { label: 'Total Decorators', value: '48', icon: '🎊', color: 'border-purple-400' },
      { label: 'Active', value: '37', icon: '✅', color: 'border-green-400' },
      { label: 'Pending Approval', value: '7', icon: '⏳', color: 'border-amber-400' },
      { label: 'Theme Specialists', value: '19', icon: '🎨', color: 'border-pink-400' },
    ]}
    vendors={[
      { id: 'DEC001', name: 'Dream Decor Co.', specialization: 'Floral & Traditional', location: 'Bangalore', rating: 4.8, bookings: 94, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-400', tagColor: 'bg-purple-50 text-purple-700' },
      { id: 'DEC002', name: 'Royal Setups', specialization: 'Royal & Mandap Setup', location: 'Jaipur', rating: 4.7, bookings: 72, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-400', tagColor: 'bg-pink-50 text-pink-700' },
      { id: 'DEC003', name: 'Bloom & Blossom', specialization: 'Garden & Floral Themes', location: 'Mumbai', rating: 4.6, bookings: 58, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-rose-400 to-pink-400', tagColor: 'bg-rose-50 text-rose-700' },
      { id: 'DEC004', name: 'Modern Deco Hub', specialization: 'Contemporary & Fusion', location: 'Hyderabad', rating: 4.3, bookings: 31, status: 'Pending', verified: false, avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-400', tagColor: 'bg-violet-50 text-violet-700' },
    ]}
    featureCards={[
      { emoji: '🎨', title: 'Theme & Style Management', accentColor: 'bg-purple-50', points: ['Traditional & modern themes', 'Floral, royal, beach concepts', 'Custom-designed mandap themes', 'Reception & stage setups'] },
      { emoji: '🖼️', title: 'Portfolio & Gallery', accentColor: 'bg-pink-50', points: ['Images & videos of past events', 'Theme-wise categorization', 'Before & after comparisons', 'Assess creativity & quality'] },
      { emoji: '💰', title: 'Package & Pricing Details', accentColor: 'bg-rose-50', points: ['Pricing by event type', 'Venue size-based packages', 'Customization cost tracking', 'Material quality standards'] },
      { emoji: '✅', title: 'Quality Control & Approval', accentColor: 'bg-fuchsia-50', points: ['Design standards review', 'Timely setup verification', 'Vendor approval workflow', 'Performance-based status updates'] },
    ]}
  />
);

const InvitationsPage = () => (
  <CategoryPage
    emoji="🎁" title="Invitations & Gifting"
    badge="Printed Cards, Digital Invites, Return Gifts, Customized Hampers & Souvenirs"
    gradient="from-rose-50 to-pink-50 border-rose-200"
    stats={[
      { label: 'Total Vendors', value: '35', icon: '🎁', color: 'border-rose-400' },
      { label: 'Active', value: '27', icon: '✅', color: 'border-green-400' },
      { label: 'Pending Approval', value: '5', icon: '⏳', color: 'border-amber-400' },
      { label: 'Digital Invite Providers', value: '14', icon: '📱', color: 'border-blue-400' },
    ]}
    vendors={[
      { id: 'INV001', name: 'Artisan Cards Studio', specialization: 'Printed Invitations', location: 'Delhi', rating: 4.8, bookings: 78, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-rose-400 to-pink-400', tagColor: 'bg-rose-50 text-rose-700' },
      { id: 'INV002', name: 'DigiInvite Pro', specialization: 'Digital / E-Invitations', location: 'Bangalore', rating: 4.7, bookings: 145, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-pink-400 to-fuchsia-400', tagColor: 'bg-pink-50 text-pink-700' },
      { id: 'INV003', name: 'Gift Hamper World', specialization: 'Custom Gift Hampers', location: 'Mumbai', rating: 4.6, bookings: 62, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-amber-400 to-orange-400', tagColor: 'bg-amber-50 text-amber-700' },
      { id: 'INV004', name: 'Return Gifts Hub', specialization: 'Return Gifts & Souvenirs', location: 'Chennai', rating: 4.4, bookings: 39, status: 'Pending', verified: false, avatarBg: 'bg-gradient-to-br from-orange-400 to-red-400', tagColor: 'bg-orange-50 text-orange-700' },
    ]}
    featureCards={[
      { emoji: '🗂️', title: 'Service Categories', accentColor: 'bg-rose-50', points: ['Printed wedding invitations', 'Digital / E-invitations', 'Customized gift hampers', 'Return gifts & souvenirs'] },
      { emoji: '✏️', title: 'Customization Options', accentColor: 'bg-pink-50', points: ['Custom card designs & templates', 'Theme-based invitations', 'Branded packaging options', 'Tailored gift selections'] },
      { emoji: '📦', title: 'Order & Delivery Management', accentColor: 'bg-fuchsia-50', points: ['Track order processing', 'Production timeline monitoring', 'Delivery schedule tracking', 'Timely fulfillment assurance'] },
      { emoji: '🛡️', title: 'Quality Assurance', accentColor: 'bg-amber-50', points: ['Material & print quality check', 'Packaging standards review', 'Presentation assessment', 'Vendor verification process'] },
    ]}
  />
);

const BridalMakeupPage = () => (
  <CategoryPage
    emoji="💄" title="Groom & Bridal Styling"
    badge="Bridal Makeup, Groom Styling, Hairstyling, Saree Draping & Pre-Wedding Looks"
    gradient="from-amber-50 to-yellow-50 border-amber-200"
    stats={[
      { label: 'Total Stylists', value: '39', icon: '💄', color: 'border-amber-400' },
      { label: 'Active', value: '31', icon: '✅', color: 'border-green-400' },
      { label: 'Pending Approval', value: '5', icon: '⏳', color: 'border-yellow-400' },
      { label: 'Certified Artists', value: '24', icon: '🏅', color: 'border-pink-400' },
    ]}
    vendors={[
      { id: 'BRI001', name: 'Glam Bridal Studio', specialization: 'Bridal Makeup & Hair', location: 'Mumbai', rating: 4.9, bookings: 203, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-amber-400 to-yellow-400', tagColor: 'bg-amber-50 text-amber-700' },
      { id: 'BRI002', name: 'Groom Style Co.', specialization: 'Groom Grooming & Styling', location: 'Delhi', rating: 4.7, bookings: 98, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-yellow-400 to-amber-400', tagColor: 'bg-yellow-50 text-yellow-700' },
      { id: 'BRI003', name: 'Saree Drape Masters', specialization: 'Saree Draping & Dressing', location: 'Chennai', rating: 4.6, bookings: 71, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400', tagColor: 'bg-orange-50 text-orange-700' },
      { id: 'BRI004', name: 'Pre-Wed Looks Studio', specialization: 'Pre-Wedding Styling', location: 'Bangalore', rating: 4.5, bookings: 48, status: 'Pending', verified: false, avatarBg: 'bg-gradient-to-br from-pink-400 to-amber-400', tagColor: 'bg-pink-50 text-pink-700' },
    ]}
    featureCards={[
      { emoji: '🗂️', title: 'Service Categories', accentColor: 'bg-amber-50', points: ['Bridal makeup & hair styling', 'Groom grooming & styling', 'Pre-wedding look packages', 'Saree draping & dressing assistance'] },
      { emoji: '🖼️', title: 'Portfolio & Gallery', accentColor: 'bg-yellow-50', points: ['Before & after photo review', 'Wedding day look samples', 'Style & technique assessment', 'Video portfolio review'] },
      { emoji: '💄', title: 'Products & Brand Details', accentColor: 'bg-orange-50', points: ['Premium cosmetics used', 'Brand compliance monitoring', 'Skin-safe product assurance', 'Customer preference matching'] },
      { emoji: '📦', title: 'Packages & Scheduling', accentColor: 'bg-pink-50', points: ['Engagement & wedding packages', 'Reception look add-ons', 'Complete bridal packages', 'Appointment & date scheduling'] },
    ]}
  />
);

const InvestigationsPage = () => (
  <CategoryPage
    emoji="🔍" title="Pre Matrimonial Investigations"
    badge="Background Checks, Employment Verification, Family Checks & Pre-Matrimonial Investigations"
    gradient="from-slate-50 to-gray-50 border-slate-200"
    stats={[
      { label: 'Registered Agencies', value: '18', icon: '🔍', color: 'border-slate-400' },
      { label: 'Active', value: '14', icon: '✅', color: 'border-green-400' },
      { label: 'Cases In Progress', value: '23', icon: '🔄', color: 'border-amber-400' },
      { label: 'Completed Cases', value: '312', icon: '📋', color: 'border-blue-400' },
    ]}
    vendors={[
      { id: 'INQ001', name: 'TruthGuard Detectives', specialization: 'Full Background Verification', location: 'Mumbai', rating: 4.9, bookings: 87, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-slate-500 to-gray-600', tagColor: 'bg-slate-50 text-slate-700' },
      { id: 'INQ002', name: 'Shield Investigations', specialization: 'Employment & Income Check', location: 'Delhi', rating: 4.7, bookings: 64, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-gray-500 to-slate-500', tagColor: 'bg-gray-100 text-gray-700' },
      { id: 'INQ003', name: 'Family Verify Bureau', specialization: 'Family Background Checks', location: 'Chennai', rating: 4.6, bookings: 52, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-zinc-500 to-gray-500', tagColor: 'bg-zinc-50 text-zinc-700' },
      { id: 'INQ004', name: 'SafeMatch Inquiry', specialization: 'Lifestyle & Social Assessment', location: 'Bangalore', rating: 4.5, bookings: 38, status: 'Pending', verified: false, avatarBg: 'bg-gradient-to-br from-neutral-500 to-slate-500', tagColor: 'bg-neutral-100 text-neutral-700' },
    ]}
    featureCards={[
      { emoji: '🗂️', title: 'Service Categories', accentColor: 'bg-slate-50', points: ['Personal background verification', 'Employment & income check', 'Family background checks', 'Lifestyle & social behaviour assessment'] },
      { emoji: '🔒', title: 'Confidential Case Handling', accentColor: 'bg-gray-100', points: ['Secure report access controls', 'Restricted data sharing', 'Encrypted case files', 'Privacy-first procedures'] },
      { emoji: '📋', title: 'Case Status Tracking', accentColor: 'bg-zinc-50', points: ['Requested → In Progress → Done', 'Admin review before delivery', 'Real-time status updates', 'Case closure documentation'] },
      { emoji: '⚖️', title: 'Legal & Privacy Compliance', accentColor: 'bg-neutral-100', points: ['Legal registration verification', 'User consent confirmation', 'Data protection law compliance', 'Agency credibility & license audit'] },
    ]}
  />
);

// ─── CATEGORY ROUTER ─────────────────────────────────────
const CATEGORY_PAGES = {
  'Photography': PhotographyPage,
  'Catering': CateringPage,
  'Wedding Halls': WeddingHallsPage,
  'Entertainment & Events': EntertainmentPage,
  'Decorations': DecorationsPage,
  'Invitations & Gifting': InvitationsPage,
  'Groom & Bridal Styling': BridalMakeupPage,
  'Pre Matrimonial Investigations': InvestigationsPage,
};

// ─── CUSTOMER SECTIONS ────────────────────────────────────
const sampleCustomers = [
  { id: 'CUS001', name: 'Aarav Patel', email: 'aarav.patel@email.com', phone: '+91 98765 43210', location: 'Mumbai', registered: '12 Jan 2024', status: 'Active', verified: true, bookings: 3 },
  { id: 'CUS002', name: 'Ishita Reddy', email: 'ishita.reddy@email.com', phone: '+91 87654 32109', location: 'Delhi', registered: '28 Feb 2024', status: 'Active', verified: true, bookings: 1 },
  { id: 'CUS003', name: 'Rohan Deshmukh', email: 'rohan.deshmukh@email.com', phone: '+91 76543 21098', location: 'Chennai', registered: '5 Mar 2024', status: 'Pending', verified: false, bookings: 0 },
  { id: 'CUS004', name: 'Neha Gupta', email: 'neha.gupta@email.com', phone: '+91 65432 10987', location: 'Bangalore', registered: '19 Mar 2024', status: 'Blocked', verified: true, bookings: 5 },
  { id: 'CUS005', name: 'Vikram Singh', email: 'vikram.singh@email.com', phone: '+91 54321 09876', location: 'Pune', registered: '2 Apr 2024', status: 'Active', verified: true, bookings: 2 },
  { id: 'CUS006', name: 'Meera Nair', email: 'meera.nair@email.com', phone: '+91 43210 98765', location: 'Hyderabad', registered: '14 Apr 2024', status: 'Inactive', verified: false, bookings: 1 },
];

const sampleBookings = [
  { id: 'BK001', customer: 'Aarav Patel', service: 'Photography', vendor: 'LensArt Studio', bookingDate: '10 Jan 2024', eventDate: '15 Mar 2024', status: 'Completed', payment: 'Paid', amount: '₹45,000' },
  { id: 'BK002', customer: 'Ishita Reddy', service: 'Catering', vendor: 'Royal Feast', bookingDate: '20 Feb 2024', eventDate: '25 Apr 2024', status: 'Confirmed', payment: 'Partial', amount: '₹1,20,000' },
  { id: 'BK003', customer: 'Rohan Deshmukh', service: 'Decoration', vendor: 'Dream Decor', bookingDate: '1 Mar 2024', eventDate: '10 May 2024', status: 'Pending', payment: 'Pending', amount: '₹65,000' },
  { id: 'BK004', customer: 'Neha Gupta', service: 'Venue', vendor: 'Grand Palace', bookingDate: '5 Apr 2024', eventDate: '20 Jun 2024', status: 'In Progress', payment: 'Paid', amount: '₹3,50,000' },
  { id: 'BK005', customer: 'Vikram Singh', service: 'Makeup', vendor: 'Glam Studio', bookingDate: '12 Apr 2024', eventDate: '5 Jul 2024', status: 'Cancelled', payment: 'Refunded', amount: '₹18,000' },
];

const ViewAllCustomers = () => (
  <div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      {[{ label: 'Total Registered', value: '4,821', icon: '👥', color: 'border-blue-400' }, { label: 'Active Users', value: '4,102', icon: '✅', color: 'border-green-400' }, { label: 'Pending Verification', value: '384', icon: '⏳', color: 'border-amber-400' }, { label: 'Blocked Accounts', value: '335', icon: '🚫', color: 'border-red-400' }].map((s, i) => <StatCard key={i} {...s} />)}
    </div>
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-100">
        <SectionHeader icon={ICONS.customers} title="All Registered Customers" count="4,821 customers total" action={{ icon: ICONS.download, label: 'Export CSV' }} />
        <SearchBar placeholder="Search by name, email, phone or location..." />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead><tr className="bg-gray-50 border-b border-gray-100">{['Customer ID', 'Name', 'Contact', 'Location', 'Registered', 'Status', 'Verified', 'Bookings', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
          <tbody className="divide-y divide-gray-50">
            {sampleCustomers.map(c => (
              <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-xs font-mono text-gray-500">{c.id}</td>
                <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-400 to-amber-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">{c.name.split(' ').map(n => n[0]).join('')}</div><span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{c.name}</span></div></td>
                <td className="px-4 py-3"><div className="text-xs text-gray-600">{c.email}</div><div className="text-xs text-gray-400">{c.phone}</div></td>
                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{c.location}</td>
                <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{c.registered}</td>
                <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                <td className="px-4 py-3">{c.verified ? <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">✓ Verified</span> : <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">Unverified</span>}</td>
                <td className="px-4 py-3 text-xs font-bold text-gray-700 text-center">{c.bookings}</td>
                <td className="px-4 py-3"><div className="flex items-center gap-1.5"><button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button><button className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors"><Icon d={ICONS.edit} size={14} /></button><button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"><Icon d={ICONS.shield} size={14} /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
        <p className="text-xs text-gray-400">Showing 6 of 4,821 customers</p>
        <div className="flex items-center gap-1">{[1,2,3,'...',482].map((p, i) => <button key={i} className={`w-7 h-7 text-xs rounded-lg font-semibold ${p === 1 ? 'bg-red-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>{p}</button>)}</div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
      {[{ emoji: '🔍', title: 'Advanced Search & Filters', accentColor: 'bg-blue-50', points: ['Filter by name, mobile, email', 'Filter by location & date range', 'Filter by account status', 'Quick keyword search'] }, { emoji: '👤', title: 'Profile Access', accentColor: 'bg-purple-50', points: ['View personal info & preferences', 'Access full booking history', 'View activity & audit logs', 'Communication records'] }, { emoji: '🔒', title: 'Account Status Management', accentColor: 'bg-green-50', points: ['Activate or deactivate accounts', 'Block suspicious users', 'Policy-based enforcement', 'Reinstatement workflows'] }, { emoji: '📤', title: 'Export Data', accentColor: 'bg-amber-50', points: ['Download as CSV or Excel', 'Filter before export', 'Scheduled report exports', 'Analytics-ready format'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
    </div>
  </div>
);

const TrackBookingHistory = () => (
  <div>
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
      {[{ label: 'Total Bookings', value: '10,843', icon: '📋', color: 'border-blue-400' }, { label: 'Pending', value: '47', icon: '⏳', color: 'border-amber-400' }, { label: 'Confirmed', value: '312', icon: '✅', color: 'border-green-400' }, { label: 'In Progress', value: '845', icon: '🔄', color: 'border-purple-400' }, { label: 'Cancelled', value: '203', icon: '❌', color: 'border-red-400' }].map((s, i) => <StatCard key={i} {...s} />)}
    </div>
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-100">
        <SectionHeader icon={ICONS.booking} title="Complete Booking Overview" count="All customer bookings across all services" action={{ icon: ICONS.download, label: 'Export' }} />
        <SearchBar placeholder="Search by customer, vendor, service or booking ID..." />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead><tr className="bg-gray-50 border-b border-gray-100">{['Booking ID', 'Customer', 'Service', 'Vendor Assigned', 'Booking Date', 'Event Date', 'Status', 'Payment', 'Amount', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
          <tbody className="divide-y divide-gray-50">
            {sampleBookings.map(b => (
              <tr key={b.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-xs font-mono text-gray-500">{b.id}</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-700 whitespace-nowrap">{b.customer}</td>
                <td className="px-4 py-3"><span className="text-xs font-semibold bg-red-50 text-red-700 px-2 py-0.5 rounded-lg">{b.service}</span></td>
                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{b.vendor}</td>
                <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{b.bookingDate}</td>
                <td className="px-4 py-3 text-xs font-semibold text-gray-700 whitespace-nowrap">{b.eventDate}</td>
                <td className="px-4 py-3"><BookingBadge status={b.status} /></td>
                <td className="px-4 py-3"><PaymentBadge status={b.payment} /></td>
                <td className="px-4 py-3 text-xs font-bold text-gray-800 whitespace-nowrap">{b.amount}</td>
                <td className="px-4 py-3"><div className="flex items-center gap-1.5"><button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button><button className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors"><Icon d={ICONS.edit} size={14} /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
      {[{ emoji: '📍', title: 'Vendor Assignment Tracking', accentColor: 'bg-amber-50', points: ['See assigned vendor per booking', 'Track performance & delivery', 'Rate vendor post-completion', 'Switch vendor if needed'] }, { emoji: '💳', title: 'Payment & Transaction Info', accentColor: 'bg-green-50', points: ['Check paid/partial/pending status', 'View full transaction details', 'Track refund processing', 'Invoice access per booking'] }, { emoji: '🔄', title: 'Cancellation & Reschedule', accentColor: 'bg-red-50', points: ['Handle cancellation requests', 'Process reschedule requests', 'Manage refund workflows', 'Update booking records'] }, { emoji: '📅', title: 'Booking Timeline', accentColor: 'bg-blue-50', points: ['View creation timestamp', 'Track updates & changes', 'Confirmation milestones', 'Completion sign-off log'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
    </div>
  </div>
);

const ManageProfiles = () => (
  <div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {[{ label: 'Profiles Updated Today', value: '128', icon: '✏️', color: 'border-blue-400' }, { label: 'KYC Verified', value: '3,904', icon: '🛡️', color: 'border-green-400' }, { label: 'Pending Verification', value: '384', icon: '⏳', color: 'border-amber-400' }].map((s, i) => <StatCard key={i} {...s} />)}
    </div>
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">
      <div className="xl:col-span-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h4 className="font-bold text-gray-800 text-sm mb-4 flex items-center gap-2"><span className="w-6 h-6 rounded-lg bg-purple-50 flex items-center justify-center text-sm">👤</span>Customer Profile View</h4>
        <div className="flex flex-col items-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-amber-400 flex items-center justify-center text-white text-xl font-bold mb-2">AP</div>
          <p className="font-bold text-gray-800 text-sm">Aarav Patel</p>
          <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-1">✓ Verified</span>
        </div>
        <div className="space-y-2">{[{ label: 'Email', value: 'aarav.patel@email.com' }, { label: 'Phone', value: '+91 98765 43210' }, { label: 'Location', value: 'Mumbai, Maharashtra' }, { label: 'Registered', value: '12 Jan 2024' }, { label: 'Total Bookings', value: '3 bookings' }].map((f, i) => <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-50"><span className="text-xs text-gray-400">{f.label}</span><span className="text-xs font-semibold text-gray-700">{f.value}</span></div>)}</div>
        <button className="w-full mt-4 py-2 bg-red-600 text-white text-xs font-semibold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-1.5"><Icon d={ICONS.edit} size={13} /> Edit Profile</button>
      </div>
      <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h4 className="font-bold text-gray-800 text-sm mb-4 flex items-center gap-2"><span className="w-6 h-6 rounded-lg bg-amber-50 flex items-center justify-center text-sm">⚙️</span>Preference Management</h4>
        <div className="grid grid-cols-2 gap-4">{[{ label: 'Preferred Services', value: 'Photography, Catering, Decoration', icon: '💍' }, { label: 'Budget Range', value: '₹5,00,000 – ₹10,00,000', icon: '💰' }, { label: 'Event Date', value: 'March 2025', icon: '📅' }, { label: 'Location Preference', value: 'Mumbai & Nearby', icon: '📍' }, { label: 'Style / Theme', value: 'Traditional with Modern Touches', icon: '🎨' }, { label: 'Guest Count', value: '300 – 500 guests', icon: '👥' }].map((p, i) => <div key={i} className="bg-gray-50 rounded-xl p-3"><div className="flex items-center gap-2 mb-1"><span className="text-sm">{p.icon}</span><span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{p.label}</span></div><p className="text-xs font-semibold text-gray-700">{p.value}</p></div>)}</div>
        <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-100"><p className="text-xs font-bold text-blue-700 mb-1">🔒 Privacy & Data Control</p><p className="text-xs text-blue-600">Customer data is encrypted and handled per platform privacy policy. Profile visibility and data sharing controls are managed per user consent.</p></div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {[{ emoji: '✏️', title: 'Edit & Update Information', accentColor: 'bg-blue-50', points: ['Modify names & contact info', 'Update location details', 'Change profile photo', 'Correct verification records'] }, { emoji: '🎯', title: 'Personalization Settings', accentColor: 'bg-purple-50', points: ['Tailor vendor recommendations', 'Match budget-based suggestions', 'Date & location-aware results', 'Style preference matching'] }, { emoji: '🛡️', title: 'Verification Status', accentColor: 'bg-green-50', points: ['Mobile OTP verification', 'KYC / ID proof status', 'Flag unverified accounts', 'Trigger re-verification'] }, { emoji: '📊', title: 'Activity Tracking', accentColor: 'bg-amber-50', points: ['Profile update history', 'Preference change logs', 'Admin action audit trail', 'Transparency reporting'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
    </div>
  </div>
);

const HandleComplaints = () => (
  <div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      {[{ label: 'Open Tickets', value: '47', icon: '🎫', color: 'border-red-400' }, { label: 'In Progress', value: '23', icon: '🔄', color: 'border-amber-400' }, { label: 'Resolved Today', value: '18', icon: '✅', color: 'border-green-400' }, { label: 'Escalated', value: '5', icon: '⚠️', color: 'border-purple-400' }].map((s, i) => <StatCard key={i} {...s} />)}
    </div>
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div className="p-5 border-b border-gray-100"><SectionHeader icon={ICONS.complaints} title="Support Ticket Management" count="All active and resolved tickets" /><SearchBar placeholder="Search tickets by ID, customer name or issue type..." /></div>
      <div className="divide-y divide-gray-50">
        {[{ id: 'TKT001', customer: 'Aarav Patel', issue: 'Vendor no-show on event day', type: 'Booking', status: 'Open', priority: 'High', created: '2 hrs ago' }, { id: 'TKT002', customer: 'Ishita Reddy', issue: 'Payment deducted but booking not confirmed', type: 'Payment', status: 'In Progress', priority: 'Critical', created: '5 hrs ago' }, { id: 'TKT003', customer: 'Rohan Deshmukh', issue: 'Decoration quality below expectations', type: 'Vendor', status: 'Resolved', priority: 'Medium', created: '1 day ago' }, { id: 'TKT004', customer: 'Meera Nair', issue: 'Cannot update profile photo', type: 'Platform', status: 'Open', priority: 'Low', created: '2 days ago' }, { id: 'TKT005', customer: 'Neha Gupta', issue: 'Refund not received after cancellation', type: 'Payment', status: 'Escalated', priority: 'Critical', created: '3 days ago' }].map(t => {
          const pColor = { High: 'text-amber-600 bg-amber-50', Critical: 'text-red-600 bg-red-50', Medium: 'text-blue-600 bg-blue-50', Low: 'text-gray-500 bg-gray-50' };
          const sColor = { Open: 'text-red-700 bg-red-50 border-red-200', 'In Progress': 'text-purple-700 bg-purple-50 border-purple-200', Resolved: 'text-green-700 bg-green-50 border-green-200', Escalated: 'text-amber-700 bg-amber-50 border-amber-200' };
          return (
            <div key={t.id} className="px-5 py-4 hover:bg-gray-50 transition-colors flex items-center gap-4">
              <span className="text-xs font-mono text-gray-400 flex-shrink-0">{t.id}</span>
              <div className="flex-1 min-w-0"><p className="text-sm font-semibold text-gray-800">{t.issue}</p><div className="flex items-center gap-2 mt-0.5"><span className="text-xs text-gray-400">{t.customer}</span><span className="text-gray-300">·</span><span className="text-xs text-gray-400">{t.type}</span><span className="text-gray-300">·</span><span className="text-xs text-gray-400">{t.created}</span></div></div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${pColor[t.priority]}`}>{t.priority}</span>
              <span className={`text-[11px] font-semibold border px-2.5 py-0.5 rounded-full ${sColor[t.status]}`}>{t.status}</span>
              <div className="flex items-center gap-1.5 flex-shrink-0"><button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button><button className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors"><Icon d={ICONS.edit} size={14} /></button></div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {[{ emoji: '⚖️', title: 'Dispute Management', accentColor: 'bg-red-50', points: ['Customer vs vendor conflicts', 'Evidence review & logs', 'Fair resolution enforcement', 'Outcome documentation'] }, { emoji: '🔍', title: 'Compliance Monitoring', accentColor: 'bg-blue-50', points: ['Policy violation detection', 'Terms of service enforcement', 'User behaviour audits', 'Blacklist management'] }, { emoji: '🛡️', title: 'KYC & Verification Checks', accentColor: 'bg-green-50', points: ['OTP & ID proof review', 'Fake account detection', 'Document authenticity check', 'Re-verification triggers'] }, { emoji: '🚨', title: 'Escalation Handling', accentColor: 'bg-purple-50', points: ['Route to senior admins', 'Priority flagging system', 'SLA breach monitoring', 'Management notifications'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
    </div>
  </div>
);

// ─── VENDOR OVERVIEW ─────────────────────────────────────
const VendorOverview = ({ onSelectCategory }) => (
  <div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      {[{ label: 'Total Vendors', value: '326', icon: '🏢', color: 'border-amber-400' }, { label: 'Pending Approval', value: '48', icon: '⏳', color: 'border-blue-400' }, { label: 'Verified Vendors', value: '241', icon: '✅', color: 'border-green-400' }, { label: 'Inactive / Suspended', value: '37', icon: '⛔', color: 'border-red-400' }].map((s, i) => <StatCard key={i} {...s} />)}
    </div>
    <p className="text-sm text-gray-500 mb-4">Click a category below or select from the sidebar to manage vendors by service type.</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 mb-6">
      {[
        { label: 'Photography', count: 67, icon: '📸', color: 'from-pink-50 to-red-50 border-pink-200' },
        { label: 'Catering', count: 54, icon: '🍽️', color: 'from-orange-50 to-amber-50 border-orange-200' },
        { label: 'Wedding Halls', count: 87, icon: '🏛️', color: 'from-blue-50 to-cyan-50 border-blue-200' },
        { label: 'Entertainment & Events', count: 42, icon: '🎶', color: 'from-violet-50 to-purple-50 border-violet-200' },
        { label: 'Decorations', count: 48, icon: '🎊', color: 'from-purple-50 to-pink-50 border-purple-200' },
        { label: 'Invitations & Gifting', count: 35, icon: '🎁', color: 'from-rose-50 to-pink-50 border-rose-200' },
        { label: 'Groom & Bridal Styling', count: 39, icon: '💄', color: 'from-amber-50 to-yellow-50 border-amber-200' },
        { label: 'Pre Matrimonial Investigations', count: 18, icon: '🔍', color: 'from-slate-50 to-gray-50 border-slate-200' },
      ].map((c, i) => (
        <div key={i} onClick={() => onSelectCategory(c.label)} className={`bg-gradient-to-br ${c.color} border rounded-2xl p-4 text-center cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5`}>
          <div className="text-2xl mb-1">{c.icon}</div>
          <p className="text-lg font-bold text-gray-800">{c.count}</p>
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider leading-tight">{c.label}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {[{ emoji: '📋', title: 'Vendor Approval Process', accentColor: 'bg-amber-50', points: ['Review new registrations', 'Approve or reject applications', 'Request additional documents', 'Send approval notifications'] }, { emoji: '✅', title: 'Verification & Compliance', accentColor: 'bg-green-50', points: ['Business license verification', 'GST details check', 'KYC document review', 'Assign verified badge'] }, { emoji: '📈', title: 'Performance Monitoring', accentColor: 'bg-blue-50', points: ['Track ratings & reviews', 'Monitor completed bookings', 'Customer feedback analysis', 'Performance improvement alerts'] }, { emoji: '⚙️', title: 'Availability & Service Control', accentColor: 'bg-purple-50', points: ['Enable or disable services', 'Manage vendor availability', 'Suspend underperforming vendors', 'Reactivate after review'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
    </div>
  </div>
);

// ─── MENU CONFIG ─────────────────────────────────────────
const vendorGroups = [
  { id: 'categories', emoji: '🏪', label: 'Manage Service Providers', children: ['Photography', 'Catering', 'Wedding Halls', 'Entertainment & Events', 'Decorations', 'Invitations & Gifting', 'Groom & Bridal Styling', 'Pre Matrimonial Investigations'] },
  { id: 'actions', emoji: '⚙️', label: 'Actions', children: ['Approve / Reject Vendor Registration', 'Verify Business Details', 'Manage Vendor Profiles', 'Activate / Deactivate Vendors'] },
  { id: 'verification', emoji: '✅', label: 'Vendor Verification', children: ['Verify: Business License', 'Verify: GST Details', 'Verify: ID Proof', 'Assign: ✅ Verified Vendor Badge'] },
];

const menuConfig = [
  { id: 'dashboard', label: 'Dashboard Overview', icon: ICONS.dashboard, color: 'text-red-600', submenus: [], vendorStyle: false },
  { id: 'customers', label: 'Customer Management', icon: ICONS.customers, color: 'text-blue-600', submenus: ['View All Registered Customers', 'Track Booking History', 'Manage Profiles & Preferences', 'Handle Complaints & Support Issues'], vendorStyle: false },
  { id: 'vendors', label: 'Vendor Management', icon: ICONS.vendors, color: 'text-amber-600', submenus: [], vendorStyle: true },
  { id: 'bookings', label: 'Booking Management', icon: ICONS.booking, color: 'text-green-600', submenus: ['View all bookings', 'Track: Date, Time, Location', 'Track: Vendor Assigned', 'Status: Pending', 'Status: Confirmed', 'Status: Completed', 'Status: Cancelled'], vendorStyle: false },
  { id: 'payments', label: 'Payments & Transactions', icon: ICONS.payments, color: 'text-purple-600', submenus: ['Track Customer Payments', 'Vendor Payouts', 'Payment Integration', 'Generate Invoices', 'Refund Management'], vendorStyle: false },
  { id: 'complaints', label: 'Complaints & Disputes', icon: ICONS.complaints, color: 'text-rose-600', submenus: ['Customer Complaints', 'Vendor Disputes', 'Resolution Tracking', 'Admin Actions'], vendorStyle: false },
  { id: 'analytics', label: 'Analytics & Reports', icon: ICONS.analytics, color: 'text-cyan-600', submenus: ['Revenue Reports', 'Vendor Performance', 'Booking Trends', 'Customer Growth'], vendorStyle: false },
  { id: 'roles', label: 'Admin Roles', icon: ICONS.roles, color: 'text-indigo-600', submenus: ['Super Admin', 'Operations Manager', 'Finance Manager', 'Support Team'], vendorStyle: false },
  { id: 'notifications', label: 'Notifications', icon: ICONS.notifications, color: 'text-orange-500', submenus: ['Booking Alerts', 'Payment Updates', 'Vendor Approvals', 'Customer Inquiries'], vendorStyle: false },
  { id: 'settings', label: 'Settings', icon: ICONS.settings, color: 'text-gray-600', submenus: ['Platform Configuration', 'API Integrations', 'Terms & Privacy Policy', 'Notification Settings'], vendorStyle: false },
];

const dashboardStats = [
  { label: 'Total Customers', value: '4,821', icon: '👥', color: 'border-red-500', sub: '+128 this month' },
  { label: 'Total Vendors', value: '326', icon: '🏢', color: 'border-amber-500', sub: '48 pending approval' },
  { label: 'Active Bookings', value: '1,204', icon: '📅', color: 'border-green-500', sub: 'In progress' },
  { label: 'Completed Events', value: '8,432', icon: '✅', color: 'border-blue-500', sub: 'All time' },
  { label: 'Revenue Summary', value: '₹28,45,000', icon: '💰', color: 'border-purple-500', sub: '+12% vs last month' },
  { label: 'Pending Requests', value: '47', icon: '⏳', color: 'border-rose-500', sub: 'Needs review' },
];

// ─── RIGHT PANEL ──────────────────────────────────────────
const RightPanel = ({ activeMenu, activeSubmenu, onSelectCategory }) => {
  const menu = menuConfig.find(m => m.id === activeMenu);
  if (activeMenu === 'dashboard') return <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">{dashboardStats.map((s, i) => <StatCard key={i} {...s} />)}</div>;
  if (activeMenu === 'customers') {
    if (activeSubmenu === 'View All Registered Customers') return <ViewAllCustomers />;
    if (activeSubmenu === 'Track Booking History') return <TrackBookingHistory />;
    if (activeSubmenu === 'Manage Profiles & Preferences') return <ManageProfiles />;
    if (activeSubmenu === 'Handle Complaints & Support Issues') return <HandleComplaints />;
  }
  if (activeMenu === 'vendors') {
    const Page = CATEGORY_PAGES[activeSubmenu];
    if (Page) return <Page />;
    return <VendorOverview onSelectCategory={onSelectCategory} />;
  }
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-64 flex flex-col items-center justify-center text-center">
      <div className="text-5xl mb-4">🚧</div>
      <h3 className="text-xl font-bold text-gray-700 mb-2">{menu?.label}</h3>
      {activeSubmenu ? <div className="mt-3"><span className="inline-block bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-2 text-sm font-semibold">{activeSubmenu}</span><p className="text-gray-400 text-sm mt-3">Content for this section will be updated soon.</p></div> : <p className="text-gray-400 text-sm">Select a sub-menu from the left sidebar to get started.</p>}
    </div>
  );
};

// ─── VENDOR SUBMENUS ─────────────────────────────────────
const VendorSubmenus = ({ activeSubmenu, activeMenu, onSelect }) => (
  <div className="ml-4 mt-0.5 mb-1 border-l-2 border-gray-100 pl-3 space-y-1">
    {vendorGroups.map((group) => (
      <div key={group.id}>
        <div className="flex items-center gap-1.5 px-2 py-1.5 mt-1 rounded-lg" style={{ background: 'linear-gradient(90deg, #fef9ec 0%, #fffdf7 100%)', border: '1px solid #f5d97a' }}>
          <span style={{ fontSize: 13 }}>{group.emoji}</span>
          <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#b8860b' }}>{group.label}</span>
        </div>
        <div className="ml-2 mt-0.5 space-y-0.5">
          {group.children.map((child, idx) => {
            const isActiveSub = activeSubmenu === child && activeMenu === 'vendors';
            return <button key={idx} onClick={() => onSelect('vendors', child)} className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all duration-150 ${isActiveSub ? 'bg-red-600 text-white font-semibold' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>{child}</button>;
          })}
        </div>
      </div>
    ))}
  </div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [expandedMenus, setExpandedMenus] = useState({ dashboard: true });
  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const toggleMenu = (id) => { setExpandedMenus(prev => ({ ...prev, [id]: !prev[id] })); setActiveMenu(id); setActiveSubmenu(null); };
  const handleSubmenu = (menuId, sub) => { setActiveMenu(menuId); setActiveSubmenu(sub); };
  const handleSelectCategory = (label) => { setActiveMenu('vendors'); setActiveSubmenu(label); };
  const activeMenuLabel = menuConfig.find(m => m.id === activeMenu)?.label || 'Dashboard Overview';

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      <aside className={`${sidebarOpen ? 'w-72' : 'w-0 lg:w-16'} flex-shrink-0 bg-white border-r border-gray-100 shadow-sm flex flex-col transition-all duration-300 overflow-hidden z-30`}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
          {sidebarOpen && <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center flex-shrink-0"><span className="text-white text-xs font-bold">A</span></div><div><p className="text-xs font-bold text-red-600 uppercase tracking-wider leading-tight">Admin Panel</p><p className="text-[10px] text-gray-400 leading-tight">Wedding Services</p></div></div>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 flex-shrink-0"><Icon d={sidebarOpen ? ICONS.close : ICONS.menu} size={18} /></button>
        </div>
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
          {menuConfig.map((item) => {
            const isActive = activeMenu === item.id;
            const isExpanded = expandedMenus[item.id];
            const hasSubmenus = item.submenus.length > 0 || item.vendorStyle;
            return (
              <div key={item.id}>
                <button onClick={() => toggleMenu(item.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group ${isActive ? 'bg-gradient-to-r from-red-50 to-amber-50 border border-red-100' : 'hover:bg-gray-50'}`}>
                  <span className={`flex-shrink-0 ${isActive ? item.color : 'text-gray-400 group-hover:text-gray-600'}`}><Icon d={item.icon} size={18} /></span>
                  {sidebarOpen && <><span className={`flex-1 text-sm font-semibold truncate ${isActive ? 'text-gray-800' : 'text-gray-600'}`}>{item.label}</span>{hasSubmenus && <span className={`text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}><Icon d={ICONS.chevronDown} size={14} /></span>}</>}
                </button>
                {sidebarOpen && isExpanded && (item.vendorStyle
                  ? <VendorSubmenus activeSubmenu={activeSubmenu} activeMenu={activeMenu} onSelect={handleSubmenu} />
                  : item.submenus.length > 0 && <div className="ml-4 mt-0.5 mb-1 space-y-0.5 border-l-2 border-gray-100 pl-3">{item.submenus.map((sub, idx) => { const isActiveSub = activeSubmenu === sub && activeMenu === item.id; return <button key={idx} onClick={() => handleSubmenu(item.id, sub)} className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all duration-150 ${isActiveSub ? 'bg-red-600 text-white font-semibold' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>{sub}</button>; })}</div>
                )}
              </div>
            );
          })}
        </nav>
        {sidebarOpen && <div className="px-4 py-3 border-t border-gray-100 flex-shrink-0"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">A</div><div className="flex-1 min-w-0"><p className="text-xs font-bold text-gray-700 truncate">Admin User</p><p className="text-[10px] text-gray-400">SUPER ADMIN</p></div></div></div>}
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 mr-1" onClick={() => setSidebarOpen(!sidebarOpen)}><Icon d={ICONS.menu} size={20} /></button>
            <div><h1 className="text-lg font-bold text-gray-800">ADMIN PANEL – WEDDING SERVICES</h1><p className="text-xs text-gray-400">{today}</p></div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors"><Icon d={ICONS.bell} size={20} /><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span></button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm"><Icon d={ICONS.logout} size={16} />Logout</button>
          </div>
        </header>
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="font-semibold text-red-600">Admin</span>
            <Icon d={ICONS.chevronRight} size={12} />
            <span className={`font-semibold ${activeSubmenu ? 'text-gray-500' : 'text-gray-700'}`}>{activeMenuLabel}</span>
            {activeSubmenu && <><Icon d={ICONS.chevronRight} size={12} /><span className="font-semibold text-gray-700">{activeSubmenu}</span></>}
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">{activeSubmenu || activeMenuLabel}</h2>
            {activeMenu === 'dashboard' && <p className="text-sm text-gray-400 mt-0.5">Welcome back, Admin. Here's what's happening today.</p>}
          </div>
          <RightPanel activeMenu={activeMenu} activeSubmenu={activeSubmenu} onSelectCategory={handleSelectCategory} />
        </main>
      </div>

      <style>{`* { box-sizing: border-box; } body { margin: 0; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #f9fafb; } ::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; } ::-webkit-scrollbar-thumb:hover { background: #d1d5db; }`}</style>
    </div>
  );
}