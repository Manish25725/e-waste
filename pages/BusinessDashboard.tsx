import React from 'react';

const BusinessDashboard = () => {
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
              <a onClick={() => window.location.hash = '#/business'} className="flex items-center gap-4 rounded-xl bg-[#4ade80]/10 px-3 py-3 text-[#4ade80] transition-all group-hover:bg-[#4ade80]/20 cursor-pointer">
                <span className="material-symbols-outlined shrink-0 fill">dashboard</span>
                <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Dashboard</span>
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
              <a onClick={() => window.location.hash = '#/business/analytics'} className="flex items-center gap-4 rounded-xl px-3 py-3 text-[#94a3b8] hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined shrink-0">analytics</span>
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Analytics</span>
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
            <h2 className="text-lg font-bold text-white leading-tight">Overview</h2>
            <p className="text-xs text-[#94a3b8]">Welcome back, TechCorp Solutions</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 rounded-full bg-slate-800/50 px-4 py-1.5 border border-slate-700">
              <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">search</span>
              <input className="bg-transparent border-none text-xs focus:ring-0 placeholder-[#94a3b8] w-48 text-white p-0 focus:outline-none" placeholder="Search shipments, reports..." type="text"/>
            </div>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-[#94a3b8] hover:bg-slate-700 hover:text-white transition-colors border border-slate-700">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-[#4ade80] border-2 border-[#0f172a]"></span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-[#4ade80] text-slate-900 px-4 py-2 text-xs font-bold hover:bg-[#4ade80]/90 transition-all shadow-[0_0_20px_rgba(74,222,128,0.15)]">
              <span className="material-symbols-outlined text-[16px]">add_circle</span>
              New Pickup
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="mx-auto max-w-7xl flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] to-slate-900 p-5 border border-slate-800 group hover:border-slate-700 transition-all">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-[#4ade80]/10 blur-2xl group-hover:bg-[#4ade80]/20 transition-all"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-lg bg-slate-800 p-2 text-[#4ade80] shadow-sm border border-slate-700">
                    <span className="material-symbols-outlined">recycling</span>
                  </div>
                  <span className="flex items-center text-xs font-bold text-[#4ade80] bg-[#4ade80]/10 px-2 py-1 rounded-full">+12.5%</span>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white tracking-tight">1,250 <span className="text-sm font-normal text-[#94a3b8]">kg</span></h3>
                  <p className="text-xs font-medium text-[#94a3b8] mt-1">Total E-Waste Processed</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] to-slate-900 p-5 border border-slate-800 group hover:border-slate-700 transition-all">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-[#38bdf8]/10 blur-2xl group-hover:bg-[#38bdf8]/20 transition-all"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-lg bg-slate-800 p-2 text-[#38bdf8] shadow-sm border border-slate-700">
                    <span className="material-symbols-outlined">co2</span>
                  </div>
                  <span className="flex items-center text-xs font-bold text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-1 rounded-full">offset</span>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white tracking-tight">850 <span className="text-sm font-normal text-[#94a3b8]">kg</span></h3>
                  <p className="text-xs font-medium text-[#94a3b8] mt-1">CO₂ Emissions Saved</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] to-slate-900 p-5 border border-slate-800 group hover:border-slate-700 transition-all">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-orange-500/10 blur-2xl group-hover:bg-orange-500/20 transition-all"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-lg bg-slate-800 p-2 text-orange-400 shadow-sm border border-slate-700">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <span className="flex items-center text-xs font-bold text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full">2 active</span>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Pending</h3>
                  <p className="text-xs font-medium text-[#94a3b8] mt-1">Scheduled Pickups</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] to-slate-900 p-5 border border-slate-800 group hover:border-slate-700 transition-all">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-lg bg-slate-800 p-2 text-purple-400 shadow-sm border border-slate-700">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <span className="flex items-center text-xs font-bold text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">Latest</span>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white tracking-tight">24</h3>
                  <p className="text-xs font-medium text-[#94a3b8] mt-1">Digital Certificates</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-2xl bg-[#1e293b] border border-slate-800 p-6 flex flex-col relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 z-10">
                  <div>
                    <h3 className="text-base font-bold text-white">Organizational Eco-Footprint</h3>
                    <p className="text-xs text-[#94a3b8]">Monthly breakdown by category</p>
                  </div>
                  <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-800">
                    <button className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-white shadow-sm border border-slate-700">Volume</button>
                    <button className="px-3 py-1 text-xs font-medium rounded-md text-[#94a3b8] hover:text-white">Impact</button>
                  </div>
                </div>
                <div className="relative flex-1 h-[300px] w-full mt-4 flex items-end justify-between gap-2 px-2 z-10">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0 px-2 opacity-20">
                    <div className="border-t border-dashed border-slate-400 w-full h-px"></div>
                    <div className="border-t border-dashed border-slate-400 w-full h-px"></div>
                    <div className="border-t border-dashed border-slate-400 w-full h-px"></div>
                    <div className="border-t border-dashed border-slate-400 w-full h-px"></div>
                    <div className="border-t border-dashed border-slate-400 w-full h-px"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
                    <div className="w-full max-w-[40px] bg-slate-700 rounded-t-sm h-[30%] group-hover:bg-slate-600 transition-all relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4ade80]/50"></div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8] uppercase">Jan</span>
                  </div>
                  <div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
                    <div className="w-full max-w-[40px] bg-slate-700 rounded-t-sm h-[45%] group-hover:bg-slate-600 transition-all relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4ade80]/50"></div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8] uppercase">Feb</span>
                  </div>
                  <div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
                    <div className="w-full max-w-[40px] bg-slate-700 rounded-t-sm h-[25%] group-hover:bg-slate-600 transition-all relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4ade80]/50"></div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8] uppercase">Mar</span>
                  </div>
                  <div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
                    <div className="w-full max-w-[40px] bg-slate-700 rounded-t-sm h-[60%] group-hover:bg-slate-600 transition-all relative overflow-hidden">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-lg">
                        620 kg
                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4ade80]/50"></div>
                    </div>
                    <span className="text-[10px] text-[#94a3b8] uppercase">Apr</span>
                  </div>
                  <div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
                    <div className="w-full max-w-[40px] bg-gradient-to-t from-[#4ade80]/80 to-[#4ade80] rounded-t-sm h-[85%] shadow-[0_0_20px_rgba(74,222,128,0.3)] relative transition-all hover:scale-105">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase">May</span>
                  </div>
                  <div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
                    <div className="w-full max-w-[40px] bg-slate-800/50 rounded-t-sm h-[10%] border-t border-dashed border-slate-600"></div>
                    <span className="text-[10px] text-[#94a3b8] uppercase">Jun</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#1e293b] border border-slate-800 p-0 overflow-hidden flex flex-col h-full">
                <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
                  <h3 className="text-base font-bold text-white">Recent Certificates</h3>
                  <button className="text-[#4ade80] text-xs font-semibold hover:underline">View All</button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-slate-700">
                  <div className="group flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#4ade80]/40 transition-all cursor-pointer hover:bg-slate-800">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80] group-hover:bg-[#4ade80] group-hover:text-slate-900 transition-colors">
                      <span className="material-symbols-outlined text-[20px]">description</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">Batch #2024-05A</p>
                      <p className="text-xs text-[#94a3b8] truncate">Processed May 12 • 450kg</p>
                    </div>
                    <button className="h-8 w-8 flex items-center justify-center rounded-full text-[#94a3b8] hover:bg-slate-700 hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                  </div>
                  <div className="group flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#4ade80]/40 transition-all cursor-pointer hover:bg-slate-800">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80] group-hover:bg-[#4ade80] group-hover:text-slate-900 transition-colors">
                      <span className="material-symbols-outlined text-[20px]">description</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">ISO Compliance Report</p>
                      <p className="text-xs text-[#94a3b8] truncate">Generated Apr 30 • Annual</p>
                    </div>
                    <button className="h-8 w-8 flex items-center justify-center rounded-full text-[#94a3b8] hover:bg-slate-700 hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                  </div>
                  <div className="group flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#4ade80]/40 transition-all cursor-pointer hover:bg-slate-800">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80] group-hover:bg-[#4ade80] group-hover:text-slate-900 transition-colors">
                      <span className="material-symbols-outlined text-[20px]">description</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">Batch #2024-04B</p>
                      <p className="text-xs text-[#94a3b8] truncate">Processed Apr 15 • 320kg</p>
                    </div>
                    <button className="h-8 w-8 flex items-center justify-center rounded-full text-[#94a3b8] hover:bg-slate-700 hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/20 border border-slate-800/50 opacity-75">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-slate-800 flex items-center justify-center text-[#94a3b8] animate-pulse">
                      <span className="material-symbols-outlined text-[20px]">hourglass_empty</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#94a3b8] truncate">Batch #2024-05B</p>
                      <p className="text-xs text-slate-500 truncate">Verification Pending...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
              <div className="rounded-2xl bg-[#1e293b] border border-slate-800 overflow-hidden flex flex-col h-[350px] relative group">
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 pointer-events-none">
                  <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-2 w-fit">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Live Tracking</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md border border-slate-800 w-fit">
                    <span className="text-[10px] text-[#94a3b8] font-mono">ID: TRK-8821 • ETA: 14:30</span>
                  </div>
                </div>
                <div className="absolute inset-0 z-0 bg-slate-900">
                  <img className="h-full w-full object-cover opacity-30 grayscale mix-blend-screen" alt="Dark stylized map interface showing city streets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbeTWGDGpaDD0ptERwuPXrpfBUrdzuqApgxfxYSDLuMZt4yW9wba9wFo8-wkgP5snmEzbReXIq1a7j11oL30N6hPly7FHxcWDr9LxnnWYt9XrLjGOh0eKzrm3m1JUjYaKXI-_LE-gNQ_wOXdop1VqYjtOIiNTauyL6s26HOUofVDOhhqg6vUL1kBRjvtsewCt7vNBGzxFkHn2cn5MZrVfH2ys4D0zwMl1El3PIOeXb0UeuXwzMBDzcHSK59wylYo5StE6Hmkq5UY0"/>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                </div>
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <svg className="absolute inset-0 h-full w-full">
                    <path className="opacity-60" d="M 100 300 Q 250 200 400 150 T 600 100" fill="none" stroke="#4ade80" strokeDasharray="8 4" strokeWidth="3"></path>
                  </svg>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-[#4ade80]/20 animate-ping"></div>
                      <div className="absolute -inset-8 rounded-full bg-[#4ade80]/10 animate-pulse delay-75"></div>
                      <div className="relative h-10 w-10 bg-slate-900 rounded-full border-2 border-[#4ade80] flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.4)] z-20">
                        <span className="material-symbols-outlined text-[#4ade80] text-sm">local_shipping</span>
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-slate-900/90 backdrop-blur-xl border border-slate-700 p-3 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-white">Truck #42</span>
                          <span className="text-[10px] bg-[#4ade80]/20 text-[#4ade80] px-1.5 py-0.5 rounded">On Time</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mb-1">
                          <div className="bg-[#4ade80] h-full w-[70%]"></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-[#94a3b8]">
                          <span>Depot</span>
                          <span>Dest</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#1e293b] border border-slate-800 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4ade80]">calendar_add_on</span>
                    Schedule Pickup
                  </h3>
                  <p className="text-xs text-[#94a3b8] mb-6">Arrange collection for bulk corporate e-waste.</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="group relative rounded-xl bg-slate-900 border border-slate-700 p-3 hover:border-[#4ade80]/50 transition-colors cursor-pointer">
                      <label className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-1">Date</label>
                      <div className="flex items-center justify-between text-white text-sm font-medium">
                        <span>Select Date</span>
                        <span className="material-symbols-outlined text-slate-500 group-hover:text-[#4ade80] text-[18px]">calendar_month</span>
                      </div>
                    </div>
                    <div className="group relative rounded-xl bg-slate-900 border border-slate-700 p-3 hover:border-[#4ade80]/50 transition-colors cursor-pointer">
                      <label className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-1">Est. Weight</label>
                      <div className="flex items-center justify-between text-white text-sm font-medium">
                        <span>-- kg</span>
                        <span className="material-symbols-outlined text-slate-500 group-hover:text-[#4ade80] text-[18px]">scale</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-2">Primary Waste Type</label>
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-lg bg-[#4ade80]/20 px-3 py-2 text-xs font-bold text-[#4ade80] border border-[#4ade80]/20 hover:bg-[#4ade80]/30 transition-colors">IT Equipment</button>
                      <button className="rounded-lg bg-slate-800 px-3 py-2 text-xs font-medium text-[#94a3b8] border border-slate-700 hover:text-white hover:border-slate-500 transition-colors">Batteries</button>
                      <button className="rounded-lg bg-slate-800 px-3 py-2 text-xs font-medium text-[#94a3b8] border border-slate-700 hover:text-white hover:border-slate-500 transition-colors">Mixed Load</button>
                    </div>
                  </div>
                </div>
                <button className="w-full rounded-xl bg-gradient-to-r from-[#4ade80] to-[#22c55e] py-3.5 text-center text-sm font-bold text-slate-900 shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Confirm Pickup Request
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessDashboard;