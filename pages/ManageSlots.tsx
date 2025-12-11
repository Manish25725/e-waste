import React, { useState } from 'react';
import Layout from '../components/Layout';

const ManageSlots = () => {
  const [selectedDate, setSelectedDate] = useState(4);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Mock data logic
  const hasSlot = (day: number) => [1, 4, 6, 11, 15, 22].includes(day);
  const hasBooked = (day: number) => [3, 8, 12, 18, 25].includes(day);

  return (
    <Layout title="Manage Slots" subtitle="Select a date to view and manage pickup time slots." role="Agency">
      <div className="flex justify-end mb-8 -mt-14">
        <button className="flex items-center gap-2 bg-primary text-background-dark px-6 py-3 rounded-lg font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">add</span>
          Add New Slot
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:flex-[2]">
          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex bg-background-card border border-border-dark rounded-lg p-1">
              {['Month', 'Week', 'Day'].map((v, i) => (
                <button key={v} className={`px-4 py-1.5 rounded-md text-sm font-medium ${i === 0 ? 'bg-background-dark text-white' : 'text-text-secondary hover:text-white'}`}>
                  {v}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 bg-primary text-background-dark px-4 py-2 rounded-lg text-sm font-bold">
              <span className="material-symbols-outlined text-lg">today</span>
              Today's Slots
            </button>
          </div>

          {/* Calendar */}
          <div className="bg-background-card border border-border-dark rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
               <button className="p-2 hover:bg-white/5 rounded-full"><span className="material-symbols-outlined">chevron_left</span></button>
               <h2 className="text-lg font-bold">October 2024</h2>
               <button className="p-2 hover:bg-white/5 rounded-full"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {weekDays.map(d => (
                <div key={d} className="text-center text-xs font-bold text-text-secondary py-4 tracking-wider">{d}</div>
              ))}
              
              {/* Empty cells for offset */}
              <div className="col-span-2"></div>

              {days.map(day => {
                const isSelected = selectedDate === day;
                return (
                  <button 
                    key={day} 
                    onClick={() => setSelectedDate(day)}
                    className={`
                      aspect-[4/3] rounded-lg p-2 flex flex-col items-center justify-start gap-1 transition-all relative border
                      ${isSelected 
                        ? 'bg-primary/20 border-primary ring-2 ring-primary/20 z-10' 
                        : 'bg-background-dark border-transparent hover:bg-white/5'
                      }
                    `}
                  >
                    <span className={`text-sm font-semibold ${isSelected ? 'text-primary' : 'text-white'}`}>{day}</span>
                    <div className="flex gap-1 mt-1">
                      {hasSlot(day) && <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>}
                      {hasBooked(day) && <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Side Panel Details */}
        <div className="lg:flex-1">
          <div className="bg-background-card border border-border-dark rounded-xl p-6 h-full">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b border-border-dark">Schedule for Oct {selectedDate}, 2024</h3>
            
            <div className="flex flex-col gap-4">
              {/* Available */}
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex justify-between items-center group">
                 <div className="flex gap-4 items-center">
                    <div className="w-1.5 self-stretch bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-bold text-white">09:00 AM - 11:00 AM</p>
                      <p className="text-sm text-green-400 font-medium">Available</p>
                    </div>
                 </div>
                 <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 hover:text-white text-text-secondary"><span className="material-symbols-outlined text-lg">edit</span></button>
                    <button className="p-1 hover:text-red-400 text-text-secondary"><span className="material-symbols-outlined text-lg">delete</span></button>
                 </div>
              </div>

              {/* Booked */}
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex justify-between items-center">
                 <div className="flex gap-4 items-center">
                    <div className="w-1.5 self-stretch bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-bold text-white">11:00 AM - 01:00 PM</p>
                      <p className="text-sm text-blue-400 font-medium">Booked - John Doe</p>
                    </div>
                 </div>
                 <button className="p-1 hover:text-white text-text-secondary"><span className="material-symbols-outlined">visibility</span></button>
              </div>

               {/* Available */}
               <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex justify-between items-center group">
                 <div className="flex gap-4 items-center">
                    <div className="w-1.5 self-stretch bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-bold text-white">02:00 PM - 04:00 PM</p>
                      <p className="text-sm text-green-400 font-medium">Available</p>
                    </div>
                 </div>
                 <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 hover:text-white text-text-secondary"><span className="material-symbols-outlined text-lg">edit</span></button>
                    <button className="p-1 hover:text-red-400 text-text-secondary"><span className="material-symbols-outlined text-lg">delete</span></button>
                 </div>
              </div>

              {/* Unavailable */}
              <div className="p-4 rounded-lg bg-white/5 border border-border-dark flex justify-between items-center opacity-75">
                 <div className="flex gap-4 items-center">
                    <div className="w-1.5 self-stretch bg-gray-500 rounded-full"></div>
                    <div>
                      <p className="font-bold text-white">04:00 PM - 06:00 PM</p>
                      <p className="text-sm text-text-secondary font-medium">Unavailable</p>
                    </div>
                 </div>
                 <button className="p-1 hover:text-white text-text-secondary"><span className="material-symbols-outlined text-lg">edit</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageSlots;
