// src/components/CountdownOverlay.jsx
import React from 'react';

const CountdownOverlay = ({ countdown }) => {
    if (countdown <= 0) return null;

    return (
        <div className="countdown-overlay">
            <div className="countdown-number">{countdown}</div>
        </div>
    );
};

export default CountdownOverlay;