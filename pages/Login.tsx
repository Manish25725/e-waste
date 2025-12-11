import React, { useState } from 'react';

const Login = () => {
  const [mode, setMode] = useState<'Login' | 'Sign Up'>('Login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - redirect to dashboard
    window.location.hash = '#/dashboard';
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 lg:p-8 bg-[#102216] font-sans">
      <header className="absolute top-0 left-0 flex w-full items-center justify-between p-6 lg:px-12 lg:py-8">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.hash = '#/'}>
          <div className="h-6 w-6 text-[#2bee6c]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">EcoCycle</h2>
        </div>
      </header>
      <main className="flex w-full max-w-md flex-col items-center">
        <div className="w-full text-center">
          <h1 className="text-white text-3xl font-bold tracking-tight md:text-4xl">Welcome to EcoCycle</h1>
          <p className="text-white/80 mt-2 text-base font-normal leading-normal">The future of responsible e-waste recycling.</p>
        </div>
        <div className="mt-8 w-full rounded-xl bg-[#111813] p-2">
          <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-[#28392e] p-1">
            {['Login', 'Sign Up'].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m as 'Login' | 'Sign Up')}
                className={`flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${
                  mode === m 
                    ? 'bg-[#111813] text-white shadow-[0_0_4px_rgba(0,0,0,0.1)]' 
                    : 'text-[#9db9a6] hover:text-white'
                }`}
              >
                <span className="truncate">{m}</span>
              </button>
            ))}
          </div>
        </div>
        <form className="mt-6 flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex w-full flex-col">
            <label className="flex flex-col">
              <p className="text-white pb-2 text-sm font-medium leading-normal">Email</p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input 
                  className="flex h-12 min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-none bg-[#28392e] p-4 text-base font-normal leading-normal text-white placeholder:text-[#9db9a6] focus:border-none focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50" 
                  placeholder="Enter your email" 
                />
              </div>
            </label>
          </div>
          <div className="flex w-full flex-col">
            <label className="flex flex-col">
              <p className="text-white pb-2 text-sm font-medium leading-normal">Password</p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input 
                  className="flex h-12 min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg border-none bg-[#28392e] p-4 pr-2 text-base font-normal leading-normal text-white placeholder:text-[#9db9a6] focus:border-none focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50" 
                  placeholder="Enter your password" 
                  type="password" 
                />
                <div className="flex items-center justify-center rounded-r-lg border-l-0 bg-[#28392e] pr-4 text-[#9db9a6]">
                  <span className="material-symbols-outlined cursor-pointer text-xl">visibility_off</span>
                </div>
              </div>
            </label>
          </div>
          <div className="flex justify-end">
            <a className="text-sm font-medium text-[#2bee6c] hover:underline" href="#">Forgot Password?</a>
          </div>
          <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#2bee6c] px-4 text-base font-bold leading-normal tracking-wide text-[#102216] transition-colors hover:bg-[#25cf5e]">
            <span className="truncate">{mode}</span>
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
