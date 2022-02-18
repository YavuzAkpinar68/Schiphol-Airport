import React from 'react';
import ReservationProvider from './context/ReservationProvider';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <ReservationProvider>
      <Navigation />
    </ReservationProvider>
  )
}

export default App;
