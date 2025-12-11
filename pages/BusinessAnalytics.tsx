import React from 'react';

const BusinessAnalytics = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0f172a] font-sans text-[#f8fafc] selection:bg-[#4ade80] selection:text-slate-900">
      {/* Sidebar */}
      <aside className="hidden w-20 flex-col items-center border-r border-slate-800 bg-[#0f172a] py-6 lg:flex z-50 transition-all hover:w-64 group fixed inset-y-0 left-0">
        <div className="flex h-full w-full flex-col justify-between px-4">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex items-center gap-4 px-2 overflow-hidden whitespace-nowrap cursor-pointer" onClick={() => window.location.hash = '#/'}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4ade80] to-[#22c55e] text-slate-900 shadow-[0_0_20px_rgba(74,222,128,0.15)]">
                <span className="material-symbols-outlined !text-[24px] font-bold">recycling</span>
              </div>
              <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-lg font-bold tracking-tight">EcoCycle</h1>
                <p className="text-xs text-[#94a3b8] font-medium">Business</p>
              </div>
            </div>
            <nav className="flex flex-col gap-2 w-full">
              <a onClick={() => window.location.hash = '#/business'} className="flex items-center gap-4 rounded-xl px-3 py-3 text-[#94a3b8] hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined shrink-0">dashboard</span>
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Dashboard</span>
              </a>
              <a onClick={() => window.location.hash = '#/business/inventory'} className="flex items-center gap-4 rounded-xl px-3 py-3 text-[#94a3b8] hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined shrink-0">inventory_2</span>
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Inventory</span>
              </a>
              <a onClick={() => window.location.hash = '#/business/certificates'} className="flex items-center gap-4 rounded-xl px-3 py-3 text-[#94a3b8] hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined shrink-0">verified</span>
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Certificates</span>
              </a>
              <a className="flex items-center gap-4 rounded-xl px-3 py-3 text-[#94a3b8] hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined shrink-0">local_shipping</span>
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Logistics</span>
              </a>
              <a onClick={() => window.location.hash = '#/business/analytics'} className="flex items-center gap-4 rounded-xl bg-[#4ade80]/10 px-3 py-3 text-[#4ade80] transition-all group-hover:bg-[#4ade80]/20 cursor-pointer">
                <span className="material-symbols-outlined shrink-0 fill">analytics</span>
                <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Analytics</span>
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-2 overflow-hidden whitespace-nowrap mt-auto">
            <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-slate-700 bg-center bg-cover border border-slate-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLrR2QWFrZdhqlqnql_lDYbtkDCvQ32yk6hvVJTlee4Tx6Uh5Iw5cR16GiYtu3xQ9yK7tqguuIvnhVDy9ONcnQtHZJbvop2WX6V2aW6YfTHzR_k-HTTOql1kt6uYcgYi_Es2Tc4xGWRzePR50VKumirJYQgVVCecYOYE7QOjWFnEANpFSY14v-gw9mefiqPUaoKbO_mSmHt2v3p4NTP-DeUr2DjUUJwQTJCiR22EH42tLk2N7SoQ8k0RyQ0dzHycBltvqpZQOGWMY')" }}></div>
            <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-bold text-white">James W.</p>
              <p className="text-[10px] text-[#94a3b8]">TechCorp HQ</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col h-full overflow-hidden relative ml-0 lg:ml-20 transition-all">
        {/* Header */}
        <header className="flex h-16 w-full items-center justify-between bg-[#0f172a]/80 backdrop-blur-md px-6 lg:px-8 z-40 sticky top-0 border-b border-slate-800">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-[#94a3b8] hover:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="text-lg font-bold text-white">EcoCycle</span>
          </div>
          <div className="hidden lg:flex flex-col">
            <h2 className="text-lg font-bold text-white leading-tight">Analytics & Reports</h2>
            <p className="text-xs text-[#94a3b8]">Sustainability insights for TechCorp Solutions</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 rounded-full bg-slate-800/50 px-4 py-1.5 border border-slate-700">
              <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">search</span>
              <input className="bg-transparent border-none text-xs focus:ring-0 placeholder-[#94a3b8] w-48 text-white p-0 focus:outline-none" placeholder="Search reports, metrics..." type="text"/>
            </div>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-[#94a3b8] hover:bg-slate-700 hover:text-white transition-colors border border-slate-700">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-[#4ade80] border-2 border-[#0f172a]"></span>
            </button>
            <div className="h-9 w-9 overflow-hidden rounded-full bg-slate-700 bg-center bg-cover border border-slate-600 lg:hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLrR2QWFrZdhqlqnql_lDYbtkDCvQ32yk6hvVJTlee4Tx6Uh5Iw5cR16GiYtu3xQ9yK7tqguuIvnhVDy9ONcnQtHZJbvop2WX6V2aW6YfTHzR_k-HTTOql1kt6uYcgYi_Es2Tc4xGWRzePR50VKumirJYQgVVCecYOYE7QOjWFnEANpFSY14v-gw9mefiqPUaoKbO_mSmHt2v3p4NTP-DeUr2DjUUJwQTJCiR22EH42tLk2N7SoQ8k0RyQ0dzHycBltvqpZQOGWMY')" }}></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="mx-auto max-w-7xl flex flex-col gap-6">
            
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Performance Overview</h3>
                <p className="text-sm text-[#94a3b8]">Track your environmental impact and operational efficiency.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative group">
                  <select className="appearance-none bg-slate-900 border border-slate-700 text-white text-xs rounded-xl px-4 py-2.5 pr-8 focus:ring-1 focus:ring-[#4ade80] focus:border-[#4ade80] cursor-pointer hover:border-slate-600 transition-colors outline-none">
                    <option>Last 30 Days</option>
                    <option>Last Quarter</option>
                    <option>Year to Date</option>
                    <option>Custom Range</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[#94a3b8] text-[16px] pointer-events-none">calendar_today</span>
                </div>
                <div className="relative group">
                  <select className="appearance-none bg-slate-900 border border-slate-700 text-white text-xs rounded-xl px-4 py-2.5 pr-8 focus:ring-1 focus:ring-[#4ade80] focus:border-[#4ade80] cursor-pointer hover:border-slate-600 transition-colors outline-none">
                    <option>All Categories</option>
                    <option>IT Equipment</option>
                    <option>Batteries</option>
                    <option>Cables & Wiring</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[#94a3b8] text-[16px] pointer-events-none">filter_list</span>
                </div>
                <button className="flex items-center gap-2 bg-[#4ade80] text-slate-900 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#4ade80]/90 transition-all shadow-[0_0_20px_rgba(74,222,128,0.15)]">
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  Export Report
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-[#1e293b] border border-slate-800 p-5 relative overflow-hidden group">
                <div className="flex justify-between items-start z-10 relative">
                  <div>
                    <p className="text-xs font-medium text-[#94a3b8] mb-1">Total E-Waste Collected</p>
                    <h3 className="text-2xl font-bold text-white">12,450 <span className="text-sm font-normal text-[#94a3b8]">kg</span></h3>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80]">
                    <span className="material-symbols-outlined text-[20px]">scale</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium z-10 relative">
                  <span className="text-[#4ade80] flex items-center gap-1 bg-[#4ade80]/10 px-1.5 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[12px]">trending_up</span>
                    12%
                  </span>
                  <span className="text-[#94a3b8]">vs last period</span>
                </div>
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-[#4ade80]/5 blur-2xl group-hover:bg-[#4ade80]/10 transition-all"></div>
              </div>
              
              <div className="rounded-2xl bg-[#1e293b] border border-slate-800 p-5 relative overflow-hidden group">
                <div className="flex justify-between items-start z-10 relative">
                  <div>
                    <p className="text-xs font-medium text-[#94a3b8] mb-1">CO₂ Emissions Saved</p>
                    <h3 className="text-2xl font-bold text-white">8,320 <span className="text-sm font-normal text-[#94a3b8]">kg</span></h3>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-[#38bdf8]/10 flex items-center justify-center text-[#38bdf8]">
                    <span className="material-symbols-outlined text-[20px]">co2</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium z-10 relative">
                  <span className="text-[#38bdf8] flex items-center gap-1 bg-[#38bdf8]/10 px-1.5 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[12px]">forest</span>
                    Equiv. 412 Trees
                  </span>
                </div>
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-[#38bdf8]/5 blur-2xl group-hover:bg-[#38bdf8]/10 transition-all"></div>
              </div>

              <div className="rounded-2xl bg-[#1e293b] border border-slate-800 p-5 relative overflow-hidden group">
                <div className="flex justify-between items-start z-10 relative">
                  <div>
                    <p className="text-xs font-medium text-[#94a3b8] mb-1">Recycling Rate</p>
                    <h3 className="text-2xl font-bold text-white">94.2 <span className="text-sm font-normal text-[#94a3b8]">%</span></h3>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7]">
                    <span className="material-symbols-outlined text-[20px]">recycling</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium z-10 relative">
                  <span className="text-[#a855f7] flex items-center gap-1 bg-[#a855f7]/10 px-1.5 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                    Certified
                  </span>
                  <span className="text-[#94a3b8]">Zero Landfill Goal</span>
                </div>
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-[#a855f7]/5 blur-2xl group-hover:bg-[#a855f7]/10 transition-all"></div>
              </div>

              <div className="rounded-2xl bg-[#1e293b] border border-slate-800 p-5 relative overflow-hidden group">
                <div className="flex justify-between items-start z-10 relative">
                  <div>
                    <p className="text-xs font-medium text-[#94a3b8] mb-1">Sustainability Score</p>
                    <h3 className="text-2xl font-bold text-white">A+ <span className="text-sm font-normal text-[#94a3b8]">Rank</span></h3>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-[#fb923c]/10 flex items-center justify-center text-[#fb923c]">
                    <span className="material-symbols-outlined text-[20px]">trophy</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium z-10 relative">
                  <span className="text-[#fb923c] flex items-center gap-1 bg-[#fb923c]/10 px-1.5 py-0.5 rounded">
                    Top 5% Industry
                  </span>
                </div>
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-[#fb923c]/5 blur-2xl group-hover:bg-[#fb923c]/10 transition-all"></div>
              </div>
            </div>

            {/* Volume Trends Chart */}
            <div className="rounded-2xl bg-[#1e293b] border border-slate-800 p-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-white">Volume Trends</h3>
                  <p className="text-xs text-[#94a3b8]">Monthly E-Waste Collection (kg)</p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80]"></span> Collected
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span> Projected
                  </span>
                </div>
              </div>
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="border-t border-dashed border-slate-800 w-full h-px"><span className="absolute -left-8 -top-2 text-[10px] text-slate-600">2000</span></div>
                  <div className="border-t border-dashed border-slate-800 w-full h-px"><span className="absolute -left-8 -top-2 text-[10px] text-slate-600">1500</span></div>
                  <div className="border-t border-dashed border-slate-800 w-full h-px"><span className="absolute -left-8 -top-2 text-[10px] text-slate-600">1000</span></div>
                  <div className="border-t border-dashed border-slate-800 w-full h-px"><span className="absolute -left-8 -top-2 text-[10px] text-slate-600">500</span></div>
                  <div className="border-t border-dashed border-slate-800 w-full h-px"><span className="absolute -left-8 -top-2 text-[10px] text-slate-600">0</span></div>
                </div>
                <div className="flex items-end justify-between h-full pl-2 pr-2 gap-2 relative z-10">
                  <div className="flex flex-col items-center gap-2 group flex-1">
                    <div className="w-full max-w-[40px] bg-slate-700 rounded-t-sm h-[30%] group-hover:bg-[#4ade80]/40 transition-all relative">
                      <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-20">600kg</div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8]">Jan</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group flex-1">
                    <div className="w-full max-w-[40px] bg-slate-700 rounded-t-sm h-[45%] group-hover:bg-[#4ade80]/40 transition-all relative">
                      <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-20">900kg</div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8]">Feb</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group flex-1">
                    <div className="w-full max-w-[40px] bg-[#4ade80]/80 rounded-t-sm h-[55%] group-hover:bg-[#4ade80] transition-all relative shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                      <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-20">1100kg</div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8] font-bold text-white">Mar</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group flex-1">
                    <div className="w-full max-w-[40px] bg-[#4ade80]/80 rounded-t-sm h-[40%] group-hover:bg-[#4ade80] transition-all relative">
                      <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-20">800kg</div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8]">Apr</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group flex-1">
                    <div className="w-full max-w-[40px] bg-[#4ade80]/80 rounded-t-sm h-[75%] group-hover:bg-[#4ade80] transition-all relative">
                      <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-20">1500kg</div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8]">May</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group flex-1">
                    <div className="w-full max-w-[40px] bg-[#4ade80]/80 rounded-t-sm h-[60%] group-hover:bg-[#4ade80] transition-all relative">
                      <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-20">1200kg</div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8]">Jun</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group flex-1">
                    <div className="w-full max-w-[40px] bg-[#4ade80] rounded-t-sm h-[90%] group-hover:bg-green-400 transition-all relative shadow-[0_0_20px_rgba(74,222,128,0.15)]">
                      <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-20">1800kg</div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8]">Jul</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group flex-1">
                    <div className="w-full max-w-[40px] bg-slate-800 border border-dashed border-slate-600 rounded-t-sm h-[95%] opacity-50 relative"></div>
                    <span className="text-[10px] text-[#94a3b8]">Aug</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
              {/* Material Breakdown */}
              <div className="lg:col-span-1 rounded-2xl bg-[#1e293b] border border-slate-800 p-6 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-6">Material Breakdown</h3>
                <div className="relative flex items-center justify-center py-4">
                  <div className="w-48 h-48 rounded-full relative" style={{ background: 'conic-gradient(#4ade80 0deg 162deg, #38bdf8 162deg 270deg, #a855f7 270deg 324deg, #fb923c 324deg 360deg)' }}>
                    <div className="absolute inset-4 bg-[#1e293b] rounded-full flex flex-col items-center justify-center z-10">
                      <span className="text-3xl font-bold text-white">100%</span>
                      <span className="text-xs text-[#94a3b8]">Total</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#4ade80]"></span>
                      <span className="text-[#f8fafc]">IT Equipment</span>
                    </div>
                    <span className="font-semibold text-white">45%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#38bdf8]"></span>
                      <span className="text-[#f8fafc]">Large Appliances</span>
                    </div>
                    <span className="font-semibold text-white">30%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#a855f7]"></span>
                      <span className="text-[#f8fafc]">Batteries</span>
                    </div>
                    <span className="font-semibold text-white">15%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#fb923c]"></span>
                      <span className="text-[#f8fafc]">Cables & Misc</span>
                    </div>
                    <span className="font-semibold text-white">10%</span>
                  </div>
                </div>
              </div>

              {/* Reports Table */}
              <div className="lg:col-span-2 rounded-2xl bg-[#1e293b] border border-slate-800 flex flex-col overflow-hidden">
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">Recent Sustainability Reports</h3>
                  <button className="text-[#4ade80] text-xs font-semibold hover:underline">View Archive</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-[#94a3b8]">
                    <thead className="bg-slate-900/50 text-xs uppercase font-semibold text-[#f8fafc]">
                      <tr>
                        <th className="px-6 py-4">Report ID</th>
                        <th className="px-6 py-4">Date Generated</th>
                        <th className="px-6 py-4">Category</th>
                        <th className="px-6 py-4">Impact (CO₂)</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      <tr className="hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">#RPT-2024-001</td>
                        <td className="px-6 py-4">July 31, 2024</td>
                        <td className="px-6 py-4">Monthly Overview</td>
                        <td className="px-6 py-4 text-[#4ade80] font-medium">-240 kg</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-full bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-400 border border-green-900/50">
                            Verified
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#94a3b8] hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">#RPT-2024-002</td>
                        <td className="px-6 py-4">July 15, 2024</td>
                        <td className="px-6 py-4">Batch Analysis (IT)</td>
                        <td className="px-6 py-4 text-[#4ade80] font-medium">-120 kg</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-full bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-400 border border-green-900/50">
                            Verified
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#94a3b8] hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">#RPT-2024-003</td>
                        <td className="px-6 py-4">June 30, 2024</td>
                        <td className="px-6 py-4">Quarterly ESG</td>
                        <td className="px-6 py-4 text-[#4ade80] font-medium">-850 kg</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-full bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-400 border border-green-900/50">
                            Verified
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#94a3b8] hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">#RPT-2024-004</td>
                        <td className="px-6 py-4">June 12, 2024</td>
                        <td className="px-6 py-4">HazMat Disposal</td>
                        <td className="px-6 py-4 text-[#4ade80] font-medium">N/A</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-full bg-yellow-900/30 px-2.5 py-0.5 text-xs font-medium text-yellow-400 border border-yellow-900/50">
                            Processing
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#94a3b8] hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessAnalytics;