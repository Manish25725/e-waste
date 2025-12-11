import React from 'react';
import Layout from '../components/Layout';

const UserDashboard = () => {
  return (
    <Layout title="Hello, Alex!" role="User">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Tracking and Impact */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Tracking */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Active Recycling Request</h2>
            <div className="bg-background-card border border-border-dark rounded-xl p-8 relative overflow-hidden">
               {/* Vertical Line */}
               <div className="absolute left-[3.25rem] top-10 bottom-10 w-0.5 bg-border-dark">
                  <div className="h-1/2 w-full bg-blue-500"></div>
               </div>

               <div className="flex flex-col gap-8 relative">
                 <div className="flex gap-6 items-start">
                   <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30 z-10 text-white">
                      <span className="material-symbols-outlined">check</span>
                   </div>
                   <div>
                     <h3 className="font-bold text-lg text-white">Request Placed</h3>
                     <p className="text-text-secondary text-sm">June 10, 2024 - 09:30 AM</p>
                   </div>
                 </div>

                 <div className="flex gap-6 items-start">
                   <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30 z-10 text-white">
                      <span className="material-symbols-outlined">verified</span>
                   </div>
                   <div>
                     <h3 className="font-bold text-lg text-white">Agency Accepted</h3>
                     <p className="text-text-secondary text-sm">June 10, 2024 - 02:15 PM</p>
                   </div>
                 </div>

                 <div className="flex gap-6 items-start">
                   <div className="h-10 w-10 rounded-full bg-blue-500/20 text-blue-500 ring-4 ring-background-card flex items-center justify-center shrink-0 z-10">
                      <span className="material-symbols-outlined">local_shipping</span>
                   </div>
                   <div>
                     <h3 className="font-bold text-lg text-white">Pickup Scheduled</h3>
                     <p className="text-text-secondary text-sm">June 12, 2024 - Between 1:00 PM & 3:00 PM</p>
                     <p className="text-text-secondary/60 text-xs mt-1">Agency: GreenTech Recyclers</p>
                   </div>
                 </div>

                 <div className="flex gap-6 items-start opacity-50">
                   <div className="h-10 w-10 rounded-full bg-background-dark text-text-secondary flex items-center justify-center shrink-0 z-10">
                      <span className="material-symbols-outlined">recycling</span>
                   </div>
                   <div>
                     <h3 className="font-bold text-lg text-text-secondary">Recycling Completed</h3>
                     <p className="text-text-secondary text-sm">Pending</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div>
             <h2 className="text-2xl font-bold mb-4 text-white">Your Impact</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background-card border border-border-dark rounded-xl p-6">
                   <div className="flex items-center gap-2 text-text-secondary mb-2">
                      <span className="material-symbols-outlined">scale</span>
                      <span className="text-sm font-medium">Total Waste Recycled</span>
                   </div>
                   <p className="text-4xl font-bold text-white">15.2 <span className="text-xl text-text-secondary font-medium">kg</span></p>
                   <div className="w-full bg-background-dark h-2 rounded-full mt-4 overflow-hidden">
                      <div className="bg-blue-500 h-full w-[65%] rounded-full"></div>
                   </div>
                </div>

                <div className="bg-background-card border border-border-dark rounded-xl p-6">
                   <div className="flex items-center gap-2 text-text-secondary mb-2">
                      <span className="material-symbols-outlined">eco</span>
                      <span className="text-sm font-medium">CO₂ Offset</span>
                   </div>
                   <p className="text-4xl font-bold text-white">30.5 <span className="text-xl text-text-secondary font-medium">kg</span></p>
                   <div className="w-full bg-background-dark h-2 rounded-full mt-4 overflow-hidden">
                      <div className="bg-blue-500 h-full w-[80%] rounded-full"></div>
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* Right Column: Points and Actions */}
        <div className="flex flex-col gap-8">
           
           <div className="bg-background-card border border-border-dark rounded-xl p-8 flex flex-col items-center text-center">
              <p className="text-text-secondary font-medium">Your Eco Points</p>
              <div className="flex items-center gap-2 my-4">
                 <span className="material-symbols-outlined text-4xl text-primary">military_tech</span>
                 <span className="text-6xl font-bold text-primary tracking-tighter">1,250</span>
              </div>
              <p className="text-sm text-text-secondary">Redeem for exciting rewards!</p>
              <button 
                onClick={() => window.location.hash = '#/rewards'}
                className="w-full mt-6 bg-primary/20 hover:bg-primary/30 text-primary py-3 rounded-lg font-bold transition-colors"
              >
                Redeem Now
              </button>
           </div>

           <div className="bg-background-card border border-border-dark rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="flex flex-col gap-3">
                 <button 
                    onClick={() => window.location.hash = '#/search'}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-background-dark py-3 rounded-lg font-bold hover:bg-primary-hover"
                 >
                    <span className="material-symbols-outlined">add_circle</span>
                    New Recycling Request
                 </button>
                 <button className="flex items-center justify-center gap-2 w-full bg-white/5 text-white py-3 rounded-lg font-medium hover:bg-white/10">
                    <span className="material-symbols-outlined">history</span>
                    View All Requests
                 </button>
              </div>
           </div>

        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;