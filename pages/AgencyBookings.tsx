import React from 'react';
import Layout from '../components/Layout';

const AgencyBookings = () => {
  return (
    <Layout title="" role="Agency">
      <div className="-mt-8 flex flex-col gap-6">
        <div className="flex flex-wrap justify-between items-end gap-4">
            <div className="flex flex-col gap-2">
                <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Bookings List</p>
                <p className="text-slate-400 text-base font-normal leading-normal">View and manage all your scheduled E-Waste pickups.</p>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center justify-center h-10 px-4 text-sm font-medium bg-[#1E293B] border border-white/10 text-slate-300 rounded-full hover:text-white hover:border-[#34D399] transition-colors cursor-pointer">
                    <span className="material-symbols-outlined mr-2 text-lg">download</span>
                    Export CSV
                </button>
                <button className="flex items-center justify-center h-10 px-4 text-sm font-bold bg-[#34D399] text-[#0B1120] rounded-full hover:bg-[#6EE7B7] shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all cursor-pointer">
                    <span className="material-symbols-outlined mr-2 text-lg">add</span>
                    Manual Booking
                </button>
            </div>
        </div>

        <div className="p-4 bg-[#1E293B] border border-white/5 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between shadow-lg">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <button className="px-4 py-2 rounded-full text-sm font-bold bg-[#34D399] text-[#0B1120] cursor-pointer shadow-md">All Bookings</button>
                <button className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-[#0B1120] transition-colors cursor-pointer">Upcoming</button>
                <button className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-[#0B1120] transition-colors cursor-pointer">Completed</button>
                <button className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-[#0B1120] transition-colors cursor-pointer">Canceled</button>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative group w-full md:w-64">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#34D399]">search</span>
                    <input className="w-full bg-[#0B1120] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] outline-none transition-all" placeholder="Search client or ID..." type="text"/>
                </div>
                <button className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-[#34D399] hover:bg-[#0B1120] transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">filter_list</span>
                </button>
            </div>
        </div>

        <div className="bg-[#1E293B] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#0B1120]/50 border-b border-white/5 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                            <th className="px-6 py-4">Booking ID</th>
                            <th className="px-6 py-4">Client</th>
                            <th className="px-6 py-4">Date & Time</th>
                            <th className="px-6 py-4">E-Waste Type</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm">
                        <tr className="group hover:bg-[#0B1120]/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">#BK-2094</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-500/20">JD</div>
                                    <div>
                                        <p className="text-white font-medium">John Doe</p>
                                        <p className="text-slate-400 text-xs">john.doe@email.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-slate-400">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">Oct 24, 2024</span>
                                    <span className="text-xs">10:00 AM - 12:00 PM</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-slate-400">Old Electronics (TV, PC)</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                    Upcoming
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-[#0B1120] cursor-pointer" title="View Details">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                    <button className="p-1.5 rounded-full text-slate-400 hover:text-[#34D399] hover:bg-[#0B1120] cursor-pointer" title="Contact Client">
                                        <span className="material-symbols-outlined text-[20px]">chat</span>
                                    </button>
                                    <button className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-[#0B1120] cursor-pointer" title="More options">
                                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="group hover:bg-[#0B1120]/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">#BK-2093</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-xs border border-purple-500/20">AC</div>
                                    <div>
                                        <p className="text-white font-medium">Alice Cooper</p>
                                        <p className="text-slate-400 text-xs">alice.c@techcorp.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-slate-400">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">Oct 25, 2024</span>
                                    <span className="text-xs">02:00 PM - 04:00 PM</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-slate-400">Batteries & Wiring (Bulk)</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                    Action Required
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="px-3 py-1 text-xs font-bold rounded-full bg-[#34D399] text-[#0B1120] hover:bg-[#6EE7B7] cursor-pointer shadow-sm">Approve</button>
                                    <button className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-[#0B1120] cursor-pointer">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="group hover:bg-[#0B1120]/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">#BK-2089</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-[#34D399]/10 text-[#34D399] flex items-center justify-center font-bold text-xs border border-[#34D399]/20">MJ</div>
                                    <div>
                                        <p className="text-white font-medium">Michael Jordan</p>
                                        <p className="text-slate-400 text-xs">mj.dunk@hoops.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-slate-400">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">Oct 20, 2024</span>
                                    <span className="text-xs">09:00 AM - 11:00 AM</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-slate-400">Household Appliances</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/20">
                                    <span className="material-symbols-outlined text-[14px]">check</span>
                                    Completed
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-[#0B1120] cursor-pointer" title="View Report">
                                        <span className="material-symbols-outlined text-[20px]">description</span>
                                    </button>
                                    <button className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-[#0B1120] cursor-pointer" title="View Details">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="group hover:bg-[#0B1120]/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">#BK-2085</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-xs border border-red-500/20">SW</div>
                                    <div>
                                        <p className="text-white font-medium">Sarah Williams</p>
                                        <p className="text-slate-400 text-xs">sarah.w@gmail.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-slate-400">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">Oct 18, 2024</span>
                                    <span className="text-xs">04:00 PM - 06:00 PM</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-slate-400">Mobile Phones</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                                    <span className="material-symbols-outlined text-[14px]">close</span>
                                    Canceled
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-[#0B1120] cursor-pointer" title="View Details">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between bg-[#1E293B]">
                <p className="text-sm text-slate-400">Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">5</span> of <span className="font-medium text-white">24</span> results</p>
                <div className="flex gap-2">
                    <button className="flex items-center justify-center px-3 py-1.5 rounded-lg border border-white/10 text-slate-400 text-sm hover:bg-[#0B1120] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled>
                        <span className="material-symbols-outlined text-sm mr-1">chevron_left</span>
                        Previous
                    </button>
                    <button className="flex items-center justify-center px-3 py-1.5 rounded-lg border border-white/10 text-slate-400 text-sm hover:bg-[#0B1120] hover:text-white cursor-pointer">
                        Next
                        <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default AgencyBookings;