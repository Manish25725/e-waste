import React from 'react';
import Layout from '../components/Layout';

const AgencyProfile = () => {
  return (
    <Layout title="" role="Agency">
      <div className="-mt-8 max-w-5xl mx-auto flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.033em]">Agency Profile</h2>
            <p className="text-slate-400 text-base font-normal leading-normal">Manage your company information and public-facing profile details.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center h-10 px-4 text-sm font-medium bg-[#1E293B] border border-white/10 text-slate-300 rounded-full hover:text-white hover:border-[#34D399] transition-colors cursor-pointer">
              <span className="material-symbols-outlined mr-2 text-lg">visibility</span>
              View Public Profile
            </button>
            <button className="flex items-center justify-center h-10 px-4 text-sm font-bold bg-[#34D399] text-[#0B1120] rounded-full hover:bg-[#6EE7B7] shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-colors cursor-pointer">
              <span className="material-symbols-outlined mr-2 text-lg">save</span>
              Save Changes
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6 xl:col-span-1">
            <div className="p-6 bg-[#1E293B] border border-white/5 rounded-2xl flex flex-col items-center text-center gap-4 shadow-xl">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#0B1120] shadow-xl bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-X4qgv_rtuG1jhmdrrIMNgUsyb9DTmbvjSWuxJfcUdU4dQDbzYzDE6nPmkMskrb-HQSNUUnx2qt9t1GW_nVPfhI4ulSIfR1Uy8XmJ8tGNEYOVQdkzOqV25hRPkxCZrbFGgpuVhaI9VP-5dQx7T6c8M42GFRnS3hgFcv81Xp2Mx37zQF8C2jI7ToZhARfo-G5F7px3NjQfqzK2vVpQBTOlzhdErK_ANegNwVglAsIme9zTyuPAGgWTvZRP4jgrHDmmuLc1fxIx9g")' }}></div>
                <button className="absolute bottom-0 right-0 bg-[#34D399] text-[#0B1120] rounded-full p-2 hover:bg-[#6EE7B7] transition shadow-lg cursor-pointer">
                  <span className="material-symbols-outlined text-xl">edit</span>
                </button>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">EcoCycle Agency</h3>
                <p className="text-sm text-slate-400">Verified Partner</p>
              </div>
              <div className="w-full h-px bg-white/5 my-2"></div>
              <div className="flex flex-col w-full gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Member Since</span>
                  <span className="text-white">Oct 2022</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Rating</span>
                  <span className="text-[#34D399] flex items-center gap-1">4.9 <span className="material-symbols-outlined text-sm fill">star</span></span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Pickups</span>
                  <span className="text-white">1,245</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#1E293B] border border-white/5 rounded-2xl flex flex-col gap-4 shadow-xl">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#34D399]">verified_user</span>
                Certifications
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 bg-[#0B1120] rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-400">eco</span>
                    <div>
                      <p className="text-sm font-medium text-white">ISO 14001</p>
                      <p className="text-xs text-slate-400">Environmental Mgmt</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-white">more_vert</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#0B1120] rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-400">security</span>
                    <div>
                      <p className="text-sm font-medium text-white">R2 Certified</p>
                      <p className="text-xs text-slate-400">Responsible Recycling</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-white">more_vert</span>
                </div>
                <button className="w-full py-2 text-sm font-medium text-[#34D399] border border-[#34D399]/30 rounded-xl hover:bg-[#34D399]/10 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <span className="material-symbols-outlined">add</span>
                  Add Certification
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 xl:col-span-2">
            <div className="p-6 bg-[#1E293B] border border-white/5 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6">Company Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-400">Company Name</label>
                  <input className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-[#34D399] focus:border-[#34D399] outline-none transition-all placeholder-slate-600" type="text" defaultValue="EcoCycle Agency"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-400">Registration Number</label>
                  <input className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-[#34D399] focus:border-[#34D399] outline-none transition-all placeholder-slate-600" type="text" defaultValue="REG-882910-NY"/>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-400">Description of Services</label>
                  <textarea className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-[#34D399] focus:border-[#34D399] outline-none transition-all placeholder-slate-600 resize-none" rows={4} defaultValue="Specializing in secure data destruction and environmentally friendly e-waste recycling for businesses and individuals. We handle all types of electronic waste including computers, mobile devices, and office equipment."></textarea>
                  <p className="text-xs text-slate-500 text-right">240/500 characters</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#1E293B] border border-white/5 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6">Contact & Location</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-400">Primary Email</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">mail</span>
                    <input className="w-full bg-[#0B1120] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:ring-1 focus:ring-[#34D399] focus:border-[#34D399] outline-none transition-all placeholder-slate-600" type="email" defaultValue="admin@ecocycle.com"/>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-400">Phone Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">call</span>
                    <input className="w-full bg-[#0B1120] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:ring-1 focus:ring-[#34D399] focus:border-[#34D399] outline-none transition-all placeholder-slate-600" type="tel" defaultValue="+1 (555) 123-4567"/>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-400">Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">location_on</span>
                    <input className="w-full bg-[#0B1120] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:ring-1 focus:ring-[#34D399] focus:border-[#34D399] outline-none transition-all placeholder-slate-600" type="text" defaultValue="123 Green Tech Blvd, Sustainability District"/>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-400">City</label>
                  <input className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-[#34D399] focus:border-[#34D399] outline-none transition-all placeholder-slate-600" type="text" defaultValue="New York"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-400">Zip Code</label>
                  <input className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-[#34D399] focus:border-[#34D399] outline-none transition-all placeholder-slate-600" type="text" defaultValue="10001"/>
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#1E293B] border border-white/5 rounded-2xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Service Settings</h3>
                <button className="text-[#34D399] text-sm font-medium hover:underline cursor-pointer bg-transparent border-none">Manage Service Areas</button>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-slate-400">Operating Regions</label>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                      Manhattan
                      <button className="hover:text-white cursor-pointer bg-transparent border-none flex items-center"><span className="material-symbols-outlined text-base">close</span></button>
                    </div>
                    <div className="bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                      Brooklyn
                      <button className="hover:text-white cursor-pointer bg-transparent border-none flex items-center"><span className="material-symbols-outlined text-base">close</span></button>
                    </div>
                    <div className="bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                      Queens
                      <button className="hover:text-white cursor-pointer bg-transparent border-none flex items-center"><span className="material-symbols-outlined text-base">close</span></button>
                    </div>
                    <button className="bg-[#0B1120] border border-white/10 border-dashed hover:border-[#34D399] hover:text-[#34D399] text-slate-400 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-base">add</span>
                      Add Region
                    </button>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <label className="text-sm font-medium text-slate-400 mb-4 block">Accepted E-Waste Types</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "IT Equipment", "Mobile Devices", "Large Appliances", "Batteries", "Industrial Machinery", "Solar Panels"
                    ].map((type, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center">
                            <input defaultChecked={i < 3} className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-white/10 bg-[#0B1120] transition-all checked:border-[#34D399] checked:bg-[#34D399] hover:border-[#34D399]/50" type="checkbox"/>
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0B1120] opacity-0 peer-checked:opacity-100 material-symbols-outlined text-sm font-bold">check</span>
                        </div>
                        <span className="text-sm text-white group-hover:text-[#34D399] transition-colors">{type}</span>
                        </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AgencyProfile;