import React from 'react';

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark font-sans antialiased overflow-x-hidden transition-colors duration-300">
        {/* Style for animations and specific elements */}
        <style>{`
            .timeline-line {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 2px;
                height: 100%;
                background: linear-gradient(to bottom, transparent, #34D399, transparent);
                z-index: 0;
            }
            @keyframes pulse-glow {
                0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4); }
                70% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
                100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
            }
            .animate-pulse-glow {
                animation: pulse-glow 2s infinite;
            }
        `}</style>

        {/* Top Navigation */}
        <header className="w-full border-b border-border-dark bg-background-dark/95 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3 text-white cursor-pointer" onClick={() => window.location.hash = '#/'}>
                    <div className="size-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">recycling</span>
                    </div>
                    <h2 className="text-white text-xl font-bold tracking-tight">EcoCycle</h2>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <button className="text-text-secondary hover:text-white text-sm font-medium transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/'}>Home</button>
                    <button className="text-text-secondary hover:text-white text-sm font-medium transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/search'}>Services</button>
                    <button className="text-white text-sm font-medium transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/how-it-works'}>How It Works</button>
                    <button className="text-text-secondary hover:text-white text-sm font-medium transition-colors bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/contact'}>Contact</button>
                    <button 
                        onClick={() => window.location.hash = '#/login'}
                        className="bg-primary hover:bg-primary-hover text-background-dark px-5 py-2 rounded-lg text-sm font-bold transition-colors cursor-pointer"
                    >
                        Login
                    </button>
                </div>
                <div className="md:hidden text-white">
                    <span className="material-symbols-outlined">menu</span>
                </div>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center">
            {/* Hero Header */}
            <section className="w-full max-w-[960px] px-6 py-20 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                    Simple & Transparent
                </span>
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                    Your Journey to <span className="text-primary">Zero Waste</span>
                </h1>
                <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    We've simplified e-waste recycling into a transparent, automated process. Follow the path below to see how easy it is to make an impact.
                </p>
            </section>

            {/* Vertical Timeline Section */}
            <section className="w-full max-w-[1000px] px-6 pb-24 relative">
                {/* Central Timeline Line */}
                <div className="hidden md:block timeline-line top-0 h-full"></div>
                <div className="flex flex-col gap-16 md:gap-24 relative z-10">
                    
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 group">
                        {/* Left Content */}
                        <div className="w-full md:w-1/2 md:pr-12 md:text-right flex flex-col items-center md:items-end order-2 md:order-1">
                            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Step 01</h3>
                            <h2 className="text-white text-2xl font-bold mb-3">Identify & List</h2>
                            <p className="text-text-secondary leading-relaxed max-w-sm text-center md:text-right">
                                Select your e-waste category from our comprehensive database. Whether it's an old laptop, batteries, or a broken phone, tell us what you're recycling.
                            </p>
                        </div>
                        {/* Center Icon */}
                        <div className="relative flex items-center justify-center order-1 md:order-2">
                            <div className="w-16 h-16 rounded-full bg-background-card border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)] z-20 animate-pulse-glow">
                                <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
                            </div>
                        </div>
                        {/* Right Image */}
                        <div className="w-full md:w-1/2 md:pl-12 order-3">
                            <div className="aspect-video w-full rounded-xl overflow-hidden bg-background-card border border-border-dark relative group-hover:border-primary/50 transition-colors duration-300">
                                <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmtR5a-dAhOP7_2dg3Y-YqqbtwN9VLgttPl32giV-Evax9rE2y4g2zsZnPi7zyay0Anc5lPVFxFkTwwKnXa-s3cNOGXLj1e3ft0ULg_NvixEUgJ16k41vW99GpJqTMRqZBuGXJGq6VXFo9Pa0yPah0bdv0RTnVfFxLr6I9ugS2UvAKir8mIVL6xzH4n5yNlAjwdXl-QrMsRHJM4xdflT9uYCb6em-ZyDsDhHCPi3Ia2usjwqDp6MCUXOCGxdGf76yNHzzwP8dLGW0')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm p-2 rounded-lg border border-white/10 w-fit">
                                        <span className="material-symbols-outlined text-white text-sm">laptop_mac</span>
                                        <span className="text-xs text-white font-medium">Laptop selected</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 group">
                        {/* Left Image */}
                        <div className="w-full md:w-1/2 md:pr-12 order-3 md:order-1">
                            <div className="aspect-video w-full rounded-xl overflow-hidden bg-background-card border border-border-dark relative group-hover:border-primary/50 transition-colors duration-300">
                                <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBQxrNFem1sljFKN8Fbycw_4FyF7KqfWgZXL8Ry0cjamrTItFm7tUVE1Cp-zJuHe3zgaZGAoJlFhTMB9ZqRRUnjFm6GZvPijuPfLyh-Ewwj_5NKd7H3MpLtnEOUfoIs_zdScDGQyUgaeG9K1xbPmmKnXyz23kzthSfdebXNpDU0g1TSHWZLJCEbF5z5UhAOOxKiRNinM_AvbJarKQfuVA4SNFs9f6dRi1IzLuTBiKd5F6Gg1jBMG6i2xZ6A146x1rQca1QLdHyKHk')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm p-2 rounded-lg border border-white/10 w-fit">
                                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                        <span className="text-xs text-white font-medium">Pickup Confirmed: Oct 24</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Center Icon */}
                        <div className="relative flex items-center justify-center order-1 md:order-2">
                            <div className="w-16 h-16 rounded-full bg-background-card border-2 border-border-dark group-hover:border-primary flex items-center justify-center transition-all duration-300 z-20">
                                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-3xl">calendar_month</span>
                            </div>
                        </div>
                        {/* Right Content */}
                        <div className="w-full md:w-1/2 md:pl-12 md:text-left flex flex-col items-center md:items-start order-2 md:order-3">
                            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Step 02</h3>
                            <h2 className="text-white text-2xl font-bold mb-3">Instant Booking</h2>
                            <p className="text-text-secondary leading-relaxed max-w-sm text-center md:text-left">
                                Browse verified recycling agencies near you. Compare ratings, choose a partner, and schedule a pickup slot that fits perfectly into your busy calendar.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 group">
                        {/* Left Content */}
                        <div className="w-full md:w-1/2 md:pr-12 md:text-right flex flex-col items-center md:items-end order-2 md:order-1">
                            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Step 03</h3>
                            <h2 className="text-white text-2xl font-bold mb-3">Live Tracking</h2>
                            <p className="text-text-secondary leading-relaxed max-w-sm text-center md:text-right">
                                No more waiting in the dark. Watch our agents arrive in real-time with live GPS tracking on our map interface. Transparency at every mile.
                            </p>
                        </div>
                        {/* Center Icon */}
                        <div className="relative flex items-center justify-center order-1 md:order-2">
                            <div className="w-16 h-16 rounded-full bg-background-card border-2 border-border-dark group-hover:border-primary flex items-center justify-center transition-all duration-300 z-20">
                                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-3xl">location_on</span>
                            </div>
                        </div>
                        {/* Right Image */}
                        <div className="w-full md:w-1/2 md:pl-12 order-3">
                            <div className="aspect-video w-full rounded-xl overflow-hidden bg-background-card border border-border-dark relative group-hover:border-primary/50 transition-colors duration-300">
                                <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-primary/20 p-3 rounded-full animate-pulse">
                                        <div className="bg-primary p-2 rounded-full border-2 border-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 group">
                        {/* Left Image */}
                        <div className="w-full md:w-1/2 md:pr-12 order-3 md:order-1">
                            <div className="aspect-video w-full rounded-xl overflow-hidden bg-background-card border border-border-dark relative group-hover:border-primary/50 transition-colors duration-300 flex items-center justify-center">
                                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCI6zhCDfGVIhY5IWN8lrrnGbJJZTRuzdgM_3HODzUq8xphu6MoYQbRBmtlMf4i3t10tXWXjJcfbQX-awvrk8KqLenn_TcAv6D4gfXt8ZWQFkZDK0JR-PqKX9KQSwwVc5T19JoeuHBW7l4_y6foCd4abHa5Cvz1-h6ktAw6wFD98ac6t8m6Au5hleJYPd5oV-yLEkUTJOsnH1Q_emxCHVVhC8ZcalqD9lP7dxVkONcKYzGRYvzEknrfZTizdDW7V7rwb1UDlaCFDRY')" }}></div>
                                <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg text-center max-w-[200px]">
                                    <div className="text-primary mb-2">
                                        <span className="material-symbols-outlined text-4xl">verified</span>
                                    </div>
                                    <div className="text-white font-bold text-lg">Eco Certified</div>
                                    <div className="text-xs text-text-secondary mt-1">2.4kg CO2 Saved</div>
                                </div>
                            </div>
                        </div>
                        {/* Center Icon */}
                        <div className="relative flex items-center justify-center order-1 md:order-2">
                            <div className="w-16 h-16 rounded-full bg-background-card border-2 border-border-dark group-hover:border-primary flex items-center justify-center transition-all duration-300 z-20">
                                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-3xl">workspace_premium</span>
                            </div>
                        </div>
                        {/* Right Content */}
                        <div className="w-full md:w-1/2 md:pl-12 md:text-left flex flex-col items-center md:items-start order-2 md:order-3">
                            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Step 04</h3>
                            <h2 className="text-white text-2xl font-bold mb-3">Certified Impact</h2>
                            <p className="text-text-secondary leading-relaxed max-w-sm text-center md:text-left">
                                Once recycled, you'll receive a digital Eco-Certificate. View your total carbon savings and share your contribution to a greener planet with the world.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full px-6 py-20 bg-gradient-to-b from-background-dark to-slate-950 flex justify-center border-t border-border-dark">
                <div className="w-full max-w-3xl text-center bg-background-card/50 p-10 md:p-16 rounded-3xl border border-border-dark relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ready to make a difference?</h2>
                        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                            Join thousands of eco-conscious users and start your journey towards a cleaner planet today. It only takes a minute.
                        </p>
                        <button 
                            onClick={() => window.location.hash = '#/search'}
                            className="bg-primary hover:bg-primary-hover text-background-dark text-lg font-bold px-8 py-4 rounded-xl shadow-[0_4px_14px_0_rgba(52,211,153,0.39)] hover:shadow-[0_6px_20px_rgba(52,211,153,0.23)] transition-all transform hover:-translate-y-0.5"
                        >
                            Schedule Pickup
                        </button>
                        <p className="mt-4 text-xs text-text-secondary">
                            <span className="material-symbols-outlined align-middle text-sm mr-1">check_circle</span>
                            No hidden fees. 100% Certified.
                        </p>
                    </div>
                </div>
            </section>
        </main>

        {/* Footer */}
        <footer className="w-full bg-background-dark border-t border-border-dark pt-12 pb-8 px-6">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <div className="size-5 text-primary">
                            <span className="material-symbols-outlined text-2xl">recycling</span>
                        </div>
                        <span className="text-white font-bold text-lg">EcoCycle</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <button className="text-text-secondary hover:text-primary transition-colors text-sm bg-transparent border-none cursor-pointer">Privacy Policy</button>
                        <button className="text-text-secondary hover:text-primary transition-colors text-sm bg-transparent border-none cursor-pointer">Terms of Service</button>
                        <button className="text-text-secondary hover:text-primary transition-colors text-sm bg-transparent border-none cursor-pointer" onClick={() => window.location.hash = '#/contact'}>Support</button>
                    </div>
                    <div className="flex gap-4">
                        <button className="text-text-secondary hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                            <span className="material-symbols-outlined">public</span>
                        </button>
                        <button className="text-text-secondary hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                            <span className="material-symbols-outlined">alternate_email</span>
                        </button>
                    </div>
                </div>
                <div className="border-t border-border-dark w-full"></div>
                <p className="text-center text-text-secondary text-sm">© 2024 EcoCycle Inc. All rights reserved.</p>
            </div>
        </footer>
    </div>
  );
};

export default HowItWorks;