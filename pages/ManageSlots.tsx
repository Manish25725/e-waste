import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { api, Slot } from '../services/api';

const ManageSlots = () => {
  const [selectedDate, setSelectedDate] = useState(4);
  const [view, setView] = useState('Month');
  
  // State for API data
  const [loading, setLoading] = useState(true);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [indicators, setIndicators] = useState<Record<number, { hasAvailable: boolean; hasBooked: boolean }>>({});

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Fetch data on mount and date change
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [slotsData, indicatorsData] = await Promise.all([
          api.getSlots(selectedDate),
          api.getSlotIndicators()
        ]);
        setSlots(slotsData);
        setIndicators(indicatorsData as any);
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedDate]);

  const handleDelete = async (id: number) => {
      await api.deleteSlot(id);
      // Refresh local state
      setSlots(prev => prev.filter(s => s.id !== id));
  };

  return (
    <Layout title="" role="Agency">
      <div className="flex flex-col lg:flex-row gap-8 -mt-6">
        {/* Main Calendar Area */}
        <div className="w-full lg:flex-[2]">
          
          {/* Custom Page Header */}
          <div className="flex flex-wrap justify-between gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Manage Slots</h1>
              <p className="text-slate-400 text-base font-normal leading-normal">Select a date to view and manage pickup time slots.</p>
            </div>
            <button className="flex items-center justify-center h-12 px-6 text-base font-bold leading-normal transition-all bg-[#34D399] text-[#0B1120] rounded-full min-w-[84px] max-w-[480px] hover:bg-[#6EE7B7] hover:scale-105 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              <span className="material-symbols-outlined mr-2">add</span>
              <span className="truncate">Add New Slot</span>
            </button>
          </div>

          {/* View Controls */}
          <div className="flex px-0 py-3 mb-4 items-center justify-between gap-4">
            <div className="flex h-10 w-full md:w-auto items-center justify-center rounded-lg bg-[#1E293B] border border-white/5 p-1">
              {['Month', 'Week', 'Day'].map((v) => (
                <label key={v} className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-4 text-sm font-medium leading-normal transition-all ${view === v ? 'bg-[#0B1120] text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>
                  <span className="truncate">{v}</span>
                  <input 
                    type="radio" 
                    name="view-toggle" 
                    value={v} 
                    checked={view === v} 
                    onChange={() => setView(v)} 
                    className="invisible w-0 absolute"
                  />
                </label>
              ))}
            </div>
            <button className="flex items-center justify-center h-10 px-4 text-sm font-medium leading-normal transition-colors bg-[#34D399] text-[#0B1120] rounded-lg min-w-[84px] hover:bg-[#6EE7B7]">
              <span className="material-symbols-outlined mr-2 fill text-lg">today</span>
              <span className="truncate">Today's Slots</span>
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="p-4 bg-[#1E293B] border border-white/5 rounded-2xl shadow-xl">
            <div className="flex flex-col w-full">
              {/* Calendar Nav */}
              <div className="flex items-center justify-between p-1 mb-2">
                <button className="flex items-center justify-center text-slate-300 size-10 rounded-full hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <p className="text-white text-lg font-bold leading-tight flex-1 text-center">October 2024</p>
                <button className="flex items-center justify-center text-slate-300 size-10 rounded-full hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>

              {/* Days Header */}
              <div className="grid grid-cols-7 gap-1">
                {weekDays.map(d => (
                  <p key={d} className="flex items-center justify-center h-12 text-[13px] font-bold tracking-[0.015em] text-slate-500">{d}</p>
                ))}

                {/* Date Cells */}
                {days.map((day, i) => {
                  const selected = selectedDate === day;
                  const cellClass = i === 0 ? "col-start-3 p-1" : "p-1";
                  const indicator = indicators[day];
                  
                  return (
                    <div key={day} className={cellClass}>
                      <button 
                        onClick={() => setSelectedDate(day)}
                        className={`relative flex flex-col justify-start items-center w-full h-24 text-sm font-medium leading-normal rounded-xl p-2 transition-all duration-200
                          ${selected 
                            ? 'bg-[#34D399]/10 text-white border-2 border-[#34D399]' 
                            : 'bg-[#0B1120] border border-white/5 text-slate-300 hover:bg-[#252f3f]'
                          }
                        `}
                      >
                        <span className={`font-semibold ${selected ? 'text-[#34D399]' : ''}`}>{day}</span>
                        {/* Indicators from API */}
                        {indicator?.hasAvailable && (
                           <div className="w-1.5 h-1.5 bg-[#34D399] rounded-full mt-1.5 shadow-[0_0_8px_rgba(52,211,153,0.5)]" title="Slots Available"></div>
                        )}
                        {indicator?.hasBooked && (
                           <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shadow-[0_0_8px_rgba(96,165,250,0.5)]" title="Fully Booked"></div>
                        )}
                      </button>
                    </div>
                  );
                })}

                {/* Next month placeholders */}
                <div className="p-1">
                  <button className="relative flex flex-col justify-start items-center w-full h-24 text-slate-700 text-sm font-medium leading-normal bg-[#0B1120]/50 rounded-xl p-2 cursor-default">
                    <span className="font-semibold">1</span>
                  </button>
                </div>
                <div className="p-1">
                  <button className="relative flex flex-col justify-start items-center w-full h-24 text-slate-700 text-sm font-medium leading-normal bg-[#0B1120]/50 rounded-xl p-2 cursor-default">
                    <span className="font-semibold">2</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Schedule Panel */}
        <div className="w-full lg:flex-1 bg-[#1E293B] border border-white/5 rounded-2xl p-6 self-start lg:sticky lg:top-6 min-h-[500px] shadow-xl">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-white/5">
            Schedule for Oct {selectedDate}, 2024
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            
            {loading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-slate-500">
                    <span className="material-symbols-outlined animate-spin text-3xl text-[#34D399]">progress_activity</span>
                    <p>Loading slots...</p>
                </div>
            ) : slots.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-slate-500 border-2 border-dashed border-white/10 rounded-xl">
                    <span className="material-symbols-outlined text-4xl opacity-50">event_busy</span>
                    <p>No slots configured for this date.</p>
                </div>
            ) : (
                slots.map(slot => (
                    <div 
                        key={slot.id} 
                        className={`flex items-center justify-between p-4 rounded-xl border transition-colors group
                            ${slot.status === 'Available' ? 'bg-[#34D399]/5 border-[#34D399]/10 hover:border-[#34D399]/30' : ''}
                            ${slot.status === 'Booked' ? 'bg-blue-500/5 border-blue-500/10 hover:border-blue-500/30' : ''}
                            ${slot.status === 'Unavailable' ? 'bg-[#0B1120]/50 border-white/5' : ''}
                        `}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-1.5 h-10 rounded-full
                                ${slot.status === 'Available' ? 'bg-[#34D399]' : ''}
                                ${slot.status === 'Booked' ? 'bg-blue-400' : ''}
                                ${slot.status === 'Unavailable' ? 'bg-slate-700' : ''}
                            `}></div>
                            <div className="flex flex-col">
                                <p className="text-base font-bold text-white">{slot.startTime} - {slot.endTime}</p>
                                <p className={`text-sm font-medium
                                    ${slot.status === 'Available' ? 'text-[#34D399]' : ''}
                                    ${slot.status === 'Booked' ? 'text-blue-400' : ''}
                                    ${slot.status === 'Unavailable' ? 'text-slate-500' : ''}
                                `}>
                                    {slot.status === 'Booked' ? `Booked - ${slot.bookedBy}` : slot.status}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {slot.status === 'Booked' ? (
                                <button className="text-slate-400 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">visibility</span>
                                </button>
                            ) : (
                                <>
                                    <button className="text-slate-400 hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">edit</span>
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(slot.id)}
                                        className="text-slate-400 hover:text-red-400 transition-colors"
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))
            )}

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageSlots;