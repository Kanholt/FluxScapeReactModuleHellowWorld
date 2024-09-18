// src/MyCustomComponent.jsx
import React from 'react';

const MyCustomComponent = ({ text, onClick }) => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {text || 'Default Text'}
    </div>
  );
};

export default MyCustomComponent;
