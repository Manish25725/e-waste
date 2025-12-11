import React from 'react';
import Layout from '../components/Layout';

const AdminDashboard = () => {
  return (
    <Layout title="" role="Admin" fullWidth>
      <div className="flex flex-col h-screen overflow-hidden bg-[#0B1120] text-white font-sans">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/5 bg-[#0B1120]/95 backdrop-blur px-8 py-5 z-10 shrink-0">
            <div className="flex items-center gap-4">
                <div>
                    <h2 className="text-white text-xl font-bold tracking-tight">Dashboard Overview</h2>
                    <p className="text-slate-400 text-xs hidden sm:block mt-0.5">Welcome back, here's what's happening today.</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative hidden md:block w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-500 text-[20px]">search</span>
                    </div>
                    <input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-[#1E293B] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#34D399] sm:text-sm transition-all" placeholder="Search platform..." type="text"/>
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0B1120]"></span>
                    </button>
                    <button className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                </div>
            </div>
        </header>

        {/* Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <div className="max-w-7xl mx-auto space-y-8 pb-10">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 group hover:border-white/10 transition-all shadow-xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-xl">
                                <span className="material-symbols-outlined text-blue-400">group</span>
                            </div>
                            <span className="flex items-center text-xs font-medium text-[#34D399] bg-[#34D399]/10 px-2 py-1 rounded-full border border-[#34D399]/10">
                                <span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span> +12.5%
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">24,892</h3>
                        <p className="text-slate-400 text-sm font-medium">Total Active Users</p>
                    </div>

                    {/* Card 2 */}
                    <a className="bg-[#1E293B] border border-[#34D399]/30 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#1E293B]/80 transition-all cursor-pointer shadow-xl block no-underline" href="#/admin/vetting">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#34D399]/5 rounded-full -mr-10 -mt-10 blur-2xl transition-all group-hover:bg-[#34D399]/10"></div>
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div className="p-3 bg-[#34D399]/10 rounded-xl group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[#34D399]">verified_user</span>
                            </div>
                            <span className="flex items-center text-xs font-bold text-[#0B1120] bg-[#34D399] px-2 py-1 rounded-full">
                                ACTION REQUIRED
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">4</h3>
                        <p className="text-[#34D399] text-sm font-medium flex items-center gap-1">
                            Pending Agency Approvals <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </p>
                    </a>

                    {/* Card 3 */}
                    <div className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 group hover:border-white/10 transition-all cursor-pointer shadow-xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-green-500/10 rounded-xl">
                                <span className="material-symbols-outlined text-green-400">recycling</span>
                            </div>
                            <span className="flex items-center text-xs font-medium text-[#34D399] bg-[#34D399]/10 px-2 py-1 rounded-full border border-[#34D399]/10">
                                <span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span> +8.2%
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">845.2 <span className="text-lg font-medium text-slate-400">Tons</span></h3>
                        <p className="text-slate-400 text-sm font-medium flex items-center gap-1 group-hover:text-white transition-colors">
                            Total E-Waste Collected <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 group hover:border-white/10 transition-all shadow-xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-purple-500/10 rounded-xl">
                                <span className="material-symbols-outlined text-purple-400">domain</span>
                            </div>
                            <span className="flex items-center text-xs font-medium text-slate-400 bg-[#0B1120] px-2 py-1 rounded-full border border-white/5">
                                <span className="material-symbols-outlined text-[14px] mr-0.5">remove</span> 0%
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">128</h3>
                        <p className="text-slate-400 text-sm font-medium">Verified Agencies</p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column (2/3) */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Recent Activity */}
                        <div className="bg-[#1E293B] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
                            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#1E293B]/50 backdrop-blur">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-lg bg-[#0B1120] border border-white/5">
                                        <span className="material-symbols-outlined text-slate-400 text-sm">history</span>
                                    </span>
                                    <h3 className="text-lg font-bold text-white">Recent Activity</h3>
                                </div>
                                <button className="text-xs text-[#34D399] hover:text-white font-medium transition-colors bg-transparent border-none cursor-pointer">View All History</button>
                            </div>
                            <div className="divide-y divide-white/5">
                                {/* Item 1 */}
                                <div className="p-4 hover:bg-[#0B1120]/30 transition-colors flex items-start gap-4">
                                    <div className="mt-1 relative">
                                        <div className="size-10 rounded-full bg-cover bg-center border border-white/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8PGjilEd7dviAc0qFQiWQM1ZY9po_qdUFVFDMP-09pLUQfva1CjGjM1y2D97TkTfIPx0GNu0mF5JTmF0DqvDJg_zWeKAqxhVy1yZEGM2Em20qYx90yvgmlloOQf6l-FC44OV6UDSYIYICm_oPGyoQRQZIrDAXwVJ_5ev5Rm8MfB1-q3ekhPiqBnP35YA8vXXpCalVfyLbhRcfvyEzjCKovu49qGCYZ5Ty9veN5dsWoYu0jpkup0ClQTqfd3bT5Tsn8FXsex_6HbQ")' }}></div>
                                        <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-0.5 border-2 border-[#1E293B]">
                                            <span className="material-symbols-outlined text-[10px] text-black font-bold block">priority_high</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm text-white font-medium">GreenEarth Recyclers <span className="font-normal text-slate-400">submitted a new application for</span> Verification</p>
                                            <span className="text-xs text-slate-500 whitespace-nowrap ml-4">2 hrs ago</span>
                                        </div>
                                        <p className="text-xs text-slate-400 mt-1">Application for full e-waste processing license pending review.</p>
                                        <div className="mt-3 flex gap-2">
                                            <button 
                                                onClick={() => window.location.hash = '#/admin/vetting'}
                                                className="text-xs bg-[#34D399]/10 text-[#34D399] px-3 py-1.5 rounded-lg border border-[#34D399]/20 hover:bg-[#34D399] hover:text-[#0B1120] transition-all font-semibold cursor-pointer"
                                            >
                                                Review Application
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="p-4 hover:bg-[#0B1120]/30 transition-colors flex items-start gap-4">
                                    <div className="mt-1 relative">
                                        <div className="size-10 rounded-full bg-cover bg-center border border-white/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDE5_XkA8brKDGCF0VlR1L9sRGfYvR8IqDr8t3iaXniXkkTOhDNsZvGHuwyUqdko9zziI7g-uGc0sMFf428DeU3zwxnSS9HNZuvlWm6ISEQ4NN2fEP_XUZUSaiLq78_pxe6Dw05fga3mRJO8Vpznn51TTveBviIAwhgN1OPtw9Jx3UAXKzYZR4g-df27gnRzShXJmbYa67ubykdg27u_TdYqIbKrf1UwbbHDiQIF92BjEgLva7fAY1vzWdZei9TU9eBuqQqc1MNaRY")' }}></div>
                                        <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border-2 border-[#1E293B]">
                                            <span className="material-symbols-outlined text-[10px] text-white font-bold block">edit</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm text-white font-medium">Urban Miners Co. <span className="font-normal text-slate-400">updated their pickup slots</span></p>
                                            <span className="text-xs text-slate-500 whitespace-nowrap ml-4">5 hrs ago</span>
                                        </div>
                                        <p className="text-xs text-slate-400 mt-1">Added 50 new slots for Zone B - Downtown District.</p>
                                    </div>
                                </div>
                                {/* Item 3 */}
                                <div className="p-4 hover:bg-[#0B1120]/30 transition-colors flex items-start gap-4">
                                    <div className="mt-1 relative">
                                        <div className="size-10 rounded-full bg-[#0B1120] flex items-center justify-center border border-white/5">
                                            <span className="material-symbols-outlined text-white">person_add</span>
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-[#1E293B]">
                                            <span className="material-symbols-outlined text-[10px] text-black font-bold block">add</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm text-white font-medium">New User Registration <span className="font-normal text-slate-400">on the platform</span></p>
                                            <span className="text-xs text-slate-500 whitespace-nowrap ml-4">8 hrs ago</span>
                                        </div>
                                        <p className="text-xs text-slate-400 mt-1">Welcome <span className="text-white">Sarah Jenkins</span> to EcoCycle.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 bg-[#0B1120]/20 text-center">
                                <button className="text-xs text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">Load more activity</button>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 shadow-xl">
                            <h3 className="text-lg font-bold text-white mb-6">Collection Trends (Weekly)</h3>
                            <div className="h-48 flex items-end justify-between gap-2 px-2">
                                {/* Bar 1 */}
                                <div className="w-full bg-[#0B1120]/50 rounded-t-sm relative group h-full flex flex-col justify-end">
                                    <div className="w-full bg-[#0B1120] hover:bg-[#34D399]/50 transition-colors rounded-t-sm relative bar-animate" style={{ height: '40%' }}>
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-xs py-1 px-2 rounded border border-white/10 transition-opacity whitespace-nowrap pointer-events-none">Mon: 120T</div>
                                    </div>
                                    <span className="text-[10px] text-slate-500 text-center mt-2">Mon</span>
                                </div>
                                {/* Bar 2 */}
                                <div className="w-full bg-[#0B1120]/50 rounded-t-sm relative group h-full flex flex-col justify-end">
                                    <div className="w-full bg-[#0B1120] hover:bg-[#34D399]/50 transition-colors rounded-t-sm relative bar-animate" style={{ height: '65%' }}>
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-xs py-1 px-2 rounded border border-white/10 transition-opacity whitespace-nowrap pointer-events-none">Tue: 195T</div>
                                    </div>
                                    <span className="text-[10px] text-slate-500 text-center mt-2">Tue</span>
                                </div>
                                {/* Bar 3 (Active) */}
                                <div className="w-full bg-[#0B1120]/50 rounded-t-sm relative group h-full flex flex-col justify-end">
                                    <div className="w-full bg-[#34D399] hover:bg-[#25cc5c] transition-colors rounded-t-sm relative bar-animate shadow-[0_0_15px_rgba(52,211,153,0.3)]" style={{ height: '85%' }}>
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-xs py-1 px-2 rounded border border-white/10 transition-opacity whitespace-nowrap pointer-events-none">Wed: 255T</div>
                                    </div>
                                    <span className="text-[10px] text-white font-bold text-center mt-2">Wed</span>
                                </div>
                                {/* Bar 4 */}
                                <div className="w-full bg-[#0B1120]/50 rounded-t-sm relative group h-full flex flex-col justify-end">
                                    <div className="w-full bg-[#0B1120] hover:bg-[#34D399]/50 transition-colors rounded-t-sm relative bar-animate" style={{ height: '55%' }}>
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-xs py-1 px-2 rounded border border-white/10 transition-opacity whitespace-nowrap pointer-events-none">Thu: 165T</div>
                                    </div>
                                    <span className="text-[10px] text-slate-500 text-center mt-2">Thu</span>
                                </div>
                                {/* Bar 5 */}
                                <div className="w-full bg-[#0B1120]/50 rounded-t-sm relative group h-full flex flex-col justify-end">
                                    <div className="w-full bg-[#0B1120] hover:bg-[#34D399]/50 transition-colors rounded-t-sm relative bar-animate" style={{ height: '45%' }}>
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-xs py-1 px-2 rounded border border-white/10 transition-opacity whitespace-nowrap pointer-events-none">Fri: 135T</div>
                                    </div>
                                    <span className="text-[10px] text-slate-500 text-center mt-2">Fri</span>
                                </div>
                                {/* Bar 6 */}
                                <div className="w-full bg-[#0B1120]/50 rounded-t-sm relative group h-full flex flex-col justify-end">
                                    <div className="w-full bg-[#0B1120] hover:bg-[#34D399]/50 transition-colors rounded-t-sm relative bar-animate" style={{ height: '30%' }}>
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-xs py-1 px-2 rounded border border-white/10 transition-opacity whitespace-nowrap pointer-events-none">Sat: 90T</div>
                                    </div>
                                    <span className="text-[10px] text-slate-500 text-center mt-2">Sat</span>
                                </div>
                                {/* Bar 7 */}
                                <div className="w-full bg-[#0B1120]/50 rounded-t-sm relative group h-full flex flex-col justify-end">
                                    <div className="w-full bg-[#0B1120] hover:bg-[#34D399]/50 transition-colors rounded-t-sm relative bar-animate" style={{ height: '25%' }}>
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-xs py-1 px-2 rounded border border-white/10 transition-opacity whitespace-nowrap pointer-events-none">Sun: 75T</div>
                                    </div>
                                    <span className="text-[10px] text-slate-500 text-center mt-2">Sun</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (1/3) */}
                    <div className="space-y-6">
                        {/* Platform Health */}
                        <div className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 shadow-xl">
                            <h3 className="text-lg font-bold text-white mb-4">Platform Health</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xs text-slate-400">Server Load</span>
                                        <span className="text-xs text-white font-medium">32%</span>
                                    </div>
                                    <div className="w-full bg-[#0B1120] rounded-full h-1.5">
                                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '32%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xs text-slate-400">Storage Usage</span>
                                        <span className="text-xs text-white font-medium">68%</span>
                                    </div>
                                    <div className="w-full bg-[#0B1120] rounded-full h-1.5">
                                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '68%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xs text-slate-400">API Latency</span>
                                        <span className="text-xs text-white font-medium">124ms</span>
                                    </div>
                                    <div className="w-full bg-[#0B1120] rounded-full h-1.5">
                                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-xs text-white font-medium">All systems operational</span>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 shadow-xl">
                            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                            <div className="space-y-2">
                                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#0B1120] text-slate-400 hover:text-white transition-colors border border-transparent hover:border-white/5 text-left cursor-pointer bg-transparent">
                                    <div className="bg-[#34D399]/10 text-[#34D399] p-2 rounded-lg">
                                        <span className="material-symbols-outlined text-[20px]">add_business</span>
                                    </div>
                                    <span className="text-sm font-medium">Invite new agency</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#0B1120] text-slate-400 hover:text-white transition-colors border border-transparent hover:border-white/5 text-left cursor-pointer bg-transparent">
                                    <div className="bg-blue-500/10 text-blue-400 p-2 rounded-lg">
                                        <span className="material-symbols-outlined text-[20px]">summarize</span>
                                    </div>
                                    <span className="text-sm font-medium">Generate Monthly Report</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#0B1120] text-slate-400 hover:text-white transition-colors border border-transparent hover:border-white/5 text-left cursor-pointer bg-transparent">
                                    <div className="bg-purple-500/10 text-purple-400 p-2 rounded-lg">
                                        <span className="material-symbols-outlined text-[20px]">settings_suggest</span>
                                    </div>
                                    <span className="text-sm font-medium">Update Compliance Rules</span>
                                </button>
                            </div>
                        </div>

                        {/* Support Queue */}
                        <div className="bg-gradient-to-br from-[#1E293B] to-[#0B1120] border border-white/5 rounded-2xl p-6 relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined text-6xl text-white">support_agent</span>
                            </div>
                            <h3 className="text-white font-bold mb-1 relative z-10">Support Queue</h3>
                            <p className="text-xs text-slate-400 mb-4 relative z-10">You have 12 unread tickets</p>
                            <div className="flex -space-x-2 mb-4 relative z-10">
                                <div className="size-8 rounded-full border-2 border-[#1E293B] bg-slate-600"></div>
                                <div className="size-8 rounded-full border-2 border-[#1E293B] bg-slate-500"></div>
                                <div className="size-8 rounded-full border-2 border-[#1E293B] bg-slate-400"></div>
                                <div className="size-8 rounded-full border-2 border-[#1E293B] bg-[#0B1120] flex items-center justify-center text-[10px] text-white font-bold">+9</div>
                            </div>
                            <button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-white transition-colors cursor-pointer relative z-10">
                                Go to Support Portal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;