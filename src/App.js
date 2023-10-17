import React, { useState, useEffect } from 'react';
import BusList from './BusList';
import ReservationForm from './ReservationForm';
import './styling.css'

function App() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Load buses from local storage on component mount
    const storedBuses = JSON.parse(localStorage.getItem('buses')) || getDefaultBuses();
    setBuses(storedBuses);
  }, []);

  const updateBuses = (newBuses) => {
    // Update state and local storage with new bus data
    setBuses(newBuses);
    localStorage.setItem('buses', JSON.stringify(newBuses));
  };

  const getDefaultBuses = () => [
    { id: 1, name: 'Bus A', seats: 30 },
    { id: 2, name: 'Bus B', seats: 40 },
    { id: 3, name: 'Bus C', seats: 25 }
  ];

  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>Your Bus! Our safee..ty!</h1>
      <BusList buses={buses} updateBuses={updateBuses} />
      <ReservationForm buses={buses} updateBuses={updateBuses} />
      <br />
      <button
        onClick={() => {
          const reservations = JSON.parse(localStorage.getItem('buses')) || [];
          console.log('Reservations:', reservations);
        }}
      >
        View Reservations
      </button>
    </div>
  );
}

export default App;
