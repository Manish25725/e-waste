import React from 'react';
import { NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  role: 'Admin' | 'Agency' | 'User';
  fullWidth?: boolean;
  hideSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, title, subtitle, role, fullWidth = false, hideSidebar = false }) => {
  const agencyNav: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', path: '#/agency' },
    { label: 'Manage Slots', icon: 'calendar_month', path: '#/agency/slots', active: title === 'Manage Slots' },
    { label: 'Bookings', icon: 'book_online', path: '#/agency/bookings' },
    { label: 'Profile', icon: 'person', path: '#/agency/profile' },
    { label: 'Settings', icon: 'settings', path: '#/agency/settings' },
  ];

  const userNav: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', path: '#/dashboard' },
    { label: 'Book Pickup', icon: 'local_shipping', path: '#/search' },
    { label: 'Rewards', icon: 'military_tech', path: '#/rewards' },
    { label: 'Certificate', icon: 'workspace_premium', path: '#/certificate' },
    { label: 'How It Works', icon: 'info', path: '#/how-it-works' },
    { label: 'Profile', icon: 'person', path: '#/profile' },
  ];

  const adminNav: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', path: '#/admin' },
    { label: 'Users', icon: 'group', path: '#/admin/users' },
    { label: 'Vetting Queue', icon: 'verified_user', path: '#/admin/vetting' },
    { label: 'Agencies', icon: 'domain', path: '#/admin/agencies' },
    { label: 'Reports', icon: 'assessment', path: '#/admin/reports' },
  ];

  const currentNav = role === 'Agency' ? agencyNav : role === 'Admin' ? adminNav : userNav;
  const userEmail = role === 'Agency' ? 'admin@ecocycle.com' : role === 'Admin' ? 'super@ecocycle.com' : 'alex@example.com';
  const userName = role === 'Agency' ? 'EcoCycle Inc.' : role === 'Admin' ? 'Admin Panel' : 'Alex Morgan';

  return (
    <div className="flex min-h-screen w-full bg-[#0B1120] text-slate-300 font-sans selection:bg-[#34D399] selection:text-[#0B1120]">
      {/* Sidebar */}
      {!hideSidebar && (
        <aside className="fixed top-0 left-0 h-screen w-64 border-r border-white/5 bg-[#0B1120] flex flex-col z-20">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => window.location.hash = '#/'}>
              <div className="h-10 w-10 rounded-full bg-[#34D399]/10 text-[#34D399] flex items-center justify-center font-bold text-lg border border-[#34D399]/20 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                <span className="material-symbols-outlined">recycling</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-base font-bold text-white tracking-tight">{userName}</h1>
                <p className="text-xs text-slate-500">{userEmail}</p>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              {currentNav.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => { e.preventDefault(); window.location.hash = item.path; }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    item.active || window.location.hash === item.path
                      ? 'bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/10'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white hover:translate-x-1'
                  }`}
                >
                  <span className={`material-symbols-outlined ${item.active ? 'fill' : ''} text-xl`}>
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-6 border-t border-white/5">
            <button 
              onClick={() => window.location.hash = '#/'}
              className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">logout</span>
              Logout
            </button>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className={`flex-1 ${!hideSidebar ? 'ml-64' : ''} overflow-y-auto ${fullWidth ? 'p-0' : 'p-8'}`}>
        <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto'}>
          <div className={`flex flex-col gap-1 ${fullWidth ? 'hidden' : 'mb-8'}`}>
             {/* Only show header if title is present */}
             {title && (
                 <div className="animate-fade-in-up">
                    <h1 className="text-3xl font-black tracking-tight text-white">{title}</h1>
                    {subtitle && <p className="text-slate-400 mt-1">{subtitle}</p>}
                 </div>
             )}
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;