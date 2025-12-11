import React from 'react';
import Layout from '../components/Layout';

const Notifications = () => {
  return (
    <Layout title="" role="User" fullWidth hideSidebar>
      <div className="bg-[#0B1116] font-sans text-gray-200 antialiased selection:bg-[#10b981] selection:text-white min-h-screen flex flex-col relative overflow-hidden">
        
        {/* Background Ambient Blobs */}
        <div className="fixed top-0 left-0 w-full h-[500px] bg-[#10b981]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
        <div className="fixed bottom-0 right-0 w-full h-[500px] bg-[#3b82f6]/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none"></div>

        {/* Standard Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-white/5 px-4 sm:px-6 lg:px-10 py-4 bg-[#0B1116]/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="flex items-center gap-3 text-white cursor-pointer" onClick={() => window.location.hash = '#/'}>
                <div className="p-2 bg-[#10b981]/10 rounded-lg">
                    <svg className="h-6 w-6 text-[#10b981]" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
                    </svg>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-white">EcoCycle</h2>
            </div>
            <nav className="hidden md:flex flex-1 justify-center gap-1">
                <a className="text-sm font-medium px-5 py-2.5 rounded-full text-[#94a3b8] hover:text-white hover:bg-white/5 transition-all cursor-pointer" onClick={() => window.location.hash = '#/dashboard'}>Dashboard</a>
                <a className="text-sm font-medium px-5 py-2.5 rounded-full text-[#94a3b8] hover:text-white hover:bg-white/5 transition-all cursor-pointer" onClick={() => window.location.hash = '#/search'}>New Request</a>
                <a className="text-sm font-medium px-5 py-2.5 rounded-full text-[#94a3b8] hover:text-white hover:bg-white/5 transition-all cursor-pointer" onClick={() => window.location.hash = '#/rewards'}>Rewards</a>
                <a className="text-sm font-medium px-5 py-2.5 rounded-full text-[#94a3b8] hover:text-white hover:bg-white/5 transition-all cursor-pointer" onClick={() => window.location.hash = '#/certificate'}>Certificate</a>
            </nav>
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => window.location.hash = '#/profile'}
                    className="hidden sm:flex items-center gap-3 pl-1 pr-4 py-1 rounded-full bg-[#151F26] border border-white/5 hover:bg-white/5 transition-colors group cursor-pointer"
                >
                    <div className="size-8 rounded-full bg-cover bg-center ring-2 ring-white/10 group-hover:ring-[#10b981]/50 transition-all" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAreboopkKSy4YYDs4PFvd-l4xnboU1-dCb6q7kuogZsIpVK9icd7CNdE17iE4uQKdoqiJuI30CTaWxw7GK3QrR7H_FstEqPZBbUqkey_74QXoP8uhTfR9RY780_K4O8UAQpRMWJiKbRdh5-SdE7JAIX5lG3yPPg3Wisf3RGrXHACYJxJFU0vYynDCqaru_FI7DW3EV-buSFuzGK8Z7LP7p7c25u8kqkBUXlt5pQG5d-4WVmAzmNX9U0trABs1cC--zDVlgdRcgww")' }}></div>
                    <span className="text-sm font-medium text-gray-200">Alex Morgan</span>
                </button>
                <button className="relative p-2.5 rounded-full bg-[#151F26] border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                    <span className="absolute top-2.5 right-3 size-2 bg-red-500 rounded-full border-2 border-[#151F26]"></span>
                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                </button>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-10 mt-20 relative z-10">
            <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
                <div className="flex h-full flex-col justify-between bg-[#151F26] p-4 rounded-xl border border-white/5">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                    <div className="relative">
                        <div 
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAreboopkKSy4YYDs4PFvd-l4xnboU1-dCb6q7kuogZsIpVK9icd7CNdE17iE4uQKdoqiJuI30CTaWxw7GK3QrR7H_FstEqPZBbUqkey_74QXoP8uhTfR9RY780_K4O8UAQpRMWJiKbRdh5-SdE7JAIX5lG3yPPg3Wisf3RGrXHACYJxJFU0vYynDCqaru_FI7DW3EV-buSFuzGK8Z7LP7p7c25u8kqkBUXlt5pQG5d-4WVmAzmNX9U0trABs1cC--zDVlgdRcgww")' }}
                        ></div>
                        <button className="absolute -bottom-1 -right-1 flex items-center justify-center size-6 bg-[#10b981] rounded-full text-[#0B1116] hover:bg-opacity-90 cursor-pointer">
                        <span className="material-symbols-outlined text-base">edit</span>
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-base font-medium leading-normal">Alex Morgan</h1>
                        <p className="text-[#94a3b8] text-sm font-normal leading-normal">alex.morgan@example.com</p>
                    </div>
                    </div>
                    <div className="flex flex-col gap-1 pt-4">
                    <button 
                        onClick={() => window.location.hash = '#/profile'}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-[#94a3b8] hover:text-white transition-colors w-full text-left cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-[20px]">person</span>
                        <p className="text-sm font-medium leading-normal">Profile Information</p>
                    </button>
                    <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/10 w-full text-left cursor-pointer">
                        <span className="material-symbols-outlined fill text-[20px]">notifications</span>
                        <p className="text-sm font-medium leading-normal">Notifications</p>
                    </button>
                    <button 
                        onClick={() => window.location.hash = '#/security'}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-[#94a3b8] hover:text-white transition-colors w-full text-left cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-[20px]">lock</span>
                        <p className="text-sm font-medium leading-normal">Security & Privacy</p>
                    </button>
                    <button 
                        onClick={() => window.location.hash = '#/settings'}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-[#94a3b8] hover:text-white transition-colors w-full text-left cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-[20px]">settings</span>
                        <p className="text-sm font-medium leading-normal">App Settings</p>
                    </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-8 pt-4 border-t border-white/5">
                    <button 
                    onClick={() => window.location.hash = '#/'}
                    className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0B1116] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white/5 transition-colors border border-white/10"
                    >
                    <span className="truncate">Log Out</span>
                    </button>
                </div>
                </div>
            </aside>
            <div className="flex-1">
                <div className="flex flex-col gap-8">
                <div className="bg-[#151F26] p-6 md:p-8 rounded-xl border border-white/5">
                    <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap justify-between gap-3">
                        <div className="flex flex-col gap-1">
                        <p className="text-white text-2xl font-bold leading-tight tracking-[-0.033em]">Notification Preferences</p>
                        <p className="text-[#94a3b8] text-base font-normal leading-normal">Choose which notifications you want to receive and how you get them.</p>
                        </div>
                    </div>
                    <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <h3 className="text-white text-lg font-semibold leading-normal pb-4 border-b border-white/10 mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#10b981]">local_shipping</span>
                                Booking & Pickups
                            </h3>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-row items-center justify-between gap-4">
                                    <div className="flex flex-col gap-1 pr-4">
                                        <p className="text-white text-base font-medium leading-normal">Pickup Reminders</p>
                                        <p className="text-[#94a3b8] text-sm font-normal leading-normal">Receive alerts 1 hour before your scheduled e-waste collection.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                        <input defaultChecked className="sr-only peer" type="checkbox" />
                                        <div className="w-11 h-6 bg-[#0B1116] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10b981] border border-white/10"></div>
                                    </label>
                                </div>
                                <div className="flex flex-row items-center justify-between gap-4">
                                    <div className="flex flex-col gap-1 pr-4">
                                        <p className="text-white text-base font-medium leading-normal">Status Updates</p>
                                        <p className="text-[#94a3b8] text-sm font-normal leading-normal">Get real-time updates when your items are processed or recycled.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                        <input defaultChecked className="sr-only peer" type="checkbox" />
                                        <div className="w-11 h-6 bg-[#0B1116] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10b981] border border-white/10"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-semibold leading-normal pb-4 border-b border-white/10 mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#10b981]">savings</span>
                                Rewards & Offers
                            </h3>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-row items-center justify-between gap-4">
                                    <div className="flex flex-col gap-1 pr-4">
                                        <p className="text-white text-base font-medium leading-normal">Reward Points Earned</p>
                                        <p className="text-[#94a3b8] text-sm font-normal leading-normal">Instant notification when EcoPoints are added to your wallet.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                        <input defaultChecked className="sr-only peer" type="checkbox" />
                                        <div className="w-11 h-6 bg-[#0B1116] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10b981] border border-white/10"></div>
                                    </label>
                                </div>
                                <div className="flex flex-row items-center justify-between gap-4">
                                    <div className="flex flex-col gap-1 pr-4">
                                        <p className="text-white text-base font-medium leading-normal">New Offers & Promotions</p>
                                        <p className="text-[#94a3b8] text-sm font-normal leading-normal">Be the first to know about partner deals and seasonal recycling events.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                        <input className="sr-only peer" type="checkbox" />
                                        <div className="w-11 h-6 bg-[#0B1116] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10b981] border border-white/10"></div>
                                    </label>
                                </div>
                                <div className="flex flex-row items-center justify-between gap-4">
                                    <div className="flex flex-col gap-1 pr-4">
                                        <p className="text-white text-base font-medium leading-normal">Sustainability Newsletter</p>
                                        <p className="text-[#94a3b8] text-sm font-normal leading-normal">Weekly tips on reducing e-waste and environmental impact reports.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                        <input className="sr-only peer" type="checkbox" />
                                        <div className="w-11 h-6 bg-[#0B1116] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10b981] border border-white/10"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-white/10">
                            <button className="text-[#94a3b8] text-sm font-medium hover:text-white transition-colors bg-transparent border-none cursor-pointer" type="button">
                                Reset to Defaults
                            </button>
                            <div className="flex gap-4">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0B1116] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white/5 transition-colors border border-white/10" type="button">
                                    <span className="truncate">Cancel</span>
                                </button>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#10b981] text-[#0B1116] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#059669] transition-opacity" type="submit">
                                    <span className="truncate">Save Changes</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
      </div>
    </Layout>
  );
};

export default Notifications;