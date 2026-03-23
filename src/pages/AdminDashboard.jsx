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
  check: 'M5 13l4 4L19 7',
  x: 'M6 18L18 6M6 6l12 12',
  document: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  refresh: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  alert: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  toggle: 'M8 9l4-4 4 4m0 6l-4 4-4-4',
  ban: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
  userCheck: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
};

// ─── SHARED COMPONENTS ───────────────────────────────────

const StatCard = ({ label, value, color, icon, sub, onClick }) => (
  <div onClick={onClick} className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${color} hover:shadow-md transition-all duration-200 ${onClick ? 'cursor-pointer hover:-translate-y-0.5' : ''}`}>
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

const VerificationBadge = ({ status }) => {
  const map = {
    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
    'Under Review': 'bg-blue-50 text-blue-700 border-blue-200',
    Verified: 'bg-green-50 text-green-700 border-green-200',
    Rejected: 'bg-red-50 text-red-700 border-red-200',
    Expired: 'bg-orange-50 text-orange-700 border-orange-200',
    Invalid: 'bg-red-50 text-red-600 border-red-200',
    Approved: 'bg-green-50 text-green-700 border-green-200',
  };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${map[status] || 'bg-gray-50 text-gray-500 border-gray-200'}`}>{status}</span>;
};

const SectionHeader = ({ icon, title, count, action }) => (
  <div className="flex items-center justify-between mb-5">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={icon} size={18} /></div>
      <div><h3 className="font-bold text-gray-800 text-base">{title}</h3>{count && <p className="text-xs text-gray-400">{count}</p>}</div>
    </div>
    {action && (
      <button onClick={() => alert(`${action.label}: Preparing export...`)} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors">
        <Icon d={action.icon} size={13} />{action.label}
      </button>
    )}
  </div>
);

const SearchBar = ({ placeholder, onFilter, onExport }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="flex-1 relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
      <input type="text" placeholder={placeholder} className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" />
    </div>
    <button onClick={onFilter || (() => alert('Filter panel opened'))} className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors"><Icon d={ICONS.filter} size={14} />Filters</button>
    <button onClick={onExport || (() => alert('Exporting data...'))} className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors"><Icon d={ICONS.download} size={14} />Export</button>
  </div>
);

// ─── UPDATED VENDOR TABLE WITH FILTERING ─────────────────────────────────────────
const VendorTable = ({ vendors, title, count, activeFilter = 'All', onFilter, filterOptions = [] }) => {
  const [search, setSearch] = useState('');
  const [localFilter, setLocalFilter] = useState(activeFilter);
  
  const currentFilter = activeFilter !== undefined ? activeFilter : localFilter;
  
  const handleFilterChange = (filter) => {
    setLocalFilter(filter);
    if (onFilter) onFilter(filter);
  };
  
  const filteredVendors = vendors.filter(v => {
    let matchStatus = true;
    if (currentFilter === 'Active') {
      matchStatus = v.status === 'Active';
    } else if (currentFilter === 'Pending') {
      matchStatus = v.status === 'Pending';
    } else if (currentFilter === 'Top Rated') {
      matchStatus = v.rating >= 4.5;
    } else if (currentFilter === 'Verified') {
      matchStatus = v.verified === true;
    } else if (currentFilter === 'Inactive') {
      matchStatus = v.status === 'Inactive';
    } else if (currentFilter === 'Suspended') {
      matchStatus = v.status === 'Suspended';
    } else if (currentFilter === 'Under Review') {
      matchStatus = v.status === 'Under Review';
    } else if (currentFilter === 'Rejected') {
      matchStatus = v.status === 'Rejected';
    }
    
    const matchSearch = !search || 
      v.name?.toLowerCase().includes(search.toLowerCase()) || 
      v.location?.toLowerCase().includes(search.toLowerCase()) ||
      v.specialization?.toLowerCase().includes(search.toLowerCase()) ||
      v.category?.toLowerCase().includes(search.toLowerCase()) ||
      v.owner?.toLowerCase().includes(search.toLowerCase());
    
    return matchStatus && matchSearch;
  });

  const filterButtons = filterOptions.length > 0 ? filterOptions : ['All', 'Active', 'Pending', 'Top Rated', 'Verified'];
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div className="p-5 border-b border-gray-100">
        <SectionHeader icon={ICONS.vendors} title={title} count={count} action={{ icon: ICONS.download, label: 'Export' }} />
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
            <input 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              type="text" 
              placeholder="Search by name, location, category or status..." 
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            <Icon d={ICONS.filter} size={14} />Advanced
          </button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {filterButtons.map(f => (
            <button 
              key={f} 
              onClick={() => handleFilterChange(f)} 
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${currentFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              {f}
            </button>
          ))}
        </div>
        {currentFilter !== 'All' && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-gray-500">Filtered by:</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-700 text-xs font-semibold rounded-full">
              {currentFilter}
              {onFilter && (
                <button onClick={() => handleFilterChange('All')} className="ml-1 hover:text-red-900">✕</button>
              )}
            </span>
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {['Vendor ID', 'Business Name', 'Category/Specialization', 'Location', 'Rating', 'Bookings', 'Status', 'Verified', 'Actions'].map(h => (
                <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
              ))}
             </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredVendors.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-10 text-center text-sm text-gray-400">
                  No vendors found for "{currentFilter}" filter.
                </td>
              </tr>
            ) : (
              filteredVendors.map(v => (
                <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-xs font-mono text-gray-500">{v.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg ${v.avatarBg || 'bg-gradient-to-br from-gray-400 to-gray-500'} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{v.name?.[0] || 'V'}</div>
                      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{v.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3"><span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${v.tagColor || 'bg-gray-50 text-gray-700'}`}>{v.specialization || v.category}</span></td>
                  <td className="px-4 py-3 text-xs text-gray-600">{v.location}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-1"><span className="text-amber-400 text-sm">★</span><span className="text-xs font-bold text-gray-700">{v.rating || 'N/A'}</span></div></td>
                  <td className="px-4 py-3 text-xs font-bold text-gray-700 text-center">{v.bookings || 0}</td>
                  <td className="px-4 py-3"><StatusBadge status={v.status} /></td>
                  <td className="px-4 py-3">{v.verified ? <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">✅ Verified</span> : <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">Pending</span>}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => alert(`Viewing: ${v.name}`)} className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors" title="View"><Icon d={ICONS.eye} size={14} /></button>
                      <button onClick={() => alert(`Editing: ${v.name}`)} className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors" title="Edit"><Icon d={ICONS.edit} size={14} /></button>
                      <button onClick={() => alert(`Verifying: ${v.name}`)} className="p-1.5 rounded-lg hover:bg-green-50 text-green-500 transition-colors" title="Verify"><Icon d={ICONS.shield} size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ─── UPDATED CATEGORY PAGE BUILDER WITH FILTERING ────────────────────────────────
const CategoryPage = ({ emoji, title, badge, gradient, stats, vendors, featureCards }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const handleFilter = (filterValue) => {
    setActiveFilter(filterValue);
  };
  
  const filteredVendors = vendors.filter(v => {
    let matchFilter = true;
    if (activeFilter === 'Active') {
      matchFilter = v.status === 'Active';
    } else if (activeFilter === 'Pending') {
      matchFilter = v.status === 'Pending';
    } else if (activeFilter === 'Top Rated') {
      matchFilter = v.rating >= 4.5;
    } else if (activeFilter === 'Verified') {
      matchFilter = v.verified === true;
    }
    return matchFilter;
  });
  
  const enhancedStats = stats.map(stat => {
    let filterValue = 'All';
    if (stat.label === 'Active') filterValue = 'Active';
    else if (stat.label === 'Pending Approval') filterValue = 'Pending';
    else if (stat.label === 'Top Rated (4.5+)') filterValue = 'Top Rated';
    else if (stat.label === 'Verified') filterValue = 'Verified';
    return {
      ...stat,
      filterValue,
      onClick: () => handleFilter(filterValue)
    };
  });
  
  return (
    <div>
      <div className={`rounded-2xl p-5 mb-6 bg-gradient-to-r ${gradient} border`}>
        <div className="flex items-center gap-4">
          <div className="text-4xl">{emoji}</div>
          <div><h3 className="text-lg font-bold text-gray-800">{title}</h3><p className="text-sm text-gray-500 mt-0.5">{badge}</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {enhancedStats.map((s, i) => (
          <div 
            key={i} 
            onClick={s.onClick}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filterValue ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filterValue && (
                  <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>
                )}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <VendorTable 
        vendors={filteredVendors} 
        title={`All ${title} Vendors`} 
        count={`${filteredVendors.length} vendors shown`}
        activeFilter={activeFilter}
        onFilter={setActiveFilter}
        filterOptions={['All', 'Active', 'Pending', 'Top Rated', 'Verified']}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">{featureCards.map((c, i) => <FeatureCard key={i} {...c} />)}</div>
    </div>
  );
};

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

// ─── UPDATED APPROVE VENDOR REGISTRATION WITH FILTERING ───────────────────────────
const ApproveVendorRegistration = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const applicationData = [
    { id: 'APP001', name: 'Sunrise Photography', category: 'Photography', contact: 'Arjun Mehta', phone: '+91 98765 43210', location: 'Mumbai', submitted: '20 Mar 2024', status: 'Pending', docs: 4, avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-400' },
    { id: 'APP002', name: 'Spice Route Caterers', category: 'Catering', contact: 'Priya Sharma', phone: '+91 87654 32100', location: 'Delhi', submitted: '19 Mar 2024', status: 'Under Review', docs: 5, avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400' },
    { id: 'APP003', name: 'Elite Banquet Hall', category: 'Wedding Halls', contact: 'Rajesh Verma', phone: '+91 76543 21099', location: 'Jaipur', submitted: '18 Mar 2024', status: 'Pending', docs: 3, avatarBg: 'bg-gradient-to-br from-blue-400 to-cyan-400' },
    { id: 'APP004', name: 'Beat Makers DJ', category: 'Entertainment', contact: 'Kiran Rao', phone: '+91 65432 10988', location: 'Bangalore', submitted: '17 Mar 2024', status: 'Approved', docs: 5, avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-400' },
    { id: 'APP005', name: 'Floral Dreams Decor', category: 'Decorations', contact: 'Meena Pillai', phone: '+91 54321 09877', location: 'Chennai', submitted: '16 Mar 2024', status: 'Rejected', docs: 2, avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-400' },
  ];
  
  const statCards = [
    { label: 'Total Applications', value: '48', icon: '📋', color: 'border-blue-400', filter: 'All' },
    { label: 'Pending Review', value: '21', icon: '⏳', color: 'border-amber-400', filter: 'Pending' },
    { label: 'Under Review', value: '12', icon: '🔄', color: 'border-purple-400', filter: 'Under Review' },
    { label: 'Approved', value: '11', icon: '✅', color: 'border-green-400', filter: 'Approved' },
    { label: 'Rejected', value: '4', icon: '❌', color: 'border-red-400', filter: 'Rejected' },
  ];
  
  const filteredApps = applicationData.filter(a => {
    const matchStatus = activeFilter === 'All' || a.status === activeFilter;
    const matchSearch = !search || 
      a.name.toLowerCase().includes(search.toLowerCase()) || 
      a.category.toLowerCase().includes(search.toLowerCase()) ||
      a.contact.toLowerCase().includes(search.toLowerCase()) ||
      a.location.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  const statusColor = { 
    Pending: 'bg-amber-50 text-amber-700 border-amber-200', 
    'Under Review': 'bg-blue-50 text-blue-700 border-blue-200', 
    Approved: 'bg-green-50 text-green-700 border-green-200', 
    Rejected: 'bg-red-50 text-red-700 border-red-200' 
  };
  
  return (
    <div>
      <div className="rounded-2xl p-5 mb-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">📝</div>
          <div><h3 className="text-lg font-bold text-gray-800">Approve Vendor Registration</h3><p className="text-sm text-gray-500 mt-0.5">Review, verify and approve incoming vendor registration requests</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.document} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">Registration Request Review</h3>
                <p className="text-xs text-gray-400">{filteredApps.length} application{filteredApps.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting data...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search by business name, category or contact..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
              />
            </div>
            {['All','Pending','Under Review','Approved','Rejected'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['App. ID', 'Business Name', 'Category', 'Contact Person', 'Location', 'Submitted', 'Docs', 'Status', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filteredApps.length === 0 ? (
                <tr><td colSpan={9} className="px-4 py-12 text-center text-sm text-gray-400">No applications found for "{activeFilter}" filter.</td></tr>
              ) : (
                filteredApps.map(a => (
                  <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{a.id}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-lg ${a.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{a.name[0]}</div><span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{a.name}</span></div></td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-red-50 text-red-700">{a.category}</span></td>
                    <td className="px-4 py-3"><div className="text-xs font-semibold text-gray-700">{a.contact}</div><div className="text-xs text-gray-400">{a.phone}</div></td>
                    <td className="px-4 py-3 text-xs text-gray-600">{a.location}</td>
                    <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{a.submitted}</td>
                    <td className="px-4 py-3 text-center"><span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{a.docs} files</span></td>
                    <td className="px-4 py-3"><span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${statusColor[a.status]}`}>{a.status}</span></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors" title="View"><Icon d={ICONS.eye} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-green-50 text-green-600 transition-colors" title="Approve"><Icon d={ICONS.check} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors" title="Reject"><Icon d={ICONS.x} size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
        <h4 className="font-bold text-gray-800 text-sm mb-4 flex items-center gap-2"><span className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-sm">📁</span>Document Verification Checklist</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {[{ doc: 'Business Registration Certificate', icon: '🏢', status: 'Required' }, { doc: 'Government ID Proof', icon: '🪪', status: 'Required' }, { doc: 'Address Proof', icon: '📍', status: 'Required' }, { doc: 'Service Portfolio (Images/Videos)', icon: '🖼️', status: 'Required' }, { doc: 'Applicable Licenses', icon: '📄', status: 'If Applicable' }, { doc: 'GST Certificate', icon: '🧾', status: 'Required' }].map((d, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-lg">{d.icon}</span>
              <div className="flex-1 min-w-0"><p className="text-xs font-semibold text-gray-700 truncate">{d.doc}</p><p className="text-[10px] text-gray-400">{d.status}</p></div>
              <span className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0"></span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-50 rounded-2xl border border-blue-100 p-4 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-xl">🔔</span>
          <div><p className="text-sm font-bold text-blue-800">Automated Notification System</p><p className="text-xs text-blue-600 mt-1">Vendors are automatically notified about their application status changes via Email, SMS, and In-App notifications. Admin remarks are included in rejection notifications.</p></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[{ emoji: '📋', title: 'Registration Request Review', accentColor: 'bg-amber-50', points: ['View all incoming applications', 'Complete business & contact details', 'Submitted document listing', 'Application timestamp tracking'] }, { emoji: '📁', title: 'Document Verification', accentColor: 'bg-blue-50', points: ['Business registration certificate', 'Government ID & address proof', 'Service portfolio review', 'License validation (if applicable)'] }, { emoji: '✅', title: 'Approval / Rejection Actions', accentColor: 'bg-green-50', points: ['Approve to activate vendor account', 'Reject with valid stated reasons', 'Request additional documents', 'Trigger re-submission workflows'] }, { emoji: '🔔', title: 'Notification & Remarks', accentColor: 'bg-purple-50', points: ['Auto-notify via email & SMS', 'In-app status notifications', 'Add internal admin remarks', 'Future reference audit notes'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

// ─── UPDATED APPROVE VERIFY PROFILE WITH FILTERING ───────────────────────────────
const ApproveVerifyProfile = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const verifyProfileData = [
    { id: 'VND001', name: 'LensArt Studio', category: 'Photography', owner: 'Deepak Shah', location: 'Mumbai', experience: '8 years', status: 'Under Review', portfolio: true, kyc: true, license: false, avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-400' },
    { id: 'VND002', name: 'Royal Feast Caterers', category: 'Catering', owner: 'Sunita Reddy', location: 'Delhi', experience: '12 years', status: 'Verified', portfolio: true, kyc: true, license: true, avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400' },
    { id: 'VND003', name: 'Heritage Mahal', category: 'Wedding Halls', owner: 'Anil Choudhary', location: 'Jaipur', experience: '5 years', status: 'Pending Verification', portfolio: true, kyc: false, license: true, avatarBg: 'bg-gradient-to-br from-blue-400 to-indigo-400' },
    { id: 'VND004', name: 'DJ Rhythm Pro', category: 'Entertainment', owner: 'Vikram Nair', location: 'Bangalore', experience: '6 years', status: 'Rejected', portfolio: false, kyc: true, license: false, avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-400' },
  ];
  
  const statCards = [
    { label: 'Total Profiles', value: '326', icon: '🏢', color: 'border-blue-400', filter: 'All' },
    { label: 'Pending Verification', value: '34', icon: '⏳', color: 'border-amber-400', filter: 'Pending Verification' },
    { label: 'Under Review', value: '28', icon: '🔄', color: 'border-purple-400', filter: 'Under Review' },
    { label: 'Verified & Live', value: '241', icon: '✅', color: 'border-green-400', filter: 'Verified' },
    { label: 'Rejected', value: '12', icon: '❌', color: 'border-red-400', filter: 'Rejected' },
  ];
  
  const filtered = verifyProfileData.filter(v => {
    const matchStatus = activeFilter === 'All' || v.status === activeFilter;
    const matchSearch = !search || 
      v.name.toLowerCase().includes(search.toLowerCase()) || 
      v.category.toLowerCase().includes(search.toLowerCase()) ||
      v.owner.toLowerCase().includes(search.toLowerCase()) ||
      v.location.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  const statusColor = { 
    'Pending Verification': 'bg-amber-50 text-amber-700 border-amber-200', 
    'Under Review': 'bg-blue-50 text-blue-700 border-blue-200', 
    Verified: 'bg-green-50 text-green-700 border-green-200', 
    Rejected: 'bg-red-50 text-red-700 border-red-200' 
  };
  
  return (
    <div>
      <div className="rounded-2xl p-5 mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">✅</div>
          <div><h3 className="text-lg font-bold text-gray-800">Approve & Verify Vendor Profile</h3><p className="text-sm text-gray-500 mt-0.5">Review vendor profiles and approve/reject for platform listing</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.userCheck} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">Vendor Profile Verification Queue</h3>
                <p className="text-xs text-gray-400">{filtered.length} profile{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search by vendor name, category or owner..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
              />
            </div>
            {['All','Pending Verification','Under Review','Verified','Rejected'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['Vendor ID', 'Business Name', 'Category', 'Owner', 'Location', 'Experience', 'Portfolio', 'KYC', 'License', 'Status', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={11} className="px-4 py-12 text-center text-sm text-gray-400">No profiles found for "{activeFilter}" filter.</td></tr>
              ) : (
                filtered.map(v => (
                  <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{v.id}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-lg ${v.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{v.name[0]}</div><span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{v.name}</span></div></td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-red-50 text-red-700">{v.category}</span></td>
                    <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{v.owner}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{v.location}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{v.experience}</td>
                    <td className="px-4 py-3 text-center">{v.portfolio ? <span className="text-green-600 text-sm">✓</span> : <span className="text-red-400 text-sm">✗</span>}</td>
                    <td className="px-4 py-3 text-center">{v.kyc ? <span className="text-green-600 text-sm">✓</span> : <span className="text-red-400 text-sm">✗</span>}</td>
                    <td className="px-4 py-3 text-center">{v.license ? <span className="text-green-600 text-sm">✓</span> : <span className="text-red-400 text-sm">✗</span>}</td>
                    <td className="px-4 py-3"><span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${statusColor[v.status]}`}>{v.status}</span></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-green-50 text-green-600 transition-colors"><Icon d={ICONS.check} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"><Icon d={ICONS.x} size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[{ emoji: '👤', title: 'Profile Review', accentColor: 'bg-blue-50', points: ['Business name & category details', 'Contact info & location review', 'Service offerings overview', 'Previous work experience check'] }, { emoji: '📁', title: 'Document Verification', accentColor: 'bg-green-50', points: ['Business registration certificate', 'Government ID & address proof', 'Licenses & certifications', 'Portfolio images & videos'] }, { emoji: '🔍', title: 'KYC & Quality Assessment', accentColor: 'bg-purple-50', points: ['Third-party KYC verification', 'Portfolio & experience review', 'Pricing standards assessment', 'Platform quality compliance'] }, { emoji: '📋', title: 'Audit Logs & Notifications', accentColor: 'bg-amber-50', points: ['Internal admin remarks & notes', 'Full verification audit history', 'Auto-notify on approval/rejection', 'Required update notifications'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

const manageProfileData = [
  { id: 'VND001', name: 'LensArt Studio', category: 'Photography', services: 3, lastUpdated: '2 days ago', rating: 4.9, bookings: 124, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-400' },
  { id: 'VND002', name: 'Royal Feast', category: 'Catering', services: 5, lastUpdated: '5 days ago', rating: 4.8, bookings: 112, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400' },
  { id: 'VND003', name: 'DJ Rhythm Pro', category: 'Entertainment', services: 2, lastUpdated: '1 day ago', rating: 4.9, bookings: 134, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-400' },
  { id: 'VND004', name: 'Dream Decor Co.', category: 'Decorations', services: 4, lastUpdated: '10 days ago', rating: 4.8, bookings: 94, status: 'Inactive', verified: true, avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-400' },
  { id: 'VND005', name: 'Glam Bridal Studio', category: 'Bridal Styling', services: 6, lastUpdated: '3 days ago', rating: 4.9, bookings: 203, status: 'Active', verified: true, avatarBg: 'bg-gradient-to-br from-amber-400 to-yellow-400' },
];

// ─── UPDATED MANAGE VENDOR PROFILES WITH FILTERING ───────────────────────────────
const ManageVendorProfiles = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const statCards = [
    { label: 'Profiles Updated Today', value: '23', icon: '✏️', color: 'border-blue-400', filter: 'All' },
    { label: 'Active Vendors', value: '271', icon: '✅', color: 'border-green-400', filter: 'Active' },
    { label: 'Services Listed', value: '1,204', icon: '🗂️', color: 'border-purple-400', filter: 'All' },
    { label: 'Pending Doc Updates', value: '18', icon: '📋', color: 'border-amber-400', filter: 'Pending' },
  ];
  
  const filtered = manageProfileData.filter(v => {
    const matchStatus = activeFilter === 'All' || v.status === activeFilter;
    const matchSearch = !search || 
      v.name.toLowerCase().includes(search.toLowerCase()) || 
      v.category.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  return (
    <div>
      <div className="rounded-2xl p-5 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">⚙️</div>
          <div><h3 className="text-lg font-bold text-gray-800">Manage Vendor Profiles</h3><p className="text-sm text-gray-500 mt-0.5">Edit, update and control all vendor profile information and settings</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.edit} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">All Vendor Profiles</h3>
                <p className="text-xs text-gray-400">{filtered.length} vendor{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search by vendor name, category or status..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
              />
            </div>
            {['All','Active','Inactive','Pending'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['Vendor ID', 'Business Name', 'Category', 'Services', 'Last Updated', 'Rating', 'Bookings', 'Status', 'Verified', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={10} className="px-4 py-12 text-center text-sm text-gray-400">No vendors found for "{activeFilter}" filter.</td></tr>
              ) : (
                filtered.map(v => (
                  <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{v.id}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-lg ${v.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{v.name[0]}</div><span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{v.name}</span></div></td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-red-50 text-red-700">{v.category}</span></td>
                    <td className="px-4 py-3 text-xs font-bold text-center text-blue-600">{v.services}</td>
                    <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{v.lastUpdated}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-1"><span className="text-amber-400 text-sm">★</span><span className="text-xs font-bold text-gray-700">{v.rating}</span></div></td>
                    <td className="px-4 py-3 text-xs font-bold text-gray-700 text-center">{v.bookings}</td>
                    <td className="px-4 py-3"><StatusBadge status={v.status} /></td>
                    <td className="px-4 py-3">{v.verified ? <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">✅ Verified</span> : <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">Pending</span>}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors" title="View"><Icon d={ICONS.eye} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors" title="Edit"><Icon d={ICONS.edit} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-green-50 text-green-500 transition-colors" title="Verify"><Icon d={ICONS.shield} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors" title="Deactivate"><Icon d={ICONS.ban} size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[{ emoji: '✏️', title: 'Edit & Update Profile', accentColor: 'bg-blue-50', points: ['Modify services offered', 'Update pricing & packages', 'Edit business details & contact', 'Change service area & location'] }, { emoji: '🖼️', title: 'Portfolio Management', accentColor: 'bg-purple-50', points: ['Add/update portfolio images', 'Upload showcase videos', 'Remove outdated content', 'Maintain quality presentation'] }, { emoji: '📅', title: 'Availability & Service Control', accentColor: 'bg-green-50', points: ['Enable or disable services', 'Update availability schedules', 'Manage concurrent bookings', 'Calendar integration control'] }, { emoji: '📊', title: 'Performance & Audit Logs', accentColor: 'bg-amber-50', points: ['Track ratings & reviews', 'Monitor completed bookings', 'Maintain admin notes & logs', 'Profile update audit trail'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

// ─── UPDATED ACTIVATE DEACTIVATE VENDORS WITH FILTERING ───────────────────────────
const ActivateDeactivateVendors = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const activateData = [
    { id: 'VND001', name: 'LensArt Studio', category: 'Photography', location: 'Mumbai', lastActive: '1 day ago', reason: '—', status: 'Active', bookings: 124, avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-400' },
    { id: 'VND002', name: 'Spice Route Caterers', category: 'Catering', location: 'Delhi', lastActive: '3 days ago', reason: 'Incomplete Documents', status: 'Inactive', bookings: 44, avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400' },
    { id: 'VND003', name: 'Heritage Mahal', category: 'Wedding Halls', location: 'Jaipur', lastActive: '7 days ago', reason: 'Policy Violation', status: 'Suspended', bookings: 43, avatarBg: 'bg-gradient-to-br from-blue-400 to-indigo-400' },
    { id: 'VND004', name: 'Beat Makers DJ', category: 'Entertainment', location: 'Bangalore', lastActive: '2 days ago', reason: '—', status: 'Active', bookings: 134, avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-400' },
    { id: 'VND005', name: 'Floral Dreams', category: 'Decorations', location: 'Chennai', lastActive: '14 days ago', reason: 'Low Performance', status: 'Inactive', bookings: 29, avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-400' },
  ];
  
  const statCards = [
    { label: 'Active Vendors', value: '271', icon: '✅', color: 'border-green-400', filter: 'Active' },
    { label: 'Inactive Vendors', value: '28', icon: '⏸️', color: 'border-gray-400', filter: 'Inactive' },
    { label: 'Suspended', value: '9', icon: '🚫', color: 'border-red-400', filter: 'Suspended' },
    { label: 'Pending Reactivation', value: '14', icon: '🔄', color: 'border-amber-400', filter: 'Pending Reactivation' },
  ];
  
  const filtered = activateData.filter(v => {
    const matchStatus = activeFilter === 'All' || v.status === activeFilter;
    const matchSearch = !search || 
      v.name.toLowerCase().includes(search.toLowerCase()) || 
      v.category.toLowerCase().includes(search.toLowerCase()) ||
      v.location.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  const statusColor = { 
    Active: 'bg-green-50 text-green-700 border-green-200', 
    Inactive: 'bg-gray-50 text-gray-500 border-gray-200', 
    Suspended: 'bg-red-50 text-red-700 border-red-200' 
  };
  
  return (
    <div>
      <div className="rounded-2xl p-5 mb-6 bg-gradient-to-r from-slate-50 to-gray-100 border border-slate-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🔄</div>
          <div><h3 className="text-lg font-bold text-gray-800">Activate / Deactivate Vendors</h3><p className="text-sm text-gray-500 mt-0.5">Toggle vendor account status and manage their platform visibility</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.toggle} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">Vendor Status Control</h3>
                <p className="text-xs text-gray-400">{filtered.length} vendor{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search by vendor name, category or location..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
              />
            </div>
            {['All','Active','Inactive','Suspended'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['', 'Vendor ID', 'Business Name', 'Category', 'Location', 'Last Active', 'Deactivation Reason', 'Bookings', 'Status', 'Quick Toggle'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={10} className="px-4 py-12 text-center text-sm text-gray-400">No vendors found for "{activeFilter}" filter.</td></tr>
              ) : (
                filtered.map(v => (
                  <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3"><input type="checkbox" className="rounded border-gray-300" /></td>
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{v.id}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-lg ${v.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{v.name[0]}</div><span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{v.name}</span></div></td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-red-50 text-red-700">{v.category}</span></td>
                    <td className="px-4 py-3 text-xs text-gray-600">{v.location}</td>
                    <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{v.lastActive}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{v.reason}</td>
                    <td className="px-4 py-3 text-xs font-bold text-gray-700 text-center">{v.bookings}</td>
                    <td className="px-4 py-3"><span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${statusColor[v.status]}`}>{v.status}</span></td>
                    <td className="px-4 py-3">
                      <div className={`w-10 h-5 rounded-full flex items-center cursor-pointer transition-colors ${v.status === 'Active' ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'}`}>
                        <div className="w-4 h-4 bg-white rounded-full mx-0.5 shadow"></div>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[{ emoji: '🔄', title: 'Status Control', accentColor: 'bg-green-50', points: ['Active: visible, receives bookings', 'Inactive: hidden from users', 'Suspended: restricted access', 'One-click toggle per vendor'] }, { emoji: '⚡', title: 'Bulk Actions', accentColor: 'bg-blue-50', points: ['Activate multiple vendors at once', 'Bulk deactivation capability', 'Filter before bulk action', 'Efficient mass management'] }, { emoji: '📋', title: 'Impact & History', accentColor: 'bg-amber-50', points: ['No new bookings when inactive', 'Existing bookings honoured', 'Full activation/deactivation log', 'Timestamps & admin details'] }, { emoji: '🔔', title: 'Reactivation & Alerts', accentColor: 'bg-purple-50', points: ['Vendor reactivation requests', 'Issue resolution tracking', 'Status change notifications', 'Re-enable after compliance'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

// ─── VENDOR VERIFICATION PAGES ────────────────────────────

const verificationQueueData = [
  { id: 'VND001', name: 'LensArt Studio', category: 'Photography', owner: 'Deepak Shah', submitted: '20 Mar 2024', bizLic: 'Verified', gst: 'Verified', idProof: 'Verified', status: 'Verified', avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-400' },
  { id: 'VND002', name: 'Spice Route Caterers', category: 'Catering', owner: 'Sunita Reddy', submitted: '19 Mar 2024', bizLic: 'Under Review', gst: 'Verified', idProof: 'Pending', status: 'Under Review', avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400' },
  { id: 'VND003', name: 'Heritage Mahal', category: 'Wedding Halls', owner: 'Anil Choudhary', submitted: '18 Mar 2024', bizLic: 'Pending', gst: 'Pending', idProof: 'Verified', status: 'Pending', avatarBg: 'bg-gradient-to-br from-blue-400 to-indigo-400' },
  { id: 'VND004', name: 'Beat Makers DJ', category: 'Entertainment', owner: 'Vikram Nair', submitted: '17 Mar 2024', bizLic: 'Rejected', gst: 'Verified', idProof: 'Under Review', status: 'Rejected', avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-400' },
  { id: 'VND005', name: 'Glam Bridal Studio', category: 'Bridal Styling', owner: 'Asha Kumar', submitted: '16 Mar 2024', bizLic: 'Verified', gst: 'Verified', idProof: 'Verified', status: 'Verified', avatarBg: 'bg-gradient-to-br from-amber-400 to-yellow-400' },
];

const docColor = { Verified: 'text-green-600', 'Under Review': 'text-blue-600', Pending: 'text-amber-600', Rejected: 'text-red-600' };
const docIcon = { Verified: '✅', 'Under Review': '🔄', Pending: '⏳', Rejected: '❌' };

// ─── UPDATED VENDOR VERIFICATION DASHBOARD WITH FILTERING ─────────────────────────
const VendorVerificationDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const statCards = [
    { label: 'Pending Verification', value: '34', icon: '⏳', color: 'border-amber-400', filter: 'Pending' },
    { label: 'Under Review', value: '18', icon: '🔄', color: 'border-blue-400', filter: 'Under Review' },
    { label: 'Fully Verified', value: '241', icon: '✅', color: 'border-green-400', filter: 'Verified' },
    { label: 'Rejected', value: '12', icon: '❌', color: 'border-red-400', filter: 'Rejected' },
  ];
  
  const filtered = verificationQueueData.filter(v => {
    const matchStatus = activeFilter === 'All' || v.status === activeFilter;
    const matchSearch = !search || 
      v.name.toLowerCase().includes(search.toLowerCase()) || 
      v.category.toLowerCase().includes(search.toLowerCase()) ||
      v.owner.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  return (
    <div>
      <div className="rounded-2xl p-5 mb-6 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🔐</div>
          <div><h3 className="text-lg font-bold text-gray-800">Vendor Verification Dashboard</h3><p className="text-sm text-gray-500 mt-0.5">Centralized panel for all vendor verification statuses and actions</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.shield} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">Verification Queue</h3>
                <p className="text-xs text-gray-400">{filtered.length} vendor{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search by vendor name, category or verification status..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
              />
            </div>
            {['All','Pending','Under Review','Verified','Rejected'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['Vendor ID', 'Business Name', 'Category', 'Owner', 'Submitted', 'Biz. License', 'GST', 'ID Proof', 'Overall Status', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={10} className="px-4 py-12 text-center text-sm text-gray-400">No vendors found for "{activeFilter}" filter.</td></tr>
              ) : (
                filtered.map(v => (
                  <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{v.id}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-lg ${v.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{v.name[0]}</div><span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{v.name}</span></div></td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-red-50 text-red-700">{v.category}</span></td>
                    <td className="px-4 py-3 text-xs text-gray-600">{v.owner}</td>
                    <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{v.submitted}</td>
                    <td className="px-4 py-3"><span className={`text-xs font-semibold ${docColor[v.bizLic]}`}>{docIcon[v.bizLic]} {v.bizLic}</span></td>
                    <td className="px-4 py-3"><span className={`text-xs font-semibold ${docColor[v.gst]}`}>{docIcon[v.gst]} {v.gst}</span></td>
                    <td className="px-4 py-3"><span className={`text-xs font-semibold ${docColor[v.idProof]}`}>{docIcon[v.idProof]} {v.idProof}</span></td>
                    <td className="px-4 py-3"><VerificationBadge status={v.status} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-green-50 text-green-600 transition-colors"><Icon d={ICONS.check} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"><Icon d={ICONS.x} size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[{ emoji: '📋', title: 'Document Verification', accentColor: 'bg-blue-50', points: ['Business registration certificate', 'Govt ID proof (Aadhaar, PAN)', 'Address proof', 'Licenses & permits if required'] }, { emoji: '🔐', title: 'KYC Integration', accentColor: 'bg-indigo-50', points: ['Third-party KYC providers', 'HyperVerge / Signzy integration', 'Automated identity validation', 'Business authenticity checks'] }, { emoji: '🚨', title: 'Fraud Detection', accentColor: 'bg-red-50', points: ['Identify duplicate profiles', 'Detect fake submissions', 'Flag suspicious activity', 'Take immediate action'] }, { emoji: '📝', title: 'Audit Logs & Notifications', accentColor: 'bg-green-50', points: ['All verification action records', 'Transparency & compliance', 'Auto-notify on status changes', 'Required action alerts'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

const businessLicenseData = [
  { id: 'LIC001', vendor: 'LensArt Studio', category: 'Photography', regNo: 'MH-MUM-2019-0042', issuer: 'ROC Mumbai', validity: '31 Dec 2025', status: 'Verified', avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-400' },
  { id: 'LIC002', vendor: 'Royal Feast', category: 'Catering', regNo: 'DL-REG-2021-1187', issuer: 'ROC Delhi', validity: '15 Aug 2024', status: 'Expired', avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400' },
  { id: 'LIC003', vendor: 'Heritage Mahal', category: 'Wedding Halls', regNo: 'RJ-JAI-2020-0331', issuer: 'ROC Jaipur', validity: '20 Jun 2026', status: 'Pending', avatarBg: 'bg-gradient-to-br from-blue-400 to-indigo-400' },
  { id: 'LIC004', vendor: 'Dream Decor', category: 'Decorations', regNo: 'KA-BLR-2022-0789', issuer: 'ROC Bangalore', validity: '10 Mar 2027', status: 'Under Review', avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-400' },
  { id: 'LIC005', vendor: 'Artisan Cards', category: 'Invitations', regNo: '—', issuer: '—', validity: '—', status: 'Rejected', avatarBg: 'bg-gradient-to-br from-rose-400 to-pink-400' },
];

// ─── UPDATED BUSINESS LICENSE PAGE WITH FILTERING ────────────────────────────────
const BusinessLicensePage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const statCards = [
    { label: 'Total Submissions', value: '298', icon: '📄', color: 'border-blue-400', filter: 'All' },
    { label: 'Verified', value: '241', icon: '✅', color: 'border-green-400', filter: 'Verified' },
    { label: 'Expired / Invalid', value: '14', icon: '⚠️', color: 'border-orange-400', filter: 'Expired' },
    { label: 'Pending Review', value: '27', icon: '⏳', color: 'border-amber-400', filter: 'Pending' },
  ];
  
  const filtered = businessLicenseData.filter(l => {
    const matchStatus = activeFilter === 'All' || l.status === activeFilter;
    const matchSearch = !search || 
      l.vendor.toLowerCase().includes(search.toLowerCase()) || 
      l.category.toLowerCase().includes(search.toLowerCase()) ||
      l.regNo.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  return (
    <div>
      <div className="rounded-2xl p-5 mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🏢</div>
          <div><h3 className="text-lg font-bold text-gray-800">Verify: Business License</h3><p className="text-sm text-gray-500 mt-0.5">Validate vendor business registration and legal operating status</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.document} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">Business License Verification</h3>
                <p className="text-xs text-gray-400">{filtered.length} license{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search by vendor, registration number or status..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
              />
            </div>
            {['All','Verified','Expired','Pending','Under Review','Rejected'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['License ID', 'Vendor', 'Category', 'Reg. Number', 'Issuing Authority', 'Validity / Expiry', 'Status', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={8} className="px-4 py-12 text-center text-sm text-gray-400">No licenses found for "{activeFilter}" filter.</td></tr>
              ) : (
                filtered.map(l => (
                  <tr key={l.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{l.id}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-lg ${l.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{l.vendor[0]}</div><span className="text-sm font-semibold text-gray-700">{l.vendor}</span></div></td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-red-50 text-red-700">{l.category}</span></td>
                    <td className="px-4 py-3 text-xs font-mono text-gray-600">{l.regNo}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{l.issuer}</td>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-700">{l.validity}</td>
                    <td className="px-4 py-3"><VerificationBadge status={l.status} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors" title="View Document"><Icon d={ICONS.eye} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-green-50 text-green-600 transition-colors" title="Approve"><Icon d={ICONS.check} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors" title="Reject"><Icon d={ICONS.x} size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-orange-50 rounded-2xl border border-orange-200 p-4 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-xl">⚠️</span>
          <div><p className="text-sm font-bold text-orange-800">Expiry & Renewal Alerts</p><p className="text-xs text-orange-600 mt-1">2 vendor licenses have expired and 5 licenses are expiring within the next 30 days. Vendors have been notified to renew and re-upload updated documents.</p></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[{ emoji: '📄', title: 'License Document Review', accentColor: 'bg-emerald-50', points: ['Business name validation', 'Registration number check', 'Issuing authority verification', 'Validity & expiry date review'] }, { emoji: '🔍', title: 'Authenticity Check', accentColor: 'bg-teal-50', points: ['Cross-check with official records', 'Detect tampered documents', 'Verify issuing authority', 'Confirm legitimacy of registration'] }, { emoji: '⏰', title: 'Expiry & Renewal Tracking', accentColor: 'bg-orange-50', points: ['Monitor license validity dates', 'Alerts for upcoming expiry', 'Track renewal submissions', 'Auto-notify vendors for renewal'] }, { emoji: '🔒', title: 'Compliance & Storage', accentColor: 'bg-blue-50', points: ['Restrict non-compliant vendors', 'Secure document storage', 'Access-controlled file system', 'Full audit trail of actions'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

const gstData = [
  { id: 'GST001', vendor: 'LensArt Studio', category: 'Photography', gstin: '27AAPFL1234A1Z5', bizName: 'LensArt Studio Pvt Ltd', bizType: 'Private Ltd', address: 'Mumbai, MH', status: 'Verified', avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-400' },
  { id: 'GST002', vendor: 'Royal Feast', category: 'Catering', gstin: '07BBBFC5678B2Y6', bizName: 'Royal Feast Enterprises', bizType: 'Partnership', address: 'Delhi, DL', status: 'Verified', avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400' },
  { id: 'GST003', vendor: 'Heritage Mahal', category: 'Wedding Halls', gstin: '—', bizName: '—', bizType: '—', address: 'Jaipur, RJ', status: 'Pending', avatarBg: 'bg-gradient-to-br from-blue-400 to-indigo-400' },
  { id: 'GST004', vendor: 'Beat Makers DJ', category: 'Entertainment', gstin: '29CCCFD9012C3X7', bizName: 'Beat Makers Entertainment', bizType: 'Proprietor', address: 'Bangalore, KA', status: 'Invalid', avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-400' },
  { id: 'GST005', vendor: 'Glam Bridal', category: 'Bridal Styling', gstin: '33DDDGE3456D4W8', bizName: 'Glam Bridal Beauty Pvt Ltd', bizType: 'Private Ltd', address: 'Chennai, TN', status: 'Under Review', avatarBg: 'bg-gradient-to-br from-amber-400 to-yellow-400' },
];

// ─── UPDATED GST VERIFICATION PAGE WITH FILTERING ────────────────────────────────
const GSTVerificationPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const statCards = [
    { label: 'Total Submissions', value: '289', icon: '🧾', color: 'border-cyan-400', filter: 'All' },
    { label: 'GST Verified', value: '231', icon: '✅', color: 'border-green-400', filter: 'Verified' },
    { label: 'Pending Validation', value: '29', icon: '⏳', color: 'border-amber-400', filter: 'Pending' },
    { label: 'Invalid / Rejected', value: '8', icon: '❌', color: 'border-red-400', filter: 'Invalid' },
  ];
  
  const filtered = gstData.filter(g => {
    const matchStatus = activeFilter === 'All' || g.status === activeFilter;
    const matchSearch = !search || 
      g.vendor.toLowerCase().includes(search.toLowerCase()) || 
      g.category.toLowerCase().includes(search.toLowerCase()) ||
      g.gstin.toLowerCase().includes(search.toLowerCase()) ||
      g.bizName.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  return (
    <div>
      <div className="rounded-2xl p-5 mb-6 bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🧾</div>
          <div><h3 className="text-lg font-bold text-gray-800">Verify: GST Details</h3><p className="text-sm text-gray-500 mt-0.5">Validate vendor GSTIN and ensure tax compliance for all operations</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.document} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">GST Verification Queue</h3>
                <p className="text-xs text-gray-400">{filtered.length} record{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search by vendor, GSTIN or business name..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
              />
            </div>
            {['All','Verified','Pending','Under Review','Invalid'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['GST ID', 'Vendor', 'Category', 'GSTIN', 'Registered Business', 'Type', 'Address', 'Status', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={9} className="px-4 py-12 text-center text-sm text-gray-400">No GST records found for "{activeFilter}" filter.</td></tr>
              ) : (
                filtered.map(g => (
                  <tr key={g.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{g.id}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-lg ${g.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{g.vendor[0]}</div><span className="text-sm font-semibold text-gray-700">{g.vendor}</span></div></td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-red-50 text-red-700">{g.category}</span></td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-gray-700">{g.gstin}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{g.bizName}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{g.bizType}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{g.address}</td>
                    <td className="px-4 py-3"><VerificationBadge status={g.status} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors" title="View"><Icon d={ICONS.eye} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-green-50 text-green-600 transition-colors" title="Approve"><Icon d={ICONS.check} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors" title="Reject"><Icon d={ICONS.x} size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-cyan-50 rounded-2xl border border-cyan-200 p-4 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-xl">🔗</span>
          <div><p className="text-sm font-bold text-cyan-800">Government GST API Integration</p><p className="text-xs text-cyan-600 mt-1">GSTIN numbers are automatically validated against official government GST portal records via API integration. Mismatches are flagged instantly for admin review and vendor correction.</p></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[{ emoji: '🧾', title: 'GST Details Review', accentColor: 'bg-cyan-50', points: ['GSTIN number validation', 'Registered business name check', 'Business type verification', 'Registered address confirmation'] }, { emoji: '🔗', title: 'Government API Validation', accentColor: 'bg-sky-50', points: ['Auto-validate GSTIN via API', 'Real-time GST portal lookup', 'Detect invalid GSTINs instantly', 'Flag mismatched information'] }, { emoji: '📄', title: 'Document Upload Review', accentColor: 'bg-blue-50', points: ['Manual GST certificate review', 'Uploaded document validation', 'Cross-check with GSTIN data', 'Request corrections or re-upload'] }, { emoji: '🔒', title: 'Compliance & Fraud Detection', accentColor: 'bg-indigo-50', points: ['Identify duplicate GSTINs', 'Prevent fake tax registrations', 'Secure sensitive data handling', 'Full audit & history logs'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

const idProofData = [
  { id: 'KYC001', vendor: 'LensArt Studio', owner: 'Deepak Shah', idType: 'Aadhaar Card', idNo: 'XXXX-XXXX-4321', dob: '12 Mar 1988', photoMatch: true, status: 'Verified', avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-400' },
  { id: 'KYC002', vendor: 'Royal Feast', owner: 'Sunita Reddy', idType: 'PAN Card', idNo: 'ABCPR1234D', dob: '25 Jul 1980', photoMatch: true, status: 'Verified', avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400' },
  { id: 'KYC003', vendor: 'Heritage Mahal', owner: 'Anil Choudhary', idType: 'Passport', idNo: 'P1234567', dob: '03 Jan 1975', photoMatch: false, status: 'Under Review', avatarBg: 'bg-gradient-to-br from-blue-400 to-indigo-400' },
  { id: 'KYC004', vendor: 'Beat Makers DJ', owner: 'Vikram Nair', idType: 'Driving License', idNo: 'KA-1234567890', dob: '18 Sep 1992', photoMatch: false, status: 'Rejected', avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-400' },
  { id: 'KYC005', vendor: 'Glam Bridal', owner: 'Asha Kumar', idType: 'Aadhaar Card', idNo: 'XXXX-XXXX-8765', dob: '07 Dec 1990', photoMatch: true, status: 'Pending', avatarBg: 'bg-gradient-to-br from-amber-400 to-yellow-400' },
];

// ─── UPDATED ID PROOF VERIFICATION PAGE WITH FILTERING ───────────────────────────
const IDProofVerificationPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const statCards = [
    { label: 'Total KYC Records', value: '312', icon: '🪪', color: 'border-violet-400', filter: 'All' },
    { label: 'KYC Verified', value: '261', icon: '✅', color: 'border-green-400', filter: 'Verified' },
    { label: 'Pending / Review', value: '38', icon: '⏳', color: 'border-amber-400', filter: 'Pending' },
    { label: 'Rejected / Flagged', value: '13', icon: '🚫', color: 'border-red-400', filter: 'Rejected' },
  ];
  
  const filtered = idProofData.filter(k => {
    const matchStatus = activeFilter === 'All' || k.status === activeFilter;
    const matchSearch = !search || 
      k.vendor.toLowerCase().includes(search.toLowerCase()) || 
      k.owner.toLowerCase().includes(search.toLowerCase()) ||
      k.idType.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  return (
    <div>
      <div className="rounded-2xl p-5 mb-6 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🪪</div>
          <div><h3 className="text-lg font-bold text-gray-800">Verify: ID Proof</h3><p className="text-sm text-gray-500 mt-0.5">Validate vendor identity through government-issued ID verification & KYC</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.shield} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">ID Proof Verification Queue</h3>
                <p className="text-xs text-gray-400">{filtered.length} record{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search by vendor, owner name or ID type..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
              />
            </div>
            {['All','Verified','Pending','Under Review','Rejected'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['KYC ID', 'Vendor', 'Owner Name', 'ID Type', 'ID Number', 'Date of Birth', 'Photo Match', 'Status', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={9} className="px-4 py-12 text-center text-sm text-gray-400">No KYC records found for "{activeFilter}" filter.</td></tr>
              ) : (
                filtered.map(k => (
                  <tr key={k.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{k.id}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-lg ${k.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{k.vendor[0]}</div><span className="text-sm font-semibold text-gray-700">{k.vendor}</span></div></td>
                    <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{k.owner}</td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-violet-50 text-violet-700">{k.idType}</span></td>
                    <td className="px-4 py-3 text-xs font-mono text-gray-600">{k.idNo}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{k.dob}</td>
                    <td className="px-4 py-3 text-center">{k.photoMatch ? <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">✅ Match</span> : <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">❌ Mismatch</span>}</td>
                    <td className="px-4 py-3"><VerificationBadge status={k.status} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors" title="View ID"><Icon d={ICONS.eye} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-green-50 text-green-600 transition-colors" title="Approve"><Icon d={ICONS.check} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors" title="Reject"><Icon d={ICONS.x} size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-violet-50 rounded-2xl border border-violet-200 p-4 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-xl">🔐</span>
          <div><p className="text-sm font-bold text-violet-800">KYC Integration & Photo Matching</p><p className="text-xs text-violet-600 mt-1">ID verification is powered by third-party KYC providers (HyperVerge / Signzy). Photo identity matching is performed automatically to prevent impersonation. All ID documents are stored with encrypted, restricted access.</p></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[{ emoji: '🪪', title: 'Accepted ID Documents', accentColor: 'bg-violet-50', points: ['Aadhaar Card', 'PAN Card', 'Passport', 'Driving License'] }, { emoji: '🔍', title: 'Document Review Details', accentColor: 'bg-purple-50', points: ['Full name verification', 'ID number validation', 'Date of birth check', 'Photo identity matching'] }, { emoji: '🤖', title: 'KYC Automation', accentColor: 'bg-indigo-50', points: ['HyperVerge / Signzy integration', 'Automated identity validation', 'Real-time mismatch detection', 'Impersonation prevention'] }, { emoji: '🚨', title: 'Fraud Detection & Storage', accentColor: 'bg-red-50', points: ['Detect fake or duplicate IDs', 'Flag tampered documents', 'Secure encrypted storage', 'Restricted access controls'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

const verifiedVendorsData = [
  { id: 'VND001', name: 'LensArt Studio', category: 'Photography', location: 'Mumbai', contact: '+91 98765 43210', verifiedOn: '15 Jan 2024', rating: 4.9, bookings: 124, status: 'Active', avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-400' },
  { id: 'VND002', name: 'Royal Feast', category: 'Catering', location: 'Delhi', contact: '+91 87654 32100', verifiedOn: '20 Jan 2024', rating: 4.8, bookings: 112, status: 'Active', avatarBg: 'bg-gradient-to-br from-orange-400 to-amber-400' },
  { id: 'VND003', name: 'Grand Palace Banquets', category: 'Wedding Halls', location: 'Mumbai', contact: '+91 76543 21099', verifiedOn: '5 Feb 2024', rating: 4.9, bookings: 89, status: 'Active', avatarBg: 'bg-gradient-to-br from-blue-400 to-cyan-400' },
  { id: 'VND004', name: 'DJ Rhythm Pro', category: 'Entertainment', location: 'Bangalore', contact: '+91 65432 10988', verifiedOn: '12 Feb 2024', rating: 4.9, bookings: 134, status: 'Active', avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-400' },
  { id: 'VND005', name: 'Dream Decor Co.', category: 'Decorations', location: 'Bangalore', contact: '+91 54321 09877', verifiedOn: '18 Feb 2024', rating: 4.8, bookings: 94, status: 'Active', avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-400' },
  { id: 'VND006', name: 'Glam Bridal Studio', category: 'Bridal Styling', location: 'Mumbai', contact: '+91 43210 98766', verifiedOn: '1 Mar 2024', rating: 4.9, bookings: 203, status: 'Active', avatarBg: 'bg-gradient-to-br from-amber-400 to-yellow-400' },
];

// ─── UPDATED VERIFIED VENDOR BADGE PAGE WITH FILTERING ───────────────────────────
const VerifiedVendorBadgePage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const statCards = [
    { label: 'Total Verified Vendors', value: '241', icon: '✅', color: 'border-green-400', filter: 'All' },
    { label: 'Badges Assigned', value: '241', icon: '🏅', color: 'border-blue-400', filter: 'All' },
    { label: 'Re-verification Needed', value: '14', icon: '🔄', color: 'border-amber-400', filter: 'Re-verification Needed' },
    { label: 'Suspended (Badge Revoked)', value: '9', icon: '⛔', color: 'border-red-400', filter: 'Suspended' },
  ];
  
  const filtered = verifiedVendorsData.filter(v => {
    const matchStatus = activeFilter === 'All' || v.status === activeFilter;
    const matchSearch = !search || 
      v.name.toLowerCase().includes(search.toLowerCase()) || 
      v.category.toLowerCase().includes(search.toLowerCase()) ||
      v.location.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  return (
    <div>
      <div className="rounded-2xl p-5 mb-6 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">✅</div>
          <div><h3 className="text-lg font-bold text-gray-800">Assign: ✅ Verified Vendor Badge</h3><p className="text-sm text-gray-500 mt-0.5">View all approved, verified vendors with trust badges and performance insights</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.userCheck} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">Verified Vendor Listing</h3>
                <p className="text-xs text-gray-400">{filtered.length} verified vendor{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search verified vendors by name, category or location..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
              />
            </div>
            {['All','Active','Inactive','Suspended'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['Vendor ID', 'Business Name', 'Category', 'Location', 'Contact', 'Verified On', 'Rating', 'Bookings', 'Badge', 'Status', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={11} className="px-4 py-12 text-center text-sm text-gray-400">No verified vendors found for "{activeFilter}" filter.</td></tr>
              ) : (
                filtered.map(v => (
                  <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{v.id}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-lg ${v.avatarBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{v.name[0]}</div><span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{v.name}</span></div></td>
                    <td className="px-4 py-3"><span className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-red-50 text-red-700">{v.category}</span></td>
                    <td className="px-4 py-3 text-xs text-gray-600">{v.location}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{v.contact}</td>
                    <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{v.verifiedOn}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-1"><span className="text-amber-400 text-sm">★</span><span className="text-xs font-bold text-gray-700">{v.rating}</span></div></td>
                    <td className="px-4 py-3 text-xs font-bold text-gray-700 text-center">{v.bookings}</td>
                    <td className="px-4 py-3"><span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">✅ Verified</span></td>
                    <td className="px-4 py-3"><StatusBadge status={v.status} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors" title="View Profile"><Icon d={ICONS.eye} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors" title="Edit"><Icon d={ICONS.edit} size={14} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors" title="Suspend / Deactivate"><Icon d={ICONS.ban} size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">Showing {filtered.length} of 241 verified vendors</p>
          <div className="flex items-center gap-1">{[1,2,3,'...',25].map((p, i) => <button key={i} className={`w-7 h-7 text-xs rounded-lg font-semibold ${p === 1 ? 'bg-red-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>{p}</button>)}</div>
        </div>
      </div>
      <div className="bg-amber-50 rounded-2xl border border-amber-200 p-4 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-xl">🔔</span>
          <div><p className="text-sm font-bold text-amber-800">Re-verification Alerts</p><p className="text-xs text-amber-600 mt-1">14 verified vendors have documents (Business License, GST, or ID Proof) expiring within 60 days. Admins have been alerted and vendors notified to submit updated documents for re-verification.</p></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[{ emoji: '✅', title: 'Verified Vendor Listing', accentColor: 'bg-green-50', points: ['Complete list of approved vendors', 'Business name, category & location', 'Contact info & verification date', 'Verified badge display'] }, { emoji: '📊', title: 'Performance Insights', accentColor: 'bg-blue-50', points: ['Customer ratings & reviews', 'Total completed bookings', 'Service quality metrics', 'Booking trend analysis'] }, { emoji: '⚡', title: 'Quick Actions', accentColor: 'bg-amber-50', points: ['Deactivate or suspend vendor', 'View verification documents', 'Edit vendor profile details', 'Revoke verified badge'] }, { emoji: '🔄', title: 'Compliance & Re-verification', accentColor: 'bg-purple-50', points: ['Monitor document expiry dates', 'Re-verification alerts for admins', 'Notify vendors for renewal', 'Export verified vendor reports'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

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
  // Vendor Actions
  'Approve / Reject Vendor Registration': ApproveVendorRegistration,
  'Verify Business Details': ApproveVerifyProfile,
  'Manage Vendor Profiles': ManageVendorProfiles,
  'Activate / Deactivate Vendors': ActivateDeactivateVendors,
  // Verification
  'Verify: Business License': BusinessLicensePage,
  'Verify: GST Details': GSTVerificationPage,
  'Verify: ID Proof': IDProofVerificationPage,
  'Assign: ✅ Verified Vendor Badge': VerifiedVendorBadgePage,
};

// ─── CUSTOMER SECTIONS (keeping original) ────────────────────────────────────
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

const ViewAllCustomers = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  const statCards = [
    { label: 'Total Registered', value: '4,821', icon: '👥', color: 'border-blue-400', filter: 'All' },
    { label: 'Active Users', value: '4,102', icon: '✅', color: 'border-green-400', filter: 'Active' },
    { label: 'Pending Verification', value: '384', icon: '⏳', color: 'border-amber-400', filter: 'Pending' },
    { label: 'Blocked Accounts', value: '335', icon: '🚫', color: 'border-red-400', filter: 'Blocked' },
  ];
  const filtered = sampleCustomers.filter(c => {
    const matchStatus = activeFilter === 'All' || c.status === activeFilter;
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()) || c.location.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.customers} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">All Registered Customers</h3>
                <p className="text-xs text-gray-400">{filtered.length} customer{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting CSV...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export CSV</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search by name, email, phone or location..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" />
            </div>
            {['All','Active','Pending','Blocked','Inactive'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{f}</button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['Customer ID','Name','Contact','Location','Registered','Status','Verified','Bookings','Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={9} className="px-4 py-12 text-center text-sm text-gray-400">No customers found for this filter.</td></tr>
              ) : filtered.map(c => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-xs font-mono text-gray-500">{c.id}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-400 to-amber-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">{c.name.split(' ').map(n => n[0]).join('')}</div><span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{c.name}</span></div></td>
                  <td className="px-4 py-3"><div className="text-xs text-gray-600">{c.email}</div><div className="text-xs text-gray-400">{c.phone}</div></td>
                  <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{c.location}</td>
                  <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{c.registered}</td>
                  <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-4 py-3">{c.verified ? <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">✓ Verified</span> : <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">Unverified</span>}</td>
                  <td className="px-4 py-3 text-xs font-bold text-gray-700 text-center">{c.bookings}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-1.5"><button onClick={() => alert(`Viewing ${c.name}`)} className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button><button onClick={() => alert(`Editing ${c.name}`)} className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors"><Icon d={ICONS.edit} size={14} /></button><button onClick={() => alert(`Managing ${c.name}`)} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"><Icon d={ICONS.shield} size={14} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">Showing {filtered.length} of 4,821 customers</p>
          <div className="flex items-center gap-1">{[1,2,3,'...',482].map((p, i) => <button key={i} className={`w-7 h-7 text-xs rounded-lg font-semibold ${p === 1 ? 'bg-red-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>{p}</button>)}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        {[{ emoji: '🔍', title: 'Advanced Search & Filters', accentColor: 'bg-blue-50', points: ['Filter by name, mobile, email', 'Filter by location & date range', 'Filter by account status', 'Quick keyword search'] }, { emoji: '👤', title: 'Profile Access', accentColor: 'bg-purple-50', points: ['View personal info & preferences', 'Access full booking history', 'View activity & audit logs', 'Communication records'] }, { emoji: '🔒', title: 'Account Status Management', accentColor: 'bg-green-50', points: ['Activate or deactivate accounts', 'Block suspicious users', 'Policy-based enforcement', 'Reinstatement workflows'] }, { emoji: '📤', title: 'Export Data', accentColor: 'bg-amber-50', points: ['Download as CSV or Excel', 'Filter before export', 'Scheduled report exports', 'Analytics-ready format'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

const allBookingsData = [
  { id: 'BK001', customer: 'Aarav Patel', service: 'Photography', vendor: 'LensArt Studio', bookingDate: '10 Jan 2024', eventDate: '15 Mar 2024', status: 'Completed', payment: 'Paid', amount: '₹45,000' },
  { id: 'BK002', customer: 'Ishita Reddy', service: 'Catering', vendor: 'Royal Feast', bookingDate: '20 Feb 2024', eventDate: '25 Apr 2024', status: 'Confirmed', payment: 'Partial', amount: '₹1,20,000' },
  { id: 'BK003', customer: 'Rohan Deshmukh', service: 'Decoration', vendor: 'Dream Decor', bookingDate: '1 Mar 2024', eventDate: '10 May 2024', status: 'Pending', payment: 'Pending', amount: '₹65,000' },
  { id: 'BK004', customer: 'Neha Gupta', service: 'Venue', vendor: 'Grand Palace', bookingDate: '5 Apr 2024', eventDate: '20 Jun 2024', status: 'In Progress', payment: 'Paid', amount: '₹3,50,000' },
  { id: 'BK005', customer: 'Vikram Singh', service: 'Makeup', vendor: 'Glam Studio', bookingDate: '12 Apr 2024', eventDate: '5 Jul 2024', status: 'Cancelled', payment: 'Refunded', amount: '₹18,000' },
  { id: 'BK006', customer: 'Meera Nair', service: 'Photography', vendor: 'Shutter Stories', bookingDate: '18 Apr 2024', eventDate: '12 Aug 2024', status: 'Confirmed', payment: 'Paid', amount: '₹55,000' },
  { id: 'BK007', customer: 'Arjun Mehta', service: 'Entertainment', vendor: 'DJ Rhythm Pro', bookingDate: '22 Apr 2024', eventDate: '1 Sep 2024', status: 'Pending', payment: 'Pending', amount: '₹30,000' },
  { id: 'BK008', customer: 'Priya Sharma', service: 'Catering', vendor: "Nawab's Kitchen", bookingDate: '28 Apr 2024', eventDate: '15 Sep 2024', status: 'In Progress', payment: 'Partial', amount: '₹2,10,000' },
];

const TrackBookingHistory = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  const statCards = [
    { label: 'Total Bookings', value: '10,843', icon: '📋', color: 'border-blue-400', filter: 'All' },
    { label: 'Pending', value: '47', icon: '⏳', color: 'border-amber-400', filter: 'Pending' },
    { label: 'Confirmed', value: '312', icon: '✅', color: 'border-green-400', filter: 'Confirmed' },
    { label: 'In Progress', value: '845', icon: '🔄', color: 'border-purple-400', filter: 'In Progress' },
    { label: 'Cancelled', value: '203', icon: '❌', color: 'border-red-400', filter: 'Cancelled' },
  ];
  const filtered = allBookingsData.filter(b => {
    const matchStatus = activeFilter === 'All' || b.status === activeFilter;
    const matchSearch = !search || b.customer.toLowerCase().includes(search.toLowerCase()) || b.vendor.toLowerCase().includes(search.toLowerCase()) || b.service.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.booking} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">Complete Booking Overview</h3>
                <p className="text-xs text-gray-400">{filtered.length} booking{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `— ${activeFilter}` : 'across all services'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting bookings...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex-1 relative min-w-48">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search by customer, vendor, service or booking ID..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" />
            </div>
            {['All','Pending','Confirmed','In Progress','Completed','Cancelled'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{f}</button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['Booking ID','Customer','Service','Vendor Assigned','Booking Date','Event Date','Status','Payment','Amount','Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={10} className="px-4 py-12 text-center text-sm text-gray-400">No bookings found for "{activeFilter}" filter.</td></tr>
              ) : filtered.map(b => (
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
                  <td className="px-4 py-3"><div className="flex items-center gap-1.5"><button onClick={() => alert(`Viewing booking ${b.id} — ${b.customer}`)} className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button><button onClick={() => alert(`Editing booking ${b.id}`)} className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors"><Icon d={ICONS.edit} size={14} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">Showing {filtered.length} of 10,843 bookings</p>
          <div className="flex items-center gap-1">{[1,2,3,'...',1085].map((p, i) => <button key={i} className={`w-7 h-7 text-xs rounded-lg font-semibold ${p === 1 ? 'bg-red-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>{p}</button>)}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        {[{ emoji: '📍', title: 'Vendor Assignment Tracking', accentColor: 'bg-amber-50', points: ['See assigned vendor per booking', 'Track performance & delivery', 'Rate vendor post-completion', 'Switch vendor if needed'] }, { emoji: '💳', title: 'Payment & Transaction Info', accentColor: 'bg-green-50', points: ['Check paid/partial/pending status', 'View full transaction details', 'Track refund processing', 'Invoice access per booking'] }, { emoji: '🔄', title: 'Cancellation & Reschedule', accentColor: 'bg-red-50', points: ['Handle cancellation requests', 'Process reschedule requests', 'Manage refund workflows', 'Update booking records'] }, { emoji: '📅', title: 'Booking Timeline', accentColor: 'bg-blue-50', points: ['View creation timestamp', 'Track updates & changes', 'Confirmation milestones', 'Completion sign-off log'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

const ManageProfiles = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const profileData = [
    { id: 'CUS001', name: 'Aarav Patel', email: 'aarav.patel@email.com', phone: '+91 98765 43210', location: 'Mumbai', registered: '12 Jan 2024', status: 'Active', verified: true, bookings: 3, lastUpdate: '2 days ago' },
    { id: 'CUS002', name: 'Ishita Reddy', email: 'ishita.reddy@email.com', phone: '+91 87654 32109', location: 'Delhi', registered: '28 Feb 2024', status: 'Active', verified: true, bookings: 1, lastUpdate: '5 days ago' },
    { id: 'CUS003', name: 'Rohan Deshmukh', email: 'rohan.deshmukh@email.com', phone: '+91 76543 21098', location: 'Chennai', registered: '5 Mar 2024', status: 'Pending', verified: false, bookings: 0, lastUpdate: '1 day ago' },
    { id: 'CUS004', name: 'Neha Gupta', email: 'neha.gupta@email.com', phone: '+91 65432 10987', location: 'Bangalore', registered: '19 Mar 2024', status: 'Blocked', verified: true, bookings: 5, lastUpdate: '10 days ago' },
    { id: 'CUS005', name: 'Vikram Singh', email: 'vikram.singh@email.com', phone: '+91 54321 09876', location: 'Pune', registered: '2 Apr 2024', status: 'Active', verified: true, bookings: 2, lastUpdate: '3 days ago' },
  ];
  
  // Fixed: Each stat card now has unique filter values that match the button filters
  const statCards = [
    { label: 'Total Profiles', value: '4,821', icon: '👥', color: 'border-blue-400', filterValue: 'All' },
    { label: 'Profiles Updated Today', value: '128', icon: '✏️', color: 'border-blue-400', filterValue: 'All' }, // Same filterValue - both trigger 'All' filter
    { label: 'KYC Verified', value: '3,904', icon: '🛡️', color: 'border-green-400', filterValue: 'Verified' },
    { label: 'Pending Verification', value: '384', icon: '⏳', color: 'border-amber-400', filterValue: 'Pending' },
  ];
  
  // Fixed: Filter logic now properly handles 'Verified' filter
  const filtered = profileData.filter(p => {
    let matchStatus = true;
    if (activeFilter === 'Verified') {
      matchStatus = p.verified === true;
    } else if (activeFilter === 'Pending') {
      matchStatus = p.status === 'Pending';
    } else if (activeFilter === 'Active') {
      matchStatus = p.status === 'Active';
    } else if (activeFilter === 'Blocked') {
      matchStatus = p.status === 'Blocked';
    } else if (activeFilter !== 'All') {
      matchStatus = p.status === activeFilter;
    }
    
    const matchSearch = !search || 
      p.name.toLowerCase().includes(search.toLowerCase()) || 
      p.email.toLowerCase().includes(search.toLowerCase()) || 
      p.location.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filterValue)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filterValue ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filterValue && (
                  <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>
                )}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.edit} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">Customer Profiles</h3>
                <p className="text-xs text-gray-400">{filtered.length} profile{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter === 'Verified' ? 'KYC Verified' : activeFilter === 'Pending' ? 'Pending Verification' : activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting profiles...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search by name, email, phone or location..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" />
            </div>
            {/* Fixed: Filter buttons now match the data structure - Added 'Verified' button that properly filters by verified status */}
            {['All','Active','Pending','Blocked','Verified'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{f}</button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['Customer ID','Name','Contact','Location','Registered','Last Update','Status','Verified','Bookings','Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={10} className="px-4 py-12 text-center text-sm text-gray-400">No profiles found for this filter.</td></tr>
              ) : filtered.map(p => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-xs font-mono text-gray-500">{p.id}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-400 to-amber-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">{p.name.split(' ').map(n => n[0]).join('')}</div><span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{p.name}</span></div></td>
                  <td className="px-4 py-3"><div className="text-xs text-gray-600">{p.email}</div><div className="text-xs text-gray-400">{p.phone}</div></td>
                  <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{p.location}</td>
                  <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{p.registered}</td>
                  <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{p.lastUpdate}</td>
                  <td className="px-4 py-3"><StatusBadge status={p.status} /></td>
                  <td className="px-4 py-3">{p.verified ? <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">✓ Verified</span> : <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">Unverified</span>}</td>
                  <td className="px-4 py-3 text-xs font-bold text-gray-700 text-center">{p.bookings}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-1.5"><button onClick={() => alert(`Editing ${p.name}`)} className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors"><Icon d={ICONS.edit} size={14} /></button><button onClick={() => alert(`Viewing ${p.name}`)} className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
};

const HandleComplaints = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const complaintsData = [
    { id: 'TKT001', customer: 'Aarav Patel', issue: 'Vendor no-show on event day', type: 'Booking', status: 'Open', priority: 'High', created: '2 hrs ago' },
    { id: 'TKT002', customer: 'Ishita Reddy', issue: 'Payment deducted but booking not confirmed', type: 'Payment', status: 'In Progress', priority: 'Critical', created: '5 hrs ago' },
    { id: 'TKT003', customer: 'Rohan Deshmukh', issue: 'Decoration quality below expectations', type: 'Vendor', status: 'Resolved', priority: 'Medium', created: '1 day ago' },
    { id: 'TKT004', customer: 'Meera Nair', issue: 'Cannot update profile photo', type: 'Platform', status: 'Open', priority: 'Low', created: '2 days ago' },
    { id: 'TKT005', customer: 'Neha Gupta', issue: 'Refund not received after cancellation', type: 'Payment', status: 'Escalated', priority: 'Critical', created: '3 days ago' },
  ];
  
  const statCards = [
    { label: 'Open Tickets', value: '47', icon: '🎫', color: 'border-red-400', filter: 'Open' },
    { label: 'In Progress', value: '23', icon: '🔄', color: 'border-amber-400', filter: 'In Progress' },
    { label: 'Resolved Today', value: '18', icon: '✅', color: 'border-green-400', filter: 'Resolved' },
    { label: 'Escalated', value: '5', icon: '⚠️', color: 'border-purple-400', filter: 'Escalated' },
  ];
  
  const filtered = complaintsData.filter(t => {
    const matchStatus = activeFilter === 'All' || t.status === activeFilter;
    const matchSearch = !search || t.id.toLowerCase().includes(search.toLowerCase()) || t.customer.toLowerCase().includes(search.toLowerCase()) || t.issue.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  const pColor = { High: 'text-amber-600 bg-amber-50', Critical: 'text-red-600 bg-red-50', Medium: 'text-blue-600 bg-blue-50', Low: 'text-gray-500 bg-gray-50' };
  const sColor = { Open: 'text-red-700 bg-red-50 border-red-200', 'In Progress': 'text-purple-700 bg-purple-50 border-purple-200', Resolved: 'text-green-700 bg-green-50 border-green-200', Escalated: 'text-amber-700 bg-amber-50 border-amber-200' };
  
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.complaints} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">Support Ticket Management</h3>
                <p className="text-xs text-gray-400">{filtered.length} ticket{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `— ${activeFilter}` : 'all tickets'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting tickets...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search tickets by ID, customer name or issue type..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" />
            </div>
            {['All','Open','In Progress','Resolved','Escalated'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{f}</button>
            ))}
          </div>
        </div>
        <div className="divide-y divide-gray-50">
          {filtered.length === 0 ? (
            <div className="px-5 py-10 text-center text-sm text-gray-400">No tickets found for this filter.</div>
          ) : (
            filtered.map(t => (
              <div key={t.id} className="px-5 py-4 hover:bg-gray-50 transition-colors flex items-center gap-4">
                <span className="text-xs font-mono text-gray-400 flex-shrink-0">{t.id}</span>
                <div className="flex-1 min-w-0"><p className="text-sm font-semibold text-gray-800">{t.issue}</p><div className="flex items-center gap-2 mt-0.5"><span className="text-xs text-gray-400">{t.customer}</span><span className="text-gray-300">·</span><span className="text-xs text-gray-400">{t.type}</span><span className="text-gray-300">·</span><span className="text-xs text-gray-400">{t.created}</span></div></div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${pColor[t.priority]}`}>{t.priority}</span>
                <span className={`text-[11px] font-semibold border px-2.5 py-0.5 rounded-full ${sColor[t.status]}`}>{t.status}</span>
                <div className="flex items-center gap-1.5 flex-shrink-0"><button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button><button className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors"><Icon d={ICONS.edit} size={14} /></button></div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[{ emoji: '⚖️', title: 'Dispute Management', accentColor: 'bg-red-50', points: ['Customer vs vendor conflicts', 'Evidence review & logs', 'Fair resolution enforcement', 'Outcome documentation'] }, { emoji: '🔍', title: 'Compliance Monitoring', accentColor: 'bg-blue-50', points: ['Policy violation detection', 'Terms of service enforcement', 'User behaviour audits', 'Blacklist management'] }, { emoji: '🛡️', title: 'KYC & Verification Checks', accentColor: 'bg-green-50', points: ['OTP & ID proof review', 'Fake account detection', 'Document authenticity check', 'Re-verification triggers'] }, { emoji: '🚨', title: 'Escalation Handling', accentColor: 'bg-purple-50', points: ['Route to senior admins', 'Priority flagging system', 'SLA breach monitoring', 'Management notifications'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

// ─── CUSTOMER MANAGEMENT LANDING PAGE (UPDATED WITH FILTER) ────────────────────
const CustomerManagementPage = ({ onSelect }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const allCustomers = [
    { id: 'CUS001', name: 'Aarav Patel', email: 'aarav.patel@email.com', phone: '+91 98765 43210', location: 'Mumbai', registered: '12 Jan 2024', status: 'Active', verified: true, bookings: 3 },
    { id: 'CUS002', name: 'Ishita Reddy', email: 'ishita.reddy@email.com', phone: '+91 87654 32109', location: 'Delhi', registered: '28 Feb 2024', status: 'Active', verified: true, bookings: 1 },
    { id: 'CUS003', name: 'Rohan Deshmukh', email: 'rohan.deshmukh@email.com', phone: '+91 76543 21098', location: 'Chennai', registered: '5 Mar 2024', status: 'Pending', verified: false, bookings: 0 },
    { id: 'CUS004', name: 'Neha Gupta', email: 'neha.gupta@email.com', phone: '+91 65432 10987', location: 'Bangalore', registered: '19 Mar 2024', status: 'Blocked', verified: true, bookings: 5 },
    { id: 'CUS005', name: 'Vikram Singh', email: 'vikram.singh@email.com', phone: '+91 54321 09876', location: 'Pune', registered: '2 Apr 2024', status: 'Active', verified: true, bookings: 2 },
    { id: 'CUS006', name: 'Meera Nair', email: 'meera.nair@email.com', phone: '+91 43210 98765', location: 'Hyderabad', registered: '14 Apr 2024', status: 'Inactive', verified: false, bookings: 1 },
  ];
  
  const statCards = [
    { label: 'Total Registered', value: '4,821', icon: '👥', color: 'border-blue-400', filter: 'All' },
    { label: 'Active Users', value: '4,102', icon: '✅', color: 'border-green-400', filter: 'Active' },
    { label: 'Pending Verification', value: '384', icon: '⏳', color: 'border-amber-400', filter: 'Pending' },
    { label: 'Blocked Accounts', value: '335', icon: '🚫', color: 'border-red-400', filter: 'Blocked' },
  ];
  
  const filtered = allCustomers.filter(c => {
    const matchStatus = activeFilter === 'All' || c.status === activeFilter;
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()) || c.location.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });
  
  return (
    <div>
      <div className="rounded-2xl p-6 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">👥</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Customer Management</h3>
            <p className="text-sm text-gray-500 mt-0.5">Manage all registered customers, bookings, profiles and support issues</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Icon d={ICONS.customers} size={18} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">All Registered Customers</h3>
                <p className="text-xs text-gray-400">{filtered.length} customer{filtered.length !== 1 ? 's' : ''} {activeFilter !== 'All' ? `(filtered: ${activeFilter})` : 'total'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeFilter !== 'All' && <button onClick={() => setActiveFilter('All')} className="text-xs text-red-600 font-semibold px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">✕ Clear Filter</button>}
              <button onClick={() => alert('Exporting CSV...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors"><Icon d={ICONS.download} size={13} />Export CSV</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
              <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search by name, email, phone or location..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" />
            </div>
            {['All','Active','Pending','Blocked','Inactive'].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{f}</button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50 border-b border-gray-100">{['Customer ID','Name','Contact','Location','Registered','Status','Verified','Bookings','Actions'].map(h => <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={9} className="px-4 py-12 text-center text-sm text-gray-400">No customers found for this filter.</td></tr>
              ) : filtered.map(c => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-xs font-mono text-gray-500">{c.id}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-400 to-amber-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">{c.name.split(' ').map(n => n[0]).join('')}</div><span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{c.name}</span></div></td>
                  <td className="px-4 py-3"><div className="text-xs text-gray-600">{c.email}</div><div className="text-xs text-gray-400">{c.phone}</div></td>
                  <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{c.location}</td>
                  <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{c.registered}</td>
                  <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-4 py-3">{c.verified ? <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">✓ Verified</span> : <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">Unverified</span>}</td>
                  <td className="px-4 py-3 text-xs font-bold text-gray-700 text-center">{c.bookings}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-1.5"><button onClick={() => alert(`Viewing ${c.name}`)} className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"><Icon d={ICONS.eye} size={14} /></button><button onClick={() => alert(`Editing ${c.name}`)} className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-500 transition-colors"><Icon d={ICONS.edit} size={14} /></button><button onClick={() => alert(`Managing ${c.name}`)} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"><Icon d={ICONS.shield} size={14} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">Showing {filtered.length} of 4,821 customers</p>
          <div className="flex items-center gap-1">{[1,2,3,'...',482].map((p, i) => <button key={i} className={`w-7 h-7 text-xs rounded-lg font-semibold ${p === 1 ? 'bg-red-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>{p}</button>)}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        {[{ emoji: '🔍', title: 'Advanced Search & Filters', accentColor: 'bg-blue-50', points: ['Filter by name, mobile, email', 'Filter by location & date range', 'Filter by account status', 'Quick keyword search'] }, { emoji: '👤', title: 'Profile Access', accentColor: 'bg-purple-50', points: ['View personal info & preferences', 'Access full booking history', 'View activity & audit logs', 'Communication records'] }, { emoji: '🔒', title: 'Account Status Management', accentColor: 'bg-green-50', points: ['Activate or deactivate accounts', 'Block suspicious users', 'Policy-based enforcement', 'Reinstatement workflows'] }, { emoji: '📤', title: 'Export Data', accentColor: 'bg-amber-50', points: ['Download as CSV or Excel', 'Filter before export', 'Scheduled report exports', 'Analytics-ready format'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

// ─── VENDOR OVERVIEW WITH FILTERING (UPDATED) ─────────────────────────────────────
// ─── UPDATED VENDOR OVERVIEW WITH PROPER FILTERING ─────────────────────────────────
const VendorOverview = ({ onSelectCategory }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const allVendors = [
    { id: 'PHO001', name: 'LensArt Studio', category: 'Photography', location: 'Mumbai', status: 'Active', rating: 4.9, verified: true, bookings: 124 },
    { id: 'PHO002', name: 'Shutter Stories', category: 'Photography', location: 'Delhi', status: 'Active', rating: 4.7, verified: true, bookings: 89 },
    { id: 'PHO003', name: 'Golden Moments', category: 'Photography', location: 'Bangalore', status: 'Pending', rating: 4.5, verified: false, bookings: 67 },
    { id: 'CAT001', name: 'Royal Feast', category: 'Catering', location: 'Delhi', status: 'Active', rating: 4.8, verified: true, bookings: 112 },
    { id: 'CAT002', name: 'Spice Garden', category: 'Catering', location: 'Chennai', status: 'Active', rating: 4.6, verified: true, bookings: 78 },
    { id: 'CAT003', name: "Nawab's Kitchen", category: 'Catering', location: 'Lucknow', status: 'Active', rating: 4.5, verified: true, bookings: 54 },
    { id: 'HAL001', name: 'Grand Palace Banquets', category: 'Wedding Halls', location: 'Mumbai', status: 'Active', rating: 4.9, verified: true, bookings: 89 },
    { id: 'HAL002', name: 'Lakeview Convention', category: 'Wedding Halls', location: 'Udaipur', status: 'Active', rating: 4.8, verified: true, bookings: 56 },
    { id: 'ENT001', name: 'DJ Rhythm Pro', category: 'Entertainment & Events', location: 'Bangalore', status: 'Active', rating: 4.9, verified: true, bookings: 134 },
    { id: 'DEC001', name: 'Dream Decor Co.', category: 'Decorations', location: 'Bangalore', status: 'Active', rating: 4.8, verified: true, bookings: 94 },
  ];
  
  const getFilteredCount = (filter) => {
    if (filter === 'Active') return allVendors.filter(v => v.status === 'Active').length;
    if (filter === 'Pending') return allVendors.filter(v => v.status === 'Pending').length;
    if (filter === 'Verified') return allVendors.filter(v => v.verified === true).length;
    if (filter === 'Top Rated') return allVendors.filter(v => v.rating >= 4.5).length;
    return allVendors.length;
  };
  
  const statCards = [
    { label: 'Total Vendors', value: getFilteredCount('All'), icon: '🏢', color: 'border-amber-400', filter: 'All' },
    { label: 'Active Vendors', value: getFilteredCount('Active'), icon: '✅', color: 'border-green-400', filter: 'Active' },
    { label: 'Pending Approval', value: getFilteredCount('Pending'), icon: '⏳', color: 'border-blue-400', filter: 'Pending' },
    { label: 'Verified Vendors', value: getFilteredCount('Verified'), icon: '🛡️', color: 'border-purple-400', filter: 'Verified' },
  ];
  
  const filteredVendors = allVendors.filter(v => {
    if (activeFilter === 'Active') return v.status === 'Active';
    if (activeFilter === 'Pending') return v.status === 'Pending';
    if (activeFilter === 'Verified') return v.verified === true;
    if (activeFilter === 'Top Rated') return v.rating >= 4.5;
    return true;
  });
  
  const categories = [
    { label: 'Photography', count: 67, icon: '📸', color: 'from-pink-50 to-red-50 border-pink-200' },
    { label: 'Catering', count: 54, icon: '🍽️', color: 'from-orange-50 to-amber-50 border-orange-200' },
    { label: 'Wedding Halls', count: 87, icon: '🏛️', color: 'from-blue-50 to-cyan-50 border-blue-200' },
    { label: 'Entertainment & Events', count: 42, icon: '🎶', color: 'from-violet-50 to-purple-50 border-violet-200' },
    { label: 'Decorations', count: 48, icon: '🎊', color: 'from-purple-50 to-pink-50 border-purple-200' },
    { label: 'Invitations & Gifting', count: 35, icon: '🎁', color: 'from-rose-50 to-pink-50 border-rose-200' },
    { label: 'Groom & Bridal Styling', count: 39, icon: '💄', color: 'from-amber-50 to-yellow-50 border-amber-200' },
    { label: 'Pre Matrimonial Investigations', count: 18, icon: '🔍', color: 'from-slate-50 to-gray-50 border-slate-200' },
  ];
  
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mb-4">Click a category below or select from the sidebar to manage vendors by service type.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 mb-6">
        {categories.map((c, i) => (
          <div key={i} onClick={() => onSelectCategory(c.label)} className={`bg-gradient-to-br ${c.color} border rounded-2xl p-4 text-center cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5`}>
            <div className="text-2xl mb-1">{c.icon}</div>
            <p className="text-lg font-bold text-gray-800">{c.count}</p>
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider leading-tight">{c.label}</p>
          </div>
        ))}
      </div>
      
      {activeFilter !== 'All' && filteredVendors.length > 0 && (
        <div className="mt-6">
          <h4 className="font-bold text-gray-800 mb-3">
            {activeFilter === 'Active' ? 'Active Vendors' : 
             activeFilter === 'Pending' ? 'Pending Approval Vendors' :
             activeFilter === 'Verified' ? 'Verified Vendors' :
             activeFilter === 'Top Rated' ? 'Top Rated Vendors (4.5+)' : 'Filtered Vendors'}
          </h4>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-400">Vendor Name</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-400">Category</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-400">Location</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-400">Rating</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-400">Status</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredVendors.map(v => (
                  <tr key={v.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold">{v.name}</td>
                    <td className="px-4 py-3"><span className="text-xs px-2 py-0.5 rounded-lg bg-gray-100">{v.category}</span></td>
                    <td className="px-4 py-3 text-xs">{v.location}</td>
                    <td className="px-4 py-3"><span className="text-amber-400">★</span> {v.rating}</td>
                    <td className="px-4 py-3"><StatusBadge status={v.status} /></td>
                    <td className="px-4 py-3"><button className="text-blue-500 hover:bg-blue-50 p-1 rounded">View</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {activeFilter !== 'All' && filteredVendors.length === 0 && (
        <div className="mt-6 bg-white rounded-2xl p-8 text-center border border-gray-100">
          <p className="text-gray-400 text-sm">No {activeFilter.toLowerCase()} vendors found in the sample data.</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        {[{ emoji: '📋', title: 'Vendor Approval Process', accentColor: 'bg-amber-50', points: ['Review new registrations', 'Approve or reject applications', 'Request additional documents', 'Send approval notifications'] }, { emoji: '✅', title: 'Verification & Compliance', accentColor: 'bg-green-50', points: ['Business license verification', 'GST details check', 'KYC document review', 'Assign verified badge'] }, { emoji: '📈', title: 'Performance Monitoring', accentColor: 'bg-blue-50', points: ['Track ratings & reviews', 'Monitor completed bookings', 'Customer feedback analysis', 'Performance improvement alerts'] }, { emoji: '⚙️', title: 'Availability & Service Control', accentColor: 'bg-purple-50', points: ['Enable or disable services', 'Manage vendor availability', 'Suspend underperforming vendors', 'Reactivate after review'] }].map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </div>
  );
};

// ─── GROUP LANDING PAGES (keeping original) ─────────────────────────────────────
const ManageServiceProvidersPage = ({ onSelect }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const categories = [
    { label: 'Photography', count: 67, icon: '📸', color: 'from-pink-50 to-red-50 border-pink-200', desc: 'Wedding, Candid, Traditional & Pre-wedding' },
    { label: 'Catering', count: 54, icon: '🍽️', color: 'from-orange-50 to-amber-50 border-orange-200', desc: 'Multi-Cuisine, South & North Indian Caterers' },
    { label: 'Wedding Halls', count: 87, icon: '🏛️', color: 'from-blue-50 to-cyan-50 border-blue-200', desc: 'Banquet Halls, Venues & Convention Centers' },
    { label: 'Entertainment & Events', count: 42, icon: '🎶', color: 'from-violet-50 to-purple-50 border-violet-200', desc: 'DJs, Live Bands, Emcees & Dancers' },
    { label: 'Decorations', count: 48, icon: '🎊', color: 'from-purple-50 to-pink-50 border-purple-200', desc: 'Stage, Floral, Mandap & Reception Themes' },
    { label: 'Invitations & Gifting', count: 35, icon: '🎁', color: 'from-rose-50 to-pink-50 border-rose-200', desc: 'Printed Cards, Digital Invites & Hampers' },
    { label: 'Groom & Bridal Styling', count: 39, icon: '💄', color: 'from-amber-50 to-yellow-50 border-amber-200', desc: 'Bridal Makeup, Groom Styling & Hairstyling' },
    { label: 'Pre Matrimonial Investigations', count: 18, icon: '🔍', color: 'from-slate-50 to-gray-50 border-slate-200', desc: 'Background Checks & Employment Verification' },
  ];
  
  const statCards = [
    { label: 'Total Vendors', value: '326', icon: '🏢', color: 'border-amber-400', filter: 'All' },
    { label: 'Active Vendors', value: '271', icon: '✅', color: 'border-green-400', filter: 'Active' },
    { label: 'Categories', value: '8', icon: '🗂️', color: 'border-blue-400', filter: 'All' },
    { label: 'Pending Approval', value: '48', icon: '⏳', color: 'border-red-400', filter: 'Pending' },
  ];
  
  const filteredCategories = categories.filter(c => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Active') return c.count > 30;
    if (activeFilter === 'Pending') return c.label === 'Photography' || c.label === 'Catering';
    return true;
  });
  
  const matchSearch = !search || 
    categories.some(c => c.label.toLowerCase().includes(search.toLowerCase()) || 
                         c.desc.toLowerCase().includes(search.toLowerCase()));
  
  const displayCategories = search ? categories.filter(c => 
    c.label.toLowerCase().includes(search.toLowerCase()) || 
    c.desc.toLowerCase().includes(search.toLowerCase())
  ) : filteredCategories;
  
  return (
    <div>
      <div className="rounded-2xl p-6 mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🏪</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Manage Service Providers</h3>
            <p className="text-sm text-gray-500 mt-0.5">Select a service category below to manage vendors by type</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
            <input 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              type="text" 
              placeholder="Search by category name or description..." 
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            <Icon d={ICONS.filter} size={14} />Filters
          </button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {['All', 'Active', 'Pending', 'Verified'].map(f => (
            <button 
              key={f} 
              onClick={() => setActiveFilter(f)} 
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              {f}
            </button>
          ))}
        </div>
        {activeFilter !== 'All' && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-gray-500">Filtered by:</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-700 text-xs font-semibold rounded-full">
              {activeFilter}
              <button onClick={() => setActiveFilter('All')} className="ml-1 hover:text-red-900">✕</button>
            </span>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {displayCategories.length === 0 ? (
          <div className="col-span-full text-center py-10 text-gray-400">No categories found for "{search || activeFilter}" filter.</div>
        ) : (
          displayCategories.map((c, i) => (
            <div key={i} onClick={() => onSelect(c.label)} className={`bg-gradient-to-br ${c.color} border rounded-2xl p-5 cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">{c.icon}</div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{c.count}</p>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">vendors</p>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-700 mb-1">{c.label}</p>
              <p className="text-[11px] text-gray-500 leading-tight">{c.desc}</p>
              <div className="mt-3 flex items-center gap-1 text-red-600 text-xs font-semibold">
                <span>Manage →</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// ─── UPDATED ACTIONS PAGE WITH PROPER FILTERING ─────────────────────────────────
const ActionsPage = ({ onSelect }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const actions = [
    { 
      label: 'Approve / Reject Vendor Registration', 
      icon: '📝', 
      gradient: 'from-amber-50 to-orange-50 border-amber-200', 
      iconBg: 'bg-amber-100 text-amber-700', 
      desc: 'Review incoming vendor registration requests, validate submitted documents, and approve or reject applications with proper reasons.', 
      points: ['Registration request review', 'Document verification checklist', 'Approval / rejection actions', 'Automated notification system'],
      status: 'Pending',
      count: 21
    },
    { 
      label: 'Verify Business Details', 
      icon: '✅', 
      gradient: 'from-green-50 to-emerald-50 border-green-200', 
      iconBg: 'bg-green-100 text-green-700', 
      desc: 'Review and verify complete vendor profiles including documents, KYC checks, and service quality assessment before going live.', 
      points: ['Full profile review & validation', 'KYC & identity verification', 'Portfolio quality assessment', 'Audit logs & status tracking'],
      status: 'In Progress',
      count: 34
    },
    { 
      label: 'Manage Vendor Profiles', 
      icon: '⚙️', 
      gradient: 'from-blue-50 to-indigo-50 border-blue-200', 
      iconBg: 'bg-blue-100 text-blue-700', 
      desc: 'Edit, update and control all vendor profile information including services, pricing, availability, and portfolio content.', 
      points: ['Edit services & pricing', 'Portfolio management', 'Availability control', 'Performance & audit logs'],
      status: 'Active',
      count: 271
    },
    { 
      label: 'Activate / Deactivate Vendors', 
      icon: '🔄', 
      gradient: 'from-purple-50 to-violet-50 border-purple-200', 
      iconBg: 'bg-purple-100 text-purple-700', 
      desc: 'Toggle vendor account status between Active, Inactive, and Suspended. Supports bulk actions for efficient management.', 
      points: ['One-click status toggle', 'Bulk activate / deactivate', 'Reason-based deactivation', 'Status change notifications'],
      status: 'Active',
      count: 9
    },
  ];
  
  const statCards = [
    { label: 'Pending Registration', value: '21', icon: '📝', color: 'border-amber-400', filter: 'Pending' },
    { label: 'Profiles Under Review', value: '34', icon: '🔍', color: 'border-blue-400', filter: 'In Progress' },
    { label: 'Active Vendors', value: '271', icon: '✅', color: 'border-green-400', filter: 'Active' },
    { label: 'Suspended Accounts', value: '9', icon: '🚫', color: 'border-red-400', filter: 'Suspended' },
  ];
  
  const filteredActions = actions.filter(a => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Pending') return a.status === 'Pending';
    if (activeFilter === 'In Progress') return a.status === 'In Progress';
    if (activeFilter === 'Active') return a.status === 'Active';
    if (activeFilter === 'Suspended') return a.label === 'Activate / Deactivate Vendors';
    return true;
  });
  
  const displayActions = search ? actions.filter(a => 
    a.label.toLowerCase().includes(search.toLowerCase()) || 
    a.desc.toLowerCase().includes(search.toLowerCase())
  ) : filteredActions;
  
  return (
    <div>
      <div className="rounded-2xl p-6 mb-6 bg-gradient-to-r from-slate-50 to-gray-100 border border-slate-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">⚙️</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Vendor Actions</h3>
            <p className="text-sm text-gray-500 mt-0.5">Manage vendor registrations, profiles, and account status</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
            <input 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              type="text" 
              placeholder="Search by action name or description..." 
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            <Icon d={ICONS.filter} size={14} />Filters
          </button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {['All', 'Pending', 'In Progress', 'Active', 'Suspended'].map(f => (
            <button 
              key={f} 
              onClick={() => setActiveFilter(f)} 
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              {f}
            </button>
          ))}
        </div>
        {activeFilter !== 'All' && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-gray-500">Filtered by:</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-700 text-xs font-semibold rounded-full">
              {activeFilter === 'Pending' ? 'Pending Registration' : 
               activeFilter === 'In Progress' ? 'Profiles Under Review' :
               activeFilter === 'Active' ? 'Active Vendors' :
               activeFilter === 'Suspended' ? 'Suspended Accounts' : activeFilter}
              <button onClick={() => setActiveFilter('All')} className="ml-1 hover:text-red-900">✕</button>
            </span>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {displayActions.length === 0 ? (
          <div className="col-span-full text-center py-10 text-gray-400">No actions found for "{search || activeFilter}" filter.</div>
        ) : (
          displayActions.map((item, i) => (
            <div key={i} onClick={() => onSelect(item.label)} className={`bg-gradient-to-br ${item.gradient} border rounded-2xl p-5 cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${item.iconBg}`}>{item.icon}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-sm leading-tight">{item.label}</h4>
                  {activeFilter !== 'All' && (
                    <p className="text-[10px] font-semibold mt-1" style={{ color: activeFilter === 'Pending' ? '#d97706' : activeFilter === 'In Progress' ? '#3b82f6' : activeFilter === 'Active' ? '#10b981' : '#ef4444' }}>
                      {item.count} {activeFilter === 'Pending' ? 'pending' : activeFilter === 'In Progress' ? 'under review' : activeFilter === 'Active' ? 'active' : 'suspended'}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">{item.desc}</p>
              <ul className="space-y-1.5">
                {item.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-1 text-red-600 text-xs font-bold">
                <span>Open Section →</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// ─── UPDATED VENDOR VERIFICATION PAGE WITH PROPER FILTERING ──────────────────────
const VendorVerificationPage = ({ onSelect }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const verificationItems = [
    { 
      label: 'Verify: Business License', 
      icon: '🏢', 
      gradient: 'from-emerald-50 to-teal-50 border-emerald-200', 
      iconBg: 'bg-emerald-100 text-emerald-700', 
      desc: 'Validate vendor business registration certificates and ensure all vendors operate with valid legal licenses.', 
      points: ['Business name & reg. number check', 'Issuing authority verification', 'Validity & expiry tracking', 'Renewal alerts & compliance'],
      status: 'Expiring',
      count: 14
    },
    { 
      label: 'Verify: GST Details', 
      icon: '🧾', 
      gradient: 'from-cyan-50 to-sky-50 border-cyan-200', 
      iconBg: 'bg-cyan-100 text-cyan-700', 
      desc: 'Validate GSTIN numbers and ensure vendors meet tax compliance requirements before receiving bookings or payments.', 
      points: ['GSTIN number validation', 'Government API auto-check', 'Business type & address verify', 'Fraud detection for fake GSTs'],
      status: 'Pending',
      count: 29
    },
    { 
      label: 'Verify: ID Proof', 
      icon: '🪪', 
      gradient: 'from-violet-50 to-purple-50 border-violet-200', 
      iconBg: 'bg-violet-100 text-violet-700', 
      desc: 'Perform identity verification using government-issued ID documents with KYC integration and photo matching.', 
      points: ['Aadhaar, PAN, Passport, DL', 'Photo identity matching', 'KYC via HyperVerge / Signzy', 'Fraud & impersonation detection'],
      status: 'Pending',
      count: 38
    },
    { 
      label: 'Assign: ✅ Verified Vendor Badge', 
      icon: '🏅', 
      gradient: 'from-green-50 to-teal-50 border-green-200', 
      iconBg: 'bg-green-100 text-green-700', 
      desc: 'View all approved verified vendors, assign trust badges, monitor performance, and manage re-verification alerts.', 
      points: ['Verified vendor listing', 'Badge assignment & revocation', 'Re-verification expiry alerts', 'Performance insights & export'],
      status: 'Completed',
      count: 241
    },
  ];
  
  const statCards = [
    { label: 'Fully Verified', value: '241', icon: '✅', color: 'border-green-400', filter: 'Completed' },
    { label: 'Pending Verification', value: '67', icon: '⏳', color: 'border-amber-400', filter: 'Pending' },
    { label: 'Documents Expiring', value: '14', icon: '⚠️', color: 'border-orange-400', filter: 'Expiring' },
    { label: 'Rejected', value: '12', icon: '❌', color: 'border-red-400', filter: 'Rejected' },
  ];
  
  const filteredItems = verificationItems.filter(i => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Pending') return i.status === 'Pending';
    if (activeFilter === 'Completed') return i.status === 'Completed';
    if (activeFilter === 'Expiring') return i.status === 'Expiring';
    if (activeFilter === 'Rejected') return i.label === 'Verify: ID Proof';
    return true;
  });
  
  const displayItems = search ? verificationItems.filter(i => 
    i.label.toLowerCase().includes(search.toLowerCase()) || 
    i.desc.toLowerCase().includes(search.toLowerCase())
  ) : filteredItems;
  
  return (
    <div>
      <div className="rounded-2xl p-6 mb-6 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🔐</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Vendor Verification</h3>
            <p className="text-sm text-gray-500 mt-0.5">Verify vendor documents, GST, ID proof and assign verified badges</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {statCards.map((s, i) => (
          <div key={i} onClick={() => setActiveFilter(s.filter)}
            className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${s.color} cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${activeFilter === s.filter ? 'ring-2 ring-offset-1 ring-red-400 shadow-md' : ''}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                <p className="text-3xl font-bold text-gray-800">{s.value}</p>
                {activeFilter === s.filter && <p className="text-[10px] text-red-500 font-bold mt-1">● Active Filter</p>}
              </div>
              <div className="text-2xl">{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Icon d={ICONS.search} size={15} /></span>
            <input 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              type="text" 
              placeholder="Search by verification type or description..." 
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 bg-gray-50" 
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            <Icon d={ICONS.filter} size={14} />Filters
          </button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {['All', 'Pending', 'Completed', 'Expiring', 'Rejected'].map(f => (
            <button 
              key={f} 
              onClick={() => setActiveFilter(f)} 
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${activeFilter === f ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              {f}
            </button>
          ))}
        </div>
        {activeFilter !== 'All' && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-gray-500">Filtered by:</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-700 text-xs font-semibold rounded-full">
              {activeFilter === 'Pending' ? 'Pending Verification' : 
               activeFilter === 'Completed' ? 'Fully Verified' :
               activeFilter === 'Expiring' ? 'Documents Expiring' :
               activeFilter === 'Rejected' ? 'Rejected' : activeFilter}
              <button onClick={() => setActiveFilter('All')} className="ml-1 hover:text-red-900">✕</button>
            </span>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {displayItems.length === 0 ? (
          <div className="col-span-full text-center py-10 text-gray-400">No verification items found for "{search || activeFilter}" filter.</div>
        ) : (
          displayItems.map((item, i) => (
            <div key={i} onClick={() => onSelect(item.label)} className={`bg-gradient-to-br ${item.gradient} border rounded-2xl p-5 cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${item.iconBg}`}>{item.icon}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-sm leading-tight">{item.label}</h4>
                  {activeFilter !== 'All' && (
                    <p className="text-[10px] font-semibold mt-1" style={{ color: activeFilter === 'Pending' ? '#f59e0b' : activeFilter === 'Completed' ? '#10b981' : activeFilter === 'Expiring' ? '#f97316' : '#ef4444' }}>
                      {item.count} {activeFilter === 'Pending' ? 'pending verification' : activeFilter === 'Completed' ? 'verified' : activeFilter === 'Expiring' ? 'expiring soon' : 'rejected'}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">{item.desc}</p>
              <ul className="space-y-1.5">
                {item.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-1 text-blue-600 text-xs font-bold">
                <span>Open Section →</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// ─── MENU CONFIG ─────────────────────────────────────────
const vendorGroups = [
  { id: 'categories', emoji: '🏪', label: 'Manage Service Providers', groupKey: '__group_categories__', children: ['Photography', 'Catering', 'Wedding Halls', 'Entertainment & Events', 'Decorations', 'Invitations & Gifting', 'Groom & Bridal Styling', 'Pre Matrimonial Investigations'] },
  { id: 'actions', emoji: '⚙️', label: 'Actions', groupKey: '__group_actions__', children: ['Approve / Reject Vendor Registration', 'Verify Business Details', 'Manage Vendor Profiles', 'Activate / Deactivate Vendors'] },
  { id: 'verification', emoji: '✅', label: 'Vendor Verification', groupKey: '__group_verification__', children: ['Verify: Business License', 'Verify: GST Details', 'Verify: ID Proof', 'Assign: ✅ Verified Vendor Badge'] },
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
const RightPanel = ({ activeMenu, activeSubmenu, onSelectCategory, onNavigate }) => {
  const menu = menuConfig.find(m => m.id === activeMenu);
  if (activeMenu === 'dashboard') return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      <StatCard {...dashboardStats[0]} onClick={() => onNavigate('customers', 'View All Registered Customers')} />
      <StatCard {...dashboardStats[1]} onClick={() => onNavigate('vendors', null)} />
      <StatCard {...dashboardStats[2]} onClick={() => onNavigate('bookings', 'View all bookings')} />
      <StatCard {...dashboardStats[3]} onClick={() => onNavigate('bookings', 'Status: Completed')} />
      <StatCard {...dashboardStats[4]} onClick={() => onNavigate('payments', 'Track Customer Payments')} />
      <StatCard {...dashboardStats[5]} onClick={() => onNavigate('complaints', 'Customer Complaints')} />
    </div>
  );
  if (activeMenu === 'customers') {
    if (activeSubmenu === 'View All Registered Customers') return <ViewAllCustomers />;
    if (activeSubmenu === 'Track Booking History') return <TrackBookingHistory />;
    if (activeSubmenu === 'Manage Profiles & Preferences') return <ManageProfiles />;
    if (activeSubmenu === 'Handle Complaints & Support Issues') return <HandleComplaints />;
    return <CustomerManagementPage onSelect={(sub) => onNavigate('customers', sub)} />;
  }
  if (activeMenu === 'vendors') {
    if (activeSubmenu === '__group_categories__') return <ManageServiceProvidersPage onSelect={onSelectCategory} />;
    if (activeSubmenu === '__group_actions__') return <ActionsPage onSelect={onSelectCategory} />;
    if (activeSubmenu === '__group_verification__') return <VendorVerificationPage onSelect={onSelectCategory} />;
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
    {vendorGroups.map((group) => {
      const isGroupActive = activeSubmenu === group.groupKey && activeMenu === 'vendors';
      return (
        <div key={group.id}>
          <button
            onClick={() => onSelect('vendors', group.groupKey)}
            className={`w-full flex items-center gap-1.5 px-2 py-1.5 mt-1 rounded-lg text-left transition-all duration-150 ${isGroupActive ? 'bg-amber-200 border border-amber-400' : 'hover:bg-amber-50'}`}
            style={{ background: isGroupActive ? '#fde68a' : 'linear-gradient(90deg, #fef9ec 0%, #fffdf7 100%)', border: `1px solid ${isGroupActive ? '#f59e0b' : '#f5d97a'}` }}
          >
            <span style={{ fontSize: 13 }}>{group.emoji}</span>
            <span className="text-[11px] font-bold uppercase tracking-wider flex-1" style={{ color: '#b8860b' }}>{group.label}</span>
            <span className="text-[10px]" style={{ color: '#b8860b' }}>›</span>
          </button>
          <div className="ml-2 mt-0.5 space-y-0.5">
            {group.children.map((child, idx) => {
              const isActiveSub = activeSubmenu === child && activeMenu === 'vendors';
              return (
                <button key={idx} onClick={() => onSelect('vendors', child)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all duration-150 ${isActiveSub ? 'bg-red-600 text-white font-semibold' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                  {child}
                </button>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [expandedMenus, setExpandedMenus] = useState({ dashboard: true, customers: false, vendors: false, bookings: false, payments: false, complaints: false, analytics: false, roles: false, notifications: false, settings: false });
  const [showNotifications, setShowNotifications] = useState(false);
  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const toggleMenu = (id) => {
    setExpandedMenus(prev => {
      const isCurrentlyExpanded = prev[id];
      const next = {};
      Object.keys(prev).forEach(k => { next[k] = false; });
      next[id] = !isCurrentlyExpanded;
      return next;
    });
    setActiveMenu(id);
    setActiveSubmenu(null);
  };
  const handleSubmenu = (menuId, sub) => { setActiveMenu(menuId); setActiveSubmenu(sub); };
  const handleSelectCategory = (label) => { setActiveMenu('vendors'); setActiveSubmenu(label); setExpandedMenus(prev => ({ ...prev, vendors: true })); };
  const activeMenuLabel = menuConfig.find(m => m.id === activeMenu)?.label || 'Dashboard Overview';
  const handleLogout = () => { if (window.confirm('Are you sure you want to logout?')) { alert('Logged out successfully!'); } };
  const handleNavigate = (menuId, sub) => {
    setActiveMenu(menuId);
    setActiveSubmenu(sub);
    setExpandedMenus(prev => {
      const next = {};
      Object.keys(prev).forEach(k => { next[k] = false; });
      next[menuId] = true;
      return next;
    });
  };

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
            <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors">
              <Icon d={ICONS.bell} size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              {showNotifications && (
                <div className="absolute right-0 top-10 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 p-4">
                  <p className="text-xs font-bold text-gray-700 mb-3">Notifications</p>
                  {[{ msg: '3 new vendor registrations pending', time: '5 min ago', color: 'bg-amber-50 text-amber-700' }, { msg: 'Payment received from Aarav Patel', time: '20 min ago', color: 'bg-green-50 text-green-700' }, { msg: 'Complaint TKT002 escalated', time: '1 hr ago', color: 'bg-red-50 text-red-700' }].map((n, i) => (
                    <div key={i} className="mb-2 last:mb-0">
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${n.color}`}>{n.msg}</span>
                      <p className="text-[10px] text-gray-400 mt-0.5 pl-1">{n.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm"><Icon d={ICONS.logout} size={16} />Logout</button>
          </div>
        </header>
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="font-semibold text-red-600">Admin</span>
            <Icon d={ICONS.chevronRight} size={12} />
            <span className={`font-semibold ${activeSubmenu ? 'text-gray-500' : 'text-gray-700'}`}>{activeMenuLabel}</span>
            {activeSubmenu && <><Icon d={ICONS.chevronRight} size={12} /><span className="font-semibold text-gray-700">{activeSubmenu === '__group_categories__' ? 'Manage Service Providers' : activeSubmenu === '__group_actions__' ? 'Actions' : activeSubmenu === '__group_verification__' ? 'Vendor Verification' : activeSubmenu}</span></>}
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              {activeSubmenu === '__group_categories__' ? 'Manage Service Providers' : activeSubmenu === '__group_actions__' ? 'Vendor Actions' : activeSubmenu === '__group_verification__' ? 'Vendor Verification' : activeSubmenu || activeMenuLabel}
            </h2>
            {activeMenu === 'dashboard' && <p className="text-sm text-gray-400 mt-0.5">Welcome back, Admin. Here's what's happening today.</p>}
          </div>
          <RightPanel activeMenu={activeMenu} activeSubmenu={activeSubmenu} onSelectCategory={handleSelectCategory} onNavigate={handleNavigate} />
        </main>
      </div>

      <style>{`* { box-sizing: border-box; } body { margin: 0; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #f9fafb; } ::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; } ::-webkit-scrollbar-thumb:hover { background: #d1d5db; }`}</style>
    </div>
  );
}