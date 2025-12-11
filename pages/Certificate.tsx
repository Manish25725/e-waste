import React from 'react';

const Certificate = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f6f8f6] dark:bg-[#102216] group/design-root overflow-x-hidden font-sans">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-10 py-3 lg:px-40 bg-[#102216]">
          <div className="flex items-center gap-4 text-white cursor-pointer" onClick={() => window.location.hash = '#/'}>
            <div className="size-6 text-[#2bee6c]">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">EcoCycle</h2>
          </div>
          <div className="hidden items-center gap-9 lg:flex">
            <button onClick={() => window.location.hash = '#/'} className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors bg-transparent border-none cursor-pointer">Home</button>
            <button onClick={() => window.location.hash = '#/search'} className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors bg-transparent border-none cursor-pointer">Book a Pickup</button>
            <button onClick={() => window.location.hash = '#/how-it-works'} className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors bg-transparent border-none cursor-pointer">How It Works</button>
            <button onClick={() => window.location.hash = '#/about'} className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors bg-transparent border-none cursor-pointer">About Us</button>
            <button onClick={() => window.location.hash = '#/contact'} className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors bg-transparent border-none cursor-pointer">Contact Us</button>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.location.hash = '#/dashboard'}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2bee6c] text-[#102216] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#25cf5e] transition-colors"
            >
              <span className="truncate">My Account</span>
            </button>
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer" 
              data-alt="User profile picture" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhkQ64gF-9XVavLPD4D6bNcTYpvk9DjvQS-bd3GNuhwI-63DtSWRLHDCilS868YmH0uqoFO4MMvM30WkHLxW4NNfhQ-m77uLiqhRkgX23Hl1Skst-pDhd1d0zOuW6Kf8MWYDW64jv_8aT5ykIOvVb6E-XTqIlULwtm_CTXvCkMTlOFhfFuauy70ml3OpU0nrrMxk8cyzyj3JIxjPGvF4EOXncVrkAMUqZqLyJV5L2WHrZiMV0bcgLD0smjh2leI_CyfSrjP3bWgg")' }}
              onClick={() => window.location.hash = '#/profile'}
            ></div>
          </div>
        </header>
        <main className="flex-1 px-4 py-10 sm:px-10 lg:px-40 lg:py-20 bg-[#102216]">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10">
            <div className="flex w-full flex-col items-center gap-3 text-center">
              <p className="text-[#2bee6c] text-base font-bold uppercase tracking-widest">Recycling Complete</p>
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Your Digital E-Waste Certificate</p>
              <p className="max-w-3xl text-white/60 text-base font-normal leading-normal md:text-lg">Congratulations on making a positive impact! Here is your official Eco-Certificate, a testament to your commitment to a sustainable future. Download or share it to inspire others.</p>
            </div>
            <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-10">
              <div className="w-full max-w-2xl flex-shrink-0 lg:max-w-none lg:flex-1">
                <div className="relative w-full rounded-xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/50">
                  <div className="aspect-[1/1.414] w-full overflow-hidden rounded-lg">
                    <img alt="Eco-Certificate Preview" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgnfU-T-R2fLd8stmD3NK5HAyrShc6WrAOIrUGhC0xxyejPEeRand1oBX53xaQacvGOxXRAmRgeevaYOnv9mdBG5G9c-Y8Ad8ERgrvuwEPtau4o4lF_iwoNvPHbKgEi8K2J2dqtbcY8XA3MyLGAscHDCtJM_S4cSKeSX6B8yMEXowE0KItZFzhaP9N7GXnXJst4SjUdvt2FftcJo-ymnQPJ1mQEH0JzHSpM8GXPE8b6MTxTywzbB2f3ORUs55e-m5EV_tC60_n-Q"/>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-8 lg:max-w-xs">
                <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-white text-lg font-bold">Details</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <span className="text-white/60 text-sm">Certificate ID</span>
                      <span className="text-white text-sm font-medium">EC-2024-8842</span>
                    </div>
                     <div className="flex justify-between">
                      <span className="text-white/60 text-sm">Date Issued</span>
                      <span className="text-white text-sm font-medium">Oct 12, 2024</span>
                    </div>
                     <div className="flex justify-between">
                      <span className="text-white/60 text-sm">Recycled Items</span>
                      <span className="text-white text-sm font-medium">Laptop, 2 Phones</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60 text-sm">CO2 Saved</span>
                      <span className="text-[#2bee6c] text-sm font-bold">12.5 kg</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2bee6c] px-4 py-3 text-[#102216] font-bold hover:bg-[#25cf5e] transition-colors">
                    <span className="material-symbols-outlined">download</span>
                    Download PDF
                  </button>
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-white font-bold hover:bg-white/20 transition-colors border border-white/10">
                    <span className="material-symbols-outlined">share</span>
                    Share Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Certificate;