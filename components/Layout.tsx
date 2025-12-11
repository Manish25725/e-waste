import React from 'react';
import { NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  role: 'Admin' | 'Agency' | 'User';
}

const Layout: React.FC<LayoutProps> = ({ children, title, subtitle, role }) => {
  const agencyNav: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', path: '#/agency' },
    { label: 'Manage Slots', icon: 'calendar_month', path: '#/agency/slots', active: title === 'Manage Slots' },
    { label: 'Bookings', icon: 'book_online', path: '#/agency/bookings' },
    { label: 'Reports', icon: 'bar_chart', path: '#/agency/reports' },
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
    { label: 'Agencies', icon: 'store', path: '#/admin/agencies' },
    { label: 'Users', icon: 'group', path: '#/admin/users' },
    { label: 'Content', icon: 'article', path: '#/admin/content' },
  ];

  const currentNav = role === 'Agency' ? agencyNav : role === 'Admin' ? adminNav : userNav;
  const userEmail = role === 'Agency' ? 'admin@ecocycle.com' : role === 'Admin' ? 'super@ecocycle.com' : 'alex@example.com';
  const userName = role === 'Agency' ? 'EcoCycle Inc.' : role === 'Admin' ? 'Admin Panel' : 'Alex Morgan';

  return (
    <div className="flex min-h-screen w-full bg-background-dark text-text-primary font-sans">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 border-r border-border-dark bg-background-card flex flex-col z-20">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => window.location.hash = '#/'}>
            <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg border border-primary/20">
              <span className="material-symbols-outlined">recycling</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-bold text-white tracking-tight">{userName}</h1>
              <p className="text-xs text-text-secondary">{userEmail}</p>
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
                    ? 'bg-primary/10 text-primary border border-primary/10'
                    : 'text-text-secondary hover:bg-white/5 hover:text-white hover:translate-x-1'
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

        <div className="mt-auto p-6 border-t border-border-dark">
          <button 
            onClick={() => window.location.hash = '#/'}
            className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col gap-1">
             {/* Only show header if title is present */}
             {title && (
                 <div className="animate-fade-in-up">
                    <h1 className="text-3xl font-black tracking-tight text-white">{title}</h1>
                    {subtitle && <p className="text-text-secondary mt-1">{subtitle}</p>}
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