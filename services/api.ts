// Configuration
const API_BASE_URL = 'http://localhost:3001/api';
// Set this to false to force real API calls. 
// Set to true to use internal mock data (useful for frontend preview without running server).
const USE_MOCK_FALLBACK = true; 

// Types
export interface Slot {
  id: number;
  date: number;
  startTime: string;
  endTime: string;
  status: 'Available' | 'Booked' | 'Unavailable';
  bookedBy?: string | null;
}

export interface AnalyticsData {
  kpi: any[];
  charts: {
    trends: any[];
    breakdown: any[];
  };
  leaderboard: any[];
}

// --- MOCK DATA STORE (Fallback) ---
const MOCK_ANALYTICS: AnalyticsData = {
  kpi: [
    { icon: 'scale', title: 'Total E-Waste Collected', value: '1,250 kg', trend: '+15.2%', positive: true },
    { icon: 'book_online', title: 'Bookings this Month', value: '312', trend: '+8.5%', positive: true },
    { icon: 'smartphone', title: 'Top Performing Category', value: 'Smartphones', trend: '-2.1%', positive: false },
  ],
  charts: {
    trends: [
      { name: '1', value: 20 }, { name: '4', value: 25 }, { name: '7', value: 40 }, 
      { name: '10', value: 48 }, { name: '13', value: 60 }, { name: '16', value: 68 },
      { name: '19', value: 75 }, { name: '22', value: 90 }, { name: '25', value: 105 }, 
      { name: '28', value: 115 }
    ],
    breakdown: [
      { name: 'Smartphones', value: 35, color: '#34D399' },
      { name: 'Laptops', value: 25, color: '#3B82F6' },
      { name: 'Batteries', value: 15, color: '#A855F7' },
      { name: 'Appliances', value: 15, color: '#EC4899' },
      { name: 'Cables', value: 10, color: '#F97316' },
    ]
  },
  leaderboard: [
    { rank: 1, name: 'GreenLeaf Recyclers', waste: 450.5, bookings: 102, score: 95 },
    { rank: 2, name: 'EcoCycle Inc. (You)', waste: 312.0, bookings: 88, score: 82, active: true },
    { rank: 3, name: 'Re-Tech Solutions', waste: 280.2, bookings: 75, score: 76 },
  ]
};

const MOCK_SLOTS: Slot[] = [
  { id: 1, date: 4, startTime: '09:00 AM', endTime: '11:00 AM', status: 'Available', bookedBy: null },
  { id: 2, date: 4, startTime: '11:00 AM', endTime: '01:00 PM', status: 'Booked', bookedBy: 'John Doe' },
  { id: 3, date: 4, startTime: '02:00 PM', endTime: '04:00 PM', status: 'Available', bookedBy: null },
  { id: 4, date: 4, startTime: '04:00 PM', endTime: '06:00 PM', status: 'Unavailable', bookedBy: null },
  { id: 5, date: 1, startTime: '09:00 AM', endTime: '10:00 AM', status: 'Available', bookedBy: null },
  { id: 6, date: 3, startTime: '09:00 AM', endTime: '10:00 AM', status: 'Booked', bookedBy: 'Jane Smith' },
  { id: 10, date: 6, startTime: '09:00 AM', endTime: '10:00 AM', status: 'Available', bookedBy: null },
  { id: 11, date: 8, startTime: '09:00 AM', endTime: '10:00 AM', status: 'Booked', bookedBy: null },
  { id: 12, date: 10, startTime: '09:00 AM', endTime: '10:00 AM', status: 'Available', bookedBy: null },
  { id: 13, date: 11, startTime: '09:00 AM', endTime: '10:00 AM', status: 'Booked', bookedBy: null },
  { id: 14, date: 15, startTime: '09:00 AM', endTime: '10:00 AM', status: 'Available', bookedBy: null },
  { id: 15, date: 18, startTime: '09:00 AM', endTime: '10:00 AM', status: 'Booked', bookedBy: null },
  { id: 16, date: 22, startTime: '09:00 AM', endTime: '10:00 AM', status: 'Available', bookedBy: null },
  { id: 17, date: 25, startTime: '09:00 AM', endTime: '10:00 AM', status: 'Booked', bookedBy: null },
];

// --- HELPER ---
async function fetchWithFallback<T>(endpoint: string, mockData: T): Promise<T> {
  if (USE_MOCK_FALLBACK) {
    // Simulate network delay
    return new Promise((resolve) => setTimeout(() => resolve(mockData), 600));
  }

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (error) {
    console.warn(`API Error on ${endpoint}, falling back to mock data.`, error);
    return mockData;
  }
}

// --- API METHODS ---

export const api = {
  getAnalytics: () => fetchWithFallback<AnalyticsData>('/analytics', MOCK_ANALYTICS),

  getSlots: async (date?: number) => {
    let mock = MOCK_SLOTS;
    if (date) {
        mock = MOCK_SLOTS.filter(s => s.date === date);
    }
    return fetchWithFallback<Slot[]>(`/slots${date ? `?date=${date}` : ''}`, mock);
  },

  getSlotIndicators: async () => {
    const indicators = MOCK_SLOTS.reduce((acc: any, slot) => {
        if (!acc[slot.date]) acc[slot.date] = { hasAvailable: false, hasBooked: false };
        if (slot.status === 'Available') acc[slot.date].hasAvailable = true;
        if (slot.status === 'Booked') acc[slot.date].hasBooked = true;
        return acc;
    }, {});
    return fetchWithFallback('/slots/indicators', indicators);
  },

  deleteSlot: async (id: number) => {
      // Mock deletion
      const index = MOCK_SLOTS.findIndex(s => s.id === id);
      if (index > -1) MOCK_SLOTS.splice(index, 1);
      
      if(USE_MOCK_FALLBACK) return new Promise(resolve => setTimeout(resolve, 300));

      try {
          await fetch(`${API_BASE_URL}/slots/${id}`, { method: 'DELETE' });
      } catch (e) { console.error(e); }
  }
};