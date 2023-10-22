// FireflyCursor.js
import React, { useState, useEffect } from 'react';
import './FireflyCursor.css';

const FireflyCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div className="firefly-cursor" style={{ left: position.x, top: position.y }} />;
};

export default FireflyCursor;
