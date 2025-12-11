import React from 'react';
import Layout from '../components/Layout';

const AgencyBookings = () => {
  return (
    <Layout title="" role="Agency">
      <div className="-mt-8 flex flex-col gap-6">
        <div className="flex flex-wrap justify-between items-end gap-4">
            <div className="flex flex-col gap-2">
                <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Bookings List</p>
                <p className="text-text-secondary text-base font-normal leading-normal">View and manage all your scheduled E-Waste pickups.</p>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center justify-center h-10 px-4 text-sm font-medium bg-background-card border border-border-dark text-text-secondary rounded-lg hover:text-white hover:border-primary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined mr-2 text-lg">download</span>
                    Export CSV
                </button>
                <button className="flex items-center justify-center h-10 px-4 text-sm font-bold bg-primary text-background-dark rounded-lg hover:bg-opacity-90 shadow-lg shadow-primary/20 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined mr-2 text-lg">add</span>
                    Manual Booking
                </button>
            </div>
        </div>

        <div className="p-4 bg-background-card border border-border-dark rounded-xl flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-background-dark cursor-pointer">All Bookings</button>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-background-dark transition-colors cursor-pointer">Upcoming</button>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-background-dark transition-colors cursor-pointer">Completed</button>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-background-dark transition-colors cursor-pointer">Canceled</button>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative group w-full md:w-64">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-primary">search</span>
                    <input className="w-full bg-background-dark border border-border-dark rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder-text-secondary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Search client or ID..." type="text"/>
                </div>
                <button className="p-2 rounded-lg border border-border-dark text-text-secondary hover:text-white hover:border-primary hover:bg-background-dark transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">filter_list</span>
                </button>
            </div>
        </div>

        <div className="bg-background-card border border-border-dark rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-background-dark/50 border-b border-border-dark text-xs uppercase text-text-secondary font-semibold tracking-wider">
                            <th className="px-6 py-4">Booking ID</th>
                            <th className="px-6 py-4">Client</th>
                            <th className="px-6 py-4">Date & Time</th>
                            <th className="px-6 py-4">E-Waste Type</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-dark text-sm">
                        <tr className="group hover:bg-background-dark/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">#BK-2094</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">JD</div>
                                    <div>
                                        <p className="text-white font-medium">John Doe</p>
                                        <p className="text-text-secondary text-xs">john.doe@email.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-text-secondary">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">Oct 24, 2024</span>
                                    <span className="text-xs">10:00 AM - 12:00 PM</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-text-secondary">Old Electronics (TV, PC)</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                    Upcoming
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1.5 rounded-md text-text-secondary hover:text-white hover:bg-background-dark cursor-pointer" title="View Details">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                    <button className="p-1.5 rounded-md text-text-secondary hover:text-primary hover:bg-background-dark cursor-pointer" title="Contact Client">
                                        <span className="material-symbols-outlined text-[20px]">chat</span>
                                    </button>
                                    <button className="p-1.5 rounded-md text-text-secondary hover:text-white hover:bg-background-dark cursor-pointer" title="More options">
                                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="group hover:bg-background-dark/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">#BK-2093</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">AC</div>
                                    <div>
                                        <p className="text-white font-medium">Alice Cooper</p>
                                        <p className="text-text-secondary text-xs">alice.c@techcorp.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-text-secondary">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">Oct 25, 2024</span>
                                    <span className="text-xs">02:00 PM - 04:00 PM</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-text-secondary">Batteries & Wiring (Bulk)</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                    Action Required
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="px-3 py-1 text-xs font-medium rounded bg-primary text-background-dark hover:bg-opacity-90 cursor-pointer">Approve</button>
                                    <button className="p-1.5 rounded-md text-text-secondary hover:text-white hover:bg-background-dark cursor-pointer">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="group hover:bg-background-dark/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">#BK-2089</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-xs">MJ</div>
                                    <div>
                                        <p className="text-white font-medium">Michael Jordan</p>
                                        <p className="text-text-secondary text-xs">mj.dunk@hoops.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-text-secondary">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">Oct 20, 2024</span>
                                    <span className="text-xs">09:00 AM - 11:00 AM</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-text-secondary">Household Appliances</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                    <span className="material-symbols-outlined text-[14px]">check</span>
                                    Completed
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1.5 rounded-md text-text-secondary hover:text-white hover:bg-background-dark cursor-pointer" title="View Report">
                                        <span className="material-symbols-outlined text-[20px]">description</span>
                                    </button>
                                    <button className="p-1.5 rounded-md text-text-secondary hover:text-white hover:bg-background-dark cursor-pointer" title="View Details">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="group hover:bg-background-dark/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">#BK-2085</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs">SW</div>
                                    <div>
                                        <p className="text-white font-medium">Sarah Williams</p>
                                        <p className="text-text-secondary text-xs">sarah.w@gmail.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-text-secondary">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">Oct 18, 2024</span>
                                    <span className="text-xs">04:00 PM - 06:00 PM</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-text-secondary">Mobile Phones</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                                    <span className="material-symbols-outlined text-[14px]">close</span>
                                    Canceled
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1.5 rounded-md text-text-secondary hover:text-white hover:bg-background-dark cursor-pointer" title="View Details">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="group hover:bg-background-dark/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">#BK-2082</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-xs">TM</div>
                                    <div>
                                        <p className="text-white font-medium">Tech Masters Ltd.</p>
                                        <p className="text-text-secondary text-xs">ops@techmasters.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-text-secondary">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">Oct 30, 2024</span>
                                    <span className="text-xs">11:00 AM - 02:00 PM</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-text-secondary">Server Rack Equipment</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                    Upcoming
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1.5 rounded-md text-text-secondary hover:text-white hover:bg-background-dark cursor-pointer" title="View Details">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                    <button className="p-1.5 rounded-md text-text-secondary hover:text-primary hover:bg-background-dark cursor-pointer" title="Contact Client">
                                        <span className="material-symbols-outlined text-[20px]">chat</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 border-t border-border-dark flex items-center justify-between bg-background-card">
                <p className="text-sm text-text-secondary">Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">5</span> of <span className="font-medium text-white">24</span> results</p>
                <div className="flex gap-2">
                    <button className="flex items-center justify-center px-3 py-1.5 rounded-lg border border-border-dark text-text-secondary text-sm hover:bg-background-dark hover:text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled>
                        <span className="material-symbols-outlined text-sm mr-1">chevron_left</span>
                        Previous
                    </button>
                    <button className="flex items-center justify-center px-3 py-1.5 rounded-lg border border-border-dark text-text-secondary text-sm hover:bg-background-dark hover:text-white cursor-pointer">
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