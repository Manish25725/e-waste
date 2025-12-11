import React from 'react';
import Layout from '../components/Layout';

const agencies = [
  { name: 'Green-Tech Recyclers', rating: 4.5, dist: '2.5 miles', types: ['Data Destruction', 'Battery Recycling'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6qFSY6fNB0bEPDi2IfSqVwA59ZtjrFCXL5vV78O5492Cju80gEGuBVQp94VgnHk0Gp3FXxzsGXnLKBmrQoUHjtxiZElOxTFetaxolAvW1uzTM4kRxgVOQJQP2n-M932ezoY5lHjb5Re6ZhpGrUhc9ah20Z1ptF3By5tpMlbihz97Is0KRFRIpX0eY9VtpXfCQjo_WPFqlvl_y2PzvX_vi_DBiFfbYel7FpIP5TPEqz2QpDYaibiefkNdGmNNqmvXPqN1lZaKsvg' },
  { name: 'E-Waste Solutions Inc.', rating: 4.8, dist: '3.1 miles', types: ['Corporate Pickups'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEHXjQw_gn9lUASWm-beymRHYcEQv0kX-M45ZXgTh4BcuWZtyuwTAqB_BnK6M-bCHkUlhG3k2ficinK2XpznlQlCv0h7HDuYng04u9C6a-pNlLR9xrcwZRPjxorsLaj3PxRfkGfiZKKmOJul86409adJMh5zxMN8ppZEW-YxdxdxxnyIjeQCb3GmVIm-LEFuWm20qLSaoxSPLD8T25t_akB2IpSTBNNy1U4xaqYnHUR5qJwy7smd62-kmR3dO9VB5B9zt3brS61Q' },
  { name: 'Brooklyn Recycles', rating: 4.2, dist: '4.0 miles', types: ['Residential', 'Data Destruction'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBi0gc4D5OjT66mMiMzxwrwkFNEq6KlFCVcvSA8RfxVYr3P4Rtm7dn0zkvR1n3wXf-lO-nA3qrMI6RicBGoW2K0wxpJmnV2YXvCwW_j_Az0CyJlY_b5XrOQfb35pMvYDb_4FWq77AtJeOUK62TC960fZUDUxSoE6hoXaw0FtJrAOV4tuJZAMFr9aksg5whdVkh65NJPUp9rG8X6xMKog7XTM5zZVuUFX58IQsyCTw1gwG0fZN_hf-IBQZw7r6YCQRg6KaQMfR_0g' },
  { name: 'NY E-Waste Pros', rating: 4.9, dist: '5.2 miles', types: ['Certified Recycling'], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvyCZVyq-wXiOQRja93w9sYboP4JLQil1FIw9Z4CJGZs-QAW9D1zRvn97ldiBGGwM24kHoKBiGEMWrA0OF8Kt4EAjnK_sPFZ6MBjJdRhFLd_5IkSKooChpPGzSXO0duqqTBYL8AdA869PEk6QTbYALJP8rwI3TeAbPDTpa5KZPWO9y4kkA2HHB2oKcJSrAubJMpCGCCPeCcFioz0XuI2a3oxzvU-1l9lBgyBITSuOurGMhWU-xg_WjI5tvDQ2YoOExEuW5P1K7lA' }
];

const SearchAgencies = () => {
  return (
    <Layout title="" role="User" fullWidth hideSidebar>
      <div className="flex flex-col h-screen bg-[#0B1116] text-gray-200 font-sans overflow-hidden">
        
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
                <a className="text-sm font-semibold px-5 py-2.5 rounded-full text-white bg-white/10 shadow-inner border border-white/5 cursor-pointer" onClick={() => window.location.hash = '#/search'}>New Request</a>
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

        {/* Main Content (Split View) */}
        <div className="flex flex-1 pt-[72px] overflow-hidden">
            {/* Sidebar Results */}
            <div className="w-full md:w-[450px] flex flex-col border-r border-white/5 bg-[#151F26] shrink-0 z-10 shadow-xl">
               {/* Internal Search Controls */}
               <div className="p-6 border-b border-white/5">
                  <div className="space-y-1 mb-5">
                     <h1 className="text-2xl font-bold text-white tracking-tight">Select Agency</h1>
                     <p className="text-[#94a3b8] text-sm">Found 12 recyclers near <span className="text-white font-medium">Brooklyn, NY</span></p>
                  </div>
                  
                  {/* Search Input */}
                  <div className="relative mb-4 group">
                     <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 group-focus-within:text-[#10b981] transition-colors">search</span>
                     <input type="text" placeholder="Search location..." className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1116] border border-white/10 text-white text-sm focus:ring-1 focus:ring-[#10b981] focus:border-[#10b981] outline-none transition-all placeholder:text-gray-600" />
                  </div>

                  {/* Filters */}
                  <div className="flex gap-2">
                     <button className="flex items-center gap-2 px-3 py-2 bg-[#0B1116] border border-white/10 rounded-lg text-xs font-medium text-gray-300 hover:border-white/30 hover:text-white transition-colors cursor-pointer">
                        Sort: Distance <span className="material-symbols-outlined text-sm">expand_more</span>
                     </button>
                     <button className="flex items-center gap-2 px-3 py-2 bg-[#0B1116] border border-white/10 rounded-lg text-xs font-medium text-gray-300 hover:border-white/30 hover:text-white transition-colors cursor-pointer">
                        Filter <span className="material-symbols-outlined text-sm">tune</span>
                     </button>
                  </div>
               </div>

               {/* Agency List */}
               <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {agencies.map((agency, i) => (
                    <div 
                        key={i} 
                        className="bg-[#0B1116] border border-white/5 rounded-xl p-4 hover:border-[#10b981]/50 hover:bg-white/5 transition-all cursor-pointer group"
                        onClick={() => window.location.hash = '#/schedule'}
                    >
                       <div className="flex gap-4">
                          <div className="h-20 w-20 rounded-lg bg-cover bg-center shrink-0 border border-white/5 group-hover:border-white/20 transition-colors" style={{ backgroundImage: `url(${agency.img})` }}></div>
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                             <div>
                                 <div className="flex justify-between items-start">
                                     <h3 className="font-bold text-white text-base truncate pr-2 group-hover:text-[#10b981] transition-colors">{agency.name}</h3>
                                 </div>
                                 <div className="flex items-center gap-3 text-xs text-[#94a3b8] my-1.5">
                                    <div className="flex items-center gap-1 bg-yellow-500/10 px-1.5 py-0.5 rounded text-yellow-500 font-medium">
                                       <span className="material-symbols-outlined text-[14px] fill">star</span>
                                       <span>{agency.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                       <span className="material-symbols-outlined text-[14px]">location_on</span>
                                       <span>{agency.dist}</span>
                                    </div>
                                 </div>
                             </div>
                             
                             <div className="flex justify-between items-end mt-2">
                                <div className="flex flex-wrap gap-1.5">
                                    {agency.types.slice(0, 2).map(t => (
                                    <span key={t} className="text-[10px] uppercase font-bold tracking-wider bg-[#10b981]/10 text-[#10b981] px-2 py-0.5 rounded border border-[#10b981]/20">{t}</span>
                                    ))}
                                </div>
                                <button className="bg-[#10b981] text-background-dark px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-[#059669] transition-colors flex items-center gap-1 shadow-sm">
                                    Book Pickup
                                </button>
                             </div>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
               
            </div>

            {/* Right Map Area */}
            <div className="flex-1 bg-[#1a1a1a] relative hidden md:block">
               <div className="absolute inset-0 bg-cover bg-center" style={{ 
                   backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsWQOySAenUrjfowNOFPlCOTKLwAVlzr0zRvypqqix9sWWnWapHSOf2UQm1mOrZ0-xZqWnc853J53lp7yfouWxmDNDZ9cIj7x_r2433jNhuH3MfhOzc6NlhTVfalmz5L-kIsEwacbg2VC4aPU60pCKYCPYBea0wtrkmzDD9VxrpcRrJ2hsx3l_D8r8kbpRoK-Zn3gvG2kjbzJrj2jAACD1vwjvEQgzFFh1dwelA32UdUsX8thGtNZgm8lWTmu4t8NX8KBagaGwCg')",
                   filter: 'invert(0.9) hue-rotate(180deg) brightness(0.7) contrast(1.2) grayscale(0.6)'
               }}></div>
               
               {/* Map Controls Overlay */}
               <div className="absolute bottom-8 right-8 flex flex-col gap-2">
                   <button className="h-10 w-10 bg-[#151F26] text-white border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors shadow-lg">
                       <span className="material-symbols-outlined">my_location</span>
                   </button>
                   <button className="h-10 w-10 bg-[#151F26] text-white border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors shadow-lg">
                       <span className="material-symbols-outlined">add</span>
                   </button>
                   <button className="h-10 w-10 bg-[#151F26] text-white border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors shadow-lg">
                       <span className="material-symbols-outlined">remove</span>
                   </button>
               </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchAgencies;