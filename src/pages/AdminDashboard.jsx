import React, { useState } from 'react';

// ─── ICONS ───────────────────────────────────────────────
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
  users: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  check: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  revenue: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
};

// ─── STAT CARD ───────────────────────────────────────────
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

// ─── VENDOR SUBMENU CONFIG ───────────────────────────────
// Each group has a highlighted header + its child items
const vendorGroups = [
  {
    id: 'manage-service-providers',
    emoji: '🏪',
    label: 'Manage Service Providers',
    children: [
      'Photography',
      'Catering',
      'Decoration',
      'Makeup Artists',
      'Wedding Planners',
      'Venues (Hall, Resort, Villa)',
    ],
  },
  {
    id: 'actions',
    emoji: '⚙️',
    label: 'Actions',
    children: [
      'Approve / Reject Vendor Registration',
      'Verify Business Details',
      'Manage Vendor Profiles',
      'Activate / Deactivate Vendors',
    ],
  },
  {
    id: 'vendor-verification',
    emoji: '✅',
    label: 'Vendor Verification',
    children: [
      'Verify: Business License',
      'Verify: GST Details',
      'Verify: ID Proof',
      'Assign: ✅ Verified Vendor Badge',
    ],
  },
];

// ─── SIDEBAR MENU CONFIG ─────────────────────────────────
const menuConfig = [
  {
    id: 'dashboard',
    label: 'Dashboard Overview',
    icon: ICONS.dashboard,
    color: 'text-red-600',
    submenus: [],
    vendorStyle: false,
  },
  {
    id: 'customers',
    label: 'Customer Management',
    icon: ICONS.customers,
    color: 'text-blue-600',
    submenus: [
      'View All Registered Customers',
      'Track Booking History',
      'Manage Profiles And Preferences',
      'Handle Complaints And Support Issues',
    ],
    vendorStyle: false,
  },
  {
    id: 'vendors',
    label: 'Vendor Management',
    icon: ICONS.vendors,
    color: 'text-amber-600',
    submenus: [],
    vendorStyle: true,
  },
  {
    id: 'bookings',
    label: 'Booking Management',
    icon: ICONS.booking,
    color: 'text-green-600',
    submenus: [
      'View all bookings',
      'Track: Date, Time, Location',
      'Track: Vendor Assigned',
      'Status: Pending',
      'Status: Confirmed',
      'Status: Completed',
      'Status: Cancelled',
    ],
    vendorStyle: false,
  },
  {
    id: 'payments',
    label: 'Payments & Transactions',
    icon: ICONS.payments,
    color: 'text-purple-600',
    submenus: [
      'Track Customer Payments',
      'Vendor Payouts',
      'Payment Integration',
      'Generate Invoices',
      'Refund Management',
    ],
    vendorStyle: false,
  },
  {
    id: 'complaints',
    label: 'Complaints & Disputes',
    icon: ICONS.complaints,
    color: 'text-rose-600',
    submenus: [
      'Customer Complaints',
      'Vendor Disputes',
      'Resolution Tracking',
      'Admin Actions',
    ],
    vendorStyle: false,
  },
  {
    id: 'analytics',
    label: 'Analytics & Reports',
    icon: ICONS.analytics,
    color: 'text-cyan-600',
    submenus: [
      'Revenue Reports',
      'Vendor Performance',
      'Booking Trends',
      'Customer Growth',
    ],
    vendorStyle: false,
  },
  {
    id: 'roles',
    label: 'Admin Roles',
    icon: ICONS.roles,
    color: 'text-indigo-600',
    submenus: [
      'Super Admin',
      'Operations Manager',
      'Finance Manager',
      'Support Team',
    ],
    vendorStyle: false,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: ICONS.notifications,
    color: 'text-orange-500',
    submenus: [
      'Booking Alerts',
      'Payment Updates',
      'Vendor Approvals',
      'Customer Inquiries',
    ],
    vendorStyle: false,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: ICONS.settings,
    color: 'text-gray-600',
    submenus: [
      'Platform Configuration',
      'API Integrations',
      'Terms & Privacy Policy',
      'Notification Settings',
    ],
    vendorStyle: false,
  },
];

// ─── DASHBOARD STAT BUTTONS ──────────────────────────────
const dashboardStats = [
  { label: 'Total Customers', value: '4,821', icon: '👥', color: 'border-red-500', sub: '+128 this month' },
  { label: 'Total Vendors', value: '326', icon: '🏢', color: 'border-amber-500', sub: '48 pending approval' },
  { label: 'Active Bookings', value: '1,204', icon: '📅', color: 'border-green-500', sub: 'In progress' },
  { label: 'Completed Events', value: '8,432', icon: '✅', color: 'border-blue-500', sub: 'All time' },
  { label: 'Revenue Summary', value: '₹28,45,000', icon: '💰', color: 'border-purple-500', sub: '+12% vs last month' },
  { label: 'Pending Requests', value: '47', icon: '⏳', color: 'border-rose-500', sub: 'Needs review' },
];

// ─── RIGHT PANEL CONTENT ─────────────────────────────────
const RightPanel = ({ activeMenu, activeSubmenu }) => {
  const menu = menuConfig.find(m => m.id === activeMenu);

  if (activeMenu === 'dashboard') {
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
          {dashboardStats.map((s, i) => (
            <StatCard key={i} label={s.label} value={s.value} icon={s.icon} color={s.color} sub={s.sub} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-64 flex flex-col items-center justify-center text-center">
      <div className="text-5xl mb-4">🚧</div>
      <h3 className="text-xl font-bold text-gray-700 mb-2">{menu?.label}</h3>
      {activeSubmenu ? (
        <div className="mt-3">
          <span className="inline-block bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-2 text-sm font-semibold">
            {activeSubmenu}
          </span>
          <p className="text-gray-400 text-sm mt-3">Content for this section will be updated soon.</p>
        </div>
      ) : (
        <p className="text-gray-400 text-sm">Select a sub-menu from the left sidebar to get started.</p>
      )}
    </div>
  );
};

// ─── VENDOR SUBMENU SECTION ──────────────────────────────
const VendorSubmenus = ({ activeSubmenu, activeMenu, onSelect }) => (
  <div className="ml-4 mt-0.5 mb-1 border-l-2 border-gray-100 pl-3 space-y-1">
    {vendorGroups.map((group) => (
      <div key={group.id}>
        {/* Gold highlighted group header */}
        <div
          className="flex items-center gap-1.5 px-2 py-1.5 mt-1 rounded-lg"
          style={{
            background: 'linear-gradient(90deg, #fef9ec 0%, #fffdf7 100%)',
            border: '1px solid #f5d97a',
          }}
        >
          <span style={{ fontSize: 13 }}>{group.emoji}</span>
          <span
            className="text-[11px] font-bold uppercase tracking-wider"
            style={{ color: '#b8860b' }}
          >
            {group.label}
          </span>
        </div>

        {/* Children of this group */}
        <div className="ml-2 mt-0.5 space-y-0.5">
          {group.children.map((child, idx) => {
            const isActiveSub = activeSubmenu === child && activeMenu === 'vendors';
            return (
              <button
                key={idx}
                onClick={() => onSelect('vendors', child)}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all duration-150 ${
                  isActiveSub
                    ? 'bg-red-600 text-white font-semibold'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                }`}
              >
                {child}
              </button>
            );
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

  const toggleMenu = (id) => {
    setExpandedMenus(prev => ({ ...prev, [id]: !prev[id] }));
    setActiveMenu(id);
    setActiveSubmenu(null);
  };

  const handleSubmenu = (menuId, sub) => {
    setActiveMenu(menuId);
    setActiveSubmenu(sub);
  };

  const activeMenuLabel = menuConfig.find(m => m.id === activeMenu)?.label || 'Dashboard Overview';

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">

      {/* ── SIDEBAR ── */}
      <aside
        className={`${sidebarOpen ? 'w-72' : 'w-0 lg:w-16'} flex-shrink-0 bg-white border-r border-gray-100 shadow-sm flex flex-col transition-all duration-300 overflow-hidden z-30`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
          {sidebarOpen && (
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider leading-tight">Admin Panel</p>
                  <p className="text-[10px] text-gray-400 leading-tight">Wedding Services</p>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 flex-shrink-0"
          >
            <Icon d={sidebarOpen ? ICONS.close : ICONS.menu} size={18} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
          {menuConfig.map((item) => {
            const isActive = activeMenu === item.id;
            const isExpanded = expandedMenus[item.id];
            const hasSubmenus = item.submenus.length > 0 || item.vendorStyle;

            return (
              <div key={item.id}>
                {/* Main menu item */}
                <button
                  onClick={() => toggleMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-red-50 to-amber-50 border border-red-100'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span className={`flex-shrink-0 ${isActive ? item.color : 'text-gray-400 group-hover:text-gray-600'}`}>
                    <Icon d={item.icon} size={18} />
                  </span>
                  {sidebarOpen && (
                    <>
                      <span className={`flex-1 text-sm font-semibold truncate ${isActive ? 'text-gray-800' : 'text-gray-600'}`}>
                        {item.label}
                      </span>
                      {hasSubmenus && (
                        <span className={`text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                          <Icon d={ICONS.chevronDown} size={14} />
                        </span>
                      )}
                    </>
                  )}
                </button>

                {/* Submenus */}
                {sidebarOpen && isExpanded && (
                  <>
                    {/* Vendor special grouped submenus */}
                    {item.vendorStyle ? (
                      <VendorSubmenus
                        activeSubmenu={activeSubmenu}
                        activeMenu={activeMenu}
                        onSelect={handleSubmenu}
                      />
                    ) : (
                      item.submenus.length > 0 && (
                        <div className="ml-4 mt-0.5 mb-1 space-y-0.5 border-l-2 border-gray-100 pl-3">
                          {item.submenus.map((sub, idx) => {
                            const isActiveSub = activeSubmenu === sub && activeMenu === item.id;
                            return (
                              <button
                                key={idx}
                                onClick={() => handleSubmenu(item.id, sub)}
                                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all duration-150 ${
                                  isActiveSub
                                    ? 'bg-red-600 text-white font-semibold'
                                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                }`}
                              >
                                {sub}
                              </button>
                            );
                          })}
                        </div>
                      )
                    )}
                  </>
                )}
              </div>
            );
          })}
        </nav>

        {/* Admin User Footer */}
        {sidebarOpen && (
          <div className="px-4 py-3 border-t border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">A</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-700 truncate">Admin User</p>
                <p className="text-[10px] text-gray-400">SUPER ADMIN</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top Bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between flex-shrink-0 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <button
                className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 mr-1"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Icon d={ICONS.menu} size={20} />
              </button>
              <div>
                <h1 className="text-lg font-bold text-gray-800">
                  ADMIN PANEL – WEDDING SERVICES
                </h1>
                <p className="text-xs text-gray-400">{today}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors">
              <Icon d={ICONS.bell} size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm">
              <Icon d={ICONS.logout} size={16} />
              Logout
            </button>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="font-semibold text-red-600">Admin</span>
            <Icon d={ICONS.chevronRight} size={12} />
            <span className={`font-semibold ${activeSubmenu ? 'text-gray-500' : 'text-gray-700'}`}>{activeMenuLabel}</span>
            {activeSubmenu && (
              <>
                <Icon d={ICONS.chevronRight} size={12} />
                <span className="font-semibold text-gray-700">{activeSubmenu}</span>
              </>
            )}
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">

          {/* Page Title */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">{activeSubmenu || activeMenuLabel}</h2>
            {activeMenu === 'dashboard' && (
              <p className="text-sm text-gray-400 mt-0.5">Welcome back, Admin. Here's what's happening today.</p>
            )}
          </div>

          {/* Right Panel Content */}
          <RightPanel activeMenu={activeMenu} activeSubmenu={activeSubmenu} />
        </main>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #f9fafb; }
        ::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
      `}</style>
    </div>
  );
}