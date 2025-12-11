import React from 'react';

const Profile = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-[#f0fdf4] font-sans bg-[#0a1811]">
      <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#2d523f] px-4 sm:px-8 md:px-10 py-3 bg-[#0a1811]/80 backdrop-blur-sm">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.location.hash = '#/'}>
          <div className="size-8 text-[#4ade80]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-[#f0fdf4] text-lg font-bold leading-tight tracking-[-0.015em]">EcoCycle</h2>
        </div>
        <div className="hidden sm:flex flex-1 justify-center gap-8">
          <div className="flex items-center gap-9">
            <button className="text-[#a3b3ac] text-sm font-medium leading-normal hover:text-[#4ade80] transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/dashboard'}>Dashboard</button>
            <button className="text-[#a3b3ac] text-sm font-medium leading-normal hover:text-[#4ade80] transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/search'}>Book Pickup</button>
            <button className="text-[#a3b3ac] text-sm font-medium leading-normal hover:text-[#4ade80] transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/dashboard'}>History</button>
            <button className="text-[#a3b3ac] text-sm font-medium leading-normal hover:text-[#4ade80] transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/rewards'}>Rewards</button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.location.hash = '#/search'}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#4ade80] text-[#1e293b] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity"
          >
            <span className="truncate">New Pickup</span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#102a1e] text-[#f0fdf4] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-opacity-80 transition-colors border border-[#2d523f]">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGCafUM7wSPErjFRdOpSoUvNanyF3YElLMy0fBy2pYehXF1YKP3wELyxGFrTRGukVIRc5XcTABh6PsrRh-az2D30JkB-Avvnai01uyyj7jDHzMreSrN_5nU_NaoxVwCNbqCNHEeGxNtGa_clp11wzGR5cSUsK5F9zoWlgSUkabGdYCCHNsWWkneOqDqOFJiefYCKoLRBE_8JXjnRZ3o2Q8QRTJ-2kPjd2bLSGkTiUWQTlwJXkhRvqnTlSpxl1EP2kCvPwyh9kA2w")' }}
          ></div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
            <div className="flex h-full flex-col justify-between bg-[#102a1e] p-4 rounded-xl border border-[#2d523f]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div 
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" 
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxivMYw94gkdj16AeTMGypgxy8ScvGQ_nL0oKS1MEMkWXxQZmZTB4l5P9YkIiv95KgItRsY-jwQOURKZl0h1k3UgHD0N--AcQTp4AL0QOrKvZjcjFS7sIA7dsHSB2Bbbg0RjwGMSX4HaQ57a7BHpgHmwD9Rm9LnIYI8IdTzB6rxDYNQp6IKqtPWcOzBbaBf_A6ktgT4TVc-_d4zkmlB8QSfn1f6LrX7dlbkMN7QgnupWJntXXtc4kDYZ0WAgPSSP_sM6XdoyA_7g")' }}
                    ></div>
                    <button className="absolute -bottom-1 -right-1 flex items-center justify-center size-6 bg-[#4ade80] rounded-full text-[#1e293b] hover:bg-opacity-90">
                      <span className="material-symbols-outlined text-base">edit</span>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[#f0fdf4] text-base font-medium leading-normal">Alex Morgan</h1>
                    <p className="text-[#a3b3ac] text-sm font-normal leading-normal">alex.morgan@example.com</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 pt-4">
                  <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#4ade80]/20 text-[#4ade80] w-full text-left">
                    <span className="material-symbols-outlined fill">person</span>
                    <p className="text-[#f0fdf4] text-sm font-medium leading-normal">Profile Information</p>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#0e2419] transition-colors w-full text-left">
                    <span className="material-symbols-outlined text-[#a3b3ac]">notifications</span>
                    <p className="text-[#f0fdf4] text-sm font-medium leading-normal">Notifications</p>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#0e2419] transition-colors w-full text-left">
                    <span className="material-symbols-outlined text-[#a3b3ac]">lock</span>
                    <p className="text-[#f0fdf4] text-sm font-medium leading-normal">Security & Privacy</p>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#0e2419] transition-colors w-full text-left">
                    <span className="material-symbols-outlined text-[#a3b3ac]">settings</span>
                    <p className="text-[#f0fdf4] text-sm font-medium leading-normal">App Settings</p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <button 
                  onClick={() => window.location.hash = '#/'}
                  className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0e2419] text-[#f0fdf4] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2d523f] transition-colors border border-[#2d523f]"
                >
                  <span className="truncate">Log Out</span>
                </button>
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <div className="bg-[#102a1e] p-6 md:p-8 rounded-xl border border-[#2d523f]">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-wrap justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#f0fdf4] text-2xl font-bold leading-tight tracking-[-0.033em]">Profile Information</p>
                      <p className="text-[#a3b3ac] text-base font-normal leading-normal">Manage your personal details and contact information.</p>
                    </div>
                  </div>
                  <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <label className="flex flex-col w-full">
                        <p className="text-[#f0fdf4] text-sm font-medium leading-normal pb-2">Full Name</p>
                        <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#f0fdf4] focus:outline-none focus:ring-2 focus:ring-[#4ade80]/80 border border-[#2d523f] bg-[#0e2419] h-12 placeholder:text-[#a3b3ac] p-3 text-base font-normal leading-normal" defaultValue="Alex Morgan" />
                      </label>
                      <label className="flex flex-col w-full">
                        <p className="text-[#f0fdf4] text-sm font-medium leading-normal pb-2">Email Address</p>
                        <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#a3b3ac] focus:outline-none border border-[#2d523f] bg-[#0e2419]/50 h-12 p-3 text-base font-normal leading-normal cursor-not-allowed" readOnly defaultValue="alex.morgan@example.com" />
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <label className="flex flex-col w-full">
                        <p className="text-[#f0fdf4] text-sm font-medium leading-normal pb-2">Phone Number</p>
                        <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#f0fdf4] focus:outline-none focus:ring-2 focus:ring-[#4ade80]/80 border border-[#2d523f] bg-[#0e2419] h-12 placeholder:text-[#a3b3ac] p-3 text-base font-normal leading-normal" defaultValue="+1 (555) 123-4567" />
                      </label>
                    </div>
                    <div>
                      <label className="flex flex-col w-full">
                        <p className="text-[#f0fdf4] text-sm font-medium leading-normal pb-2">Primary Address</p>
                        <textarea className="w-full resize-y rounded-lg text-[#f0fdf4] focus:outline-none focus:ring-2 focus:ring-[#4ade80]/80 border border-[#2d523f] bg-[#0e2419] placeholder:text-[#a3b3ac] p-3 text-base font-normal leading-normal" rows={3} defaultValue="123 Green Way, Eco City, 10101"></textarea>
                      </label>
                    </div>
                    <div className="flex justify-end gap-4 pt-4 border-t border-[#2d523f]">
                      <button 
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0e2419] text-[#f0fdf4] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2d523f] transition-colors border border-[#2d523f]" 
                        type="button"
                        onClick={() => window.location.hash = '#/dashboard'}
                      >
                        <span className="truncate">Cancel</span>
                      </button>
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#4ade80] text-[#1e293b] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity" type="submit">
                        <span className="truncate">Save Changes</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;