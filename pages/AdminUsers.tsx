import React, { useState } from 'react';
import Layout from '../components/Layout';

// Mock Data
const users = [
  {
    id: 'USR-8892',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@example.com',
    role: 'Resident',
    status: 'Active',
    joinDate: 'Oct 24, 2023',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVBtFFBikFXrhcHpeTD52Rh_pquHuny88EB2EIetEc0lt1-pXtlUkgNQtj8dBbVK-LBLGXHS8CyeWTcmMm0asr4jZkM0ptFCnpfHYJUZ7qqw8oyda-hDKRcl5Wk59O8TBoPLcwA3w0kQHt-EoXZB5A0xq93j3ew5MaMEM1czccOK3O-RDpnpUSPw3UuTSzxhtK5F0WUGfcbzRD_DRTe0LCLEwNNqIGseXaUdbtDsanyJV0SMeg7Ho7fsAMO88EXEBpJysoKPLDNRc',
    phone: '+1 (555) 012-3456',
    address: '42 Green Way, Eco District, New York, NY 10001',
    dob: 'March 15, 1988',
    lastLogin: '2 hours ago',
    ecoPoints: 92,
    bookings: [
        { id: '#BK-921', date: 'Oct 20, 2023', items: 'Old Laptop, Batteries', status: 'Completed', agency: 'GreenEarth Recyclers' },
        { id: '#BK-844', date: 'Sep 15, 2023', items: 'Microwave', status: 'Completed', agency: 'Urban Miners Co.' },
        { id: '#BK-721', date: 'Aug 02, 2023', items: 'CRT Monitor', status: 'Cancelled', agency: 'TechCycle Solutions' }
    ]
  },
  {
    id: 'AGC-1029',
    name: 'GreenEarth Recyclers',
    email: 'contact@greenearth.co',
    role: 'Agency',
    status: 'Active',
    joinDate: 'Sep 12, 2023',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8PGjilEd7dviAc0qFQiWQM1ZY9po_qdUFVFDMP-09pLUQfva1CjGjM1y2D97TkTfIPx0GNu0mF5JTmF0DqvDJg_zWeKAqxhVy1yZEGM2Em20qYx90yvgmlloOQf6l-FC44OV6UDSYIYICm_oPGyoQRQZIrDAXwVJ_5ev5Rm8MfB1-q3ekhPiqBnP35YA8vXXpCalVfyLbhRcfvyEzjCKovu49qGCYZ5Ty9veN5dsWoYu0jpkup0ClQTqfd3bT5Tsn8FXsex_6HbQ',
    phone: '+1 (555) 999-8888',
    address: '10 Industrial Park, NY',
    dob: 'N/A',
    lastLogin: '1 day ago',
    ecoPoints: 0,
    bookings: []
  },
  {
    id: 'USR-3321',
    name: 'Mike Ross',
    email: 'mike.ross@email.com',
    role: 'Resident',
    status: 'Suspended',
    joinDate: 'Jan 05, 2023',
    avatar: null, // Fallback initials
    phone: '+1 (555) 000-1111',
    address: 'Unknown',
    dob: 'Unknown',
    lastLogin: '3 months ago',
    ecoPoints: 12,
    bookings: []
  },
  {
    id: 'AGC-5542',
    name: 'TechCycle Solutions',
    email: 'support@techcycle.io',
    role: 'Agency',
    status: 'Active',
    joinDate: 'Nov 18, 2023',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRGcBCzRiK11IwYi6qwyyfuXViUiULVYh3OZfB0KZwzfH2HSBh6zYLmj9CDN4k6O0zC41w07GAwiRi0IcNlV0aBbRgdSzIs_YcBqeVaQFbYm7LAC-7sV1sMGbJgJDgsXDiZn3LjHBoDnGFHXz7QKjKBmKQmmTwdCykaUbq8MqH0hEVhoOOzQ-LGvygPdM3aKZxZuky40k1exVWH02GkGHHS2H4BRy8UA1VW5NCb93lRoZwLLgjkqS1az-OaWQocuKufdodUE_tsQY',
    phone: '+1 (555) 777-6666',
    address: '22 Tech Ave, NY',
    dob: 'N/A',
    lastLogin: '5 mins ago',
    ecoPoints: 0,
    bookings: []
  }
];

const AdminUsers = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <Layout title="" role="Admin" fullWidth>
      <div className="flex flex-col h-screen overflow-hidden bg-[#0B1120] font-sans text-white">
        
        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/5 bg-[#0B1120]/95 backdrop-blur px-6 py-4 z-10 shrink-0">
            <div className="flex items-center gap-4">
                <h2 className="text-white text-xl font-bold tracking-tight hidden sm:block">User Management</h2>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative hidden md:block w-72">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-500 text-[20px]">search</span>
                    </div>
                    <input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-[#1E293B] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#34D399] sm:text-sm" placeholder="Search by name, email, or role..." type="text"/>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-3 py-1.5 rounded-lg bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/20 text-xs font-bold hover:bg-[#34D399]/20 transition-colors flex items-center gap-1 cursor-pointer">
                        <span className="material-symbols-outlined text-[16px]">add</span> Add User
                    </button>
                    <div className="h-6 w-px bg-white/5"></div>
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

        <div className="flex-1 flex overflow-hidden">
            {/* Left Panel: User List */}
            <div className="w-full lg:w-[400px] xl:w-[450px] border-r border-white/5 flex flex-col bg-[#0B1120] shrink-0">
                <div className="p-4 border-b border-white/5">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        <button className="flex items-center px-4 py-1.5 rounded-full bg-[#34D399] text-[#0B1120] text-sm font-bold whitespace-nowrap cursor-pointer shadow-sm">
                            All Users
                        </button>
                        <button className="flex items-center px-4 py-1.5 rounded-full bg-[#1E293B] border border-white/5 text-slate-400 hover:text-white text-sm font-medium whitespace-nowrap transition-colors cursor-pointer">
                            Residents
                        </button>
                        <button className="flex items-center px-4 py-1.5 rounded-full bg-[#1E293B] border border-white/5 text-slate-400 hover:text-white text-sm font-medium whitespace-nowrap transition-colors cursor-pointer">
                            Agencies
                        </button>
                        <button className="flex items-center px-4 py-1.5 rounded-full bg-[#1E293B] border border-white/5 text-slate-400 hover:text-white text-sm font-medium whitespace-nowrap transition-colors cursor-pointer">
                            Suspended
                        </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Total Users ({users.length})</p>
                        <button className="text-[#34D399] text-xs font-medium hover:underline flex items-center gap-1 bg-transparent border-none cursor-pointer">
                            Sort by Name <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
                        </button>
                    </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    {users.map((user) => (
                        <div 
                            key={user.id}
                            onClick={() => setSelectedUser(user)}
                            className={`p-4 rounded-xl border cursor-pointer relative overflow-hidden group transition-all
                                ${selectedUser.id === user.id 
                                    ? 'bg-[#1E293B] border-[#34D399]/30' 
                                    : 'hover:bg-[#1E293B]/50 border-transparent hover:border-white/5'
                                }
                                ${user.status === 'Suspended' ? 'opacity-70' : ''}
                            `}
                        >
                            {selectedUser.id === user.id && (
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#34D399]"></div>
                            )}
                            <div className="flex items-center gap-3 mb-2">
                                {user.avatar ? (
                                    <div className="size-10 rounded-full bg-[#1E293B] bg-center bg-cover border border-white/10" style={{ backgroundImage: `url("${user.avatar}")` }}></div>
                                ) : (
                                    <div className="size-10 rounded-full bg-[#1E293B] flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-red-900 to-red-950 border border-red-900">
                                        {user.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className={`font-medium text-sm truncate ${user.status === 'Suspended' ? 'line-through decoration-red-500/50' : 'text-white'}`}>{user.name}</h3>
                                        <span className={`size-2 rounded-full ${user.status === 'Active' ? 'bg-[#34D399]' : 'bg-red-500'}`}></span>
                                    </div>
                                    <p className="text-slate-500 text-xs truncate">{user.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pl-[52px]">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border
                                    ${user.role === 'Resident' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                                      user.role === 'Agency' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : ''}
                                    ${user.status === 'Suspended' ? '!bg-red-500/10 !text-red-400 !border-red-500/20' : ''}
                                `}>
                                    {user.status === 'Suspended' ? 'Suspended' : user.role}
                                </span>
                                <span className="text-slate-500 text-[10px]">Registered {user.joinDate}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Panel: Detailed View */}
            <div className="flex-1 flex flex-col bg-[#0B1120] overflow-hidden relative">
                <div className="px-8 py-8 border-b border-white/5 bg-[#0B1120]">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <div className="size-24 rounded-full bg-[#1E293B] border-2 border-white/5 p-1 shadow-lg">
                                    {selectedUser.avatar ? (
                                        <div className="w-full h-full bg-center bg-cover rounded-full" style={{ backgroundImage: `url("${selectedUser.avatar}")` }}></div>
                                    ) : (
                                        <div className="w-full h-full rounded-full flex items-center justify-center bg-[#1E293B] text-white text-2xl font-bold">
                                            {selectedUser.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    )}
                                </div>
                                {selectedUser.status === 'Active' && (
                                    <div className="absolute bottom-1 right-1 size-6 bg-[#34D399] rounded-full border-4 border-[#0B1120] flex items-center justify-center" title="Active"></div>
                                )}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h1 className="text-3xl font-bold text-white tracking-tight">{selectedUser.name}</h1>
                                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wide">{selectedUser.role}</span>
                                </div>
                                <p className="text-slate-400 text-sm flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[16px]">mail</span> {selectedUser.email}
                                    <span className="text-slate-600">•</span>
                                    <span className="material-symbols-outlined text-[16px]">call</span> {selectedUser.phone}
                                </p>
                                <div className="flex items-center gap-3 mt-3">
                                    <span className="text-xs text-slate-400 bg-[#1E293B] px-2 py-1 rounded border border-white/5">ID: #{selectedUser.id}</span>
                                    <span className="text-xs text-slate-400 bg-[#1E293B] px-2 py-1 rounded border border-white/5">Last Login: {selectedUser.lastLogin}</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Eco Points Widget */}
                        <div className="flex items-center gap-4 bg-[#1E293B] p-4 rounded-xl border border-white/5 min-w-[180px] shadow-lg">
                            <div className="relative size-12">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                                    <path className="text-[#34D399]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray={`${selectedUser.ecoPoints}, 100`} strokeWidth="4"></path>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs font-bold text-white">{selectedUser.ecoPoints}</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Eco Points</span>
                                <span className="text-sm text-[#34D399] font-bold">Gold Tier</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-8 mt-10 border-b border-white/5">
                        <button className="pb-3 text-[#34D399] font-medium text-sm border-b-2 border-[#34D399]">Profile Info</button>
                        <button className="pb-3 text-slate-400 hover:text-white font-medium text-sm transition-colors cursor-pointer bg-transparent border-none">Booking History</button>
                        <button className="pb-3 text-slate-400 hover:text-white font-medium text-sm transition-colors cursor-pointer bg-transparent border-none">Security & Devices</button>
                        <button className="pb-3 text-slate-400 hover:text-white font-medium text-sm transition-colors cursor-pointer bg-transparent border-none">Activity Log</button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        <div className="lg:col-span-2 space-y-6">
                            {/* Personal Information */}
                            <div className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 shadow-xl">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#34D399]">person</span> Personal Information
                                    </h3>
                                    <button className="text-xs font-medium text-[#34D399] hover:text-[#6EE7B7] transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none">
                                        Edit Details <span className="material-symbols-outlined text-[14px]">edit</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                                    <div>
                                        <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                                        <input className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#34D399]" readOnly type="text" value={selectedUser.name}/>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                                        <input className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#34D399]" readOnly type="email" value={selectedUser.email}/>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                                        <input className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#34D399]" readOnly type="tel" value={selectedUser.phone}/>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2">Date of Birth</label>
                                        <input className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#34D399]" readOnly type="text" value={selectedUser.dob}/>
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2">Primary Address</label>
                                        <div className="flex gap-2">
                                            <input className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#34D399]" readOnly type="text" value={selectedUser.address}/>
                                            <button className="bg-[#0B1120] border border-white/10 p-2 rounded-lg text-white hover:bg-white/5 transition-colors cursor-pointer">
                                                <span className="material-symbols-outlined text-[18px]">map</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Bookings */}
                            <div className="bg-[#1E293B] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
                                <div className="p-6 border-b border-white/5 flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#34D399]">history</span> Recent Bookings
                                    </h3>
                                    <button className="text-xs text-[#34D399] hover:underline bg-transparent border-none cursor-pointer">View All</button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-[#0B1120] text-slate-400 uppercase text-xs font-semibold">
                                            <tr>
                                                <th className="px-6 py-3">ID</th>
                                                <th className="px-6 py-3">Date</th>
                                                <th className="px-6 py-3">Items</th>
                                                <th className="px-6 py-3">Status</th>
                                                <th className="px-6 py-3">Agency</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {selectedUser.bookings.length > 0 ? selectedUser.bookings.map((booking, idx) => (
                                                <tr key={idx} className="hover:bg-white/5 transition-colors">
                                                    <td className="px-6 py-4 text-white font-mono">{booking.id}</td>
                                                    <td className="px-6 py-4 text-slate-400">{booking.date}</td>
                                                    <td className="px-6 py-4 text-white">{booking.items}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase
                                                            ${booking.status === 'Completed' ? 'bg-[#34D399]/10 text-[#34D399]' : 'bg-red-500/10 text-red-400'}
                                                        `}>
                                                            {booking.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-white">{booking.agency}</td>
                                                </tr>
                                            )) : (
                                                <tr>
                                                    <td colSpan={5} className="px-6 py-8 text-center text-slate-400">No recent bookings found.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Ecological Impact */}
                            <div className="bg-gradient-to-br from-[#1E293B] to-[#0B1120] border border-white/5 rounded-2xl p-6 relative overflow-hidden shadow-xl">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <span className="material-symbols-outlined text-[100px] text-white">eco</span>
                                </div>
                                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 relative z-10">Ecological Impact</h3>
                                <div className="grid grid-cols-1 gap-4 relative z-10">
                                    <div className="flex items-center justify-between p-3 bg-[#0B1120]/50 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                                <span className="material-symbols-outlined">recycling</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400">Total Waste Recycled</p>
                                                <p className="text-lg font-bold text-white">142.5 kg</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-[#0B1120]/50 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                                <span className="material-symbols-outlined">co2</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400">Carbon Offset</p>
                                                <p className="text-lg font-bold text-white">350 kg</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Account Actions */}
                            <div className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 shadow-xl">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-slate-400">manage_accounts</span> Account Actions
                                </h3>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-between p-3 rounded-xl bg-[#0B1120] border border-white/5 hover:border-[#34D399]/50 group transition-all cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-yellow-500 text-[18px]">lock_reset</span>
                                            </div>
                                            <span className="text-sm font-medium text-white group-hover:text-[#34D399] transition-colors">Send Password Reset</span>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-500 text-[18px]">chevron_right</span>
                                    </button>
                                    <button className="w-full flex items-center justify-between p-3 rounded-xl bg-[#0B1120] border border-white/5 hover:border-red-500/50 group transition-all cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-red-500 text-[18px]">block</span>
                                            </div>
                                            <span className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">Suspend Account</span>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-500 text-[18px]">chevron_right</span>
                                    </button>
                                    <button className="w-full flex items-center justify-between p-3 rounded-xl bg-[#0B1120] border border-white/5 hover:border-[#34D399]/50 group transition-all cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-blue-500 text-[18px]">badge</span>
                                            </div>
                                            <span className="text-sm font-medium text-white group-hover:text-[#34D399] transition-colors">Verify Identity Manually</span>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-500 text-[18px]">chevron_right</span>
                                    </button>
                                </div>
                            </div>

                            {/* Admin Notes */}
                            <div className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 shadow-xl">
                                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                    Admin Notes
                                </h3>
                                <div className="relative">
                                    <textarea className="w-full bg-[#0B1120] border border-white/10 rounded-xl p-3 text-sm text-white focus:ring-1 focus:ring-[#34D399] focus:border-transparent min-h-[100px] outline-none placeholder-slate-500" placeholder="Add notes about this user..."></textarea>
                                    <div className="absolute bottom-3 right-3">
                                        <button className="text-xs bg-[#1E293B] text-white px-2 py-1 rounded hover:bg-white/20 transition-colors cursor-pointer border border-white/10">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-24"></div>
                </div>

                {/* Sticky Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#0B1120]/95 backdrop-blur border-t border-white/5 flex justify-between items-center z-10">
                    <div className="hidden sm:flex items-center gap-2">
                        <span className="text-slate-400 text-sm">Last modified:</span>
                        <span className="text-white text-sm font-medium">Oct 24, 2023 by Alex Morgan</span>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                        <button className="px-6 py-2.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 font-semibold text-sm transition-colors cursor-pointer">
                            Discard Changes
                        </button>
                        <button className="px-8 py-2.5 rounded-lg bg-[#34D399] hover:bg-[#6EE7B7] text-[#0B1120] font-bold text-sm shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all flex items-center gap-2 transform active:scale-95 cursor-pointer">
                            <span className="material-symbols-outlined text-[18px]">save</span> Save Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminUsers;