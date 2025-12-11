import React from 'react';
import Layout from '../components/Layout';

const Rewards = () => {
  return (
    <Layout title="Rewards Marketplace" subtitle="Redeem your Eco Points for exciting rewards." role="User">
      {/* Balance Card */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-2xl p-8 mb-8 text-white flex flex-col md:flex-row justify-between items-center shadow-lg shadow-green-900/20">
        <div>
          <h2 className="text-sm font-medium opacity-90 mb-1">Available Balance</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black tracking-tight">1,250</span>
            <span className="text-xl font-medium">Points</span>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex gap-4">
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl font-bold transition-all border border-white/10">
             History
          </button>
          <button className="bg-white text-green-800 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-all">
             Earn More
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {['All Rewards', 'Gift Cards', 'Donations', 'Lifestyle', 'Electronics'].map((cat, i) => (
          <button 
            key={cat}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              i === 0 
                ? 'bg-primary text-background-dark' 
                : 'bg-background-card border border-border-dark text-text-secondary hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
         {[
           { title: '$10 Amazon Gift Card', cost: 1000, icon: 'shopping_cart', color: 'bg-orange-500' },
           { title: 'Plant 5 Trees', cost: 500, icon: 'forest', color: 'bg-green-600' },
           { title: '$25 Grocery Voucher', cost: 2400, icon: 'shopping_basket', color: 'bg-blue-500' },
           { title: 'Cinema Tickets (x2)', cost: 1800, icon: 'movie', color: 'bg-purple-500' },
           { title: 'Coffee Shop Credit', cost: 800, icon: 'coffee', color: 'bg-amber-700' },
           { title: 'Donate to Ocean Clean', cost: 1200, icon: 'waves', color: 'bg-cyan-600' },
           { title: 'EcoCycle Merch Kit', cost: 3000, icon: 'checkroom', color: 'bg-pink-600' },
           { title: 'Premium App Features', cost: 5000, icon: 'diamond', color: 'bg-indigo-500' },
         ].map((reward, i) => (
           <div key={i} className="bg-background-card border border-border-dark rounded-xl overflow-hidden hover:border-primary/50 transition-colors group flex flex-col">
              <div className={`h-32 ${reward.color} flex items-center justify-center text-white/90`}>
                 <span className="material-symbols-outlined text-6xl group-hover:scale-110 transition-transform">{reward.icon}</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                 <h3 className="font-bold text-white text-lg mb-1">{reward.title}</h3>
                 <p className="text-primary font-bold text-sm mb-4">{reward.cost} Points</p>
                 <button className="w-full mt-auto py-2 rounded-lg bg-white/5 text-white font-medium hover:bg-primary hover:text-background-dark transition-colors border border-white/10 hover:border-transparent">
                    Redeem
                 </button>
              </div>
           </div>
         ))}
      </div>

      {/* History Table */}
      <div className="bg-background-card border border-border-dark rounded-xl overflow-hidden">
        <div className="p-6 border-b border-border-dark">
          <h3 className="text-lg font-bold text-white">Recent Activity</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-text-secondary">
              <tr>
                <th className="px-6 py-4 font-medium">Description</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-right">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark text-white">
              {[
                { desc: 'Recycled Old Laptop', date: 'Oct 24, 2024', points: '+500', type: 'earn' },
                { desc: 'Redeemed Tree Planting', date: 'Oct 20, 2024', points: '-500', type: 'spend' },
                { desc: 'Recycled Mobile Phone', date: 'Oct 15, 2024', points: '+250', type: 'earn' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">{row.desc}</td>
                  <td className="px-6 py-4 text-text-secondary">{row.date}</td>
                  <td className={`px-6 py-4 text-right font-bold ${row.type === 'earn' ? 'text-primary' : 'text-red-400'}`}>
                    {row.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Rewards;