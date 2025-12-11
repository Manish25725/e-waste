import React from 'react';
import Layout from '../components/Layout';

const AdminDashboard = () => {
  return (
    <Layout title="Agency Approval Dashboard" subtitle="Review and process pending requests." role="Admin">
       <div className="flex justify-between items-center mb-8 -mt-14">
          <div></div> {/* Spacer */}
          <button className="flex items-center gap-2 bg-background-card border border-border-dark px-4 py-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/5">
             <span className="material-symbols-outlined">refresh</span>
             Refresh
          </button>
       </div>

       {/* Tabs */}
       <div className="flex gap-8 border-b border-border-dark mb-6">
          <button className="pb-3 border-b-2 border-primary text-white font-semibold flex items-center gap-2">
             New Applications
             <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">5</span>
          </button>
          <button className="pb-3 border-b-2 border-transparent text-text-secondary hover:text-white font-medium flex items-center gap-2">
             Listing Approvals
             <span className="bg-white/10 text-white text-xs px-2 py-0.5 rounded-full">4</span>
          </button>
          <button className="pb-3 border-b-2 border-transparent text-text-secondary hover:text-white font-medium flex items-center gap-2">
             Pickup Confirmations
             <span className="bg-white/10 text-white text-xs px-2 py-0.5 rounded-full">3</span>
          </button>
       </div>

       {/* Table */}
       <div className="bg-background-card border border-border-dark rounded-xl overflow-hidden shadow-lg">
          <table className="w-full text-left">
             <thead className="bg-white/5 text-xs uppercase text-text-secondary font-semibold">
                <tr>
                   <th className="px-6 py-4">Agency Name</th>
                   <th className="px-6 py-4">Application ID</th>
                   <th className="px-6 py-4">Date Applied</th>
                   <th className="px-6 py-4">Location</th>
                   <th className="px-6 py-4 text-right">Actions</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-border-dark text-white text-sm">
                {[
                   { name: 'GreenLeaf Recyclers', id: '#A1234', date: '2023-10-26', loc: 'San Francisco, CA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtYn7cUjYwzV1gynJDTAayL5-8-vpp-5BPRCF1zkTPmDbVx3nHV1bigwBtXhlqM2X5-bPhhJzMatFn9x-TvedOa8hcL-XLCoK8TH1PWQI5BBItzFbvRx7BsDlhMoS7jud-7F_WM1a2-HrG636H_xPMx0vU4fxY2Iy6bwzhqaZIuwunwFWYCxNB7BA9oP-7mgVRkYjGKZzq85yYuiKNq8MvwRFrx--Inp5PY086wfz6uNjF28LrwFsFG-DNrb-tj4HFv-_TX45BEQ' },
                   { name: 'Urban Renewables', id: '#A5678', date: '2023-10-25', loc: 'New York, NY', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOhOIzej5IMw4sW5vXvCNZHAK-m6y-jj36vFuENDOki9PVo5bGmJCyb6CAeC9bfNUzpEW7bd-touYH_H6ipKNXUri7SRS7H2fj1DEDnlaAMsDe8bhdJWMmncNoQUOEamTggMs_QF7uv972kPa0BPqGmnX7tS7YTr5bY-bLvnh0cgftW8BcP0z9-nzzcHcGXD37Fq0UpGUQqjd8YXWj-sQX7Wc1_lpYZtCLjmOWpKGE1nJMvgO1NEtp_nzRNakr6qsTi-7BBxUAww' },
                   { name: 'Phoenix Waste Solutions', id: '#A9101', date: '2023-10-24', loc: 'Phoenix, AZ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE0I7Bc7BJQD51br9YIWPwQaly4XBU1gwhNGyV3VFHJart1gTk0K0VN-MI5Xh08sMsCneJGoVkhipKw_5aqF6eEHyy9Abf2nwcl-l4fLIoAtZUfTt-jfG5Ly4Ke3MCYstHn1gLon_TCnwTdifxQShXdePpJYZh1rJxcDAFkXGN3riXy-34Aj2Na7Ypzf-VJuYUf9ENarDBeTTEvGUVqT0Jhxa_vqU7DjBV0tNkYHCx8EzybdZNZIx-mKdVzJ2anmYdx0l7d3BN_Q' },
                   { name: 'Evergreen Disposal', id: '#A1121', date: '2023-10-23', loc: 'Seattle, WA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1VNFZiDb0vxR0H_bZFcBLg2jze-8y3pjwbEL6oUU0ddMa-t_YxPeSIVJQ1J3Lwk6WvZUq3rSeYIqhL8O0r5OdpCVy7qFFUMZqAMusEgEzluDFDIB-afX0mJ0kMgHPb5zLzqRbx1XkZJDXceNdxFtcMk5WdnpppsJULQnEuUzyN8u2-i8d68lHNX4XCyKAV2wzUmhhtV_a_6jPj2Oh9mGRHl7_wGmVLVXE1lKBqmUAHVEMc5jcC9PwtrzAD9vpLGYmXwL2QcoEYg' },
                ].map((row, i) => (
                   <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                         <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${row.img})` }}></div>
                            <span className="font-semibold">{row.name}</span>
                         </div>
                      </td>
                      <td className="px-6 py-4 text-text-secondary">{row.id}</td>
                      <td className="px-6 py-4 text-text-secondary">{row.date}</td>
                      <td className="px-6 py-4 text-text-secondary">{row.loc}</td>
                      <td className="px-6 py-4 text-right">
                         <div className="flex justify-end gap-2">
                            <button className="h-9 w-9 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500 flex items-center justify-center hover:bg-red-500/20">
                               <span className="material-symbols-outlined text-lg">close</span>
                            </button>
                            <button className="h-9 w-9 rounded-lg bg-primary text-background-dark flex items-center justify-center hover:bg-primary-hover">
                               <span className="material-symbols-outlined text-lg">check</span>
                            </button>
                         </div>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </Layout>
  );
};

export default AdminDashboard;
