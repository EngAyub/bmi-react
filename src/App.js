import React, { useState } from 'react';

const BmiCalculator = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [mass, setMass] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (height && mass) {
      const heightInMeters = height / 100;
      const bmiResult = (mass / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiResult);
    }
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Mass (kg):</label>
        <input type="number" value={mass} onChange={(e) => setMass(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div>
          <h3>Results:</h3>
          <p>Name: {name}</p>
          <p>Height: {height} cm</p>
          <p>Mass: {mass} kg</p>
          <p>BMI: {bmi}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
