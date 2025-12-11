import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { api, AnalyticsData } from '../services/api';

const AgencyAnalytics = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
        try {
            const res = await api.getAnalytics();
            setData(res);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };
    loadData();
  }, []);

  if (loading || !data) {
      return (
          <Layout title="Agency Analytics Dashboard" subtitle="Key operational metrics for your agency." role="Agency">
             <div className="flex h-[60vh] items-center justify-center text-text-secondary gap-3">
                 <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
                 <p className="text-lg">Loading analytics...</p>
             </div>
          </Layout>
      );
  }

  return (
    <Layout title="Agency Analytics Dashboard" subtitle="Key operational metrics for your agency." role="Agency">
      {/* Date Filter */}
      <div className="flex justify-end gap-2 mb-8 -mt-14">
         <button className="px-4 py-2 rounded-lg bg-background-card border border-border-dark text-sm font-medium hover:bg-white/5">Last 7 Days</button>
         <button className="px-4 py-2 rounded-lg bg-primary text-background-dark text-sm font-bold">Last 30 Days</button>
         <button className="px-4 py-2 rounded-lg bg-background-card border border-border-dark text-sm font-medium hover:bg-white/5">Year-to-Date</button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {data.kpi.map((card, idx) => (
          <div key={idx} className="bg-background-card border border-border-dark p-6 rounded-xl flex gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">{card.icon}</span>
            </div>
            <div>
              <p className="text-sm text-text-secondary font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
              <div className={`flex items-center gap-1 text-sm mt-1 ${card.positive ? 'text-green-500' : 'text-red-500'}`}>
                <span className="material-symbols-outlined text-sm">{card.positive ? 'arrow_upward' : 'arrow_downward'}</span>
                <span>{card.trend} vs. last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
        <div className="lg:col-span-3 bg-background-card border border-border-dark p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-1">Collection Trends</h3>
          <p className="text-sm text-text-secondary mb-6">Amount of e-waste collected over the last 30 days.</p>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.charts.trends}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1E293B', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="value" stroke="#34D399" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#34D399' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2 bg-background-card border border-border-dark p-6 rounded-xl flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-1">E-Waste Breakdown</h3>
          <p className="text-sm text-text-secondary mb-6">Proportion of different categories.</p>
          <div className="flex-1 min-h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.charts.breakdown}
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.charts.breakdown.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1E293B', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
           <div className="flex flex-wrap justify-center gap-3 mt-4">
              {data.charts.breakdown.map((entry: any) => (
                  <div key={entry.name} className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color}}></div>
                      <span className="text-text-secondary">{entry.name}</span>
                  </div>
              ))}
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-background-card border border-border-dark rounded-xl overflow-hidden">
        <div className="p-6 border-b border-border-dark">
          <h3 className="text-lg font-semibold text-white">Agency Performance Leaderboard</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-text-secondary font-medium">
              <tr>
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">Agency</th>
                <th className="px-6 py-4">Waste Collected (kg)</th>
                <th className="px-6 py-4">Completed Bookings</th>
                <th className="px-6 py-4">Performance Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark text-white">
               {data.leaderboard.map((row) => (
                 <tr key={row.rank} className={row.active ? 'bg-primary/10' : ''}>
                   <td className="px-6 py-4 font-medium">{row.rank}</td>
                   <td className={`px-6 py-4 font-medium ${row.active ? 'text-primary' : ''}`}>{row.name}</td>
                   <td className="px-6 py-4 text-text-secondary">{row.waste}</td>
                   <td className="px-6 py-4 text-text-secondary">{row.bookings}</td>
                   <td className="px-6 py-4">
                     <div className="w-full bg-white/10 rounded-full h-2">
                       <div className="bg-primary h-2 rounded-full" style={{ width: `${row.score}%` }}></div>
                     </div>
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

export default AgencyAnalytics;