import React from 'react';

const BusList = ({ buses }) => {
  return (
    <div>
      <h2>Available Buses</h2>
      <ul>
        {buses.map((bus) => (
          bus.seats!==0 && <li key={bus.id}>
            {bus.name} - {bus.seats} seats
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusList;
