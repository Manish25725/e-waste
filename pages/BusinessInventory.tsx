import React from 'react';

const BusinessInventory = () => {
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
              <a onClick={() => window.location.hash = '#/business/inventory'} className="flex items-center gap-4 rounded-xl bg-[#4ade80]/10 px-3 py-3 text-[#4ade80] transition-all group-hover:bg-[#4ade80]/20 cursor-pointer">
                <span className="material-symbols-outlined shrink-0 fill">inventory_2</span>
                <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Inventory</span>
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
            <h2 className="text-lg font-bold text-white leading-tight">Inventory Management</h2>
            <p className="text-xs text-[#94a3b8]">TechCorp Solutions • Warehouse A</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 rounded-full bg-slate-800/50 px-4 py-1.5 border border-slate-700">
              <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">search</span>
              <input className="bg-transparent border-none text-xs focus:ring-0 placeholder-[#94a3b8] w-48 text-white p-0 focus:outline-none" placeholder="Search item ID, category..." type="text"/>
            </div>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-[#94a3b8] hover:bg-slate-700 hover:text-white transition-colors border border-slate-700">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-[#4ade80] border-2 border-[#0f172a]"></span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-slate-800 text-white px-4 py-2 text-xs font-bold hover:bg-slate-700 transition-all border border-slate-700">
              <span className="material-symbols-outlined text-[16px]">history</span>
              History
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="mx-auto max-w-7xl flex flex-col gap-6">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] to-slate-900 p-5 border border-slate-800 group hover:border-slate-700 transition-all">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-[#4ade80]/10 blur-2xl group-hover:bg-[#4ade80]/20 transition-all"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-lg bg-slate-800 p-2 text-[#4ade80] shadow-sm border border-slate-700">
                    <span className="material-symbols-outlined">inventory_2</span>
                  </div>
                  <span className="flex items-center text-xs font-bold text-[#4ade80] bg-[#4ade80]/10 px-2 py-1 rounded-full">Updated</span>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white tracking-tight">4,280 <span className="text-sm font-normal text-[#94a3b8]">items</span></h3>
                  <p className="text-xs font-medium text-[#94a3b8] mt-1">Total Assets Tracked</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] to-slate-900 p-5 border border-slate-800 group hover:border-slate-700 transition-all">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-[#38bdf8]/10 blur-2xl group-hover:bg-[#38bdf8]/20 transition-all"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-lg bg-slate-800 p-2 text-[#38bdf8] shadow-sm border border-slate-700">
                    <span className="material-symbols-outlined">warehouse</span>
                  </div>
                  <span className="flex items-center text-xs font-bold text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-1 rounded-full">Storage</span>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white tracking-tight">1,850 <span className="text-sm font-normal text-[#94a3b8]">kg</span></h3>
                  <p className="text-xs font-medium text-[#94a3b8] mt-1">Estimated Stock Weight</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] to-slate-900 p-5 border border-slate-800 group hover:border-slate-700 transition-all">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-orange-500/10 blur-2xl group-hover:bg-orange-500/20 transition-all"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-lg bg-slate-800 p-2 text-orange-400 shadow-sm border border-slate-700">
                    <span className="material-symbols-outlined">pending_actions</span>
                  </div>
                  <span className="flex items-center text-xs font-bold text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full">Action Req</span>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white tracking-tight">12</h3>
                  <p className="text-xs font-medium text-[#94a3b8] mt-1">Ready for Pickup</p>
                </div>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#1e293b] p-4 rounded-xl border border-slate-800 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="relative group">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#94a3b8] text-[18px] group-focus-within:text-[#4ade80] transition-colors">search</span>
                  <input className="pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:ring-1 focus:ring-[#4ade80] focus:border-[#4ade80] placeholder-slate-500 w-full md:w-64 transition-all focus:outline-none" placeholder="Search inventory..." type="text"/>
                </div>
                <div className="h-6 w-px bg-slate-700 hidden md:block"></div>
                <select className="bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-[#4ade80] focus:border-[#4ade80] block p-2 px-3 hover:bg-slate-800 cursor-pointer transition-colors outline-none">
                  <option>All Categories</option>
                  <option>IT Equipment</option>
                  <option>Cables & Wiring</option>
                  <option>Batteries</option>
                  <option>Monitors</option>
                </select>
                <select className="bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-[#4ade80] focus:border-[#4ade80] block p-2 px-3 hover:bg-slate-800 cursor-pointer transition-colors outline-none">
                  <option>All Statuses</option>
                  <option>In Use</option>
                  <option>In Storage</option>
                  <option>Ready for Pickup</option>
                  <option>Recycled</option>
                </select>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-xs font-bold text-[#94a3b8] hover:text-white border border-slate-700 hover:bg-slate-700 transition-all">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Export
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-lg bg-[#4ade80] text-slate-900 px-4 py-2 text-xs font-bold hover:bg-[#4ade80]/90 transition-all shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:scale-105 active:scale-95">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Add Item
                </button>
              </div>
            </div>

            {/* Inventory Table */}
            <div className="rounded-2xl bg-[#1e293b] border border-slate-800 overflow-hidden flex flex-col shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900/80 border-b border-slate-700 text-xs uppercase tracking-wider text-[#94a3b8]">
                      <th className="p-4 font-semibold">Item Details</th>
                      <th className="p-4 font-semibold">Category</th>
                      <th className="p-4 font-semibold">Quantity</th>
                      <th className="p-4 font-semibold">Location</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold">Last Updated</th>
                      <th className="p-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-slate-800">
                    <tr className="group hover:bg-slate-800/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-white border border-slate-700 group-hover:border-[#4ade80]/50 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">dns</span>
                          </div>
                          <div>
                            <p className="font-bold text-white">Dell PowerEdge Servers</p>
                            <p className="text-xs text-[#94a3b8]">ID: #SRV-9921</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[#94a3b8]">IT Infrastructure</td>
                      <td className="p-4 text-white font-medium">15 Units</td>
                      <td className="p-4 text-[#94a3b8]">Main Server Room</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                          Pending Audit
                        </span>
                      </td>
                      <td className="p-4 text-[#94a3b8] text-xs">Oct 24, 2023</td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded-lg hover:bg-slate-700 text-[#94a3b8] hover:text-white transition-colors" title="Edit">
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-[#94a3b8] hover:text-red-400 transition-colors" title="Delete">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="group hover:bg-slate-800/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-white border border-slate-700 group-hover:border-[#4ade80]/50 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">cable</span>
                          </div>
                          <div>
                            <p className="font-bold text-white">Mixed Copper Cabling</p>
                            <p className="text-xs text-[#94a3b8]">ID: #CBL-0043</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[#94a3b8]">Recyclables</td>
                      <td className="p-4 text-white font-medium">120 kg</td>
                      <td className="p-4 text-[#94a3b8]">Bin 4A</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></span>
                          Ready for Pickup
                        </span>
                      </td>
                      <td className="p-4 text-[#94a3b8] text-xs">Today, 09:30 AM</td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded-lg hover:bg-slate-700 text-[#94a3b8] hover:text-white transition-colors" title="Edit">
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-[#94a3b8] hover:text-red-400 transition-colors" title="Delete">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="group hover:bg-slate-800/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-white border border-slate-700 group-hover:border-[#4ade80]/50 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">desktop_windows</span>
                          </div>
                          <div>
                            <p className="font-bold text-white">Legacy CRT Monitors</p>
                            <p className="text-xs text-[#94a3b8]">ID: #MON-1102</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[#94a3b8]">Monitors</td>
                      <td className="p-4 text-white font-medium">8 Units</td>
                      <td className="p-4 text-[#94a3b8]">Storage Room B</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                          In Storage
                        </span>
                      </td>
                      <td className="p-4 text-[#94a3b8] text-xs">Oct 20, 2023</td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded-lg hover:bg-slate-700 text-[#94a3b8] hover:text-white transition-colors" title="Edit">
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-[#94a3b8] hover:text-red-400 transition-colors" title="Delete">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="group hover:bg-slate-800/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-white border border-slate-700 group-hover:border-[#4ade80]/50 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">battery_charging_full</span>
                          </div>
                          <div>
                            <p className="font-bold text-white">Li-Ion Laptop Batteries</p>
                            <p className="text-xs text-[#94a3b8]">ID: #BAT-3391</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[#94a3b8]">Hazardous</td>
                      <td className="p-4 text-white font-medium">45 Units</td>
                      <td className="p-4 text-[#94a3b8]">HazMat Locker</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                          In Storage
                        </span>
                      </td>
                      <td className="p-4 text-[#94a3b8] text-xs">Oct 18, 2023</td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded-lg hover:bg-slate-700 text-[#94a3b8] hover:text-white transition-colors" title="Edit">
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-[#94a3b8] hover:text-red-400 transition-colors" title="Delete">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="group hover:bg-slate-800/50 transition-colors bg-slate-800/20">
                      <td className="p-4">
                        <div className="flex items-center gap-3 opacity-60">
                          <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-[#94a3b8] border border-slate-700">
                            <span className="material-symbols-outlined text-[20px]">print</span>
                          </div>
                          <div>
                            <p className="font-bold text-[#94a3b8] line-through">Office Printers</p>
                            <p className="text-xs text-slate-600">ID: #PRT-8822</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-slate-600">Peripherals</td>
                      <td className="p-4 text-slate-500 font-medium">10 Units</td>
                      <td className="p-4 text-slate-600">Offsite</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-700/50 text-slate-400 border border-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                          Recycled
                        </span>
                      </td>
                      <td className="p-4 text-slate-600 text-xs">Sep 30, 2023</td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded-lg hover:bg-slate-700 text-[#94a3b8] hover:text-white transition-colors" title="View Certificate">
                            <span className="material-symbols-outlined text-[18px]">verified</span>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="group hover:bg-slate-800/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-white border border-slate-700 group-hover:border-[#4ade80]/50 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">smartphone</span>
                          </div>
                          <div>
                            <p className="font-bold text-white">Corporate Mobile Devices</p>
                            <p className="text-xs text-[#94a3b8]">ID: #MOB-4122</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[#94a3b8]">Mobile</td>
                      <td className="p-4 text-white font-medium">50 Units</td>
                      <td className="p-4 text-[#94a3b8]">Secure Storage</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></span>
                          Ready for Pickup
                        </span>
                      </td>
                      <td className="p-4 text-[#94a3b8] text-xs">Yesterday</td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded-lg hover:bg-slate-700 text-[#94a3b8] hover:text-white transition-colors" title="Edit">
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-[#94a3b8] hover:text-red-400 transition-colors" title="Delete">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between">
                <span className="text-xs text-[#94a3b8]">Showing <span className="font-bold text-white">1-6</span> of <span className="font-bold text-white">42</span> items</span>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg border border-slate-700 text-[#94a3b8] text-xs font-medium hover:bg-slate-800 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">Previous</button>
                  <button className="px-3 py-1.5 rounded-lg border border-slate-700 text-[#94a3b8] text-xs font-medium hover:bg-slate-800 hover:text-white">Next</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessInventory;