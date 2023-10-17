import React, { useState } from 'react';

const ReservationForm = ({ buses, updateBuses }) => {
  const [selectedBus, setSelectedBus] = useState('');
  const [passengerName, setPassengerName] = useState('');

  const handleBusChange = (event) => {
    setSelectedBus(event.target.value);
  };

  const handleNameChange = (event) => {
    setPassengerName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedBus || !passengerName) {
      alert('Please select a bus and provide your name.');
      return;
    }

    const selectedBusObj = buses.find((bus) => bus.name === selectedBus);

    if (!selectedBusObj || selectedBusObj.seats === 0) {
      alert('No seats available for the selected bus.');
      return;
    }

    const updatedBuses = buses.map((bus) =>
      bus.name === selectedBus ? { ...bus, seats: bus.seats - 1 } : bus
    );

    if(window.confirm("confirm and pay the fare")){
        updateBuses(updatedBuses);
    
        alert(`Reservation made for ${passengerName} on ${selectedBus}`);
    
        // Log the reservation details
        console.log(`Reservation made for ${passengerName} on ${selectedBus}`);
    
        // Reset form fields
        setSelectedBus('');
        setPassengerName('');
    }
    else{
        alert("Reservation failed");
    }

  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Bus:
          <select value={selectedBus} onChange={handleBusChange}>
            <option value="">Select a bus</option>
            {buses.map((bus) => (
              <option key={bus.id} value={bus.name}>
                {bus.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Passenger Name:
          <input type="text" value={passengerName} onChange={handleNameChange} />
        </label>
        <br />
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
