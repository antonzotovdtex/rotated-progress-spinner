import React from 'react';
import './App.css';
import RotatedProgressSpinner from './RotatedProgressSpinner';

const App = () => {
  return (
    <div className="app-container">
      <div className="spinner-wrapper">
        <RotatedProgressSpinner />
      </div>
    </div>
  );
};

export default App;
