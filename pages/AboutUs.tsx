import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f6f8f6] dark:bg-[#102216] font-sans text-gray-900 dark:text-white antialiased overflow-x-hidden selection:bg-[#2bee6c] selection:text-[#102216]">
        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#3b5443] bg-[#102216]/95 backdrop-blur-md px-10 py-3">
            <div className="flex items-center gap-4 text-white cursor-pointer" onClick={() => window.location.hash = '#/'}>
                <div className="size-8 text-[#2bee6c]">
                    <span className="material-symbols-outlined !text-3xl">recycling</span>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">EcoCycle</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <nav className="hidden md:flex items-center gap-9">
                    <button className="text-white text-sm font-medium hover:text-[#2bee6c] transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/'}>Home</button>
                    <button className="text-white text-sm font-medium hover:text-[#2bee6c] transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/search'}>Services</button>
                    <button className="text-white text-sm font-medium hover:text-[#2bee6c] transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/dashboard'}>Track</button>
                    <button className="text-[#2bee6c] text-sm font-bold bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/about'}>About Us</button>
                    <button className="text-white text-sm font-medium hover:text-[#2bee6c] transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/contact'}>Contact</button>
                </nav>
                <button 
                    onClick={() => window.location.hash = '#/login'}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2bee6c] text-[#102216] text-sm font-bold hover:bg-[#22c55e] transition-colors"
                >
                    <span className="truncate">Login</span>
                </button>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center">
            {/* Hero Section */}
            <section className="w-full max-w-7xl px-4 py-12 md:px-10 md:py-20">
                <div className="relative overflow-hidden rounded-2xl bg-[#1c2e22]">
                    <div 
                        className="absolute inset-0 bg-cover bg-center opacity-40" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrsLiC0nxjqeTfacyb3X1M16q-VSh7ZB-yPcCf2GKIlm-ssCwFsUqZB9OIhRlJ5pp2W6ukykkDmh0d47H9aE871Cw0ALWhcnTe2fo0EuA8JtvdgBQqVLszK5UhEyezfVf3bDMTcl38iMBCym-COJ7PWrA6tkMbZXojK8Pvf5q74S8D9ZVnNnmMMQMehgCMvSQGUMDw22D1xpdR7mPKceoD_XfOfOjOpLbe97sBqc1538-pvXjsfWf3K3_p6NypGXbZyTfs5r6v0ow')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102216] via-[#102216]/80 to-transparent"></div>
                    <div className="relative z-10 flex min-h-[480px] flex-col items-center justify-center gap-6 p-8 text-center">
                        <div className="flex flex-col gap-4 max-w-3xl">
                            <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-7xl">
                                Rewiring the <span className="text-[#2bee6c]">Future</span>
                            </h1>
                            <p className="text-white/90 text-lg font-normal leading-relaxed md:text-xl">
                                Transforming the global e-waste crisis into a sustainable opportunity. We are building the circular economy of tomorrow, today.
                            </p>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button onClick={() => window.location.hash = '#/search'} className="flex h-12 items-center justify-center rounded-lg bg-[#2bee6c] px-8 text-[#102216] text-base font-bold transition-transform hover:scale-105">
                                Join the Movement
                            </button>
                            <button className="flex h-12 items-center justify-center rounded-lg border border-[#3b5443] bg-[#1c2e22]/50 px-8 text-white text-base font-bold backdrop-blur-sm transition-colors hover:bg-[#1c2e22] hover:border-[#2bee6c]">
                                Watch Video
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full max-w-7xl px-4 py-10 md:px-10">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 border-y border-[#3b5443] py-12">
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <span className="text-4xl font-black text-[#2bee6c] md:text-5xl">50K+</span>
                        <span className="text-sm font-medium text-[#9db9a6] uppercase tracking-wider">Devices Recycled</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <span className="text-4xl font-black text-[#2bee6c] md:text-5xl">120</span>
                        <span className="text-sm font-medium text-[#9db9a6] uppercase tracking-wider">Partner Agencies</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <span className="text-4xl font-black text-[#2bee6c] md:text-5xl">800T</span>
                        <span className="text-sm font-medium text-[#9db9a6] uppercase tracking-wider">CO2 Emissions Saved</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <span className="text-4xl font-black text-[#2bee6c] md:text-5xl">15+</span>
                        <span className="text-sm font-medium text-[#9db9a6] uppercase tracking-wider">Countries Reached</span>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="w-full max-w-7xl px-4 py-12 md:px-10">
                <div className="flex flex-col gap-12 lg:flex-row">
                    <div className="flex flex-1 flex-col justify-center gap-6">
                        <h2 className="text-3xl font-bold text-white md:text-4xl lg:max-w-md">
                            Our Mission & Vision
                        </h2>
                        <p className="text-[#9db9a6] text-lg leading-relaxed max-w-xl">
                            We believe that waste is simply a resource in the wrong place. By leveraging technology, we are bridging the gap between consumers and certified recyclers.
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="group flex gap-4 rounded-xl border border-[#3b5443] bg-[#1c2e22] p-6 transition-colors hover:border-[#2bee6c]/50">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2bee6c]/20 text-[#2bee6c] group-hover:bg-[#2bee6c] group-hover:text-[#102216] transition-colors">
                                    <span className="material-symbols-outlined">target</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-bold text-white">Our Mission</h3>
                                    <p className="text-[#9db9a6] text-sm leading-relaxed">
                                        To simplify e-waste recycling for everyone while ensuring verified, safe disposal channels that prioritize data security and environmental health.
                                    </p>
                                </div>
                            </div>
                            <div className="group flex gap-4 rounded-xl border border-[#3b5443] bg-[#1c2e22] p-6 transition-colors hover:border-[#2bee6c]/50">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2bee6c]/20 text-[#2bee6c] group-hover:bg-[#2bee6c] group-hover:text-[#102216] transition-colors">
                                    <span className="material-symbols-outlined">visibility</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-bold text-white">Our Vision</h3>
                                    <p className="text-[#9db9a6] text-sm leading-relaxed">
                                        A zero-waste planet where technology feeds nature rather than polluting landfills, creating a closed-loop system for all electronics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative h-[500px] w-full rounded-2xl overflow-hidden group">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbGo_OLrE4jxZhRfikgagRk-cD8A1fOBVO_0LTzI14mGWuhksGvaLUycZ7PQ0aIXdAcqOLU74scaaDMcUln9EZR1Ury8c9lwVvDuMpeNqekVG0eFUPIOosg1ox5mYkAmDum1ev6bfIKXptEoX9LE-FPaM5p168cmyTrzBF_JUNHjoJa3QF8Zo_6Z6lBF30fSsACVv33hu2fcfxFd863JP-4IcY0lX_NR17KctDdpamGlVDQaoOk3N_EihtiYApgclc_DmxVIR9QA4')" }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102216] via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#2bee6c]/20 px-3 py-1 text-xs font-bold text-[#2bee6c] backdrop-blur-sm mb-3">
                                <span className="material-symbols-outlined text-sm">eco</span> SUSTAINABILITY FIRST
                            </div>
                            <p className="text-white text-xl font-medium">"We don't inherit the earth from our ancestors, we borrow it from our children."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem vs Solution */}
            <section className="w-full max-w-7xl px-4 py-12 md:px-10">
                <div className="rounded-2xl bg-[#1c2e22] p-8 md:p-12 border border-[#3b5443]">
                    <div className="flex flex-col gap-10 lg:flex-row items-center">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">The Problem vs. The Solution</h2>
                            <p className="text-[#9db9a6] text-lg">
                                Traditional e-waste dumping releases toxic chemicals into the soil and air. We are shifting the narrative to a circular economy where every component is valued.
                            </p>
                            <div className="grid gap-4">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                    <span className="text-white">Unregulated landfill dumping</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-[#2bee6c]">check_circle</span>
                                    <span className="text-white">Certified R2 recycling partners</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                    <span className="text-white">Data theft risks</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-[#2bee6c]">check_circle</span>
                                    <span className="text-white">Military-grade data destruction</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => window.location.hash = '#/how-it-works'}
                                className="mt-4 w-fit flex items-center gap-2 text-[#2bee6c] font-bold hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                            >
                                See how it works <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div 
                                className="aspect-video w-full rounded-xl bg-cover bg-center shadow-2xl shadow-[#2bee6c]/10 border border-[#3b5443]" 
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7Mu3o-FFlvlh3U84Zgd5UTpuKuqMoBCjJoTUu-mPbtjIh3EcAuLorUCQoChyYJ_k5uzyg5CDcv_objTztGB6r2HzNtHhZAbU8rRgpGOSzmvGDGakD2aeo29-ksjfmfvZIxG4HvL-q93jAR7eAy5N0EKHuG9hQxLzWG-8yJB987HbufGgaBaYcSctwD41Sy2-LEwUWtbcklsQH0bg0iJnQST1WUKPwVXM1KQC3IW4g_zRUw6KD54I9EOYYUp_adwXlqTbnRLBSCCM')" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="w-full max-w-7xl px-4 py-16 md:px-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">Core Values</h2>
                    <p className="text-[#9db9a6] mt-4">The principles that drive our innovation</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#1c2e22] border border-[#3b5443] hover:border-[#2bee6c] transition-all hover:-translate-y-1">
                        <div className="mb-4 p-4 rounded-full bg-[#102216] text-[#2bee6c]">
                            <span className="material-symbols-outlined text-4xl">verified_user</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
                        <p className="text-[#9db9a6]">Real-time tracking of your e-waste from pickup to final processing.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#1c2e22] border border-[#3b5443] hover:border-[#2bee6c] transition-all hover:-translate-y-1">
                        <div className="mb-4 p-4 rounded-full bg-[#102216] text-[#2bee6c]">
                            <span className="material-symbols-outlined text-4xl">lightbulb</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                        <p className="text-[#9db9a6]">Leveraging AI and blockchain to modernize the recycling supply chain.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#1c2e22] border border-[#3b5443] hover:border-[#2bee6c] transition-all hover:-translate-y-1">
                        <div className="mb-4 p-4 rounded-full bg-[#102216] text-[#2bee6c]">
                            <span className="material-symbols-outlined text-4xl">public</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
                        <p className="text-[#9db9a6]">Quantifiable environmental metrics for every device recycled.</p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="w-full max-w-7xl px-4 py-12 md:px-10">
                <div className="flex flex-col gap-10 md:flex-row md:gap-20">
                    <div className="md:w-1/3">
                        <h2 className="sticky top-24 text-3xl font-bold text-white md:text-4xl">Our Journey</h2>
                        <p className="sticky top-36 mt-4 text-[#9db9a6]">From a garage project to a global movement, here is how EcoCycle has evolved over the years.</p>
                    </div>
                    <div className="md:w-2/3">
                        {/* Timeline Component */}
                        <div className="grid grid-cols-[40px_1fr] gap-x-4">
                            {/* Item 1 */}
                            <div className="flex flex-col items-center gap-1 pt-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c2e22] border border-[#3b5443] text-[#2bee6c] z-10">
                                    <span className="material-symbols-outlined text-xl">rocket_launch</span>
                                </div>
                                <div className="w-[2px] bg-gradient-to-b from-[#3b5443] to-[#3b5443] h-24 grow"></div>
                            </div>
                            <div className="flex flex-col pb-12 pt-2">
                                <span className="text-[#2bee6c] text-sm font-bold">2021</span>
                                <h3 className="text-white text-xl font-bold mt-1">Founded in a Garage</h3>
                                <p className="text-[#9db9a6] mt-2">Started with a small team of 3 engineers passionate about reducing local electronic waste.</p>
                            </div>
                            {/* Item 2 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-[2px] bg-[#3b5443] h-4"></div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c2e22] border border-[#3b5443] text-[#2bee6c] z-10">
                                    <span className="material-symbols-outlined text-xl">trophy</span>
                                </div>
                                <div className="w-[2px] bg-[#3b5443] h-24 grow"></div>
                            </div>
                            <div className="flex flex-col pb-12">
                                <span className="text-[#2bee6c] text-sm font-bold">2022</span>
                                <h3 className="text-white text-xl font-bold mt-1">First 10,000 Devices</h3>
                                <p className="text-[#9db9a6] mt-2">Reached a major milestone of processing 10k devices and partnered with 5 major recycling plants.</p>
                            </div>
                            {/* Item 3 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-[2px] bg-[#3b5443] h-4"></div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c2e22] border border-[#3b5443] text-[#2bee6c] z-10">
                                    <span className="material-symbols-outlined text-xl">map</span>
                                </div>
                                <div className="w-[2px] bg-[#3b5443] h-24 grow"></div>
                            </div>
                            <div className="flex flex-col pb-12">
                                <span className="text-[#2bee6c] text-sm font-bold">2023</span>
                                <h3 className="text-white text-xl font-bold mt-1">Nationwide Expansion</h3>
                                <p className="text-[#9db9a6] mt-2">Expanded operations to 50 major cities and introduced the corporate recycling program.</p>
                            </div>
                            {/* Item 4 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-[2px] bg-[#3b5443] h-4"></div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c2e22] border border-[#3b5443] text-[#2bee6c] z-10">
                                    <span className="material-symbols-outlined text-xl">globe</span>
                                </div>
                            </div>
                            <div className="flex flex-col pb-4">
                                <span className="text-[#2bee6c] text-sm font-bold">2024</span>
                                <h3 className="text-white text-xl font-bold mt-1">Global Partnerships</h3>
                                <p className="text-[#9db9a6] mt-2">Launched international pilot programs and integrated blockchain tracking for complete transparency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full max-w-7xl px-4 py-16 md:px-10">
                <div className="flex flex-col gap-4 mb-10">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">Meet the Eco-Warriors</h2>
                    <p className="text-[#9db9a6] max-w-2xl">The diverse team of environmentalists, engineers, and strategists working behind the scenes.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Member 1 */}
                    <div className="group relative overflow-hidden rounded-xl bg-[#1c2e22]">
                        <div className="aspect-[4/5] w-full bg-gray-800">
                            <img alt="Portrait of James Carter, CEO" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGgTCckYVGpYGNvrY1q371qxcBYHMq9K93GTXQiNpiIue3_bOHdHWYWcs8k7zJ8XkVazmiccRBRy7y74-57B4MVAKSvUBd_ZqnYNMKhe9OyGhwjV-S9YEqTOd3Qt_OUjygg8r4fFqRmadxwfH9Z1rffoc7dtlX-ZiaUDPulRVDXrDjMooXPFPigWcCgOnKjHpmtqvxtvnCFMCbfV6lOvWY3DPMTllCZt3mx_rPRVMY6uo-dr4tMOjfq3zhSWXmNcRVbb6Wuf0H5Nk"/>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102216] via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 p-4 w-full">
                            <h3 className="text-lg font-bold text-white">James Carter</h3>
                            <p className="text-[#2bee6c] text-sm font-medium">Founder & CEO</p>
                        </div>
                    </div>
                    {/* Member 2 */}
                    <div className="group relative overflow-hidden rounded-xl bg-[#1c2e22]">
                        <div className="aspect-[4/5] w-full bg-gray-800">
                            <img alt="Portrait of Sarah Chen, CTO" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5MLRbZQ0gSkFjhap3C6bfnHwXvn4JvuF6ss6f0yWmf4EwIVFc4a3rPSqzhN7i35KYavUxLv2TGbQ0DDUpoORoEIf0nrHu0MIsJGyS9uHCSZjo_oeM1gyEXxKb3fbFOSK8xvcd0hTzp8PCdSZL82ZlgYpnJlIiSTHnnrqMrruJ3jul78QOWK69tU3pOEpU2wx0xkbTtHOh1revLlJYGrGnMtGvDzt0TGWA-JQMemBuevlPYOj-lhisiYpiiGbLA0fafNfQa3Qkrqw"/>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102216] via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 p-4 w-full">
                            <h3 className="text-lg font-bold text-white">Sarah Chen</h3>
                            <p className="text-[#2bee6c] text-sm font-medium">Chief Technology Officer</p>
                        </div>
                    </div>
                    {/* Member 3 */}
                    <div className="group relative overflow-hidden rounded-xl bg-[#1c2e22]">
                        <div className="aspect-[4/5] w-full bg-gray-800">
                            <img alt="Portrait of Marcus Johnson, Head of Operations" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdzPXX7qiTFwXug2YK1NVDymqMxFHFG24SraLeMywUWNZxFpnYg8U5IvNsP2uKN7dd5-rL5op8jR3-9tSQCbDRWCc4U9u5iK6LnwhpWsKOxsXQdjWKyR6pF6DYjhC5I4UD9oBeau8YEwJpsWlcO6aP7_15fbtbuZ4PYIqgfptR1bWJPMOADu1gm8C2xeQdhoeDmEMVxNMJuL0Oshjckl_zQkjKc6YkwZxVNBf0wENk6wC38wxZcyIjTAUKDXxBZbXlqUWFaU2-eT4"/>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102216] via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 p-4 w-full">
                            <h3 className="text-lg font-bold text-white">Marcus Johnson</h3>
                            <p className="text-[#2bee6c] text-sm font-medium">Head of Operations</p>
                        </div>
                    </div>
                    {/* Member 4 */}
                    <div className="group relative overflow-hidden rounded-xl bg-[#1c2e22]">
                        <div className="aspect-[4/5] w-full bg-gray-800">
                            <img alt="Portrait of Emily Davis, Sustainability Lead" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3JWfndAXP1p4SeqYC8loBDfme96P8XyUrmKLCJEemRqvfWvZj8IVXtyugQ3RoR7o2OWv9HdoTNAcpBnqu8TVaOJMf1ZyVwCa7u9tsEa1vhSh9fl9nj6RQkPf0xxUzOYXE5zaQDAlnkSF2pM5m0Z3lnE2ziJrrhwe0WQqOV_EbCp_UJRmS1pgLpDKwtYuH0IlSEiCqUrHZ5yout9ILN1ZNBdRCXyveCJWx_3f6tWJMRC8zwzLm1de_8zpBB46uroNK8tKRinB8h1Y"/>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102216] via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 p-4 w-full">
                            <h3 className="text-lg font-bold text-white">Emily Davis</h3>
                            <p className="text-[#2bee6c] text-sm font-medium">Sustainability Lead</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full px-4 py-20">
                <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#2bee6c] relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative flex flex-col items-center gap-6 px-4 py-16 text-center md:px-20">
                        <h2 className="text-3xl font-black text-[#102216] md:text-5xl max-w-2xl">
                            Ready to make a difference?
                        </h2>
                        <p className="max-w-xl text-lg font-medium text-[#102216]/80">
                            Join thousands of eco-conscious individuals and businesses. Schedule your first pickup today.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button 
                                onClick={() => window.location.hash = '#/search'}
                                className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-[#102216] px-6 text-white text-base font-bold transition-transform hover:scale-105"
                            >
                                Book Pickup
                            </button>
                            <button 
                                onClick={() => window.location.hash = '#/contact'}
                                className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg border-2 border-[#102216] px-6 text-[#102216] text-base font-bold transition-colors hover:bg-[#102216]/10"
                            >
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#3b5443] bg-[#102216] px-10 py-12">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:justify-between">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-white">
                        <div className="size-6 text-[#2bee6c]">
                            <span className="material-symbols-outlined">recycling</span>
                        </div>
                        <h2 className="text-lg font-bold">EcoCycle</h2>
                    </div>
                    <p className="text-sm text-[#9db9a6] max-w-xs">
                        Empowering the world to recycle responsibly. Join us in creating a sustainable future.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Company</h3>
                        <button onClick={() => window.location.hash = '#/about'} className="text-sm text-[#9db9a6] hover:text-[#2bee6c] text-left bg-transparent border-none cursor-pointer">About</button>
                        <button className="text-sm text-[#9db9a6] hover:text-[#2bee6c] text-left bg-transparent border-none cursor-pointer">Careers</button>
                        <button className="text-sm text-[#9db9a6] hover:text-[#2bee6c] text-left bg-transparent border-none cursor-pointer">Press</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Resources</h3>
                        <button className="text-sm text-[#9db9a6] hover:text-[#2bee6c] text-left bg-transparent border-none cursor-pointer">Blog</button>
                        <button className="text-sm text-[#9db9a6] hover:text-[#2bee6c] text-left bg-transparent border-none cursor-pointer">Help Center</button>
                        <button className="text-sm text-[#9db9a6] hover:text-[#2bee6c] text-left bg-transparent border-none cursor-pointer">Guidelines</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Legal</h3>
                        <button className="text-sm text-[#9db9a6] hover:text-[#2bee6c] text-left bg-transparent border-none cursor-pointer">Privacy</button>
                        <button className="text-sm text-[#9db9a6] hover:text-[#2bee6c] text-left bg-transparent border-none cursor-pointer">Terms</button>
                        <button className="text-sm text-[#9db9a6] hover:text-[#2bee6c] text-left bg-transparent border-none cursor-pointer">Security</button>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-12 max-w-7xl border-t border-[#3b5443] pt-8 text-center text-sm text-[#9db9a6]">
                © 2024 EcoCycle Inc. All rights reserved.
            </div>
        </footer>
    </div>
  );
};

export default AboutUs;