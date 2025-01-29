import React from 'react';
import './RotatedProgressSpinner.css';

const RotatedProgressSpinner = () => {
  return (
    <svg
      className="rotated-progress-spinner"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="rotated-progress-spinner-path"
        cx="20"
        cy="20"
        r="18"
        fill="none"
        strokeWidth="4"
        stroke="#3498db"
      />
    </svg>
  );
};

export default RotatedProgressSpinner;
