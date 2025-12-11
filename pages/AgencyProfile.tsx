import React from 'react';
import Layout from '../components/Layout';

const AgencyProfile = () => {
  return (
    <Layout title="" role="Agency">
      <div className="-mt-8 max-w-5xl mx-auto flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.033em]">Agency Profile</h2>
            <p className="text-text-secondary text-base font-normal leading-normal">Manage your company information and public-facing profile details.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center h-10 px-4 text-sm font-medium bg-background-card border border-border-dark text-text-secondary rounded-lg hover:text-white hover:border-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined mr-2 text-lg">visibility</span>
              View Public Profile
            </button>
            <button className="flex items-center justify-center h-10 px-4 text-sm font-bold bg-primary text-background-dark rounded-lg hover:bg-opacity-90 shadow-lg shadow-primary/20 transition-colors cursor-pointer">
              <span className="material-symbols-outlined mr-2 text-lg">save</span>
              Save Changes
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6 xl:col-span-1">
            <div className="p-6 bg-background-card border border-border-dark rounded-xl flex flex-col items-center text-center gap-4">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background-dark shadow-xl bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-X4qgv_rtuG1jhmdrrIMNgUsyb9DTmbvjSWuxJfcUdU4dQDbzYzDE6nPmkMskrb-HQSNUUnx2qt9t1GW_nVPfhI4ulSIfR1Uy8XmJ8tGNEYOVQdkzOqV25hRPkxCZrbFGgpuVhaI9VP-5dQx7T6c8M42GFRnS3hgFcv81Xp2Mx37zQF8C2jI7ToZhARfo-G5F7px3NjQfqzK2vVpQBTOlzhdErK_ANegNwVglAsIme9zTyuPAGgWTvZRP4jgrHDmmuLc1fxIx9g")' }}></div>
                <button className="absolute bottom-0 right-0 bg-primary text-background-dark rounded-full p-2 hover:bg-opacity-90 transition shadow-lg cursor-pointer">
                  <span className="material-symbols-outlined text-xl">edit</span>
                </button>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">EcoCycle Agency</h3>
                <p className="text-sm text-text-secondary">Verified Partner</p>
              </div>
              <div className="w-full h-px bg-border-dark my-2"></div>
              <div className="flex flex-col w-full gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Member Since</span>
                  <span className="text-white">Oct 2022</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Rating</span>
                  <span className="text-primary flex items-center gap-1">4.9 <span className="material-symbols-outlined text-sm fill">star</span></span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Total Pickups</span>
                  <span className="text-white">1,245</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-background-card border border-border-dark rounded-xl flex flex-col gap-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                Certifications
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 bg-background-dark rounded-lg border border-border-dark">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-400">eco</span>
                    <div>
                      <p className="text-sm font-medium text-white">ISO 14001</p>
                      <p className="text-xs text-text-secondary">Environmental Mgmt</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-text-secondary cursor-pointer hover:text-white">more_vert</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background-dark rounded-lg border border-border-dark">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-400">security</span>
                    <div>
                      <p className="text-sm font-medium text-white">R2 Certified</p>
                      <p className="text-xs text-text-secondary">Responsible Recycling</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-text-secondary cursor-pointer hover:text-white">more_vert</span>
                </div>
                <button className="w-full py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <span className="material-symbols-outlined">add</span>
                  Add Certification
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 xl:col-span-2">
            <div className="p-6 bg-background-card border border-border-dark rounded-xl">
              <h3 className="text-lg font-bold text-white mb-6">Company Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Company Name</label>
                  <input className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-text-secondary/50" type="text" defaultValue="EcoCycle Agency"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Registration Number</label>
                  <input className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-text-secondary/50" type="text" defaultValue="REG-882910-NY"/>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-medium text-text-secondary">Description of Services</label>
                  <textarea className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-text-secondary/50 resize-none" rows={4} defaultValue="Specializing in secure data destruction and environmentally friendly e-waste recycling for businesses and individuals. We handle all types of electronic waste including computers, mobile devices, and office equipment."></textarea>
                  <p className="text-xs text-text-secondary text-right">240/500 characters</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-background-card border border-border-dark rounded-xl">
              <h3 className="text-lg font-bold text-white mb-6">Contact & Location</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Primary Email</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-lg">mail</span>
                    <input className="w-full bg-background-dark border border-border-dark rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-text-secondary/50" type="email" defaultValue="admin@ecocycle.com"/>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Phone Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-lg">call</span>
                    <input className="w-full bg-background-dark border border-border-dark rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-text-secondary/50" type="tel" defaultValue="+1 (555) 123-4567"/>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-medium text-text-secondary">Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-lg">location_on</span>
                    <input className="w-full bg-background-dark border border-border-dark rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-text-secondary/50" type="text" defaultValue="123 Green Tech Blvd, Sustainability District"/>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">City</label>
                  <input className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-text-secondary/50" type="text" defaultValue="New York"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Zip Code</label>
                  <input className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-text-secondary/50" type="text" defaultValue="10001"/>
                </div>
              </div>
            </div>
            <div className="p-6 bg-background-card border border-border-dark rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Service Settings</h3>
                <button className="text-primary text-sm font-medium hover:underline cursor-pointer bg-transparent border-none">Manage Service Areas</button>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-text-secondary">Operating Regions</label>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                      Manhattan
                      <button className="hover:text-white cursor-pointer bg-transparent border-none flex items-center"><span className="material-symbols-outlined text-base">close</span></button>
                    </div>
                    <div className="bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                      Brooklyn
                      <button className="hover:text-white cursor-pointer bg-transparent border-none flex items-center"><span className="material-symbols-outlined text-base">close</span></button>
                    </div>
                    <div className="bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                      Queens
                      <button className="hover:text-white cursor-pointer bg-transparent border-none flex items-center"><span className="material-symbols-outlined text-base">close</span></button>
                    </div>
                    <button className="bg-background-dark border border-border-dark border-dashed hover:border-primary hover:text-primary text-text-secondary px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-base">add</span>
                      Add Region
                    </button>
                  </div>
                </div>
                <div className="border-t border-border-dark pt-6">
                  <label className="text-sm font-medium text-text-secondary mb-4 block">Accepted E-Waste Types</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "IT Equipment", "Mobile Devices", "Large Appliances", "Batteries", "Industrial Machinery", "Solar Panels"
                    ].map((type, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center">
                            <input defaultChecked={i < 3} className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-border-dark bg-background-dark transition-all checked:border-primary checked:bg-primary hover:border-primary/50" type="checkbox"/>
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-background-dark opacity-0 peer-checked:opacity-100 material-symbols-outlined text-sm font-bold">check</span>
                        </div>
                        <span className="text-sm text-white group-hover:text-primary transition-colors">{type}</span>
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