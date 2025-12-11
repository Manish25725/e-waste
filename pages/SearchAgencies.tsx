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
    <div className="flex h-screen bg-background-dark text-text-primary font-sans overflow-hidden">
        {/* Sidebar Results */}
        <div className="w-full md:w-[450px] flex flex-col border-r border-border-dark bg-background-card shrink-0">
           {/* Header */}
           <div className="p-6 border-b border-border-dark">
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-8 w-8 text-primary cursor-pointer" onClick={() => window.location.hash = '#/'}>
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path></svg>
                 </div>
                 <h2 className="text-xl font-bold cursor-pointer" onClick={() => window.location.hash = '#/'}>EcoCycle</h2>
                 <div className="ml-auto relative">
                     <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-secondary">search</span>
                     <input type="text" placeholder="Brooklyn, NY" className="pl-10 pr-4 py-2 rounded-lg bg-background-dark border-none text-white text-sm focus:ring-0 w-48" />
                 </div>
              </div>
              
              <div className="space-y-1">
                 <h1 className="text-2xl font-bold">Search Results</h1>
                 <p className="text-text-secondary">Showing 12 agencies near <span className="text-white font-medium">Brooklyn, NY</span></p>
              </div>

              <div className="flex gap-2 mt-4">
                 <button className="flex items-center gap-2 px-3 py-2 bg-background-dark border border-border-dark rounded-lg text-sm font-medium hover:border-gray-500">
                    Sort by: Distance <span className="material-symbols-outlined text-base">expand_more</span>
                 </button>
                 <button className="flex items-center gap-2 px-3 py-2 bg-background-dark border border-border-dark rounded-lg text-sm font-medium hover:border-gray-500">
                    Filter <span className="material-symbols-outlined text-base">tune</span>
                 </button>
              </div>
           </div>

           {/* List */}
           <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {agencies.map((agency, i) => (
                <div key={i} className="bg-background-dark border border-border-dark rounded-xl p-4 hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer group">
                   <div className="flex gap-4">
                      <div className="h-24 w-24 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${agency.img})` }}></div>
                      <div className="flex-1 min-w-0">
                         <h3 className="font-bold text-lg truncate">{agency.name}</h3>
                         <div className="flex items-center gap-3 text-sm text-text-secondary my-1">
                            <div className="flex items-center gap-1">
                               <span className="material-symbols-outlined text-yellow-500 text-sm fill">star</span>
                               <span className="text-white font-medium">{agency.rating}</span>
                            </div>
                            <span>|</span>
                            <div className="flex items-center gap-1">
                               <span className="material-symbols-outlined text-sm">location_on</span>
                               <span>{agency.dist}</span>
                            </div>
                         </div>
                         <div className="flex flex-wrap gap-2 mt-2">
                            {agency.types.map(t => (
                               <span key={t} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{t}</span>
                            ))}
                         </div>
                      </div>
                   </div>
                   <button onClick={() => window.location.hash = '#/dashboard'} className="mt-4 w-full bg-primary text-background-dark font-bold py-2 rounded-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      Book Pickup
                   </button>
                </div>
              ))}
           </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 bg-[#1a1a1a] relative hidden md:block">
           <div className="absolute inset-0 bg-cover bg-center" style={{ 
               backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsWQOySAenUrjfowNOFPlCOTKLwAVlzr0zRvypqqix9sWWnWapHSOf2UQm1mOrZ0-xZqWnc853J53lp7yfouWxmDNDZ9cIj7x_r2433jNhuH3MfhOzc6NlhTVfalmz5L-kIsEwacbg2VC4aPU60pCKYCPYBea0wtrkmzDD9VxrpcRrJ2hsx3l_D8r8kbpRoK-Zn3gvG2kjbzJrj2jAACD1vwjvEQgzFFh1dwelA32UdUsX8thGtNZgm8lWTmu4t8NX8KBagaGwCg')",
               filter: 'invert(0.9) hue-rotate(180deg) brightness(0.7) contrast(1.2)'
           }}></div>
           {/* Back Button Overlay */}
           <div className="absolute top-4 right-4 flex gap-2">
              <button onClick={() => window.location.hash = '#/dashboard'} className="px-4 py-2 bg-primary text-background-dark font-bold rounded-lg shadow-lg hover:bg-primary-hover border-none cursor-pointer">Dashboard</button>
              <button onClick={() => window.location.hash = '#/login'} className="px-4 py-2 bg-background-card text-white font-bold rounded-lg shadow-lg border border-border-dark cursor-pointer">Log In</button>
           </div>
        </div>
    </div>
  );
};

export default SearchAgencies;