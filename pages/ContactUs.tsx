import React from 'react';

const ContactUs = () => {
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
            <button className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/'}>Home</button>
            <button className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/search'}>Book a Pickup</button>
            <button className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/how-it-works'}>How It Works</button>
            <button className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/about'}>About Us</button>
            <button className="text-[#2bee6c] text-sm font-medium leading-normal bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/contact'}>Contact Us</button>
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
          <div className="mx-auto flex max-w-[960px] flex-col gap-10">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Get in Touch</p>
              <p className="text-white/60 text-base font-normal leading-normal md:text-lg">Have a question or need assistance? We're here to help.</p>
            </div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
              <div className="flex flex-col gap-8 lg:col-span-3">
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Send us a Message</h2>
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <label className="flex flex-col flex-1">
                      <p className="text-white text-base font-medium leading-normal pb-2">Full Name</p>
                      <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50 border border-white/20 bg-white/5 focus:border-[#2bee6c] h-14 placeholder:text-white/40 p-[15px] text-base font-normal leading-normal transition-all" placeholder="Enter your full name" type="text" />
                    </label>
                    <label className="flex flex-col flex-1">
                      <p className="text-white text-base font-medium leading-normal pb-2">Email Address</p>
                      <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50 border border-white/20 bg-white/5 focus:border-[#2bee6c] h-14 placeholder:text-white/40 p-[15px] text-base font-normal leading-normal transition-all" placeholder="Enter your email address" type="email" />
                    </label>
                  </div>
                  <label className="flex flex-col">
                    <p className="text-white text-base font-medium leading-normal pb-2">Subject</p>
                    <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50 border border-white/20 bg-white/5 focus:border-[#2bee6c] h-14 placeholder:text-white/40 p-[15px] text-base font-normal leading-normal transition-all" placeholder="Enter the subject of your message" type="text" />
                  </label>
                  <label className="flex flex-col">
                    <p className="text-white text-base font-medium leading-normal pb-2">Your Message</p>
                    <textarea className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50 border border-white/20 bg-white/5 focus:border-[#2bee6c] placeholder:text-white/40 p-[15px] text-base font-normal leading-normal transition-all" placeholder="Type your message here..." rows={6}></textarea>
                  </label>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#2bee6c] text-[#102216] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#2bee6c]/90 transition-colors w-full sm:w-auto">
                    <span className="truncate">Send Message</span>
                  </button>
                </form>
              </div>
              <div className="flex flex-col gap-8 lg:col-span-2">
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Other Ways to Reach Us</h2>
                <div className="flex flex-col gap-6">
                  <a className="group flex items-center gap-4" href="mailto:support@ecocycle.com">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 group-hover:bg-[#2bee6c]/20 transition-colors">
                      <span className="material-symbols-outlined text-[#2bee6c] text-2xl">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white/60 text-sm">Email Us</p>
                      <p className="text-white font-medium">support@ecocycle.com</p>
                    </div>
                  </a>
                  <a className="group flex items-center gap-4" href="tel:+1800555ECYC">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 group-hover:bg-[#2bee6c]/20 transition-colors">
                      <span className="material-symbols-outlined text-[#2bee6c] text-2xl">call</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white/60 text-sm">Call Us</p>
                      <p className="text-white font-medium">+1 (800) 555-ECYC</p>
                    </div>
                  </a>
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-white font-bold text-lg">Frequently Asked Questions</h3>
                  <p className="text-white/60 mt-2 text-sm">Looking for quick answers? Our FAQ section covers a wide range of topics to help you get the information you need, fast.</p>
                  <a className="group mt-4 inline-flex items-center gap-2 text-[#2bee6c] font-bold text-sm" href="#">
                    <span>Check out our FAQs</span>
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactUs;