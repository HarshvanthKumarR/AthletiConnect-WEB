import React from 'react';

export default function Login({ handleLogin }) {
  const icons = ['fa-futbol', 'fa-basketball-ball', 'fa-football-ball', 'fa-volleyball-ball', 'fa-table-tennis', 'fa-baseball-ball', 'fa-golf-ball', 'fa-running', 'fa-swimmer', 'fa-dumbbell', 'fa-biking', 'fa-skating'];
  
  // Generate a widely spaced 8x5 grid (40 items total) across the viewport
  const backgroundGrid = [];
  for(let row = 0; row < 5; row++) {
    for(let col = 0; col < 8; col++) {
      backgroundGrid.push({ row, col });
    }
  }

  return (
    <div className="page-fullscreen" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Refined Grid-Based Animated Background */}
      <div className="login-bg">
        {backgroundGrid.map((cell, i) => (
          <i key={i} className={`fas ${icons[i % icons.length]} sports-icon`} style={{
            left: `${(cell.col * 12.5) + (Math.random() * 4)}vw`,
            top: `${(cell.row * 20) + (Math.random() * 4)}vh`,
            animationDuration: `${12 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}></i>
        ))}
      </div>
      
      {/* Login Card */}
      <div className="card login-box">
        <h1 className="logo" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>AthletiConnect</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Your new sports community.</p>
        <button onClick={handleLogin} style={{ width: '100%', justifyContent: 'center', padding: '0.8rem' }}>
          <i className="fab fa-google"></i> Login with Google
        </button>
      </div>
    </div>
  );
}
