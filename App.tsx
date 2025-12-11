import React, { useState, useEffect } from 'react';
import AgencyAnalytics from './pages/AgencyAnalytics';
import ManageSlots from './pages/ManageSlots';
import AgencyBookings from './pages/AgencyBookings';
import AgencyProfile from './pages/AgencyProfile';
import UserDashboard from './pages/UserDashboard';
import Certificate from './pages/Certificate';
import SearchAgencies from './pages/SearchAgencies';
import SchedulePickup from './pages/SchedulePickup';
import AdminDashboard from './pages/AdminDashboard';
import Landing from './pages/Landing';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import HowItWorks from './pages/HowItWorks';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import Rewards from './pages/Rewards';

const App = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderRoute = () => {
    switch (route) {
      case '#/agency':
        return <AgencyAnalytics />;
      case '#/agency/slots':
        return <ManageSlots />;
      case '#/agency/bookings':
        return <AgencyBookings />;
      case '#/agency/profile':
        return <AgencyProfile />;
      case '#/dashboard':
        return <UserDashboard />;
      case '#/rewards':
        return <Rewards />;
      case '#/certificate':
        return <Certificate />;
      case '#/search':
        return <SearchAgencies />;
      case '#/schedule':
        return <SchedulePickup />;
      case '#/admin':
        return <AdminDashboard />;
      case '#/login':
        return <Login />;
      case '#/contact':
        return <ContactUs />;
      case '#/how-it-works':
        return <HowItWorks />;
      case '#/about':
        return <AboutUs />;
      case '#/profile':
        return <Profile />;
      case '#/':
      default:
        return <Landing />;
    }
  };

  return (
    <>
      {renderRoute()}
    </>
  );
};

export default App;