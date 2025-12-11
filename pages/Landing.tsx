import React from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-dark">
       {/* Nav */}
       <header className="fixed top-0 w-full bg-background-dark/80 backdrop-blur-md z-50 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
             <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.hash = '#/'}>
                 <div className="h-8 w-8 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path></svg>
                 </div>
                 <span className="text-xl font-bold text-white">EcoCycle</span>
             </div>
             <div className="flex items-center gap-6">
                <button onClick={() => window.location.hash = '#/how-it-works'} className="text-sm font-medium text-text-secondary hover:text-primary bg-transparent border-none cursor-pointer">How It Works</button>
                <button onClick={() => window.location.hash = '#/about'} className="text-sm font-medium text-text-secondary hover:text-primary bg-transparent border-none cursor-pointer">About Us</button>
                <button className="bg-primary hover:bg-primary-hover text-background-dark px-4 py-2 rounded-lg text-sm font-bold" onClick={() => window.location.hash = '#/login'}>
                   Login/Sign Up
                </button>
             </div>
          </div>
       </header>

       {/* Hero */}
       <div className="pt-24 pb-12 px-4">
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden relative h-[480px] flex items-center justify-center text-center">
             <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNjN6qDIYYndt9GIYzdQOvzCE49wU339nJmVXVpB4FBC2qVCc1Qv_7hfwNLEZVfnbgGUASClWUXjv3nRb1uXhAafiMl7jFa2iNUbCm3F0SlqDxpAtSilncLTlRuYWVN7hPZE0fLxvgrdfzidrspVhfDURRuYZojCC0diU9L7USzZ7e3a0xI89jOKo8YAcBO_Vp51j472eulRwBYfeaPljsNkPhuyCk71NAkXJAE97LqKJHckq5e-VHY38HSWFJQWtRPnDk7lbk2A")'}}></div>
             <div className="relative z-10 px-4">
                <h1 className="text-5xl font-black text-white mb-4 leading-tight">Give Your Electronics a Second Life.</h1>
                <p className="text-white/90 text-lg">Select the type of e-waste you want to recycle and find verified agencies near you.</p>
             </div>
          </div>
       </div>

       {/* Categories */}
       <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-white">What are you recycling today?</h2>
             <p className="text-text-secondary mt-2">Select a category to begin the process</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
             {[
               { icon: 'phone_iphone', title: 'Mobiles & Tablets', sub: 'Old phones and tablets' },
               { icon: 'laptop_chromebook', title: 'Laptops & PCs', sub: 'Desktops and peripherals' },
               { icon: 'desktop_windows', title: 'TVs & Monitors', sub: 'All display screen types' },
               { icon: 'blender', title: 'Home Appliances', sub: 'Washers, fridges, etc.' },
               { icon: 'battery_full_alt', title: 'Batteries', sub: 'All battery types' },
               { icon: 'cable', title: 'Cables & Chargers', sub: 'Wires and chargers' },
             ].map((cat, i) => (
                <div key={i} onClick={() => window.location.hash = '#/search'} className="bg-background-card border border-border-dark p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-primary transition-colors cursor-pointer group">
                   <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-4xl">{cat.icon}</span>
                   </div>
                   <div>
                      <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                      <p className="text-text-secondary text-sm mt-1">{cat.sub}</p>
                   </div>
                </div>
             ))}
          </div>
       </div>
       
       {/* Search Bar */}
       <div className="bg-background-card py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-white mb-2">Find a Recycler Near You</h2>
             <p className="text-text-secondary mb-8">Enter your address or postcode to find verified e-waste recyclers.</p>
             
             <div className="bg-background-dark p-2 rounded-xl border border-border-dark flex items-center">
                 <div className="px-4 text-text-secondary">
                    <span className="material-symbols-outlined">location_on</span>
                 </div>
                 <input type="text" placeholder="Enter your address or postcode" className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-text-secondary/50" />
                 <button className="bg-primary hover:bg-primary-hover text-background-dark font-bold px-6 py-3 rounded-lg" onClick={() => window.location.hash = '#/search'}>
                    Search
                 </button>
             </div>
          </div>
       </div>

       <footer className="border-t border-white/10 py-8 px-4 text-center text-text-secondary text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <button onClick={() => window.location.hash = '#/agency'} className="text-text-secondary hover:text-white transition-colors bg-transparent border-none cursor-pointer">Partner Access</button>
            <span className="text-white/10">|</span>
            <button onClick={() => window.location.hash = '#/admin'} className="text-text-secondary hover:text-white transition-colors bg-transparent border-none cursor-pointer">Admin Portal</button>
          </div>
          <p>© 2024 EcoCycle. All rights reserved.</p>
       </footer>
    </div>
  );
};

export default Landing;