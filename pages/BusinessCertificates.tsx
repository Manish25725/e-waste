import React from 'react';

const BusinessCertificates = () => {
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
              <a onClick={() => window.location.hash = '#/business/certificates'} className="flex items-center gap-4 rounded-xl bg-[#4ade80]/10 px-3 py-3 text-[#4ade80] transition-all group-hover:bg-[#4ade80]/20 cursor-pointer">
                <span className="material-symbols-outlined shrink-0 fill">verified</span>
                <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Certificates</span>
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
            <h2 className="text-lg font-bold text-white leading-tight">Certificates Management</h2>
            <p className="text-xs text-[#94a3b8]">Access compliance reports and e-waste certificates</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 rounded-full bg-slate-800/50 px-4 py-1.5 border border-slate-700">
              <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">search</span>
              <input className="bg-transparent border-none text-xs focus:ring-0 placeholder-[#94a3b8] w-48 text-white p-0 focus:outline-none" placeholder="Search by Certificate ID..." type="text"/>
            </div>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-[#94a3b8] hover:bg-slate-700 hover:text-white transition-colors border border-slate-700">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-[#4ade80] border-2 border-[#0f172a]"></span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-slate-800 text-white px-4 py-2 text-xs font-bold hover:bg-slate-700 transition-all border border-slate-700">
              <span className="material-symbols-outlined text-[16px]">file_upload</span>
              Upload Report
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="mx-auto max-w-7xl flex flex-col gap-6">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-[#1e293b] p-5 border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-lg bg-[#4ade80]/10 p-2 text-[#4ade80] border border-[#4ade80]/20">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <span className="text-xs font-semibold text-[#4ade80] bg-[#4ade80]/5 px-2 py-1 rounded-full">+12 new</span>
                </div>
                <h3 className="text-2xl font-bold text-white">142</h3>
                <p className="text-sm text-[#94a3b8]">Total Certificates Issued</p>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-[#1e293b] p-5 border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-lg bg-[#38bdf8]/10 p-2 text-[#38bdf8] border border-[#38bdf8]/20">
                    <span className="material-symbols-outlined">scale</span>
                  </div>
                  <span className="text-xs font-semibold text-[#38bdf8] bg-[#38bdf8]/5 px-2 py-1 rounded-full">YTD</span>
                </div>
                <h3 className="text-2xl font-bold text-white">12,450 <span className="text-sm font-normal text-[#94a3b8]">kg</span></h3>
                <p className="text-sm text-[#94a3b8]">Certified Recycled Volume</p>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-[#1e293b] p-5 border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400 border border-purple-500/20">
                    <span className="material-symbols-outlined">shield_moon</span>
                  </div>
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/5 px-2 py-1 rounded-full">Compliant</span>
                </div>
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="text-sm text-[#94a3b8]">Current Compliance Score</p>
              </div>
            </div>

            {/* Split View: Table and Sidebar */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              
              {/* Table Section */}
              <div className="xl:col-span-2 rounded-2xl bg-[#1e293b] border border-slate-800 flex flex-col overflow-hidden h-[600px] xl:h-[calc(100vh-280px)]">
                <div className="p-5 border-b border-slate-800 bg-slate-900/30 flex flex-col sm:flex-row gap-4 justify-between items-center z-10">
                  <div>
                    <h3 className="text-base font-bold text-white">Certificate Registry</h3>
                    <p className="text-xs text-[#94a3b8]">Manage your digital e-waste records</p>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-48">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#94a3b8] text-[18px]">filter_list</span>
                      <select className="w-full bg-slate-900 border border-slate-700 text-white text-xs rounded-lg py-2 pl-9 pr-8 focus:ring-1 focus:ring-[#4ade80] focus:border-[#4ade80] outline-none cursor-pointer">
                        <option>All Types</option>
                        <option>Recycling</option>
                        <option>Destruction</option>
                        <option>Donation</option>
                      </select>
                    </div>
                    <div className="relative flex-1 sm:w-40">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#94a3b8] text-[18px]">calendar_month</span>
                      <select className="w-full bg-slate-900 border border-slate-700 text-white text-xs rounded-lg py-2 pl-9 pr-8 focus:ring-1 focus:ring-[#4ade80] focus:border-[#4ade80] outline-none cursor-pointer">
                        <option>Last 30 Days</option>
                        <option>2024</option>
                        <option>2023</option>
                      </select>
                    </div>
                    <button className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg border border-slate-700 transition-colors" title="Export CSV">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-900/80 sticky top-0 z-10 backdrop-blur-sm">
                      <tr>
                        <th className="px-6 py-3 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Certificate ID</th>
                        <th className="px-6 py-3 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Date Issued</th>
                        <th className="px-6 py-3 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Weight / Unit</th>
                        <th className="px-6 py-3 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      <tr className="group hover:bg-slate-800/40 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80]">
                              <span className="material-symbols-outlined text-[18px]">recycling</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">Batch Recycling</p>
                              <p className="text-[10px] text-[#94a3b8] font-mono">CRT-2024-05A</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#94a3b8]">May 20, 2024</td>
                        <td className="px-6 py-4 text-xs font-medium text-white">450 kg</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4ade80]/10 px-2 py-0.5 text-[10px] font-bold text-[#4ade80] border border-[#4ade80]/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]"></span>
                            Verified
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#94a3b8] hover:text-white transition-colors p-1">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button className="text-[#94a3b8] hover:text-[#4ade80] transition-colors p-1 ml-2">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-slate-800/40 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                              <span className="material-symbols-outlined text-[18px]">delete_forever</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">Data Destruction</p>
                              <p className="text-[10px] text-[#94a3b8] font-mono">DDC-2024-089</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#94a3b8]">May 18, 2024</td>
                        <td className="px-6 py-4 text-xs font-medium text-white">120 Units</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4ade80]/10 px-2 py-0.5 text-[10px] font-bold text-[#4ade80] border border-[#4ade80]/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]"></span>
                            Verified
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#94a3b8] hover:text-white transition-colors p-1">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button className="text-[#94a3b8] hover:text-[#4ade80] transition-colors p-1 ml-2">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-slate-800/40 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                              <span className="material-symbols-outlined text-[18px]">battery_charging_full</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">Battery Disposal</p>
                              <p className="text-[10px] text-[#94a3b8] font-mono">BDC-2024-012</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#94a3b8]">May 15, 2024</td>
                        <td className="px-6 py-4 text-xs font-medium text-white">85 kg</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2 py-0.5 text-[10px] font-bold text-yellow-500 border border-yellow-500/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                            Processing
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-600 cursor-not-allowed p-1">
                            <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                          </button>
                          <button className="text-slate-600 cursor-not-allowed p-1 ml-2">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-slate-800/40 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80]">
                              <span className="material-symbols-outlined text-[18px]">recycling</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">Batch Recycling</p>
                              <p className="text-[10px] text-[#94a3b8] font-mono">CRT-2024-002</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#94a3b8]">Apr 30, 2024</td>
                        <td className="px-6 py-4 text-xs font-medium text-white">1,200 kg</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4ade80]/10 px-2 py-0.5 text-[10px] font-bold text-[#4ade80] border border-[#4ade80]/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]"></span>
                            Verified
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#94a3b8] hover:text-white transition-colors p-1">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button className="text-[#94a3b8] hover:text-[#4ade80] transition-colors p-1 ml-2">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-slate-800/40 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                              <span className="material-symbols-outlined text-[18px]">devices_other</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">IT Asset Disposition</p>
                              <p className="text-[10px] text-[#94a3b8] font-mono">ITAD-2024-041</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#94a3b8]">Apr 22, 2024</td>
                        <td className="px-6 py-4 text-xs font-medium text-white">65 Units</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4ade80]/10 px-2 py-0.5 text-[10px] font-bold text-[#4ade80] border border-[#4ade80]/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]"></span>
                            Verified
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#94a3b8] hover:text-white transition-colors p-1">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button className="text-[#94a3b8] hover:text-[#4ade80] transition-colors p-1 ml-2">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-slate-800/40 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400">
                              <span className="material-symbols-outlined text-[18px]">archive</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-400">Logistics Manifest</p>
                              <p className="text-[10px] text-slate-500 font-mono">LOG-2023-998</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-500">Dec 12, 2023</td>
                        <td className="px-6 py-4 text-xs font-medium text-slate-500">--</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-700/20 px-2 py-0.5 text-[10px] font-bold text-slate-500 border border-slate-600/20">
                            Archived
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#94a3b8] hover:text-white transition-colors p-1">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button className="text-[#94a3b8] hover:text-[#4ade80] transition-colors p-1 ml-2">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-slate-800 bg-slate-900/30 flex justify-between items-center text-xs text-[#94a3b8]">
                  <span>Showing 1-6 of 142 records</span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded bg-slate-800 border border-slate-700 hover:text-white disabled:opacity-50">Prev</button>
                    <button className="px-3 py-1 rounded bg-slate-800 border border-slate-700 hover:text-white">Next</button>
                  </div>
                </div>
              </div>

              {/* Sidebar Section */}
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl bg-[#1e293b] border border-slate-800 p-6">
                  <h3 className="text-base font-bold text-white mb-4">Compliance Documents</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
                      <div className="h-10 w-10 shrink-0 bg-white rounded flex items-center justify-center p-1">
                        <span className="text-[10px] font-black text-slate-900 leading-none text-center">ISO<br/>14001</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white">ISO 14001:2015</p>
                        <p className="text-[10px] text-[#94a3b8]">Environmental Management</p>
                        <p className="text-[10px] text-[#4ade80] mt-1">Valid until: Dec 2025</p>
                      </div>
                      <button className="text-[#94a3b8] hover:text-[#4ade80]">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
                      <div className="h-10 w-10 shrink-0 bg-white rounded flex items-center justify-center p-1">
                        <span className="text-[10px] font-black text-slate-900 leading-none text-center">R2<br/>v3</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white">R2v3 Standard</p>
                        <p className="text-[10px] text-[#94a3b8]">Responsible Recycling</p>
                        <p className="text-[10px] text-[#4ade80] mt-1">Valid until: Mar 2026</p>
                      </div>
                      <button className="text-[#94a3b8] hover:text-[#4ade80]">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
                      <div className="h-10 w-10 shrink-0 bg-slate-800 rounded flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">policy</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white">EHS Policy</p>
                        <p className="text-[10px] text-[#94a3b8]">Internal Safety Standards</p>
                        <p className="text-[10px] text-[#94a3b8] mt-1">Updated: Jan 2024</p>
                      </div>
                      <button className="text-[#94a3b8] hover:text-[#4ade80]">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-2xl bg-gradient-to-b from-[#1e293b] to-slate-900 border border-slate-800 p-6 flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-base font-bold text-white">Annual Reports</h3>
                    <button className="text-xs text-[#4ade80] hover:underline">View Archive</button>
                  </div>
                  <div className="space-y-3">
                    <div className="group flex items-center justify-between p-3 rounded-xl border border-dashed border-slate-700 hover:border-[#4ade80]/50 hover:bg-slate-800/50 transition-all cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#94a3b8] group-hover:text-[#4ade80] transition-colors">folder_zip</span>
                        <div>
                          <p className="text-sm font-medium text-white">2023 Sustainability</p>
                          <p className="text-[10px] text-[#94a3b8]">Full Audit Report • PDF</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">arrow_forward</span>
                    </div>
                    <div className="group flex items-center justify-between p-3 rounded-xl border border-dashed border-slate-700 hover:border-[#4ade80]/50 hover:bg-slate-800/50 transition-all cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#94a3b8] group-hover:text-[#4ade80] transition-colors">folder_zip</span>
                        <div>
                          <p className="text-sm font-medium text-white">2022 Sustainability</p>
                          <p className="text-[10px] text-[#94a3b8]">Full Audit Report • PDF</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">arrow_forward</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <h4 className="text-xs font-bold text-[#94a3b8] uppercase mb-3">Verification Tool</h4>
                    <div className="flex gap-2">
                      <input className="flex-1 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white px-3 py-2 focus:ring-1 focus:ring-[#4ade80] focus:border-[#4ade80]" placeholder="Enter Code" type="text"/>
                      <button className="bg-[#4ade80] text-slate-900 text-xs font-bold px-3 py-2 rounded-lg hover:bg-[#4ade80]/90 transition-colors">Check</button>
                    </div>
                    <p className="text-[10px] text-[#94a3b8] mt-2">Instantly verify the authenticity of a physical certificate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessCertificates;