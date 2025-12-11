import React, { useState } from 'react';

const Login = () => {
  const [mode, setMode] = useState<'Login' | 'Sign Up'>('Login');
  const [role, setRole] = useState('resident');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate routing based on role
    if (role === 'partner') {
        window.location.hash = '#/agency';
    } else if (role === 'business') {
        window.location.hash = '#/dashboard';
    } else {
        window.location.hash = '#/dashboard';
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 lg:p-8 bg-[#102216] font-sans text-[#9db9a6]">
      {/* Header */}
      <header className="absolute top-0 left-0 flex w-full items-center justify-between p-6 lg:px-12 lg:py-8">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.hash = '#/'}>
          <div className="size-6 text-[#2bee6c]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">EcoCycle</h2>
        </div>
      </header>

      <main className="flex w-full max-w-lg flex-col items-center relative z-10">
        <div className="w-full text-center">
          <h1 className="text-white text-3xl font-bold tracking-tight md:text-4xl">Welcome to EcoCycle</h1>
          <p className="text-white/80 mt-2 text-base font-normal leading-normal">The future of responsible e-waste recycling.</p>
        </div>

        {/* Toggle */}
        <div className="mt-8 w-full rounded-xl bg-[#111813] p-2">
          <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-[#28392e] p-1">
            {['Login', 'Sign Up'].map((m) => (
              <label 
                key={m} 
                className={`flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-colors
                  ${mode === m ? 'bg-[#111813] text-white shadow-[0_0_4px_rgba(0,0,0,0.1)]' : 'text-[#9db9a6]'}
                `}
                onClick={() => setMode(m as 'Login' | 'Sign Up')}
              >
                <span className="truncate">{m}</span>
                <input className="invisible w-0 absolute" name="form-toggle" type="radio" value={m} checked={mode === m} onChange={() => {}} />
              </label>
            ))}
          </div>
        </div>

        <form className="mt-6 flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div className="flex w-full flex-col">
            <p className="text-white pb-2 text-sm font-medium leading-normal">Select User Type</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'resident', label: 'Residents', icon: 'person' },
                { id: 'business', label: 'Business', icon: 'apartment' },
                { id: 'partner', label: 'Partner', icon: 'recycling' }
              ].map((type) => (
                <label key={type.id} className="cursor-pointer group">
                  <input 
                    className="peer sr-only" 
                    name="role" 
                    type="radio" 
                    value={type.id}
                    checked={role === type.id}
                    onChange={() => setRole(type.id)}
                  />
                  <div className={`flex flex-col items-center justify-center gap-1 rounded-lg border py-3 px-1 text-center text-sm font-medium transition-all hover:bg-[#1a261e]
                    ${role === type.id 
                      ? 'border-[#2bee6c]/50 bg-[#2bee6c]/10 text-[#2bee6c]' 
                      : 'border-[#28392e] bg-[#131d16] text-[#9db9a6]'
                    }
                  `}>
                    <span className="material-symbols-outlined text-[20px]">{type.icon}</span>
                    <span className="text-xs">{type.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Inputs */}
          <div className="flex w-full flex-col">
            <label className="flex flex-col">
              <p className="text-white pb-2 text-sm font-medium leading-normal">Email</p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input className="flex h-12 min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-none bg-[#28392e] p-4 text-base font-normal leading-normal text-white placeholder:text-[#9db9a6] focus:outline-none focus:ring-2 focus:ring-[#2bee6c]/50" placeholder="Enter your email" type="email" required />
              </div>
            </label>
          </div>

          <div className="flex w-full flex-col">
            <label className="flex flex-col">
              <p className="text-white pb-2 text-sm font-medium leading-normal">Password</p>
              <div className="flex w-full flex-1 items-stretch rounded-lg relative">
                <input className="flex h-12 min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg border-none bg-[#28392e] p-4 pr-2 text-base font-normal leading-normal text-white placeholder:text-[#9db9a6] focus:outline-none focus:ring-2 focus:ring-[#2bee6c]/50 z-10" placeholder="Enter your password" type="password" required />
                <div className="flex items-center justify-center rounded-r-lg border-l-0 bg-[#28392e] pr-4 text-[#9db9a6]">
                  <span className="material-symbols-outlined cursor-pointer text-xl hover:text-white transition-colors">visibility_off</span>
                </div>
              </div>
            </label>
          </div>

          <div className="flex justify-end">
            <a className="text-sm font-medium text-[#2bee6c] hover:underline hover:text-[#2bee6c]/80 transition-colors cursor-pointer">Forgot Password?</a>
          </div>

          <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#2bee6c] px-4 text-base font-bold leading-normal tracking-wide text-[#102216] transition-colors hover:bg-[#2bee6c]/90 shadow-[0_0_15px_rgba(43,238,108,0.2)]">
            <span className="truncate">{mode}</span>
          </button>

          <div className="mt-2 flex items-center justify-center gap-2 border-t border-[#28392e] pt-6">
            <span className="material-symbols-outlined text-[#9db9a6] text-[18px]">admin_panel_settings</span>
            <p className="text-xs text-[#9db9a6]">
              Are you an Administrator? 
              <a className="font-medium text-[#2bee6c] hover:underline hover:text-[#2bee6c]/80 ml-1 cursor-pointer" onClick={() => window.location.hash = '#/admin'}>
                Log in here
              </a>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;