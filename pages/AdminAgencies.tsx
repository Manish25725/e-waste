import React from 'react';
import Layout from '../components/Layout';

const agencies = [
  {
    id: 'GE-2023-8892',
    name: 'GreenEarth Recyclers',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnMPVA0vcXfM_HZ2RUEry8yNrxmSJXdqRIK8gmi-esF3ztvjpP2P3Zv2iPJWzI_YPHcaH5NzhNLcb8h7pj-dTUihIWpDBG8Jcu4rtHhthZG-DHeFS3KSwnWbkYJVdSsS7vWk5CXVCX-TWXEvpz_SxSZVyjvokbLWXmqgWBj1bWVgBHrPk2jZyfW-GziD7rEXYoO1YXWcxe3VTfiQpMH_tcWlF2DiMRuVO22laqrgR0GF9k6YuVojQU6pfdtGO-_-DfC-3-omY6bhk',
    status: 'Active',
    zones: ['NYC-Z1', 'NYC-Z2'],
    rating: 4.8,
    collections: '1.2k',
    lastPayout: '$4,250.00',
    payoutDate: 'Oct 15, 2023'
  },
  {
    id: 'TC-2023-1104',
    name: 'TechCycle Solutions',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRGcBCzRiK11IwYi6qwyyfuXViUiULVYh3OZfB0KZwzfH2HSBh6zYLmj9CDN4k6O0zC41w07GAwiRi0IcNlV0aBbRgdSzIs_YcBqeVaQFbYm7LAC-7sV1sMGbJgJDgsXDiZn3LjHBoDnGFHXz7QKjKBmKQmmTwdCykaUbq8MqH0hEVhoOOzQ-LGvygPdM3aKZxZuky40k1exVWH02GkGHHS2H4BRy8UA1VW5NCb93lRoZwLLgjkqS1az-OaWQocuKufdodUE_tsQY',
    status: 'Pending Approval',
    zones: ['SF-BAY'],
    rating: null,
    collections: 'N/A',
    lastPayout: '-',
    payoutDate: ''
  },
  {
    id: 'UM-2022-4421',
    name: 'Urban Miners Co.',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE5_XkA8brKDGCF0VlR1L9sRGfYvR8IqDr8t3iaXniXkkTOhDNsZvGHuwyUqdko9zziI7g-uGc0sMFf428DeU3zwxnSS9HNZuvlWm6ISEQ4NN2fEP_XUZUSaiLq78_pxe6Dw05fga3mRJO8Vpznn51TTveBviIAwhgN1OPtw9Jx3UAXKzYZR4g-df27gnRzShXJmbYa67ubykdg27u_TdYqIbKrf1UwbbHDiQIF92BjEgLva7fAY1vzWdZei9TU9eBuqQqc1MNaRY',
    status: 'Active',
    zones: ['CHI-NO', 'CHI-SO'],
    rating: 4.5,
    collections: '856',
    lastPayout: '$2,890.50',
    payoutDate: 'Oct 12, 2023'
  },
  {
    id: 'EL-2023-0012',
    name: 'EcoLife Systems',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8PGjilEd7dviAc0qFQiWQM1ZY9po_qdUFVFDMP-09pLUQfva1CjGjM1y2D97TkTfIPx0GNu0mF5JTmF0DqvDJg_zWeKAqxhVy1yZEGM2Em20qYx90yvgmlloOQf6l-FC44OV6UDSYIYICm_oPGyoQRQZIrDAXwVJ_5ev5Rm8MfB1-q3ekhPiqBnP35YA8vXXpCalVfyLbhRcfvyEzjCKovu49qGCYZ5Ty9veN5dsWoYu0jpkup0ClQTqfd3bT5Tsn8FXsex_6HbQ',
    status: 'Suspended',
    zones: ['AUS-TX'],
    rating: 2.8,
    collections: 'High Complaint Rate',
    lastPayout: 'On Hold',
    payoutDate: ''
  },
  {
    id: 'PP-2021-5501',
    name: 'Pure Planet Inc.',
    logo: null, 
    status: 'Active',
    zones: ['SEA-DT'],
    rating: 4.9,
    collections: '3.4k',
    lastPayout: '$8,120.00',
    payoutDate: 'Oct 18, 2023'
  }
];

const AdminAgencies = () => {
  return (
    <Layout title="" role="Admin" fullWidth>
      <div className="flex flex-col h-screen overflow-hidden bg-[#0B1120] font-sans text-white">
        
        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/5 bg-[#0B1120]/95 backdrop-blur px-6 py-4 z-10 shrink-0">
            <div className="flex items-center gap-4">
                <h2 className="text-white text-xl font-bold tracking-tight hidden sm:block">Agency Management</h2>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative hidden md:block w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-500 text-[20px]">search</span>
                    </div>
                    <input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-[#1E293B] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#34D399] sm:text-sm transition-all" placeholder="Global search..." type="text"/>
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0B1120]"></span>
                    </button>
                    <button className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                    <button className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>
            </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8 custom-scrollbar">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#1E293B] border border-white/5 p-5 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:border-[#34D399]/30 transition-all shadow-xl">
                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-[80px]">domain</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <span className="material-symbols-outlined text-blue-400">domain</span>
                        </div>
                        <span className="text-slate-400 text-sm font-medium">Total Partners</span>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-white">124</span>
                        <span className="text-xs text-[#34D399] font-medium ml-2">+3 this week</span>
                    </div>
                </div>
                <div className="bg-[#1E293B] border border-white/5 p-5 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:border-[#34D399]/30 transition-all shadow-xl">
                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-[80px]">check_circle</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#34D399]/10 rounded-lg">
                            <span className="material-symbols-outlined text-[#34D399]">check_circle</span>
                        </div>
                        <span className="text-slate-400 text-sm font-medium">Active Agencies</span>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-white">98</span>
                        <span className="text-xs text-slate-400 font-medium ml-2">79% operating</span>
                    </div>
                </div>
                <div className="bg-[#1E293B] border border-white/5 p-5 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:border-[#34D399]/30 transition-all shadow-xl">
                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-[80px]">pending_actions</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-500/10 rounded-lg">
                            <span className="material-symbols-outlined text-yellow-500">pending_actions</span>
                        </div>
                        <span className="text-slate-400 text-sm font-medium">Pending Approval</span>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-white">12</span>
                        <span className="text-xs text-slate-400 font-medium ml-2">Requires review</span>
                    </div>
                </div>
                <div className="bg-[#1E293B] border border-white/5 p-5 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:border-[#34D399]/30 transition-all shadow-xl">
                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-[80px]">warning</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                            <span className="material-symbols-outlined text-red-500">warning</span>
                        </div>
                        <span className="text-slate-400 text-sm font-medium">Compliance Issues</span>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-white">4</span>
                        <span className="text-xs text-red-400 font-medium ml-2">Action needed</span>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                    <div className="relative w-full sm:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-500 text-[18px]">search</span>
                        </div>
                        <input className="block w-full pl-9 pr-3 py-2 border border-white/5 rounded-lg leading-5 bg-[#1E293B] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#34D399] focus:border-[#34D399] text-sm transition-colors" placeholder="Filter by name, ID..." type="text"/>
                    </div>
                    <div className="relative w-full sm:w-auto group">
                        <button className="flex items-center justify-between w-full sm:w-40 px-3 py-2 text-sm text-slate-400 bg-[#1E293B] border border-white/5 rounded-lg hover:text-white hover:border-white/20 transition-colors cursor-pointer">
                            <span>Status: All</span>
                            <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
                        </button>
                    </div>
                    <div className="relative w-full sm:w-auto group">
                        <button className="flex items-center justify-between w-full sm:w-40 px-3 py-2 text-sm text-slate-400 bg-[#1E293B] border border-white/5 rounded-lg hover:text-white hover:border-white/20 transition-colors cursor-pointer">
                            <span>Zone: All</span>
                            <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
                        </button>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#34D399] text-[#0B1120] font-bold text-sm rounded-lg hover:bg-[#6EE7B7] transition-colors shadow-[0_0_15px_rgba(52,211,153,0.3)] cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Onboard Agency
                </button>
            </div>

            {/* Table */}
            <div className="bg-[#1E293B] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#0B1120]/50 border-b border-white/5 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                                <th className="p-4 pl-6">Agency Name</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Service Zones</th>
                                <th className="p-4">Performance</th>
                                <th className="p-4">Last Payout</th>
                                <th className="p-4 text-right pr-6">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {agencies.map((agency) => (
                                <tr key={agency.id} className="group hover:bg-[#0B1120]/30 transition-colors">
                                    <td className="p-4 pl-6">
                                        <div className="flex items-center gap-3">
                                            {agency.logo ? (
                                                <div className={`bg-center bg-no-repeat bg-cover rounded-lg size-10 border border-white/10 ${agency.status !== 'Active' ? 'grayscale opacity-70' : ''}`} style={{ backgroundImage: `url("${agency.logo}")` }}></div>
                                            ) : (
                                                <div className="flex items-center justify-center bg-[#0B1120] text-slate-500 rounded-lg size-10 border border-white/10">
                                                    <span className="material-symbols-outlined">recycling</span>
                                                </div>
                                            )}
                                            <div>
                                                <div className="text-white font-medium text-sm">{agency.name}</div>
                                                <div className="text-slate-500 text-xs">ID: {agency.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                            ${agency.status === 'Active' ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/20' : 
                                              agency.status === 'Pending Approval' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                              agency.status === 'Suspended' ? 'bg-red-500/10 text-red-400 border-red-500/20' : ''
                                            }
                                        `}>
                                            {agency.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-wrap gap-1">
                                            {agency.zones.map((zone) => (
                                                <span key={zone} className="px-2 py-0.5 bg-[#0B1120] rounded text-[10px] text-white border border-white/5">{zone}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        {agency.rating ? (
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-white text-sm font-medium">{agency.rating}</span>
                                                    <span className="material-symbols-outlined text-yellow-500 text-[14px]">star</span>
                                                </div>
                                                <span className={`text-[10px] ${agency.status === 'Suspended' ? 'text-red-400' : 'text-slate-500'}`}>{agency.collections} Collections</span>
                                            </div>
                                        ) : (
                                            <span className="text-slate-500 text-xs italic">N/A (New)</span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className={`text-sm ${agency.status === 'Suspended' ? 'text-red-400 font-medium' : 'text-white'}`}>{agency.lastPayout}</div>
                                        {agency.payoutDate && <div className="text-slate-500 text-[10px]">{agency.payoutDate}</div>}
                                    </td>
                                    <td className="p-4 pr-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {agency.status === 'Pending Approval' ? (
                                                <button className="p-1.5 text-slate-400 hover:text-[#34D399] hover:bg-[#34D399]/10 rounded-lg transition-colors cursor-pointer" title="Review Application">
                                                    <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
                                                </button>
                                            ) : (
                                                <>
                                                    <button className="p-1.5 text-slate-400 hover:text-[#34D399] hover:bg-[#34D399]/10 rounded-lg transition-colors cursor-pointer" title="View Profile">
                                                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                    </button>
                                                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer" title="Analytics">
                                                        <span className="material-symbols-outlined text-[18px]">bar_chart</span>
                                                    </button>
                                                </>
                                            )}
                                            <button className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer" title="More options">
                                                <span className="material-symbols-outlined text-[18px]">more_vert</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Footer */}
                <div className="border-t border-white/5 p-4 flex items-center justify-between">
                    <span className="text-slate-500 text-xs">Showing <span className="text-white font-medium">1-{agencies.length}</span> of <span className="text-white font-medium">124</span> agencies</span>
                    <div className="flex items-center gap-2">
                        <button className="p-1 rounded-lg text-slate-500 hover:text-white hover:bg-[#0B1120] disabled:opacity-50 transition-colors cursor-pointer" disabled>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="p-1 rounded-lg text-white bg-[#0B1120] hover:bg-[#0B1120]/80 transition-colors cursor-pointer">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminAgencies;