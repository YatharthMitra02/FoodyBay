import React, { useState } from 'react';
import "../style/main.css";


const PartnerLogout = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === 'light') {
      document.body.style.backgroundColor = 'var(--dark-bg-color)';
      document.body.style.color = 'var(--dark-text-color)';
      setTheme('dark');
    } else {
      document.body.style.backgroundColor = 'var(--bg-color)';
      document.body.style.color = 'var(--text-color)';
      setTheme('light');
    }
  };

  return (
    <div className="container">
      <button className="toggle-theme" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <div className="card">
        <h1>Food Partner Logout</h1>
        <p>You have been successfully logged out.</p>
        <button>Go to Login</button>
      </div>
    </div>
  );
};

export default PartnerLogout;
